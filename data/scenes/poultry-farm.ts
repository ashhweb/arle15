import { ShieldCheck, Warehouse } from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Poultry Farm inside view (isometric aerial). Same structure as poultry-processing.ts / hatchery.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/poultry-farm.webp with a
 * 7680 px wide version, run `node scripts/make-image-derivatives.mjs src/assets/poultry-farm.webp`,
 * and nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin.
 *
 * TWO LAYOUTS are kept side by side so re-aligning is instant:
 *  - `screenshotLayout` = coordinates measured on the reference screenshot (baked pins, 1000×522).
 *  - `standInLayout`    = coordinates for the artwork currently shipped in assets/poultry-farm.*
 * Flip USE_SCREENSHOT_LAYOUT to `true` when assets/poultry-farm.webp is replaced by the
 * reference screenshot (or any image with the same layout). Nothing else changes.
 *
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const USE_SCREENSHOT_LAYOUT = false;

type Pos = { x: number; y: number };

const screenshotLayout: Record<string, Pos> = {
  "broiler-house": { x: 37.5, y: 24.4 },
  "vehicle-bio-security": { x: 73.5, y: 61.6 },
};

const standInLayout: Record<string, Pos> = {
  "broiler-house": { x: 43.8, y: 39.0 },
  "vehicle-bio-security": { x: 65.6, y: 54.5 },
};

const layout = USE_SCREENSHOT_LAYOUT ? screenshotLayout : standInLayout;
const at = (id: string): Pos => layout[id];

const poultryFarm: SceneConfig = {
  id: "poultry-farm",
  name: "Poultry Farm",
  image: images.poultryFarm,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the poultry farm",
  },
  sections: [
    {
      id: "broiler-house",
      name: "Broiler House",
      icon: Warehouse,
      description: "Climate-controlled poultry barns and feed silo complex housing broiler flocks.",
      position: at("broiler-house"),
      status: "coming-soon",
    },
    {
      id: "vehicle-bio-security",
      name: "Vehicle Bio-Security",
      icon: ShieldCheck,
      description: "Biosecurity sanitising checkpoint and gate control for incoming and outgoing farm vehicles.",
      position: at("vehicle-bio-security"),
      status: "coming-soon",
    },
  ],
};

export default poultryFarm;
