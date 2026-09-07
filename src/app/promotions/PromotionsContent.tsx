"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import FaqSection from "@/src/components/FaqSection";
import { company } from "@/src/data/company";

// The Holiday Idea sheet marks this row "Need more info": the client has not
// supplied a single offer, price or expiry date. So nothing on this page states
// one. It is written as the durable hub the sheet asks for — what a package
// contains, which windows actually move prices, where the live guides are, and
// how to get a quote — so the client can drop real offers into it later without
// anything already published becoming untrue.

// Photography for this page only, so it does not collide with the imagery the
// other Holiday Idea pages still need. Each frame is used exactly once.
const PHOTO = {
  hero: {
    src: "/images/promotions/bukchon-hanok-lane.jpg",
    alt: "A lane of traditional tiled-roof hanok houses in Bukchon, Seoul",
  },
  pair: [
    {
      src: "/images/promotions/ba-na-hills-village.jpg",
      alt: "The French-style village at Ba Na Hills above the forested mountains near Da Nang, Vietnam",
      place: "Ba Na Hills, Da Nang",
      country: "Vietnam",
      href: "/tours/vietnam/vietnam-tour-travel-guide-2026",
      cta: "Vietnam travel guide",
    },
    {
      src: "/images/promotions/mykonos-waterfront.jpg",
      alt: "Whitewashed houses along the waterfront on Mykonos, Greece",
      place: "Mykonos",
      country: "Greece",
      href: "/tours/europe/europe-tour-travel-guide-2026",
      cta: "Europe travel guide",
    },
  ],
  trio: [
    {
      src: "/images/promotions/po-nagar-towers.jpg",
      alt: "The brick Po Nagar Cham towers standing among palms at Nha Trang, Vietnam",
      place: "Po Nagar Towers, Nha Trang",
      country: "Vietnam",
      href: "/tours/vietnam/nha-trang",
      cta: "Nha Trang packages",
    },
    {
      src: "/images/promotions/sanctuary-of-truth.jpg",
      alt: "The carved all-timber Sanctuary of Truth rising against the sky at Pattaya, Thailand",
      place: "Sanctuary of Truth, Pattaya",
      country: "Thailand",
      href: "/tours/thailand",
      cta: "Thailand packages",
    },
    {
      src: "/images/promotions/medan-city-night.jpg",
      alt: "The Medan city skyline lit up after dark, North Sumatra, Indonesia",
      place: "Medan, North Sumatra",
      country: "Indonesia",
      href: "/tours/indonesia/medan-lake-toba",
      cta: "Medan & Lake Toba packages",
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// What a Dhesu package is built from. Described as scope, never as a price.
const INCLUSIONS = [
  {
    item: "Air ticketing",
    note: "Booked through our IATA accreditation, with routing chosen for sensible connection times rather than the cheapest possible layover.",
  },
  {
    item: "Accommodation",
    note: "Rooms held on agency rates, at properties positioned for the itinerary you are actually doing.",
  },
  {
    item: "Airport transfers and ground transport",
    note: "Arrival, departure and inter-city movement arranged as one chain, so nothing is left to work out on the day.",
  },
  {
    item: "Guided sightseeing and entrance fees",
    note: "The sights named in the itinerary, with the tickets and the local guide already accounted for.",
  },
  {
    item: "Meals as specified",
    note: "Set out line by line in the itinerary, so you know what is covered before you travel.",
  },
  {
    item: "Documentation support",
    note: "Visa paperwork, travel-insurance options and the pre-departure detail that is easy to leave too late.",
  },
  {
    item: "A consultant you can reach",
    note: "One person who knows your booking, before you go and while you are away.",
  },
];

// The other side of the same decision. Honest about what self-booking costs
// you, without claiming a number.
const SEPARATE_COSTS = [
  "Every component priced at the public rate, because contracted agency rates are not offered to individual buyers",
  "Hours of cross-checking flight times, hotel locations and transfer distances that nobody is paid to check for you",
  "Several unrelated booking references, each with its own cancellation policy and its own support queue",
  "Airfares and exchange rates moving between the day you book the flights and the day you book the rest",
  "No single person to call when a connection is missed or a property is not what the listing described",
];

// The three seasonal pages that already exist. These are the windows that
// genuinely move Malaysian holiday pricing.
const WINDOWS = [
  {
    n: "01",
    name: "School holidays",
    href: "/school-holiday-travel-deals-2026",
    driver:
      "Four fixed breaks that every family in the country books into at once. Demand is concentrated into a few weeks, so the value is in booking a long way ahead of the crowd rather than waiting for a markdown.",
    cta: "School holiday deals 2026",
  },
  {
    n: "02",
    name: "Year-end and festive travel",
    href: "/year-end-holiday-travel-deals-2026",
    driver:
      "The longest break of the year, and the one where airfares climb steadily the closer you get to departure. Early commitment is the lever here, not last-minute hunting.",
    cta: "Year-end deals 2026",
  },
  {
    n: "03",
    name: "Raya",
    href: "/raya-holiday-travel-deals-2026",
    driver:
      "Balik kampung traffic reshapes flight availability across the region for a fortnight. Travelling just before or just after the peak days changes what is on the table.",
    cta: "Raya deals 2026",
  },
];

// Trip-type pages that already exist, each with its own pricing logic.
const TRIP_TYPES = [
  {
    name: "Groups and incentives",
    href: "/group-incentive-travel-packages",
    body: "Company trips, association tours and extended-family travel are quoted per group, so the numbers move with headcount, room configuration and how much of the programme you want us to run.",
    cta: "Group & incentive travel",
  },
  {
    name: "Muslim-friendly holidays",
    href: "/muslim-friendly-holiday-travel-guide",
    body: "Halal dining, prayer facilities and Ramadan-aware scheduling are itinerary decisions, not add-ons. Told to us up front, they shape which properties and which routings we quote at all.",
    cta: "Muslim-friendly travel guide",
  },
  {
    name: "Cruise holidays",
    href: "/star-cruise-holiday-guide-2026",
    body: "Cruise fares are set by the cruise line and change by cabin grade and sailing date. What we arrange around them is the flight, the transfer and the pre- or post-cruise stay.",
    cta: "Star Cruise guide 2026",
  },
];

// Every entry is a guide page that exists in this repo today.
const GUIDES = [
  { country: "Indonesia", name: "Bali Travel Guide 2026", href: "/tours/indonesia/bali-holiday-travel-guide-2026" },
  { country: "Vietnam", name: "Vietnam Travel Guide 2026", href: "/tours/vietnam/vietnam-tour-travel-guide-2026" },
  { country: "Thailand", name: "Phuket & Krabi Guide 2026", href: "/tours/thailand/phuket-krabi-holiday-guide-2026" },
  { country: "Dubai", name: "Dubai Travel Guide 2026", href: "/tours/dubai/dubai-holiday-travel-guide-2026" },
  { country: "Europe", name: "Europe Travel Guide 2026", href: "/tours/europe/europe-tour-travel-guide-2026" },
  { country: "Australia", name: "Australia Travel Guide 2026", href: "/tours/australia/australia-holiday-travel-guide-2026" },
  { country: "India", name: "India Travel Guide 2026", href: "/tours/india/india-tour-travel-guide-2026" },
  { country: "Sri Lanka", name: "Sri Lanka Travel Guide 2026", href: "/tours/sri-lanka/sri-lanka-tour-travel-guide-2026" },
  { country: "China", name: "China Travel Guide 2026", href: "/tours/china/china-tour-travel-guide-2026" },
];

// What we can say about pricing without inventing an offer.
const PRICING_RULES = [
  {
    rule: "Quoted for your dates, not published as a list",
    body: "A package price is assembled from the airfare on your departure date, the room type you want and the size of your party. A figure printed here would be out of date before you read it, so we quote in writing instead.",
  },
  {
    rule: "The quote states what is in and what is out",
    body: "Inclusions, exclusions and the cancellation terms are written down before any payment is taken. If something you assumed was covered is not, you will see it on the quote rather than at the airport.",
  },
  {
    rule: "We say so when a package is not the better buy",
    body: "For a short trip to somewhere you already know, self-booking can be perfectly sensible. The bundled rate earns its keep on multi-city routings, peak-season departures and unfamiliar destinations.",
  },
  {
    rule: "Anything on this site can be adjusted",
    body: "Extra nights, a different hotel grade, an added city, a private car instead of a coach — the published itineraries are starting points, and changes are repriced before you commit.",
  },
];

/** Local section shell: the whole page keeps one rhythm. */
function Section({
  id,
  label,
  heading,
  intro,
  className = "bg-white",
  children,
}: {
  id?: string;
  label: string;
  heading: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-10 lg:py-12 scroll-mt-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-8 lg:mb-10"
        >
          <SectionLabel text={label} />
          <h2 className="font-primary font-bold text-[#1a1a1a] text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.01em] max-w-3xl">
            {heading}
          </h2>
          {intro ? (
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mt-5 max-w-3xl">
              {intro}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/** A captioned frame that names the place honestly and links where it leads. */
function Postcard({
  src,
  alt,
  place,
  country,
  href,
  cta,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  place: string;
  country: string;
  href: string;
  cta: string;
  className?: string;
  sizes: string;
}) {
  return (
    <Link href={href} className={`group block ${className}`}>
      <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={sizes}
        />
      </div>
      <div className="flex items-baseline justify-between gap-4 border-t border-gray-200 pt-4 mt-4">
        <div>
          <p className="font-primary font-bold text-teal-navy text-base leading-snug">
            {place}
          </p>
          <p className="text-gray-500 text-xs uppercase tracking-[0.16em] font-semibold mt-1">
            {country}
          </p>
        </div>
        <span className="text-primary text-sm font-semibold whitespace-nowrap group-hover:underline">
          {cta}
        </span>
      </div>
    </Link>
  );
}

export default function PromotionsContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────
          Deliberately light and split, rather than the dark full-bleed plate
          the seasonal and About pages open on: this is an index, so the
          jump-links matter more than a headline photograph. */}
      <section className="bg-pattern border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <SectionLabel text="Deals & Promotions" />
              <h1 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-5xl leading-[1.08] tracking-[-0.02em]">
                Current Promotions on{" "}
                <span className="text-primary">Dhesu Travel Packages</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
                This is the page we keep pointed at whatever is moving right now — the
                seasonal windows where Malaysian holiday pricing actually shifts, the trip
                types quoted on their own terms, and the destination guides our consultants
                work from. Package rates are quoted live for your dates, so ask us for
                today&rsquo;s number rather than reading one off a poster.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`https://wa.me/${company.whatsapp[0].number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="light" showArrow size="lg">
                    Ask for Today&rsquo;s Price
                  </Button>
                </a>
                <Link href="/tours">
                  <Button variant="transparent" showArrow size="lg">
                    Browse All Packages
                  </Button>
                </Link>
              </div>

              {/* Jump rail: the page announces its own contents. */}
              <nav
                aria-label="On this page"
                className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 mt-10 border-y border-gray-200"
              >
                {[
                  { href: "#seasonal", label: "Seasonal windows", note: "Three booking peaks" },
                  { href: "#trip-types", label: "By trip type", note: "Groups, halal, cruise" },
                  { href: "#guides", label: "Destination guides", note: "Nine live guides" },
                ].map((jump) => (
                  <a
                    key={jump.href}
                    href={jump.href}
                    className="bg-white/70 px-5 py-4 hover:bg-white transition-colors"
                  >
                    <span className="block font-primary font-semibold text-teal-navy text-[15px]">
                      {jump.label}
                    </span>
                    <span className="block text-gray-500 text-xs mt-1">{jump.note}</span>
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-[26rem] overflow-hidden rounded-2xl">
                <Image
                  src={PHOTO.hero.src}
                  alt={PHOTO.hero.alt}
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mt-3">
                Bukchon Hanok Village, Seoul — one of the neighbourhoods our consultants
                build free time around.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT A PACKAGE IS ─────────────────────────────────────────────
          A ledger, not a card grid: the scope on the left, the load you carry
          without it on the right. */}
      <Section
        label="Start Here"
        heading="What a Dhesu Package Actually Contains"
        intro="Before any discussion of price, it helps to know what is being priced. A package is a single booking that carries the whole trip, which is why a bundled quote and a pile of separate receipts are rarely comparable line for line."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-gray-400 pb-4 border-b border-gray-200">
              Bundled into one booking
            </p>
            <dl>
              {INCLUSIONS.map((row) => (
                <div
                  key={row.item}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 py-5 border-b border-gray-200"
                >
                  <dt className="sm:col-span-5 font-primary font-bold text-teal-navy text-[15px] leading-snug">
                    {row.item}
                  </dt>
                  <dd className="sm:col-span-7 text-gray-600 text-[15px] leading-relaxed">
                    {row.note}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-5"
          >
            <div className="bg-teal-light/60 rounded-2xl p-6 lg:p-8 lg:sticky lg:top-28">
              <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
              <h3 className="font-primary font-bold text-teal-navy text-xl leading-snug mb-4">
                Booked separately, you also take on
              </h3>
              <ul className="space-y-4">
                {SEPARATE_COSTS.map((cost) => (
                  <li key={cost} className="flex gap-3">
                    <span
                      className="mt-[0.6rem] h-px w-4 shrink-0 bg-primary"
                      aria-hidden
                    />
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {cost}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-teal-navy/70 text-sm leading-relaxed mt-6 pt-6 border-t border-teal-navy/15">
                None of this makes self-booking wrong. It is simply the work a package
                absorbs on your behalf, and the reason a bundled figure usually reads lower
                than the same trip assembled piece by piece.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── PHOTO PAIR ────────────────────────────────────────────────────
          A short breath between the ledger and the calendar. */}
      <section className="pb-10 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PHOTO.pair.map((shot) => (
              <Postcard
                key={shot.src}
                {...shot}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SEASONAL WINDOWS ──────────────────────────────────────────────
          Numbered rows rather than cards, so the three read as a calendar. */}
      <Section
        id="seasonal"
        label="The Calendar"
        heading="The Booking Windows That Move Malaysian Holiday Prices"
        intro="Deals in this market are driven far more by when you commit than by any banner. These three windows account for most of the movement, and each has its own page with the dates, the pricing behaviour and the destinations that suit it."
        className="bg-teal-light/40"
      >
        <ol className="space-y-px bg-gray-200/70 border-y border-gray-200/70">
          {WINDOWS.map((win) => (
            <motion.li
              key={win.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="bg-teal-light/40"
            >
              <Link
                href={win.href}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-start px-0 lg:px-6 py-7"
              >
                <span className="lg:col-span-1 font-primary font-bold text-primary text-2xl leading-none">
                  {win.n}
                </span>
                <h3 className="lg:col-span-3 font-primary font-bold text-teal-navy text-xl leading-snug group-hover:text-primary transition-colors">
                  {win.name}
                </h3>
                <p className="lg:col-span-6 text-gray-600 text-[15px] leading-relaxed">
                  {win.driver}
                </p>
                <span className="lg:col-span-2 text-primary text-sm font-semibold group-hover:underline lg:text-right">
                  {win.cta}
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </Section>

      {/* ── BY TRIP TYPE ──────────────────────────────────────────────────── */}
      <Section
        id="trip-types"
        label="By Trip Type"
        heading="Different Trips, Different Pricing Logic"
        intro="A group of forty, a family travelling halal and a couple joining a sailing are not quoted the same way at all. Each of these pages explains how its own numbers are put together and what we need from you to price it."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {TRIP_TYPES.map((type) => (
            <motion.div
              key={type.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="border-t-2 border-primary pt-5"
            >
              <h3 className="font-primary font-bold text-teal-navy text-xl leading-snug mb-3">
                {type.name}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">{type.body}</p>
              <Link
                href={type.href}
                className="text-primary text-sm font-semibold hover:underline"
              >
                {type.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── PHOTO TRIO ────────────────────────────────────────────────────── */}
      <section className="pb-10 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {PHOTO.trio.map((shot) => (
              <Postcard
                key={shot.src}
                {...shot}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── DESTINATION GUIDES ────────────────────────────────────────────
          A plain index. Nine live guides, two columns, nothing decorative. */}
      <Section
        id="guides"
        label="Where To Look"
        heading="Destination Guides Our Consultants Quote From"
        intro="Each guide sets out the season, the realistic trip length and the itinerary shape for one destination. They are the fastest way to work out what you want before asking us what it costs."
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {GUIDES.map((guide) => (
            <motion.div
              key={guide.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <Link
                href={guide.href}
                className="group flex items-baseline justify-between gap-4 py-4 border-b border-teal-navy/15"
              >
                <span>
                  <span className="block text-gray-500 text-xs uppercase tracking-[0.16em] font-semibold">
                    {guide.country}
                  </span>
                  <span className="block font-primary font-bold text-teal-navy text-[17px] leading-snug mt-1 group-hover:text-primary transition-colors">
                    {guide.name}
                  </span>
                </span>
                <span className="text-primary text-lg shrink-0" aria-hidden>
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-gray-600 text-[15px] leading-relaxed mt-8 max-w-3xl"
        >
          Not listed here? The full set of destinations, regions and itineraries sits on{" "}
          <Link href="/tours" className="text-primary font-semibold hover:underline">
            our tours index
          </Link>
          , and anything there can be quoted for your own dates.
        </motion.p>
      </Section>

      {/* ── HOW PRICING WORKS ─────────────────────────────────────────────
          The honest part. Four evergreen rules, no offer of any kind. */}
      <Section
        label="No Small Print"
        heading="How Our Pricing Works"
        intro="We do not publish a table of struck-through numbers, and there is a reason for that."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-9">
          {PRICING_RULES.map((row, i) => (
            <motion.div
              key={row.rule}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={i % 2 === 1 ? "md:mt-8" : undefined}
            >
              <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
                {row.rule}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <FaqSection
        faqs={faqs}
        label="Before You Ask"
        heading="Promotions, Quotes and Payment"
      />

      {/* ── GET A PRICE ───────────────────────────────────────────────────
          The only dark plate on the page, and the page's actual purpose:
          every contact route, straight from the company record. */}
      <section className="bg-teal-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14"
          >
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-primary" />
                <span className="text-white/80 font-semibold text-sm uppercase tracking-widest font-primary">
                  Get a Price
                </span>
              </div>
              <h2 className="font-primary font-bold text-white text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.01em] mb-5">
                Tell Us the Trip, We&rsquo;ll Quote It Today
              </h2>
              <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                Send us the destination, your travel dates or the month you have in mind, how
                many are travelling and the ages of any children. That is enough for a
                consultant to come back with a written quote and the current availability.
              </p>
              <Link href="/contact">
                <Button variant="light" showArrow size="lg">
                  Send an Enquiry
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    WhatsApp
                  </p>
                  <ul className="space-y-2">
                    {company.whatsapp.map((wa) => (
                      <li key={wa.number}>
                        <a
                          href={`https://wa.me/${wa.number}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-[15px] hover:text-primary transition-colors"
                        >
                          {wa.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Call the office
                  </p>
                  <ul className="space-y-2">
                    {company.phones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="text-white text-[15px] hover:text-primary transition-colors"
                        >
                          {phone.display}
                        </a>
                        <span className="text-white/40 text-xs ml-2">{phone.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Email
                  </p>
                  <ul className="space-y-2">
                    {company.emails.map((email) => (
                      <li key={email.address}>
                        <a
                          href={`mailto:${email.address}`}
                          className="text-white text-[15px] hover:text-primary transition-colors break-words"
                        >
                          {email.address}
                        </a>
                        <span className="block text-white/40 text-xs">{email.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Office hours
                  </p>
                  <ul className="space-y-2">
                    {company.hours.map((slot) => (
                      <li key={slot.days} className="text-[15px]">
                        <span className="text-white">{slot.days}</span>
                        <span
                          className={`block text-xs ${
                            slot.closed ? "text-white/40" : "text-white/70"
                          }`}
                        >
                          {slot.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mt-8 pt-6 border-t border-white/15">
                {company.address.full} · Licensed {company.licenseNo} · Serving Malaysian
                travellers since {company.foundedYear}.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
