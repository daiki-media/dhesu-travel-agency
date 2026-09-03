"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import Button from "@/src/components/Button";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-europe/Mauritius Honeymoon Packages From
 * Malaysia_ Island Luxury for Couples.docx — the draft's own order, headings
 * and wording. The opening paragraph is not repeated here; it is the hero
 * lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/mauritius.ts.
 *
 * Shape mirrors BaliGuide.tsx: same Section/Bullet helpers, same type sizes,
 * same spacing. DataTable and TripRows generalise Bali's table and
 * trip-length row devices for the extra tables this draft has.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/trou-aux-cerfs.jpg";
const PHOTO_ALT = "The Trou aux Cerfs crater above Curepipe, Mauritius";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const whatCouplesWant = [
  {
    look: "Privacy and seclusion",
    offers: "Private beach resorts, adults-only sections, secluded villas",
  },
  {
    look: "Stunning natural scenery",
    offers: "Turquoise lagoons, white-sand beaches, dramatic mountain backdrops",
  },
  {
    look: "Luxury hospitality",
    offers: "Internationally recognised 5-star resort brands",
  },
  {
    look: "Romantic experiences",
    offers: "Private dinners, couples' spa treatments, sunset catamaran cruises",
  },
];

const coasts = [
  {
    coast: "West Coast",
    character: "Calmer waters, dramatic sunsets, active water sports hub",
    bestFor: "Couples wanting a livelier resort area with excursion options",
  },
  {
    coast: "East Coast",
    character: "More secluded, exclusive, quieter resorts",
    bestFor: "Couples prioritising privacy and tranquillity",
  },
  {
    coast: "South Coast",
    character: "Rugged, dramatic scenery, less developed",
    bestFor: "Couples wanting a more natural, less touristy feel",
  },
  {
    coast: "North Coast",
    character: "Popular resort area, vibrant nightlife nearby",
    bestFor: "Couples wanting some nightlife alongside relaxation",
  },
];

const signatureExperiences = [
  "Private beach dinners - Candlelit dining set up directly on the sand, often arranged as a signature resort experience",
  "Catamaran sunset cruises - Sailing along the coastline with drinks and canapés as the sun sets",
  "Couples' spa treatments - Many resorts offer dedicated couples' spa suites for a shared relaxation experience",
  "Île aux Cerfs day trip - A boat excursion to a small islet known for pristine beaches and water activities",
  "Chamarel Seven Coloured Earths - A striking natural geological formation, popular for a scenic day excursion away from the resort",
];

const resortFeatures = [
  {
    feature: "All-inclusive or half-board options",
    why: "Reduces decision fatigue and allows a more relaxed, worry-free stay",
  },
  {
    feature: "Overwater or beachfront villas",
    why: "Elevated romantic setting compared to standard rooms",
  },
  {
    feature: "Adults-only sections or resorts",
    why: "Ensures a consistently quiet, romantic atmosphere",
  },
  {
    feature: "On-site water sports and excursions",
    why: "Convenient access to activities without needing to leave the resort",
  },
  {
    feature: "Honeymoon package inclusions",
    why: "Many resorts offer complimentary upgrades or experiences specifically for honeymooners — worth confirming when booking",
  },
];

const itineraryStructure = [
  { days: "Days 1–3", focus: "Resort relaxation, beach time, settling into island pace" },
  { days: "Day 4", focus: "Île aux Cerfs boat excursion or catamaran cruise" },
  { days: "Day 5", focus: "Chamarel Seven Coloured Earths and south coast scenic drive" },
  { days: "Days 6–7", focus: "Continued resort relaxation, spa treatments, private dining" },
];

const tripLengths = [
  { length: "5 days", suits: "A shorter but still meaningful honeymoon escape" },
  {
    length: "7 days",
    suits: "The most common honeymoon duration, balancing relaxation and excursions",
  },
  {
    length: "10+ days",
    suits: "Couples wanting an extended, fully immersive island experience",
  },
];

const bestTime = [
  {
    season: "Dry Season",
    months: "May–December",
    conditions: "Cooler, less humid, generally considered the most favourable period",
  },
  {
    season: "Wet Season",
    months: "January–April",
    conditions: "Warmer and more humid, with a higher chance of cyclone activity",
  },
];

