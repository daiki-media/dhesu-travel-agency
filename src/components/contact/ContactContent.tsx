"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, MessageCircle } from "lucide-react";
import { FacebookIcon } from "@/src/components/icons/SocialIcons";
import Button from "@/src/components/Button";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
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

const destinations = [
  "Bali / Indonesia",
  "India",
  "Sri Lanka",
  "Nepal",
  "Bhutan",
  "Vietnam",
  "Cambodia",
  "Laos",
  "Thailand",
  "Malaysia",
  "Somewhere else",
];

const inputClass =
  "w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-[15px] text-[#1a1a1a] placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none transition-colors duration-200";

const labelClass = "block font-primary font-semibold text-[#1a1a1a] text-sm mb-2";

// ── Copy from content-document/contact&bookings/Contact Us.docx, taken verbatim
// from the draft. The address is read from the company record rather than the
// draft so it can only ever be stated in one place.

// "Visit Our Office" — the draft's Address / Area / Best For table.
const officeRows = [
  { label: "Address", value: company.address.full },
  { label: "Area", value: "Bangsar, Kuala Lumpur" },
  {
    label: "Best For",
    value:
      "In-person consultations, group and corporate travel planning, document submission for visa-related bookings",
  },
];

// "What to Include When You Reach Out" — the draft's five-item list.
const enquiryChecklist = [
  "Your preferred destination(s), or a general idea if you're still deciding",
  "Approximate travel dates or timeframe",
  "Number of travellers, including children's ages if applicable",
  "Any specific interests or requirements (honeymoon, family-friendly, halal-friendly, corporate group, etc.)",
  "Your preferred way to receive a follow-up (call, WhatsApp, or email)",
];

// Photography for this page only. None of these frames shows the Dhesu office
// or Dhesu staff, so each alt text describes the scene and nothing more, and no
// frame sits beside the office copy where it could be mistaken for one.
const PHOTO = {
  philosophy: {
    src: "/images/contact/kota-kinabalu-waterfront.jpg",
    alt: "A Malaysian coastal city waterfront under a golden-hour sky",
  },
  checklist: {
    src: "/images/contact/light-filled-lounge.jpg",
    alt: "A bright, plant-filled modern lounge with armchairs beside tall windows",
  },
  quote: {
    src: "/images/contact/island-aerial-lake.jpg",
    alt: "An aerial view of an island town surrounded by lake water",
  },
  faq: {
    src: "/images/contact/cafe-terrace-conversation.jpg",
    alt: "People talking across the tables of a busy café terrace",
  },
};

