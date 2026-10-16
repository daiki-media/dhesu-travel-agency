import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import ToursIndexContent from "./ToursIndexContent";
import { tourPages } from "@/src/data/tourPages";
import { linkedFaqsAsText, type LinkedFaq } from "@/src/data/linkedFaq";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  nodeId,
  webPage,
} from "@/src/data/structuredData";

const TITLE = "Tour Packages from Malaysia | Dhesu Travel & Tours";
const DESCRIPTION =
  "Browse tour packages to India, Nepal, Sri Lanka, Bhutan, Vietnam, Cambodia, Laos, Malaysia and Indonesia. 35+ years of trusted travel expertise with hand-picked itineraries, private guides and full on-ground support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/tours",
  },
};

// Mirrors the card list ToursIndexContent renders — every destination hub, in
// the same order. The markup has to match what is on the page, so this list
// must keep tracking that component rather than filtering separately.
const destinationCards = Object.values(tourPages).map((d) => ({
  name: d.meta.name,
  url: `/tours/${d.meta.slug}`,
}));

const faqs: LinkedFaq[] = [
  {
    question: "Which destination is best for a first overseas trip?",
    answer: [
      "Bali and Vietnam are the easiest places to start, with short flights and well-trodden itineraries such as the ",
      { text: "4 day Best of Bali", href: "/tours/indonesia/bali/4-day-best-of-bali/" },
      " or a ",
      { text: "3 day Hanoi and Halong Bay trip", href: "/tours/vietnam/north-vietnam/3-day-hanoi-halong-bay-super-saver/" },
      ". India rewards more planning but offers far more variety, and a short trip like the ",
      { text: "Golden Triangle", href: "/tours/india/golden-triangle/" },
      " is a good introduction.",
    ],
  },
  {
    question: "Do I need a visa?",
    answer: [
      "It depends on the country. For India, Malaysians apply for an e-Visa, and the same applies when you combine cities such as Agra and ",
      { text: "Kashmir", href: "/tours/india/kashmir/" },
      " in one trip. For Europe, we give Schengen visa guidance. Tell our team where you’re going when you ",
      { text: "get in touch", href: "/contact-us/" },
      " and we’ll point you to the documents you’ll need.",
    ],
  },
  {
    question: "What does “From” price mean?",
    answer: [
      "It’s the starting price per person for that package. Each listing also shows the saving per couple against the reference price, so you can see what you’re getting. The final price depends on your hotel category, group size and travel dates, so a quote based on your plans is more accurate than the headline number.",
    ],
  },
  {
    question: "Can I change a package or ask for a country you don’t list?",
    answer: [
      "Yes. Trip length, hotels and activities can all be adjusted, and destinations without fixed packages, like ",
      { text: "Dubai", href: "/tours/dubai/" },
      " or ",
      { text: "Europe", href: "/tours/europe/" },
      ", are arranged to order. The quickest route is a ",
      { text: "custom itinerary request", href: "/custom-itinerary-request/" },
      " with your dates and who is travelling.",
    ],
  },
  {
    question: "Do you offer Muslim-friendly tours?",
    answer: [
      "Yes. There are dedicated programmes for ",
      { text: "Nepal", href: "/tours/nepal/muslim-friendly/" },
      " and ",
      { text: "Sri Lanka", href: "/tours/sri-lanka/muslim-friendly/" },
      ", and our wider ",
      { text: "approach to Muslim-friendly holidays", href: "/muslim-friendly-holiday-travel-guide/" },
      " explains how meals and prayer times are handled on other routes.",
    ],
  },
  {
    question: "When should I book for school holidays or year-end?",
    answer: [
      "As early as you can. Popular windows fill up, so families targeting the mid-year break or December should check the ",
      { text: "school holiday offers", href: "/school-holiday-travel-deals-2026/" },
      " and ",
      { text: "year-end holiday deals", href: "/year-end-holiday-travel-deals-2026/" },
      " well in advance, and the ",
      { text: "promotions page", href: "/promotions/" },
      " lists anything running now.",
    ],
  },
  {
    question: "Can you arrange trips for companies and large groups?",
    answer: [
      "Yes. We plan ",
      { text: "group and incentive travel", href: "/group-incentive-travel-packages/" },
      " for companies, clubs and extended families, and can match the programme to a budget per person.",
    ],
  },
  {
    question: "Is Dhesu licensed, and how do I reach you?",
    answer: [
      "Dhesu is licensed by the Ministry of Tourism Malaysia (KKKP 1439) and accredited by IATA, PATA and MATTA. You can ",
      { text: "contact our Kuala Lumpur office", href: "/contact-us/" },
      " or message us on ",
      { text: "WhatsApp at +6019 336 4465", href: "https://wa.me/60193364465" },
      ".",
    ],
  },
];

const toursJsonLd = graph([
  webPage({
    path: "/tours",
    name: TITLE,
    description: DESCRIPTION,
    type: "CollectionPage",
    hasBreadcrumb: true,
    mainEntity: { "@id": nodeId("/tours", "destinations") },
  }),
  breadcrumbList("/tours", [
    { name: "Home", url: "/" },
    { name: "Tours" },
  ]),
  {
    "@type": "ItemList",
    "@id": nodeId("/tours", "destinations"),
    name: "Destinations",
    numberOfItems: destinationCards.length,
    itemListElement: destinationCards.map((destination, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: destination.name,
      url: destination.url,
    })),
  },
  {
    "@type": "FAQPage",
    "@id": nodeId("/tours", "faq"),
    mainEntity: faqQuestions(linkedFaqsAsText(faqs)),
  },
]);

export default function ToursIndexPage() {
  return (
    <>
      <JsonLd data={toursJsonLd} />
      <ToursIndexContent faqs={faqs} />
    </>
  );
}
