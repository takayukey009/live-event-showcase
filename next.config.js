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
    // optimizeCss: true, // 一時的に無効化
  },
  // リダイレクト設定を修正
  async redirects() {
    return [
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
