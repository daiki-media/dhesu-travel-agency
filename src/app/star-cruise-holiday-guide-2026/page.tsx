import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import StarCruiseContent from "./StarCruiseContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 30. Title and description are copied verbatim; the
// body copy comes from content-document/tour-types/.
const PATH = "/star-cruise-holiday-guide-2026";
const TITLE = "Star Cruise Packages From Malaysia: Itineraries, Cabins & What to Expect";
const DESCRIPTION =
  "Star Cruise packages from Malaysia — itineraries, cabin categories, and onboard experiences. Get a free, personalised cruise quote today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "star cruise package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/tour-types/cruise-approaching-port.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question: "What does a standard Star Cruise price include?",
    answer:
      "Accommodation, meals in the main dining room, access to entertainment programs, and using the onboard facilities are included in the standard fare; specialty dining and shore excursions may cost extra money.",
  },
  {
    question: "Which cabin category suits first-timers?",
    answer:
      "Ocean view or balcony cabins can be considered good choices for first-timers looking for accommodation that provides natural light at a reasonable price compared to suites.",
  },
  {
    question:
      "Do the shore excursions cost extra or are they included in the cruise price?",
    answer:
      "Shore excursions, which occur at each port of call, are not included in the cruise price but paid for separately.",
  },
  {
    question: "Is Star Cruise a good option for family vacations?",
    answer:
      "Yes, family-oriented entertainment and activities can be found aboard Star Cruises ships along with kids' clubs available on bigger ships.",
  },
  {
    question: "When should I book my Star Cruise trip?",
    answer: "It is better to plan and book your cruise several months in advance.",
  },
  {
    question: "What's the difference between an interior and ocean view cabin?",
    answer:
      "An interior cabin has no window, while an ocean view cabin includes a window with sea views but no private balcony.",
  },
  {
    question: "How long are typical Star Cruise sailings from Malaysia?",
    answer:
      "Sailings typically range from 2–3 night short cruises to 7 or more nights for extended itineraries, depending on the specific route and season.",
  },
  {
    question: "Are drinks and specialty dining included in the cruise price?",
    answer:
      "Generally not by default; alcoholic beverages and specialty dining venues are usually available as paid add-ons or through optional packages.",
  },
];

const starCruiseJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/tour-types/cruise-approaching-port.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Star Cruise Packages" },
  ]),
]);

export default function StarCruisePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={starCruiseJsonLd} />
      <StarCruiseContent faqs={faqs} />
    </main>
  );
}
