import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import SchoolHolidayContent from "./SchoolHolidayContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 32. Title and description are copied verbatim; the
// body copy comes from content-document/sesional&school-holiday/.
const PATH = "/school-holiday-travel-deals-2026";
const TITLE = "School Holiday Deals 2026: Malaysian Family Packages While Availability Lasts";
const DESCRIPTION =
  "School holiday holiday packages for 2026 — family-friendly destinations, limited-time pricing, and fast-filling dates. Book before slots run out.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "school holiday package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/seasonal/theme-park-family.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question: "When are the school holidays in Malaysia in 2026?",
    answer:
      "The school holidays of Malaysia usually occur during March, mid-to-late May or early June, August, and extended year-end holidays.",
  },
  {
    question: "How many months before the school holidays should I plan my vacation?",
    answer: "It is recommended to plan 4 to 6 months before in order to get better rates.",
  },
  {
    question: "Why does the price rise so much nearer the school holiday dates?",
    answer:
      "The prices will rise significantly due to increased demand during this period as people cannot move their traveling dates around.",
  },
  {
    question: "Which destinations are best for a weeklong school holiday trip?",
    answer:
      "The destinations with shorter flights such as Bali, Thailand, or Vietnam are the most suitable for a weeklong holiday.",
  },
  {
    question: "Will the theme park tickets be included in the school holiday package?",
    answer:
      "It may depend on the specific package. You need to clarify this question with the consultant, as attraction tickets may be sold out at peak times.",
  },
  {
    question:
      "Is the year-end break long enough for a longer-haul destination like Australia or Europe?",
    answer:
      "Yes, the extended year-end break generally provides enough time for longer-haul destinations, particularly Australia given its overlapping peak season.",
  },
  {
    question: "Can I get connecting or family rooms if I book close to the travel date?",
    answer:
      "It becomes considerably harder, since family-friendly accommodation categories tend to book out earlier than standard rooms during peak periods.",
  },
  {
    question:
      "Do package deals offer better value than booking flights and hotels separately for school holidays?",
    answer:
      "Often yes, particularly the earlier a bundled package is secured, since group and package pricing tends to be more favourable than late individual bookings.",
  },
];

const schoolHolidayJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/seasonal/theme-park-family.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "School Holiday Deals 2026" },
  ]),
]);

export default function SchoolHolidayPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={schoolHolidayJsonLd} />
      <SchoolHolidayContent faqs={faqs} />
    </main>
  );
}
