import type { SyntheticEvent } from "react";

export const FALLBACK_IMAGE = "/images/no-image.webp";

export interface PortfolioItem {
  id: number;
  title: string;
  details: string;
  role: string;
  features: string[];
  tags: string[];
  url?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    details:
      "公開している本サイトです。自己紹介、依頼条件、作品の一覧・詳細、問い合わせまでをまとめています。Cursor AIを使用し、UI/UXを意識して設計・実装を行いました。",
    role: "企画・デザイン・実装",
    features: ["実績と依頼条件の掲載", "問い合わせフォーム"],
    tags: ["React", "TypeScript", "Cursor AI"],
    githubUrl: "https://github.com/sa-ya88/ts-portfolio/",
    imageUrl: "/images/1.webp",
  },
  {
    id: 2,
    title: "飲食店公式サイト",
    details:
      "店舗担当者がお知らせやメニューを更新できることを前提にした、飲食店向けの公式サイトです。テーマに Lightning を使い、運用しやすい構成にしています。デモなので、問い合わせの確認メール送信などはオフにしていますが、実際の運用では正常に動作します。",
    role: "設計・WordPress構築・テーマ調整",
    features: ["店舗情報・メニュー", "お知らせ更新", "問い合わせフォーム"],
    tags: ["WordPress", "Lightning", "PHP", "MySQL"],
    url: "https://akaneya.tachibana-lab.com/",
    imageUrl: "/images/2.webp",
  },
  {
    id: 3,
    title: "ホテル公式サイト",
    details:
      "宿泊施設の公式サイトとして、紹介コンテンツに加えて予約・決済・会員登録まで一連の流れを実装したデモです。公開サイトと管理側の連携を想定しています。デモなので、一部機能は制限して公開しています。",
    role: "設計・バックエンド / フロント実装",
    features: ["施設紹介", "会員登録", "予約", "決済", "問い合わせフォーム"],
    tags: ["Laravel", "React", "TypeScript", "MySQL", "Stripe", "Cursor AI"],
    url: "https://kuturogi.tachibana-lab.com/",
    githubUrl: "https://github.com/sa-ya88/kuturogi/",
    imageUrl: "/images/3.webp",
  },
  {
    id: 4,
    title: "ホテル予約管理システム",
    details:
      "公式サイトからの予約を受け、部屋状況やキャンセル料金などを社内で管理するための管理画面です。公開サイトとデータを連動させる構成にしています。デモなので、一部機能は制限して公開しています。",
    role: "設計・業務画面 / API 実装",
    features: ["予約管理", "部屋状況", "キャンセル料金", "公式サイトとの連動"],
    tags: ["Laravel", "React", "TypeScript", "MySQL", "Cursor AI"],
    url: "https://kuturogi-admin.tachibana-lab.com/",
    githubUrl: "https://github.com/sa-ya88/kuturogi-admin/",
    imageUrl: "/images/4.webp",
  },
];

export function getPortfolioImageSrc(imageUrl?: string) {
  return imageUrl || FALLBACK_IMAGE;
}

export function handlePortfolioImageError(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget;
  if (img.src.endsWith(FALLBACK_IMAGE)) return;
  img.src = FALLBACK_IMAGE;
}
