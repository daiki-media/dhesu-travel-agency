"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
import Button from "@/src/components/Button";

/**
 * Body copy is taken verbatim from
 * content-document/tour-types/Star Cruise Packages From Malaysia_ Itineraries,
 * Cabins & What to Expect.docx — the draft's own order, headings and wording.
 *
 * Layout device: a cruise is chosen by picking things off a menu — route,
 * cabin, length — so the page reads as a set of choices. Cabin categories get
 * a card row (they are alternatives, not steps), and what the fare covers is
 * set against what it does not in two facing columns.
 */

const PHOTO = {
  hero: "/images/tour-types/cruise-approaching-port.jpg",
  heroAlt: "The side deck of a ship approaching a whitewashed harbour town",
  routes: "/images/tour-types/cruise-ship.jpg",
  routesAlt: "A white cruise ship sailing past limestone islands",
  onboard: "/images/tour-types/cruise-deck-sunset.jpg",
  onboardAlt: "A passenger at the deck rail watching the sunset from a cruise ship",
  family: "/images/tour-types/cruise-ship-bay.jpg",
  familyAlt: "A multi-deck cruise ship at anchor in a sheltered bay",
  cabin: "/images/tour-types/cruise-suite-view.jpg",
  cabinAlt: "A suite living area opening onto a sea view at dusk",
  buffet: "/images/tour-types/cruise-buffet.jpg",
  buffetAlt: "A buffet line laid out in a ship's dining room",
  anchor: "/images/tour-types/cruise-at-anchor.jpg",
  anchorAlt: "A passenger cruiser at anchor off an island, with kayaks alongside",
  port: "/images/tour-types/singapore-night-safari.jpg",
  portAlt: "The entrance to Night Safari in Singapore, a common shore stop",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const compare = [
  {
    factor: "Unpacking",
    cruise: "Once, for the entire trip",
    standard: "Repeatedly, at each new hotel",
  },
  {
    factor: "Multiple destinations",
    cruise: "Visited via the ship's itinerary",
    standard: "Requires separate flights/transport between each",
  },
  {
    factor: "Onboard entertainment",
    cruise: "Included as part of the cruise experience",
    standard: "Not applicable",
  },
  {
    factor: "Dining",
    cruise: "Multiple options included in fare",
    standard: "Varies by destination and booking",
  },
  {
    factor: "Best for",
    cruise: "Travellers wanting variety with minimal logistics",
    standard: "Travellers wanting deeper immersion in fewer places",
  },
];

const routes = [
  {
    type: "Short regional cruises",
    duration: "2–3 nights",
    stops: "Port Klang, Penang, or nearby regional stops",
  },
  {
    type: "Extended regional cruises",
    duration: "4–7 nights",
    stops: "Combinations across Malaysia, Thailand, and Singapore",
  },
  {
    type: "Seasonal or themed sailings",
    duration: "Varies",
    stops: "Special itineraries tied to festive periods or specific routes",
  },
];

const cabins = [
  {
    cabin: "Interior cabin",
    description: "No window or balcony; most budget-friendly",
    bestFor: "Cost-conscious travellers prioritising onboard activities over cabin views",
  },
  {
    cabin: "Ocean view cabin",
    description: "Window with a sea view, no balcony",
    bestFor: "Travellers wanting natural light without balcony premium",
  },
  {
    cabin: "Balcony cabin",
    description: "Private balcony with sea views",
    bestFor: "Travellers wanting private outdoor space",
  },
  {
    cabin: "Suite",
    description: "Larger living space, additional amenities and perks",
    bestFor: "Travellers wanting a premium onboard experience",
  },
];

const included = [
  "Accommodation in your selected cabin category for the full sailing",
  "Main dining room meals across multiple onboard restaurants",
  "Access to onboard entertainment, including shows and activities",
  "Access to pools, recreational facilities, and public deck areas",
  "Port taxes and government fees (confirm inclusion specifics with your consultant)",
];

const notIncluded = [
  "Specialty dining venues beyond the main included restaurants",
  "Alcoholic beverages and some soft drinks (unless a beverage package is purchased)",
  "Shore excursions at ports of call",
  "Onboard spa treatments, casino, and select paid activities",
  "Gratuities, depending on the specific fare terms",
];

const lengths = [
  {
    length: "2–3 nights",
    suits: "First-time cruisers wanting a short introduction to cruising",
  },
  {
    length: "4–5 nights",
    suits: "A more complete cruise experience with additional port stops",
  },
  {
    length: "7+ nights",
    suits: "Travellers wanting an extended cruise as their primary holiday",
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

function Bullet({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "muted";
}) {
  return (
    <li className="flex gap-4">
      <span
        className={`mt-[0.7rem] h-px w-5 shrink-0 ${
          tone === "primary" ? "bg-primary" : "bg-gray-300"
        }`}
        aria-hidden
      />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function StarCruiseContent({
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
              Cruise Holidays
            </span>
          </motion.div>

          <h1 className="font-primary font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block text-white"
            >
              Star Cruise Packages From Malaysia
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="block text-primary"
            >
              Itineraries, Cabins &amp; What to Expect
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-3xl"
          >
            Cruising has gained popularity among tourists from Malaysia as a means of seeing
            many destinations without having to plan several flights and hotels. Star Cruises
            is one of the easiest ways to go on a cruise out of the region. The following
            guide will help you learn about Star Cruises packages, cabins and choosing the
            appropriate cruise.
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

      {/* ── CRUISE VS STANDARD TRIP ───────────────────────────────────────── */}
      <Section
        label="The Trade-Off"
        heading="Why Choose a Cruise Over a Standard Holiday"
        className="bg-white"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/5">
                  Factor
                </th>
                <th className="font-primary font-bold text-primary text-xs uppercase tracking-widest pb-3 pr-6">
                  Cruise holiday
                </th>
                <th className="font-primary font-bold text-gray-400 text-xs uppercase tracking-widest pb-3">
                  Standard multi-destination trip
                </th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.factor} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.factor}
                  </td>
                  <td className="py-5 pr-6 text-gray-700 text-[15px] leading-relaxed align-top">
                    {row.cruise}
                  </td>
                  <td className="py-5 text-gray-400 text-[15px] leading-relaxed align-top">
                    {row.standard}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── SAILING ROUTES ────────────────────────────────────────────────── */}
      <Section
        label="Routes"
        heading="Typical Star Cruise Sailing Routes"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {routes.map((row) => (
              <div
                key={row.type}
                className="border-b border-gray-200 py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6"
              >
                <p className="sm:col-span-5 font-primary font-bold text-teal-navy text-[15px] leading-snug">
                  {row.type}
                </p>
                <p className="sm:col-span-3 text-primary font-semibold text-[15px]">
                  {row.duration}
                </p>
                <p className="sm:col-span-4 text-gray-600 text-[15px] leading-relaxed">
                  {row.stops}
                </p>
              </div>
            ))}
            <p className="text-gray-600 text-[15px] leading-relaxed mt-6">
              Exact itineraries and destinations are subject to change based on the cruise
              line&rsquo;s current schedule, so it&rsquo;s worth confirming the specific
              sailing dates and route with your consultant when booking.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-96 overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.routes}
              alt={PHOTO.routesAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── PORTS OF CALL ─────────────────────────────────────────────────
          What the route table lists, seen from the deck and ashore. */}
      <section className="pb-12 lg:pb-16 bg-teal-light/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: PHOTO.anchor, alt: PHOTO.anchorAlt },
              { src: PHOTO.port, alt: PHOTO.portAlt },
            ].map((img) => (
              <motion.div
                key={img.src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
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
        </div>
      </section>

      {/* ── CABIN CATEGORIES ──────────────────────────────────────────────
          Alternatives, not steps — so a card row rather than a numbered list. */}
      <Section label="Cabins" heading="Cabin Category Options" className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cabins.map((row) => (
            <div
              key={row.cabin}
              className="flex h-full flex-col border-t-2 border-primary pt-5"
            >
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.cabin}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                {row.description}
              </p>
              <p className="mt-auto text-gray-400 text-xs uppercase tracking-[0.14em] font-semibold mb-1">
                Best for
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{row.bestFor}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PLATE AFTER THE CABINS ────────────────────────────────────────
          What separates the categories is the view, so the section ends on one. */}
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
              src={PHOTO.cabin}
              alt={PHOTO.cabinAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHAT'S IN THE FARE ────────────────────────────────────────────── */}
      <Section
        label="The Fare"
        heading="What's Typically Included in a Star Cruise Fare"
        className="bg-teal-light/40"
      >
        <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl mb-8">
          <Image
            src={PHOTO.buffet}
            alt={PHOTO.buffetAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="font-primary font-bold text-teal-navy text-sm uppercase tracking-widest mb-5">
              Included in the fare
            </p>
            <ul className="space-y-4">
              {included.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-primary font-bold text-gray-400 text-sm uppercase tracking-widest mb-5">
              Typically not included, and worth budgeting separately for
            </p>
            <ul className="space-y-4">
              {notIncluded.map((item) => (
                <Bullet key={item} tone="muted">
                  {item}
                </Bullet>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── ONBOARD EXPERIENCE ────────────────────────────────────────────── */}
      <Section
        label="Onboard"
        heading="Onboard Experience: What to Expect"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <p className="lg:col-span-7 text-gray-600 leading-relaxed">
            The Star Cruises&rsquo; ships, on the other hand, are designed to be very
            entertaining and family oriented, providing a lot of things to do on the ship,
            depending on what kind of traveller you are from shows, pools, diverse dining
            options to kid&rsquo;s clubs on bigger ships for family cruises. The large number
            of options makes cruising a good choice for those who would rather not plan
            excursions daily.
          </p>
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.onboard}
              alt={PHOTO.onboardAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── CRUISE LENGTH ─────────────────────────────────────────────────── */}
      <Section
        label="How Long"
        heading="Choosing the Right Cruise Length"
        className="bg-teal-light/40"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {lengths.map((row) => (
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
      </Section>

      {/* ── FAMILIES ──────────────────────────────────────────────────────── */}
      <Section label="Families" heading="Is a Cruise Good for Families?" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 relative h-56 lg:h-72 overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src={PHOTO.family}
              alt={PHOTO.familyAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="lg:col-span-7 text-gray-600 leading-relaxed order-1 lg:order-2">
            Yes, in general. There is a unique benefit provided by cruises when it comes to
            families because the kids will be provided with fun activities on board and the
            parents get to decide how much they participate &ndash; whether in family
            activities or on their own. Being a closed environment, the cruise makes the
            planning less complicated than traveling to different places in one trip.
          </p>
        </div>
      </Section>

      {/* ── WHEN TO BOOK ──────────────────────────────────────────────────── */}
      <Section
        label="When to Book"
        heading="Best Time to Book a Star Cruise"
        className="bg-teal-light/40"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Cruise pricing, like flights and hotels, tends to be more favourable when booked
          further in advance, particularly for peak periods such as school holidays and
          festive seasons. Cabin category availability, especially for balcony cabins and
          suites, also tends to sell out faster than interior cabins during popular sailing
          dates.
        </p>
      </Section>

      {/* ── FIRST-TIMER TIPS + DRESS CODES ────────────────────────────────── */}
      <Section
        label="First Time"
        heading="Cruising Etiquette and Practical Tips for First-Timers"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <p className="text-gray-600 leading-relaxed">
            For tourists who have not cruised before, there are a number of tips that will
            make their voyage much easier. One is to arrive early enough at the port before
            the boarding ends. Another tip is to get acquainted with the layout of the ship
            and its activity programs early on. It would be helpful to read through the daily
            program of the ship (which is provided in each room at night) to make arrangements
            for shows and activities.
          </p>
          <div className="border-l-2 border-primary pl-8">
            <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
              Dress Codes and Onboard Dining Expectations
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Most cruise lines, including Star Cruises, maintain relatively relaxed dress
              codes for casual dining venues, though some specialty restaurants or formal
              evenings may have smart-casual expectations. It&rsquo;s worth packing at least
              one slightly dressier outfit even for a shorter cruise, in case a formal dinner
              night or special onboard event is part of your specific sailing&rsquo;s
              schedule.
            </p>
          </div>
        </div>
      </Section>

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
              Book Your Star Cruise Getaway
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
              From short regional sailings to extended cruise holidays, a consultant can help
              you choose the right itinerary and cabin. Request a free, personalised quote
              today.
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
