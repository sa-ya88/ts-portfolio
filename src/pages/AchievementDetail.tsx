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
        <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.overview}</p>
      </section>

      {item.responsibilities && item.responsibilities.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">担当</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
            {item.responsibilities.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {item.challenges && item.challenges.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">課題と対応</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
            {item.challenges.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold text-ink">技術</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.stack.map((tag) => (
                <li key={tag} className="chip-pop">
                  {tag}
                </li>
          ))}
        </ul>
      </section>

      {item.outcomes && item.outcomes.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-ink">結果</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/75">
            {item.outcomes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link to="/portfolio" className="btn-pop-outline">
          ポートフォリオを見る
        </Link>
        <Link to="/contact" className="btn-pop">
          問い合わせる
        </Link>
      </div>
    </main>
  );
}
