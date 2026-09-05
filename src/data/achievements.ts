export interface Achievement {
  slug: string;
  title: string;
  startedAt: string;
  endedAt?: string;
  industry: string;
  role: string;
  summary: string;
  stack: string[];
  overview?: string;
  responsibilities?: string[];
  challenges?: string[];
  outcomes?: string[];
  hasDetailPage?: boolean;
}

function formatYearMonth(value: string) {
  const [year, month] = value.split("-");
  return `${year}年${Number(month)}月`;
}

export function formatPeriod(item: Achievement) {
  const start = formatYearMonth(item.startedAt);
  if (!item.endedAt) return `${start}〜継続`;
  return `${start}〜${formatYearMonth(item.endedAt)}`;
}

export function hasOverview(item: Achievement) {
  return Boolean(item.overview?.trim());
}

export function hasDetailPage(item: Achievement) {
  return Boolean(item.hasDetailPage || hasOverview(item));
}

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}

export const achievements: Achievement[] = [
  {
    slug: "kinder-system",
    title: "保育園登降園システムの移行、新規開発・保守運用",
    startedAt: "2025-04",
    industry: "医療・福祉",
    role: "ヒアリング・調査・設計・開発・DB構築・客先導入",
    summary:
      "稼働中のシステムの廃止に伴い、新システムの設計から実地導入まで対応しました。継続して保守運用を行っています。",
    stack: ["PHP", "MySQL", "Cursor AI", "Github Copilot"],
    hasDetailPage: true,
  },
  {
    slug: "kinder-server",
    title: "保育園ホームページのサーバー移行不具合対応",
    startedAt: "2025-06",
    endedAt: "2025-07",
    industry: "医療・福祉",
    role: "調査・修正・機能追加・セキュリティ対策",
    summary:
      "レンタルサーバーの廃止に伴い自動移管されたサイトがエラーを起こしていたため、不具合調査と対応、セキュリティ強化などを行いました。",
    stack: ["WordPress", "Lightning", "PHP", "MySQL"],
  },
];
