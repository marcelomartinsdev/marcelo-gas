import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 430, 768, 1280, 1440, 1920],
  },
  poweredByHeader: false,
};

export default nextConfig;
