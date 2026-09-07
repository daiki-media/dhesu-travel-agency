"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Map,
  Bus,
  FileCheck,
  Building2,
  Users,
  Mountain,
  Ship,
} from "lucide-react";
import Button from "@/src/components/Button";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { company } from "@/src/data/company";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

const yearsTrading = new Date().getFullYear() - company.foundedYear;

// Photography for this page only, so it does not collide with the imagery the
// other Holiday Idea pages still need. Sourced from the Dhesu gallery archive;
// every frame is used once, here and nowhere else on the site.
const PHOTO = {
  hero: "/images/about/guided-group-tour.jpg",
  story: [
    {
      src: "/images/about/golden-temple-amritsar.jpg",
      alt: "The Golden Temple at Amritsar reflected in its pool at dusk",
    },
    {
      src: "/images/about/nusa-penida-broken-beach.jpg",
      alt: "The sea arch at Broken Beach, Nusa Penida, Indonesia",
    },
    {
      src: "/images/about/ba-na-golden-bridge.jpg",
      alt: "The Golden Bridge above the forest at Ba Na Hills, Vietnam",
    },
    {
      src: "/images/about/overwater-villa-jetty.jpg",
      alt: "A timber jetty running out to overwater villas on a lagoon",
    },
  ],
  band: [
    {
      src: "/images/about/beach-sunset-dinner.jpg",
      alt: "Travellers sharing a table on the sand as the sun goes down",
    },
    {
      src: "/images/about/craft-market-browsing.jpg",
      alt: "Visitors browsing a woodcarving workshop's craft stall",
    },
    {
      src: "/images/about/beachside-dining-service.jpg",
      alt: "A resort chef talking a couple through a beachside lunch",
    },
  ],
  credentials: {
    src: "/images/about/group-tour-celebration.jpg",
    alt: "A tour group celebrating together at the end of a mountain run",
  },
  perspective: [
    {
      src: "/images/about/kanchenjunga-sunrise.jpg",
      alt: "First light on the Kanchenjunga range above the cloud line",
    },
    {
      src: "/images/about/punjabi-folk-dancers.jpg",
      alt: "Punjabi folk dancers mid-performance in a field",
    },
  ],
  cta: "/images/about/beach-picnic-boat.jpg",
};

/** Photograph in a rounded frame, sized by the caller. */
function Figure({
  src,
  alt,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} />
    </div>
  );
}

const heroStats = [
  { value: `${yearsTrading}+`, label: "Years in the trade" },
  { value: "3", label: "Operations offices" },
  { value: "20+", label: "Destinations covered" },
  { value: "IATA", label: "Accredited agent" },
];

// Core service lines, from Dhesu's "Our services at a glance".
const services = [
  {
    icon: Plane,
    title: "Airline Ticketing",
    body: "Online reservations and ticketing for flights globally, backed by our IATA accreditation.",
  },
  {
    icon: Map,
    title: "Packaged Tours",
    body: "Leisure, incentive, spiritual, sports, health and educational itineraries built around your group.",
  },
  {
    icon: Bus,
    title: "Coach Rental",
    body: "Vehicles and drivers for every ground transportation need, from airport runs to multi-day touring.",
  },
  {
    icon: FileCheck,
    title: "Travel Services",
    body: "Visa applications, foreign exchange, worldwide hotel bookings and travel insurance under one roof.",
  },
];

// Specialist areas Dhesu has built its reputation on.
const specialisms = [
  {
    icon: Building2,
    title: "Corporate Travel",
    body: "Long-term partners of corporate institutions, providing excellent care for their travel needs.",
  },
  {
    icon: Users,
    title: "MICE",
    body: "Customised meetings, incentives, conventions and events with value-added, unique packages.",
  },
  {
    icon: Mountain,
    title: "Nature & Golf Tours",
    body: "Eco-tourism adventure across Borneo, plus professionally planned customised golf packages.",
  },
  {
    icon: Ship,
    title: "Cruise & Hotels",
    body: "Cruise holidays with a difference, and instant confirmation across 2,500+ hotels worldwide.",
  },
];

