import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // 必要に応じてイベントページ等も追加可能
  const pages = [
    '',
    'performers',
    'schedule',
    'concept',
    'access',
    'archive',
    'past-events',
    'tickets',
  ];
  const siteUrl = 'https://www.yagate.jp';
  const urls = pages.map(
    (page) =>
      `<url><loc>${siteUrl}/${page}</loc></url>`
  ).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
