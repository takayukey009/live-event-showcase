/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yagate-live.vercel.app', // 本番URLに合わせて変更
  generateRobotsTxt: true, // robots.txtも自動生成
  outDir: './public',
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://yagate-live.vercel.app/sitemap.xml',
    ],
  },
};
