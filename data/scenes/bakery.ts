import {
  Car,
  ChefHat,
  CookingPot,
  Flame,
  Lock,
  Recycle,
  ShieldCheck,
  Warehouse,
  WashingMachine,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Bakery inside view (isometric cut-away). Same structure as hospital.ts / hotel.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/bakery.webp with a 7680 px wide
 * version, run `node scripts/make-image-derivatives.mjs src/assets/bakery.webp`, and nothing
 * else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin. x is the centre of the marker in the
 * reference artwork; y is the marker centre + 2.6 % (the pin has a constant on-screen size and its
 * pointer tail sits ~25 px below the icon centre), so the icon lands exactly on the original marker.
 * Re-align instantly here when a clean artwork (without baked pins) is supplied.
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const bakery: SceneConfig = {
  id: "bakery",
  name: "Bakery",
  image: images.bakery,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the bakery",
  },
  sections: [
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Bulk storage for flour, ingredients and packaging.",
      position: { x: 56.5, y: 17.7 },
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling and incoming delivery dock.",
      position: { x: 46.2, y: 24.3 },
      status: "coming-soon",
    },
    {
      id: "combination-ovens",
      name: "Combination Ovens",
      icon: Flame,
      description: "Steam and convection ovens for consistent baking.",
      position: { x: 69.4, y: 34.1 },
      status: "coming-soon",
    },
    {
      id: "bakery",
      name: "Bakery",
      icon: ChefHat,
      description: "Fresh bread, pastries and baked goods.",
      position: { x: 47.1, y: 43.7 },
      status: "coming-soon",
    },
    {
      id: "food-production-bakery",
      name: "Food Production- Bakery",
      icon: CookingPot,
      description: "Main production floor for dough, shaping and finishing.",
      position: { x: 58.3, y: 44.5 },
      status: "coming-soon",
    },
    {
      id: "crate-pallet-utensil-washing",
      name: "Crate - Pallet & Utensil Washing",
      icon: WashingMachine,
      description: "Sanitising of crates, pallets and utensils.",
      position: { x: 77.5, y: 48.8 },
      status: "coming-soon",
    },
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers and changing facilities.",
      position: { x: 32.8, y: 50.1 },
      status: "coming-soon",
    },
    {
      id: "hygiene-entrance-control",
      name: "Hygiene Entrance Control",
      icon: ShieldCheck,
      description: "Mandatory hygiene checkpoint before entering production.",
      position: { x: 41.9, y: 52.2 },
      status: "coming-soon",
      labelPlacement: "below", // avoids the Locker Room label on smaller viewports
    },
    {
      id: "industrial-car-park",
      name: "Industrial Car Park",
      icon: Car,
      description: "Parking for staff, vans and delivery vehicles.",
      position: { x: 51.3, y: 81.3 },
      status: "coming-soon",
    },
  ],
};

export default bakery;
