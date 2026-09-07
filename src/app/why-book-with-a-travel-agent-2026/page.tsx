import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import WhyBookContent from "./WhyBookContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

const TITLE = "Why Book With a Travel Agent Instead of Doing It Yourself";
const DESCRIPTION =
  "Discover why booking through a travel agent beats DIY planning — custom itineraries, group rates, local support, and real accountability.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "benefits of using a travel agent",
  alternates: {
    canonical: "/why-book-with-a-travel-agent-2026",
  },
};
const FAQS = [
  {
    question:
      "Is it costlier to arrange the vacation through the travel agent than through the internet?",
    answer:
      "Not really. In most cases, the rates per group and packages will give you similar costs or better deals when compared with arranging everything on your own.",
  },
  {
    question: "Will I be able to tailor my tour if I use a travel agent?",
    answer:
      "Yes. In most cases, travel agents will help you customize your tours according to your preferences rather than just giving you fixed package plans.",
  },
  {
    question: "If anything goes wrong, how will I deal with it?",
    answer:
      "A travel agent acts as a point person who can help you sort out any issues which may arise such as delay in flights or mistakes in arrangements.",
  },
  {
    question: "Does the travel agent offer value for simple and short trips?",
    answer:
      "No. It is better for simple and routine vacations to arrange everything on your own.",
  },
  {
    question: "Do travel agents provide group tours only?",
    answer:
      "Not all of them. Travel agents who specialise in offering services to individuals and families prepare customised itineraries for couples as well.",
  },
  {
    question:
      "How much time do travel agents save in booking travel arrangements?",
    answer:
      "The amount of time that can be saved varies according to the level of complexity of the trips. One consultation session can save several hours of research, comparison and itinerary preparation.",
  },
  {
    question: "Are travel agents still relevant when there are online booking tools?",
    answer:
      "Indeed they are. They are especially useful in cases of complex itineraries, difficult destinations and personalized service.",
  },
  {
    question: "What are the signs of a legitimate and reputable travel agent?",
    answer:
      "They include recognized industry certifications like membership of IATA, PATA or MATTA associations and proven operating experience with a real office.",
  },
];

const whyBookJsonLd = graph([
  webPage({
    path: "/why-book-with-a-travel-agent-2026",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/why-book-with-a-travel-agent-2026", [
    { name: "Home", url: "/" },
    { name: "Why Book With a Travel Agent" },
  ]),
]);

export default function WhyBookWithATravelAgentPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={whyBookJsonLd} />
      <WhyBookContent faqs={FAQS} />
    </main>
  );
}
