import {
  Factory,
  Lock,
  Recycle,
  ShieldCheck,
  Snowflake,
  Utensils,
  Warehouse,
  WashingMachine,
  Wrench,
  Droplets,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Poultry Processing inside view (isometric cut-away). Same structure as meat-processor.ts / hatchery.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/poultry-processing.webp with a
 * 7680 px wide version, run `node scripts/make-image-derivatives.mjs src/assets/poultry-processing.webp`,
 * and nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin.
 *
 * TWO LAYOUTS are kept side by side so re-aligning is instant:
 *  - `screenshotLayout` = coordinates measured on the reference screenshot (baked pins, 2576×1287).
 *  - `standInLayout`    = coordinates for the artwork currently shipped in assets/poultry-processing.*
 * Flip USE_SCREENSHOT_LAYOUT to `true` when assets/poultry-processing.webp is replaced by the
 * reference screenshot (or any image with the same layout). Nothing else changes.
 *
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const USE_SCREENSHOT_LAYOUT = false;

type Pos = { x: number; y: number };

const screenshotLayout: Record<string, Pos> = {
  "plant-room": { x: 38.0, y: 10.6 },
  "crate-pallet-utensil-washing": { x: 24.8, y: 24.4 },
  "refuse-receiving": { x: 8.7, y: 53.6 },
  warehouse: { x: 19.7, y: 80.4 },
  "poultry-further-processing": { x: 38.0, y: 46.8 },
  "poultry-air-chiller": { x: 51.7, y: 34.4 },
  "poultry-processing": { x: 64.0, y: 34.0 },
  "carcass-anti-microbial-unit": { x: 72.1, y: 48.3 },
  "hygiene-entrance-control": { x: 78.3, y: 66.0 },
  "locker-room": { x: 88.5, y: 69.8 },
};

const standInLayout: Record<string, Pos> = {
  "plant-room": { x: 45.0, y: 13.5 },
  "crate-pallet-utensil-washing": { x: 21.5, y: 22.0 },
  "refuse-receiving": { x: 10.5, y: 77.0 },
  warehouse: { x: 38.5, y: 63.0 },
  "poultry-further-processing": { x: 33.5, y: 38.0 },
  "poultry-air-chiller": { x: 46.0, y: 31.0 },
  "poultry-processing": { x: 87.0, y: 27.0 },
  "carcass-anti-microbial-unit": { x: 76.0, y: 43.0 },
  "hygiene-entrance-control": { x: 59.5, y: 72.0 },
  "locker-room": { x: 73.5, y: 64.0 },
};

const layout = USE_SCREENSHOT_LAYOUT ? screenshotLayout : standInLayout;
const at = (id: string): Pos => layout[id];

const poultryProcessing: SceneConfig = {
  id: "poultry-processing",
  name: "Poultry Processing",
  image: images.poultryProcessing,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the poultry processing",
  },
  sections: [
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
      id: "crate-pallet-utensil-washing",
      name: "Crate - Pallet & Utensil Washing",
      icon: WashingMachine,
      description: "Sanitising of crates, pallets and processing utensils.",
      position: at("crate-pallet-utensil-washing"),
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste handling and incoming goods receiving dock.",
      position: at("refuse-receiving"),
      status: "coming-soon",
    },
    {
      id: "warehouse",
      name: "Warehouse",
      icon: Warehouse,
      description: "Storage for packaging, crates, supplies and finished stock.",
      position: at("warehouse"),
      status: "coming-soon",
    },
    {
      id: "poultry-further-processing",
      name: "Poultry Further Processing",
      icon: Utensils,
      description: "Value-added poultry preparation, portioning, marinating and further processing lines.",
      position: at("poultry-further-processing"),
      status: "coming-soon",
    },
    {
      id: "poultry-air-chiller",
      name: "Poultry Air Chiller",
      icon: Snowflake,
      description: "Controlled air-chilling system for rapid, hygienic poultry cooling.",
      position: at("poultry-air-chiller"),
      status: "coming-soon",
      labelPlacement: "below",
    },
    {
      id: "poultry-processing",
      name: "Poultry Processing",
      icon: Factory,
      description: "Main poultry processing, evisceration, grading and line operations.",
      position: at("poultry-processing"),
      status: "coming-soon",
      labelPlacement: "above",
    },
    {
      // The reference screenshot labels this pin "Carcass Anti-Microbial Unit" – name follows the screenshot.
      id: "carcass-anti-microbial-unit",
      name: "Carcass Anti-Microbial Unit",
      icon: Droplets,
      description: "Ozone-based microbial reduction and sanitation system for water and processing zones.",
      position: at("carcass-anti-microbial-unit"),
      status: "coming-soon",
    },
    {
      id: "hygiene-entrance-control",
      name: "Hygiene Entrance Control",
      icon: ShieldCheck,
      description: "Mandatory hygiene checkpoint before entering poultry processing areas.",
      position: at("hygiene-entrance-control"),
      status: "coming-soon",
      labelPlacement: "below",
    },
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers, changing rooms and welfare facilities.",
      position: at("locker-room"),
      status: "coming-soon",
      labelPlacement: "above",
    },
  ],
};

export default poultryProcessing;
