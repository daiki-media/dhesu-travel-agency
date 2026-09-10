import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import BlogContent from "./BlogContent";
import { breadcrumbList, graph, webPage } from "@/src/data/structuredData";
import { getBlogIndexPage } from "@/src/lib/blog-index";

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
  const { lead, cards, page, totalPages } = await getBlogIndexPage(1);

  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={blogJsonLd} />
      <BlogContent lead={lead} cards={cards} page={page} totalPages={totalPages} />
    </main>
  );
}
