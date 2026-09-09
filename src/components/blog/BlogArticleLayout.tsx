"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { company } from "@/src/data/company";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

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
      <h2 className="font-primary font-bold text-[#1a1a1a] text-[1.6rem] md:text-[2rem] leading-[1.18] tracking-[-0.015em] mb-5">
        {heading}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.section>
  );
}

// ─── Contents ──────────────────────────────────────────────────────────────────

/**
 * Jump links to the article's sections.
 *
 * These pieces run long and are answer-shaped: a reader arriving from search
 * usually wants one section, not the whole article. It sits inline above the
 * body rather than in a sidebar so phone readers get it too, and it is plain
 * anchors — no observer, no client state — which is also what lets a search
 * engine read them as jump links to the page.
 */
function Contents({ sections }: { sections: { id: string; label: string }[] }) {
  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-gray-200 bg-[#fbfbfb] px-6 py-6 md:px-8 md:py-7"
    >
      <p className="font-primary text-xs font-semibold uppercase tracking-widest text-primary mb-4">
        In this article
      </p>
      <ol className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex gap-3 py-1.5 text-[15px] leading-snug text-gray-600 transition-colors hover:text-teal-navy"
            >
              <span className="w-5 shrink-0 pt-px font-primary text-xs font-semibold tabular-nums text-gray-300 transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-primary/50">
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ─── Layout ────────────────────────────────────────────────────────────────────

export interface BlogArticleLayoutProps {
  /** Chip above the h1, e.g. "Destination Guides". */
  category: string;
  title: string;
  /** Opening paragraph. Takes nodes so the article's own in-lead links survive. */
  lead: React.ReactNode;
  heroImage: string;
  heroAlt: string;
  /** Short facts under the hero, e.g. "8 min read". */
  facts?: string[];
  /** Section ids and labels for the on-this-page rail, in document order. */
  sections: { id: string; label: string }[];
  /** The article body, one ArticleSection per <h2> in the CMS content. */
  children: React.ReactNode;
  faqs: { question: string; answer: string }[];
  /** The closing CTA band. */
  closing: { heading: string; body: string; href: string; linkLabel: string };
  /** The three "read next" cards, from the CMS list endpoint. */
  readNext: { slug: string; title: string; blurb: string; image: string }[];
}

export default function BlogArticleLayout({
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
  readNext,
}: BlogArticleLayoutProps) {
  const whatsapp = company.whatsapp[0].number;

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

      <section className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
        <Contents sections={sections} />
        <article className="mt-12 space-y-14 lg:space-y-16">{children}</article>
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
