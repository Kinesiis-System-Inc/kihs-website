import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ["via.placeholder.com","cdn.sanity.io"],
  },
};

export default nextConfig;
