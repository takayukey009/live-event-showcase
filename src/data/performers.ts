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
  { id: 2, name: 'リンドバーグ', image: '/images/performer-2.jpg', isGuest: false, description: '注目若手芸人' },
  { id: 3, name: 'イクラボブチャンチャン', image: '/images/performer-3.jpg', isGuest: false, description: '個性派コンビ' },
  { id: 4, name: 'シャワーカーテニスト', image: '/images/performer-4.jpg', isGuest: false, description: '新進気鋭の芸人' },
  { id: 5, name: '（未定）', image: '/images/coming-soon.jpg', isGuest: true, description: 'ゲスト芸人' },
  { id: 6, name: '（未定）', image: '/images/coming-soon.jpg', isGuest: true, description: 'ゲスト芸人' },
  { id: 7, name: '（未定）', image: '/images/coming-soon.jpg', isGuest: true, description: 'ゲスト芸人' },
];
