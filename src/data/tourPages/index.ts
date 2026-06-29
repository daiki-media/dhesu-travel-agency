
import type { TourPageData } from "./types";

import indiaData from "./india.json";
import thailandData from "./thailand.json";
import sriLankaData from "./sri-lanka.json";
import bhutanData from "./bhutan.json";
import nepalData from "./nepal.json";
import vietnamData from "./vietnam.json";
import cambodiaData from "./cambodia.json";
import laosData from "./laos.json";
import malaysiaData from "./malaysia.json";

export const tourPages: Record<string, TourPageData> = {
  india: indiaData as TourPageData,
  thailand: thailandData as TourPageData,
  "sri-lanka": sriLankaData as TourPageData,
  nepal: nepalData as TourPageData,
  bhutan: bhutanData as TourPageData,
  vietnam: vietnamData as TourPageData,
  cambodia: cambodiaData as TourPageData,
  laos: laosData as TourPageData,
  malaysia: malaysiaData as TourPageData,
};

export const tourSlugs = Object.keys(tourPages);

export function getTourPage(slug: string): TourPageData | undefined {
  return tourPages[slug];
}

export type { TourPageData } from "./types";
