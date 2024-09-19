/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  env: {
    _next_intl_trailing_slash: '', // 或者 '/'，取决于你想要的行为
  },
})

module.exports = nextConfig;
