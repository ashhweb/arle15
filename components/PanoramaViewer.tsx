import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { PanZoomEngine } from "@/engine/PanZoomEngine";
import { useImageAsset } from "@/hooks/useImageAsset";
import type { PinData, SceneConfig } from "@/types";
import { cn } from "@/utils/cn";
import { EdgeArrows } from "./EdgeArrows";
import { ImageFallback, LoadingScreen } from "./LoadingScreen";
import { MiniMap } from "./MiniMap";
import { Pin } from "./Pin";
import { ImagePicture } from "./ProgressiveImage";

export interface PanoramaHandle {
  focusPin: (pin: PinData, zoom?: number) => void;
}

interface Props {
  scene: SceneConfig;
  activePinId?: string | null;
  onPinSelect: (pin: PinData) => void;
  showMiniMap?: boolean;
  miniMapClassName?: string;
  zoomClassName?: string;
  keyboardEnabled?: boolean;
  children?: ReactNode;
}

const zoomBtn =
  "focus-ring glass-light flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-navy-900 transition duration-200 hover:scale-110 hover:bg-white sm:h-10 sm:w-10";

/**
 * Generic panorama viewer used by the city AND every inside view. Everything it shows comes from the
 * SceneConfig: image + pins (+ optional zones). Left/right panning, zoom 1×–3×, pins at constant size.
 */
export const PanoramaViewer = forwardRef<PanoramaHandle, Props>(function PanoramaViewer(
  {
    scene,
    activePinId,
    onPinSelect,
    showMiniMap = true,
    miniMapClassName = "bottom-4 left-4 w-44 sm:w-64",
    zoomClassName = "bottom-4",
    keyboardEnabled = true,
    children,
  },
  ref,
) {
  const engine = useMemo(() => new PanZoomEngine(), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { status, size, retry } = useImageAsset(scene.image);
  const [zone, setZone] = useState<string | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      focusPin: (pin, zoom) => engine.focus(pin.position.x / 100, pin.position.y / 100, zoom),
    }),
    [engine],
  );

  // Bind input handling once.
  useEffect(() => {
    engine.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return engine.bind(containerRef.current!, contentRef.current!);
  }, [engine]);

  // Keep the engine in sync with the viewport and the natural image size.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !size) return;
    const update = () => engine.setSize(el.clientWidth, el.clientHeight, size.width, size.height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [engine, size]);

  // Zone label (city only).
  useEffect(() => {
    if (!scene.zones?.length) return;
    return engine.subscribe((v) => {
      const cx = v.x + v.w / 2;
      const z = scene.zones!.find((zn) => cx >= zn.from && cx < zn.to) ?? scene.zones![scene.zones!.length - 1];
      setZone((prev) => (prev === z.label ? prev : z.label));
    });
  }, [engine, scene.zones]);

  // Left / Right keys pan, +/- zoom.
  useEffect(() => {
    if (!keyboardEnabled) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const step = Math.max(160, engine.viewport.w * 0.18);
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        engine.panBy(step);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        engine.panBy(-step);
      } else if (e.key === "+" || e.key === "=") engine.zoomBy(1.4);
      else if (e.key === "-" || e.key === "_") engine.zoomBy(1 / 1.4);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [engine, keyboardEnabled]);

  return (
    <div className="absolute inset-0 overflow-clip bg-navy-900">
      <div ref={containerRef} className="pan-surface absolute inset-0 overflow-clip" role="region" aria-label={`${scene.name} view`}>
        <div ref={contentRef} className="pan-content absolute left-0 top-0">
          {status === "ready" && (
            <>
              <ImagePicture asset={scene.image} alt={scene.image.alt} />
              {scene.sections.map((pin) => (
                <Pin key={pin.id} pin={pin} active={activePinId === pin.id} onSelect={onPinSelect} />
              ))}
            </>
          )}
        </div>
      </div>

      {children}

      {status === "ready" && size && (
        <>
          <EdgeArrows engine={engine} />
          {zone && (
            <p className="glass pointer-events-none absolute left-1/2 top-4 z-20 hidden -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 sm:block">
              {zone}
            </p>
          )}
          {showMiniMap && (
            <MiniMap
              engine={engine}
              image={scene.image}
              pins={scene.sections}
              aspect={size.width / size.height}
              className={cn("absolute z-30", miniMapClassName)}
            />
          )}
          <div className={cn("absolute right-3 z-30 flex flex-col gap-2 sm:right-4", zoomClassName)}>
            <button type="button" aria-label="Zoom in" onClick={() => engine.zoomBy(1.4)} className={zoomBtn}>
              <Plus className="h-[18px] w-[18px]" aria-hidden />
            </button>
            <button type="button" aria-label="Zoom out" onClick={() => engine.zoomBy(1 / 1.4)} className={zoomBtn}>
              <Minus className="h-[18px] w-[18px]" aria-hidden />
            </button>
          </div>
        </>
      )}

      <AnimatePresence>{status === "loading" && <LoadingScreen key="loading" />}</AnimatePresence>
      {status === "error" && <ImageFallback onRetry={retry} />}
    </div>
  );
});
