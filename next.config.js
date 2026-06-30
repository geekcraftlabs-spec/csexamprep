/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.100.18'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
