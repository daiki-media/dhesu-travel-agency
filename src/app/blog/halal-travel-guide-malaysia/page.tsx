import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import HalalTravelArticle from "./HalalTravelArticle";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 40. Title and description are copied verbatim; the
// body copy lives in HalalTravelArticle, taken from the approved draft in
// content-document/travel-blog/.
const TITLE = "Halal Travel Guide for Malaysian Muslim Travellers (2026 Ranking)";
const DESCRIPTION =
  "A practical halal travel guide for Malaysian Muslim travellers, ranking the best Muslim-friendly destinations by food access, prayer facilities, and ease of travel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "halal friendly travel destinations",
  alternates: {
    canonical: "/blog/halal-travel-guide-malaysia",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft.
// Lives here rather than in HalalTravelArticle so the same list can feed both
// the rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question: "Which destinations are easiest for halal travel?",
    answer:
      "Turkey, Indonesia, and the UAE are generally easiest due to their majority-Muslim population and halal infrastructure.",
  },
  {
    question:
      "Can one visit Bali as a halal-friendly destination even though there is a majority Hindu population there?",
    answer:
      "Yes, since it is part of Indonesia, Bali provides easy access to halal food options in tourist areas along with the rest of its tourism infrastructure.",
  },
  {
    question: "Will I be able to get halal food in major European cities?",
    answer:
      "Increasingly so, especially in cosmopolitan places where Muslims have established themselves but research is required.",
  },
  {
    question: 'Is there a difference between "no pork" and halal certification?',
    answer:
      "There is a difference, since halal certification requires formal verification of methods used and ingredients.",
  },
  {
    question: "Should Egypt be visited as a halal destination?",
    answer:
      "Yes, there is no difficulty with halal food access though consulting an expert is recommended.",
  },
  {
    question: "How do I find mosque locations while travelling?",
    answer:
      "Researching mosque locations near your planned itinerary in advance, rather than searching last-minute, ensures more reliable access to prayer facilities.",
  },
  {
    question:
      "Are Muslim-friendly hotels common in most halal-friendly destinations?",
    answer:
      "In majority-Muslim destinations, yes; in Western destinations, dedicated Muslim-friendly hotel options are less common and require more specific research.",
  },
  {
    question: "Does a travel agency help with verifying halal options?",
    answer:
      "Yes, a consultant experienced in Muslim-friendly travel can pre-vet halal certification and prayer facility access before your trip, reducing uncertainty.",
  },
];

// The FAQ markup is safe because the same questions and answers are rendered on
// the page, in the layout's accordion.
const articleJsonLd = graph([
  webPage({
    path: "/blog/halal-travel-guide-malaysia",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/blog/halal-travel-guide-malaysia", [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Halal Travel Guide" },
  ]),
]);

export default function HalalTravelGuidePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <HalalTravelArticle faqs={FAQS} />
    </main>
  );
}
