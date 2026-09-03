
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
import indonesiaData from "./Indonesia.json";

// Added for the Holiday Idea content plan. These destinations have no packages
// yet, so they are deliberately absent from the /tours index, which lists only
// hubs with at least one package.
import chinaData from "./china.json";
import hongKongData from "./hong-kong.json";
import myanmarData from "./myanmar.json";
import dubaiData from "./dubai.json";
import europeData from "./europe.json";
import australiaData from "./australia.json";
import mauritiusData from "./mauritius.json";

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
  indonesia: indonesiaData as TourPageData,
  china: chinaData as TourPageData,
  "hong-kong": hongKongData as TourPageData,
  myanmar: myanmarData as TourPageData,
  dubai: dubaiData as TourPageData,
  europe: europeData as TourPageData,
  australia: australiaData as TourPageData,
  mauritius: mauritiusData as TourPageData,
};

export const tourSlugs = Object.keys(tourPages);

export function getTourPage(slug: string): TourPageData | undefined {
  return tourPages[slug];
}

export type { TourPageData } from "./types";
