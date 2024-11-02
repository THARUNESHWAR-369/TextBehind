/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  swcMinify: true,

  swcMinify: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        // fixes proxy-agent dependencies
        net: false,
        dns: false,
        tls: false,
        assert: false,
        // fixes next-i18next dependencies
        path: false,
        fs: false,
        // fixes mapbox dependencies
        events: false,
        // fixes sentry dependencies
        process: false,
      };
    }

    return config;
  },
};

export default nextConfig;
