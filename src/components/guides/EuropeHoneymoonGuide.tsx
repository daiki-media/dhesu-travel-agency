"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";

/**
 * The Europe cut of the honeymoon-comparison draft at
 * content-document/tour-types/Honeymoon Packages From Malaysia_ Comparing the
 * Top Destinations.docx — one draft, split across three pages (Bali, Europe,
 * Mauritius). This page leads with Europe's own section and foregrounds
 * Europe, treating Bali and Mauritius as the comparison. The draft's Europe
 * paragraph is not repeated here; it is the hero lead, set as `intro` on the
 * landing page entry in src/data/destinationDetail/europe.ts.
 *
 * Follows the shape of BaliGuide.tsx in this folder: same section devices,
 * same type sizes, same spacing. Change the words, not the structure.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/seine-river-cruise.jpg";
const PHOTO_ALT = "An evening cruise boat on the Seine in Paris";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const whyEurope = [
  "A genuinely different pace and experience from beach-focused destinations",
  "Iconic, widely recognised romantic cities (Paris, Venice, Santorini)",
  "Suited to couples who enjoy sightseeing and cultural immersion together",
  "Often viewed as a bigger, longer trip investment given flight time and duration",
];

const budgetTable = [
  {
    destination: "Bali",
    positioning: "Most accessible; a strong value-for-money honeymoon option",
  },
  {
    destination: "Mauritius",
    positioning: "Mid-to-high; reflects dedicated luxury resort positioning",
  },
  {
    destination: "Europe",
    positioning:
      "Higher overall cost, driven by longer duration and multi-country logistics",
  },
];

const packageDifference = [
  {
    element: "Pacing",
    standard: "Often more activity-packed",
    honeymoon: "Deliberately more relaxed, less rushed",
  },
  {
    element: "Accommodation",
    standard: "Standard room categories",
    honeymoon: "Romantic upgrades (private villas, honeymoon suites) common",
  },
  {
    element: "Included experiences",
    standard: "General sightseeing",
    honeymoon: "Private dinners, couples' spa, sunset cruises",
  },
  {
    element: "Resort selection",
    standard: "General tourist-friendly properties",
    honeymoon: "Adults-only or seclusion-focused properties prioritised",
  },
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("europe", "honeymoon-holiday-guide-2026");

/** Section wrapper: label, heading, then the body. */
function Section({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      <SectionLabel text={label} />
      <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6">
        {heading}
      </h2>
      {children}
    </motion.div>
  );
}

/** List item marked with a short rule rather than an icon tile. */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function EuropeHoneymoonGuide() {
  return (
    <>
      <Section label="Why Europe" heading="Why couples choose Europe">
        <ul className="space-y-4">
          {whyEurope.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Budget" heading="Budget considerations by destination">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/4">
                  Destination
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  General budget positioning
                </th>
              </tr>
            </thead>
            <tbody>
              {budgetTable.map((row) => (
                <tr key={row.destination} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.destination}
                  </td>
                  <td className="py-5 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.positioning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mt-6">
          Exact costs vary significantly based on hotel category, season, and specific
          inclusions, so it&apos;s worth requesting a tailored quote for accurate
          comparison rather than relying on general assumptions.
        </p>
      </Section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
      >
        <Image
          src={PHOTO}
          alt={PHOTO_ALT}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </motion.div>

      <Section
        label="Honeymoon vs Standard"
        heading="What makes a honeymoon package different from a standard holiday package"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/4">
                  Element
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6">
                  Standard holiday package
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  Honeymoon package
                </th>
              </tr>
            </thead>
            <tbody>
              {packageDifference.map((row) => (
                <tr key={row.element} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.element}
                  </td>
                  <td className="py-5 pr-6 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.standard}
                  </td>
                  <td className="py-5 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.honeymoon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Compare" heading="See how Europe compares">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          <div>
            <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
              <Link
                href="/tours/indonesia/honeymoon-holiday-guide-2026"
                className="hover:underline"
              >
                Bali: The Accessible Romantic Escape
              </Link>
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Couples wanting a quick, affordable romantic escape. See the full{" "}
              <Link
                href="/tours/indonesia/bali-holiday-travel-guide-2026"
                className="text-primary font-semibold hover:underline"
              >
                Bali holiday guide
              </Link>
              .
            </p>
          </div>
          <div>
            <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
              <Link
                href="/tours/mauritius/honeymoon-holiday-guide-2026"
                className="hover:underline"
              >
                Mauritius: Ultra-Luxury Island Seclusion
              </Link>
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Couples wanting ultra-luxury, secluded island resorts. See the full{" "}
              <Link
                href="/tours/mauritius/mauritius-honeymoon-travel-guide-2026"
                className="text-primary font-semibold hover:underline"
              >
                Mauritius honeymoon guide
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Find your perfect honeymoon destination"
        body="Whether you&apos;re drawn to Bali&apos;s accessible romance, Mauritius&apos;s luxury seclusion, or Europe&apos;s cultural charm, a consultant can help you choose and plan the right trip. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
