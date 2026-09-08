"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, INLINE_LINK, Section } from "./primitives";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-in-asia/Vietnam Tour Packages From Malaysia_
 * North, Central & South Options.docx — the draft's own order, headings and
 * wording. The opening paragraph is not repeated here; it is the hero lead,
 * set as `intro` on the landing page entry in src/data/destinationDetail/vietnam.ts.
 *
 * Shape mirrors BaliGuide.tsx: same section devices, same type sizes, same
 * spacing.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/saigon-city-hall.jpg";
const PHOTO_ALT = "Cyclists in ao dai passing Ho Chi Minh City Hall";

// The draft's own internal links. The .docx still points at the old
// holidayidea.com.my URLs, so they are remapped here: search-travel.php?s=Vietnam
// -> the destination hub, and each package.php?pkgid=N -> the package carrying
// that pkgid in its meta.
const VIETNAM_HUB = "/tours/vietnam";
const NORTH_PACKAGE = "/tours/vietnam/north-vietnam/4-day-hanoi-halong-luxury";
const CENTRAL_PACKAGE = "/tours/vietnam/central-vietnam/4-day-danang-hoi-an-bana";
const SOUTH_PACKAGE = "/tours/vietnam/south-vietnam/5-day-saigon-cu-chi-mui-ne";

const regionsTable = [
  {
    region: "North Vietnam",
    destinations: "Hanoi, Halong Bay, Sapa",
    knownFor: "Historic capital, limestone bay cruises, mountain scenery",
  },
  {
    region: "Central Vietnam",
    destinations: "Da Nang, Hoi An, Hue",
    knownFor: "Beaches, ancient town charm, imperial history",
  },
  {
    region: "South Vietnam",
    destinations: "Ho Chi Minh City, Dalat, Mui Ne",
    knownFor: "Urban energy, cool highland climate, coastal sand dunes",
  },
];

const byRegion: { title: string; body: React.ReactNode }[] = [
  {
    title: "North Vietnam: Hanoi & Halong Bay",
    body: (
      <>
        The itinerary for North Vietnam continues to be one of the top requests, thanks to
        the long history of its capital city{" "}
        <Link href={NORTH_PACKAGE} className={INLINE_LINK}>
          Hanoi and the UNESCO World Heritage Site of Halong Bay
        </Link>
        . The North Vietnam tour includes a visit to the ancient feel of the old quarter in
        Hanoi as well as an exploration of Halong Bay, usually involving at least one
        overnight stay onboard. Sometimes the mountainous region of Sapa is included in the
        package for those wishing to cool off.
      </>
    ),
  },
  {
    title: "Central Vietnam: Da Nang, Hoi An & Hue",
    body: (
      <>
        Vietnam Central has become increasingly popular, especially for tourists looking
        for a combination of both beach fun and culture. There is{" "}
        <Link href={CENTRAL_PACKAGE} className={INLINE_LINK}>
          Da Nang city
        </Link>{" "}
        where you can relax on the coast and visit the amazing Ba Na Hills (the place that
        is home to the well-known Golden Bridge). Another place to explore in Vietnam
        Central is the{" "}
        <Link href={CENTRAL_PACKAGE} className={INLINE_LINK}>
          old city of Hoi An
        </Link>
        , where you can take a stroll down the streets of lanterns and admire the
        well-preserved buildings. One can easily travel between the cities of Da Nang and
        Hue using a beautiful train trip along the coast of Vietnam.
      </>
    ),
  },
  {
    title: "South Vietnam: Ho Chi Minh City, Mui Ne & Dalat",
    body: (
      <>
        The south itinerary will be based on the hustle and bustle of Ho Chi Minh City
        streets and markets, often supplemented by day trips or add-ons to the sand dunes
        and{" "}
        <Link href={SOUTH_PACKAGE} className={INLINE_LINK}>
          beaches of Mui Ne
        </Link>{" "}
        or the cooler climes and flower gardens of Dalat. This area is usually attractive
        to those seeking a blend of city life and natural settings close by.
      </>
    ),
  },
];

