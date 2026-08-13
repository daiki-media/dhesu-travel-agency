import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import AboutContent from "@/src/components/about/AboutContent";
import {
  breadcrumbList,
  graph,
  orgRef,
  webPage,
} from "@/src/data/structuredData";

const TITLE = "About Us | Dhesu Travel & Tours (M) Sdn Bhd";
const DESCRIPTION =
  "Incorporated in 1988, Dhesu Travel & Tours is a market-leading Malaysian travel agent licensed by the Ministry of Tourism and accredited by IATA, PATA and MATTA, with operations offices in India and Nepal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about-us",
  },
};

// An AboutPage whose subject is the organisation node from the root layout —
// the company details themselves are declared there, once.
const aboutJsonLd = graph([
  webPage({
    path: "/about-us",
    name: TITLE,
    description: DESCRIPTION,
    type: "AboutPage",
    hasBreadcrumb: true,
    about: orgRef,
    mainEntity: orgRef,
  }),
  breadcrumbList("/about-us", [
    { name: "Home", url: "/" },
    { name: "About Us" },
  ]),
]);

export default function AboutUsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={aboutJsonLd} />
      <TopBar />
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
