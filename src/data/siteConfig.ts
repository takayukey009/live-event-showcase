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
  chekiFormUrl?: string;
}

export const currentEvent: LiveEvent = {
  date: '2026-03-15',
  day: '(日)',
  time: '17:00',
  venue: '渋谷区文化総合センター大和田 伝承ホール',
  ticketUrl: 'https://t.co/OzxlO9O9x6',
  heroImage: '/images/hero-bg-vol33.jpg',
  eventName: 'YAGATE',
  eventVolume: 'vol. 33 -SPECIAL-',
  description: `毎月、都内（主に新宿・下北沢）で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。 主役は、日々進化を続けるGATE所属の若手お笑い芸人、友田オレ・リンドバーグ・イクラボブチャンチャン・シャワーカーテニスト。さらに今回はスペシャルゲストにハリセンボンを迎え、より一層の化学反応にご期待ください。

ここでしか見られない貴重な組み合わせや、この日限りの企画が、あなたの五感を刺激します。 ライブならではの熱気、画面越しでは伝わらない生の迫力、そしてブレイク前夜の才能が放つ輝きを、 ぜひ会場で体感してください。

おひとりさまでも、友達とでも、家族・恋人とでもどなたさまでも歓迎です。未来のスターを目撃しに、ぜひお越しください。`,
  schedule: {
    firstHalf: 'GATE所属芸人・ゲスト芸人のネタ',
    secondHalf: '企画コーナー',
    endTime: '18:00頃 終了予定'
  },
  openTime: '16:30',
  chekiFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfYI3dO27nLJcfeFjpb7-11ffafzFXB6Eh8k9Pr2tWDP-o5qg/viewform',
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