// ── Copy from content-document/home&company/About Dhesu Travel & Tours_ 30+
// Years of Planning Malaysian Holidays.docx. Taken verbatim from the draft.

const storyPractice = [
  "Expanding destination coverage gradually, only once genuine on-ground relationships and expertise are established",
  "Prioritising repeat customer trust over aggressive short-term growth",
  "Maintaining consistent service standards across both budget and premium travel styles",
  "Building a reputation based on decades of delivered trips, not marketing claims alone",
];

const credentials = [
  {
    name: "IATA",
    full: "International Air Transport Association",
    meaning:
      "Recognised standing within the global airline and travel industry, supporting reliable ticketing and booking processes",
  },
  {
    name: "PATA",
    full: "Pacific Asia Travel Association",
    meaning:
      "Membership in a respected regional tourism body focused on responsible and sustainable travel development",
  },
  {
    name: "MATTA",
    full: "Malaysian Association of Tour and Travel Agents",
    meaning:
      "Registration with Malaysia's national travel trade association, reflecting compliance with local industry standards",
  },
  {
    name: "KKKP",
    full: "Registered company, KKKP licensed",
    meaning:
      "Legal accountability as a properly licensed Malaysian travel operator, not an informal or unregistered reseller",
  },
];

const strengths: {
  title: string;
  body: string;
  image: string;
  alt: string;
  href?: string;
}[] = [
  {
    title: "Individual and family travel",
    body: "Packages designed for small groups, starting from as few as two travellers, rather than large coach-tour formats.",
    image: "/images/about/family-kangaroo-encounter.jpg",
    alt: "A parent and child hand-feeding kangaroos at a wildlife park",
  },
  {
    title: "Daily departure flexibility",
    body: "Many holidays are available with daily departure options, rather than fixed monthly group tour dates.",
    image: "/images/about/river-rafting-group.jpg",
    alt: "A rafting crew running a stretch of whitewater together",
  },
  {
    title: "Destination breadth with depth",
    body: "Coverage spanning South and Southeast Asia, the Himalayas, the Middle East, and beyond, built on genuine supplier relationships rather than reselling third-party packages generically.",
    image: "/images/about/mountain-lake-causeway.jpg",
    alt: "Walkers crossing a sandbar at a high-altitude mountain lake",
  },
  {
    title: "Spiritual and cultural travel",
    body: "A particular strength in pilgrimage and culturally significant itineraries, including specialised trips through India's most sacred sites.",
    image: "/images/about/monks-morning-walk.jpg",
    alt: "A line of monks walking through palm groves at first light",
    href: "/tours/india",
  },
];

const perspectives = [
  {
    heading: "Why company history matters when choosing a travel agency",
    body: "In other words, it is best to be upfront regarding the usefulness of longevity as a signal rather than a mere marketing tool. Travel agencies who do not provide consistent quality are unlikely to endure several economic cycles and changes within the industry and among travellers' needs. Travel agencies that have been around since 1988 have managed to cope with the growing competition from the online travel agencies, the changes in visa policies, travel disruption across the world and changing traveller needs.",
  },
  {
    heading: "Our office and team",
    body: "Dhesu Travel & Tours is a travel company located at Wisma Dhesu, Bangsar, Kuala Lumpur, and backed by a team of consultants who will assist in the planning of the destinations offered. The advantage that Dhesu Travel & Tours has compared to other travel agencies is the fact that it has a physical presence. Many travelers prefer dealing with companies that have an actual office because they are more reliable.",
  },
  {
    heading: "How we've adapted without losing what matters",
    body: "30 years in the travel business entails undergoing a lot of change, from the emergence of online booking systems to changing visa requirements in various countries around the globe, changing traveller requirements, and even times when the global travel industry was turned upside down. Instead of fighting against these changes, the idea is to adapt the means by which the travellers are served (such as online live chats and digital quotation requests), but not to alter the core offer of destination knowledge, transparency in prices, and responsibility in case something goes wrong.",
  },
  {
    heading: "What sets us apart from newer agencies and online-only platforms",
    body: "Travel booking today comprises not only giant global OTAs but also smaller newly founded boutique agencies. The thing that still sets a difference between the traditional agency such as Dhesu Travel & Tours and its new rivals is the experience that the company has gathered over many years, the cooperation with hotels, guides, transport suppliers that cannot be achieved by newcomers yet. Such experience provides travelers with advantages: more effective solutions to unexpected situations, deeper knowledge about the destination, prices that are based on negotiations and not on published information.",
  },
];