const packageCombinations = [
  {
    focus: "Da Nang, Hoi An & Hue (with scenic train)",
    duration: "5 days",
    suited: "Travellers wanting beach, culture, and a scenic rail journey combined",
  },
  {
    focus: "Ho Chi Minh City, Mui Ne & Dalat",
    duration: "5 days",
    suited: "Travellers wanting urban exploration plus nearby natural escapes",
  },
  {
    focus: "Hanoi & Halong Bay",
    duration: "4–5 days",
    suited: "First-time visitors focused on the classic north Vietnam experience",
  },
  {
    focus: "Multi-region combination",
    duration: "7+ days",
    suited: "Travellers wanting to experience more than one region in a single trip",
  },
];

const included = [
  "Domestic transport between key destinations within your chosen region",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major included attractions and cultural sites",
  "Selected meals and signature experiences (such as the Halong Bay cruise or Hoi An lantern evening)",
  "A structured day-by-day itinerary that can often be adjusted to your preferences",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("vietnam", "vietnam-tour-travel-guide-2026");



export default function VietnamGuide() {
  return (
    <>
      <Section label="Regions" heading="Vietnam's three distinct regions">
        <p className="text-gray-600 leading-relaxed mb-6">
          Because{" "}
          <Link href={VIETNAM_HUB} className={INLINE_LINK}>
            Vietnam
          </Link>{" "}
          is a long, narrow country, most itineraries focus on one or two regions rather
          than attempting the entire country in a single short trip.
        </p>
        <DataTable
          headers={["Region", "Key destinations", "Known for"]}
          widths={["w-1/4", undefined, undefined]}
          rows={regionsTable.map((row) => [row.region, row.destinations, row.knownFor])}
        />
      </Section>

      <Section label="By Region" heading="North, Central & South Vietnam">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          {byRegion.map((item) => (
            <div key={item.title}>
              <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

      <Section label="Visa" heading="Visa requirements for Malaysian travellers">
        <p className="text-gray-600 leading-relaxed">
          Passport holders from Malaysia enjoy visa-free access to Vietnam for tourist
          purposes due to the reciprocal visa policy of the ASEAN region. However, since
          changes in terms of visas and duration of stay can be made anytime by either
          party, it is always good practice to seek information regarding current
          conditions from your travel agent or Vietnam&rsquo;s immigration department
          before embarking on your journey.
        </p>
      </Section>

      <Section label="Combinations" heading="Popular Vietnam package combinations">
        <DataTable
          headers={["Package focus", "Typical duration", "Best suited for"]}
          widths={["w-1/3", undefined, undefined]}
          rows={packageCombinations.map((row) => [row.focus, row.duration, row.suited])}
        />
      </Section>

      <Section label="Inclusions" heading="What's typically included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Choosing" heading="Choosing the right region for your trip">
        <p className="text-gray-600 leading-relaxed">
          For those who are focused on iconic landscapes and the quintessential newcomer
          experience in Vietnam, then the duo of Hanoi and Halong Bay of North Vietnam is
          the most traditional option to go for. For those who would like an equal blend
          of beach time and culture with a minimum of city time, then the pair of Da Nang
          and Hoi An of Central Vietnam works well. For the city vibe combined with nature
          escapades, then the trio of Ho Chi Minh City, Mui Ne and Dalat of South Vietnam
          usually works better.
        </p>
      </Section>

      <Section label="Cuisine" heading="Vietnamese cuisine as a trip highlight in its own right">
        <p className="text-gray-600 leading-relaxed">
          In addition to its attractions and landmarks, food needs to be included in your
          itinerary, since it is among the aspects which visitors tend to remember most
          once they return home from their visits to Vietnam. The pho of Hanoi, the bun
          cha, and the unique noodles of cao lau in Hoi An, the street food in Ho Chi Minh
          City &ndash; each region has its own culinary traditions that make it unique. It
          should also be noted that many travelers include culinary tours in their
          itineraries.
        </p>
      </Section>

      <Section label="Practical Tips" heading="Currency and practical travel tips">
        <p className="text-gray-600 leading-relaxed">
          The currency used in Vietnam is the Vietnamese Dong, which uses larger numerical
          denominations compared to the Malaysian Ringgit, something that may require new
          tourists to take a few days before getting used to it. Credit cards are mostly
          accepted by most business establishments, especially in the urban centers;
          however, it is recommended that you carry some cash just in case you end up in
          smaller towns and villages or markets.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your Vietnam journey"
        body="From Halong Bay&apos;s dramatic scenery to Hoi An&apos;s lantern-lit charm, a consultant can help you choose the right region and itinerary. Request a free quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
