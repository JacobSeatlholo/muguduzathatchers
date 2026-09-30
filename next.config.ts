import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for container deploys; static export (for GitHub Pages)
  // is enabled by setting NEXT_EXPORT=true when building.
  ...(process.env.NEXT_EXPORT === "true"
    ? { output: "export" as const, trailingSlash: true }
    : { output: "standalone" as const }),
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_BASE_PATH || "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_BASE_PATH || "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
