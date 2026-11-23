import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useDialogA11y } from "@/hooks/useDialogA11y";
import type { PinData } from "@/types";
import { PinList } from "./PinList";

interface Props {
  open: boolean;
  onClose: () => void;
  pins: PinData[];
  placeholder: string;
  onSelect: (pin: PinData) => void;
}

function SearchInner({ onClose, pins, placeholder, onSelect }: Omit<Props, "open">) {
  const ref = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  useDialogA11y(onClose, ref);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pins;
    return pins.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(q));
  }, [pins, query]);

  return (
    <motion.div
      className="fixed inset-0 z-[55] flex items-start justify-center p-4 pt-[12vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        tabIndex={-1}
        initial={{ opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8 }}
        className="glass-strong relative w-full max-w-lg overflow-hidden rounded-glass outline-none"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <Search className="h-5 w-5 shrink-0 text-gold-300" aria-hidden />
          <input
            data-autofocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/40"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="focus-ring flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white/70 hover:bg-white/10"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="thin-scroll max-h-[55vh] overflow-y-auto p-3">
          {results.length ? (
            <PinList pins={results} onSelect={onSelect} />
          ) : (
            <p className="px-3 py-8 text-center text-sm text-white/50">No results for “{query}”.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Live-filtering search over the pins of the current scene. */
export function SearchPanel({ open, ...rest }: Props) {
  return <AnimatePresence>{open && <SearchInner key="search" {...rest} />}</AnimatePresence>;
}
