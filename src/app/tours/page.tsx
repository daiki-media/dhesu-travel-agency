import type { Metadata } from "next";
import ToursIndexContent from "@/src/components/tours/ToursIndexContent";

export const metadata: Metadata = {
  title: "Tour Packages from Malaysia | Dhesu Travel & Tours",
  description:
    "Browse tour packages to India, Nepal, Sri Lanka, Bhutan, Vietnam, Cambodia, Laos, Malaysia and Indonesia. 35+ years of trusted travel expertise with hand-picked itineraries, private guides and full on-ground support.",
  alternates: {
    canonical: "/tours",
  },
};

export default function ToursIndexPage() {
  return <ToursIndexContent />;
}
