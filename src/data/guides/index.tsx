import type { ReactElement } from "react";

import BaliGuide from "./BaliGuide";
import VietnamGuide from "./VietnamGuide";
import PhuketKrabiGuide from "./PhuketKrabiGuide";
import IndiaGuide from "./IndiaGuide";
import SriLankaGuide from "./SriLankaGuide";
import NepalGuide from "./NepalGuide";
import CambodiaGuide from "./CambodiaGuide";
import ChinaGuide from "./ChinaGuide";
import HongKongGuide from "./HongKongGuide";
import MyanmarGuide from "./MyanmarGuide";
import DubaiGuide from "./DubaiGuide";
import EuropeGuide from "./EuropeGuide";
import AustraliaGuide from "./AustraliaGuide";
import MauritiusGuide from "./MauritiusGuide";
import BaliHoneymoonGuide from "./BaliHoneymoonGuide";
import EuropeHoneymoonGuide from "./EuropeHoneymoonGuide";
import MauritiusHoneymoonGuide from "./MauritiusHoneymoonGuide";

/**
 * Body copy for the Holiday Idea destination guides.
 *
 * A guide is a landing page under /tours/<destination>/<key>, so its metadata,
 * hero lead and package selection live in
 * src/data/destinationDetail/<destination>.ts like any other landing page, and
 * its FAQs in src/data/guideFaqs.ts. The article itself lives here, alongside
 * them: it is page content like the rest, written as markup only because it
 * carries inline links and tables that a plain string could not hold.
 *
 * The shared look — Section, Bullet, DataTable, TripRows — is in ./primitives,
 * so a guide file holds nothing but its own copy.
 *
 * Keyed by `<destination>/<key>` — the two segments the route resolves. A
 * landing page with no entry renders through TourRegionTemplate as before; one
 * with an entry renders through TourGuideTemplate instead.
 *
 * These are stored as elements rather than component types on purpose: handing
 * the route a component to instantiate reads as creating a component during
 * render, which the lint rules reject.
 */
const guideContent: Record<string, ReactElement> = {
  "indonesia/bali-holiday-travel-guide-2026": <BaliGuide />,
  "vietnam/vietnam-tour-travel-guide-2026": <VietnamGuide />,
  "thailand/phuket-krabi-holiday-guide-2026": <PhuketKrabiGuide />,
  "india/india-tour-travel-guide-2026": <IndiaGuide />,
  "sri-lanka/sri-lanka-tour-travel-guide-2026": <SriLankaGuide />,
  "nepal/nepal-tour-travel-guide-2026": <NepalGuide />,
  "cambodia/cambodia-tour-travel-guide-2026": <CambodiaGuide />,
  "china/china-tour-travel-guide-2026": <ChinaGuide />,
  "hong-kong/hong-kong-tour-travel-guide-2026": <HongKongGuide />,
  "myanmar/myanmar-tour-travel-guide-2026": <MyanmarGuide />,
  "dubai/dubai-holiday-travel-guide-2026": <DubaiGuide />,
  "europe/europe-tour-travel-guide-2026": <EuropeGuide />,
  "australia/australia-holiday-travel-guide-2026": <AustraliaGuide />,
  "mauritius/mauritius-honeymoon-travel-guide-2026": <MauritiusGuide />,
  "indonesia/honeymoon-holiday-guide-2026": <BaliHoneymoonGuide />,
  "europe/honeymoon-holiday-guide-2026": <EuropeHoneymoonGuide />,
  "mauritius/honeymoon-holiday-guide-2026": <MauritiusHoneymoonGuide />,
};

/** The guide article for a landing page, if it has one. */
export function getGuideContent(
  destination: string,
  key: string,
): ReactElement | undefined {
  return guideContent[`${destination}/${key}`];
}
