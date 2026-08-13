import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import ContactContent from "@/src/components/contact/ContactContent";
import {
  breadcrumbList,
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

// The phone numbers, address and opening hours shown on this page are the same
// ones the organisation node already carries, so this page points at that node
// rather than restating them.
const contactJsonLd = graph([
  webPage({
    path: "/contact",
    name: TITLE,
    description: DESCRIPTION,
    type: "ContactPage",
    hasBreadcrumb: true,
    about: orgRef,
    mainEntity: orgRef,
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
      <TopBar />
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
