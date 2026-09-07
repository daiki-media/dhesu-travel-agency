import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import ContactContent from "./ContactContent";
import { company } from "@/src/data/company";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  orgRef,
  webPage,
} from "@/src/data/structuredData";

const TITLE = "Contact Us | Dhesu Travel & Tours (M) Sdn Bhd";
const DESCRIPTION =
  "Talk to a Dhesu travel specialist. Call +603 2287 5525, WhatsApp +6019 336 4465 or email tours@dhesu.travel. Level 2 & 3, Wisma Dhesu, No. 5 Jalan Bangsar Utama 3, 59000 Kuala Lumpur.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft,
// with the address and email read from the company record so they are stated in
// one place only. Lives here rather than in ContactContent so the same list can
// feed both the rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question: "What's the fastest method to contact you?",
    answer:
      "WhatsApp is the fastest method to contact us for basic questions and email should be used for complex quote requests with lots of details involved.",
  },
  {
    question: "Can I drop by your office without prior notice?",
    answer:
      "You should give a call or WhatsApp before dropping by to ensure that there is a consultant ready to help you at our Bangsar office.",
  },
  {
    question: "Do you provide services related to group or business trips?",
    answer:
      "Yes, our company deals with bookings for holidays as well as business groups and incentive trips; you can start contacting us through email or phone.",
  },
  {
    question: "How long does it take to get a quote after my request?",
    answer:
      "Our response time varies according to the complexity of the request but we do our best to reply as quickly as possible.",
  },
  {
    question: "Can I call your office in case I need assistance during my journey?",
    answer:
      "Yes, you can call our phone number in case you need help while you are on your holiday or trip.",
  },
  {
    question: "Can I contact you via WhatsApp from abroad?",
    answer:
      "Yes, you can contact us using our WhatsApp number whatever number you use all over the world provided that you have WhatsApp installed.",
  },
  {
    question: "Where exactly is your office located?",
    answer: `We're based at ${company.address.full}, in the Bangsar area of the city.`,
  },
  {
    question: "Can I email you instead of calling?",
    answer: `Yes, you can reach our team anytime at ${company.emails[1].address}, and a consultant will follow up with a response.`,
  },
];

// The phone numbers, address and opening hours shown on this page are the same
// ones the organisation node already carries, so this page points at that node
// rather than restating them. The FAQ markup is safe because the same questions
// and answers are rendered on the page.
const contactJsonLd = graph([
  webPage({
    path: "/contact",
    name: TITLE,
    description: DESCRIPTION,
    type: ["ContactPage", "FAQPage"],
    hasBreadcrumb: true,
    about: orgRef,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/contact", [
    { name: "Home", url: "/" },
    { name: "Contact Us" },
  ]),
]);

export default function ContactPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={contactJsonLd} />
      <ContactContent faqs={FAQS} />
    </main>
  );
}
