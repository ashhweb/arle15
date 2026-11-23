import { Briefcase, Egg, Recycle, Users, Warehouse, Wrench } from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Hatchery inside view (isometric cut-away). Same structure as bottling-plant.ts / dairy-plant.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/hatchery.webp with a
 * 7680 px wide version, run `node scripts/make-image-derivatives.mjs src/assets/hatchery.webp`,
 * and nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin. Re-align instantly here if a
 * replacement artwork with a different layout is supplied.
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const hatchery: SceneConfig = {
  id: "hatchery",
  name: "Hatchery",
  image: images.hatchery,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the hatchery",
  },
  sections: [
    {
      id: "office",
      name: "Office",
      icon: Briefcase,
      description: "Administrative, management and operations offices for the hatchery.",
      position: { x: 19.0, y: 46.0 },
      status: "coming-soon",
    },
    {
      id: "staff-toilet",
      name: "Staff Toilet",
      icon: Users,
      description: "Staff restroom and hygiene washroom facilities.",
      position: { x: 24.8, y: 62.0 },
      status: "coming-soon",
    },
    {
      id: "plant-room",
      name: "Plant Room",
      icon: Wrench,
      description: "Central mechanical and utility room supporting climate, ventilation and power.",
      position: { x: 37.0, y: 60.5 },
      status: "coming-soon",
    },
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Storage for hatching supplies, boxes, packaging and materials.",
      position: { x: 53.0, y: 49.0 },
      status: "coming-soon",
    },
    {
      id: "refuse-goods-in",
      name: "Refuse & Goods In",
      icon: Recycle,
      description: "Incoming goods intake and waste/by-product handling area.",
      position: { x: 91.0, y: 22.5 },
      status: "coming-soon",
    },
    {
      id: "hatchery-corridor",
      name: "Hatchery Corridor",
      icon: Egg,
      description: "Central biosecure corridor connecting incubation, hatching and processing rooms.",
      position: { x: 64.0, y: 58.0 },
      status: "coming-soon",
    },
  ],
};

export default hatchery;
