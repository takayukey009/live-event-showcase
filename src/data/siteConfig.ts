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
  date: '2026-07-27',
  day: '(月)',
  time: '19:30',
  venue: '新宿ハイジアV-1',
  ticketUrl: 'https://tiget.net/events/503187',
  heroImage: '/images/hero-bg-vol35.jpg',
  eventName: 'YAGATE',
  eventVolume: 'vol. 37',
  description: `GATE事務所ライブ「YAGATE」
GATE所属芸人が、ネタ＋企画コーナーを行うライブです！

友田オレ・リンドバーグ・イクラボブチャンチャン・シャワーカーテニスト・深海魚・リバーサイドマエストロ・一向聴・チェットの8組が出演。ゲストには無尽蔵を迎え、それぞれの個性がぶつかり合う化学反応にご期待ください。

ここでしか見られない貴重な組み合わせや、この日限りの企画が、あなたの五感を刺激します。ライブならではの熱気、画面越しでは伝わらない生の迫力、そしてブレイク前夜の才能が放つ輝きを、ぜひ会場で体感してください。

おひとりさまでも、友達とでも、家族・恋人とでもどなたさまでも歓迎です。未来のスターを目撃しに、ぜひお越しください。`,
  schedule: {
    firstHalf: 'GATE所属芸人・ゲスト芸人のネタ',
    secondHalf: '企画コーナー',
    endTime: '20:45頃 終了予定'
  },
  openTime: '19:15',
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
