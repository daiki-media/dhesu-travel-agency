import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/data/site";
import packageDetails from "@/src/data/tourPackages";
import { tourSlugs } from "@/src/data/tourPages";
import { landingPagesByDestination } from "@/src/data/destinationDetail";

const BASE_URL = SITE_URL;

// The site is built with trailingSlash: true, so canonical tags render with a
// trailing slash — sitemap URLs must use the same form.
const url = (path: string) => `${BASE_URL}${path.replace(/\/+$/, "")}/`;

// Statically generated to /sitemap.xml at build time (works with output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/tours", "/about-us", "/contact"].map((path) => ({
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
    "/school-holiday-travel-deals-2026",
    "/year-end-holiday-travel-deals-2026",
    "/raya-holiday-travel-deals-2026",
    "/blog",
    "/blog/best-time-to-visit-bali-2026",
    "/blog/malaysia-travel-visa-guide-2026",
    "/blog/budget-family-travel-tips-2026",
    "/blog/tropical-holiday-packing-guide",
    "/blog/halal-travel-guide-malaysia",
    "/blog/solo-vs-group-travel-guide",
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
    ...destinationPages,
    ...landingPages,
    ...packagePages,
  ];
}
