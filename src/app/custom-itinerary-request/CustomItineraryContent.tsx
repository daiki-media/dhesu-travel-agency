"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import {
  InquiryForm,
} from "@/src/components/tours/TourPackageDetailTemplate";
import { company } from "@/src/data/company";
import FaqSection from "@/src/components/FaqSection";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Repeated per file on purpose — the codebase keeps this local rather than
// sharing one variant object across pages.
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: easeOut },
  }),
};

const yearsTrading = new Date().getFullYear() - company.foundedYear;

// Photography for this page only. Four frames, each used once.
const PHOTO = {
  band: {
    src: "/images/custom-itinerary/clifftop-private-dinner.jpg",
    alt: "A private candlelit dinner table set on a clifftop at dusk",
  },
  suits: {
    src: "/images/custom-itinerary/himalayan-monastery.jpg",
    alt: "A monastery built into a bare Himalayan mountainside",
  },
  strength: {
    src: "/images/custom-itinerary/cham-towers-aerial.jpg",
    alt: "Brick Cham towers on a rise above a coastal city, seen from the air",
  },
  brief: {
    src: "/images/custom-itinerary/jeju-waterfall.jpg",
    alt: "A waterfall dropping into a pool below a wall of basalt columns",
  },
};

// Credentials shown as a compact strip beside the form, so the reassurance sits
// next to the thing we are asking people to fill in.
const trustPoints = [
  { value: `${yearsTrading}+`, label: `Years planning trips, since ${company.foundedYear}` },
  { value: "IATA", label: "Accredited for airline ticketing" },
  { value: company.licenseNo, label: "Licensed by the Ministry of Tourism, Malaysia" },
  { value: "2", label: "Travellers is enough to build a private trip" },
];

// Who a custom itinerary suits. Every specialism named here is one Dhesu
// already states on /about-us/ and /why-book-with-a-travel-agent-2026/.
const suits = [
  {
    title: "Families and small private groups",
    body: "Our packages are designed for individuals and families rather than large coach-tour formats, and a private departure can start from as few as two travellers. Pace, hotel standard and how much of the day is actually programmed are all yours to set.",
  },
  {
    title: "Multi-country and multi-city routes",
    body: "Itineraries that cross borders need transport, transfers and timings coordinated as one plan rather than booked as separate pieces. This is the kind of trip where sequencing the stops correctly decides whether the holiday feels relaxed or rushed.",
  },
  {
    title: "Pilgrimage and spiritual travel",
    body: "A long-standing strength of ours, including specialised journeys through India's most sacred sites. Getting access and sequencing right on these routes depends on genuine local knowledge rather than a published schedule.",
  },
  {
    title: "Special-interest and occasion trips",
    body: "Golf itineraries, eco-tourism and adventure travel across Borneo, cruise holidays, honeymoons and milestone celebrations — trips built around one particular reason for going rather than a general sightseeing loop.",
  },
  {
    title: "Corporate, incentive and MICE groups",
    body: "We are long-term travel partners to corporate clients, and we plan meetings, incentives, conventions and events as customised programmes rather than off-the-shelf group departures.",
  },
];

// What Dhesu brings — restated from About / Why Book, not embellished.
const strengths = [
  {
    heading: "Three decades of planning, not a search algorithm",
    body: `${company.legalName} has been arranging holidays since ${company.foundedYear}. That length of trading is a signal rather than a slogan: it means routes, hotels and operators have been used repeatedly and judged on how they actually performed.`,
  },
  {
    heading: "Destination breadth with real depth",
    body: "Coverage spans ASEAN, North Asia, South Asia and the Himalayas, Australia, Europe, the Middle East and Africa — built on genuine supplier relationships rather than reselling third-party packages generically.",
  },
  {
    heading: "Rates that come from relationships",
    body: "Established agencies hold negotiated arrangements with hotels, ground transport companies and local operators. Those terms are frequently not available to someone booking each component individually online.",
  },
  {
    heading: "Everything arranged under one roof",
    body: "Flight ticketing, hotels, coach rental and drivers, visa applications, foreign exchange and travel insurance can all sit inside the same itinerary, handled by the same team.",
  },
];

// A process, deliberately with no timings attached to it.
const steps = [
  {
    title: "You send the brief",
    body: "Use the form, WhatsApp or the phone — whichever suits you. Nothing is committed at this stage; it goes to us as an enquiry, not a booking.",
  },
  {
    title: "A consultant picks it up",
    body: "One of our travel consultants reads the request and comes back to you with any questions needed before a route can be costed properly.",
  },
  {
    title: "We draft the itinerary",
    body: "You receive a proposed route with the flights, hotels, transfers and inclusions written out, so you can see exactly what is and is not in the price.",
  },
  {
    title: "You revise it until it fits",
    body: "Swap a hotel tier, add or drop a city, shift the dates, change the pace. The draft is a starting point, not a take-it-or-leave-it package.",
  },
  {
    title: "We confirm and book",
    body: "Once you are happy, we issue tickets, confirm the ground arrangements and handle the supporting travel services such as visas and insurance.",
  },
  {
    title: "You have someone to call",
    body: "Through the trip there is a real, licensed agency that holds your full itinerary — which matters most on the day something does not go to plan.",
  },
];

