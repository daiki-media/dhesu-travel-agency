"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Popular destinations to help the user navigate
const suggestedLinks = [
  { label: "Bali Tours", href: "/tours/bali" },
  { label: "India Tours", href: "/tours/india" },
  { label: "Thailand", href: "/tours/thailand" },
  { label: "Sri Lanka", href: "/tours/sri-lanka" },
  { label: "Nepal", href: "/tours/nepal" },
];

export default function NotFound() {
  return (
    <main className="bg-white min-h-[80vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ─────────────────────────────────────────────────── */}
          <div>
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-primary">
                Page Not Found
              </span>
            </motion.div>

            {/* 404 headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: easeOut }}
              className="font-primary font-bold text-[#1a1a1a] text-8xl md:text-[140px] leading-none mb-0 select-none"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
              className="font-primary font-bold text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-4"
            >
              Looks like this page{" "}
              <span className="text-primary">went on holiday</span> without us.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md"
            >
              The link you followed may be broken, or the page may have moved.
              Let us help you find your next adventure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link href="/">
                <Button variant="dark" showArrow size="lg">
                  Back to Home
                </Button>
              </Link>
              <Link href="/tours">
                <Button variant="light" showArrow size="lg">
                  View All Tours
                </Button>
              </Link>
            </motion.div>

            {/* Suggested destinations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Popular Destinations
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-600 bg-gray-50 hover:bg-red-50 hover:text-primary border border-gray-100 hover:border-red-100 px-4 py-2 rounded-full transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: visual ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Decorative background circle */}
              <div className="absolute inset-0 rounded-full bg-red-50 opacity-60" />

              {/* Dashed orbit ring */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-red-200 animate-spin-slow" />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
                {/* Plane icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6"
                >
                  <svg
                    className="w-20 h-20 text-primary mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </motion.div>

                <p className="font-primary font-bold text-[#1a1a1a] text-xl mb-2">
                  Lost in transit?
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every great journey has a wrong turn. Let us reroute you to
                  your dream destination.
                </p>
              </div>

              {/* Floating destination pills */}
              {[
                { label: "Bali", top: "8%", left: "60%", delay: 0 },
                { label: "Nepal", top: "22%", left: "5%", delay: 0.4 },
                { label: "Paris", top: "72%", left: "10%", delay: 0.8 },
                { label: "Dubai", top: "80%", left: "62%", delay: 1.2 },
              ].map((pill) => (
                <motion.span
                  key={pill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + pill.delay }}
                  style={{ top: pill.top, left: pill.left }}
                  className="absolute bg-white border border-gray-100 shadow-md text-xs font-semibold text-gray-700 px-3 py-1.5 rounded-full font-primary"
                >
                  {pill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}