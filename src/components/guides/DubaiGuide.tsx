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
 * content-document/destinations-middle east/Dubai Holiday Packages From
 * Malaysia_ Family, Honeymoon & Luxury Options.docx — the draft's own order,
 * headings and wording. The opening paragraph is not repeated here; it is the
 * hero lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/dubai.ts.
 *
 * Shape mirrors BaliGuide.tsx: same Section/Bullet helpers, same type sizes,
 * same spacing. DataTable and TripRows generalise Bali's table and
 * trip-length row devices for the extra tables this draft has.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/dubai-desert-drive.jpg";
const PHOTO_ALT = "A four-wheel drive cresting a dune on a Dubai desert safari";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const travellerFit = [
  { type: "Families", offers: "Theme parks, indoor ski slopes, aquariums, beach clubs" },
  {
    type: "Honeymooners",
    offers: "Private beach resorts, fine dining, desert glamping experiences",
  },
  {
    type: "Luxury travellers",
    offers: "World-class hotels, high-end shopping, exclusive experiences",
  },
  {
    type: "Adventure seekers",
    offers: "Desert safaris, dune bashing, skydiving over Palm Jumeirah",
  },
  { type: "Shoppers", offers: "The Dubai Mall, Gold Souk, Dubai Festival City" },
];

const attractions = [
  {
    name: "Burj Khalifa",
    why: "World's tallest building; observation deck views across the city",
  },
  {
    name: "Dubai Mall",
    why: "One of the world's largest malls, home to the Dubai Aquarium",
  },
  {
    name: "Palm Jumeirah",
    why: "Iconic man-made island with resorts, dining, and The View at The Palm",
  },
  { name: "Dubai Marina", why: "Waterfront dining, yacht cruises, and skyline views" },
  {
    name: "Old Dubai (Al Fahidi, Gold Souk)",
    why: "Historic contrast to the city's modern skyline",
  },
  {
    name: "Global Village (seasonal)",
    why: "Cultural pavilions, entertainment, and shopping (Nov–Apr)",
  },
];

const desertSafariIncludes = [
  "Dune bashing in a 4x4 vehicle across the desert terrain",
  "Camel riding and sandboarding",
  "A traditional Bedouin-style camp with dinner and entertainment (including belly dancing and tanoura shows)",
  "Sunset photography opportunities over the dunes",
];

const familyItinerary = [
  { day: "Day 1–2", activities: "Burj Khalifa, Dubai Aquarium, Dubai Mall" },
  { day: "Day 3", activities: "Desert safari with family-friendly camp activities" },
  { day: "Day 4", activities: "IMG Worlds of Adventure or Motiongate theme park" },
  {
    day: "Day 5",
    activities: "Beach day at Jumeirah Beach or a family-friendly resort pool",
  },
];

const honeymoonElements = [
  {
    element: "Accommodation",
    inclusion: "Private beach resort or 5-star hotel with romantic room upgrades",
  },
  {
    element: "Signature experience",
    inclusion: "Desert glamping or a private dinner in the dunes",
  },
  { element: "Dining", inclusion: "Fine dining with skyline or waterfront views" },
  { element: "Add-ons", inclusion: "Yacht cruise along Dubai Marina, spa experiences" },
];

const tripLengths = [
  { length: "4 days", suits: "A focused city and desert safari trip" },
  {
    length: "5–6 days",
    suits: "A balanced mix of sightseeing, desert safari, and beach or resort time",
  },
  {
    length: "7+ days",
    suits: "Combining Dubai with Abu Dhabi, or a more relaxed, luxury-paced trip",
  },
];

const bestTime = [
  {
    season: "November–March",
    conditions: "Cooler, most comfortable weather; peak tourist season",
  },
  {
    season: "April & October",
    conditions: "Warm but manageable; shoulder season with fewer crowds",
  },
  {
    season: "May–September",
    conditions: "Very hot; less ideal for extensive outdoor activities",
  },
];

const included = [
  "Accommodation matched to your selected package tier",
  "Airport transfers",
  "Desert safari where included in your package",
  "Entrance fees to major attractions specified in your itinerary",
  "A structured, adjustable day-by-day plan",
];

