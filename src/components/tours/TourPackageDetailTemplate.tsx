"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/src/components/Button";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";

// ─── Types ─────────────────────────────────────────────────────────────────────

export interface PackageDetailData {
  meta: {
    title: string;
    description: string;
    keywords: string;
    slug: string;
    canonicalUrl: string;
    ogImage: string;
    pkgid: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    intro: string;
    breadcrumb: { label: string; href: string | null }[];
    heroImage: string;
    heroImageAlt: string;
  };
  quickFacts: {
    duration: string;
    startingPrice: string;
    priceNote: string;
    originalPrice: string;
    saving: string;
    groupSize: string;
    includes: string[];
    excludes: string[];
  };
  inclusions: {
    icons: { icon: string; label: string }[];
  };
  overview: {
    sectionLabel: string;
    heading: string;
    body: string[];
  };
  highlights: {
    sectionLabel: string;
    heading: string;
    items: {
      title: string;
      body: string;
      image: string;
      imageAlt: string;
    }[];
  };
  itinerary: {
    sectionLabel: string;
    heading: string;
    days: {
      day: number;
      title: string;
      meals: string;
      description: string;
      suggestedActivities: string[];
    }[];
  };
  hotelOptions: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    tiers: {
      tier: string;
      label: string;
      hotel: string;
      pricing: { label: string; price: string }[];
      fromPrice: string;
      popular?: boolean;
    }[];
  };
  whyBook: {
    sectionLabel: string;
    heading: string;
    body: string;
    points: { icon: string; title: string; body: string }[];
  };
  seoContent: {
    sections: { heading: string; body: string }[];
  };
  faq: {
    sectionLabel: string;
    heading: string;
    items: { question: string; answer: string }[];
  };
  relatedPackages: {
    id: string;
    name: string;
    price: string;
    duration: string;
    slug: string;
    image: string;
  }[];
  cta: {
    heading: string;
    subheading: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    bgImage: string;
  };
}

// ─── Animation ─────────────────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease },
  }),
};

// ─── Icon Map ──────────────────────────────────────────────────────────────────

function InclusionIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    hotel: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    breakfast: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h1m20 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707M12 6a6 6 0 100 12A6 6 0 0012 6z" />
      </svg>
    ),
    car: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    transfer: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    private: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    phone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
      </svg>
    ),
    tag: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  };
  return <>{icons[type] ?? icons.shield}</>;
}

// ─── Inquiry Form ──────────────────────────────────────────────────────────────

