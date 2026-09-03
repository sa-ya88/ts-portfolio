import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "../data/site";

const links = [
  { to: "/about", label: "自己紹介", body: "経歴と扱ってきた技術" },
  { to: "/achievements", label: "実績", body: "守秘の範囲で公開できる実務" },
  { to: "/portfolio", label: "ポートフォリオ", body: "公開しているデモサイト" },
  { to: "/hire", label: "仕事の依頼", body: "料金目安と進め方" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Home</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">TACHIBANA PORTFOLIO</h1>
      <p className="mt-2 text-sm font-bold tracking-wider text-gray-400">System Engineer</p>
      <p className="mt-6 leading-relaxed text-gray-500">
        業務システムと Web サイトの設計・実装を行っています。既存システムの改修や保守運用、新規構築まで幅広く対応します。
      </p>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="rounded-[1.5rem] border border-gray-100 bg-white p-5 hover:border-orange-100 hover:bg-orange-50/40"
          >
            <p className="text-sm font-bold text-gray-800">{item.label}</p>
            <p className="mt-1 text-sm text-gray-500">{item.body}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-gray-800 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
        >
          お問い合わせ
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-400 hover:text-gray-600">
          {CONTACT_EMAIL}
        </a>
      </div>
    </main>
  );
}
