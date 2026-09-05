import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../data/site";

const links = [
  { to: "/about", label: "自己紹介", body: "経歴と扱ってきた技術", tone: "from-coral/70 to-sun/80" },
  { to: "/achievements", label: "実績", body: "守秘の範囲で公開できる実務", tone: "from-sky/70 to-mint/70" },
  { to: "/portfolio", label: "ポートフォリオ", body: "公開しているデモサイト", tone: "from-violet/70 to-sky/70" },
  // { to: "/hire", label: "仕事の依頼", body: "料金目安と進め方" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <p className="eyebrow">Home</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-5xl">
        <span className="text-coral">TACHIBANA</span> PORTFOLIO
      </h1>
      <p className="mt-2 text-sm font-bold tracking-wider text-ink/40">System Engineer</p>
      <p className="mt-6 leading-relaxed text-ink/70">
        業務システムと Web サイトの設計・実装を行っています。既存システムの改修や保守運用、新規構築まで幅広く対応します。
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="card-pop overflow-hidden p-5 transition hover:border-coral/25"
          >
            <span className={`mb-3 block h-1 w-12 rounded-full bg-gradient-to-r ${item.tone}`} />
            <p className="text-sm font-bold text-ink">{item.label}</p>
            <p className="mt-1 text-sm text-ink/60">{item.body}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link to="/contact" className="btn-pop">
          お問い合わせ
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-ink/45 hover:text-coral">
          {CONTACT_EMAIL}
        </a>
      </div>
    </main>
  );
}
