/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
  },
  // リダイレクト設定を追加
  async redirects() {
    return [
      // HTTPからHTTPSへのリダイレクト
      {
        source: 'http://:host/:path*',
        destination: 'https://:host/:path*',
        permanent: true,
      },
      // non-WWWからWWWへのリダイレクト
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'yagate.jp',
          },
        ],
        destination: 'https://www.yagate.jp/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