const addOns = [
  {
    name: 'Burj Khalifa "At the Top" upgrade',
    offers: "Access to higher observation floors for a more exclusive view",
  },
  {
    name: "Dhow dinner cruise",
    offers: "Traditional boat dinner cruise along Dubai Marina or Dubai Creek",
  },
  {
    name: "Ski Dubai",
    offers: "Indoor snow park experience, popular as a novelty add-on for families",
  },
  {
    name: "Museum of the Future",
    offers: "A striking architectural landmark with interactive exhibits on future technology",
  },
  {
    name: "Private guided city tour",
    offers: "A more personalised alternative to standard group sightseeing",
  },
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("dubai", "dubai-holiday-travel-guide-2026");

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

export default function DubaiGuide() {
  return (
    <>
      <Section label="Why Dubai" heading="Why Dubai Works for So Many Travel Styles">
        <DataTable
          headers={["Traveller type", "What Dubai offers"]}
          rows={travellerFit.map((r) => [r.type, r.offers])}
        />
      </Section>

      <Section label="At a Glance" heading="Dubai's Core Attractions">
        <DataTable
          headers={["Attraction", "Why it's included"]}
          rows={attractions.map((r) => [r.name, r.why])}
        />
      </Section>

      <Section label="Signature Add-On" heading="Desert Safari: Dubai's Signature Add-On">
        <p className="text-gray-600 leading-relaxed mb-6">
          A desert safari is one of the most consistently requested add-ons to any Dubai
          itinerary, and for good reason it offers a genuinely different experience from
          the city&apos;s modern skyline.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          What a typical desert safari includes:
        </p>
        <ul className="space-y-4 mb-6">
          {desertSafariIncludes.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          Desert safaris are typically offered as a half-day evening excursion and can be
          added to any package regardless of your primary travel style.
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

      <Section label="Family" heading="Family-Focused Dubai Itineraries">
        <div className="mb-6">
          <DataTable
            headers={["Day focus", "Suggested activities"]}
            rows={familyItinerary.map((r) => [r.day, r.activities])}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Family packages typically favour centrally located hotels near major
          attractions, minimising travel time between activities for a smoother
          experience with children.
        </p>
      </Section>

      <Section label="Honeymoon" heading="Honeymoon-Focused Dubai Itineraries">
        <div className="mb-6">
          <DataTable
            headers={["Element", "Typical inclusion"]}
            rows={honeymoonElements.map((r) => [r.element, r.inclusion])}
          />
        </div>
        <p className="text-gray-600 leading-relaxed">
          Honeymoon packages tend to prioritise fewer, higher-quality experiences over a
          packed sightseeing schedule, allowing more relaxed, private time as a couple.
        </p>
      </Section>

      <Section label="Luxury" heading="Luxury Dubai Packages">
        <p className="text-gray-600 leading-relaxed">
          For travellers wanting a fully premium experience, Dubai offers some of the
          world&apos;s most recognised luxury hospitality brands, private guided tours,
          and exclusive experiences such as helicopter tours over Palm Jumeirah or
          private yacht charters. Luxury packages are generally built entirely around
          your specific preferences rather than a fixed template, so it&apos;s worth
          discussing your priorities in detail with a consultant.
        </p>
      </Section>

      <Section label="Trip Length" heading="Suggested Trip Lengths">
        <TripRows rows={tripLengths.map((r) => ({ label: r.length, detail: r.suits }))} />
      </Section>

      <Section label="Add-On" heading="Combining Dubai With Abu Dhabi">
        <p className="text-gray-600 leading-relaxed">
          For those looking for more time in their itinerary, Abu Dhabi, which is only
          an hour away from Dubai and is the capital city of UAE, is another attraction,
          providing the visitors with the opportunity to visit the Sheik Zayed Grand
          Mosque, Ferrari World, and a much more laid-back environment than the busy
          city life in Dubai.
        </p>
      </Section>

      <Section label="When to Go" heading="Best Time to Visit Dubai">
        <DataTable
          headers={["Season", "Conditions"]}
          rows={bestTime.map((r) => [r.season, r.conditions])}
        />
      </Section>

      <Section label="Inclusions" heading="What's Typically Included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Add-Ons" heading="Common Dubai Package Add-Ons">
        <DataTable
          headers={["Add-on experience", "What it offers"]}
          rows={addOns.map((r) => [r.name, r.offers])}
        />
      </Section>

      <Section label="Shopping" heading="Shopping in Dubai: What to Expect">
        <p className="text-gray-600 leading-relaxed">
          Dubai&apos;s retail scene spans everything from ultra-luxury boutiques to
          traditional souks, and it&apos;s worth budgeting time specifically for
          shopping if this is a priority for your trip. The Dubai Mall remains the most
          visited retail destination, combining international brands with entertainment
          attractions like the in-mall aquarium, while the Gold Souk in Deira offers a
          more traditional, market-style experience for jewellery and traditional goods
          at negotiable pricing.
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
          Plan Your Dubai Getaway
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          From desert safaris to skyline views to private honeymoon experiences, a
          consultant can help build the right Dubai itinerary for you. Request a free,
          personalised quote today.
        </p>
        <Link href="/contact">
          <Button variant="light" showArrow size="lg">
            Request a Free Quote
          </Button>
        </Link>
      </motion.div>
    </>
  );
}
