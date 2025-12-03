import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '過去の開催一覧 | YAGATE LIVE',
  description: 'YAGATE LIVEの過去イベント一覧。出演者・開催日・イベント名などアーカイブ情報を掲載。',
  openGraph: {
    title: '過去の開催一覧 | YAGATE LIVE',
    description: 'YAGATE LIVEの過去イベントアーカイブ。歴代出演者や開催情報をまとめて掲載。',
    url: 'https://www.yagate.jp/past-events',
    siteName: 'YAGATE LIVE',
    type: 'website',
    images: [
      {
        url: 'https://www.yagate.jp/ogp-past-events.png', // 仮画像URL（後で差し替え可）
        width: 1200,
        height: 630,
        alt: 'YAGATE LIVE 過去イベント一覧',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '過去の開催一覧 | YAGATE LIVE',
    description: 'YAGATE LIVEの過去イベントアーカイブ。歴代出演者や開催情報をまとめて掲載。',
    images: ['https://www.yagate.jp/ogp-past-events.png'],
  },
};
