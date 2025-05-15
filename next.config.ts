// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'one.newkerala.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cnn.com',
      },
      // Add all other domains in the same format
      {
        protocol: 'https',
        hostname: 'static01.nyt.com',
      },
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'media.npr.org',
      },
      // ... include all other domains
    ],
  },
};

export default nextConfig;