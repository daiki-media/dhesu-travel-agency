import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import YearEndContent from "@/src/components/seasonal/YearEndContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 33. Title and description are copied verbatim; the
// body copy comes from content-document/sesional&school-holiday/.
const PATH = "/year-end-holiday-travel-deals-2026";
const TITLE = "Year-End Holiday Deals 2026: Malaysia's Busiest Travel Window";
const DESCRIPTION =
  "Year-end holiday packages for 2026 — the busiest travel window of the year. Lock in pricing and availability before peak season demand hits.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "year end holiday package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/seasonal/winter-ice-festival.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question: "Why is the end-of-year period considered the busiest time for traveling?",
    answer:
      "This is the time when there are the longest school holidays in Malaysia coupled with Christmas and New Year travel needs worldwide.",
  },
  {
    question: "How far ahead should I plan my vacation at the end of the year?",
    answer:
      "At least six months in advance, as prices start increasing and availability starts decreasing with every passing week.",
  },
  {
    question: "Which destinations are the most frequently visited at the end of the year?",
    answer:
      "Australia, Japan, Europe and Bali are among the most sought-after destinations.",
  },
  {
    question: "Can I arrange for the New Year Eve party on my own separately?",
    answer:
      "Yes, but it is better to fix it before coming here because these parties usually take place according to a schedule and at a limited number of places.",
  },
  {
    question: "Does year-end pricing impact all locations equally?",
    answer:
      "No; those locations which happen to be in their own peak season (such as Australian summer season) usually experience the highest prices increase.",
  },
  {
    question: "Will it be easy to get a good deal if I book closer to year-end?",
    answer:
      "No, since it will be much more difficult to get access to good options in terms of flights, hotels, and other experiences at that time.",
  },
  {
    question: "Is year-end a good time for an incentive travel trip?",
    answer: "Yes; many companies prefer having an incentive travel trip at year-end.",
  },
  {
    question: "What's the ideal trip length for a year-end holiday?",
    answer:
      "This depends on your specific school or work break length, though the extended year-end window often allows for longer trips than other holiday periods.",
  },
];

const yearEndJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/seasonal/winter-ice-festival.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Year-End Holiday Deals 2026" },
  ]),
]);

export default function YearEndPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={yearEndJsonLd} />
      <TopBar />
      <Navbar />
      <YearEndContent faqs={faqs} />
      <Footer />
    </main>
  );
}
