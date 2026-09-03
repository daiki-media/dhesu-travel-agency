import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import VisaGuideArticle from "@/src/components/blog/VisaGuideArticle";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 37. Title and description are copied verbatim.
const TITLE =
  "Visa Requirements for Malaysian Travellers: A Practical Guide by Destination";
const DESCRIPTION =
  "A practical visa guide for Malaysian travellers covering popular destinations — visa-free access, e-visas, and where requirements often change.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "visa requirements malaysian travellers",
  alternates: {
    canonical: "/blog/malaysia-travel-visa-guide-2026",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft.
// Lives here rather than in VisaGuideArticle so the same list can feed both the
// rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question: "Do Malaysians require a visa to enter most Southeast Asian countries?",
    answer:
      "Most Southeast Asian countries, such as Indonesia, Thailand, and Vietnam, do not require a visa for visiting Malaysia for a short stay. However, this may vary depending on the country.",
  },
  {
    question: "How does the Schengen visa work if you visit several European countries?",
    answer:
      "The Schengen visa covers travel throughout the Schengen states; one needs to apply to the embassy of their intended destination.",
  },
  {
    question: "Does the UK participate in the Schengen visa regime?",
    answer:
      "The United Kingdom is not a member state of the Schengen region; therefore, no Schengen visa is required.",
  },
  {
    question: "What is the difference between e-visa and visa on arrival?",
    answer:
      "The e-visa is applied online prior to visiting a destination, whereas the visa on arrival is issued upon entering the territory of the destination.",
  },
  {
    question: "How far in advance should one apply for the visa?",
    answer:
      "It depends on the destination country; however, applying a few weeks in advance is recommended.",
  },
  {
    question: "Why do visa requirements sometimes change without much notice?",
    answer:
      "Governments periodically update visa policy based on bilateral agreements, security considerations, or reciprocal arrangements, which can shift with limited advance notice.",
  },
  {
    question: "Does my passport need extra validity beyond my travel dates?",
    answer:
      "Many countries require at least 6 months of passport validity beyond your travel dates; always confirm this specific requirement for your destination.",
  },
  {
    question: "Can a travel agency help manage visa requirements for my trip?",
    answer:
      "Yes, an established consultant typically confirms current visa requirements as part of your booking process, reducing the risk of outdated or incorrect information.",
  },
];

// The FAQ markup is safe because the same questions and answers are rendered on
// the page, inside the shared blog layout's accordion.
const articleJsonLd = graph([
  webPage({
    path: "/blog/malaysia-travel-visa-guide-2026",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/blog/malaysia-travel-visa-guide-2026", [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Visa Guide for Malaysian Travellers" },
  ]),
]);

export default function MalaysiaTravelVisaGuidePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <TopBar />
      <Navbar />
      <VisaGuideArticle faqs={FAQS} />
      <Footer />
    </main>
  );
}
