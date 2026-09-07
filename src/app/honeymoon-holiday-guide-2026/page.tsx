import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import HoneymoonHubContent from "./HoneymoonHubContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, "Honeymoon Packages (Hub)" row. Title, description and
// primary keyword are copied verbatim from the sheet. The hub's job per the
// sheet is to "cross-link Bali, Mauritius and Europe as honeymoon-suited
// destinations", so the body is a comparison that routes to the three existing
// destination guides rather than a fourth guide of its own.
const PATH = "/honeymoon-holiday-guide-2026";
const TITLE = "Honeymoon Packages From Malaysia: Comparing the Top Destinations";
const DESCRIPTION =
  "Compare honeymoon destinations from Malaysia — Bali, Mauritius, and Europe. Find the right romantic escape for your travel style and budget.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "honeymoon package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/guides/mauritius-resort-pool.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, so
// exporting the array from there would hand the server a client reference. The
// same list drives the rendered FAQ and the FAQPage markup below.
const faqs = [
  {
    question: "Which honeymoon destination is easiest to reach from Malaysia?",
    answer:
      "Bali is the shortest flight of the three and needs no stopover, which is why it suits couples with a week or less. Mauritius takes longer but is still a single long-haul hop, while Europe usually means a connection and the longest total travel time.",
  },
  {
    question: "How long should we set aside for each destination?",
    answer:
      "Bali works well as a short honeymoon because the island is compact and you can stay in one place. Mauritius suits a resort-based week or ten days. A multi-country Europe honeymoon needs the most time, because the travel between cities is part of the itinerary.",
  },
  {
    question: "Which one suits a beach-and-privacy honeymoon?",
    answer:
      "Bali and Mauritius both do. Bali leans towards private pool villas, sunset cruises and romantic dining set against terraced fields and cliffs. Mauritius leans towards beach resorts and private experiences, with a slower pace once you arrive.",
  },
  {
    question: "Which one suits couples who want sightseeing as well as romance?",
    answer:
      "Europe. A multi-country European tour gives you cultural interest and a range of attractions alongside the romance, which is a different proposition from a beach resort honeymoon.",
  },
  {
    question: "Can these honeymoon packages be customised?",
    answer:
      "Yes. Every honeymoon we arrange is planned around the couple, from as few as two travellers, so the itinerary, hotels and pace are set to suit you rather than sold as a fixed departure.",
  },
  {
    question: "When should we book a honeymoon?",
    answer:
      "As early as you can once your dates are known. Honeymoon-grade rooms — pool villas, beachfront categories and the better city hotels — are the first to sell out, and booking early is also how you hold the price.",
  },
];

const honeymoonJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/guides/mauritius-resort-pool.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Honeymoon Packages" },
  ]),
]);

export default function HoneymoonHubPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={honeymoonJsonLd} />
      <HoneymoonHubContent faqs={faqs} />
    </main>
  );
}
