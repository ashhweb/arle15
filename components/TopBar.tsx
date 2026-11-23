import { Menu, Search } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/utils/cn";

interface Props {
  variant?: "full" | "compact";
  onMenu: () => void;
  onSearch: () => void;
  onHome?: () => void;
}

const circle =
  "focus-ring glass-light flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-navy-900 transition duration-200 hover:scale-110 hover:bg-white sm:h-10 sm:w-10";

/** Top-left circular menu + search buttons (the full variant also shows the ARLE logo). */
export function TopBar({ variant = "full", onMenu, onSearch, onHome }: Props) {
  return (
    <div className="pointer-events-none absolute left-3 top-3 z-30 flex items-center gap-2 sm:left-4 sm:top-4">
      <button type="button" onClick={onMenu} aria-label="Open menu" className={cn(circle, "pointer-events-auto")}>
        <Menu className="h-[18px] w-[18px]" aria-hidden />
      </button>
      <button type="button" onClick={onSearch} aria-label="Search" className={cn(circle, "pointer-events-auto")}>
        <Search className="h-[18px] w-[18px]" aria-hidden />
      </button>
      {variant === "full" && (
        <button
          type="button"
          onClick={onHome}
          aria-label="Back to the landing page"
          className="focus-ring glass pointer-events-auto ml-1 hidden cursor-pointer items-center rounded-full px-4 py-2 transition hover:bg-white/20 sm:flex"
        >
          <Logo />
        </button>
      )}
    </div>
  );
}
