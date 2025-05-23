# Live Event Showcase

ライブイベントを紹介するためのモダンなウェブサイトプロジェクトです。最新のライブ情報を最優先で伝え、出演者の写真を大きくフィーチャーすることに重点を置いています。

## 主な特徴

- **モダンなデザイン**: Next.js、TypeScript、Tailwind CSSを使用した最新のウェブ開発技術
- **レスポンシブUI**: すべてのデバイスで最適な表示を実現
- **アニメーション効果**: Framer Motionを使用した滑らかなアニメーション
- **パフォーマンス最適化**: 画像の最適化とコード分割による高速な読み込み

## セクション構成

1. **ヒーローセクション**: 最新ライブ情報を大きく表示
2. **出演者セクション**: 出演者の写真を目立つように表示
3. **コンセプトメッセージ**: ライブイベントのコンセプトを紹介
4. **アーカイブリンク**: 過去のライブへの導線
5. **ニュースサマリー**: 最新のお知らせ情報
6. **アクセス情報**: 会場へのアクセス方法
7. **SNSリンク**: 公式SNSへのリンク

## 技術スタック

- **フロントエンド**: Next.js、React、TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **デプロイ**: Vercel（推奨）

## 開発方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境での実行
npm start
```

## カスタマイズ方法

- `src/components/`: 各コンポーネントのカスタマイズ
- `public/images/`: 画像ファイルの置き換え
- `tailwind.config.js`: カラーテーマやフォントの変更

## デプロイ

このプロジェクトはVercelへのデプロイを推奨します：

```bash
# Vercel CLIのインストール（初回のみ）
npm install -g vercel

# デプロイ
vercel
```
