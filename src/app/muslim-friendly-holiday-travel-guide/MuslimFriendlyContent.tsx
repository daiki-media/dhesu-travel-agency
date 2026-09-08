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
 * content-document/tour-types/Muslim-Friendly Tour Packages_ Travel With
 * Confidence and Convenience.docx — the draft's own order, headings and
 * wording.
 *
 * Layout device: the page is an assurance checklist, so the recurring shape is
 * a two-column row — the thing you need on the left, what a package actually
 * does about it on the right. Nothing here is a sequence, so nothing is
 * numbered.
 */

const PHOTO = {
  hero: "/images/tour-types/mosque-night-istanbul.jpg",
  heroAlt: "A large mosque lit up at dusk above the water in Istanbul",
  practice: "/images/tour-types/mosque-interior-blue.jpg",
  practiceAlt: "The tiled interior and prayer carpet of an Ottoman mosque",
  heritage: "/images/tour-types/giza-pyramids-sphinx.jpg",
  heritageAlt: "The Sphinx and the pyramids at Giza, Egypt",
  prayer: "/images/tour-types/abu-dhabi-grand-mosque.jpg",
  prayerAlt: "The white domes of Sheikh Zayed Grand Mosque in Abu Dhabi",
  confidence: "/images/tour-types/dubai-al-fahidi.jpg",
  confidenceAlt: "Wind towers and courtyards in the Al Fahidi historic district, Dubai",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// The draft's own internal links. The .docx still points at the old
// holidayidea.com.my search pages: s=UAE for the three UAE anchors, s=Egypt for
// the Egypt row. The UAE listing is covered by the Dubai hub; there is no Egypt
// page on this site, so that row falls back to the all-destinations index.
const UAE = "/tours/dubai";
const EGYPT = "/tours";

const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

// Same underline, set for the dark hero.
const HERO_LINK =
  "font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors";

const practice = [
  {
    consideration: "Halal food access",
    addressed:
      'Confirmed halal dining options at hotels and throughout the itinerary, not just "best effort"',
  },
  {
    consideration: "Prayer facilities",
    addressed:
      "Awareness of mosque locations and prayer space availability along the itinerary",
  },
  {
    consideration: "Itinerary pacing",
    addressed:
      "Built-in time for prayer breaks, particularly during Friday Jumu'ah prayers",
  },
  {
    consideration: "Alcohol-free options",
    addressed:
      "Accommodation and dining choices that accommodate alcohol-free preferences where relevant",
  },
  {
    consideration: "Cultural sensitivity",
    addressed:
      "Destinations and activities planned with awareness of modesty and cultural comfort",
  },
];

const destinations = [
  {
    place: "Turkey",
    image: "/images/tour-types/mf-turkey.jpg",
    alt: "Hagia Sophia above the Istanbul skyline",
    why: "Majority-Muslim country with widespread halal food and mosque access",
  },
  {
    place: "UAE (Dubai/Abu Dhabi)",
    href: UAE,
    image: "/images/tour-types/mf-uae.jpg",
    alt: "The Madinat Jumeirah waterway with Burj Al Arab beyond",
    why: "Strong halal food infrastructure and prayer facilities throughout",
  },
  {
    place: "Indonesia (Bali & beyond)",
    image: "/images/tour-types/mf-indonesia.jpg",
    alt: "The stupas of Borobudur at first light, Java",
    why: "Majority-Muslim country with easy halal access, alongside broader tourism infrastructure",
  },
  {
    place: "Egypt",
    href: EGYPT,
    image: "/images/tour-types/mf-egypt.jpg",
    alt: "The colonnade and statues of Luxor Temple",
    why: "Rich Islamic heritage sites alongside reliable halal food access",
  },
  {
    place: "Malaysia's regional neighbours (Brunei)",
    image: "/images/tour-types/mf-region-malaysia.jpg",
    alt: "The Sarawak State Legislative Assembly beside the river in Kuching",
    why: "Straightforward halal access given shared cultural and religious context",
  },
  {
    place: "Select Europe cities",
    image: "/images/tour-types/mf-europe.jpg",
    alt: "The Houses of Parliament and Big Ben in London",
    why: "Halal options increasingly available in major cities, though requiring more careful planning",
  },
];

const halalChecks = [
  {
    term: "Certified halal restaurants",
    detail:
      'Confirmed certification, rather than a general "Muslim-owned" or "no pork" assumption',
  },
  {
    term: "Hotel dining arrangements",
    detail:
      "Whether breakfast and included meals are prepared in halal-certified kitchens",
  },
  {
    term: "Regional variation",
    detail:
      "Halal certification standards and availability vary significantly by country, so destination-specific research matters",
  },
  {
    term: "Backup options",
    detail:
      "A good itinerary identifies halal dining options along the full route, not just at major stops",
  },
];

const prayerPlanning = [
  "Identifying mosque locations near major attractions and accommodation",
  "Building realistic time buffers into the daily schedule for prayer breaks",
  "Extra consideration for Friday Jumu'ah prayers when itineraries fall on a Friday",
  "Awareness of prayer space availability at airports and during longer transit days",
];

const themes = [
  {
    theme: "Islamic Heritage",
    image: "/images/tour-types/theme-islamic-heritage.jpg",
    alt: "A tiled Ottoman interior in Turkey",
    examples: "Turkey, Egypt",
    focus: "Historic mosques, Islamic architecture, cultural depth",
  },
  {
    theme: "Beach & Relaxation",
    image: "/images/tour-types/theme-beach-relaxation.jpg",
    alt: "A resort on the Palm Jumeirah shoreline, Dubai",
    examples: "Indonesia (Bali), UAE",
    focus: "Halal-accessible resort destinations with strong tourism infrastructure",
  },
  {
    theme: "Family-Friendly",
    image: "/images/tour-types/theme-family-friendly.jpg",
    alt: "A footbridge over the Dubai Water Canal beneath the city skyline",
    examples: "UAE, Turkey",
    focus: "Combining halal convenience with broad family attractions",
  },
  {
    theme: "Festive/Religious Occasion",
    image: "/images/tour-types/theme-festive-occasion.jpg",
    alt: "Performers in traditional Turkish dress",
    examples: "Various, tied to Raya or Umrah-adjacent travel",
    focus: "Timed around significant religious periods",
  },
];

const included = [
  "Confirmed halal dining arrangements at hotels and along the itinerary",
  "Itinerary pacing that accounts for prayer times",
  "Destination and activity selection with cultural sensitivity in mind",
  "Guidance on mosque and prayer facility locations throughout your trip",
];

const commonQuestions = [
  {
    ask: "Will I be able to find halal food outside my hotel?",
    answer:
      "This varies significantly by destination; majority-Muslim countries make this straightforward, while other destinations require more specific advance research.",
  },
  {
    ask: "How do I know if a restaurant's halal claim is genuine?",
    answer:
      "Look for formal halal certification rather than general claims, and when in doubt, ask your consultant to verify specific dining recommendations in advance.",
  },
  {
    ask: "Will my itinerary accommodate daily prayers comfortably?",
    answer:
      "A properly planned Muslim-friendly itinerary builds this into the daily schedule rather than treating it as an afterthought squeezed between activities.",
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

/** The page's recurring device: a need on the left, what is done about it on the right. */
function AssuranceRow({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 border-b border-gray-200 py-6">
      <p className="sm:col-span-4 font-primary font-bold text-teal-navy text-[15px] leading-snug">
        {term}
      </p>
      <p className="sm:col-span-8 text-gray-600 text-[15px] leading-relaxed">{detail}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function MuslimFriendlyContent({
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
        eyebrow="Tour Types"
        title="Muslim-Friendly Tour Packages"
        titleAccent="Travel With Confidence and Convenience"
        intro={
          <>
            For Muslims who wish to enjoy their holiday, however, it should not be enough
            to have an excellent view of the area or stay in good accommodation; it is also
            equally important that there is easy access to halal food as well as suitable
            praying places. This article will discuss the factors that determine a truly{" "}
            <Link href={UAE} className={HERO_LINK}>
              Muslim tour package
            </Link>{" "}
            and the destinations where such tourism plans can be made.
          </>
        }
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />

      {/* ── WHAT IT MEANS IN PRACTICE ─────────────────────────────────────── */}
      <Section
        label="In Practice"
        heading={'What "Muslim-Friendly" Actually Means in Practice'}
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {practice.map((row) => (
              <AssuranceRow
                key={row.consideration}
                term={row.consideration}
                detail={row.addressed}
              />
            ))}
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.practice}
              alt={PHOTO.practiceAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── DESTINATIONS ──────────────────────────────────────────────────── */}
      <Section
        label="Where It Works"
        heading="Destinations Well-Suited to Muslim-Friendly Travel"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {row.href ? (
                  <Link href={row.href} className={INLINE_LINK}>
                    {row.place}
                  </Link>
                ) : (
                  row.place
                )}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.why}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HALAL FOOD PLANNING ───────────────────────────────────────────── */}
      <Section
        label="Halal Food"
        heading="Halal Food Planning: What to Confirm Before Booking"
        className="bg-white"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl mb-8">
          Not all &ldquo;halal-friendly&rdquo; claims are equal, and it&rsquo;s worth
          understanding what genuine halal assurance looks like versus a general best-effort
          claim.
        </p>
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {halalChecks.map((row) => (
            <AssuranceRow key={row.term} term={row.term} detail={row.detail} />
          ))}
        </div>
      </Section>

      {/* ── PRAYER FACILITY PLANNING ──────────────────────────────────────── */}
      <Section
        label="Prayer Times"
        heading="Prayer Facility Planning"
        className="bg-teal-light/40"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
          A well-planned Muslim-friendly itinerary accounts for prayer needs throughout the
          day, not as an afterthought.
        </p>
        <p className="font-primary font-semibold text-teal-navy mb-5">
          What this typically includes:
        </p>
        <ul className="space-y-4 max-w-3xl">
          {prayerPlanning.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      {/* ── ITINERARY THEMES ──────────────────────────────────────────────── */}
      <Section
        label="Themes"
        heading="Suggested Muslim-Friendly Itinerary Themes"
        className="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((row) => (
            <div key={row.theme} className="flex h-full flex-col">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl mb-5">
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.theme}
              </h3>
              <p className="text-primary font-semibold text-sm mb-3">{row.examples}</p>
              <p className="mt-auto text-gray-600 text-[15px] leading-relaxed">{row.focus}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IMAGE BREAK ───────────────────────────────────────────────────── */}
      <section className="pb-4 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
          >
            <Image
              src={PHOTO.heritage}
              alt={PHOTO.heritageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHY AN AGENCY + WHAT'S INCLUDED ───────────────────────────────── */}
      <Section
        label="Why an Agency"
        heading="Why Booking Through an Agency Helps for Muslim-Friendly Travel"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <p className="lg:col-span-7 text-gray-600 leading-relaxed">
            Halal verification for certification standards, locations of mosques, and suitable
            activities require extensive research when traveling to new destinations unlike
            other travels. A consultant who understands the concerns of{" "}
            <Link href={UAE} className={INLINE_LINK}>
              Muslims traveling
            </Link>{" "}
            is capable of pre-verifying the above facts, and hence you will be saved from the
            trouble of finding that halal certification and mosque locations are not sufficient
            in the destinations you are visiting.
          </p>
          <div className="lg:col-span-5 border-l-2 border-primary pl-8">
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-5">
              What&rsquo;s Typically Included
            </h3>
            <ul className="space-y-4">
              {included.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── COMMON QUESTIONS BEFORE BOOKING ───────────────────────────────── */}
      <Section
        label="Before Booking"
        heading="Common Questions Muslim Travellers Ask Before Booking"
        className="bg-teal-light/40"
      >
        <div className="space-y-8 max-w-4xl">
          {commonQuestions.map((row) => (
            <div key={row.ask}>
              <p className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                &ldquo;{row.ask}&rdquo;
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── UNFAMILIAR DESTINATIONS ───────────────────────────────────────── */}
      <Section
        label="Going Further"
        heading="Building Confidence Into Unfamiliar Destinations"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <p className="lg:col-span-7 text-gray-600 leading-relaxed">
            In terms of travelers who may be Muslim and have their sights set on somewhere
            other than the well-travelled areas which cater to Muslims, it pays off in big
            dividends to do just a little more homework ahead of time before going on vacation.
            Some examples include knowing where the halal restaurants are near your hotel,
            arranging for your breakfast situation, and what sort of cultural dress code to
            expect.
          </p>
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.confidence}
              alt={PHOTO.confidenceAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── PLATE BEFORE THE FAQ ──────────────────────────────────────────
          The questions below are largely about prayer access, so the page
          arrives at them on the building that answers them. */}
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
              src={PHOTO.prayer}
              alt={PHOTO.prayerAlt}
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
        heading="Plan Your Muslim-Friendly Holiday"
        body="Travel with confidence knowing your halal food and prayer needs are genuinely planned for, not an afterthought. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />
    </>
  );
}
