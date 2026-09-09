import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import CmsArticle from "@/src/components/blog/CmsArticle";
import {
  getBlogList,
  getBlogPost,
  cmsImageUrl,
  BLOG_FALLBACK_IMAGE,
  type BlogSummary,
} from "@/src/lib/cms";
import { parseArticle } from "@/src/lib/blog-content";
import { optimizeContentImages } from "@/src/lib/cms-images";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

/**
 * One blog article, built from cms.dhesu.com at build time.
 *
 * `output: "export"` means there is no runtime fetching: generateStaticParams
 * enumerates the slugs from the list endpoint and each page pulls its own body
 * from the detail endpoint. The list is fetched once and shared (see
 * src/lib/cms.ts), so a growing blog does not multiply requests against the
 * API's 60/minute limit.
 */

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogList();
  return posts.map((post) => ({ slug: post.slug }));
}

/** The hero image, or the first in-article image if a post has no featured one. */
function heroFor(post: { featuredImage: string | null; content?: string }) {
  if (post.featuredImage) return cmsImageUrl(post.featuredImage);
  return post.content?.match(/<img src="([^"]+)"/)?.[1] ?? BLOG_FALLBACK_IMAGE;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  return {
    title: post.meta_title ?? post.title,
    description: post.meta_description ?? undefined,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function readNextFrom(posts: BlogSummary[], slug: string) {
  return posts
    .filter((post) => post.slug !== slug)
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      blurb: post.meta_description ?? "",
      image: heroFor(post),
    }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getBlogPost(slug), getBlogList()]);
  // The CMS points its <img> tags at this repo's public/images originals,
  // which the export does not ship. See src/lib/cms-images.ts.
  const content = optimizeContentImages(post.content);
  const article = parseArticle(content);
  const path = `/blog/${post.slug}`;

  // A plain WebPage rather than BlogPosting, as before: the FAQ markup is safe
  // because the same questions and answers are rendered in the accordion below.
  const articleJsonLd = graph([
    webPage({
      path,
      name: post.meta_title ?? post.title,
      description: post.meta_description ?? undefined,
      type: article.faqs.length > 0 ? ["WebPage", "FAQPage"] : "WebPage",
      hasBreadcrumb: true,
      ...(article.faqs.length > 0 ? { mainEntity: faqQuestions(article.faqs) } : {}),
    }),
    breadcrumbList(path, [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title },
    ]),
  ]);

  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <CmsArticle
        title={post.title}
        category={post.category}
        heroImage={heroFor({ ...post, content })}
        heroAlt={post.featuredImageAlt ?? ""}
        readTime={post.read_time}
        article={article}
        readNext={readNextFrom(posts, post.slug)}
      />
    </main>
  );
}
