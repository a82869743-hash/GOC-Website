import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export" -> Removed to allow SSR and next start
  
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.fbcdn.net',
      },
    ],
  },

  // Remove X-Powered-By header for security
  poweredByHeader: false,

  // Production compiler optimizations
  compiler: {
    // Strip console.log in production builds
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },

  // Enable React strict mode for catching bugs
  reactStrictMode: true,

  // Optimize production bundle
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzer(nextConfig);
