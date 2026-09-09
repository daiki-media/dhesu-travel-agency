"use client";

import BlogArticleLayout, { ArticleSection } from "./BlogArticleLayout";
import type { ParsedArticle } from "@/src/lib/blog-content";

/**
 * Renders one CMS post through the existing article shell.
 *
 * This is the only place the site injects HTML it did not author. The markup
 * comes from the CMS editor at cms.dhesu.com and is fetched at build time over
 * an authenticated endpoint that only serves published rows, so it is trusted
 * the same way the hardcoded articles were — but it is kept in this one
 * component, and nowhere else, so that trust has a single place to be audited.
 */

const FALLBACK_CTA = {
  heading: "Plan Your Next Trip",
  body: "Tell us where you would like to go and a consultant will put together an itinerary and a free, personalised quote.",
  href: "/tours",
  linkLabel: "Browse Holiday Packages",
};

export type CmsArticleProps = {
  title: string;
  category: string;
  heroImage: string;
  heroAlt: string;
  readTime: number;
  article: ParsedArticle;
  readNext: { slug: string; title: string; blurb: string; image: string }[];
};

export default function CmsArticle({
  title,
  category,
  heroImage,
  heroAlt,
  readTime,
  article,
  readNext,
}: CmsArticleProps) {
  return (
    <BlogArticleLayout
      category={category}
      title={title}
      lead={
        <span className="blog-lead" dangerouslySetInnerHTML={{ __html: article.lead }} />
      }
      heroImage={heroImage}
      heroAlt={heroAlt}
      facts={[category, `${readTime} min read`]}
      sections={article.sections.map(({ id, navLabel }) => ({ id, label: navLabel }))}
      faqs={article.faqs}
      closing={article.cta ?? FALLBACK_CTA}
      readNext={readNext}
    >
      {article.sections.map((section) => (
        <ArticleSection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          heading={section.heading}
        >
          <div className="blog-html" dangerouslySetInnerHTML={{ __html: section.html }} />
        </ArticleSection>
      ))}
    </BlogArticleLayout>
  );
}
