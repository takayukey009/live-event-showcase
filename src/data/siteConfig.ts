export interface LiveEvent {
  date: string;
  day: string;
  time: string;
  venue: string;
  ticketUrl: string;
  heroImage: string;
  eventName?: string;
  eventVolume?: string;
  description?: string; 
  schedule?: {
    firstHalf: string;
    secondHalf: string;
    endTime: string;
  };
  openTime?: string;
}

export const currentEvent: LiveEvent = {
  date: '2025-04-30',
  day: 'WED',
  time: '19:45',
  venue: '下北沢シアターミネルヴァ',
  ticketUrl: 'https://tiget.net/events/394578',
  heroImage: '/images/hero-bg.jpg',
  eventName: 'YAGATE',
  eventVolume: 'vol. 22',
  description: `毎月、都内（主に新宿・下北沢）で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。 主役は、日々進化を続けるGATE所属の若手お笑い芸人、友田オレ（2025年R1チャンピオン）・リンドバーグ・イクラボブチャンチャン・シャワーカーテニスト。さらに、毎回迎える実力派ゲストとの化学反応から生まれる展開もこのライブの醍醐味です。

ここでしか見られない貴重な組み合わせや、この日限りの企画が、あなたの五感を刺激します。 ライブならではの熱気、画面越しでは伝わらない生の迫力、そしてブレイク前夜の才能が放つ輝きを、 ぜひ会場で体感してください。

おひとりさまでも、友達とでも、家族・恋人とでもどなたさまでも歓迎です。未来のスターを目撃しに、ぜひお越しください。`,
  schedule: {
    firstHalf: 'GATE所属芸人・ゲスト芸人のネタ',
    secondHalf: '企画コーナー',
    endTime: '21:00頃 終了予定'
  },
  openTime: '19:30',
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
