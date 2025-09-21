/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Tối ưu cho Netlify deployment
  output: "standalone",

  // Đảm bảo API routes hoạt động
  experimental: {
    serverComponentsExternalPackages: [],
  },

  // Headers bảo mật
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
