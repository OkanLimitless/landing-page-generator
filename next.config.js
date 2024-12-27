/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  // Add server logging
  serverRuntimeConfig: {
    onError: (err) => {
      console.error('Server Error:', {
        message: err.message,
        name: err.name,
        stack: err.stack
      });
    }
  },
};

module.exports = nextConfig;