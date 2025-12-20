// Restoration of SEO Improvements (Fixed Grid UI)
import type { Metadata } from 'next'
import { currentEvent } from '@/data/siteConfig'
import { performers } from '@/data/performers'
import './globals.css'

export const metadata: Metadata = {
  title: `YAGATE LIVE ${currentEvent.eventVolume} | 友田オレ出演・${currentEvent.date} at ${currentEvent.venue}`,
  description: `${currentEvent.date}開催YAGATE LIVE ${currentEvent.eventVolume}！${currentEvent.description?.split('\n')[0] || '友田オレ（R-1グランプリチャンピオン）他出演。チケット情報とアクセスは公式サイトで確認。'}`,
  keywords: ['YAGATE', '友田オレ', 'お笑いライブ', 'GATE', '下北沢', 'ライブイベント', '芸人', 'コメディ', ...performers.map(p => p.name)],
  openGraph: {
    title: `YAGATE LIVE ${currentEvent.eventVolume} | 友田オレ出演・${currentEvent.date}`,
    description: `${currentEvent.date}開催YAGATE LIVE ${currentEvent.eventVolume}。${performers.map(p => p.name).join('、')}他出演。`,
    url: 'https://yagate-live.vercel.app',
    siteName: 'YAGATE LIVE',
    images: [
      {
        url: 'https://yagate-live.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `YAGATE LIVE ${currentEvent.eventVolume} 友田オレ出演イベント画像`,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `YAGATE LIVE ${currentEvent.eventVolume} | 友田オレ出演・${currentEvent.date}`,
    description: `YAGATE LIVE ${currentEvent.eventVolume}のチケット情報はこちら。出演：${performers.slice(0, 5).map(p => p.name).join(', ')}他。`,
    images: ['https://yagate-live.vercel.app/images/og-image.jpg'],
    creator: '@gate_yagate',
  },
  alternates: {
    canonical: 'https://yagate-live.vercel.app',
  },
  other: {
    'line:card': 'summary_large_image',
    'line:title': `YAGATE LIVE ${currentEvent.eventVolume} | 友田オレ出演・${currentEvent.date}`,
    'line:description': `YAGATE LIVE ${currentEvent.eventVolume} (${currentEvent.date}) の情報。`,
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
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:; connect-src 'self' https:; frame-src 'self' https:" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* 構造化データ（JSON-LD）追加 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: `YAGATE LIVE ${currentEvent.eventVolume}`,
              startDate: `${currentEvent.date}T${currentEvent.time.replace(/[^0-9:]/g, '') || '19:45'}:00`,
              endDate: undefined,
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: currentEvent.venue,
                address: {
                  "@type": "PostalAddress",
                  "addressLocality": "東京都世田谷区",
                  "addressRegion": "東京都",
                  "postalCode": "155-0031",
                  "streetAddress": "北沢2-7-14 下北沢シアターミネルヴァ"
                }
              },
              image: [
                "https://yagate-live.vercel.app/images/og-image.jpg"
              ],
              description: currentEvent.description?.split('\n')[0] || '',
              organizer: {
                "@type": "Organization",
                name: "GATE",
                url: "https://yagate-live.vercel.app"
              },
              performer: performers.map(p => ({
                "@type": "Person",
                name: p.name
              })),
              offers: {
                "@type": "Offer",
                url: currentEvent.ticketUrl,
                price: "2000",
                priceCurrency: "JPY",
                availability: "https://schema.org/InStock",
                validFrom: "2024-12-01T12:00",
                validThrough: `${currentEvent.date}T${currentEvent.time.replace(/[^0-9:]/g, '') || '19:45'}:00`
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
