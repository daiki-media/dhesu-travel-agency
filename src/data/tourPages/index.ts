
import type { TourPageData } from "./types";

import indiaData from "./india.json";
import thailandData from "./thailand.json";
import sriLankaData from "./sri-lanka.json";
import nepalData from "./nepal.json";

export const tourPages: Record<string, TourPageData> = {
  india: indiaData as TourPageData,
  thailand: thailandData as TourPageData,
  "sri-lanka": sriLankaData as TourPageData,
  nepal: nepalData as TourPageData,
};

export const tourSlugs = Object.keys(tourPages);

export function getTourPage(slug: string): TourPageData | undefined {
  return tourPages[slug];
}

export type { TourPageData } from "./types";
