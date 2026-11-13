"use client";

import { Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import Button from "@/src/components/Button";
import { Bullet, DataTable, INLINE_LINK } from "@/src/data/guides/primitives";
import type { HubSection, RichPart } from "@/src/data/tourPages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BODY = "text-gray-500 text-lg leading-relaxed";

/** Hub copy stored as data: plain text, links in the house style, and bold. */
function RichText({ parts }: { parts: RichPart[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") return <Fragment key={i}>{p}</Fragment>;
        if ("bold" in p) return <strong key={i}>{p.text}</strong>;
        return p.href.startsWith("/") ? (
          <Link key={i} href={p.href} className={INLINE_LINK}>
            {p.text}
          </Link>
        ) : (
          <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" className={INLINE_LINK}>
            {p.text}
          </a>
        );
      })}
    </>
  );
}

/**
 * Copy sections a hub's JSON carries beyond the template's fixed ones, in the
 * same column, label and heading style as the Getting There section.
 */
export default function HubSections({ sections }: { sections: HubSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="py-12 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl"
            >
              <SectionLabel text={section.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-4">
                {section.heading}
              </h2>
              <div className="space-y-6">
                {section.blocks.map((block, i) => {
                  switch (block.type) {
                    case "paragraph":
                      return (
                        <p key={i} className={BODY}>
                          <RichText parts={block.parts} />
                        </p>
                      );
                    case "list":
                      return (
                        <ul key={i} className="space-y-4">
                          {block.items.map((item, j) => (
                            <Bullet key={j}>
                              <RichText parts={item.parts} />
                              {item.detail && (
                                <span className="block mt-2">
                                  <RichText parts={item.detail} />
                                </span>
                              )}
                              {item.children && (
                                <ul className="mt-4 space-y-4">
                                  {item.children.map((child, k) => (
                                    <Bullet key={k}>
                                      <RichText parts={child} />
                                    </Bullet>
                                  ))}
                                </ul>
                              )}
                            </Bullet>
                          ))}
                        </ul>
                      );
                    case "table":
                      return (
                        <DataTable
                          key={i}
                          minWidth={480}
                          headers={block.headers}
                          rows={block.rows.map((row) =>
                            row.map((cell, c) => <RichText key={c} parts={cell} />),
                          )}
                        />
                      );
                    case "button":
                      return (
                        <div key={i} className="pt-2">
                          <Link href={block.href}>
                            <Button variant="light" showArrow>
                              {block.label}
                            </Button>
                          </Link>
                        </div>
                      );
                  }
                })}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
