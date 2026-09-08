"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, Section } from "./primitives";

/**
 * The Mauritius cut of the honeymoon-comparison draft at
 * content-document/tour-types/Honeymoon Packages From Malaysia_ Comparing the
 * Top Destinations.docx — one draft, split across three pages (Bali, Europe,
 * Mauritius). This page is framed as the comparison itself, so it leads with
 * the draft's own comparison table before narrowing to Mauritius, then
 * cross-links Bali and Europe. The draft's opening paragraph is not repeated
 * here; it is the hero lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/mauritius.ts.
 *
 * Follows the shape of BaliGuide.tsx in this folder: same section devices,
 * same type sizes, same spacing. Change the words, not the structure.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/mauritius-hotel-room.jpg";
const PHOTO_ALT = "A resort room on the Mauritius coast";


const comparisonTable = [
  {
    destination: "Bali",
    flightTime: "Short (under 4 hours)",
    bestFor: "Couples wanting a quick, affordable romantic escape",
    tripLength: "4–6 days",
  },
  {
    destination: "Mauritius",
    flightTime: "Long-haul (around 8–9 hours)",
    bestFor: "Couples wanting ultra-luxury, secluded island resorts",
    tripLength: "5–7 days",
  },
  {
    destination: "Europe",
    flightTime: "Long-haul (12+ hours)",
    bestFor: "Couples wanting culture, cities, and scenic romance",
    tripLength: "10–14 days",
  },
];

const whyMauritius = [
  "Higher-end, dedicated honeymoon resort culture",
  "Greater emphasis on seclusion and privacy",
  "Stunning natural scenery with fewer crowds than more mainstream destinations",
  "A genuine “away from it all” island feel",
];

const emergingDestinations = [
  {
    destination: "Maldives",
    appeal: "Overwater villas and extreme seclusion, similar positioning to Mauritius",
  },
  {
    destination: "Japan",
    appeal:
      "A distinctive cultural honeymoon experience, particularly popular during cherry blossom or autumn foliage seasons",
  },
  {
    destination: "New Zealand",
    appeal: "Dramatic natural scenery for adventure-inclined couples",
  },
  {
    destination: "Santorini, Greece",
    appeal:
      "Iconic sunset views, often included within broader Europe honeymoon itineraries",
  },
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("mauritius", "honeymoon-holiday-guide-2026");



export default function MauritiusHoneymoonGuide() {
  return (
    <>
      <Section label="Comparison" heading="Comparing Malaysia's top honeymoon destinations">
        <DataTable
          headers={["Destination", "Flight time from Malaysia", "Best for", "Typical trip length"]}
          widths={["w-1/5", undefined, undefined, undefined]}
          rows={comparisonTable.map((row) => [row.destination, row.flightTime, row.bestFor, row.tripLength])}
        />
      </Section>

      <Section label="Why Mauritius" heading="Mauritius: ultra-luxury island seclusion">
        <p className="text-gray-600 leading-relaxed mb-8">
          Mauritius offers a step up in seclusion and resort-level luxury compared to
          Bali, with turquoise lagoons, private beach dinners, and an island atmosphere
          built specifically around romantic getaways. It suits couples who see their
          honeymoon as a dedicated luxury investment, prioritising resort quality and
          privacy over sightseeing variety.
        </p>
        <p className="font-primary font-bold text-teal-navy text-lg mb-4">
          Why couples choose Mauritius:
        </p>
        <ul className="space-y-4">
          {whyMauritius.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

      <Section
        label="Other Options"
        heading="Other emerging honeymoon destinations worth considering"
      >
        <DataTable
          headers={["Destination", "Appeal"]}
          widths={["w-1/4", undefined]}
          minWidth={480}
          rows={emergingDestinations.map((row) => [row.destination, row.appeal])}
        />
      </Section>

      <Section label="Timing" heading="Planning your honeymoon around your wedding date">
        <p className="text-gray-600 leading-relaxed">
          Honeymoons are often planned to start just after a wedding ceremony, implying
          that there is a shorter booking window compared to the usual vacation travel
          arrangements, particularly during Malaysia&rsquo;s peak wedding seasons. It
          would be wise to plan for the honeymoon well ahead of time because popular
          resorts, particularly those in Mauritius, usually fill up very fast during peak
          wedding seasons.
        </p>
      </Section>

      <Section label="Compare" heading="See how Mauritius compares">
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
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />
    </>
  );
}
