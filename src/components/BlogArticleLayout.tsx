"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { company } from "@/src/data/company";

/**
 * Shared shell for the six Holiday Idea blog articles.
 *
 * The destination guides under /tours each get their own visual treatment
 * because each one sells a different place. The blog is the opposite case: six
 * articles that a reader moves between, so they deliberately share one shell —
 * same hero, same reading measure, same table and callout devices, same
 * on-this-page rail. Only the words and the photography change.
 *
 * Every primitive an article needs is exported from here, so an article file
 * contains its copy and nothing else.
 */

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

/** The six articles, in sheet order — the source for the "read next" strip. */
export const BLOG_ARTICLES = [
  {
    slug: "best-time-to-visit-bali-2026",
    title: "Best Time to Visit Bali",
    blurb: "Month-by-month weather, crowds and pricing.",
    image: "/images/blog/best-time-to-visit-bali-2026/uluwatu-coastline.jpg",
  },
  {
    slug: "malaysia-travel-visa-guide-2026",
    title: "Visa Requirements for Malaysian Travellers",
    blurb: "Visa-free, e-visa and Schengen, destination by destination.",
    image: "/images/blog/malaysia-travel-visa-guide-2026/border-flag-ceremony.jpg",
  },
  {
    slug: "budget-family-travel-tips-2026",
    title: "Budget Travel Tips for Families",
    blurb: "Getting more from every ringgit on a family holiday.",
    image: "/images/blog/budget-family-travel-tips-2026/family-banana-boat.jpg",
  },
  {
    slug: "tropical-holiday-packing-guide",
    title: "Packing Guide for Tropical Destinations",
    blurb: "The complete checklist, from temple wear to dry bags.",
    image: "/images/blog/tropical-holiday-packing-guide/tropical-beach-loungers.jpg",
  },
  {
    slug: "halal-travel-guide-malaysia",
    title: "Halal Travel Guide",
    blurb: "Ranking destinations by food, prayer and cultural ease.",
    image: "/images/blog/halal-travel-guide-malaysia/hagia-sophia-aerial.jpg",
  },
  {
    slug: "solo-vs-group-travel-guide",
    title: "Solo vs. Group Travel",
    blurb: "Cost, safety, flexibility — which fits your next trip.",
    image: "/images/blog/solo-vs-group-travel-guide/group-dolphin-cruise.jpg",
  },
] as const;

// ─── Primitives ────────────────────────────────────────────────────────────────

/**
 * One numbered section of an article.
 *
 * The `id` is what the on-this-page rail scrolls to, so it must match the id
 * passed in the layout's `sections` prop.
 */
export function ArticleSection({
  id,
  eyebrow,
  heading,
  children,
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="scroll-mt-28"
    >
      {eyebrow && <SectionLabel text={eyebrow} />}
      <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-[1.75rem] leading-[1.2] tracking-[-0.01em] mb-5">
        {heading}
      </h2>
      <div className="space-y-5">{children}</div>
    </motion.section>
  );
}

/** Body paragraph at the article's reading size. */
export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">{children}</p>
  );
}

/** Sub-heading inside a section, for a draft's third-level breaks. */
export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-primary font-bold text-teal-navy text-lg md:text-xl leading-snug pt-2">
      {children}
    </h3>
  );
}

/**
 * Data table.
 *
 * The drafts are table-heavy, and a four-column table cannot shrink to a phone
 * without either wrapping into mush or pushing the page sideways — so the table
 * scrolls inside its own frame and the page never does.
 */
