import {
  Car,
  Croissant,
  Lock,
  Plane,
  Recycle,
  ShieldCheck,
  Sparkles,
  Users,
  Utensils,
  WashingMachine,
} from "lucide-react";
import { images } from "@/config/images";
import type { SceneConfig } from "@/types";

/**
 * Airport inside view (isometric cut-away). Same structure as dairy-plant.ts / bakery.ts.
 * Auto-registered by data/scenes/index.ts – no viewer code is touched.
 * The image path lives only in config/images.ts – replace assets/airport.webp with a 7680 px
 * wide version, run `node scripts/make-image-derivatives.mjs src/assets/airport.webp`, and
 * nothing else changes.
 *
 * Positions are IMAGE percentages and are the TIP of each pin. x is the centre of the baked marker
 * in the reference artwork; y is the marker centre + 2.6 % (the pin has a constant on-screen size
 * and its pointer tail sits ~25 px below the icon centre), so the icon lands exactly on the baked
 * marker. Re-align instantly here when a clean artwork (without baked pins) is supplied.
 * `labelPlacement` only moves the name label (never the pin tip) to avoid collisions.
 */
const airport: SceneConfig = {
  id: "airport",
  name: "Airport",
  image: images.airport,
  comingSoon: {
    note: "The inside view of this area will open here in the next phase.",
    backLabel: "Back to the airport",
  },
  sections: [
    {
      id: "crate-pallet-utensil-washing",
      name: "Crate - Pallet & Utensil Washing",
      icon: WashingMachine,
      description: "Sanitising of crates, pallets and utensils for airside operations.",
      position: { x: 31.4, y: 20.7 },
      status: "coming-soon",
    },
    {
      id: "kitchen",
      name: "Kitchen",
      icon: Utensils,
      description: "Food preparation and catering kitchen serving airport dining and flights.",
      position: { x: 55.8, y: 13.9 },
      status: "coming-soon",
      labelPlacement: "left", // keeps clear of the Bakery label just up-right
    },
    {
      id: "bakery",
      name: "Bakery",
      icon: Croissant,
      description: "In-house bakery producing fresh bread and pastries for terminal outlets.",
      position: { x: 61.9, y: 10.0 },
      status: "coming-soon",
    },
    {
      id: "hygiene-entrance-control",
      name: "Hygiene Entrance Control",
      icon: ShieldCheck,
      description: "Mandatory hygiene checkpoint before entering food and back-of-house areas.",
      position: { x: 65.9, y: 23.1 },
      status: "coming-soon",
    },
    {
      id: "locker-room",
      name: "Locker Room",
      icon: Lock,
      description: "Staff lockers and changing facilities for terminal and catering personnel.",
      position: { x: 70.8, y: 33.4 },
      status: "coming-soon",
      labelPlacement: "right", // clear of the Hygiene Entrance Control label above
    },
    {
      id: "airport-warewashing",
      name: "Airport Warewashing",
      icon: Sparkles,
      description: "Commercial dishwashing and sanitising for airport food service.",
      position: { x: 53.0, y: 28.2 },
      status: "coming-soon",
    },
    {
      id: "airport-check-in",
      name: "Airport Check-in",
      icon: Plane,
      description: "Passenger check-in counters, baggage drop and main concourse flow.",
      position: { x: 55.4, y: 40.8 },
      status: "coming-soon",
    },
    {
      id: "public-washroom",
      name: "Public Washroom",
      icon: Users,
      description: "Passenger washroom and restroom facilities within the terminal.",
      position: { x: 37.5, y: 43.9 },
      status: "coming-soon",
    },
    {
      id: "refuse-receiving",
      name: "Refuse & Receiving",
      icon: Recycle,
      description: "Waste management, recycling and incoming goods receiving bay.",
      position: { x: 24.9, y: 72.8 },
      status: "coming-soon",
    },
    {
      id: "airport-car-park",
      name: "Airport Car Park",
      icon: Car,
      description: "Designated parking bays for passengers, staff and ground vehicles.",
      position: { x: 65.3, y: 77.5 },
      status: "coming-soon",
    },
  ],
};

export default airport;
