"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
import Button from "@/src/components/Button";

/**
 * Body copy is taken verbatim from
 * content-document/sesional&school-holiday/Year-End Holiday Deals 2026_
 * Malaysia's Busiest Travel Window.docx — the draft's own order, headings and
 * wording.
 *
 * Layout device: this page is about a price that only ever climbs, so the
 * pricing table is drawn as a rising bar — the width of the rule under each
 * band is the argument, not decoration. The planning timeline reuses the same
 * left-to-right reading so the two sections rhyme.
 */

const PHOTO = {
  hero: "/images/seasonal/winter-ice-festival.jpg",
  heroAlt: "Visitors at an outdoor winter ice festival",
  destinations: "/images/seasonal/christmas-market.jpg",
  destinationsAlt: "A Christmas market lit up in a European old-town square",
  festive: "/images/seasonal/festive-park-night.jpg",
  festiveAlt: "A theme park lit up at dusk during the festive season",
  types: "/images/seasonal/winter-snow-park.jpg",
  typesAlt: "A snow-covered park with bare trees in winter",
  band: "/images/seasonal/ye-rothenburg.jpg",
  bandAlt: "The half-timbered old town of Rothenburg ob der Tauber",
  korea: "/images/seasonal/ye-korea-gamcheon.jpg",
  koreaAlt: "The painted hillside houses of Gamcheon Culture Village, Busan",
  booksOut: "/images/seasonal/ye-vienna-opera.jpg",
  booksOutAlt: "The Vienna State Opera lit up at night",
  ski: "/images/seasonal/ye-ski-chairlift.jpg",
  skiAlt: "Friends riding a chairlift above the snow",
  alpine: "/images/seasonal/ye-alpine-cable-car.jpg",
  alpineAlt: "A cable car crossing snow-covered Alpine peaks",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const intensifiers = [
  {
    factor: "Extended school break",
    why: "Malaysia's longest school holiday window falls at year-end",
  },
  {
    factor: "Global festive travel",
    why: "Christmas and New Year drive worldwide travel demand simultaneously",
  },
  {
    factor: "Corporate year-end trips",
    why: "Companies often schedule incentive and retreat travel around this period too",
  },
  {
    factor: "Limited flexibility",
    why: "Most families and workers have fixed time-off windows, concentrating demand into the same dates",
  },
  {
    factor: "Popular destination overlap",
    why: "Many top destinations (Australia, Europe, Japan) are also in their own peak season",
  },
];

const destinations = [
  {
    place: "Australia",
    why: "Summer season locally, aligning well with the festive period",
  },
  {
    place: "Japan",
    why: "Winter scenery, illuminations, and New Year cultural traditions",
  },
  { place: "Europe", why: "Christmas markets and festive city atmospheres" },
  { place: "Bali", why: "A reliable, shorter-flight escape for a festive family trip" },
  { place: "Korea", why: "Winter activities and festive city experiences" },
];

// `weight` is the share of the bar that is filled — the price climb made visible.
const pricing = [
  {
    when: "6+ months ahead",
    pattern: "Most competitive pricing and widest availability",
    weight: 25,
  },
  {
    when: "3–5 months ahead",
    pattern: "Moderate pricing; availability still reasonable for most destinations",
    weight: 50,
  },
  {
    when: "1–2 months ahead",
    pattern:
      "Pricing rises noticeably; preferred dates and hotels may already be limited",
    weight: 75,
  },
  {
    when: "Final weeks",
    pattern: "Highest pricing of the year; availability significantly constrained",
    weight: 100,
  },
];

const booksOutFirst = [
  {
    term: "Direct or convenient flight routes",
    detail: "Especially to high-demand destinations like Japan, Australia, and Europe",
  },
  {
    term: "Family-friendly and centrally located hotels",
    detail: "Preferred properties near key attractions fill quickly",
  },
  {
    term: "New Year's Eve-specific experiences",
    detail: "Dinners, events, and celebrations tied to specific dates",
  },
  {
    term: "Popular multi-country group tours",
    detail: "Fixed departure dates for group tours have limited capacity",
  },
];

const timeline = [
  {
    when: "July–August",
    action: "Begin researching destinations and requesting initial quotes",
  },
  {
    when: "September–October",
    action: "Confirm bookings to lock in pricing before the steepest increases",
  },
  {
    when: "November",
    action: "Finalise remaining details; expect limited flexibility on changes",
  },
  { when: "December", action: "Travel during the peak window itself" },
];

const travellerTypes = [
  {
    type: "Families",
    style: "Destinations combining festive atmosphere with kid-friendly activities",
  },
  {
    type: "Couples",
    style: "Romantic city breaks with Christmas market or New Year's Eve experiences",
  },
  {
    type: "Groups of friends",
    style: "Multi-country tours or ski/winter destination trips",
  },
  {
    type: "Corporate groups",
    style: "Year-end retreats or incentive trips scheduled before the year closes",
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

export default function YearEndContent({
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
              Seasonal
            </span>
          </motion.div>

          <h1 className="font-primary font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block text-white"
            >
              Year-End Holiday Deals 2026
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="block text-primary"
            >
              Malaysia&rsquo;s Busiest Travel Window
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-3xl"
          >
            The year end period, which is from the long break of the school, through
            Christmas, and to the New Year period, is always the busiest travel period of the
            year for Malaysians. This is a real busy time to plan for, because not only are
            there two holiday periods involved but the travel needs of domestic and
            international travelers will overlap making this an important time.
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

      {/* ── WHY IT IS DIFFERENT ───────────────────────────────────────────── */}
      <Section
        label="The Pile-Up"
        heading="Why Year-End Is Different From Other Peak Periods"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {intensifiers.map((row) => (
            <DefinitionRow key={row.factor} term={row.factor} detail={row.why} />
          ))}
        </div>
      </Section>

      {/* ── DESTINATIONS ──────────────────────────────────────────────────── */}
      <Section
        label="Where To Go"
        heading="Popular Year-End Destinations"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {destinations.map((row) => (
              <div key={row.place}>
                <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
                <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                  {row.place}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{row.why}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5 relative h-56 lg:h-80 overflow-hidden rounded-2xl">
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

      {/* ── PRICING CLIMB ─────────────────────────────────────────────────
          The rule under each band is drawn to its `weight`, so the section
          reads as a rising cost before a word of it is read. */}
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
                Pricing
              </span>
            </div>
            <h2 className="font-primary font-bold text-white text-2xl md:text-3xl leading-tight mb-8 max-w-3xl">
              Pricing Behaviour During Year-End Season
            </h2>

            <div className="space-y-8">
              {pricing.map((row) => (
                <div key={row.when}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 mb-3">
                    <p className="sm:col-span-4 font-primary font-bold text-white text-[15px]">
                      {row.when}
                    </p>
                    <p className="sm:col-span-8 text-white/70 text-[15px] leading-relaxed">
                      {row.pattern}
                    </p>
                  </div>
                  <div
                    className="h-[3px] w-full bg-white/10 overflow-hidden"
                    role="presentation"
                  >
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${row.weight}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT BOOKS OUT FIRST ──────────────────────────────────────────── */}
      <Section
        label="Gone First"
        heading="What Books Out First During Year-End Season"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {booksOutFirst.map((row) => (
              <DefinitionRow key={row.term} term={row.term} detail={row.detail} />
            ))}
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[360px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.booksOut}
              alt={PHOTO.booksOutAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── PLANNING TIMELINE ─────────────────────────────────────────────── */}
      <Section
        label="Timeline"
        heading="Suggested Planning Timeline"
        className="bg-teal-light/40"
      >
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((row) => (
            <li key={row.when} className="border-t-2 border-primary pt-5">
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.when}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.action}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── FESTIVE EXPERIENCES ───────────────────────────────────────────── */}
      <Section
        label="Festive"
        heading="Combining Year-End Travel With Festive Experiences"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <p className="lg:col-span-7 text-gray-600 leading-relaxed">
            Indeed, there are many who travel especially to participate in festive happenings
            that cannot be experienced in any other time of the year, such as Christmas
            markets in Europe, winter illumination events in Japan, or New Year&rsquo;s Eve
            celebrations in big cities. It is therefore wise to find out about the timing and
            the availability of such festivities as soon as possible because their schedule
            does not change regardless of your booking timing.
          </p>
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.festive}
              alt={PHOTO.festiveAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── TRAVELLER TYPES ───────────────────────────────────────────────── */}
      <Section
        label="Who Travels"
        heading="Year-End Travel for Different Traveller Types"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src={PHOTO.types}
              alt={PHOTO.typesAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-7 border-t-2 border-teal-navy order-1 lg:order-2">
            {travellerTypes.map((row) => (
              <DefinitionRow key={row.type} term={row.type} detail={row.style} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── BALANCING, GROUPS, INSURANCE ──────────────────────────────────── */}
      <Section
        label="Practicalities"
        heading="Balancing Festive Celebrations With Travel Plans"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            { src: PHOTO.ski, alt: PHOTO.skiAlt },
            { src: PHOTO.alpine, alt: PHOTO.alpineAlt },
          ].map((img) => (
            <motion.div
              key={img.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative h-56 md:h-72 overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          ))}
        </div>
        <div className="space-y-8 max-w-3xl">
          <p className="text-gray-600 leading-relaxed">
            For many families, there exists an authentic dilemma that arises at the year-end
            period when it comes to planning: choosing between observing local festivities and
            family meetings versus traveling during the break. The most commonly adopted
            solution involves planning to depart for a trip after local festivities or family
            engagements are concluded and use the remaining days in the break period for
            traveling.
          </p>
          <div>
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
              Managing Group Bookings During Year-End Season
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For families or friend groups travelling together during year-end, coordinating
              a larger group booking adds another layer of planning complexity during an
              already high-demand period. Confirming everyone&rsquo;s availability and
              commitment early, then booking as a coordinated group rather than individually,
              both simplifies logistics and often secures better group-rate pricing during
              this competitive booking window.
            </p>
          </div>
          <div>
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
              Year-End Travel Insurance Considerations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Since so much money is spent on planning a holiday of this sort in a year,
              considering all the financial investment and the limited holiday time available
              to a family, travel insurance assumes special importance in this case. This is
              because the problems of peak season are more probable in this period than in any
              other time of the year.
            </p>
          </div>
        </div>
      </Section>

      {/* ── PLATE BEFORE THE FAQ ──────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
            >
              <Image
                src={PHOTO.band}
                alt={PHOTO.bandAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
            >
              <Image
                src={PHOTO.korea}
                alt={PHOTO.koreaAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
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
              Lock In Your Year-End Holiday Now
            </h2>
            <p className="text-gray-600 leading-relaxed mb-2 max-w-2xl">
              The year-end travel window fills up fast, and pricing only rises the closer you
              get to peak dates.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              Request a free, personalised quote today to secure your preferred destination.
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
