import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // webpack: (config) => {
  //   config.optimization.minimize = false;
  //   return config;
  // },

  experimental: {
    turbopackMinify: false,
  },
};

export default nextConfig;