// Pairs with the same idea on /contact-us/ — the more of this we have up front,
// the more useful the first reply can be.
const briefChecklist = [
  "Where you want to go, or the region you are choosing between",
  "Rough travel dates, or the month and how flexible it is",
  "How many adults, and how many children with and without a bed",
  "Roughly how many nights you have available",
  "Hotel standard you have in mind, and whether you want it consistent throughout",
  "Departure airport, and whether flights should be included",
  "Anything the trip is being built around — a temple visit, a wedding, a golf course, a diving season",
  "Dietary, mobility, prayer or accessibility needs we should plan around",
  "Anywhere you have already been and would rather not repeat",
];

export default function CustomItineraryContent({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <SectionLabel text="Custom Planning" />
              <h1 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-5">
                Request a custom
                <span className="block text-primary">itinerary</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-6">
                A custom holiday package is a trip built around your dates, your group
                and your reasons for travelling — rather than a fixed departure you
                have to fit yourself into. Tell us roughly what you have in mind and
                a consultant will come back with a costed route you can change as
                often as you need.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
                A request is an enquiry, not a booking — nothing is confirmed until you
                say so. If you would rather talk it through than type it out, the
                WhatsApp and phone numbers below reach the same team.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-7 mt-10 pt-8 border-t border-gray-200">
                {trustPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                  >
                    <p className="font-primary font-bold text-teal-navy text-2xl leading-none">
                      {point.value}
                    </p>
                    <p className="text-gray-500 text-[13px] leading-snug mt-2">
                      {point.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The form rail. Sticky from large screens up so it stays reachable
                while the article beside it is read. */}
            <motion.div
              id="request"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-5 scroll-mt-28"
            >
              <div className="lg:sticky lg:top-28">
                <InquiryForm
                  packageName="Custom Itinerary Request"
                  whatsapp={company.whatsapp[0].number}
                />

                {/* Equal alternatives to the form, not a fallback under it —
                    the routing question is still open with the client. */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {company.whatsapp.map((w) => (
                    <a
                      key={w.number}
                      href={`https://wa.me/${w.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-4 py-3 hover:border-primary transition-colors"
                    >
                      <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <MessageCircle size={16} className="text-white" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-primary font-semibold text-[#1a1a1a] text-sm">
                          WhatsApp us
                        </span>
                        <span className="block text-gray-500 text-sm">{w.display}</span>
                      </span>
                    </a>
                  ))}
                  <a
                    href={`tel:${company.phones[0].tel}`}
                    className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 px-4 py-3 hover:border-primary transition-colors"
                  >
                    <span className="w-9 h-9 rounded-lg bg-teal-navy flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-white" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-primary font-semibold text-[#1a1a1a] text-sm">
                        Call the office
                      </span>
                      <span className="block text-gray-500 text-sm">
                        {company.phones[0].display}
                      </span>
                    </span>
                  </a>
                </div>

                <p className="text-gray-500 text-[13px] leading-relaxed mt-4">
                  Office hours: {company.hours[0].days}, {company.hours[0].time} ·{" "}
                  {company.hours[1].days}, {company.hours[1].time}. Closed Sundays and
                  public holidays.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHOTO BAND ────────────────────────────────────────────────────────
          A single wide frame separating the request rail from the article. */}
      <section className="pb-10 lg:pb-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={PHOTO.band.src}
              alt={PHOTO.band.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHO IT SUITS ──────────────────────────────────────────────────────
          A numbered ledger rather than a card grid, so it does not read like
          the service tiles on About. */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-28">
                <SectionLabel text="Who It Suits" />
                <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-5">
                  When a fixed departure will not do
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                  Plenty of holidays work perfectly well as a standard package. A custom
                  itinerary earns its keep when the group, the route or the reason for
                  going does not fit one.
                </p>
                <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={PHOTO.suits.src}
                    alt={PHOTO.suits.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-8">
              {suits.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="grid grid-cols-[auto_1fr] gap-5 md:gap-8 border-t border-gray-200 py-6 first:border-t-0 first:pt-0"
                >
                  <span
                    className="font-primary font-bold text-primary/30 text-3xl md:text-4xl leading-none tabular-nums"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-primary font-bold text-teal-navy text-lg md:text-xl leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT DHESU BRINGS ─────────────────────────────────────────────────
          A dark band mid-page: the one heavyweight block on an otherwise light
          conversion page. */}
      <section className="py-10 lg:py-12 bg-teal-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
              <h2 className="font-primary font-bold text-white text-3xl md:text-4xl leading-tight mb-5">
                What we bring to a custom plan
              </h2>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                Anyone can assemble a list of things to do in a destination. What is
                harder to assemble is the judgement about how those things fit together —
                and the supplier relationships that let the plan hold once you are
                actually there.
              </p>
              <div className="relative h-52 md:h-64 rounded-2xl overflow-hidden">
                <Image
                  src={PHOTO.strength.src}
                  alt={PHOTO.strength.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {strengths.map((item, i) => (
                <motion.div
                  key={item.heading}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="border-t border-white/20 pt-5"
                >
                  <h3 className="font-primary font-bold text-white text-lg leading-snug mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">{item.body}</p>
                </motion.div>
              ))}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="sm:col-span-2 border-t border-white/20 pt-5"
              >
                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-3">
                  {company.accreditations.map((item) => (
                    <span
                      key={item.abbr}
                      className="font-primary font-bold text-primary text-lg"
                    >
                      {item.abbr}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {company.legalName} ({company.companyNo}) is a registered Malaysian
                  travel agency licensed for inbound tours, outbound tours and airline
                  ticketing — so there is a licensed entity accountable for your booking,
                  not an informal reseller.{" "}
                  <Link
                    href="/about-us"
                    className="text-white underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    More about us
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ─────────────────────────────────────────────────
          A process, described in order. Nothing here promises a clock time. */}
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10"
          >
            <div className="lg:col-span-7">
              <SectionLabel text="After You Send It" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight">
                What happens to your request
              </h2>
            </div>
            <p className="lg:col-span-5 text-gray-600 text-[15px] leading-relaxed">
              Every enquiry goes to a person rather than an automated quote engine, and
              the itinerary is drafted around what you actually asked for. The steps
              below are the shape of it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="border-t-2 border-gray-200 pt-5"
              >
                <p className="font-primary font-bold text-primary text-sm tracking-widest uppercase mb-2">
                  Step {i + 1}
                </p>
                <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO INCLUDE ───────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <SectionLabel text="Writing The Brief" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-4">
                What to tell us, so the first reply is useful
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                A short request is still welcome — we will simply ask the rest. But the
                more of the list below you can answer up front, the closer the first
                draft will be to something you would actually book. Anything you are
                unsure of, say so and leave it open.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {briefChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span className="text-gray-600 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-500 text-[15px] leading-relaxed mt-8">
                Not sure where to start? Browse the{" "}
                <Link
                  href="/tours"
                  className="text-primary font-semibold underline underline-offset-4"
                >
                  destinations we cover
                </Link>{" "}
                and send us a package you like as a starting point — we will rework it
                around your group instead of quoting it as it stands.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="relative h-64 md:h-80 lg:h-[26rem] rounded-2xl overflow-hidden">
                <Image
                  src={PHOTO.brief.src}
                  alt={PHOTO.brief.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <p className="text-gray-400 text-[13px] leading-relaxed mt-3">
                Requests we receive range from a single line to a full month-by-month
                plan. Both are workable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FaqSection
        faqs={faqs}
        label="Before You Ask"
        heading="Custom itinerary questions"
      />

      {/* ── CLOSING CONTACT PANEL ─────────────────────────────────────────────
          A solid panel rather than a photo-backed CTA, so the page does not
          finish the way About and Why Book do. */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-teal-navy rounded-2xl px-6 py-10 sm:px-10 lg:px-14 lg:py-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
                <h2 className="font-primary font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
                  Start your request
                </h2>
                <p className="text-white/70 text-[15px] leading-relaxed mb-6">
                  Send the form, message us on WhatsApp, or call the office — all three
                  reach the same consultants, and you are welcome to walk in and plan it
                  across a desk instead.
                </p>
                <a
                  href="#request"
                  className="btn-base btn-light px-8 py-3.5 text-base font-primary inline-flex"
                >
                  <span className="btn-content">Go to the request form</span>
                </a>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle size={16} className="text-primary" />
                    <p className="font-primary font-semibold text-white text-sm uppercase tracking-widest">
                      WhatsApp
                    </p>
                  </div>
                  {company.whatsapp.map((w) => (
                    <a
                      key={w.number}
                      href={`https://wa.me/${w.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/75 text-[15px] hover:text-primary transition-colors"
                    >
                      {w.display}
                    </a>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={16} className="text-primary" />
                    <p className="font-primary font-semibold text-white text-sm uppercase tracking-widest">
                      Call
                    </p>
                  </div>
                  {company.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-white/75 text-[15px] hover:text-primary transition-colors"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mail size={16} className="text-primary" />
                    <p className="font-primary font-semibold text-white text-sm uppercase tracking-widest">
                      Email
                    </p>
                  </div>
                  {company.emails.map((em) => (
                    <a
                      key={em.address}
                      href={`mailto:${em.address}`}
                      className="block text-white/75 text-[15px] break-words hover:text-primary transition-colors"
                    >
                      {em.address}
                    </a>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-primary" />
                    <p className="font-primary font-semibold text-white text-sm uppercase tracking-widest">
                      Visit
                    </p>
                  </div>
                  <p className="text-white/75 text-[15px] leading-relaxed">
                    {company.address.line1},<br />
                    {company.address.line2},<br />
                    {company.address.postcode} {company.address.city}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
