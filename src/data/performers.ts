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
  { id: 1, name: '友田オレ', image: '/images/performer-1.jpg', isGuest: false, description: 'R-1グランプリチャンピオン' },
  { id: 2, name: 'リンドバーグ', image: '/images/performer-2.jpg', isGuest: false, description: 'お笑い工房LUDO出身' },
  { id: 3, name: 'イクラボブチャンチャン', image: '/images/performer-3.jpg', isGuest: false, description: '社会人漫才師' },
  { id: 4, name: 'シャワーカーテニスト', image: '/images/performer-4.jpg', isGuest: false, description: '漫才師出身のピン芸人' },
  { id: 5, name: 'ケビンス', image: '/images/ケビンス.jpg', isGuest: true, description: 'ゲスト（吉本興業）' },
  { id: 6, name: 'お抹茶', image: '/images/お抹茶.jpg', isGuest: true, description: 'ゲスト（人力舎）' },
];
