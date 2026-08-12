import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` (via `next build`) that can be
  // uploaded to any shared/Apache host — no Node.js server required.
  output: "export",
  // Generate folder-style URLs (`tours/india/index.html`) so Apache serves
  // clean paths like /tours/india without extra rewrite rules.
  trailingSlash: true,
  // Trim the polyfill/transpile floor to browsers that support WebP, so the
  // legacy `noModule` bundle and its polyfills stop shipping to real users.
  // (Kept in sync with the `browserslist` field in package.json.)
  productionBrowserSourceMaps: false,
  images: {
    // The Next image optimizer needs a running server; static export can't use
    // it, so we pre-render WebP variants at build time and resolve them here.
    // See scripts/optimize-images.mjs.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Must match WIDTH_LADDER in scripts/optimize-images.mjs — a width that is
    // listed here but never generated would 404.
    imageSizes: [256, 384],
    deviceSizes: [640, 828, 1200, 1920],
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
  experimental: {
    // Turn the barrel imports into per-icon/per-export imports so a single
    // `import { MapPin } from "lucide-react"` stops pulling the whole set.
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Deliberately off. Inlining looks like it should win by removing a round
    // trip, but Next also repeats the CSS inside the RSC payload — the stylesheet
    // ends up in the HTML twice, taking index.html from 24.5 KB to 60.8 KB gzipped
    // on the critical path, on every one of the 219 exported pages. Measured
    // slightly worse on mobile (78 vs 79-82) and much worse across navigations,
    // since an external file is cached once and reused site-wide.
    inlineCss: false,
  },
};

export default nextConfig;
