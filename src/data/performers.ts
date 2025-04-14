export interface Performer {
  id: number;
  name: string;
  image: string;
  isGuest: boolean;
}

export const performers: Performer[] = [
  { id: 1, name: '友田オレ', image: '/images/performer-1.jpg', isGuest: false },
  { id: 2, name: 'リンドバーグ', image: '/images/performer-2.jpg', isGuest: false },
  { id: 3, name: 'イクラボブチャンチャン', image: '/images/performer-3.jpg', isGuest: false },
  { id: 4, name: 'シャワーカーテニスト', image: '/images/performer-4.jpg', isGuest: false },
  { id: 5, name: 'アーティスト5', image: '/images/performer-5.jpg', isGuest: true },
  { id: 6, name: 'アーティスト6', image: '/images/performer-6.jpg', isGuest: true },
];
