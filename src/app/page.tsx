import HeroSection from "@/src/components/homepage/HeroSection"
import HeroSection2 from "@/src/components/homepage/HeroSection2"
import SpecialPackages from "@/src/components/homepage/Package"
import FeaturedDestinations from "@/src/components/homepage/FeaturedDestinations"

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroSection2 />
      <SpecialPackages />
      <FeaturedDestinations />
    </>
  );
}
