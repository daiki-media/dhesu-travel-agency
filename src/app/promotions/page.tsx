import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import PromotionsContent from "@/src/components/promotions/PromotionsContent";
import { breadcrumbList, faqQuestions, graph, webPage } from "@/src/data/structuredData";

// Holiday Idea sheet, row 43 — "DEALS & PROMOTIONS". The sheet supplies no
// title or description for this row and marks the DOC column "Need more info":
// no offers, prices or dates have been provided. So this page is built as the
// centralised, regularly-updated hub the sheet asks for — the seasonal windows,
// the trip types and the live destination guides, all collected in one place —
// and it states no offer, discount or expiry anywhere.
const TITLE = "Current Promotions: Travel Package Deals from Malaysia";
const DESCRIPTION =
  "See where Dhesu's travel package deals are running now — the seasonal booking windows, group and cruise packages, and destination guides — then ask us for today's price.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "travel package promotion malaysia",
  alternates: {
    canonical: "/promotions",
  },
};

// Evergreen by design: every answer stays true whatever offers are running,
// because none of them names a price, a discount or a date. Lives here rather
// than in PromotionsContent so the same list feeds both the rendered accordion
// and the FAQPage markup below.
const FAQS = [
  {
    question: "Where can I see Dhesu's current travel promotions?",
    answer:
      "This page is the central place we point travellers to. It collects the seasonal booking windows, the trip types we quote separately and the destination guides our consultants work from, so you can find the right starting point in one place. Because package rates move with airfares and availability, the actual figure for your trip is quoted directly by a consultant rather than published here.",
  },
  {
    question: "Why are no prices listed on this page?",
    answer:
      "A package price is assembled from the airfare on your specific departure date, the hotel and room type you choose, the size of your party and the current exchange rate. A number printed on a page would be out of date within days. Instead we give you a written quote for your dates, which you can compare against anything else you are considering.",
  },
  {
    question: "What is usually included in a Dhesu holiday package?",
    answer:
      "Most packages bundle air ticketing, accommodation, airport transfers and ground transport, guided sightseeing with entrance fees, the meals named in the itinerary, and documentation support such as visa paperwork. Every quote states its inclusions and exclusions in writing before any payment is taken.",
  },
  {
    question: "Is booking a package cheaper than booking the flights and hotels myself?",
    answer:
      "It often works out lower, because agency rates contracted with airlines, hotels and ground operators are not available to individual buyers, and because the components are priced together rather than one at a time. It is most worthwhile on multi-city routings, peak-season departures and unfamiliar destinations. For a short trip somewhere you already know well, self-booking can be perfectly sensible, and we will say so.",
  },
  {
    question: "When is the best time to ask about a deal?",
    answer:
      "For the peak Malaysian windows — school holidays, the year-end break and Raya — value comes from committing early, while airline seats and hotel allocations are still open. Outside those windows there is more flexibility, and a consultant can tell you which weeks in your preferred month tend to price better.",
  },
  {
    question: "Can a package be customised, or are the itineraries fixed?",
    answer:
      "They are starting points. Extra nights, a different hotel grade, an added city, a private car instead of a coach seat, or a different departure date can all be arranged, and the itinerary is repriced and reissued before you commit to anything.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Message or call us on WhatsApp, ring the office, email us, or send the enquiry form on our contact page. Tell us the destination, your dates or the month you have in mind, how many are travelling and the ages of any children — that is enough for a consultant to come back with a written quote and current availability.",
  },
  {
    question: "Is Dhesu Travel & Tours a licensed agency?",
    answer:
      "Yes. Dhesu Travel & Tours has operated since 1988 and holds Ministry of Tourism Malaysia licence KKKP 1439, alongside IATA accreditation and PATA and MATTA membership.",
  },
];

// A CollectionPage: the page's job is to collect the pages where the offers and
// itineraries actually live. The FAQ markup is safe because the same questions
// and answers are rendered on the page.
const promotionsJsonLd = graph([
  webPage({
    path: "/promotions",
    name: TITLE,
    description: DESCRIPTION,
    type: ["CollectionPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/promotions", [{ name: "Home", url: "/" }, { name: "Promotions" }]),
]);

export default function PromotionsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={promotionsJsonLd} />
      <TopBar />
      <Navbar />
      <PromotionsContent faqs={FAQS} />
      <Footer />
    </main>
  );
}
