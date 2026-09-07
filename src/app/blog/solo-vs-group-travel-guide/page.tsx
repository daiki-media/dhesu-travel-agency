import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import SoloVsGroupArticle from "./SoloVsGroupArticle";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 41. Title and description are copied verbatim; the
// body copy comes from content-document/travel-blog/.
const TITLE = "Solo vs. Group Travel: Which Suits Your Next Trip?";
const DESCRIPTION =
  "Solo or group travel — which fits your next trip? Compare cost, safety, flexibility, and experience to decide what suits you best.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "group travel benefits malaysia",
  alternates: {
    canonical: "/blog/solo-vs-group-travel-guide",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft.
// Lives here rather than in the article component so the same list can feed both
// the rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question: "Is group travel always cheaper than solo travel?",
    answer:
      "Not always, but the shared costs on accommodations, transportation, and activities make group travel structurally cheaper, especially in expensive destinations.",
  },
  {
    question: "Is solo travel more or less safe than group travel?",
    answer:
      "Solo travel involves more individual efforts to solve problems and stay safe, while group travel usually means structured support and procedures.",
  },
  {
    question: "Can I benefit from group travel even without a big group?",
    answer:
      "Yes, because there are pre-packaged family or small-group tours that provide all the logistics support, but with significantly more flexibility.",
  },
  {
    question:
      "Is group travel a good choice when traveling to an unknown destination for the first time?",
    answer:
      "Yes, usually, because in case of group travel, everything is already structured and there are less problems with researching and logistics.",
  },
  {
    question: "Does solo travel require more planning effort than group travel?",
    answer:
      "Yes, solo travellers carry the full research and logistics burden, whereas group travel itineraries are typically pre-planned by the operator.",
  },
  {
    question: "What's the main appeal of solo travel over group travel?",
    answer:
      "Complete flexibility and independence — solo travel allows full control over pace, itinerary, and decision-making throughout the trip.",
  },
  {
    question: "Are small group tours different from large coach tours?",
    answer:
      "Yes, small group and private family tours generally offer more flexibility and a more personalised itinerary compared to large, fixed-schedule coach tours.",
  },
  {
    question: "How do I decide between solo and group travel for my next trip?",
    answer:
      "Consider your comfort with independent problem-solving, desired social interaction, planning effort tolerance, and the logistical complexity of your destination.",
  },
];

// A WebPage that also carries the FAQPage markup — safe because the same
// questions and answers are rendered on the page, in the layout's accordion.
const articleJsonLd = graph([
  webPage({
    path: "/blog/solo-vs-group-travel-guide",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/blog/solo-vs-group-travel-guide", [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Solo vs. Group Travel" },
  ]),
]);

export default function SoloVsGroupTravelPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <SoloVsGroupArticle faqs={FAQS} />
    </main>
  );
}
