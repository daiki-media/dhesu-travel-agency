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

// The draft's own internal links. Like the Hong Kong draft, they point at the
// old holidayidea.com.my homepage (promo/index.php) rather than a search page,
// so none names a specific target; they resolve to the /tours/mauritius hub.
// DHE-102 moved the Practical Tips one to the free-quote form.
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

// DHE-102 handover, section 2.3, verbatim.
const bestTime = [
  {
    season: "Dry season",
    months: "May to November",
    conditions:
      "Cooler, less humid and generally the most comfortable time for beach days and sightseeing",
  },
  {
    season: "Wet season",
    months: "December to April",
    conditions:
      "Warmer and more humid with more rain, and a higher chance of cyclones, mostly from January to March",
  },
];

// DHE-102 handover, section 2.1 ("Mauritius Honeymoon Packages from
// Malaysia"), verbatim. No prices: the handover says these are built to order.
const packageStyles = [
  {
    style: "Short honeymoon escape",
    length: "5 days",
    bestFor: "Couples with limited leave",
    includes:
      "Resort stay, airport transfers, one honeymoon experience such as a private dinner or spa session",
  },
  {
    style: "Classic honeymoon",
    length: "7 days",
    bestFor: "Most couples, a mix of beach days and excursions",
    includes:
      "Resort stay, airport transfers, an Île aux Cerfs or catamaran day, a Chamarel and south coast day, spa and private dining",
  },
  {
    style: "Extended island honeymoon",
    length: "10+ days",
    bestFor: "Couples who want to see two coasts",
    includes: "Stays split across two coasts and a wider mix of excursions",
  },
];

const quoteFactors = [
  {
    lead: "Resort tier:",
    text: "3-star is the budget-friendly option, 4-star gives the best value for comfort, and 5-star is the premium stay.",
  },
  {
    lead: "Room and board:",
    text: "Beachfront or overwater villas cost more than standard rooms, and all-inclusive or half-board options change the total too.",
  },
  {
    lead: "Travel dates:",
    text: "May to November is the cooler, drier stretch and the most comfortable for most couples. December to April is hotter and wetter, and the popular resorts fill fast around Malaysia’s peak wedding months.",
  },
];

const FREE_QUOTE = "/contact-us/#free-quote";
const COMPARISON_GUIDE = "/tours/mauritius/honeymoon-holiday-guide-2026/";
const BALI_POOL_VILLA = "/tours/indonesia/bali/4-day-romantic-escape-pool-villa/";

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

      <Section label="Packages" heading="Mauritius Honeymoon Packages from Malaysia">
        <p className="text-gray-600 leading-relaxed mb-6">
          Mauritius honeymoons are built to order, so there’s no fixed package list to pick
          from. What you decide is how many days you’re going, which resort tier you want and
          what you’d like included. Dhesu then quotes it in writing for your actual dates, and
          flights from Kuala Lumpur can be quoted alongside.
        </p>
        <div className="mb-8">
          <DataTable
            headers={["Package style", "Trip length", "Best for", "Usually includes"]}
            rows={packageStyles.map((r) => [r.style, r.length, r.bestFor, r.includes])}
          />
        </div>
        <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-4">
          What shapes your quote
        </h3>
        <ul className="space-y-4 mb-6">
          {quoteFactors.map((item) => (
            <Bullet key={item.lead}>
              <strong>{item.lead}</strong> {item.text}
            </Bullet>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Send your dates, number of nights and preferred resort tier for a{" "}
          <Link href={FREE_QUOTE} className={INLINE_LINK}>
            free, personalised Mauritius quote
          </Link>
          .
        </p>
        <p className="text-gray-600 leading-relaxed">
          Mauritius is an 8 to 9 hour flight from Malaysia, so many couples{" "}
          <Link href={COMPARISON_GUIDE} className={INLINE_LINK}>
            compare it with Bali and Europe on cost, flight time and pace
          </Link>{" "}
          before they commit, and the{" "}
          <Link href={BALI_POOL_VILLA} className={INLINE_LINK}>
            4-day Bali romantic escape with a private pool villa
          </Link>{" "}
          is the usual shorter-flight alternative. If halal dining and prayer times matter on
          your honeymoon, the{" "}
          <Link href="/muslim-friendly-holiday-travel-guide/" className={INLINE_LINK}>
            Muslim-friendly holiday packages from Malaysia
          </Link>{" "}
          cover Nepal, Sri Lanka, India, Bali and Sabah with both built in.
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
          due to the colonial past of the country. Prices differ by resort and room type, so
          it helps to ask for a{" "}
          <Link href={FREE_QUOTE} className={INLINE_LINK}>
            free Mauritius quote
          </Link>{" "}
          based on your dates.
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
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />
    </>
  );
}
