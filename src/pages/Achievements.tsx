import { Link } from "react-router-dom";
import { achievements, formatPeriod, hasDetailPage } from "../data/achievements";

export default function Achievements() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Experience</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800">実績</h1>
      <p className="mt-4 leading-relaxed text-gray-500">
        守秘義務のため公開できる範囲の情報を掲載しています。概要がある案件は個別ページで詳しく見られます。公開できるデモは
        <Link to="/portfolio" className="mx-1 font-bold text-gray-700 underline">
          ポートフォリオ
        </Link>
        を見てください。
      </p>

      <div className="mt-10 space-y-4">
        {achievements.map((item) => (
          <article key={item.slug} className="rounded-[2rem] border border-gray-100 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold tracking-wider text-gray-400">
              {formatPeriod(item)} / {item.industry}
            </p>
            <h2 className="mt-2 text-xl font-bold text-gray-800">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.summary}</p>
            <p className="mt-2 text-xs font-bold text-gray-400">役割: {item.role}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.slice(0, 4).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-orange-100 bg-orange-50/80 px-3 py-1 text-xs font-bold text-orange-800/60"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {hasDetailPage(item) && (
              <Link
                to={`/achievements/${item.slug}`}
                className="mt-6 inline-flex text-sm font-bold text-gray-800 hover:text-orange-800/80"
              >
                概要を詳しく見る →
              </Link>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
