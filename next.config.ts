import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.glasbazaporoko.si",
      },
      {
        protocol: "https",
        hostname: "glasbazaporoko.si",
      },
      {
        protocol: "https",
        hostname: "barbarazalaznik.si",
      },
      {
        protocol: "https",
        hostname: "www.barbarazalaznik.si",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
