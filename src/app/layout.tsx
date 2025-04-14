import type { Metadata } from 'next'
import { currentEvent } from '@/data/siteConfig'
import './globals.css'

export const metadata: Metadata = {
  title: `YAGATE LIVE ${currentEvent.eventVolume} | ${currentEvent.date} at ${currentEvent.venue}`,
  description: '毎月、都内で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。日々進化を続けるGATE所属の若手お笑い芸人と実力派ゲストとの化学反応から生まれる展開をお楽しみください。',
  keywords: ['YAGATE', 'お笑いライブ', 'GATE', '下北沢', 'ライブイベント', 'お笑い', 'コメディ'],
  openGraph: {
    title: `YAGATE LIVE ${currentEvent.eventVolume} | ${currentEvent.date}`,
    description: '毎月、都内で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。日々進化を続けるGATE所属の若手お笑い芸人と実力派ゲストとの化学反応から生まれる展開をお楽しみください。',
    url: 'https://yagate-live.vercel.app',
    siteName: 'YAGATE LIVE',
    images: [
      {
        url: 'https://yagate-live.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YAGATE LIVE イベント画像',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `YAGATE LIVE ${currentEvent.eventVolume} | ${currentEvent.date}`,
    description: '毎月、都内で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。日々進化を続けるGATE所属の若手お笑い芸人と実力派ゲストの化学反応をお楽しみください。',
    images: ['https://yagate-live.vercel.app/images/og-image.jpg'],
    creator: '@gate_yagate',
  },
  alternates: {
    canonical: 'https://yagate-live.vercel.app',
  },
  other: {
    'line:card': 'summary_large_image',
    'line:title': `YAGATE LIVE ${currentEvent.eventVolume} | ${currentEvent.date}`,
    'line:description': '毎月、都内で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。日々進化を続けるGATE所属の若手お笑い芸人と実力派ゲストの化学反応をお楽しみください。',
    'line:image': 'https://yagate-live.vercel.app/images/og-image.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
