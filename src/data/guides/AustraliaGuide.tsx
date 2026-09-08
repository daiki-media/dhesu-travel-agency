"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, Section } from "./primitives";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-europe/Australia Holiday Packages From
 * Malaysia_ Sydney, Melbourne & Family Travel.docx — the draft's own order,
 * headings and wording. The opening paragraph is not repeated here; it is the
 * hero lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/australia.ts.
 *
 * Shape mirrors BaliGuide.tsx: same Section/Bullet helpers, same type sizes,
 * same spacing. DataTable generalises Bali's package-types table for the
 * extra tables this draft has.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/blue-mountains.jpg";
const PHOTO_ALT = "The Three Sisters rock formation in the Blue Mountains, New South Wales";


const sydneyVsMelbourne = [
  {
    factor: "Signature landmark",
    sydney: "Sydney Opera House and Harbour Bridge",
    melbourne: "Federation Square and laneway culture",
  },
  {
    factor: "Character",
    sydney: "Harbour city, beach-adjacent, iconic skyline",
    melbourne: "Café culture, arts, sports, and food scene",
  },
  {
    factor: "Best for",
    sydney: "First-time visitors wanting iconic sights",
    melbourne: "Travellers wanting food, culture, and a slower urban pace",
  },
  {
    factor: "Nearby nature",
    sydney: "Blue Mountains, Bondi Beach",
    melbourne: "Great Ocean Road, Yarra Valley wineries",
  },
  {
    factor: "Family appeal",
    sydney: "Taronga Zoo, Darling Harbour, beaches",
    melbourne: "Melbourne Zoo, Royal Botanic Gardens",
  },
];

const sydneyHighlights = [
  {
    name: "Sydney Opera House & Harbour Bridge",
    why: "The city's most iconic photo opportunity and cultural landmark",
  },
  {
    name: "Bondi Beach",
    why: "Australia's most famous beach, easily accessible from the city",
  },
  {
    name: "Blue Mountains",
    why: "Scenic day trip with dramatic cliffs and eucalyptus forests",
  },
  {
    name: "Taronga Zoo",
    why: "Family-friendly wildlife experience with harbour views",
  },
  {
    name: "Darling Harbour",
    why: "Waterfront dining, SEA LIFE Aquarium, and family entertainment",
  },
];

const melbourneHighlights = [
  {
    name: "Federation Square & Laneways",
    why: "Melbourne's distinctive street art and café culture",
  },
  {
    name: "Great Ocean Road",
    why: "Scenic coastal drive featuring the Twelve Apostles rock formations",
  },
  {
    name: "Royal Botanic Gardens",
    why: "Relaxed green space in the heart of the city",
  },
  { name: "Melbourne Zoo", why: "Family-friendly wildlife viewing" },
  {
    name: "Queen Victoria Market",
    why: "Local produce, food stalls, and shopping",
  },
];

const schoolHolidayReasons = [
  "Australia's own school holidays and public events (particularly around December-January summer) can overlap with Malaysian peak travel periods, compounding demand",
  "Popular family attractions and tours often require advance booking during peak periods",
  "Flight availability on direct or convenient routes tightens considerably closer to peak dates",
];

const itineraryStructures = [
  {
    focus: "Sydney only",
    duration: "5–6 days",
    includes: "City landmarks, Blue Mountains day trip, beach time",
  },
  {
    focus: "Melbourne only",
    duration: "5–6 days",
    includes: "City exploration, Great Ocean Road day trip",
  },
  {
    focus: "Sydney + Melbourne combined",
    duration: "8–10 days",
    includes: "Both cities plus key day trips from each",
  },
];

const included = [
  "Domestic flights between Sydney and Melbourne, if combining both cities",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major included attractions",
  "Selected day trips (Blue Mountains, Great Ocean Road) where included",
  "A structured itinerary that can be adjusted for family pacing",
];

