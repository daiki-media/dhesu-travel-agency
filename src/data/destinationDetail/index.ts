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
};

/** Every {destination, key} pair, for generateStaticParams(). */
export const allLandingPageParams = Object.entries(landingPagesByDestination).flatMap(
  ([destination, set]) => set.pages.map((page) => ({ destination, key: page.key }))
);

/** The landing page at /tours/{destination}/{key}, if there is one. */
export function getLandingPage(
  destination: string,
  key: string
): LandingPage | undefined {
  return landingPagesByDestination[destination]?.get(key);
}
