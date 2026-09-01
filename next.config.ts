import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    useTypeScriptCli: false,
  },
};

export default nextConfig;
