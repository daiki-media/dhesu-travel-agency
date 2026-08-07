import type { MetadataRoute } from "next";

// Statically generated to /robots.txt at build time (works with output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dhesu.com/sitemap.xml",
  };
}
