/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4444',
        pathname: '/uploads/*',
      },
      {
        protocol: 'http',
        hostname: '192.168.31.44',
        port: '4444',
        pathname: '/uploads/*',
      },
    ],
  },
}

module.exports = nextConfig
