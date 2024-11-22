/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'undici': false,  // Disable undici in webpack
    };
    return config;
  },
}

module.exports = nextConfig
