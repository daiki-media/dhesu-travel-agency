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
 * content-document/sesional&school-holiday/School Holiday Deals 2026_ Family
 * Packages While Availability Lasts.docx — the draft's own order, headings and
 * wording.
 *
 * Layout device: the whole argument is about time running out, so the page is
 * built on two calendar spines — the four 2026 break windows across the year,
 * and a booking timeline that counts down toward departure. Those are real
 * sequences, which is why they are the only ordered things here.
 */

const PHOTO = {
  hero: "/images/seasonal/theme-park-family.jpg",
  heroAlt: "A group leaping in the air in front of a roller coaster",
  early: "/images/seasonal/roller-coaster-family.jpg",
  earlyAlt: "A family riding a roller coaster together",
  destinations: "/images/seasonal/patong-beach-phuket.jpg",
  destinationsAlt: "The illuminated Patong Beach arch in Phuket, Thailand",
  shortBreak: "/images/seasonal/bali-batur-terrace.jpg",
  shortBreakAlt: "Families at a terrace café looking out over Mount Batur in Bali",
  band: "/images/seasonal/sh-theme-park-globe.jpg",
  bandAlt: "The rotating globe at the entrance to a Universal Studios park",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// The draft's own internal links. Each destination row links to the old
// holidayidea.com.my listing for that place; the two prose links point at the
// old homepage, which on a page that is not about one destination has no more
// specific equivalent than our own homepage.
const HOME = "/";

const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

// Same underline, set for the dark hero.
const HERO_LINK =
  "font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors";

const windows = [
  { term: "Term 1 mid-break", dates: "Around March", duration: "1 week" },
  {
    term: "Mid-year break",
    dates: "Around late May to early June",
    duration: "2 weeks",
  },
  { term: "Term 3 mid-break", dates: "Around August", duration: "1 week" },
  {
    term: "Year-end break",
    dates: "Around November to December/January",
    duration: "Several weeks",
  },
];

const earlyFactors = [
  {
    factor: "Airfare pricing",
    happens: "Rises sharply as departure dates approach, especially on popular routes",
  },
  {
    factor: "Hotel availability",
    happens: "Preferred room categories and family-friendly properties book out first",
  },
  {
    factor: "Popular attraction tickets",
    happens: "Timed-entry tickets for theme parks and major attractions can sell out",
  },
  {
    factor: "Group/package pricing",
    happens:
      "Bundled package deals are typically most competitive when booked further ahead",
  },
  {
    factor: "Flight seat selection",
    happens: "Family seating together becomes harder to secure last-minute",
  },
];

const destinations = [
  {
    place: "Bali",
    href: "/tours/indonesia/bali",
    image: "/images/seasonal/sh-bali-tanah-lot.jpg",
    alt: "Waves breaking below the Tanah Lot sea temple in Bali",
    why: "Short flight, family-friendly resorts, manageable pacing for kids",
  },
  {
    place: "Hong Kong",
    href: "/tours/hong-kong",
    image: "/images/guides/hk-disneyland-castle.jpg",
    alt: "Disney characters in front of the castle at Hong Kong Disneyland",
    why: "Compact, Disneyland-anchored, efficient transport for families",
  },
  {
    place: "Australia",
    href: "/tours/australia",
    image: "/images/seasonal/sh-australia-bondi.jpg",
    alt: "Bondi Beach and its surf from the air, Sydney",
    why: "Iconic attractions, aligns well with year-end break timing",
  },
  {
    place: "Thailand (Phuket/Krabi)",
    href: "/tours/thailand",
    image: "/images/seasonal/sh-thailand-krabi.jpg",
    alt: "A longtail boat below limestone cliffs in the Andaman Sea",
    why: "Beach relaxation with flexible, less rushed pacing",
  },
  {
    place: "Vietnam",
    href: "/tours/vietnam",
    image: "/images/seasonal/sh-vietnam-hoi-an.jpg",
    alt: "Lantern boats on the river at Hoi An after dark",
    why: "Good value, culturally engaging without being overwhelming for children",
  },
];

const tripLengths = [
  {
    period: "1-week breaks (March, August)",
    length: "4–5 days, allowing buffer time before/after school resumes",
  },
  {
    period: "2-week mid-year break",
    length: "6–8 days, allowing for a more relaxed pace",
  },
  {
    period: "Year-end extended break",
    length: "7–10 days, or longer for more distant destinations",
  },
];

const lockIn = [
  {
    term: "Flights",
    detail:
      "Especially on popular routes, where seat availability and pricing shift quickly during peak demand",
  },
  {
    term: "Family-friendly accommodation",
    detail: "Connecting rooms or family suites are limited and book out early",
  },
  {
    term: "Theme park or attraction tickets",
    detail: "Particularly for timed-entry venues during peak periods",
  },
  {
    term: "Group package deals",
    detail: "Bundled pricing typically offers the best value the earlier it's secured",
  },
];

const timeline = [
  { when: "4–6 months ahead", action: "Begin researching destinations and requesting quotes" },
  { when: "3–4 months ahead", action: "Confirm booking to lock in pricing and availability" },
  {
    when: "1–2 months ahead",
    action: "Finalise details, confirm any add-on activities or tickets",
  },
  {
    when: "Final weeks",
    action: "Availability and pricing become significantly less favourable",
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

function DefinitionRow({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 border-b border-gray-200 py-6">
      <p className="sm:col-span-4 font-primary font-bold text-teal-navy text-[15px] leading-snug">
        {term}
      </p>
      <p className="sm:col-span-8 text-gray-600 text-[15px] leading-relaxed">{detail}</p>
    </div>
  );
}

export default function SchoolHolidayContent({
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
        eyebrow="Seasonal"
        title="School Holiday Deals 2026"
        titleAccent="Family Packages While Availability Lasts"
        intro={
          <>
            The holiday seasons of the schools undoubtedly have to be the most demanding
            travel seasons of the year for the citizens of Malaysia, and it is safe to say
            that there is a certain relationship between the{" "}
            <Link href={HOME} className={HERO_LINK}>
              high demand and prices.
            </Link>{" "}
            The following pages will contain information about the school holidays of
            Malaysia in 2026.
          </>
        }
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />

      {/* ── THE 2026 WINDOWS ──────────────────────────────────────────────
          A year read left to right: the four breaks in the order they fall. */}
      <Section
        label="The Calendar"
        heading="Malaysia's 2026 School Holiday Windows"
        className="bg-white"
      >
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {windows.map((row) => (
            <li key={row.term} className="border-t-2 border-primary pt-5">
              <p className="text-primary font-semibold text-[15px] mb-1">{row.dates}</p>
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.term}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{row.duration}</p>
            </li>
          ))}
        </ol>
        <p className="text-gray-600 text-[15px] leading-relaxed mt-8 max-w-3xl">
          Exact dates are set annually by the Ministry of Education and may vary by state;
          confirm official dates before finalising your booking to ensure your trip aligns
          precisely with your children&rsquo;s actual school calendar.
        </p>
      </Section>

      {/* ── WHY BOOK EARLY ────────────────────────────────────────────────── */}
      <Section
        label="The Squeeze"
        heading="Why Booking Early Matters So Much for School Holidays"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {earlyFactors.map((row) => (
              <DefinitionRow key={row.factor} term={row.factor} detail={row.happens} />
            ))}
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[430px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.early}
              alt={PHOTO.earlyAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── DESTINATIONS ──────────────────────────────────────────────────── */}
      <Section
        label="Where To Go"
        heading="Best Destinations for School Holiday Family Trips"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((row) => (
              <div key={row.place} className="flex h-full flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-5">
                  <Image
                    src={row.image}
                    alt={row.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
                <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                  <Link href={row.href} className={INLINE_LINK}>
                    {row.place}
                  </Link>
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{row.why}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TRIP LENGTH ───────────────────────────────────────────────────── */}
      <Section
        label="How Long"
        heading="Trip Length Guidance by Holiday Window"
        className="bg-teal-light/40"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {tripLengths.map((row) => (
            <div
              key={row.period}
              className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
            >
              <p className="sm:col-span-5 font-primary font-bold text-[#1a1a1a] text-[15px] leading-snug">
                {row.period}
              </p>
              <p className="sm:col-span-7 text-gray-600 text-[15px] leading-relaxed">
                {row.length}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT TO LOCK IN ───────────────────────────────────────────────── */}
      <Section
        label="Lock In First"
        heading="What to Lock In Early for a School Holiday Trip"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {lockIn.map((row) => (
              <DefinitionRow key={row.term} term={row.term} detail={row.detail} />
            ))}
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[360px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.destinations}
              alt={PHOTO.destinationsAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── BOOKING TIMELINE ──────────────────────────────────────────────
          A genuine countdown, so it is ordered and the last rung is the warning. */}
      <section className="py-12 lg:py-12 lg:py-16 bg-teal-navy">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-white/70 font-semibold text-sm uppercase tracking-widest font-primary">
                Countdown
              </span>
            </div>
            <h2 className="font-primary font-bold text-white text-2xl md:text-3xl leading-tight mb-8 max-w-3xl">
              A Practical Booking Timeline
            </h2>

            <ol className="space-y-0">
              {timeline.map((row, i) => (
                <li
                  key={row.when}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 border-b border-white/15 py-6"
                >
                  <p
                    className={`sm:col-span-4 font-primary font-bold text-[15px] ${
                      i === timeline.length - 1 ? "text-primary" : "text-white"
                    }`}
                  >
                    {row.when}
                  </p>
                  <p className="sm:col-span-8 text-white/70 text-[15px] leading-relaxed">
                    {row.action}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ── WHY MORE LEAD TIME ────────────────────────────────────────────── */}
      <Section
        label="Fixed Dates"
        heading="Why School Holiday Trips Need More Planning Lead Time Than Other Trips"
        className="bg-white"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          In contrast to traveling during the off-peak season when one may gain advantage from
          being flexible in terms of the date of travel and obtain lower prices accordingly,
          school holiday travel is, by its nature, bound to specific dates, and one cannot
          postpone or move one&rsquo;s trip ahead of schedule in order to escape increased
          demand.
        </p>
      </Section>

      {/* ── SHORT BREAKS ──────────────────────────────────────────────────── */}
      <Section
        label="Short Breaks"
        heading="Making the Most of a Short School Holiday Break"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src={PHOTO.shortBreak}
              alt={PHOTO.shortBreakAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="lg:col-span-7 text-gray-600 leading-relaxed order-1 lg:order-2">
            Destination and timing considerations become more important if you only have one
            week to spare between your school breaks compared to when you have more time for a
            longer holiday. Going for a location that allows you to make a short flight is a
            good way to minimize the time that you will be on the road, while avoiding too
            many activities in your schedule minimizes fatigue. An optimally timed 4-5 day
            schedule provides a truly relaxing break.
          </p>
        </div>
      </Section>

      {/* ── MULTIPLE SCHOOL SCHEDULES ─────────────────────────────────────── */}
      <Section
        label="Multiple Schools"
        heading="Coordinating Travel Around Multiple Children's School Schedules"
        className="bg-white"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Families with children at different schools occasionally face a practical challenge:
          slightly different school holiday dates depending on the specific school or state.
          It&rsquo;s worth confirming exact dates for every child in your family as early as
          possible when{" "}
          <Link href={HOME} className={INLINE_LINK}>
            planning school holiday travel,
          </Link>{" "}
          since even a one or two day mismatch can affect your available travel window and
          should be factored into your booking timeline.
        </p>
      </Section>

      {/* ── PLATE BEFORE THE FAQ ──────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative h-64 md:h-96 overflow-hidden rounded-2xl"
          >
            <Image
              src={PHOTO.band}
              alt={PHOTO.bandAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Secure Your School Holiday Trip Now"
        body="Popular destinations and dates fill up months in advance for school holidays. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />
    </>
  );
}
