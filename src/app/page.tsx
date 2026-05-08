import HeroSection from "@/src/components/homepage/HeroSection"
import HeroSection2 from "@/src/components/homepage/HeroSection2"
import Hero3 from "@/src/components/homepage/Hero3"
import SpecialPackages from "@/src/components/homepage/Package"
import FeaturedDestinations from "@/src/components/homepage/FeaturedDestinations"
import AboutUs from "@/src/components/homepage/AboutUs"
import Testimonial from "@/src/components/homepage/Testimonial"

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroSection2 />
      <Hero3 />
      <SpecialPackages />
      <FeaturedDestinations />
      <AboutUs />
      <Testimonial />
    </>
  );
}
