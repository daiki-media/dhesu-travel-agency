"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";

/**
 * The Bali cut of the honeymoon-comparison draft at
 * content-document/tour-types/Honeymoon Packages From Malaysia_ Comparing the
 * Top Destinations.docx — one draft, split across three pages (Bali, Europe,
 * Mauritius). This page leads with Bali's own section and foregrounds Bali,
 * treating Mauritius and Europe as the comparison. The draft's Bali paragraph
 * is not repeated here; it is the hero lead, set as `intro` on the landing
 * page entry in src/data/destinationDetail/Indonesia.ts.
 *
 * Follows the shape of BaliGuide.tsx in this folder: same section devices,
 * same type sizes, same spacing. Change the words, not the structure.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/pura-taman-ayun.jpg";
const PHOTO_ALT = "The moat and meru towers of Pura Taman Ayun in Mengwi, Bali";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const whyBali = [
  "Shortest flight time of the three main options",
  "More budget-flexible than Mauritius or Europe",
  "Well-developed private villa and resort infrastructure",
  "Easy to combine relaxation with light cultural sightseeing",
];

const styleTable = [
  { priority: "Quick, affordable, still romantic", destination: "Bali" },
  { priority: "Maximum luxury and seclusion", destination: "Mauritius" },
  { priority: "Culture, cities, and active sightseeing", destination: "Europe" },
  { priority: "Shortest possible flight time", destination: "Bali" },
  { priority: "A genuinely “bucket list” luxury trip", destination: "Mauritius" },
  {
    priority: "Combining honeymoon with a milestone Europe trip",
    destination: "Europe",
  },
];

const decideFramework = [
  "Start with your available time. Shorter trips (under a week) generally favour Bali or Mauritius; longer trips (10+ days) make Europe more feasible.",
  "Consider your budget range. Bali offers the most flexibility; Mauritius and Europe both represent a larger investment.",
  "Think about your ideal pace. Beach-and-relaxation couples lean toward Bali or Mauritius; culture-and-exploration couples lean toward Europe.",
  "Decide on seclusion vs. variety. Mauritius offers the most privacy-focused experience; Europe offers the most variety and activity.",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("indonesia", "honeymoon-holiday-guide-2026");

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

export default function BaliHoneymoonGuide() {
  return (
    <>
      <Section label="Why Bali" heading="Why couples choose Bali">
        <ul className="space-y-4">
          {whyBali.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Comparison" heading="Choosing based on honeymoon style">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6">
                  Your priority
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  Best-suited destination
                </th>
              </tr>
            </thead>
            <tbody>
              {styleTable.map((row) => (
                <tr key={row.priority} className="border-b border-gray-200">
                  <td className="py-5 pr-6 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.priority}
                  </td>
                  <td className="py-5 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.destination}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

      <Section label="Deciding" heading="How to decide: a simple framework">
        <ul className="space-y-4">
          {decideFramework.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Compare" heading="See how Bali compares">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
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
          <div>
            <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
              <Link
                href="/tours/europe/honeymoon-holiday-guide-2026"
                className="hover:underline"
              >
                Europe: Culture, Cities &amp; Scenic Romance
              </Link>
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Couples wanting culture, cities, and scenic romance. See the full{" "}
              <Link
                href="/tours/europe/europe-tour-travel-guide-2026"
                className="text-primary font-semibold hover:underline"
              >
                Europe tour guide
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
