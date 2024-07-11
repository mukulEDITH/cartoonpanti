/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.freeimages.com',
      'cartoonpanti.com',
      'www.google.com',
      'aceternity.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freeimages.com',
        pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'cartoonpanti.com',
        pathname: '/images/**',
      },
      {
        
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.freepik.com',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'pexels.com',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