const included = [
  "Accommodation matched to your selected resort tier",
  "Airport transfers",
  "Selected honeymoon experiences (private dinner, spa treatment, or excursion, depending on package)",
  "A structured but flexible itinerary prioritising relaxation over a packed schedule",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("mauritius", "mauritius-honeymoon-travel-guide-2026");

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

/** Generic data table, generalised from Bali's package-types table. */
function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-teal-navy">
            {headers.map((header, i) => (
              <th
                key={header}
                className={`font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 ${
                  i < headers.length - 1 ? "pr-6" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-gray-200">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-5 align-top text-[15px] leading-relaxed ${
                    ci < row.length - 1 ? "pr-6" : ""
                  } ${ci === 0 ? "font-primary font-bold text-[#1a1a1a]" : "text-gray-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Label / detail rows, from Bali's Trip Length device. */
function TripRows({ rows }: { rows: { label: string; detail: string }[] }) {
  return (
    <div className="border-t-2 border-teal-navy">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
        >
          <p className="sm:col-span-3 font-primary font-bold text-[#1a1a1a] text-[15px]">
            {row.label}
          </p>
          <p className="sm:col-span-9 text-gray-600 text-[15px] leading-relaxed">
            {row.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function MauritiusGuide() {
  return (
    <>
      <Section label="Why Mauritius" heading="Why Mauritius Is a Top Honeymoon Destination">
        <DataTable
          headers={["What couples look for", "What Mauritius offers"]}
          rows={whatCouplesWant.map((r) => [r.look, r.offers])}
        />
      </Section>

      <Section label="Coasts" heading="Choosing the Right Coast">
        <p className="text-gray-600 leading-relaxed mb-6">
          Mauritius&apos;s coastline offers distinctly different characters depending on
          which side of the island your resort is located.
        </p>
        <div className="mb-8">
          <DataTable
            headers={["Coast", "Character", "Best for"]}
            rows={coasts.map((r) => [r.coast, r.character, r.bestFor])}
          />
        </div>
        <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-4">
          Signature Mauritius Honeymoon Experiences
        </h3>
        <ul className="space-y-4">
          {signatureExperiences.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Resorts" heading="What to Look for in a Mauritius Resort">
        <DataTable
          headers={["Resort feature", "Why it matters for honeymooners"]}
          rows={resortFeatures.map((r) => [r.feature, r.why])}
        />
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

      <Section label="Itinerary" heading="Suggested Itinerary Structure">
        <div className="mb-6">
          <TripRows
            rows={itineraryStructure.map((r) => ({ label: r.days, detail: r.focus }))}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Most Mauritius honeymoon itineraries deliberately avoid an overly packed
          schedule, prioritising unstructured resort time over extensive daily
          excursions.
        </p>
      </Section>

      <Section label="Trip Length" heading="Suggested Trip Length">
        <TripRows rows={tripLengths.map((r) => ({ label: r.length, detail: r.suits }))} />
      </Section>

      <Section label="When to Go" heading="Best Time to Visit Mauritius">
        <DataTable
          headers={["Season", "Months", "Conditions"]}
          rows={bestTime.map((r) => [r.season, r.months, r.conditions])}
        />
      </Section>

      <Section label="Inclusions" heading="What's Typically Included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Practical" heading="Practical Travel Tips for Mauritius">
        <p className="text-gray-600 leading-relaxed">
          Mauritius is fairly small, therefore, whichever coast you decide to spend your
          holiday at, your resort will provide good opportunities to enjoy many
          excursions without the need of travelling for long periods. You can be
          confident about being able to communicate effectively in English or French
          due to the colonial past of the country. It is advisable to find out the
          package details provided by your resort, since prices differ depending on
          accommodation type.
        </p>
      </Section>

      <Section label="Family" heading="Mauritius for Multi-Generational Family Honeymoons">
        <p className="text-gray-600 leading-relaxed">
          While Mauritius is primarily marketed toward couples, it&apos;s worth noting
          that some honeymooners choose to extend their trip into a broader family
          celebration, particularly for milestone weddings. Many resorts offer both
          adults-only sections for the couple&apos;s private time and family-friendly
          areas for relatives joining part of the trip, making it a flexible option for
          couples wanting to combine their honeymoon with some shared family
          celebration time.
        </p>
      </Section>

      <Section label="Questions" heading="Frequently asked questions">
        <FaqAccordion items={faqs} />
      </Section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="border-l-2 border-primary pl-8"
      >
        <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl leading-tight mb-3">
          Plan Your Mauritius Honeymoon
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          From private beach dinners to turquoise lagoons, a consultant can help you
          plan the perfect island honeymoon. Request a free, personalised quote today.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/contact">
            <Button variant="light" showArrow size="lg">
              Request a Free Quote
            </Button>
          </Link>
          {/* The sheet's Content Notes ask this page to pair with the honeymoon
              hub. The draft has no sentence to hang that link on, so it sits
              here as a navigation affordance rather than as invented prose. */}
          <Link
            href="/tours/mauritius/honeymoon-holiday-guide-2026"
            className="text-primary-dark font-semibold text-[15px] hover:underline"
          >
            Compare Mauritius with Bali and Europe →
          </Link>
        </div>
      </motion.div>
    </>
  );
}
