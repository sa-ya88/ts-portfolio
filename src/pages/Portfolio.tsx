import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { getPortfolioImageSrc, handlePortfolioImageError, portfolioItems } from "../data/portfolio";

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Portfolio</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800">ポートフォリオ</h1>
      <p className="mt-4 leading-relaxed text-gray-500">
        以下は公開用に開発したデモサイトです。情報・画像はポートフォリオ用の架空データですが、設計と実装は実務相当の構成にしています。
        実際に触って操作できるようにしているため、好きにいじって構いません（データは数時間ごとに初期化されます）。
        <br />
        実務の概要は
        <Link to="/achievements" className="mx-1 font-bold text-gray-700 underline">
          実績
        </Link>
        にまとめています。
      </p>

      <div className="mt-10 grid gap-8">
        {portfolioItems.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[minmax(0,18rem)_1fr]">
              <div className="aspect-video bg-gray-50 lg:aspect-auto lg:min-h-full">
                <img
                  src={getPortfolioImageSrc(item.imageUrl)}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  onError={handlePortfolioImageError}
                />
              </div>
              <div className="space-y-4 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-sm leading-relaxed text-gray-500">{item.details}</p>
                <p className="text-xs font-bold tracking-wider text-gray-400">主な作業: {item.role}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="rounded-full bg-gray-50 px-3 py-1 text-xs font-bold text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-orange-100 bg-orange-50/80 px-3 py-1 text-xs font-bold text-orange-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(item.url || item.githubUrl) && (
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl bg-gray-800 px-5 py-3 text-sm font-bold text-white hover:bg-gray-700"
                      >
                        サイトを見る
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-800 px-5 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
                      >
                        <FaGithub />
                        ソースコード
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

    </main>
  );
}
