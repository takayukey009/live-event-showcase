/** @type {import('next-sitemap').IConfig} */
// SEO対策のためのサイトマップ設定
module.exports = {
  siteUrl: 'https://www.yagate.jp', // 本番URLに合わせて変更
  generateRobotsTxt: true, // robots.txtも自動生成
  outDir: './public',
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.yagate.jp/sitemap.xml',
    ],
  },
};
