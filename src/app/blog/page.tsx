import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import BlogContent, { type BlogCard } from "./BlogContent";
import { breadcrumbList, graph, webPage } from "@/src/data/structuredData";
import { getBlogList, cmsImageUrl, BLOG_FALLBACK_IMAGE } from "@/src/lib/cms";

// TODO(seo): the Holiday Idea sheet has no row for the blog index itself, so
// these two strings were written here rather than copied from it. Replace them
// once the sheet gains a /blog/ row.
const TITLE = "Travel Blog | Dhesu Travel & Tours";
const DESCRIPTION =
  "Travel guides, destination tips and practical advice for Malaysian travellers, from a travel agent planning holidays since 1988.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "travel blog malaysia",
  alternates: {
    canonical: "/blog",
  },
};

const blogJsonLd = graph([
  webPage({
    path: "/blog",
    name: TITLE,
    description: DESCRIPTION,
    type: "CollectionPage",
    hasBreadcrumb: true,
  }),
  breadcrumbList("/blog", [{ name: "Home", url: "/" }, { name: "Blog" }]),
]);

export default async function BlogPage() {
  const posts = await getBlogList();

  // The list endpoint returns newest first, which is the order the index runs
  // in: the first post is the lead card, the rest fill the grid below it.
  const articles: BlogCard[] = posts.map((post) => ({
    href: `/blog/${post.slug}`,
    category: post.category,
    title: post.title,
    blurb: post.meta_description ?? "",
    image: post.featuredImage ? cmsImageUrl(post.featuredImage) : BLOG_FALLBACK_IMAGE,
    alt: post.featuredImageAlt ?? "",
  }));

  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={blogJsonLd} />
      <BlogContent articles={articles} />
    </main>
  );
}
