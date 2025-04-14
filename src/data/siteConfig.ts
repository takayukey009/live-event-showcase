export interface LiveEvent {
  date: string;
  day: string;
  time: string;
  openTime?: string;
  venue: string;
  ticketUrl: string;
  heroImage: string;
  eventName?: string;
  eventVolume?: string;
  schedule?: {
    firstHalf: string;
    secondHalf: string;
    endTime: string;
  };
}

export const currentEvent: LiveEvent = {
  date: '2025.04.30',
  day: 'WED',
  time: '19:45 開演',
  openTime: '19:30 開場',
  venue: '下北沢シアターミネルヴァ',
  ticketUrl: 'https://tiget.net/events/380197?s=09',
  heroImage: '/images/hero-bg.jpg',
  eventName: 'YAGATE',
  eventVolume: 'vol. 22',
  schedule: {
    firstHalf: 'GATE所属芸人・ゲスト芸人のネタ',
    secondHalf: '企画コーナー',
    endTime: '21:00頃 終了予定'
  }
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
