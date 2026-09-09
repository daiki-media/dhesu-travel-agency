import type { NextConfig } from "next";

import { toNextRedirects } from "./redirects";

const nextConfig: NextConfig = {
  output: "export",
  redirects: async () => toNextRedirects(),
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
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
      // Blog featured images. The CMS stores them under its own public/blogs,
      // so they are served from cms.dhesu.com rather than this repo. The custom
      // loader passes non-Unsplash remote URLs through untouched.
      {
        protocol: "https",
        hostname: "cms.dhesu.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    inlineCss: false,
  },
};

export default nextConfig;
