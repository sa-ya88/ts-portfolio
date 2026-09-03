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
      <Link to="/achievements" className="text-sm font-bold text-gray-400 hover:text-gray-600">
        ← 実績一覧
      </Link>

      <p className="mt-6 text-xs font-bold tracking-wider text-gray-400">
        {formatPeriod(item)} / {item.industry}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800">{item.title}</h1>
      <p className="mt-2 text-sm font-bold text-gray-500">役割: {item.role}</p>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">概要</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          既存システムの廃止に合わせ、登降園の記録・確認ができる仕組みを新規に設計・実装しました。従来どおりQRコード打刻での記録に対応し、要件ヒアリングからデータベース構築、園への導入までを担当しています。守秘義務のため、園名や個人が特定できる情報は掲載していません。画面は公開可能な範囲のイメージです。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">画面</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white">
              <div className="aspect-video bg-gray-50">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                  onError={handlePortfolioImageError}
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-bold text-gray-600">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p>※画面上のデータはテスト時の仮データです。</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">担当</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
          <li>現行業務のヒアリングと要件整理</li>
          <li>システムの設計と実装</li>
          <li>データベースの設計・構築</li>
          <li>客先導入と継続保守</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">課題と対応</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
          <li>稼働中システムの廃止期限に間に合わせること</li>
          <li>現場の運用に合わせ、入力負担を増やしすぎないこと</li>
          <li>シンプルで操作しやすいUI/UX設計を行うこと</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">技術</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {["PHP", "MySQL"].map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-orange-100 bg-orange-50/80 px-3 py-1 text-xs font-bold text-orange-800/60"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">結果</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
          <li>新システムへ移行し、登降園の記録を継続できる状態にした</li>
          <li>導入後も保守運用を継続している</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/achievements"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-800 px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
        >
          実績へ戻る
        </Link>
      </div>
    </main>
  );
}