function InquiryForm({ packageName, whatsapp }: { packageName: string; whatsapp: string }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", adults: "2",
    childWithBed: "0", childNoBed: "0",
    travelDate: "", hotelTier: "4 Star", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hello, I'm interested in the *${packageName}*`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Travel Date: ${form.travelDate || "TBC"}`,
      `Adults: ${form.adults}`,
      `Children (with bed): ${form.childWithBed}`,
      `Children (no bed): ${form.childNoBed}`,
      `Hotel Preference: ${form.hotelTier}`,
      form.message ? `Additional notes: ${form.message}` : "",
    ].filter(Boolean).join("\n");
    return encodeURIComponent(lines);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsapp}?text=${buildWhatsAppMessage()}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-primary font-bold text-xl text-[#1a1a1a] mb-2">Enquiry Received</h3>
        <p className="text-gray-500 text-sm mb-6">We will get back to you within a few hours. For faster response, send us a WhatsApp directly.</p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#20b858] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Continue on WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Form Header */}
      <div className="bg-primary px-6 py-5">
        <h3 className="font-primary font-bold text-white text-lg">Plan Your Trip</h3>
        <p className="text-white/80 text-sm mt-0.5">We reply within a few hours</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+60 12 345 6789"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Preferred Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={form.travelDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>

        {/* Pax */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Adults</label>
            <select name="adults" value={form.adults} onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-primary transition-colors">
              {Array.from({ length: 19 }, (_, i) => i + 2).map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Child (bed)</label>
            <select name="childWithBed" value={form.childWithBed} onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-primary transition-colors">
              {Array.from({ length: 11 }, (_, i) => i).map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Child (no bed)</label>
            <select name="childNoBed" value={form.childNoBed} onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-primary transition-colors">
              {Array.from({ length: 11 }, (_, i) => i).map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Hotel Tier */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Hotel Preference</label>
          <select name="hotelTier" value={form.hotelTier} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors">
            <option value="3 Star">3 Star (Budget Friendly)</option>
            <option value="4 Star">4 Star (Value Plus Comfort)</option>
            <option value="5 Star">5 Star (Premium Value Stay)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Any requests or questions?</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="e.g. vegetarian meals, extra nights, adjoining rooms..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white font-primary font-semibold py-3.5 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-60 text-sm"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>

        {/* WhatsApp shortcut */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] font-semibold py-3 rounded-xl hover:bg-[#f0fdf4] transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us Directly
        </button>
      </form>
    </div>
  );
}

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-[#1a1a1a] text-sm pr-4">{item.question}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-5 h-5 text-primary"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── Main Template ─────────────────────────────────────────────────────────────

export default function TourPackageDetailTemplate({ data }: { data: PackageDetailData }) {
  const { hero, quickFacts, overview, highlights, itinerary, hotelOptions, whyBook, seoContent, faq, relatedPackages, cta, meta } = data;

  // Related packages always belong to this package's own destination, so derive
  // the destination segment from the canonical URL rather than hardcoding it.
  const destinationSlug = meta.canonicalUrl.replace(/^\/+tours\/+/, "").split("/")[0];

  return (
    <main className="bg-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-end">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0">
          <Image src={hero.heroImage} alt={hero.heroImageAlt} fill priority className="object-cover" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 pt-20 w-full">
          {/* Breadcrumb */}
          <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-1.5 text-white/60 text-xs mb-5 font-primary">
            {hero.breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {crumb.href
                  ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                  : <span className="text-white/90">{crumb.label}</span>
                }
              </span>
            ))}
          </motion.nav>

          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {hero.badge}
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1, ease }}
            className="font-primary font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 max-w-3xl">
            {hero.title} <span className="text-red-300">{hero.titleAccent}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-white/80 text-base lg:text-lg max-w-2xl leading-relaxed">
            {hero.intro}
          </motion.p>

          {/* Price badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
            <div>
              <p className="text-white/60 text-xs line-through">{quickFacts.originalPrice}</p>
              <p className="text-white font-primary font-bold text-2xl">{quickFacts.startingPrice}</p>
              <p className="text-white/70 text-xs">{quickFacts.priceNote}</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-green-300 text-xs font-semibold">{quickFacts.saving}</p>
              <p className="text-white/80 text-xs mt-0.5">{quickFacts.duration}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INCLUSION ICONS BAR ───────────────────────────────────────────────── */}
      <div className="bg-[#f8f8f8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-5">
          {data.inclusions.icons.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-primary"><InclusionIcon type={item.icon} /></span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT + STICKY SIDEBAR ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">

          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-16">

            {/* Overview */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <SectionLabel text={overview.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6">
                {overview.heading}
              </h2>
              <div className="space-y-4">
                {overview.body.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Includes / Excludes */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-primary font-bold text-[#1a1a1a] text-base mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Package Includes
                </h3>
                <ul className="space-y-2">
                  {quickFacts.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="font-primary font-bold text-[#1a1a1a] text-base mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Not Included
                </h3>
                <ul className="space-y-2">
                  {quickFacts.excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">&#215;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <SectionLabel text={highlights.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-8">
                {highlights.heading}
              </h2>
              <div className="space-y-10">
                {highlights.items.map((item, i) => (
                  <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-8 items-center`}>
                    <div className="w-full md:w-2/5 flex-shrink-0">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image src={item.image} alt={item.imageAlt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 40vw" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-primary font-bold text-[#1a1a1a] text-lg md:text-xl mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <SectionLabel text={itinerary.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-8">
                {itinerary.heading}
              </h2>
              <div className="space-y-4">
                {itinerary.days.map((day, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="bg-[#f8f8f8] px-6 py-4 flex items-center gap-4">
                      <span className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center font-primary font-bold text-sm flex-shrink-0">
                        D{day.day}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-primary font-bold text-[#1a1a1a]">{day.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{day.meals}</p>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{day.description}</p>
                      {day.suggestedActivities.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Suggested activities</p>
                          <ul className="space-y-1.5">
                            {day.suggestedActivities.map((act, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-primary mt-1 flex-shrink-0">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                  </svg>
                                </span>
                                {act}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hotel Options */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <SectionLabel text={hotelOptions.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-2">
                {hotelOptions.heading}
              </h2>
              <p className="text-gray-500 mb-8">{hotelOptions.subheading}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {hotelOptions.tiers.map((tier, i) => (
                  <div key={i} className={`relative rounded-2xl border-2 p-5 ${tier.popular ? "border-primary" : "border-gray-200"}`}>
                    {tier.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Chosen
                      </span>
                    )}
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{tier.tier}</p>
                    <p className="font-primary font-bold text-[#1a1a1a] text-lg mb-1">{tier.label}</p>
                    <p className="text-gray-500 text-xs mb-4">{tier.hotel}</p>
                    <ul className="space-y-1.5 mb-4">
                      {tier.pricing.map((p, j) => (
                        <li key={j} className="flex justify-between text-xs text-gray-600">
                          <span>{p.label}</span>
                          <span className="font-semibold text-[#1a1a1a]">{p.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-primary font-primary font-bold text-xl">From {tier.fromPrice}</p>
                    <p className="text-gray-400 text-xs">per person</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Dhesu */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-[#f8f8f8] rounded-3xl p-8 lg:p-10">
              <SectionLabel text={whyBook.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-3">
                {whyBook.heading}
              </h2>
              <p className="text-gray-500 mb-8">{whyBook.body}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyBook.points.map((pt, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <InclusionIcon type={pt.icon} />
                    </span>
                    <div>
                      <p className="font-semibold text-[#1a1a1a] text-sm mb-1">{pt.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{pt.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SEO Content Sections */}
            <div className="space-y-10">
              {seoContent.sections.map((sec, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <h2 className="font-primary font-bold text-[#1a1a1a] text-xl md:text-2xl leading-tight mb-4">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4">
                    {sec.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-gray-600 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <SectionLabel text={faq.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-8">
                {faq.heading}
              </h2>
              <FaqAccordion items={faq.items} />
            </motion.div>

            {/* Related Packages */}
            {relatedPackages.length > 0 && (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="font-primary font-bold text-[#1a1a1a] text-xl mb-6">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPackages.map((pkg) => (
                    <Link key={pkg.id} href={`/tours/${destinationSlug}/${pkg.slug}`}
                      className="group flex gap-4 border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="relative w-24 flex-shrink-0">
                        <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="96px" />
                      </div>
                      <div className="py-4 pr-4 flex flex-col justify-center">
                        <p className="font-semibold text-[#1a1a1a] text-sm leading-snug mb-1 group-hover:text-primary transition-colors">{pkg.name}</p>
                        <p className="text-xs text-gray-400">{pkg.duration}</p>
                        <p className="text-primary font-bold text-sm mt-1">{pkg.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* RIGHT COLUMN: Sticky form */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <InquiryForm
                packageName={`${data.hero.title} ${data.hero.titleAccent}`}
                whatsapp={cta.whatsapp}
              />
              {/* Contact strip */}
              <div className="mt-4 text-center text-sm text-gray-500 space-y-1">
                <p>Or call us directly</p>
                <a href={`tel:${cta.phone.replace(/\s/g, "")}`} className="font-bold text-primary block hover:underline">
                  {cta.phone}
                </a>
                <a href={`mailto:${cta.email}`} className="text-gray-400 text-xs hover:text-primary transition-colors block">
                  {cta.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MOBILE INQUIRY FORM ───────────────────────────────────────────────── */}
      <section className="lg:hidden px-6 pb-12">
        <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl mb-6">Plan Your Trip</h2>
        <InquiryForm
          packageName={`${data.hero.title} ${data.hero.titleAccent}`}
          whatsapp={cta.whatsapp}
        />
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={cta.bgImage} alt="Book your Chennai trip" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-primary font-bold text-white text-3xl md:text-4xl leading-tight mb-3">
              {cta.heading}
            </h2>
            <p className="text-white/75 text-base mb-8">{cta.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${cta.whatsapp}?text=Hello, I am interested in the ${encodeURIComponent(data.hero.title)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#20b858] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp {cta.phone}
              </a>
              <a href={`mailto:${cta.email}`}
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors">
                {cta.email}
              </a>
            </div>
            <p className="text-white/40 text-xs mt-6">{cta.address}</p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}