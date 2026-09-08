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
// primary keyword are copied verbatim from the sheet. The body copy now comes
// from the draft the sheet's row refers to — content-document/tour-types/
// Honeymoon Packages From Malaysia_ Comparing the Top Destinations.docx — which
// is also the comparison that routes to the three destination guides.
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
    question: "Which destination would be ideal for a short honeymoon vacation?",
    answer:
      "The ideal short honeymoon destination would be Bali, since the destination has a short flight duration as well as an extensive romantic resort network.",
  },
  {
    question:
      "Is the longer flight duration for Mauritius worth it compared to that of Bali?",
    answer:
      "Many couples find the extra time invested in flying worthwhile considering Mauritius's strong honeymoon resort culture.",
  },
  {
    question: "How long would a honeymoon holiday in Europe be?",
    answer:
      "Most European honeymoon tours take up to 10 to 14 days due to the lengthy flights and the multiple destinations.",
  },
  {
    question: "Which is the most affordable honeymoon destination?",
    answer:
      "Bali can be considered the most affordable honeymoon destination while providing an authentic romantic atmosphere.",
  },
  {
    question: "Are the honeymoon tour packages customizable?",
    answer:
      "Yes, honeymoon tours are usually customizable to include other activities according to preference.",
  },
  {
    question: "Is Mauritius or Bali better for total privacy?",
    answer:
      "Mauritius generally offers more dedicated seclusion, particularly through adults-only resort sections, though Bali also offers private villa options.",
  },
  {
    question: "Should we choose a beach destination or a European trip for our honeymoon?",
    answer:
      "This depends on your shared travel style. Beach destinations suit couples wanting relaxation, while Europe suits those who enjoy active sightseeing together.",
  },
  {
    question: "How far in advance should we book our honeymoon?",
    answer:
      "Booking several months ahead is advisable, particularly for peak wedding season periods, to secure preferred resorts, dates, and pricing.",
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
