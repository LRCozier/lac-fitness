import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security: Disable X-Powered-By header
  poweredByHeader: false,
  
  // Security: Enable strict Content Security Policy
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Performance: Image optimization
  images: {
    domains: ['placehold.co', 'media.graphassets.com'], // Only allow specific image domains
    formats: ['image/webp', 'image/avif'], // Modern formats
    dangerouslyAllowSVG: false, // Security: Disable SVG optimization
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance: Compress responses
  compress: true,
  
  // Development: React Strict Mode for catching bugs
  reactStrictMode: true,
};

module.exports = nextConfig;
