import type { Metadata } from "next";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import AboutContent from "@/src/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Dhesu Travel & Tours (M) Sdn Bhd",
  description:
    "Incorporated in 1988, Dhesu Travel & Tours is a market-leading Malaysian travel agent licensed by the Ministry of Tourism and accredited by IATA, PATA and MATTA, with operations offices in India and Nepal.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <TopBar />
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
