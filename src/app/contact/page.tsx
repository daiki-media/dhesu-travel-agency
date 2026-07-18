import type { Metadata } from "next";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import ContactContent from "@/src/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Dhesu Travel & Tours (M) Sdn Bhd",
  description:
    "Talk to a Dhesu travel specialist. Call +603 2287 5525, WhatsApp +6019 336 4465 or email tours@dhesu.travel. Level 2 & 3, Wisma Dhesu, No. 5 Jalan Bangsar Utama 3, 59000 Kuala Lumpur.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <TopBar />
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
