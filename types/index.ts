import type { ComponentType, SVGProps } from "react";

/** Any lucide-react icon (or compatible component). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>;

export type LabelPlacement = "above" | "below" | "left" | "right";

/** One clickable pin. `position` is in IMAGE percentages and is the tip of the pin. */
export interface PinData {
  id: string;
  name: string;
  icon: IconComponent;
  description: string;
  position: { x: number; y: number };
  status: "ready" | "coming-soon";
  /** Route opened when a ready pin is clicked (e.g. "/city/bakery"). */
  route?: string;
  /** Scene key (id in data/scenes) opened by a ready pin. */
  insideScene?: string;
  /** Moves only the name label (never the pin tip) to avoid collisions. */
  labelPlacement?: LabelPlacement;
}

/** An industry in the city view. */
export type Industry = PinData;

/** Image with modern + fallback formats and a tiny blurred placeholder. */
export interface ImageAsset {
  jpg: string;
  avif?: string;
  webp?: string;
  placeholder: string;
  alt: string;
}

/** Horizontal band (0–1 of image width) with a faint on-screen label. */
export interface Zone {
  from: number;
  to: number;
  label: string;
}

export interface SceneConfig {
  id: string;
  name: string;
  image: ImageAsset;
  sections: PinData[];
  zones?: Zone[];
  comingSoon: { note: string; backLabel: string };
}
