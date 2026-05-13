import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  /** Cache Components + `"use cache"` (e.g. Google reviews list). @see https://nextjs.org/docs/app/api/reference/config/next-config-js/cacheComponents */
  cacheComponents: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudflare-image-loader.ts",
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days — pairs well with Cloudflare edge cache
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
