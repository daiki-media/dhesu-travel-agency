"use client";

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

// Regional expertise.
const regions = [
  { name: "ASEAN", places: "Indonesia · Thailand · Cambodia · Vietnam · Laos" },
  { name: "North Asia", places: "China · Korea · Taiwan · Hong Kong · Macau" },
  { name: "South Asia", places: "India · Sri Lanka · Nepal · Bhutan · Maldives" },
  { name: "Australia", places: "Perth · Sydney · Gold Coast · Melbourne" },
  { name: "Europe", places: "London · Italy · Best of Europe cities" },
  { name: "Middle East & Africa", places: "Dubai · Egypt · Turkey · Kenya" },
];

export default function AboutContent() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop"
            alt="Dhesu Travel & Tours"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 font-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Since {company.foundedYear}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-primary font-bold text-white text-5xl md:text-7xl leading-[1.05] mb-2"
            >
              About Dhesu
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: easeOut }}
              className="font-primary font-bold text-primary text-5xl md:text-7xl leading-[1.05] mb-6"
            >
              Travel &amp; Tours
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              {company.philosophy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex gap-4 flex-wrap"
            >
              <Link href="/tours">
                <Button variant="light" showArrow size="lg">
                  Explore Tours
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="transparent" showArrow size="lg">
                  Talk to Us
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/20"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-primary font-bold text-3xl">{stat.value}</p>
                <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
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
                A humble start, an acknowledged market leader
              </h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  {company.legalName} was incorporated in {company.foundedYear} to provide a
                  complete range of travel services. Despite a humble start, the company is today
                  an acknowledged market leader, having built its core competencies in several
                  niche areas of the travel trade in Malaysia and abroad.
                </p>
                <p>
                  Our presence today extends beyond Malaysian boundaries with full-fledged
                  operations offices in both India and Nepal, enabling us to deliver seamless
                  options for our inbound and outbound tour clients alike.
                </p>
                <p>
                  Over the years we have built a credible reputation with the industry regulators,
                  all major airlines, and our business associates both locally and abroad.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/contact">
                  <Button variant="light" showArrow size="lg">
                    Plan Your Trip
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-5"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop"
                  alt="Taj Mahal, India"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop"
                  alt="Bali, Indonesia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden -mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop"
                  alt="Nepal Himalayas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop"
                  alt="Kuala Lumpur, Malaysia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
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

      {/* ── SPECIALISMS ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
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
                  <div className="w-12 h-12 rounded-xl bg-primary-dark/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-primary font-bold text-primary-dark text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
      <section className="py-20 lg:py-28 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-14"
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop"
            alt="Plan your holiday with Dhesu"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-primary font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
              Let us plan your vacation for you
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {yearsTrading} years of doing this well. Tell us where you want to go and we will
              build the trip around you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={`https://wa.me/${company.whatsapp[0].number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-light px-8 py-3.5 text-base font-primary"
              >
                <span className="btn-content">
                  WhatsApp {company.whatsapp[0].display}
                </span>
              </a>
              <a
                href={`mailto:${company.emails[1].address}`}
                className="btn-base btn-transparent px-8 py-3.5 text-base font-primary"
              >
                <span className="btn-content">{company.emails[1].address}</span>
              </a>
            </div>

            <p className="text-white/60 text-sm">{company.address.full}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
