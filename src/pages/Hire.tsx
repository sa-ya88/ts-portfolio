import { Link } from "react-router-dom";

const prices = [
  {
    title: "WordPress 店舗・コーポレートサイト",
    price: "10〜40万円",
    note: "ページ数・デザインの有無・更新機能の範囲により変動します。",
  },
  {
    title: "既存サイト / システムの改修",
    price: "3万円〜 または 時間単価",
    note: "調査後に概算をお出しします。小規模な修正から段階的な改修まで対応します。",
  },
  {
    title: "業務 Web システム",
    price: "50〜150万円",
    note: "画面数、外部連携、権限、帳票の有無などで大きく変わります。要件ヒアリング後に見積します。",
  },
  {
    title: "保守・運用",
    price: "月額 1〜5万円",
    note: "更新代行、障害一次対応、小さな改修の枠を月額で持つ場合の目安です。",
  },
  {
    title: "時間単価",
    price: "2,000〜5,000円 / 時間",
    note: "調査・スポット改修・技術相談向けです。税別・目安です。",
  },
];

const steps = [
  { title: "お問い合わせ", body: "概要・希望時期・予算感をフォームまたはメールでください。2営業日以内に返信します。" },
  { title: "ヒアリング", body: "オンラインで現状とゴールを確認します。資料があれば共有ください。" },
  { title: "概算見積", body: "範囲・スケジュール・概算金額をご提示します。この時点では契約は発生しません。" },
  { title: "ご契約", body: "業務委託契約のうえ着手します。秘密保持が必要な場合は事前にご相談ください。" },
  { title: "開発と共有", body: "週次など定期的に進捗を共有し、確認しながら進めます。" },
  { title: "納品・検収", body: "動作確認のうえ納品します。必要であれば保守契約へ移行できます。" },
];

export default function Hire() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Hire</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800">仕事の依頼について</h1>
      <p className="mt-4 leading-relaxed text-gray-500">
        リモート中心で、個人の業務委託として受けています。金額はすべて税別の目安です。範囲が決まっていなくても、まずはご相談ください。
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">料金目安</h2>
        <div className="mt-4 space-y-3">
          {prices.map((item) => (
            <article key={item.title} className="rounded-2xl border border-gray-100 bg-white p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm font-bold text-orange-800/80">{item.price}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-800">進め方</h2>
        <ol className="mt-4 space-y-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-orange-800/80">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold text-gray-800">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-5">
          <h2 className="font-bold text-gray-800">対応しやすいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>Laravel / PHP の新規・改修</li>
            <li>管理画面・予約・会員などの業務機能</li>
            <li>WordPress の店舗・コーポレートサイト</li>
            <li>SQL / DB まわりの調査と改善</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5">
          <h2 className="font-bold text-gray-800">事前にご相談ください</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>客先常駐での作業（札幌市内のみスポットで客先作業することは可能です）</li>
            <li>デザインからの新規ブランドサイト</li>
            <li>アプリのネイティブ開発</li>
            <li>納期が極端に短い大規模開発</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/achievements"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-800 px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
        >
          実績を見る
        </Link>
        <Link
          to="/portfolio"
          className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-800 px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
        >
          ポートフォリオ
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-2xl bg-gray-800 px-6 py-3 text-sm font-bold text-white hover:bg-gray-700"
        >
          問い合わせフォームへ
        </Link>
      </div>
    </main>
  );
}
