import {
  BottleWine,
  BrushCleaning,
  Droplets,
  Lock,
  Recycle,
  ShieldCheck,
  Warehouse,
  WashingMachine,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Bottling Plant inside view (isometric cut-away). Same structure as dairy-plant.ts / airport.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/bottling-plant.webp with a
 * 7680 px wide version, run `node scripts/make-image-derivatives.mjs src/assets/bottling-plant.webp`,
 * and nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin. Re-align instantly here if a
 * replacement artwork with a different layout is supplied.
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const bottlingPlant: SceneConfig = {
  id: "bottling-plant",
  name: "Bottling Plant",
  image: images.bottlingPlant,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the bottling plant",
  },
  sections: [
    {
      id: "janitor-room",
      name: "Janitor Room",
      icon: BrushCleaning,
      description: "Staff administrative, supervisor and janitorial utility room area.",
      position: { x: 23.0, y: 12.2 },
      status: "coming-soon",
    },
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers and changing facilities.",
      position: { x: 20.5, y: 23.2 },
      status: "coming-soon",
      labelPlacement: "below", // keeps clear of the Janitor Room pin directly above
    },
    {
      id: "hygiene-entrance-control",
      name: "Hygiene Entrance Control",
      icon: ShieldCheck,
      description: "Mandatory hygiene checkpoint before entering production.",
      position: { x: 33.8, y: 26.5 },
      status: "coming-soon",
    },
    {
      id: "cip",
      name: "CIP",
      icon: Droplets,
      description: "Clean-In-Place automated sanitising system for tanks and pipelines.",
      position: { x: 55.5, y: 26.5 },
      status: "coming-soon",
    },
    {
      id: "crate-pallet-utensil-washing",
      name: "Crate - Pallet & Utensil Washing",
      icon: WashingMachine,
      description: "Sanitising of crates, pallets and utensils.",
      position: { x: 80.5, y: 35.5 },
      status: "coming-soon",
    },
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Storage for raw materials, bottles, caps and packaging.",
      position: { x: 18.8, y: 44.0 },
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling and incoming delivery dock.",
      position: { x: 22.0, y: 69.5 },
      status: "coming-soon",
    },
    {
      id: "bottling",
      name: "Bottling",
      icon: BottleWine,
      description: "Automated filling, capping, labelling and packaging lines.",
      position: { x: 61.5, y: 58.0 },
      status: "coming-soon",
    },
  ],
};

export default bottlingPlant;
