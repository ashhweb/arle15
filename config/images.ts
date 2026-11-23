import type { ImageAsset } from "@/types";

import landingJpg from "@/assets/landing-doha.jpg";
import landingAvif from "@/assets/landing-doha.avif";
import landingLqip from "@/assets/landing-doha-lqip.jpg";

import cityJpg from "@/assets/city-panorama.jpg";
import cityAvif from "@/assets/city-panorama.avif";
import cityLqip from "@/assets/city-panorama-lqip.jpg";

import supermarketJpg from "@/assets/supermarket-inside.jpg";
import supermarketAvif from "@/assets/supermarket-inside.avif";
import supermarketLqip from "@/assets/supermarket-inside-lqip.jpg";

import shoppingCentreJpg from "@/assets/shopping-centre.jpg";
import shoppingCentreAvif from "@/assets/shopping-centre.avif";
import shoppingCentreLqip from "@/assets/shopping-centre-lqip.jpg";

import laundryJpg from "@/assets/commercial-laundry.jpg";
import laundryAvif from "@/assets/commercial-laundry.avif";
import laundryLqip from "@/assets/commercial-laundry-lqip.jpg";

import hotelJpg from "@/assets/hotel.jpg";
import hotelAvif from "@/assets/hotel.avif";
import hotelLqip from "@/assets/hotel-lqip.jpg";

import bakeryJpg from "@/assets/bakery.jpg";
import bakeryAvif from "@/assets/bakery.avif";
import bakeryWebp from "@/assets/bakery.webp";
import bakeryLqip from "@/assets/bakery-lqip.jpg";

import dairyJpg from "@/assets/dairy-plant.jpg";
import dairyAvif from "@/assets/dairy-plant.avif";
import dairyWebp from "@/assets/dairy-plant.webp";
import dairyLqip from "@/assets/dairy-plant-lqip.jpg";

import airportJpg from "@/assets/airport.jpg";
import airportAvif from "@/assets/airport.avif";
import airportWebp from "@/assets/airport.webp";
import airportLqip from "@/assets/airport-lqip.jpg";

import bottlingJpg from "@/assets/bottling-plant.jpg";
import bottlingAvif from "@/assets/bottling-plant.avif";
import bottlingWebp from "@/assets/bottling-plant.webp";
import bottlingLqip from "@/assets/bottling-plant-lqip.jpg";

import hatcheryJpg from "@/assets/hatchery.jpg";
import hatcheryAvif from "@/assets/hatchery.avif";
import hatcheryWebp from "@/assets/hatchery.webp";
import hatcheryLqip from "@/assets/hatchery-lqip.jpg";

import meatJpg from "@/assets/meat-processor.jpg";
import meatAvif from "@/assets/meat-processor.avif";
import meatWebp from "@/assets/meat-processor.webp";
import meatLqip from "@/assets/meat-processor-lqip.jpg";

import poultryJpg from "@/assets/poultry-processing.jpg";
import poultryAvif from "@/assets/poultry-processing.avif";
import poultryWebp from "@/assets/poultry-processing.webp";
import poultryLqip from "@/assets/poultry-processing-lqip.jpg";

import poultryFarmJpg from "@/assets/poultry-farm.jpg";
import poultryFarmAvif from "@/assets/poultry-farm.avif";
import poultryFarmWebp from "@/assets/poultry-farm.webp";
import poultryFarmLqip from "@/assets/poultry-farm-lqip.jpg";

import hospitalPng from "@/assets/hospital.png";
import hospitalAvif from "@/assets/hospital.avif";
import hospitalWebp from "@/assets/hospital.webp";
import hospitalLqip from "@/assets/hospital-lqip.jpg";

import collegeJpg from "@/assets/college.jpg";
import collegeAvif from "@/assets/college.avif";
import collegeLqip from "@/assets/college-lqip.jpg";

import fastFoodJpg from "@/assets/fast-food.jpg";
import fastFoodAvif from "@/assets/fast-food.avif";
import fastFoodLqip from "@/assets/fast-food-lqip.jpg";

/**
 * Single source of truth for every image path in ARLE City.
 * Replace a file in /assets with a higher-resolution one (same name), run
 * `node scripts/make-image-derivatives.mjs <file>` and nothing else changes –
 * the viewer reads the natural size from the file (full HD today, 8K-ready).
 */
export const images = {
  landing: {
    jpg: landingJpg,
    avif: landingAvif,
    placeholder: landingLqip,
    alt: "Aerial view of Doha, Qatar",
  },
  city: {
    jpg: cityJpg,
    avif: cityAvif,
    placeholder: cityLqip,
    alt: "ARLE City panorama",
  },
  supermarket: {
    jpg: supermarketJpg,
    avif: supermarketAvif,
    placeholder: supermarketLqip,
    alt: "Supermarket inside view",
  },
  shoppingCentre: {
    jpg: shoppingCentreJpg,
    avif: shoppingCentreAvif,
    placeholder: shoppingCentreLqip,
    alt: "Shopping Centre inside view",
  },
  commercialLaundry: {
    jpg: laundryJpg,
    avif: laundryAvif,
    placeholder: laundryLqip,
    alt: "Commercial Laundry inside view",
  },
  hotel: {
    jpg: hotelJpg,
    avif: hotelAvif,
    placeholder: hotelLqip,
    alt: "Hotel inside view",
  },
  bakery: {
    jpg: bakeryJpg,
    avif: bakeryAvif,
    webp: bakeryWebp,
    placeholder: bakeryLqip,
    alt: "Bakery inside view",
  },
  dairyPlant: {
    jpg: dairyJpg,
    avif: dairyAvif,
    webp: dairyWebp,
    placeholder: dairyLqip,
    alt: "Dairy Plant inside view",
  },
  airport: {
    jpg: airportJpg,
    avif: airportAvif,
    webp: airportWebp,
    placeholder: airportLqip,
    alt: "Airport inside view",
  },
  bottlingPlant: {
    jpg: bottlingJpg,
    avif: bottlingAvif,
    webp: bottlingWebp,
    placeholder: bottlingLqip,
    alt: "Bottling Plant inside view",
  },
  hatchery: {
    jpg: hatcheryJpg,
    avif: hatcheryAvif,
    webp: hatcheryWebp,
    placeholder: hatcheryLqip,
    alt: "Hatchery inside view",
  },
  meatProcessor: {
    jpg: meatJpg,
    avif: meatAvif,
    webp: meatWebp,
    placeholder: meatLqip,
    alt: "Meat Processor inside view",
  },
  poultryProcessing: {
    jpg: poultryJpg,
    avif: poultryAvif,
    webp: poultryWebp,
    placeholder: poultryLqip,
    alt: "Isometric cutaway of the Poultry Processing plant",
  },
  poultryFarm: {
    jpg: poultryFarmJpg,
    avif: poultryFarmAvif,
    webp: poultryFarmWebp,
    placeholder: poultryFarmLqip,
    alt: "Isometric aerial view of the Poultry Farm",
  },
  hospital: {
    jpg: hospitalPng,
    avif: hospitalAvif,
    webp: hospitalWebp,
    placeholder: hospitalLqip,
    alt: "Hospital inside view",
  },
  college: {
    jpg: collegeJpg,
    avif: collegeAvif,
    placeholder: collegeLqip,
    alt: "College inside view",
  },
  fastFood: {
    jpg: fastFoodJpg,
    avif: fastFoodAvif,
    placeholder: fastFoodLqip,
    alt: "Fast Food inside view",
  },
} satisfies Record<string, ImageAsset>;