// Regional expertise.
const regions = [
  {
    name: "ASEAN",
    places: "Indonesia · Thailand · Cambodia · Vietnam · Laos",
    image: "/images/about/mount-kinabalu.jpg",
    alt: "Mount Kinabalu rising above the highlands of Sabah",
  },
  {
    name: "North Asia",
    places: "China · Korea · Taiwan · Hong Kong · Macau",
    image: "/images/about/shanghai-yu-garden.jpg",
    alt: "Pavilions and rockeries in the Yu Garden, Shanghai",
  },
  {
    name: "South Asia",
    places: "India · Sri Lanka · Nepal · Bhutan · Maldives",
    image: "/images/about/kerala-backwater-boat.jpg",
    alt: "A single boat on the Kerala backwaters, seen from above",
  },
  {
    name: "Australia",
    places: "Perth · Sydney · Gold Coast · Melbourne",
    image: "/images/about/perth-skyline.jpg",
    alt: "The Perth skyline across the Swan River",
  },
  {
    name: "Europe",
    places: "London · Italy · Best of Europe cities",
    image: "/images/about/lucerne-riverfront.jpg",
    alt: "The Jesuit Church on the Reuss riverfront at Lucerne",
  },
  {
    name: "Middle East & Africa",
    places: "Dubai · Egypt · Turkey · Kenya",
    image: "/images/about/marrakech-night-market.jpg",
    alt: "The night market filling Jemaa el-Fnaa in Marrakech",
  },
];

/**
 * Shows one perspective at a time.
 *
 * The claims are the scannable part and stay visible; only the supporting
 * passage swaps, which keeps every word from the draft on the page without
 * stacking four dense paragraphs on top of each other.
 */
