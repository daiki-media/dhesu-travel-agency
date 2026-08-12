import type { MetadataRoute } from "next";
import { SITE_URL } from "@/src/data/site";

// Statically generated to /robots.txt at build time (works with output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
