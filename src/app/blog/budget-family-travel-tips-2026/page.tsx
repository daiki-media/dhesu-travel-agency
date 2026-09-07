import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import BudgetFamilyArticle from "./BudgetFamilyArticle";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 38. Title and description are copied verbatim.
const TITLE = "Budget Travel Tips for Families: Getting More From Every Ringgit";
const DESCRIPTION =
  "Practical budget travel tips for Malaysian families — save on flights, accommodation, and activities without compromising on a great holiday.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "budget family holiday tips malaysia",
  alternates: {
    canonical: "/blog/budget-family-travel-tips-2026",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft.
// The draft repeats questions 4-8 a second time; each question is kept once, in
// the draft's own order. Living here rather than in the article component lets
// the same list feed both the rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question:
      "Is it cheaper to book a family package or arrange everything separately?",
    answer:
      "Bundled packages are often more cost-effective for families, since they consolidate multiple room bookings, activities, and transport into more predictable pricing.",
  },
  {
    question:
      "When is the cheapest time to travel with family outside school holidays?",
    answer:
      "Shoulder season, just before or after peak periods, generally offers meaningful savings with only modest trade-offs in weather or crowd levels.",
  },
  {
    question: "Are all-inclusive resorts a good budget option for families?",
    answer:
      "Yes, bundled meals and activities reduce unpredictable daily spending, which can make total trip costs easier to manage and often lower overall.",
  },
  {
    question:
      "How do I save money on accommodation when there is a large family group?",
    answer:
      "It may be more economical to opt for family rooms or connecting rooms rather than two rooms in total. Some hotels also give free accommodation for small children traveling along with their families in one room.",
  },
  {
    question: "Which is more important, flights or accommodation saving?",
    answer:
      "Both are equally important but package deal pricing may help you save money in both at the same time.",
  },
  {
    question: "Is Southeast Asia a cheaper place to visit than other places?",
    answer:
      "Yes, because of cheap flights and comparatively low prices on ground too.",
  },
  {
    question:
      "How much extra should I budget for emergencies while traveling with my family?",
    answer:
      "Creating a contingency budget beyond the already made budget saves you the trouble of spending more in the case of emergency.",
  },
  {
    question: "Do children get any discount on flights and attractions?",
    answer:
      "Yes, especially infants and young children. Discounts on flights and attractions are based on age.",
  },
];

// A WebPage that also carries the FAQ markup — safe because the same questions
// and answers are rendered on the page itself.
const articleJsonLd = graph([
  webPage({
    path: "/blog/budget-family-travel-tips-2026",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/blog/budget-family-travel-tips-2026", [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Budget Travel Tips for Families" },
  ]),
]);

export default function BudgetFamilyTravelTipsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <BudgetFamilyArticle faqs={FAQS} />
    </main>
  );
}
