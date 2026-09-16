/** @type {import('next-sitemap').IConfig} */
// SEO & AIO対策のためのサイトマップ設定
module.exports = {
  siteUrl: 'https://www.yagate.jp',
  generateRobotsTxt: true,
  outDir: './public',
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.yagate.jp/sitemap.xml',
      'https://www.yagate.jp/sitemap-0.xml',
    ],
  },
};

