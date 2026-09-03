"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
import Button from "@/src/components/Button";

/**
 * Body copy is taken verbatim from
 * content-document/sesional&school-holiday/Raya Holiday Packages_ Festive
 * Travel Made Muslim-Friendly.docx — the draft's own order, headings and
 * wording.
 *
 * Layout device: the decision this page helps with is *when* to go, so the
 * three timing options are given equal weight as three side-by-side choices
 * rather than a ranked list — the draft is explicit that none of them is the
 * right answer for every family.
 */

const PHOTO = {
  hero: "/images/seasonal/ortakoy-mosque.jpg",
  heroAlt: "Ortaköy Mosque on the Bosphorus waterfront in Istanbul",
  destinations: "/images/seasonal/blue-mosque-istanbul.jpg",
  destinationsAlt: "The domes and minarets of the Blue Mosque in Istanbul",
  family: "/images/seasonal/mosque-interior-ottoman.jpg",
  familyAlt: "The tiled prayer hall of an Ottoman mosque",
  domestic: "/images/seasonal/tirta-empul-bali.jpg",
  domesticAlt: "Offerings beside the spring-water pools at Tirta Empul, Bali",
  band: "/images/seasonal/raya-dolmabahce.jpg",
  bandAlt: "Dolmabahçe Palace on the Bosphorus waterfront, Istanbul",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contrast = [
  {
    standard: "General destination appeal",
    raya: "Muslim-friendly destination with reliable halal access",
  },
  {
    standard: "Flexible dining options",
    raya: "Confirmed halal-certified dining throughout the itinerary",
  },
  {
    standard: "Standard sightseeing pace",
    raya: "Pacing that respects prayer times and any planned religious observances",
  },
  {
    standard: "Any travel dates",
    raya: "Often timed specifically around the Raya public holiday window",
  },
  {
    standard: "General hotel booking",
    raya: "Hotels with prayer facility awareness and family-friendly festive atmosphere",
  },
];

const destinations = [
  {
    place: "Turkey",
    image: "/images/seasonal/raya-turkey-ephesus.jpg",
    alt: "The Library of Celsus among the ruins of Ephesus, Turkey",
    why: "Rich Islamic heritage, strong halal food access, festive cultural atmosphere",
  },
  {
    place: "Indonesia (Bali & beyond)",
    image: "/images/seasonal/raya-indonesia-mosque.jpg",
    alt: "An Indonesian mosque with minarets rising above the palms",
    why: "Majority-Muslim country, easy halal access, short flight time",
  },
  {
    place: "UAE (Dubai/Abu Dhabi)",
    image: "/images/seasonal/raya-uae-dhow.jpg",
    alt: "A lantern-lit dhow cruising past the Dubai Marina skyline",
    why: "Excellent halal infrastructure, family-friendly attractions",
  },
  {
    place: "Egypt",
    image: "/images/seasonal/raya-egypt-karnak.jpg",
    alt: "The avenue of sphinxes at the entrance to Karnak Temple, Egypt",
    why: "Islamic heritage sites, reliable halal food access",
  },
  {
    place: "Domestic Malaysia extensions",
    image: "/images/seasonal/raya-malaysia-orangutan.jpg",
    alt: "An orangutan in the rainforest of Sarawak, Malaysian Borneo",
    why: "For families preferring to celebrate Raya at home before travelling shortly after",
  },
];

const timing = [
  {
    approach: "Travelling during Raya itself",
    consideration:
      "Requires more advance planning for halal-specific festive dining and family gathering logistics",
  },
  {
    approach: "Travelling shortly after Raya",
    consideration:
      "A popular choice, allowing families to celebrate at home first, then travel during the extended holiday window",
  },
  {
    approach: "Travelling before Raya",
    consideration:
      "Less common, but can work for families wanting to be home in time for the celebration itself",
  },
];

const appropriate = [
  {
    term: "Confirmed halal dining",
    detail:
      "Not just general availability, but specifically verified halal-certified options throughout the trip",
  },
  {
    term: "Prayer facility awareness",
    detail:
      "Itinerary planning that identifies mosque access and accounts for prayer times",
  },
  {
    term: "Family-oriented pacing",
    detail:
      "Many Raya travellers are multi-generational family groups, requiring a less rushed itinerary pace",
  },
  {
    term: "Festive cultural context",
    detail:
      "Destinations with their own Islamic cultural richness can add meaning to the celebratory period",
  },
];

const tripLengths = [
  {
    length: "4–5 days",
    suits: "A shorter festive escape, particularly for short-haul destinations like Bali",
  },
  {
    length: "6–8 days",
    suits:
      "A more complete trip allowing deeper cultural exploration, particularly for Turkey or the UAE",
  },
  {
    length: "9+ days",
    suits:
      "Extended trips combining Raya celebration time with broader travel, where the holiday window allows",
  },
];

const bookingTimeline = [
  {
    when: "4–6 months ahead",
    action:
      "Begin researching destinations and requesting quotes, since Raya dates and demand patterns become clearer",
  },
  {
    when: "2–3 months ahead",
    action: "Confirm booking to lock in pricing before the steepest seasonal increases",
  },
  {
    when: "1 month ahead",
    action: "Finalise halal dining confirmations and any specific itinerary requests",
  },
  {
    when: "Final weeks",
    action:
      "Expect limited flight and hotel availability, particularly on popular Muslim-friendly routes",
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

export default function RayaContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-teal-navy overflow-hidden min-h-[420px] lg:min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={PHOTO.hero}
            alt={PHOTO.heroAlt}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-white/80 font-semibold text-sm uppercase tracking-widest font-primary">
              Festive Season
            </span>
          </motion.div>

          <h1 className="font-primary font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block text-white"
            >
              Raya Holiday Packages
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="block text-primary"
            >
              Festive Travel Made Muslim-Friendly
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-3xl"
          >
            The Hari Raya holiday period is probably the most significant time of the year for
            Malaysian Muslim families to go traveling, and there are certain planning issues
            involved in this type of holiday that make it different from a regular holiday
            booking. There are some places that are friendly toward Muslims, and other
            planning aspects that take into account the importance of the holiday period.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Link href="/contact">
              <Button variant="light" showArrow size="lg">
                Request a Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CHANGES ──────────────────────────────────────────────────── */}
      <Section
        label="The Difference"
        heading="Why Raya Travel Requires Different Planning"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy">
          <div className="hidden sm:grid sm:grid-cols-2 gap-8 py-4 border-b border-gray-200">
            <p className="font-primary font-bold text-gray-400 text-xs uppercase tracking-widest">
              Standard holiday planning
            </p>
            <p className="font-primary font-bold text-primary text-xs uppercase tracking-widest">
              Raya-specific planning
            </p>
          </div>
          {contrast.map((row) => (
            <div
              key={row.raya}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 border-b border-gray-200 py-6"
            >
              <p className="text-gray-400 text-[15px] leading-relaxed sm:pr-6">
                <span className="sm:hidden block text-xs uppercase tracking-widest font-semibold mb-1">
                  Standard
                </span>
                {row.standard}
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed sm:border-l-2 sm:border-primary sm:pl-8">
                <span className="sm:hidden block text-xs uppercase tracking-widest font-semibold text-primary mb-1">
                  Raya
                </span>
                {row.raya}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DESTINATIONS ──────────────────────────────────────────────────── */}
      <Section
        label="Where To Go"
        heading="Popular Raya-Friendly Destinations"
        className="bg-teal-light/40"
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
                  {row.place}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{row.why}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── THREE TIMING CHOICES ──────────────────────────────────────────
          Three equal options, deliberately not ranked: the draft says the
          answer is personal. */}
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
                When To Go
              </span>
            </div>
            <h2 className="font-primary font-bold text-white text-2xl md:text-3xl leading-tight mb-8 max-w-3xl">
              Timing Your Raya Trip
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {timing.map((row) => (
                <div key={row.approach} className="border-t-2 border-primary pt-5">
                  <h3 className="font-primary font-bold text-white text-lg leading-snug mb-3">
                    {row.approach}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    {row.consideration}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-white/70 text-[15px] leading-relaxed mt-8 max-w-3xl">
              Because the exact Raya dates shift annually based on the Islamic lunar calendar,
              it&rsquo;s worth confirming projected dates as early as possible when planning
              travel around this period, since flight and accommodation demand spikes sharply
              around the confirmed public holiday window.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT MAKES IT RAYA-APPROPRIATE ────────────────────────────────── */}
      <Section
        label="The Checklist"
        heading="What Makes a Package Genuinely Raya-Appropriate"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {appropriate.map((row) => (
            <DefinitionRow key={row.term} term={row.term} detail={row.detail} />
          ))}
        </div>
      </Section>

      {/* ── TRIP LENGTHS ──────────────────────────────────────────────────── */}
      <Section
        label="How Long"
        heading="Suggested Trip Lengths for Raya Travel"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {tripLengths.map((row) => (
              <div
                key={row.length}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
              >
                <p className="sm:col-span-3 font-primary font-bold text-[#1a1a1a] text-[15px]">
                  {row.length}
                </p>
                <p className="sm:col-span-9 text-gray-600 text-[15px] leading-relaxed">
                  {row.suits}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[340px] overflow-hidden rounded-2xl">
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

      {/* ── BOOKING TIMELINE ──────────────────────────────────────────────── */}
      <Section
        label="Timeline"
        heading="Booking Timeline for Raya Travel"
        className="bg-white"
      >
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingTimeline.map((row) => (
            <li key={row.when} className="border-t-2 border-primary pt-5">
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.when}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.action}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── FAMILY CONSIDERATIONS ─────────────────────────────────────────── */}
      <Section
        label="Family"
        heading="Family Considerations for Raya Trips"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <p className="lg:col-span-7 text-gray-600 leading-relaxed">
            In case of Raya vacations, there are usually several generations that come along
            for the ride. This means that vacation planning takes into account many more
            factors than just a couple and a family. This includes accommodating the needs of
            grandparents and organizing more leisure time for relaxation during the trip.
          </p>
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.family}
              alt={PHOTO.familyAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── HOME TRADITIONS, GROUPS, GIFTS ────────────────────────────────── */}
      <Section
        label="At Home"
        heading="Balancing Domestic Celebrations With Travel Plans"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <p className="text-gray-600 leading-relaxed">
              For some Malaysian Muslim families, Raya is very much linked to home rituals
              such as visiting relatives, having open houses, and community celebrations in
              the neighborhood, hence making it an individualistic choice to decide when to
              travel. For instance, there are some families who will choose to make the first
              couple of days in Raya about these rituals before traveling, while there are
              others who plan short trips for visiting relatives outside the country or
              traveling during Raya itself.
            </p>
            <div>
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
                Managing Group Travel for Raya With Extended Family
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Extended-family-related Raya holiday plans pose new challenges regarding
                budget differences between various members of the family, mobility challenges
                for elderly relatives, and the need to create a mutually acceptable itinerary.
                Having this discussion right from the beginning, preferably during the initial
                meeting with a travel advisor, will help uncover any problems before planning
                becomes a challenge.
              </p>
            </div>
            <div>
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
                Gift-Giving and Cultural Considerations While Travelling During Raya
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For families travelling during or shortly after Raya, it&rsquo;s worth
                considering how traditions like duit raya (festive money gifts) or bringing
                small gifts for relatives abroad fit into your travel plans, particularly if
                part of the trip involves visiting family overseas. Discussing these
                expectations within the family ahead of time helps avoid any last-minute
                scrambling once you&rsquo;ve already arrived at your destination.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.domestic}
              alt={PHOTO.domesticAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
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
      <Section
        label="Questions"
        heading="Frequently Asked Questions"
        className="bg-teal-light/40"
      >
        <div className="max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="border-l-2 border-primary pl-8"
          >
            <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl leading-tight mb-3">
              Plan Your Raya Getaway
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Celebrate the festive season with a trip that respects both your traditions and
              your travel goals. Request a free, personalised quote today.
            </p>
            <Link href="/contact">
              <Button variant="light" showArrow size="lg">
                Request a Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
