import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/src/components/JsonLd";
import BlogContent from "../../BlogContent";
import { breadcrumbList, graph, webPage } from "@/src/data/structuredData";
import { getBlogIndexPage, getBlogIndexPageCount } from "@/src/lib/blog-index";

export const dynamicParams = false;

// Page one is /blog, so the numbered routes start at two.
export async function generateStaticParams() {
  const totalPages = await getBlogIndexPageCount();
  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) => ({
    page: String(i + 2),
  }));
}

const DESCRIPTION =
  "Travel guides, destination tips and practical advice for Malaysian travellers, from a travel agent planning holidays since 1988.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;

  return {
    title: `Travel Blog — Page ${page} | Dhesu Travel & Tours`,
    description: DESCRIPTION,
    alternates: { canonical: `/blog/page/${page}` },
  };
}

export default async function BlogPageNumber({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: raw } = await params;
  const requested = Number(raw);
  const totalPages = await getBlogIndexPageCount();
  if (!Number.isInteger(requested) || requested < 2 || requested > totalPages) notFound();

  const { lead, cards, page } = await getBlogIndexPage(requested);
  const path = `/blog/page/${page}`;

  const jsonLd = graph([
    webPage({
      path,
      name: `Travel Blog — Page ${page} | Dhesu Travel & Tours`,
      description: DESCRIPTION,
      type: "CollectionPage",
      hasBreadcrumb: true,
    }),
    breadcrumbList(path, [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: `Page ${page}` },
    ]),
  ]);

  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={jsonLd} />
      <BlogContent lead={lead} cards={cards} page={page} totalPages={totalPages} />
    </main>
  );
}