const bestTime = [
  {
    season: "Summer",
    months: "December–February",
    conditions: "Warm, coincides with Australian and Malaysian school holidays",
  },
  {
    season: "Autumn",
    months: "March–May",
    conditions: "Mild, comfortable, fewer crowds",
  },
  {
    season: "Winter",
    months: "June–August",
    conditions: "Cooler, especially in Melbourne; good for avoiding peak crowds",
  },
  {
    season: "Spring",
    months: "September–November",
    conditions: "Mild and pleasant, generally good travel conditions",
  },
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("australia", "australia-holiday-travel-guide-2026");

export default function AustraliaGuide() {
  return (
    <>
      <Section label="Choosing" heading="Sydney vs. Melbourne: Choosing Your City">
        <DataTable
          headers={["Factor", "Sydney", "Melbourne"]}
          rows={sydneyVsMelbourne.map((r) => [r.factor, r.sydney, r.melbourne])}
        />
      </Section>

      <Section label="Sydney" heading="Sydney Highlights">
        <DataTable
          headers={["Attraction", "Why it's included"]}
          rows={sydneyHighlights.map((r) => [r.name, r.why])}
        />
      </Section>

      <Section label="Melbourne" heading="Melbourne Highlights">
        <DataTable
          headers={["Attraction", "Why it's included"]}
          rows={melbourneHighlights.map((r) => [r.name, r.why])}
        />
      </Section>

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

      <Section label="Timing" heading="Family Travel and School Holiday Timing">
        <p className="text-gray-600 leading-relaxed mb-6">
          It should be noted that the attraction of Australia among families is
          directly linked with the school holidays of Malaysia because, naturally,
          families book international travels based on the school holidays. It is
          particularly significant to book in advance for the peak of the school
          holidays season because prices for air tickets and hotel accommodations in
          Australia increase greatly.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Why timing matters more for Australia specifically:
        </p>
        <ul className="space-y-4 mb-6">
          {schoolHolidayReasons.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          For destination-specific school holiday timing guidance and current deals,
          see our dedicated{" "}
          <Link href="/school-holiday-travel-deals-2026" className="text-primary-dark underline">
            School Holiday Deals page
          </Link>
          .
        </p>
      </Section>

      <Section label="Itinerary" heading="Suggested Itinerary Structures">
        <DataTable
          headers={["Trip focus", "Typical duration", "Includes"]}
          rows={itineraryStructures.map((r) => [r.focus, r.duration, r.includes])}
        />
      </Section>

      <Section label="Inclusions" heading="What's Typically Included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="When to Go" heading="Best Time to Visit Australia">
        <DataTable
          headers={["Season", "Months", "Conditions"]}
          rows={bestTime.map((r) => [r.season, r.months, r.conditions])}
        />
      </Section>

      <Section label="Visa" heading="Visa Requirements for Malaysian Travellers">
        <p className="text-gray-600 leading-relaxed">
          Malaysian passport holders typically require an Electronic Travel Authority
          (ETA) or equivalent visa arrangement to visit Australia for tourism purposes.
          Requirements and application processes can be updated by Australian
          immigration authorities, so it&apos;s important to confirm current
          requirements with your consultant well ahead of your travel dates.
        </p>
      </Section>

      <Section label="Practical" heading="Practical Travel Considerations for Australia">
        <p className="text-gray-600 leading-relaxed">
          However, the time zone difference that exists between Australia and Malaysia
          varies from one city to another and based on the season (as a result of
          Daylight Saving Time observed in some Southern States), a consideration that
          is important especially during the first couple of days when getting used to
          the environment. While distances between different sights are usually not
          very far for a visit around Sydney and Melbourne, day trips such as Blue
          Mountains or Great Ocean Road take up the whole day.
        </p>
      </Section>

      <Section label="Add-On" heading="Combining Australia With New Zealand">
        <p className="text-gray-600 leading-relaxed">
          Those with extra time can opt for a trip which covers not only Australia but
          also New Zealand due to the proximity of the countries and the short distance
          between them via plane. This package is good for tourists who wish to
          combine the experience of urban and coastal travel in Australia with the
          natural adventure in New Zealand.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan Your Australia Family Getaway"
        body="From Sydney&apos;s iconic harbour to Melbourne&apos;s laneway culture, a consultant can help you plan the right Australia itinerary timed around your school holidays. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
