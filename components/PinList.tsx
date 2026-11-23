import type { PinData } from "@/types";

/** Vertical list of pins – used by the menu drawer and the search panel. */
export function PinList({ pins, onSelect }: { pins: PinData[]; onSelect: (pin: PinData) => void }) {
  return (
    <ul className="space-y-1.5">
      {pins.map((pin) => {
        const Icon = pin.icon;
        return (
          <li key={pin.id}>
            <button
              type="button"
              onClick={() => onSelect(pin)}
              className="focus-ring flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">{pin.name}</span>
                <span className="block truncate text-xs text-white/50">{pin.description}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
