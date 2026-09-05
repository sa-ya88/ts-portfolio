import { Link, Navigate } from "react-router-dom";
import { formatPeriod, getAchievement } from "../data/achievements";
import { handlePortfolioImageError } from "../data/portfolio";

const photos = [
  {
    src: "/images/achievements/kinder-system/login.webp",
    alt: "ログイン画面",
    caption: "ログイン画面",
  },
  {
    src: "/images/achievements/kinder-system/attendance.webp",
    alt: "登園・降園の記録画面",
    caption: "登園・降園の記録画面",
  },
  {
    src: "/images/achievements/kinder-system/list.webp",
    alt: "園児一覧画面",
    caption: "園児一覧画面",
  },
  {
    src: "/images/achievements/kinder-system/admin.webp",
    alt: "全体管理画面",
    caption: "全体管理画面",
  }
];

export default function KinderSystem() {
  const item = getAchievement("kinder-system");

  if (!item) {
    return <Navigate to="/achievements" replace />;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link to="/achievements" className="text-sm font-bold text-coral hover:text-coral-dark">
        ← 実績一覧
      </Link>

      <p className="mt-6 text-xs font-bold tracking-wider text-ink/40">
        {formatPeriod(item)} / {item.industry}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">{item.title}</h1>
      <p className="mt-2 text-sm font-bold text-ink/50">役割: {item.role}</p>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">概要</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/75">
          既存システムの廃止に合わせ、登降園の記録・確認ができる仕組みを新規に設計・実装しました。従来どおりQRコード打刻での記録に対応し、要件ヒアリングからデータベース構築、園への導入までを担当しています。守秘義務のため、園名や個人が特定できる情報は掲載していません。画面は公開可能な範囲のイメージです。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">画面</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.src} className="card-pop overflow-hidden">
              <div className="aspect-video bg-cream">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  onError={handlePortfolioImageError}
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-bold text-ink">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-2 text-xs font-bold text-ink/50">※画面上のデータはテスト時の仮データです。</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">担当</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
          <li>現行業務のヒアリングと要件整理</li>
          <li>システムの設計と実装</li>
          <li>データベースの設計・構築</li>
          <li>客先導入と継続保守</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">課題と対応</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
          <li>稼働中システムの廃止期限に間に合わせること</li>
          <li>現場の運用に合わせ、入力負担を増やしすぎないこと</li>
          <li>シンプルで操作しやすいUI/UX設計を行うこと</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">技術</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["PHP", "MySQL"].map((tag) => (
                <li key={tag} className="chip-pop">
                  {tag}
                </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">結果</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
          <li>新システムへ移行し、登降園の記録を継続できる状態にした</li>
          <li>導入後も保守運用を継続している</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link to="/achievements" className="btn-pop-outline">
          実績へ戻る
        </Link>
      </div>
    </main>
  );
}
