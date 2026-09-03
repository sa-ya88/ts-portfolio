# TACHIBANA PORTFOLIO

システムエンジニア 橘のポートフォリオサイトです。業務システム・Web サイトの制作・改修の依頼案内、実績、公開デモを掲載しています。

React / TypeScript / Vite で構築した SPA です。

## 技術構成

- React 19 / TypeScript
- Vite 8
- React Router
- Tailwind CSS 4

## 必要環境

- Node.js（現行 LTS 推奨）
- npm

## 開発

```bash
npm install
npm run dev
```

## その他のコマンド

```bash
npm run build      # 型チェック後に本番用ビルド（出力先: dist/）
npm run preview    # dist をローカルで確認
npm run typecheck  # TypeScript の型チェックのみ
npm run lint       # ESLint
```

## ページ構成

| パス | 内容 |
|------|------|
| `/` | ホーム |
| `/about` | 自己紹介 |
| `/achievements` | 実績一覧 |
| `/portfolio` | 公開デモ |
| `/hire` | 仕事の依頼 |
| `/contact` | お問い合わせ |

`/works` は `/portfolio` へリダイレクトします。

連絡先メールと GitHub は `src/data/site.ts` で管理しています。

## 公開

サーバー上では Node.js を常時起動できないため、**手元でビルドした `dist` の中身だけ** を公開ディレクトリへアップロードしています。

1. `npm run build` で `dist/` を生成する
2. `dist` フォルダごとではなく、**中身**（`index.html`、`assets/`、`images/` など）をドメインの公開フォルダ直下へ置く
3. `BrowserRouter` を使っているため、直接 URL を開いたときの 404 を防ぐ `.htaccess` を同じ場所に置く

公開フォルダ直下の例:

```
公開フォルダ/
  index.html
  favicon.svg
  assets/
  images/
  .htaccess
```

`.htaccess` の例（ドメインのルートに置く場合）:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## ライセンス

無断利用禁止です。詳細は [LICENSE](LICENSE) を参照してください。
