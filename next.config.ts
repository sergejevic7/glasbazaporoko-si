import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Next 16 defaults to qualities: [75] only. `next/image` requests with other
     * `q` values return 400 from `/_next/image`, leaving only CSS fallbacks visible.
     * Keep this list in sync with `quality` props (MediaImage, FinalCTA, Testimonials).
     */
    qualities: [60, 65, 68, 70, 75, 76, 80, 84, 90],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.glasbazaporoko.si",
      },
      {
        protocol: "https",
        hostname: "glasbazaporoko.si",
      },
    ],
  },
};

export default nextConfig;
