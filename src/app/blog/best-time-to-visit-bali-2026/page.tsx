import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import BestTimeBaliArticle from "./BestTimeBaliArticle";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 36. Title and description are copied verbatim; the
// body copy comes from content-document/travel-blog/.
const TITLE = "Best Time to Visit Bali: A Month-by-Month Guide";
const DESCRIPTION =
  "When's the best time to visit Bali? A month-by-month breakdown of weather, crowds, and pricing to help you plan the perfect trip.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "best time to visit bali",
  alternates: {
    canonical: "/blog/best-time-to-visit-bali-2026",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft.
// Lives here rather than in the article component so the same list can feed
// both the rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question: "What is the best time of year to go to Bali?",
    answer:
      "May and September are the best times, with good weather being experienced at the same time as less tourist pressure than in July and August.",
  },
  {
    question: "Will it rain too much in Bali during my holiday?",
    answer:
      "No, there will be quick showers during the day, which makes sightseeing possible.",
  },
  {
    question: "During which month is Bali the most crowded?",
    answer:
      "July and August are the months when most people visit Bali due to international holidays and children being on vacation.",
  },
  {
    question: "Will December be a good month to visit Bali?",
    answer:
      "It's a wet season, but the prices are relatively high during this period of the year due to holidays.",
  },
  {
    question: "During which month is it the cheapest to visit Bali?",
    answer:
      "Wet season months, except December, are the best periods to visit Bali because of low prices.",
  },
  {
    question: "Does the weather differ between Bali's beach areas and Ubud?",
    answer:
      "Yes, Ubud and the central highlands tend to be cooler and rainier than the southern beach areas due to elevation differences.",
  },
  {
    question: "Should I avoid Bali entirely during the rainy season?",
    answer:
      "Not necessarily, with some flexibility around daily weather patterns, wet season travel can still offer an enjoyable, lower-cost trip.",
  },
  {
    question:
      "How far ahead should I book if travelling during Bali's peak season?",
    answer:
      "Several months ahead is advisable for July, August, and December travel, given how quickly availability and pricing shift during these windows.",
  },
];

// A plain WebPage rather than BlogPosting: that node needs a real author and
// publication date, and the sheet supplies neither. The FAQ markup is safe
// because the same questions and answers are rendered on the page.
const articleJsonLd = graph([
  webPage({
    path: "/blog/best-time-to-visit-bali-2026",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/blog/best-time-to-visit-bali-2026", [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Best Time to Visit Bali" },
  ]),
]);

export default function BestTimeToVisitBaliPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <BestTimeBaliArticle faqs={FAQS} />
    </main>
  );
}
