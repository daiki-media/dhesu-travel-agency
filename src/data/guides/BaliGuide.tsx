"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, INLINE_LINK, Section, TripRows } from "./primitives";

/**
 * Reference implementation for the Holiday Idea destination guides.
 *
 * Every string of copy is taken verbatim from
 * content-document/destinations-in-asia/Bali Holiday Packages From Malaysia_
 * Honeymoon, Family & Budget Options.docx — the draft's own order, headings and
 * wording. The opening paragraph is not repeated here; it is the hero lead, set
 * as `intro` on the landing page entry in src/data/destinationDetail/Indonesia.ts.
 *
 * The other guides copy this file's shape: same section devices, same type
 * sizes, same spacing. Change the words, not the structure.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/kecak-fire-dance.jpg";
const PHOTO_ALT = "The Kecak fire dance performed on the Uluwatu cliffs at sunset, Bali";

// The draft's own internal links. The .docx still points at the old
// holidayidea.com.my URLs, so they are remapped here: /BALI/ -> the Bali
// landing page, and package.php?pkgid=2381 -> the package carrying that pkgid
// in its meta (Kecak dance, Mount Batur and the Bedugul floating temple).
const BALI_LANDING = "/tours/indonesia/bali";
const CLASSIC_PACKAGE = "/tours/indonesia/bali/5-day-bliss-temples-highlands-sunset";



const packageTypes = [
  {
    style: "Romantic / Honeymoon",
    bestFor: "Couples seeking a private, relaxed escape",
    highlights:
      "Sunset cruises, candlelight dinners, private villa stays, spa experiences",
  },
  {
    style: "Family Holiday",
    bestFor: "Families travelling with children",
    highlights:
      "Cultural sites, beach time, family-friendly activities, flexible pacing",
  },
  {
    style: "Adventure",
    bestFor: "Travellers wanting more active experiences",
    highlights: "ATV rides, hiking, water sports, off-the-beaten-path exploration",
  },
  {
    style: "Best-Selling / Classic",
    bestFor: "First-time visitors wanting a well-rounded overview",
    highlights:
      "Cultural shows, Mount Batur views, temple visits, signature attractions",
  },
  {
    style: "Budget-Friendly",
    bestFor: "Cost-conscious travellers",
    highlights: "Streamlined inclusions, shared transport, essential highlights only",
  },
];

const included = [
  "Private transport between destinations (most Bali packages from Dhesu are run as private tours, not shared coach groups)",
  "Accommodation matched to your selected package tier",
  "Entrance fees to include cultural sites and attractions",
  "Select meals and experiences as specified in the itinerary (sunset cruises, candlelight dinners, ATV sessions, etc.)",
  "A structured day-by-day itinerary, adjustable based on your preferences",
];

const tripLengths = [
  {
    length: "4 days",
    suits: "First-time visitors, honeymooners, or a quick escape hitting the highlights",
  },
  {
    length: "5–6 days",
    suits:
      "Travellers wanting to combine multiple areas (Ubud, Uluwatu, and coastal areas) more thoroughly",
  },
  {
    length: "7+ days",
    suits:
      "Those wanting a more relaxed pace, additional islands (like Nusa Penida), or deeper cultural immersion",
  },
];

const styleGuide: { title: string; body: React.ReactNode }[] = [
  {
    title: "Romantic Bali Escapes",
    body: (
      <>
        In relation to couples,{" "}
        <Link href={BALI_LANDING} className={INLINE_LINK}>
          Bali tour packages
        </Link>{" "}
        are more about combining the beauty of scenery with personal activities. A good
        romantic tour plan should feature the magnificent cliffs of Uluwatu, the greenery
        of the hills of Ubud, cultural sites such as GWK Cultural Park, and time spent on
        the beach, preferably in Melasti Beach, with a final day comprising of a sunset
        cruise and candlelit dinner. The tours are often arranged according to 4-day plans.
      </>
    ),
  },
  {
    title: "Family-Friendly Bali Holidays",
    body: "Bali is very family-friendly because of the combination of cultural attractions, beach access, and various activities for all age groups. Family tours usually include the combination of cultural activities (visiting temples, local shows) and the leisurely stay at the beach or by the pool without too tight a schedule to be exhausting for children. There are many family tour options that can be customized according to the age of your children.",
  },
  {
    title: "Adventure-Focused Bali Trips",
    body: "However, those tourists who do not wish to spend their holiday relaxing at the beach will find many other attractions in Bali to enjoy. The tours on ATVs in the forests, caves and rivers of Ubud are especially sought after these days, and usually come along with a cruise with dinner watching sunset.",
  },
  {
    title: "Best-Selling Classic Bali Itineraries",
    body: (
      <>
        When visiting for the first time, and one is not sure how to start, a standard
        package can be a good choice for them. Such packages often include viewing the{" "}
        <Link href={CLASSIC_PACKAGE} className={INLINE_LINK}>
          sunset show
        </Link>{" "}
        of the Kecak Fire Dance Show, Mount Batur, and{" "}
        <Link href={CLASSIC_PACKAGE} className={INLINE_LINK}>
          Bali’s mystical floating temple
        </Link>
        . Thus, one gets to see all of the must-see places in Bali without having to
        conduct extensive research.
      </>
    ),
  },
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("indonesia", "bali-holiday-travel-guide-2026");



export default function BaliGuide() {
  return (
    <>
      <Section
        label="Why Bali"
        heading="Why Bali continues to be a top choice for Malaysians"
      >
        <p className="text-gray-600 leading-relaxed">
          The secret behind the{" "}
          <Link href={BALI_LANDING} className={INLINE_LINK}>
            longevity of popularity of Bali
          </Link>{" "}
          is its unique blend. It is not only easy enough to reach and travel around but also has the right kind
          of diversity to offer something new to first-time and tenth-time visitors. The
          beautiful cliffs of Uluwatu, the rice fields of Ubud, and the developed tourist
          infrastructure make it very easy and diverse at the same time.
        </p>
      </Section>

      <Section label="At a Glance" heading="Bali package types">
        <DataTable
          headers={["Package style", "Best for", "Typical highlights"]}
          widths={["w-1/4", undefined, undefined]}
          rows={packageTypes.map((row) => [row.style, row.bestFor, row.highlights])}
        />
      </Section>

      <Section label="By Travel Style" heading="Which Bali trip suits you">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          {styleGuide.map((item) => (
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

      <Section label="Inclusions" heading="What's typically included in a Bali package">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Trip Length" heading="How long should your Bali trip be?">
        <TripRows
          rows={tripLengths.map((row) => ({
            label: row.length,
            detail: row.suits,
          }))}
        />
      </Section>

      <Section label="Choosing" heading="Choosing between package styles">
        <p className="text-gray-600 leading-relaxed">
          In case you do not know which style suits your vacation, here&rsquo;s a tip to
          help you out: select the romantic option if the vacation is about just the two
          of you; choose the family option if pacing and fun for kids is what concerns you
          most; go for adventure if more of action is what you seek; while for the first
          trip to Bali, you can always try one of the best-sellers.
        </p>
      </Section>

      <Section label="Add-On" heading="Extending your Bali trip to Nusa Penida">
        <p className="text-gray-600 leading-relaxed">
          For travellers with extra time, Nusa Penida has become one of Bali&apos;s most
          sought-after add-on destinations, known for dramatic cliff-top viewpoints like
          Kelingking Beach, the natural rock arch at Broken Beach, and the striking blue
          waters of Angel&apos;s Billabong. Reaching Nusa Penida requires a boat crossing
          from Bali&apos;s mainland, which typically means allocating at least a full extra
          day, but the payoff is a noticeably different, more rugged landscape compared to
          Bali&apos;s main tourist areas.
        </p>
      </Section>

      <Section label="When to Go" heading="What to know about Bali's rainy season">
        <p className="text-gray-600 leading-relaxed">
          Although Bali is indeed an all-year destination, it is important to know exactly
          what the &lsquo;rainy season&rsquo; is (about November to March), since it is not
          as problematic as travelers would think. The rain will come in quick, heavy
          showers instead of being a day-long rain, thus making tourism and other
          activities still possible with some adaptation in your schedule. If travelers are
          after having clear skies during their{" "}
          <Link href={BALI_LANDING} className={INLINE_LINK}>
            beach vacations
          </Link>
          , they may opt to go during the dry season. Rainy season travelers, on the other hand, get the advantage of
          not dealing with large crowds and more attractive prices.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Start planning your Bali getaway"
        body="Whether you&apos;re after romance, family fun, or adventure, a consultant can help match you with the right Bali itinerary. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
