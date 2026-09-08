"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, Section } from "./primitives";

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
        <DataTable
          headers={["Your priority", "Best-suited destination"]}
          minWidth={480}
          boldColumn={1}
          rows={styleTable.map((row) => [row.priority, row.destination])}
        />
      </Section>

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

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
