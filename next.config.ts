import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MultiDemo-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