export default function ContactContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travellers: "",
    departure: "",
    message: "",
  });

  // The site is a static export with no backend, so the enquiry is handed off
  // to WhatsApp (or the visitor's mail client) as a pre-filled message.
  function buildEnquiry() {
    const lines = [
      "New enquiry from dhesu.com",
      "",
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Destination: ${form.destination || "—"}`,
      `Travellers: ${form.travellers || "—"}`,
      `Departure: ${form.departure || "—"}`,
      "",
      `Message: ${form.message || "—"}`,
    ];
    return lines.join("\n");
  }

  function sendWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const url = `https://wa.me/${company.whatsapp[0].number}?text=${encodeURIComponent(
      buildEnquiry()
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function sendEmail() {
    const subject = `Holiday enquiry${form.destination ? ` — ${form.destination}` : ""}`;
    window.location.href = `mailto:${company.emails[1].address}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildEnquiry())}`;
  }

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2000&auto=format&fit=crop"
            alt="Contact Dhesu Travel & Tours"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 font-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              We reply within one working day
            </motion.div>

            <h1 className="font-primary font-bold text-5xl md:text-7xl leading-[1.05] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                className="block text-white mb-2"
              >
                Talk to a
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: easeOut }}
                className="block text-primary"
              >
                travel specialist
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Tell us where you want to go and roughly when. We will come back with a costed
              itinerary built around you — no obligation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT CARDS ───────────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="p-7 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Phone size={18} className="text-white" />
              </div>
              <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">Call us</h3>
              <div className="space-y-1">
                {company.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="block text-gray-600 text-sm hover:text-primary transition-colors"
                  >
                    {p.display}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="p-7 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4">
                <MessageCircle size={18} className="text-white" />
              </div>
              <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">WhatsApp</h3>
              <div className="space-y-1">
                {company.whatsapp.map((w) => (
                  <a
                    key={w.number}
                    href={`https://wa.me/${w.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 text-sm hover:text-primary transition-colors"
                  >
                    {w.display}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="p-7 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Mail size={18} className="text-white" />
              </div>
              <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">Email us</h3>
              <div className="space-y-1">
                {company.emails.map((em) => (
                  <a
                    key={em.address}
                    href={`mailto:${em.address}`}
                    className="block text-gray-600 text-sm hover:text-primary transition-colors"
                  >
                    {em.address}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Visit */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="p-7 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center mb-4">
                <MapPin size={18} className="text-white" />
              </div>
              <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">Visit us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {company.address.line1},<br />
                {company.address.line2},<br />
                {company.address.postcode} {company.address.city}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISIT OUR OFFICE ──────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <SectionLabel text="In Person" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-4">
                Visit our office
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We have our office at Wisma Dhesu situated right at the heart of Bangsar
                Utama which will be a simple choice for you if you wish to meet a consultant
                physically, especially when your itinerary becomes complicated or if you are
                booking for groups or international trips.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${company.address.lat},${company.address.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold text-sm hover:underline"
              >
                Get directions →
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <dl className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
                {officeRows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 px-6 sm:px-8 py-5"
                  >
                    <dt className="font-primary font-semibold text-[#1a1a1a] text-sm">
                      {row.label}
                    </dt>
                    <dd className="sm:col-span-2 text-gray-600 text-sm leading-relaxed">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY ────────────────────────────────────────────────── */}
      <section className="relative py-10 lg:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTO.philosophy.src}
            alt={PHOTO.philosophy.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-primary font-primary font-semibold text-sm uppercase tracking-widest mb-5">
              Our Philosophy
            </h2>
            <blockquote className="font-primary font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-snug">
              &ldquo;{company.philosophy}&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT TO INCLUDE + FREE QUOTE ──────────────────────────────────── */}
      {/* Anchor target for the homepage "Get a Free Quote" buttons. */}
      <section id="free-quote" className="py-10 lg:py-12 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <SectionLabel text="Before You Write" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-4">
                What to include when you reach out
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To help us get back to you with an accurate, useful response as quickly as
                possible, it&apos;s helpful to include:
              </p>

              <ul className="space-y-3">
                {enquiryChecklist.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeUp}
                    className="flex gap-4"
                  >
                    <span
                      className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary"
                      aria-hidden
                    />
                    <span className="text-gray-600 text-[15px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/2] lg:aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={PHOTO.checklist.src}
                  alt={PHOTO.checklist.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Request a free quote — leads straight into the form below. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 md:grid-cols-12 rounded-2xl overflow-hidden border-2 border-gray-100"
          >
            <div className="md:col-span-5 relative min-h-[200px] md:min-h-0">
              <Image
                src={PHOTO.quote.src}
                alt={PHOTO.quote.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="md:col-span-7 bg-gray-50 p-7 lg:p-10">
              <SectionLabel text="Request a Free Quote" />
              <p className="text-gray-600 leading-relaxed">
                Prefer not to call right away? You can also request a free, no-obligation
                quote online. Share a few details about your ideal trip, and a consultant
                will follow up with tailored options and pricing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3 bg-white p-8 lg:p-10 rounded-2xl shadow-sm"
            >
              <SectionLabel text="Enquire Now" />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-3">
                Request a free quote
              </h2>
              <p className="text-gray-500 mb-8">
                Fill this in and send it straight to our team on WhatsApp, or use email instead.
              </p>

              <form onSubmit={sendWhatsApp} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Your name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+60 12 345 6789"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Email address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="destination">
                      Destination
                    </label>
                    <select
                      id="destination"
                      value={form.destination}
                      onChange={update("destination")}
                      className={inputClass}
                    >
                      <option value="">Select…</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="travellers">
                      Travellers
                    </label>
                    <input
                      id="travellers"
                      type="number"
                      min={1}
                      value={form.travellers}
                      onChange={update("travellers")}
                      placeholder="2"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="departure">
                      Departure date
                    </label>
                    <input
                      id="departure"
                      type="date"
                      value={form.departure}
                      onChange={update("departure")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Tell us about your trip
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Budget, hotel preference, must-see places, dietary needs…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button type="submit" variant="light" size="lg" showArrow>
                    Send via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="dark"
                    size="lg"
                    onClick={sendEmail}
                  >
                    Send via Email
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hours */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                    <Clock3 size={18} className="text-white" />
                  </div>
                  <h3 className="font-primary font-bold text-[#1a1a1a] text-xl">
                    Working hours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {company.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-600 text-sm">{h.days}</span>
                      <span
                        className={`text-sm font-semibold ${
                          h.closed ? "text-gray-400" : "text-primary"
                        }`}
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Office */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h3 className="font-primary font-bold text-[#1a1a1a] text-xl">Our office</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {company.address.full}
                </p>
                <p className="text-gray-400 text-xs mb-5">
                  {company.legalName} ({company.companyNo}) · {company.licenseNo}
                </p>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${company.address.lat},${company.address.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Get directions →
                </a>

                <div className="flex gap-2.5 mt-6 pt-6 border-t border-gray-100">
                  <a
                    href={company.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dhesu on Facebook"
                    className="w-9 h-9 rounded-full border border-primary/40 text-primary flex items-center justify-center hover:bg-primary-dark hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <FacebookIcon size={16} />
                  </a>
                  <a
                    href={`https://wa.me/${company.whatsapp[0].number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dhesu on WhatsApp"
                    className="w-9 h-9 rounded-full border border-primary/40 text-primary flex items-center justify-center hover:bg-primary-dark hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="lg:sticky lg:top-28">
                <SectionLabel text="Questions" />
                <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-6">
                  Frequently asked questions
                </h2>
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src={PHOTO.faq.src}
                    alt={PHOTO.faq.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <FaqAccordion items={faqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── READY TO START PLANNING ───────────────────────────────────────
          The draft's closing block. It sits between the answers and the map so
          the page ends on the invitation rather than on an embed. */}
      <section className="py-10 lg:py-12 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl bg-teal-navy px-7 py-10 md:px-12 md:py-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
                <h2 className="font-primary font-bold text-white text-2xl md:text-3xl leading-tight mb-3">
                  Ready to Start Planning?
                </h2>
                <p className="text-white/70 text-[15px] md:text-base leading-relaxed">
                  Whether you know exactly where you&rsquo;re going or need help
                  deciding, our team is here to help. Call, WhatsApp, email, or
                  visit us in Bangsar. We look forward to planning your next
                  holiday with you.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={`https://wa.me/${company.whatsapp[0].number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#25D366] px-6 py-3.5 text-center text-white text-sm font-semibold hover:bg-[#20b858] transition-colors"
                >
                  WhatsApp {company.whatsapp[0].display}
                </a>
                <a
                  href={`tel:${company.phones[0].tel}`}
                  className="rounded-xl border border-white/40 px-6 py-3.5 text-center text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Call {company.phones[0].display}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="h-[420px] w-full">
          <iframe
            title={`${company.tradingName} office location`}
            src={`https://www.google.com/maps?q=${company.address.lat},${company.address.lng}&hl=en&z=17&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
