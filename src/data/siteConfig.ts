export interface LiveEvent {
  date: string;
  day: string;
  time: string;
  venue: string;
  ticketUrl: string;
  heroImage: string;
  eventName?: string;
}

export const currentEvent: LiveEvent = {
  date: '2025.04.30',
  day: 'WED',
  time: '19:00 START',
  venue: '下北沢シアターミネルヴァ',
  ticketUrl: 'https://tiget.net/events/380197?s=09',
  heroImage: '/images/hero-bg.jpg',
  eventName: 'YAGATE'
};

export const siteConfig = {
  siteName: 'YAGATE LIVE',
  description: '最高のライブ体験をお届けするエンターテイメントプラットフォーム',
  contactEmail: 'info@liveshowcase.jp',
  contactPhone: '03-XXXX-XXXX',
  socialLinks: {
    twitter: 'https://twitter.com/liveshowcase',
    instagram: 'https://instagram.com/liveshowcase',
    youtube: 'https://youtube.com/liveshowcase',
  }
};
