import {
  Beef,
  Briefcase,
  ConciergeBell,
  Droplets,
  Lock,
  Recycle,
  ShieldCheck,
  Warehouse,
  WashingMachine,
  Wrench,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Meat Processor inside view (isometric cut-away). Same structure as hatchery.ts / bottling-plant.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/meat-processor.webp with a
 * 7680 px wide version, run `node scripts/make-image-derivatives.mjs src/assets/meat-processor.webp`,
 * and nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin.
 *
 * TWO LAYOUTS are kept side by side so re-aligning is instant:
 *  - `screenshotLayout` = coordinates measured on the reference screenshot (baked pins, 2576×1347).
 *  - `standInLayout`    = coordinates for the artwork currently shipped in assets/meat-processor.*
 * Flip USE_SCREENSHOT_LAYOUT to `true` when assets/meat-processor.webp is replaced by the
 * reference screenshot (or any image with the same layout). Nothing else changes.
 *
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const USE_SCREENSHOT_LAYOUT = false;

type Pos = { x: number; y: number };

const screenshotLayout: Record<string, Pos> = {
  "refuse-receiving": { x: 46.7, y: 8.3 },
  "crate-pallet-utensil-washing": { x: 62.1, y: 20.6 },
  warehouse: { x: 45.8, y: 23.0 },
  "plant-room": { x: 36.3, y: 32.3 },
  cip: { x: 42.5, y: 30.8 },
  "locker-room": { x: 31.3, y: 41.9 },
  "hygiene-entrance-control": { x: 42.5, y: 44.3 },
  office: { x: 19.8, y: 62.6 },
  reception: { x: 33.6, y: 71.9 },
  "food-production": { x: 65.4, y: 52.8 },
};

const standInLayout: Record<string, Pos> = {
  "refuse-receiving": { x: 19.0, y: 21.0 },
  "crate-pallet-utensil-washing": { x: 57.5, y: 23.5 },
  warehouse: { x: 36.5, y: 20.0 },
  "plant-room": { x: 69.0, y: 24.0 },
  cip: { x: 80.5, y: 22.5 },
  "locker-room": { x: 17.5, y: 37.0 },
  "hygiene-entrance-control": { x: 29.5, y: 38.0 },
  office: { x: 25.0, y: 65.0 },
  reception: { x: 16.5, y: 54.0 },
  "food-production": { x: 49.0, y: 51.0 },
};

const layout = USE_SCREENSHOT_LAYOUT ? screenshotLayout : standInLayout;
const at = (id: string): Pos => layout[id];

const meatProcessor: SceneConfig = {
  id: "meat-processor",
  name: "Meat Processor",
  image: images.meatProcessor,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the meat processor",
  },
  sections: [
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling, by-product collection and incoming goods receiving dock.",
      position: at("refuse-receiving"),
      status: "coming-soon",
    },
    {
      id: "crate-pallet-utensil-washing",
      name: "Crate - Pallet & Utensil Washing",
      icon: WashingMachine,
      description: "Sanitising of crates, pallets and processing utensils.",
      position: at("crate-pallet-utensil-washing"),
      status: "coming-soon",
    },
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Cold and dry storage for raw materials, ingredients and packaging.",
      position: at("warehouse"),
      status: "coming-soon",
    },
    {
      id: "plant-room",
      name: "Plant Room",
      icon: Wrench,
      description: "Central utility room housing refrigeration, boilers, chillers and pumps.",
      position: at("plant-room"),
      status: "coming-soon",
      labelPlacement: "above",
    },
    {
      id: "cip",
      name: "CIP",
      icon: Droplets,
      description: "Clean-In-Place automated sanitising system for tanks, mixers and pipelines.",
      position: at("cip"),
      status: "coming-soon",
      labelPlacement: "below",
    },
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers and changing facilities before hygiene control.",
      position: at("locker-room"),
      status: "coming-soon",
      labelPlacement: "above",
    },
    {
      id: "hygiene-entrance-control",
      name: "Hygiene Entrance Control",
      icon: ShieldCheck,
      description: "Mandatory handwashing, boot sanitising and hygiene checkpoint into production.",
      position: at("hygiene-entrance-control"),
      status: "coming-soon",
      labelPlacement: "below",
    },
    {
      id: "office",
      name: "Office",
      icon: Briefcase,
      description: "Administrative, quality assurance and operations offices.",
      position: at("office"),
      status: "coming-soon",
    },
    {
      id: "reception",
      name: "Reception",
      icon: ConciergeBell,
      description: "Main visitor entrance, reception desk and front-office area.",
      position: at("reception"),
      status: "coming-soon",
    },
    {
      id: "food-production",
      name: "Food Production",
      icon: Beef,
      description: "Main meat processing, tumbling, preparation and packaging floor.",
      position: at("food-production"),
      status: "coming-soon",
    },
  ],
};

export default meatProcessor;
