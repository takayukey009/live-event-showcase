export interface Performer {
  id: number;
  name: string;
  image: string;
  isGuest: boolean;
  onBreak?: boolean;
  note?: string;
  description?: string;
}

export const performers: Performer[] = [
  { id: 2, name: 'リンドバーグ', image: '/images/performer-2.jpg', isGuest: false, description: 'お笑い工房LUDO出身' },
  { id: 3, name: 'イクラボブチャンチャン', image: '/images/performer-3.jpg', isGuest: false, description: '社会人漫才師' },
  { id: 4, name: 'シャワーカーテニスト', image: '/images/performer-4.jpg', isGuest: false, description: '漫才師出身のピン芸人' },
  { id: 5, name: '深海魚', image: '/images/深海魚.jpg', isGuest: false },
  { id: 6, name: 'リバーサイドマエストロ', image: '/images/リバーサイドマエストロ.jpg', isGuest: false },
  { id: 7, name: '一向聴', image: '/images/一向聴.jpg', isGuest: false },
  { id: 8, name: 'チェット', image: '/images/YYY_0864のコピー-scaled.jpg', isGuest: false },
  { id: 9, name: '群青団地', image: '/images/群青団地.jpg', isGuest: true, description: '太田プロダクション' },
];
