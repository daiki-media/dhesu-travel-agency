import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import CustomItineraryContent from "./CustomItineraryContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 46 — "CONTACT & BOOKING". The sheet supplies no
// title or meta description for this row, and there is no .docx draft, so both
// are written here in the voice of the surrounding rows.
const TITLE =
  "Request a Custom Itinerary: Custom Holiday Packages Malaysia | Dhesu";
const DESCRIPTION =
  "Tell us where you want to go and we will build a custom holiday package around your group, dates and budget. Send the form, WhatsApp or call Dhesu Travel & Tours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "custom holiday package malaysia",
  alternates: {
    canonical: "/custom-itinerary-request",
  },
};

// Evergreen questions only: nothing here quotes a price, a turnaround time or
// anything the site cannot already substantiate. Lives here rather than in the
// content component so the same list feeds both the accordion and the FAQPage
// markup below.
const FAQS = [
  {
    question: "What is a custom itinerary?",
    answer:
      "A custom itinerary is a holiday built around your own dates, group size and interests rather than a fixed departure you join. The route, hotels, transfers and inclusions are all set by what you ask for, and you can revise the draft before anything is confirmed.",
  },
  {
    question: "How many people do I need for a custom trip?",
    answer:
      "Dhesu Travel & Tours plans individual and family travel from as few as two travellers, so you do not need a large group to have an itinerary built for you. Larger family, corporate and incentive groups are also arranged.",
  },
  {
    question: "Can you plan a trip that covers more than one country?",
    answer:
      "Yes. Multi-country routes are one of the main reasons travellers ask for a custom itinerary, because the flights, ground transport and transfers between stops need to be coordinated as a single plan rather than booked separately.",
  },
  {
    question: "Do you arrange pilgrimage and spiritual travel?",
    answer:
      "Yes. Spiritual and cultural travel is a long-standing specialism at Dhesu, including specialised itineraries through India's most sacred sites, where sequencing and access depend on genuine local knowledge.",
  },
  {
    question: "What should I include in my request?",
    answer:
      "Where you want to go, roughly when, how many adults and children are travelling, how many nights you have, the hotel standard you have in mind and anything the trip is being built around. If you are unsure of something, say so and leave it open — we will ask the rest.",
  },
  {
    question: "Should I use the form or WhatsApp?",
    answer:
      "Either. The enquiry form, our WhatsApp numbers and the office phone line all reach the same travel consultants, so use whichever is easiest for you. You are also welcome to visit the office in Bangsar and plan the trip in person.",
  },
  {
    question: "Can you book flights, visas and insurance as well as the tour?",
    answer:
      "Yes. Dhesu is licensed for outbound tours, inbound tours and airline ticketing, and also handles hotel bookings, coach and driver hire, visa applications, foreign exchange and travel insurance, so a custom itinerary can be arranged under one roof.",
  },
  {
    question: "Can I change the itinerary after you send it?",
    answer:
      "Yes. The first draft is a starting point. Swapping a hotel tier, adding or dropping a city, shifting the dates or changing the pace is a normal part of the process, and the itinerary is only booked once you are happy with it.",
  },
  {
    question: "Is Dhesu a licensed travel agency?",
    answer:
      "Yes. DHESU Travel & Tours (M) Sdn Bhd is a registered Malaysian company licensed by the Ministry of Tourism under KKKP 1439, and is accredited with IATA and a member of PATA and MATTA.",
  },
];

// A WebPage that also carries the FAQ markup — safe because every question and
// answer above is rendered in the accordion on the page itself.
const customItineraryJsonLd = graph([
  webPage({
    path: "/custom-itinerary-request",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/custom-itinerary-request", [
    { name: "Home", url: "/" },
    { name: "Request a Custom Itinerary" },
  ]),
]);

export default function CustomItineraryRequestPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={customItineraryJsonLd} />
      <CustomItineraryContent faqs={FAQS} />
    </main>
  );
}
