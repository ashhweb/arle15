import {
  Droplets,
  Lock,
  Milk,
  Recycle,
  ShieldCheck,
  Warehouse,
  WashingMachine,
  Wrench,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Dairy Plant inside view (isometric cut-away). Same structure as bakery.ts / hotel.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/dairy-plant.webp with a 7680 px
 * wide version, run `node scripts/make-image-derivatives.mjs src/assets/dairy-plant.webp`, and
 * nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin. x is the centre of the baked marker
 * in the reference artwork; y is the marker centre + 2.6 % (the pin has a constant on-screen size
 * and its pointer tail sits ~25 px below the icon centre), so the icon lands exactly on the baked
 * marker. Re-align instantly here when a clean artwork (without baked pins) is supplied.
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const dairyPlant: SceneConfig = {
  id: "dairy-plant",
  name: "Dairy Plant",
  image: images.dairyPlant,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the dairy plant",
  },
  sections: [
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers and changing facilities.",
      position: { x: 28.2, y: 21.0 },
      status: "coming-soon",
    },
    {
      id: "hygiene-entrance-control",
      name: "Hygiene Entrance Control",
      icon: ShieldCheck,
      description: "Mandatory hygiene checkpoint before entering production.",
      position: { x: 38.1, y: 28.6 },
      status: "coming-soon",
    },
    {
      id: "crate-pallet-utensil-washing",
      name: "Crate - Pallet & Utensil Washing",
      icon: WashingMachine,
      description: "Sanitising of crates, pallets and utensils.",
      position: { x: 52.5, y: 34.4 },
      status: "coming-soon",
    },
    {
      id: "cip",
      name: "CIP",
      icon: Droplets,
      description: "Clean-In-Place automated sanitising system for tanks and pipelines.",
      position: { x: 60.8, y: 32.8 },
      status: "coming-soon",
      labelPlacement: "below", // keeps clear of the long Crate label and the Plant Room label
    },
    {
      id: "plant-room",
      name: "Plant Room",
      icon: Wrench,
      description: "Central utility room housing boilers, chillers and pumps.",
      position: { x: 70.9, y: 34.3 },
      status: "coming-soon",
    },
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Temperature-controlled storage for dairy stock and packaging.",
      position: { x: 25.9, y: 43.7 },
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling and incoming delivery dock.",
      position: { x: 18.2, y: 62.7 },
      status: "coming-soon",
    },
    {
      id: "bottling",
      name: "Bottling",
      icon: Milk,
      description: "Automated filling, capping and packaging lines.",
      position: { x: 60.5, y: 62.5 },
      status: "coming-soon",
    },
  ],
};

export default dairyPlant;
