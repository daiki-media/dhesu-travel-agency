import type { BlogCard } from "@/src/app/blog/BlogContent";
import { getBlogList, cmsImageUrl, BLOG_FALLBACK_IMAGE } from "@/src/lib/cms";

export const CARDS_PER_PAGE = 12;

export type BlogIndexPage = {
  lead: BlogCard | null;
  cards: BlogCard[];
  page: number;
  totalPages: number;
};

function toCard(post: Awaited<ReturnType<typeof getBlogList>>[number]): BlogCard {
  return {
    href: `/blog/${post.slug}`,
    category: post.category,
    title: post.title,
    blurb: post.meta_description ?? "",
    image: post.featuredImage ? cmsImageUrl(post.featuredImage) : BLOG_FALLBACK_IMAGE,
    alt: post.featuredImageAlt ?? "",
  };
}

export async function getBlogIndexPageCount(): Promise<number> {
  const posts = await getBlogList();
  return Math.max(1, Math.ceil((posts.length - 1) / CARDS_PER_PAGE));
}

export async function getBlogIndexPage(page: number): Promise<BlogIndexPage> {
  const posts = await getBlogList();
  // Newest post leads page one; the rest fill the grid, twelve to a page.
  const [lead, ...rest] = posts.map(toCard);
  const totalPages = Math.max(1, Math.ceil(rest.length / CARDS_PER_PAGE));
  const start = (page - 1) * CARDS_PER_PAGE;

  return {
    lead: page === 1 ? (lead ?? null) : null,
    cards: rest.slice(start, start + CARDS_PER_PAGE),
    page,
    totalPages,
  };
}
