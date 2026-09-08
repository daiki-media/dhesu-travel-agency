"use client";

import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, Section, TripRows } from "./primitives";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-europe/Europe Tour Packages From Malaysia_
 * Multi-Country Group Tours.docx — the draft's own order, headings and
 * wording. The opening paragraph is not repeated here; it is the hero lead,
 * set as `intro` on the landing page entry in src/data/destinationDetail/europe.ts.
 *
 * Shape mirrors BaliGuide.tsx: same Section/Bullet helpers, same type sizes,
 * same spacing. DataTable and TripRows generalise Bali's table and
 * trip-length row devices for the extra tables this draft has.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/rhine-river-cruise.jpg";
const PHOTO_ALT = "A river cruise ship passing the castle town of Cochem";


const diyChallenges = [
  {
    challenge: "Multiple languages and transport systems",
    solution: "Coordinated transport and English-speaking guides throughout",
  },
  {
    challenge: "Complex multi-country visa and border logistics",
    solution: "Pre-planned routing within Schengen rules",
  },
  {
    challenge: "High cost of last-minute or individually booked trains/flights",
    solution: "Bundled group transport pricing",
  },
  {
    challenge: "Difficulty judging realistic sightseeing pace",
    solution: "Structured itineraries based on proven pacing",
  },
  {
    challenge: "Currency and payment differences across countries",
    solution: "Pre-arranged accommodation and key transport reduces on-the-ground friction",
  },
];

const routes = [
  {
    route: "Western Europe Classic",
    countries: "France, Switzerland, Italy",
    bestFor: "First-time visitors wanting iconic landmarks",
  },
  {
    route: "Central Europe",
    countries: "Germany, Austria, Czech Republic",
    bestFor: "Travellers wanting historic cities and castle scenery",
  },
  {
    route: "Eastern Europe",
    countries: "Poland, Hungary, Slovakia",
    bestFor: "Travellers seeking a different, less crowded European experience",
  },
  {
    route: "Scandinavian",
    countries: "Norway, Sweden, Denmark",
    bestFor: "Nature and fjord-focused itineraries",
  },
  {
    route: "UK & Ireland",
    countries: "England, Scotland, Ireland",
    bestFor: "English-speaking countries with castle and countryside focus",
  },
];

const westernEuropeStops = [
  "Paris, France - Eiffel Tower, Louvre Museum, Seine River cruise",
  "Switzerland - Alpine scenery, scenic train journeys, lake towns",
  "Italy - Rome's ancient history, Venice's canals, Florence's Renaissance art",
];

const schengenBasics = [
  {
    label: "What it covers",
    detail: "Travel across all Schengen member countries on one visa",
  },
  {
    label: "Typical stay limit",
    detail: "Up to 90 days within any 180-day period for tourist visits",
  },
  {
    label: "Where to apply",
    detail: "The embassy or consulate of your main destination country, or first port of entry",
  },
  {
    label: "Processing time",
    detail: "Generally recommended to apply several weeks ahead of travel",
  },
  {
    label: "Documentation",
    detail:
      "Typically includes proof of itinerary, accommodation, travel insurance, and financial means",
  },
];

const tripLengths = [
  { length: "Single-country deep dive (e.g., Italy only)", duration: "7–9 days" },
  { length: "Classic 2–3 country combination", duration: "10–12 days" },
  { length: "Extended multi-country grand tour", duration: "14+ days" },
];

const included = [
  "Coordinated transport between cities and countries (coach, rail, or a mix)",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major included attractions",
  "English-speaking tour guides throughout the journey",
  "A structured, pre-planned itinerary designed around realistic sightseeing pace",
];

const bestTime = [
  {
    season: "Spring (April–June)",
    conditions: "Mild weather, blooming scenery, moderate crowds",
  },
  {
    season: "Summer (July–August)",
    conditions: "Warmest weather, peak season, higher prices and crowds",
  },
  {
    season: "Autumn (September–October)",
    conditions: "Comfortable weather, fewer crowds, good value",
  },
  {
    season: "Winter (November-March)",
    conditions: "Cold, festive markets in December, lower prices outside holidays",
  },
];

