import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/data/site";
import packageDetails from "@/src/data/tourPackages";
import { tourPages, tourSlugs } from "@/src/data/tourPages";
import { landingPagesByDestination } from "@/src/data/destinationDetail";
import { getBlogList } from "@/src/lib/cms";
import { getBlogIndexPageCount } from "@/src/lib/blog-index";
import {
  findFile,
  lastModified,
  packageFilesByUrl,
  registryFiles,
  siblingDataFiles,
} from "@/src/lib/sitemap-lastmod";

const BASE_URL = SITE_URL;

// The site is built with trailingSlash: true, so canonical tags render with a
// trailing slash — sitemap URLs must use the same form.
const url = (path: string) => `${BASE_URL}${path.replace(/\/+$/, "")}/`;

// Statically generated to /sitemap.xml at build time (works with output: "export").
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Blog posts come from the CMS, so a post added there reaches the sitemap on
  // the next build without anyone editing this file.
  const posts = await getBlogList();
  const blogPosts = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // The blog index and its numbered pages change whenever a post is added or
  // edited, so they carry the newest post date.
  const newestPost = posts.reduce<Date | undefined>((newest, post) => {
    const date = new Date(post.updated_at || post.created_at);
    return Number.isNaN(date.getTime()) || (newest && newest >= date) ? newest : date;
  }, undefined);
  const blogIndexModified = newestPost ? { lastModified: newestPost } : {};

  // /blog is listed with the plan pages; these are its numbered pages.
  const blogIndexPages = Array.from(
    { length: (await getBlogIndexPageCount()) - 1 },
    (_, i) => ({
      url: url(`/blog/page/${i + 2}`),
      ...blogIndexModified,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    }),
  );

  // <lastmod> comes from the last git commit to each page's own content files
  // (see src/lib/sitemap-lastmod.ts), so it moves only when that page changes.
  const at = (...sources: (string | undefined)[]) => {
    const date = lastModified(...sources);
    return date ? { lastModified: date } : {};
  };

  const staticSources: Record<string, string[]> = {
    "": [
      "src/app/page.tsx",
      "src/components/homepage",
      "src/data/featuredTours.ts",
      "src/data/holidayIdeas.ts",
      "src/data/destinations.ts",
    ],
    "/tours": ["src/app/tours/page.tsx", "src/app/tours/ToursIndexContent.tsx"],
    "/about-us": ["src/app/about-us"],
    "/contact-us": ["src/app/contact-us"],
  };

  const staticPages = ["", "/tours", "/about-us", "/contact-us"].map((path) => ({
    url: url(path),
    ...at(...staticSources[path]),
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
    ...(path === "/blog" ? blogIndexModified : at(`src/app${path}`)),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Approved copy for hubs/landing pages and the guide articles, by registry
  // key ("india", "india/kashmir"). Data files beside a copy component
  // (landingFaqs.ts, kashmirPackages.ts) belong to it.
  const pageContentFiles = registryFiles("src/data/pageContent/index.tsx");
  const guideFiles = registryFiles("src/data/guides/index.tsx");
  const withSiblingData = (file: string | undefined) => {
    if (!file) return [];
    const dir = file.slice(0, file.lastIndexOf("/"));
    return [file, ...siblingDataFiles(dir)];
  };
  const hubJson = (slug: string) => findFile("src/data/tourPages", slug, [".json"]);
  const packageDir = (slug: string) => findFile("src/data/tourPackages", slug, [""]);

  const destinationPages = tourSlugs.flatMap((slug) => [
    {
      url: url(`/tours/${slug}`),
      ...at(hubJson(slug), ...withSiblingData(pageContentFiles.get(slug))),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // A hub whose itineraries are still being written (China, Hong Kong, …)
    // has nothing to list on /all-packages beyond the guide card the hub
    // already shows. The page still exists; it is just not offered to crawlers
    // as a listing until there are packages to list.
    ...(tourPages[slug].packages.items.length > 0
      ? [
          {
            url: url(`/tours/${slug}/all-packages`),
            ...at(hubJson(slug), packageDir(slug)),
            changeFrequency: "weekly" as const,
            priority: 0.6,
          },
        ]
      : []),
  ]);

  // Read from the registry the catch-all route resolves against, rather than a
  // hand-written list of imports. The list had been added to nine times and
  // missed the eight destinations added with the Holiday Idea guides, so eight
  // live guide pages were absent from the sitemap; sourcing both from the same
  // module means a new destination can only ever appear in both or neither.
  const landingPages = Object.entries(landingPagesByDestination)
    .flatMap(([destination, set]) => set.pages.map((page) => ({ destination, page })))
    .map(({ destination, page }) => ({
    url: url(page.canonicalUrl),
    ...at(
      findFile("src/data/destinationDetail", destination, [".ts", ".tsx"]),
      hubJson(destination),
      ...withSiblingData(pageContentFiles.get(`${destination}/${page.key}`)),
      guideFiles.get(`${destination}/${page.key}`),
      guideFiles.has(`${destination}/${page.key}`) ? "src/data/guideFaqs.ts" : undefined,
    ),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const packageFiles = packageFilesByUrl();
  const packagePages = Object.values(packageDetails).map((pkg) => ({
    url: url(pkg.meta.canonicalUrl),
    ...at(packageFiles.get(pkg.meta.canonicalUrl.replace(/\/+$/, ""))),
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
