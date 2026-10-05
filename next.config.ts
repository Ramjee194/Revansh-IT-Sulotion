import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.29.201'],
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/software-development',
        destination: '/services/web-service/custom-web-apps',
        permanent: true,
      },
      {
        source: '/mobile-app-development',
        destination: '/services/web-service/mobile-app-development',
        permanent: true,
      },
      {
        source: '/ai-solutions',
        destination: '/services/web-service/ai-web-solutions',
        permanent: true,
      },
      {
        source: '/leading-software-ai',
        destination: '/services/web-service/ai-web-solutions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
