export interface Performer {
  id: number;
  name: string;
  image: string;
  isGuest: boolean;
  onBreak?: boolean;
  note?: string;
}

export const performers: Performer[] = [
  { id: 1, name: '友田オレ', image: '/images/performer-1.jpg', isGuest: false, onBreak: true },
  { id: 2, name: 'リンドバーグ', image: '/images/performer-2.jpg', isGuest: false },
  { id: 3, name: 'イクラボブチャンチャン（今回はイトヤマのみ）', image: '/images/performer-3.jpg', isGuest: false },
  { id: 4, name: 'シャワーカーテニスト', image: '/images/performer-4.jpg', isGuest: false },
  { id: 5, name: 'ベルナルド', image: '/images/berunarudo.jpg', isGuest: true },
  { id: 6, name: '未定', image: '/images/performer-6.jpg', isGuest: true },
  { id: 7, name: '未定', image: '/images/coming-soon.jpg', isGuest: true },
];
