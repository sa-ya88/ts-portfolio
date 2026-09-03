import { Link, Navigate, useParams } from "react-router-dom";
import { formatPeriod, getAchievement, hasOverview } from "../data/achievements";

export default function AchievementDetail() {
  const { slug } = useParams();
  const item = slug ? getAchievement(slug) : undefined;

  if (!item || !hasOverview(item)) {
    return <Navigate to="/achievements" replace />;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
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
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.overview}</p>
      </section>

      {item.responsibilities && item.responsibilities.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-800">担当</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            {item.responsibilities.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {item.challenges && item.challenges.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-800">課題と対応</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            {item.challenges.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">技術</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-orange-100 bg-orange-50/80 px-3 py-1 text-xs font-bold text-orange-800/60"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      {item.outcomes && item.outcomes.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-800">結果</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
            {item.outcomes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/portfolio"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-800 px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
        >
          ポートフォリオを見る
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-gray-800 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
        >
          問い合わせる
        </Link>
      </div>
    </main>
  );
}
