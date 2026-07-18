"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock3, MessageCircle } from "lucide-react";
import { FacebookIcon } from "@/src/components/icons/SocialIcons";
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

export default function ContactContent() {
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
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
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

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-primary font-bold text-white text-5xl md:text-7xl leading-[1.05] mb-2"
            >
              Talk to a
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: easeOut }}
              className="font-primary font-bold text-primary text-5xl md:text-7xl leading-[1.05] mb-6"
            >
              travel specialist
            </motion.h1>

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
      <section className="py-16 lg:py-20 bg-white">
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

      {/* ── FORM + INFO ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-pattern">
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
