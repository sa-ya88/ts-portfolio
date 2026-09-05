import { Link } from "react-router-dom";
import { achievements, formatPeriod, hasDetailPage } from "../data/achievements";

const tones = ["border-l-coral", "border-l-sky", "border-l-mint", "border-l-violet", "border-l-sun"];

export default function Achievements() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <p className="eyebrow">Experience</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">実績</h1>
      <p className="mt-4 leading-relaxed text-ink/70">
        守秘義務のため公開できる範囲の情報を掲載しています。概要がある案件は個別ページで詳しく見られます。公開できるデモは
        <Link to="/portfolio" className="mx-1 font-bold text-coral underline underline-offset-4">
          ポートフォリオ
        </Link>
        を見てください。
      </p>

      <div className="mt-10 space-y-4">
        {achievements.map((item, index) => (
          <article key={item.slug} className={`card-pop border-l-4 p-6 sm:p-8 ${tones[index % tones.length]}`}>
            <p className="text-xs font-bold tracking-wider text-ink/40">
              {formatPeriod(item)} / {item.industry}
            </p>
            <h2 className="mt-2 text-xl font-bold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.summary}</p>
            <p className="mt-2 text-xs font-bold text-ink/45">役割: {item.role}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.slice(0, 4).map((tag) => (
                <li key={tag} className="chip-pop">
                  {tag}
                </li>
              ))}
            </ul>
            {hasDetailPage(item) && (
              <Link to={`/achievements/${item.slug}`} className="mt-6 inline-flex text-sm font-bold text-coral hover:text-coral-dark">
                概要を詳しく見る →
              </Link>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
