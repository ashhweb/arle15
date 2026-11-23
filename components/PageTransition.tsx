import type { ReactNode } from "react";
import { motion } from "framer-motion";

/** Cross-fade wrapper for every route (works with AnimatePresence in App.tsx). */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden bg-navy-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
