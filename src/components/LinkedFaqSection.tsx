"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import type { FaqPart, LinkedFaq } from "@/src/data/linkedFaq";

const LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

function Answer({ parts }: { parts: FaqPart[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") return <span key={i}>{p}</span>;
        return p.href.startsWith("/") ? (
          <Link key={i} href={p.href} className={LINK}>
            {p.text}
          </Link>
        ) : (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className={LINK}>
            {p.text}
          </a>
        );
      })}
    </>
  );
}

export default function LinkedFaqSection({
  faqs,
  label = "Questions",
  heading = "Frequently Asked Questions",
  className = "bg-pattern",
}: {
  faqs: LinkedFaq[];
  label?: string;
  heading?: string;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  if (faqs.length === 0) return null;

  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel text={label} />
              <h2 className="font-primary font-bold text-teal-navy text-4xl md:text-5xl leading-tight">
                {heading}
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3" data-reveal>
            {faqs.map((item, i) => (
              <div key={item.question} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
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
                        <Answer parts={item.answer} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
