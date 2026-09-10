import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/data/site";
import packageDetails from "@/src/data/tourPackages";
import { tourSlugs } from "@/src/data/tourPages";
import { landingPagesByDestination } from "@/src/data/destinationDetail";
import { getBlogList } from "@/src/lib/cms";
import { getBlogIndexPageCount } from "@/src/lib/blog-index";

const BASE_URL = SITE_URL;

// The site is built with trailingSlash: true, so canonical tags render with a
// trailing slash — sitemap URLs must use the same form.
const url = (path: string) => `${BASE_URL}${path.replace(/\/+$/, "")}/`;

// Statically generated to /sitemap.xml at build time (works with output: "export").
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog posts come from the CMS, so a post added there reaches the sitemap on
  // the next build without anyone editing this file.
  const blogPosts = (await getBlogList()).map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // /blog is listed with the plan pages; these are its numbered pages.
  const blogIndexPages = Array.from(
    { length: (await getBlogIndexPageCount()) - 1 },
    (_, i) => ({
      url: url(`/blog/page/${i + 2}`),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    }),
  );

  const staticPages = ["", "/tours", "/about-us", "/contact-us"].map((path) => ({
    url: url(path),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  // Standalone pages from the Holiday Idea content plan. The destination
  // guides are not listed here — they are landing pages, so they already come
  // through `landingPages` below.
  const planPages = [
    "/why-book-with-a-travel-agent-2026",
    "/muslim-friendly-holiday-travel-guide",
    "/group-incentive-travel-packages",
    "/star-cruise-holiday-guide-2026",
    "/honeymoon-holiday-guide-2026",
    "/school-holiday-travel-deals-2026",
    "/year-end-holiday-travel-deals-2026",
    "/raya-holiday-travel-deals-2026",
    "/blog",
    "/promotions",
    "/custom-itinerary-request",
  ].map((path) => ({
    url: url(path),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const destinationPages = tourSlugs.flatMap((slug) => [
    {
      url: url(`/tours/${slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: url(`/tours/${slug}/all-packages`),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
  ]);

  // Read from the registry the catch-all route resolves against, rather than a
  // hand-written list of imports. The list had been added to nine times and
  // missed the eight destinations added with the Holiday Idea guides, so eight
  // live guide pages were absent from the sitemap; sourcing both from the same
  // module means a new destination can only ever appear in both or neither.
  const landingPages = Object.values(landingPagesByDestination)
    .flatMap((set) => set.pages)
    .map((page) => ({
    url: url(page.canonicalUrl),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const packagePages = Object.values(packageDetails).map((pkg) => ({
    url: url(pkg.meta.canonicalUrl),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...planPages,
    ...blogPosts,
    ...blogIndexPages,
    ...destinationPages,
    ...landingPages,
    ...packagePages,
  ];
}
