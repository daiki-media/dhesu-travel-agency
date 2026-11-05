import { Fragment } from "react";
import Link from "next/link";
import { INLINE_LINK } from "@/src/data/guides/primitives";
import type { FaqPart } from "@/src/data/linkedFaq";

/**
 * Copy stored as data (hub JSON, FAQ lists) with inline links: plain strings
 * render as text, `{ text, href }` parts as links in the house inline style.
 */
export default function LinkedText({ parts }: { parts: FaqPart[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") return <Fragment key={i}>{p}</Fragment>;
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
