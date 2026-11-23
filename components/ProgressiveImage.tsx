import { useState } from "react";
import type { ImageAsset } from "@/types";
import { cn } from "@/utils/cn";

/** <picture> with AVIF → WebP → JPEG sources. Never stretched: object-cover keeps the aspect ratio. */
export function ImagePicture({
  asset,
  alt,
  className,
  onLoad,
}: {
  asset: ImageAsset;
  alt?: string;
  className?: string;
  onLoad?: () => void;
}) {
  return (
    <picture>
      {asset.avif && <source type="image/avif" srcSet={asset.avif} />}
      {asset.webp && <source type="image/webp" srcSet={asset.webp} />}
      <img
        src={asset.jpg}
        alt={alt ?? asset.alt}
        decoding="async"
        draggable={false}
        onLoad={onLoad}
        className={cn("absolute inset-0 h-full w-full select-none object-cover", className)}
      />
    </picture>
  );
}

/** Blurred placeholder first, then the full-resolution image fades in on top. */
export function ProgressiveImage({ asset, className }: { asset: ImageAsset; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-navy-900", className)}>
      <img
        src={asset.placeholder}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-xl"
      />
      <ImagePicture
        asset={asset}
        onLoad={() => setLoaded(true)}
        className={cn("transition-opacity duration-700", loaded ? "opacity-100" : "opacity-0")}
      />
    </div>
  );
}
