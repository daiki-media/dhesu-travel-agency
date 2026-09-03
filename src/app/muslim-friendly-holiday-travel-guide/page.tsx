import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import MuslimFriendlyContent from "@/src/components/tourTypes/MuslimFriendlyContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 28. Title and description are copied verbatim; the
// body copy comes from content-document/tour-types/.
// Per-country versions already exist at /tours/nepal/muslim-friendly and
// /tours/sri-lanka/muslim-friendly; this is the page above them.
const PATH = "/muslim-friendly-holiday-travel-guide";
const TITLE = "Muslim-Friendly Tour Packages: Travel With Confidence and Convenience";
const DESCRIPTION =
  "Muslim-friendly holiday packages from Malaysia with halal food arrangements and prayer facility access. Travel with confidence and convenience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "muslim tour package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/tour-types/mosque-night-istanbul.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question:
      "What makes the package truly Muslim-friendly compared to a general package?",
    answer:
      "It explicitly provides certification for halal food, takes into account the time needed for prayers in terms of itinerary planning, and includes cultural awareness while choosing destinations and activities.",
  },
  {
    question: "Which are the easiest destinations for Muslim-friendly travel?",
    answer:
      "Destinations where Muslims constitute the majority population such as Turkey, Indonesia, and UAE are among those that would provide the easiest halal food and prayer facilities access.",
  },
  {
    question: "Is it possible to ensure halal food in advance at the hotels?",
    answer:
      "Yes, the well-planned itinerary ensures that halal-certified facilities for eating are available in hotels and restaurants during your travel.",
  },
  {
    question: "Is Europe an appropriate destination for Muslim-friendly travel?",
    answer:
      "Traveling to Europe may be possible if you are properly prepared, since the number of halal food places in major cities is increasing.",
  },
  {
    question:
      "How does an itinerary take into consideration prayer timings in sightseeing?",
    answer:
      "A good itinerary always has time buffer allowance for prayer breaks, especially considering Friday Jumu'ah prayer timings when needed.",
  },
  {
    question: "Is a Muslim-friendly package more costly than a regular package?",
    answer:
      "No, not necessarily, the price will depend upon the destination and the contents of the package in general and not because it is a Muslim-friendly package.",
  },
  {
    question: "Is a Muslim-friendly tour possible at the same time as a family vacation?",
    answer:
      "Yes, there are destinations such as the UAE and Turkey, where both aspects of travel are available simultaneously.",
  },
  {
    question: "How do I know if a destination's halal claims are reliable?",
    answer:
      "Working with a consultant experienced in Muslim-friendly travel planning helps verify genuine certification rather than relying on general marketing claims.",
  },
];

const muslimFriendlyJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/tour-types/mosque-night-istanbul.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Muslim-Friendly Tour Packages" },
  ]),
]);

export default function MuslimFriendlyPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={muslimFriendlyJsonLd} />
      <TopBar />
      <Navbar />
      <MuslimFriendlyContent faqs={faqs} />
      <Footer />
    </main>
  );
}
