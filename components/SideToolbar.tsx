import { useState } from "react";
import { Building2, ChevronUp, ShoppingBasket } from "lucide-react";
import { selectCartCount, useCart } from "@/store/cart";
import { cn } from "@/utils/cn";

const btn =
  "focus-ring flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-navy-900 transition duration-200 hover:scale-110 hover:bg-white sm:h-10 sm:w-10";

/** Right vertical glass toolbar: collapse chevron, back-to-city building icon and the cart basket. */
export function SideToolbar({ onBack, backLabel = "Back to city" }: { onBack: () => void; backLabel?: string }) {
  const [collapsed, setCollapsed] = useState(false);
  const openCart = useCart((s) => s.open);
  const count = useCart(selectCartCount);

  return (
    <div className="glass-light absolute right-3 top-3 z-30 flex flex-col items-center gap-1 rounded-full p-1 sm:right-4 sm:top-4">
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand toolbar" : "Collapse toolbar"}
        aria-expanded={!collapsed}
        className={btn}
      >
        <ChevronUp className={cn("h-5 w-5 transition-transform duration-300", collapsed && "rotate-180")} aria-hidden />
      </button>
      {!collapsed && (
        <>
          <button type="button" onClick={onBack} aria-label={backLabel} title={backLabel} className={btn}>
            <Building2 className="h-5 w-5" aria-hidden />
          </button>
          <button type="button" onClick={openCart} aria-label="Open cart" title="Cart" className={cn(btn, "relative")}>
            <ShoppingBasket className="h-5 w-5" aria-hidden />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-gradient px-1 text-[10px] font-bold">
                {count}
              </span>
            )}
          </button>
        </>
      )}
    </div>
  );
}
