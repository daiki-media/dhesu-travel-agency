/**
 * Reads the article HTML the CMS stores in `blogs.content` into the pieces the
 * page shell needs: a lead, numbered sections, the FAQ pairs and the closing
 * CTA. Build-time only — it runs once per post during `next build`.
 *
 * The contract with the CMS content is:
 *
 *   * everything before the first <h2> is the lead paragraph;
 *   * each <h2 id="..."> opens a section, its optional data-nav is the short
 *     label used in the jump list and its optional data-eyebrow is the small
 *     label rendered above the heading;
 *   * <h2 id="faqs"> holds <h3>question</h3><p>answer</p> pairs;
 *   * <h2 id="cta"> holds the closing heading, a paragraph of body copy and a
 *     paragraph containing a single link.
 *
 * Both reserved sections are optional: a post without them still renders, with
 * no accordion and the site-wide CTA. Everything else is passed through as-is.
 */

export type ArticleSection = {
  id: string;
  eyebrow?: string;
  heading: string;
  /** Short label for the jump list. Falls back to the heading. */
  navLabel: string;
  /** Raw HTML of the section body, injected as-is. */
  html: string;
};

export type ArticleFaq = { question: string; answer: string };

export type ArticleCta = {
  heading: string;
  body: string;
  href: string;
  linkLabel: string;
};

export type ParsedArticle = {
  /** Inline HTML for the hero's intro paragraph. */
  lead: string;
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  cta: ArticleCta | null;
};

const FAQ_ID = "faqs";
const CTA_ID = "cta";

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ldquo: "“",
  rdquo: "”",
  lsquo: "‘",
  rsquo: "’",
  mdash: "—",
  ndash: "–",
  hellip: "…",
};

/**
 * Entity-decoded plain text.
 *
 * Used only where a string leaves HTML for good — accordion labels and the
 * FAQPage structured data, both of which take text, not markup.
 */
function toText(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-zA-Z]+);/g, (match, name) => ENTITIES[name] ?? match)
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function attribute(tag: string, name: string): string | undefined {
  const match = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return match?.[1];
}

function parseFaqs(html: string): ArticleFaq[] {
  const pairs = html.matchAll(
    /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi,
  );
  return [...pairs].map(([, question, answer]) => ({
    question: toText(question),
    answer: toText(answer),
  }));
}

function parseCta(heading: string, html: string): ArticleCta | null {
  const link = html.match(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => m[1]);
  const body = paragraphs.find((p) => !/<a\s/i.test(p));
  if (!link || !body) return null;

  return {
    heading,
    body: toText(body),
    href: link[1],
    linkLabel: toText(link[2]),
  };
}

export function parseArticle(content: string): ParsedArticle {
  const headings = [...content.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi)];

  const preamble = content.slice(0, headings[0]?.index ?? content.length);
  const firstParagraph = preamble.match(/<p[^>]*>([\s\S]*?)<\/p>/i);

  const sections: ArticleSection[] = [];
  let faqs: ArticleFaq[] = [];
  let cta: ArticleCta | null = null;

  headings.forEach((heading, i) => {
    const [tag, attributes, inner] = heading;
    const start = heading.index + tag.length;
    const end = headings[i + 1]?.index ?? content.length;
    const html = content.slice(start, end).trim();
    const text = toText(inner);
    const id = attribute(attributes, "id") || slugify(text);

    if (id === FAQ_ID) {
      faqs = parseFaqs(html);
      return;
    }
    if (id === CTA_ID) {
      cta = parseCta(text, html);
      return;
    }

    const navLabel = attribute(attributes, "data-nav");
    sections.push({
      id,
      eyebrow: attribute(attributes, "data-eyebrow"),
      heading: text,
      navLabel: navLabel ? toText(navLabel) : text,
      html,
    });
  });

  return {
    // The hero renders the intro inside its own <p>, so the lead is handed over
    // as the paragraph's inline contents rather than the paragraph itself.
    lead: firstParagraph?.[1].trim() ?? "",
    sections,
    faqs,
    cta,
  };
}