export function DataTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  caption?: string;
}) {
  return (
    <figure className="my-2">
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="bg-teal-navy">
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-5 py-3.5 font-primary font-semibold text-white text-xs uppercase tracking-[0.12em] whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 1 ? "bg-gray-50/70" : "bg-white"}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-5 py-4 align-top text-[14px] leading-relaxed border-t border-gray-100 ${
                      j === 0
                        ? "font-semibold text-teal-navy"
                        : "text-gray-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-gray-400 text-xs">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Rule-marked list, matching the bullet device used across the new pages. */
export function Bullets({
  items,
}: {
  items: (string | { label: string; body: string })[];
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        return (
          <li key={label} className="flex gap-4">
            <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
            <span className="text-gray-600 text-[15px] leading-relaxed">
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  <span className="font-semibold text-teal-navy">{item.label}</span>{" "}
                  — {item.body}
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Tick list, for the drafts' explicit checklists. */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <svg
            className="mt-[0.3rem] h-4 w-4 shrink-0 text-primary"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5l4 4 8-9" />
          </svg>
          <span className="text-gray-600 text-[15px] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Pull-out note on the brand's anchor colour. */
export function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-teal-navy px-6 py-7 md:px-8 md:py-8">
      <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
      <p className="font-primary font-bold text-white text-lg md:text-xl leading-snug mb-3">
        {title}
      </p>
      <div className="text-white/75 text-[15px] leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

/** Photograph in a rounded frame. */
export function Figure({
  src,
  alt,
  caption,
  className = "h-60 md:h-[22rem]",
  sizes = "(max-width: 1024px) 100vw, 720px",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-gray-400 text-xs">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Two photographs side by side, for the wider breaks between arguments. */
export function FigurePair({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <Figure
          key={item.src}
          src={item.src}
          alt={item.alt}
          className="h-48 md:h-64"
          sizes="(max-width: 640px) 100vw, 360px"
        />
      ))}
    </div>
  );
}

// ─── On-this-page rail ─────────────────────────────────────────────────────────

/**
 * Highlights whichever section is currently in view.
 *
 * These articles run long and are answer-shaped — a reader arriving from search
 * usually wants one section, not the whole piece.
 */
function OnThisPage({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page">
      <p className="text-primary font-semibold text-xs uppercase tracking-widest font-primary mb-4">
        On this page
      </p>
      <ul className="space-y-1 border-l border-gray-200">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block py-1.5 pl-4 -ml-px border-l-2 text-[13px] leading-snug transition-colors ${
                active === section.id
                  ? "border-primary text-teal-navy font-semibold"
                  : "border-transparent text-gray-400 hover:text-teal-navy"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Layout ────────────────────────────────────────────────────────────────────

export interface BlogArticleLayoutProps {
  /** Slug of this article, used to drop it from the "read next" strip. */
  slug: string;
  /** Chip above the h1, e.g. "Destination Timing". */
  category: string;
  title: string;
  /** The draft's opening paragraph, shown under the h1. */
  lead: string;
  heroImage: string;
  heroAlt: string;
  /** Short facts under the hero, e.g. "8 min read". */
  facts?: string[];
  /** Section ids and labels for the on-this-page rail, in document order. */
  sections: { id: string; label: string }[];
  /** The article body, built from the primitives above. */
  children: React.ReactNode;
  faqs: { question: string; answer: string }[];
  /** The draft's closing block. */
  closing: { heading: string; body: string; href: string; linkLabel: string };
}

export default function BlogArticleLayout({
  slug,
  category,
  title,
  lead,
  heroImage,
  heroAlt,
  facts = [],
  sections,
  children,
  faqs,
  closing,
}: BlogArticleLayoutProps) {
  const whatsapp = company.whatsapp[0].number;
  const readNext = BLOG_ARTICLES.filter((article) => article.slug !== slug).slice(0, 3);

  // A <div>, not a <main>: the route file already owns the page's <main>, and
  // nesting a second one would leave the document with two main landmarks.
  return (
    <div className="bg-white">
      <AllPagesHero
        image={heroImage}
        imageAlt={heroAlt}
        badge={category}
        title={title}
        intro={lead}
        size="sm"
        breadcrumb={
          <>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/90">{category}</span>
          </>
        }
      />

      {/* ── FACTS STRIP ──────────────────────────────────────────────────── */}
      {facts.length > 0 && (
        <div className="bg-[#f8f8f8] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-x-6 gap-y-2">
            {facts.map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="h-px w-4 bg-primary" aria-hidden />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── ARTICLE + RAIL ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-16">
          <article className="min-w-0 space-y-12 lg:space-y-14">{children}</article>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <OnThisPage sections={sections} />

              <div className="rounded-2xl border border-gray-200 p-5">
                <p className="font-primary font-bold text-teal-navy text-[15px] leading-snug mb-2">
                  Questions about your trip?
                </p>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                  A consultant can confirm the details for your dates before you
                  book anything.
                </p>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl bg-[#25D366] px-4 py-2.5 text-center text-white text-[13px] font-semibold hover:bg-[#20b858] transition-colors"
                >
                  WhatsApp us
                </a>
                <Link
                  href="/contact"
                  className="mt-2 block rounded-xl border border-gray-200 px-4 py-2.5 text-center text-teal-navy text-[13px] font-semibold hover:border-primary transition-colors"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <FaqSection faqs={faqs} className="bg-pattern scroll-mt-28" />

      <CtaSection
        heading={closing.heading}
        body={closing.body}
        actions={[
          { label: closing.linkLabel, href: closing.href },
          {
            label: `WhatsApp ${company.whatsapp[0].display}`,
            href: `https://wa.me/${whatsapp}`,
          },
        ]}
      />

      {/* ── READ NEXT ────────────────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel text="Read Next" />
          <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-[1.75rem] leading-[1.2] mb-8">
            More travel guides
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readNext.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="group block">
                  <div className="relative h-44 rounded-2xl overflow-hidden">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <h3 className="mt-4 font-primary font-bold text-teal-navy text-lg leading-snug group-hover:text-primary-dark transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">
                    {article.blurb}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
