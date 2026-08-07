import type { MetadataRoute } from "next";
import packageDetails from "@/src/data/tourPackages";
import { tourSlugs } from "@/src/data/tourPages";
import { INDIA_LANDING_PAGES } from "@/src/data/destinationDetail/india";
import { NEPAL_LANDING_PAGES } from "@/src/data/destinationDetail/nepal";
import { SRI_LANKA_LANDING_PAGES } from "@/src/data/destinationDetail/sri-lanka";
import { BHUTAN_LANDING_PAGES } from "@/src/data/destinationDetail/bhutan";
import { VIETNAM_LANDING_PAGES } from "@/src/data/destinationDetail/vietnam";
import { CAMBODIA_LANDING_PAGES } from "@/src/data/destinationDetail/cambodia";
import { LAOS_LANDING_PAGES } from "@/src/data/destinationDetail/laos";
import { MALAYSIA_LANDING_PAGES } from "@/src/data/destinationDetail/malaysia";
import { INDONESIA_LANDING_PAGES } from "@/src/data/destinationDetail/Indonesia";

const BASE_URL = "https://dhesu.com";

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

  const landingPages = [
    ...INDIA_LANDING_PAGES,
    ...NEPAL_LANDING_PAGES,
    ...SRI_LANKA_LANDING_PAGES,
    ...BHUTAN_LANDING_PAGES,
    ...VIETNAM_LANDING_PAGES,
    ...CAMBODIA_LANDING_PAGES,
    ...LAOS_LANDING_PAGES,
    ...MALAYSIA_LANDING_PAGES,
    ...INDONESIA_LANDING_PAGES,
  ].map((page) => ({
    url: url(page.canonicalUrl),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const packagePages = Object.values(packageDetails).map((pkg) => ({
    url: url(pkg.meta.canonicalUrl),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...destinationPages, ...landingPages, ...packagePages];
}
