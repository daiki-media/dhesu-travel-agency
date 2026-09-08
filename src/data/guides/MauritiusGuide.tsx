"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import {
  Bullet,
  DataTable,
  GuideFigure,
  INLINE_LINK,
  Section,
  TripRows,
} from "./primitives";

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

// The draft's own internal links. Like the Hong Kong draft, all three point at
// the old holidayidea.com.my homepage (promo/index.php) rather than a search
// page, so none names a specific target; Mauritius has no sub-pages here
// either, so all three resolve to the /tours/mauritius hub.
const MAURITIUS = "/tours/mauritius";


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

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

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
          due to the colonial past of the country. It is advisable to find out the{" "}
          <Link href={MAURITIUS} className={INLINE_LINK}>
            package details
          </Link>{" "}
          provided by your resort, since prices differ depending on accommodation type.
        </p>
      </Section>

      <Section label="Family" heading="Mauritius for Multi-Generational Family Honeymoons">
        <p className="text-gray-600 leading-relaxed">
          While Mauritius is primarily marketed toward couples, it&apos;s worth noting
          that some honeymooners choose to extend their trip into a broader family
          celebration, particularly for milestone weddings. Many resorts offer both
          adults-only sections for the couple&apos;s private time and{" "}
          <Link href={MAURITIUS} className={INLINE_LINK}>
            family-friendly
          </Link>{" "}
          areas for relatives joining part of the trip, making it a flexible option for
          couples wanting to combine their honeymoon with some shared family
          celebration time.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan Your Mauritius Honeymoon"
        body="From private beach dinners to turquoise lagoons, a consultant can help you plan the perfect island honeymoon. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
