import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` (via `next build`) that can be
  // uploaded to any shared/Apache host — no Node.js server required.
  output: "export",
  // Generate folder-style URLs (`tours/india/index.html`) so Apache serves
  // clean paths like /tours/india without extra rewrite rules.
  trailingSlash: true,
  images: {
    // The Next image optimizer needs a running server; static export can't use
    // it, so serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.holidayidea.com.my",
      },
    ],
  },
};

export default nextConfig;