const groupVsIndependent = [
  {
    factor: "Planning effort",
    group: "Minimal; itinerary pre-built",
    independent: "Extensive research required",
  },
  {
    factor: "Visa handling",
    group: "Guided support for Schengen application",
    independent: "Fully self-managed",
  },
  {
    factor: "Flexibility",
    group: "Structured schedule",
    independent: "Full control over pace and stops",
  },
  {
    factor: "Cost predictability",
    group: "Bundled, upfront pricing",
    independent: "Variable, depends on individual bookings",
  },
  {
    factor: "Best for",
    group: "First-time Europe visitors, multi-country trips",
    independent: "Experienced travellers with specific independent goals",
  },
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("europe", "europe-tour-travel-guide-2026");

export default function EuropeGuide() {
  return (
    <>
      <Section label="Why Group Tours" heading="Why Group Tours Suit Europe Particularly Well">
        <DataTable
          headers={["Challenge of DIY Europe travel", "How a group tour solves it"]}
          rows={diyChallenges.map((r) => [r.challenge, r.solution])}
        />
      </Section>

      <Section label="Routes" heading="Popular Multi-Country Europe Routes">
        <DataTable
          headers={["Route", "Typical countries covered", "Best suited for"]}
          rows={routes.map((r) => [r.route, r.countries, r.bestFor])}
        />
      </Section>

      <Section
        label="Classic Route"
        heading="What a Western Europe Classic Itinerary Typically Includes"
      >
        <ul className="space-y-4 mb-6">
          {westernEuropeStops.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          This remains the most requested first-time Europe route, combining several of
          the continent&apos;s most iconic, widely recognised landmarks into a single
          coordinated trip.
        </p>
      </Section>

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

      <Section label="Visa" heading="Understanding the Schengen Visa">
        <p className="text-gray-600 leading-relaxed mb-6">
          Most Western, Central, and Scandinavian European countries are part of the
          Schengen Area, which allows travel across member countries under a single
          visa, without individual border checks between them.
        </p>
        <div className="mb-6">
          <DataTable
            headers={["Schengen visa basics", "Details"]}
            rows={schengenBasics.map((r) => [r.label, r.detail])}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Important: Not all European countries are in the Schengen Area (the UK and
          Ireland, for example, are not), so multi-country itineraries combining
          Schengen and non-Schengen countries require separate visa consideration. Visa
          requirements and processes can change, so it&apos;s essential to confirm
          current requirements with your consultant or the relevant embassy well before
          your travel dates.
        </p>
      </Section>

      <Section label="Trip Length" heading="Suggested Trip Lengths by Route">
        <TripRows rows={tripLengths.map((r) => ({ label: r.length, detail: r.duration }))} />
      </Section>

      <Section label="Inclusions" heading="What's Typically Included in a Europe Group Tour">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="When to Go" heading="Best Time to Visit Europe">
        <DataTable
          headers={["Season", "Conditions"]}
          rows={bestTime.map((r) => [r.season, r.conditions])}
        />
      </Section>

      <Section label="Comparing" heading="Group Tour vs. Independent Europe Travel">
        <DataTable
          headers={["Factor", "Group tour", "Independent travel"]}
          rows={groupVsIndependent.map((r) => [r.factor, r.group, r.independent])}
        />
      </Section>

      <Section label="Practical" heading="Currency and Practical Travel Tips for Europe">
        <p className="text-gray-600 leading-relaxed">
          Traveling through more than one country in Europe means that you could
          encounter different currencies, such as those within the Schengen Area using
          the Euro currency, while others like Switzerland and Eastern Europe don&apos;t
          have the same currency system. It would be prudent to find out what
          currencies you would require for your individual travel itinerary since
          traveling to the Euro Zone is different from traveling to other zones using
          different currencies. Payments by card are acceptable in most of Europe.
        </p>
      </Section>

      <Section label="What to Expect" heading="What to Expect From a Structured Group Coach Tour">
        <p className="text-gray-600 leading-relaxed">
          Most multi-country Europe tours are run as structured coach tours, moving
          between cities on a fixed schedule with an accompanying tour guide. This
          format suits travellers who want to see multiple countries without
          independently managing train schedules, hotel transfers, and border logistics
          across several different countries. Days typically combine guided sightseeing
          at major landmarks with some free time for independent exploration, dining, or
          shopping within each city.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Start Planning Your Europe Journey"
        body="From iconic landmarks to Schengen visa guidance, a consultant can help you plan a smooth multi-country Europe trip. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
