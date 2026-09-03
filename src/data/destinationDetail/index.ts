/**
 * Registry of the region/theme landing pages that live one segment under a
 * destination, e.g. /tours/india/kerala.
 *
 * Each destination file declares its own `…LandingPage` interface, but they are
 * structurally identical — so the catch-all route can look a page up here
 * instead of carrying one hand-written branch per country.
 */
import type { TourPackage } from "@/src/data/tourPages/types";

import { getIndiaLandingPage, INDIA_LANDING_PAGES } from "./india";
import { getNepalLandingPage, NEPAL_LANDING_PAGES } from "./nepal";
import { getSriLankaLandingPage, SRI_LANKA_LANDING_PAGES } from "./sri-lanka";
import { getBhutanLandingPage, BHUTAN_LANDING_PAGES } from "./bhutan";
import { getVietnamLandingPage, VIETNAM_LANDING_PAGES } from "./vietnam";
import { getCambodiaLandingPage, CAMBODIA_LANDING_PAGES } from "./cambodia";
import { getLaosLandingPage, LAOS_LANDING_PAGES } from "./laos";
import { getMalaysiaLandingPage, MALAYSIA_LANDING_PAGES } from "./malaysia";
import { getIndonesiaLandingPage, INDONESIA_LANDING_PAGES } from "./Indonesia";
import { getThailandLandingPage, THAILAND_LANDING_PAGES } from "./thailand";
import { getChinaLandingPage, CHINA_LANDING_PAGES } from "./china";
import { getHongKongLandingPage, HONG_KONG_LANDING_PAGES } from "./hong-kong";
import { getMyanmarLandingPage, MYANMAR_LANDING_PAGES } from "./myanmar";
import { getDubaiLandingPage, DUBAI_LANDING_PAGES } from "./dubai";
import { getEuropeLandingPage, EUROPE_LANDING_PAGES } from "./europe";
import { getAustraliaLandingPage, AUSTRALIA_LANDING_PAGES } from "./australia";
import { getMauritiusLandingPage, MAURITIUS_LANDING_PAGES } from "./mauritius";

/** The shape every destination's landing-page interface already satisfies. */
export interface LandingPage {
  key: string;
  label: string;
  /**
   * A "region" is a real place (Kerala, Sabah); a "theme" is a way of grouping
   * packages (Honeymoon, Golden Triangle). Only regions get Place markup.
   */
  kind: "region" | "theme";
  blurb: string;
  select: (packages: TourPackage[]) => TourPackage[];
  /**
   * Primary keyword for the page, when the content plan defines one.
   * Optional because the older region pages predate that column.
   */
  primaryKeyword?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

type LandingPageSet = {
  pages: readonly LandingPage[];
  get: (key: string) => LandingPage | undefined;
};

/** Keyed by the destination segment in the URL. */
export const landingPagesByDestination: Record<string, LandingPageSet> = {
  india: { pages: INDIA_LANDING_PAGES, get: getIndiaLandingPage },
  nepal: { pages: NEPAL_LANDING_PAGES, get: getNepalLandingPage },
  "sri-lanka": { pages: SRI_LANKA_LANDING_PAGES, get: getSriLankaLandingPage },
  bhutan: { pages: BHUTAN_LANDING_PAGES, get: getBhutanLandingPage },
  vietnam: { pages: VIETNAM_LANDING_PAGES, get: getVietnamLandingPage },
  cambodia: { pages: CAMBODIA_LANDING_PAGES, get: getCambodiaLandingPage },
  laos: { pages: LAOS_LANDING_PAGES, get: getLaosLandingPage },
  malaysia: { pages: MALAYSIA_LANDING_PAGES, get: getMalaysiaLandingPage },
  indonesia: { pages: INDONESIA_LANDING_PAGES, get: getIndonesiaLandingPage },
  thailand: { pages: THAILAND_LANDING_PAGES, get: getThailandLandingPage },
  china: { pages: CHINA_LANDING_PAGES, get: getChinaLandingPage },
  "hong-kong": { pages: HONG_KONG_LANDING_PAGES, get: getHongKongLandingPage },
  myanmar: { pages: MYANMAR_LANDING_PAGES, get: getMyanmarLandingPage },
  dubai: { pages: DUBAI_LANDING_PAGES, get: getDubaiLandingPage },
  europe: { pages: EUROPE_LANDING_PAGES, get: getEuropeLandingPage },
  australia: { pages: AUSTRALIA_LANDING_PAGES, get: getAustraliaLandingPage },
  mauritius: { pages: MAURITIUS_LANDING_PAGES, get: getMauritiusLandingPage },
};

/** Every {destination, key} pair, for generateStaticParams(). */
export const allLandingPageParams = Object.entries(landingPagesByDestination).flatMap(
  ([destination, set]) => set.pages.map((page) => ({ destination, key: page.key }))
);

/**
 * The Holiday Idea planning guides for a destination.
 *
 * `primaryKeyword` is the marker: only the guide pages carry one, because only
 * they came from the content plan's keyword column. The older region pages
 * predate it.
 */
export function getGuidePages(destination: string): LandingPage[] {
  return (landingPagesByDestination[destination]?.pages ?? []).filter(
    (page) => page.primaryKeyword !== undefined
  );
}

/**
 * The same guides shaped as package-grid entries.
 *
 * A destination whose itineraries are still being written would otherwise show
 * an empty grid and a "Coming Soon" card, with its guide article reachable only
 * from the navbar. Listing the guide here puts it under its own country, on the
 * hub and on /all-packages, without inventing a price or a duration for it —
 * see `kind: "guide"` on TourPackage.
 */
export function guidePackageItems(destination: string): TourPackage[] {
  return getGuidePages(destination).map((page) => ({
    id: `${destination}-${page.key}`,
    slug: page.key,
    name: page.label,
    kind: "guide" as const,
    blurb: page.blurb,
    tag: "Travel Guide",
    tagColor: "teal" as const,
    image: page.ogImage,
  }));
}

/** The landing page at /tours/{destination}/{key}, if there is one. */
export function getLandingPage(
  destination: string,
  key: string
): LandingPage | undefined {
  return landingPagesByDestination[destination]?.get(key);
}
