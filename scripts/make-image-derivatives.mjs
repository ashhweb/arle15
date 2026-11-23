/**
 * Builds the optimised siblings of a source JPEG:
 *   <name>.avif      modern format (served first by <picture>)
 *   <name>.webp      optional (pass --webp)
 *   <name>-lqip.jpg  tiny blurred placeholder shown while the full image loads
 *
 * Usage (needs `npm i --no-save sharp`):
 *   node scripts/make-image-derivatives.mjs src/assets/shopping-centre.jpg --webp
 *
 * A .webp master works too:  node scripts/make-image-derivatives.mjs src/assets/bakery.webp
 *   → bakery.avif + bakery.jpg (fallback) + bakery-lqip.jpg
 *
 * To upgrade a scene to 8K: replace the .jpg (e.g. 7680 px wide), run this script on it,
 * done – no code changes. The viewer reads the natural size from the file.
 */
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const withWebp = args.includes("--webp");
const files = args.filter((a) => !a.startsWith("--"));

if (!files.length) {
  console.error("Usage: node scripts/make-image-derivatives.mjs <image.jpg> [--webp]");
  process.exit(1);
}

for (const file of files) {
  const { dir, name, ext } = path.parse(file);
  const isWebp = ext.toLowerCase() === ".webp";
  const out = (suffix) => path.join(dir, `${name}${suffix}`);
  const src = () => sharp(file, { limitInputPixels: false });

  await src().avif({ quality: 58, effort: 5 }).toFile(out(".avif"));
  // A .webp master (e.g. bakery.webp) also gets a JPEG fallback so every browser is covered.
  if (isWebp) await src().jpeg({ quality: 88, mozjpeg: true }).toFile(out(".jpg"));
  if (withWebp && !isWebp) await src().webp({ quality: 80 }).toFile(out(".webp"));
  await src().resize({ width: 48 }).blur(1).jpeg({ quality: 55 }).toFile(out("-lqip.jpg"));
  console.log(`✔ ${file} → .avif${withWebp ? " .webp" : ""} -lqip.jpg`);
}
