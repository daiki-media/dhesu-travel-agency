"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";

/**
 * Body copy is taken verbatim from
 * content-document/tour-types/Honeymoon Packages From Malaysia_ Comparing the
 * Top Destinations.docx — the draft's own order, headings and wording.
 *
 * The page had been written to the sheet's one-line brief before that draft
 * surfaced; it now follows the draft. The same draft is also cut down onto the
 * three destination honeymoon guides, which this page links out to.
 */

const PHOTO = {
  hero: "/images/guides/mauritius-resort-pool.jpg",
  heroAlt: "A resort pool opening onto the sea at dusk in Mauritius",
  bali: "/images/guides/tanah-lot-sunset.jpg",
  baliAlt: "The sea temple at Tanah Lot silhouetted against a Bali sunset",
  mauritius: "/images/guides/mauritius-resort-garden.jpg",
  mauritiusAlt: "A resort garden running down to the beach in Mauritius",
  europe: "/images/guides/santorini-oia.jpg",
  europeAlt: "White houses and blue domes above the caldera at Oia, Santorini",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// The draft's own internal links. The .docx points at the old holidayidea.com.my
// site: /BALI/ for the two Bali anchors, the bare homepage for Mauritius,
// search-travel.php?s=Europe & Canada for the two Europe ones, and the quote
// form for the wedding-date paragraph. Each is remapped to the page that now
// covers it.
const BALI = "/tours/indonesia/bali";
const MAURITIUS = "/tours/mauritius";
const EUROPE = "/tours/europe";
const QUOTE = "/contact";

const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

// Each destination's own honeymoon guide, for the cards that close the page.
const GUIDES = {
  bali: "/tours/indonesia/honeymoon-holiday-guide-2026",
  mauritius: "/tours/mauritius/honeymoon-holiday-guide-2026",
  europe: "/tours/europe/honeymoon-holiday-guide-2026",
};

const comparison = [
  {
    destination: "Bali",
    href: BALI,
    flightTime: "Short (under 4 hours)",
    bestFor: "Couples wanting a quick, affordable romantic escape",
    tripLength: "4–6 days",
  },
  {
    destination: "Mauritius",
    href: MAURITIUS,
    flightTime: "Long-haul (around 8–9 hours)",
    bestFor: "Couples wanting ultra-luxury, secluded island resorts",
    tripLength: "5–7 days",
  },
  {
    destination: "Europe",
    href: EUROPE,
    flightTime: "Long-haul (12+ hours)",
    bestFor: "Couples wanting culture, cities, and scenic romance",
    tripLength: "10–14 days",
  },
];

const whyBali = [
  "Shortest flight time of the three main options",
  "More budget-flexible than Mauritius or Europe",
  "Well-developed private villa and resort infrastructure",
  "Easy to combine relaxation with light cultural sightseeing",
];

const whyMauritius = [
  "Higher-end, dedicated honeymoon resort culture",
  "Greater emphasis on seclusion and privacy",
  "Stunning natural scenery with fewer crowds than more mainstream destinations",
  "A genuine “away from it all” island feel",
];

const whyEurope = [
  "A genuinely different pace and experience from beach-focused destinations",
  "Iconic, widely recognised romantic cities (Paris, Venice, Santorini)",
  "Suited to couples who enjoy sightseeing and cultural immersion together",
  "Often viewed as a bigger, longer trip investment given flight time and duration",
];

const byStyle = [
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

const budget = [
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

const framework = [
  {
    step: "Start with your available time.",
    detail:
      "Shorter trips (under a week) generally favour Bali or Mauritius; longer trips (10+ days) make Europe more feasible.",
  },
  {
    step: "Consider your budget range.",
    detail:
      "Bali offers the most flexibility; Mauritius and Europe both represent a larger investment.",
  },
  {
    step: "Think about your ideal pace.",
    detail:
      "Beach-and-relaxation couples lean toward Bali or Mauritius; culture-and-exploration couples lean toward Europe.",
  },
  {
    step: "Decide on seclusion vs. variety.",
    detail:
      "Mauritius offers the most privacy-focused experience; Europe offers the most variety and activity.",
  },
];

const emerging = [
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

/** Section wrapper: label, heading, then the body. */
function Section({
  label,
  heading,
  children,
  className = "",
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel text={label} />
          <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6 max-w-3xl">
            {heading}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

/**
 * One of the three destination sections: the draft's paragraph, then its own
 * "why couples choose" list, set beside the destination's photo.
 */
function DestinationBlock({
  body,
  reasonsHeading,
  reasons,
  guideHref,
  guideLabel,
  image,
  imageAlt,
  reverse = false,
}: {
  body: React.ReactNode;
  reasonsHeading: string;
  reasons: string[];
  guideHref: string;
  guideLabel: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <p className="text-gray-600 leading-relaxed mb-6">{body}</p>
        <p className="font-primary font-semibold text-teal-navy mb-5">
          {reasonsHeading}
        </p>
        <ul className="space-y-4 mb-6">
          {reasons.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <Link
          href={guideHref}
          className="text-primary font-semibold text-[15px] underline underline-offset-4 hover:text-teal-navy transition-colors"
        >
          {guideLabel}
        </Link>
      </div>
      <div
        className={`lg:col-span-5 relative h-64 lg:h-[420px] overflow-hidden rounded-2xl ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </div>
  );
}

export default function HoneymoonHubContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Tour Types"
        title="Honeymoon Packages From Malaysia"
        titleAccent="Comparing the Top Destinations"
        intro="Selecting a honeymoon destination is one of the most important choices travelers make during their vacations. It is not just about the scenic beauty; it is about the pace and privacy of the place that will make it memorable for the travelers. This page will compare the most popular honeymoon destinations of Malaysia."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />

      {/* ── THE COMPARISON TABLE ──────────────────────────────────────────── */}
      <Section
        label="Side by Side"
        heading="Comparing Malaysia's Top Honeymoon Destinations"
        className="bg-white"
      >
        {/* Wide table, so it scrolls inside its own container on a phone. */}
        <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                {[
                  "Destination",
                  "Flight time from Malaysia",
                  "Best for",
                  "Typical trip length",
                ].map((header) => (
                  <th
                    key={header}
                    className="py-3 pr-6 font-primary font-bold text-teal-navy text-xs uppercase tracking-widest"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.destination} className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-[15px] font-semibold align-top">
                    <Link href={row.href} className={INLINE_LINK}>
                      {row.destination}
                    </Link>
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top">
                    {row.flightTime}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top">
                    {row.bestFor}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top">
                    {row.tripLength}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── BALI ──────────────────────────────────────────────────────────── */}
      <Section
        label="Bali"
        heading="Bali: The Accessible Romantic Escape"
        className="bg-teal-light/40"
      >
        <DestinationBlock
          body={
            <>
              A{" "}
              <Link href={BALI} className={INLINE_LINK}>
                trip to Bali
              </Link>{" "}
              will continue to be the best choice for couples from Malaysia to spend their
              honeymoon as the place is just an hour away by plane along with being very
              romantic and offers private villas, cruises, and dinners under candlelight
              amidst the terraced fields and cliffs.
            </>
          }
          reasonsHeading="Why couples choose Bali:"
          reasons={whyBali}
          guideHref={GUIDES.bali}
          guideLabel="Read the Bali honeymoon guide"
          image={PHOTO.bali}
          imageAlt={PHOTO.baliAlt}
        />
      </Section>

      {/* ── MAURITIUS ─────────────────────────────────────────────────────── */}
      <Section
        label="Mauritius"
        heading="Mauritius: Ultra-Luxury Island Seclusion"
        className="bg-white"
      >
        <DestinationBlock
          reverse
          body="Mauritius offers a step up in seclusion and resort-level luxury compared to Bali, with turquoise lagoons, private beach dinners, and an island atmosphere built specifically around romantic getaways. It suits couples who see their honeymoon as a dedicated luxury investment, prioritising resort quality and privacy over sightseeing variety."
          reasonsHeading="Why couples choose Mauritius:"
          reasons={whyMauritius}
          guideHref={GUIDES.mauritius}
          guideLabel="Read the Mauritius honeymoon guide"
          image={PHOTO.mauritius}
          imageAlt={PHOTO.mauritiusAlt}
        />
      </Section>

      {/* ── EUROPE ────────────────────────────────────────────────────────── */}
      <Section
        label="Europe"
        heading="Europe: Culture, Cities & Scenic Romance"
        className="bg-teal-light/40"
      >
        <DestinationBlock
          body={
            <>
              For those couples that would like to see their honeymoon not only as a
              romantic escape but also as a vacation that can provide them with some
              cultural knowledge as well as give them the chance to see various
              attractions, then a multi-nation{" "}
              <Link href={EUROPE} className={INLINE_LINK}>
                European tour
              </Link>{" "}
              will provide something entirely different from the beach resort kind of
              honeymoon.
            </>
          }
          reasonsHeading="Why couples choose Europe:"
          reasons={whyEurope}
          guideHref={GUIDES.europe}
          guideLabel="Read the Europe honeymoon guide"
          image={PHOTO.europe}
          imageAlt={PHOTO.europeAlt}
        />
      </Section>

      {/* ── CHOOSING BY STYLE ─────────────────────────────────────────────── */}
      <Section
        label="By Style"
        heading="Choosing Based on Honeymoon Style"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {byStyle.map((row) => (
            <div
              key={row.priority}
              className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
            >
              <p className="sm:col-span-8 text-gray-600 text-[15px] leading-relaxed">
                {row.priority}
              </p>
              <p className="sm:col-span-4 font-primary font-bold text-teal-navy text-[15px]">
                {row.destination}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── BUDGET ────────────────────────────────────────────────────────── */}
      <Section
        label="Budget"
        heading="Budget Considerations by Destination"
        className="bg-teal-light/40"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl mb-6">
          {budget.map((row) => (
            <div
              key={row.destination}
              className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
            >
              <p className="sm:col-span-3 font-primary font-bold text-teal-navy text-[15px]">
                {row.destination}
              </p>
              <p className="sm:col-span-9 text-gray-600 text-[15px] leading-relaxed">
                {row.positioning}
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Exact costs vary significantly based on hotel category, season, and specific
          inclusions, so it&rsquo;s worth requesting a tailored quote for accurate
          comparison rather than relying on general assumptions.
        </p>
      </Section>

      {/* ── HONEYMOON VS STANDARD PACKAGE ─────────────────────────────────── */}
      <Section
        label="The Difference"
        heading="What Makes a Honeymoon Package Different From a Standard Holiday Package"
        className="bg-white"
      >
        <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="py-3 pr-6 font-primary font-bold text-teal-navy text-xs uppercase tracking-widest w-1/5">
                  Element
                </th>
                <th className="py-3 pr-6 font-primary font-bold text-gray-400 text-xs uppercase tracking-widest">
                  Standard holiday package
                </th>
                <th className="py-3 font-primary font-bold text-primary text-xs uppercase tracking-widest">
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
                  <td className="py-5 pr-6 text-gray-400 text-[15px] leading-relaxed align-top">
                    {row.standard}
                  </td>
                  <td className="py-5 text-gray-700 text-[15px] leading-relaxed align-top">
                    {row.honeymoon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── THE FRAMEWORK ─────────────────────────────────────────────────
          The draft numbers these, so they stay an ordered list. */}
      <Section
        label="How to Decide"
        heading="How to Decide: A Simple Framework"
        className="bg-teal-light/40"
      >
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {framework.map((row, i) => (
            <li key={row.step}>
              <p className="font-primary font-bold text-primary text-sm tracking-widest mb-2">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.step}
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── EMERGING DESTINATIONS ─────────────────────────────────────────── */}
      <Section
        label="Also Worth a Look"
        heading="Other Emerging Honeymoon Destinations Worth Considering"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {emerging.map((row) => (
            <div
              key={row.destination}
              className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
            >
              <p className="sm:col-span-3 font-primary font-bold text-teal-navy text-[15px]">
                {row.destination}
              </p>
              <p className="sm:col-span-9 text-gray-600 text-[15px] leading-relaxed">
                {row.appeal}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WEDDING DATE ──────────────────────────────────────────────────── */}
      <Section
        label="Timing"
        heading="Planning Your Honeymoon Around Your Wedding Date"
        className="bg-teal-light/40"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Honeymoons are often planned to start just after a wedding ceremony, implying
          that there is a shorter booking window compared to the usual vacation travel
          arrangements, particularly during Malaysia&rsquo;s peak wedding seasons. It would
          be wise to{" "}
          <Link href={QUOTE} className={INLINE_LINK}>
            plan for the honeymoon
          </Link>{" "}
          well ahead of time because popular resorts, particularly those in Mauritius,
          usually fill up very fast during peak wedding seasons.
        </p>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CtaSection
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        heading="Find Your Perfect Honeymoon Destination"
        body="Whether you're drawn to Bali's accessible romance, Mauritius's luxury seclusion, or Europe's cultural charm, a consultant can help you choose and plan the right trip. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