function PerspectiveSwitcher({
  items,
}: {
  items: { heading: string; body: string }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-gray-200 pt-10">
      <div className="lg:col-span-5" role="tablist" aria-label="How experience shows up">
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.heading}
              id={`perspective-tab-${i}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`perspective-panel-${i}`}
              onClick={() => setActive(i)}
              className={`group flex w-full gap-4 py-5 text-left border-b border-gray-200 transition-colors ${
                selected ? "" : "hover:text-teal-navy"
              }`}
            >
              <span
                className={`mt-3 h-[2px] shrink-0 transition-all duration-300 ${
                  selected ? "w-8 bg-primary" : "w-4 bg-gray-300 group-hover:w-6"
                }`}
                aria-hidden
              />
              <span
                className={`font-primary font-bold text-lg md:text-xl leading-snug transition-colors ${
                  selected ? "text-teal-navy" : "text-gray-400"
                }`}
              >
                {item.heading}
              </span>
            </button>
          );
        })}
      </div>

      {/* Every panel is rendered, inactive ones hidden.
          Mounting only the active one is what a tab widget usually does, but it
          also meant two thirds of this section never existed in the HTML — not
          for a crawler, and not for reader mode or a page search. This is also
          the markup the tab pattern actually asks for. */}
      <div className="lg:col-span-7 lg:pt-3">
        {items.map((item, i) => (
          <motion.p
            key={item.heading}
            id={`perspective-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`perspective-tab-${i}`}
            hidden={i !== active}
            initial={false}
            animate={i === active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            {item.body}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default function AboutContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt="A Dhesu guide walking a tour group through a tropical garden"
        badge={`Since ${company.foundedYear}`}
        title="About Dhesu"
        titleAccent="Travel & Tours"
        intro={company.philosophy}
        size="lg"
        align="center"
        overlay="solid"
        actions={[
          { label: "Explore Tours", href: "/tours" },
          { label: "Talk to Us", href: "/contact" },
        ]}
      >
        <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/20">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-white font-primary font-bold text-3xl">{stat.value}</p>
              <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </AllPagesHero>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel text="Our Story" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-6">
                Built progressively, prudently
              </h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                {/* The draft opens on this paragraph; it sets up everything below it. */}
                <p>
                  All the travel agencies guarantee their customers quality services at
                  competitive rates. However, what makes one travel agency more reliable than
                  another is experience, and {company.legalName} has had such experience since{" "}
                  {company.foundedYear}. On this page you will find information on the
                  company&rsquo;s history, about what the industry qualifications actually mean to
                  travelers, and why you should go for a reputable agent even in the age of online
                  bookings.
                </p>
                <p>
                  {company.legalName} was established in {company.foundedYear} and is based on a
                  philosophy of gradual and cautious growth in terms of destination development and
                  service provision without sacrificing the reliability which ensures repeat
                  patronage from clients. For over three decades now, this strategy has produced an
                  organization that is known for its specialized individual and family tourism and
                  attention to detail.
                </p>
              </div>

              <p className="font-primary font-semibold text-teal-navy mt-8 mb-5">
                What &ldquo;progressive, though prudent&rdquo; has meant in practice:
              </p>
              <ul className="space-y-4">
                {storyPractice.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
                    <span className="text-gray-600 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/contact">
                  <Button variant="light" showArrow size="lg">
                    Plan Your Trip
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Four destinations from four different decades of the programme,
                offset so the column reads as a gallery wall rather than a grid. */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-5"
            >
              {PHOTO.story.map((photo, i) => (
                <Figure
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={`h-64 ${["", "mt-10", "-mt-4", "mt-6"][i]}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-10"
          >
            <SectionLabel text="What We Do" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-4">
              Our services at a glance
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Dhesu Travel is licensed by the Ministry of Tourism, Malaysia to provide inbound
              tours, outbound tours and airline ticketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IMAGE BAND ────────────────────────────────────────────────────
          A pause between the list of services and the specialist desks, and
          the only place on the page where the work is shown rather than told. */}
      <section className="pb-10 lg:pb-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-5 gap-5"
          >
            <Figure
              src={PHOTO.band[0].src}
              alt={PHOTO.band[0].alt}
              className="md:col-span-3 h-60 md:h-[20rem]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <Figure
              src={PHOTO.band[1].src}
              alt={PHOTO.band[1].alt}
              className="md:col-span-2 h-60 md:h-[20rem]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <Figure
              src={PHOTO.band[2].src}
              alt={PHOTO.band[2].alt}
              className="md:col-span-5 h-56 md:h-[16rem]"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SPECIALISMS ───────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel text="Specialist Areas" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-6">
                Built on niche expertise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Beyond leisure holidays, we run dedicated desks for the parts of the trade that
                demand real specialism — the kind of work that needs people who have done it
                before.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specialisms.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
                        <Icon size={18} className="text-white" />
                      </div>
                      <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Regions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-4"
            >
              <SectionLabel text="Where We Send You" />
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-5 p-5 rounded-2xl border-2 border-gray-100 hover:border-primary transition-colors duration-300"
                >
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={region.image}
                      alt={region.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-primary font-bold text-[#1a1a1a] text-lg">
                      {region.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{region.places}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <SectionLabel text="Licensed & Accredited" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-4">
              Book with confidence
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We are an accredited member of the industry&apos;s governing bodies — so your money
              and your itinerary are protected.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.accreditations.map((item, i) => (
              <motion.div
                key={item.abbr}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <p className="font-primary font-bold text-primary text-2xl mb-2">{item.abbr}</p>
                <h3 className="font-primary font-semibold text-[#1a1a1a] text-sm mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-gray-500 text-sm mt-10"
          >
            {company.legalName} ({company.companyNo}) · Licence {company.licenseNo}
          </motion.p>
        </div>
      </section>

      {/* ── WHAT THE CREDENTIALS MEAN ─────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-10"
          >
            <SectionLabel text="Our Credentials" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-5">
              What they actually mean for you
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Industry credentials aren&apos;t just badges on a website footer they represent real
              accountability and standards that protect travellers.
            </p>
          </motion.div>

          {/* Abbreviation-led so this reads as a glossary, distinct from the
              accreditation cards above that simply list what we hold. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {credentials.map((item) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="border-t-2 border-gray-200 pt-6"
              >
                <p className="font-primary font-bold text-primary text-4xl md:text-5xl leading-none tracking-[-0.02em]">
                  {item.name}
                </p>
                <p className="text-gray-400 text-sm mt-3 mb-4">{item.full}</p>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.meaning}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-3xl mt-12"
          >
            Booking through a credentialed agency means there&apos;s a real, licensed entity
            accountable for your booking, a meaningful difference from unregulated resellers or
            informal group-buy arrangements that have become more common online.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-10"
          >
            <Figure
              src={PHOTO.credentials.src}
              alt={PHOTO.credentials.alt}
              className="h-60 md:h-[22rem]"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE SPECIALISE IN ─────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-10"
          >
            <SectionLabel text="What We Specialise In" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-5">
              Depth in a few areas, not everything for everyone
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Rather than trying to be everything to everyone, {company.legalName} has built
              specific strength in a few areas over the decades:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {strengths.map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <Figure
                  src={item.image}
                  alt={item.alt}
                  className="h-56 md:h-64 mb-7"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
                <h3 className="font-primary font-bold text-teal-navy text-xl leading-snug mb-3">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSPECTIVE ───────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end mb-16"
          >
            <div className="lg:col-span-7">
              <SectionLabel text="Experience, In Practice" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight">
                Why longevity is a signal, not a slogan
              </h2>
            </div>
            <div className="lg:col-span-5 lg:border-l border-gray-200 lg:pl-10">
              <p className="font-primary font-bold text-teal-navy text-5xl leading-none">
                {yearsTrading}
                <span className="text-primary">+</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                years trading through changing markets, since {company.foundedYear}
              </p>
            </div>
          </motion.div>

          {/* Four long passages would read as a wall stacked up, so they are
              shown one at a time: the claims stay scannable on the left and the
              evidence for the selected one sits on the right. */}
          <PerspectiveSwitcher items={perspectives} />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {PHOTO.perspective.map((photo) => (
              <Figure
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="h-60 md:h-[19rem]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
          </motion.div>

          {/* The section resolves on the brand's anchor colour. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 bg-teal-navy rounded-2xl px-8 py-12 lg:px-14 lg:py-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
                <p className="font-primary font-bold text-white text-2xl leading-snug">
                  Our ongoing commitment
                </p>
              </div>
              <p className="lg:col-span-8 text-white/75 text-[15px] md:text-base leading-relaxed">
                Despite all the changes that happen when it comes to travels the opening up of
                more destinations, changing visa regulations, as well as new needs and priorities
                of travelers there is one thing that never changes and which is always our main
                priority, and it is providing the widest variety of travel services at really
                competitive prices due to years of experience and expertise in various
                destinations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      <CtaSection
        image={PHOTO.cta}
        imageAlt="Travellers sharing a shaded lunch on a beach beside their boat"
        heading="Plan your next trip with a team you can trust"
        body={
          <>
            Three decades of experience means fewer surprises and more confidence in your
            holiday planning. Reach out today for a{" "}
            <Link
              href="/custom-itinerary-request"
              className="text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
            >
              personalized consultation and quote
            </Link>
            .
          </>
        }
      />
    </>
  );
}
