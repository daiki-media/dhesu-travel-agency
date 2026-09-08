"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";

/**
 * The shared vocabulary of the Holiday Idea destination guides.
 *
 * Every guide under this folder is the same page with different words: a run of
 * labelled sections, some bulleted lists, one or two data tables, a break image,
 * then the FAQ and CTA. Those devices used to be redeclared in all seventeen
 * guide files — `Section`, `Bullet` and `fadeUp` were byte-identical copies, and
 * four guides had each grown their own `DataTable`/`TripRows` that had already
 * drifted apart.
 *
 * They live here now so a change to the guide look is one edit, not seventeen.
 * Guides import from this module and hold nothing but their own copy.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/** In-copy link treatment, for the internal links the content drafts specify. */
export const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

/** Section wrapper: label, heading, then the body. */
export function Section({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      <SectionLabel text={label} />
      <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6">
        {heading}
      </h2>
      {children}
    </motion.div>
  );
}

/** List item marked with a short rule rather than an icon tile. */
export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

/** The single in-article break image every guide carries. */
export function GuideFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 66vw"
      />
    </motion.div>
  );
}

/**
 * Data table: first column reads as the row's label, the rest as its detail.
 *
 * `widths` is optional and positional, matching `headers` — a guide passes it
 * only where the draft's table needs a column pinned (e.g. "w-1/4"), which is
 * why most call sites omit it entirely.
 */
export function DataTable({
  headers,
  rows,
  widths = [],
  minWidth = 640,
  className = "",
  boldColumn = 0,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  widths?: (string | undefined)[];
  /** Only the two values the drafts' tables actually use. */
  minWidth?: 480 | 640;
  className?: string;
  /**
   * Which column reads as the row's label. Nearly always the first, but a
   * recommendation table ("your priority" -> "the destination we'd pick")
   * carries its emphasis on the answer instead.
   */
  boldColumn?: number;
}) {
  return (
    <div className={`overflow-x-auto${className ? ` ${className}` : ""}`}>
      <table
        className={`w-full ${
          minWidth === 480 ? "min-w-[480px]" : "min-w-[640px]"
        } border-collapse text-left`}
      >
        <thead>
          <tr className="border-b-2 border-teal-navy">
            {headers.map((header, i) => (
              <th
                key={header}
                className={`font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3${
                  i < headers.length - 1 ? " pr-6" : ""
                }${widths[i] ? ` ${widths[i]}` : ""}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-gray-200">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-5${ci < row.length - 1 ? " pr-6" : ""} ${
                    ci === boldColumn
                      ? "font-primary font-bold text-[#1a1a1a] text-[15px]"
                      : "text-gray-600 text-[15px] leading-relaxed"
                  } align-top`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Label / detail rows, from Bali's Trip Length device. */
export function TripRows({
  rows,
}: {
  rows: { label: string; detail: React.ReactNode }[];
}) {
  return (
    <div className="border-t-2 border-teal-navy">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
        >
          <p className="sm:col-span-3 font-primary font-bold text-[#1a1a1a] text-[15px]">
            {row.label}
          </p>
          <p className="sm:col-span-9 text-gray-600 text-[15px] leading-relaxed">
            {row.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
