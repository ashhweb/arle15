import type { PinData } from "@/types";
import { cn } from "@/utils/cn";

interface Props {
  pin: PinData;
  active?: boolean;
  onSelect: (pin: PinData) => void;
}

/**
 * One map pin. It lives inside the scaled panorama content and counter-scales with --inv, so it keeps
 * a constant on-screen size while the image zooms. The anchor (left/top in image %) is the pin TIP.
 */
export function Pin({ pin, active, onSelect }: Props) {
  const Icon = pin.icon;
  const placement = pin.labelPlacement ?? "above";

  const label = (
    <span
      className={cn(
        "pointer-events-none whitespace-nowrap rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium leading-none text-navy-900 shadow-pin backdrop-blur-sm transition",
        active && "bg-gold-gradient font-semibold",
        placement === "above" && "mb-1.5",
        placement === "below" && "absolute left-1/2 top-full mt-1.5 -translate-x-1/2",
        placement === "left" && "absolute right-full top-[20px] mr-1.5 -translate-y-1/2",
        placement === "right" && "absolute left-full top-[20px] ml-1.5 -translate-y-1/2",
      )}
    >
      {pin.name}
    </span>
  );

  return (
    <div
      className="absolute h-0 w-0"
      style={{ left: `${pin.position.x}%`, top: `${pin.position.y}%`, zIndex: active ? 5 : 1 }}
    >
      <button
        type="button"
        onClick={() => onSelect(pin)}
        aria-label={pin.name}
        data-pin-id={pin.id}
        className="focus-ring group absolute bottom-0 left-0 flex cursor-pointer flex-col items-center"
        style={{ transform: "translate(-50%, 0) scale(var(--inv, 1))", transformOrigin: "50% 100%" }}
      >
        {placement === "above" && label}
        <span className="relative flex h-10 w-10 items-center justify-center">
          {active && <span aria-hidden className="absolute inset-0 animate-pin-ping rounded-full bg-gold-300/70" />}
          <span
            aria-hidden
            className="absolute inset-0 animate-pin-pulse rounded-full bg-white/50 motion-reduce:animate-none"
          />
          <span
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] text-navy-900 shadow-pin transition duration-200 group-hover:scale-110",
              active ? "border-gold-300 bg-gold-gradient" : "border-white bg-white/90",
            )}
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden />
          </span>
        </span>
        <span
          aria-hidden
          className={cn("-mt-1.5 h-3 w-3 rotate-45 rounded-[2px] shadow-pin", active ? "bg-gold-400" : "bg-white/90")}
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
        {placement !== "above" && label}
      </button>
    </div>
  );
}
