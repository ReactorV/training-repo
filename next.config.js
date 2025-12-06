/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable SSR by default (all pages are server-rendered unless marked with 'use client')
  // This is the default behavior in Next.js, but we're making it explicit
  swcMinify: true,
  // Optimize images
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Ensure proper TypeScript and path resolution
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
