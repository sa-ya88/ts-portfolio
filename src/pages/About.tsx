import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <p className="eyebrow">About</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">自己紹介</h1>
      <p className="mt-4 leading-relaxed text-ink/70">
        橘　咲綾
      </p>
      <p className="mt-4 leading-relaxed text-ink/70">
        北海道札幌市に居住。<br />
        ２５歳の頃に地方公務員からIT業界へ転職。テストから実装・要件定義までを経験し、クレジットカード会社の社内SEへ転職。
        社内システムの開発業務（DX化）を中心に、PCのキッティング作業やファイルサーバー管理なども行っていました。
        その後、知人の紹介で仕事を受けることになり、フリーランスへ転身。エンジニア歴は計５年になります。
      </p>
      <p className="mt-4 leading-relaxed text-ink/70">
        フロントエンドからバックエンドまで、業務システムと Web サイトの設計・実装を行っています。既存システムの改修や保守運用、システムの構築まで幅広く対応します。
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-bold text-ink">今まで対応した要望</h2>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-ink/75">
          <li>現在使っているシステムの委託会社が撤退するため、システムを刷新し、保守してほしい。</li>
          <li>現在使っているレンタルサーバーが廃止され移行したが、うまく機能しないので直してほしい。</li>
          <li>Excelで管理している顧客情報をシステム化して管理しやすくしたい。</li>
          <li>単純作業を効率化したいが、大規模なシステムはいらないので、VBA、Access等を使って業務時間を短縮してほしい。</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-bold text-ink">実務で扱ってきた内容</h2>
        <ul className="list-disc space-y-2 pl-5 leading-relaxed text-ink/75">
          <li>コーポレートサイトの保守運用・サーバー移行（WordPress）</li>
          <li>社内システムの移行、新システムの構築・導入（Laravel、VB.net）</li>
          <li>在庫管理システムの機能追加、統合テスト（Java、Spring Boot）</li>
          <li>MySQL / PostgreSQL / SQL Server などを使ったデータ設計と SQL</li>
          <li>Docker（WSL2）、VMware ESXi、レンタルサーバー上での構築・運用</li>
          <li>VBA を含む、既存業務の効率化（DX化）</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-bold text-ink">いま受けたい仕事</h2>
        <p className="leading-relaxed text-ink/75">
          中小規模の業務システム（在庫・会員・管理画面）や既存システムの構築・改修、店舗・コーポレートサイトの構築や保守運用を中心に受けています。要件が固まっていない段階の作業も可能です。
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-bold text-ink">経験技術</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <Skill label="OS / Env" value="Docker（WSL2）/ VMware ESXI / Windows Server 2019,2022" />
          <Skill label="Editor" value="VS Code / Ecripse / A5SQL" />
          <Skill label="Language" value="TypeScript / PHP / VBA / Java / SQL" />
          <Skill label="FW" value="Laravel / SpringBoot / Vue.js" />
          <Skill label="DB" value="PostgreSQL / MySQL / SQLServer / Dr.Sum / Access" />
          <Skill label="Infra" value="Github / ロリポップ！ / XServer / WADAX" />
          <Skill label="Tool" value="WinSCP / WinMarge / GitBash / ChatGPT / Gemini / Cursor AI / Github Copilot" />
          <Skill label="ChatTool" value="Backlog / Redmine / Chatwork / Slack / Office365 / Zoom / Teams" />
        </dl>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-bold text-ink">資格</h2>
        <ul className="space-y-2 text-ink/75">
          <li>2023/11 基本情報技術者試験</li>
          <li>2022/04 Oracle Database 19c ORACLE MASTER Silver DBA 2019</li>
          <li>2022/01 Oracle Certified Java Programmer Gold SE 11</li>
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        {/* <Link
          to="/hire"
          className="btn-pop-outline"
        >
          仕事の依頼について
        </Link> */}
        <Link to="/contact" className="btn-pop">
          お問い合わせ
        </Link>
      </div>
    </main>
  );
}

function Skill({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-pop p-4">
      <dt className="text-[10px] font-bold uppercase tracking-wider text-coral">{label}</dt>
      <dd className="mt-1 text-sm font-bold text-ink">{value}</dd>
    </div>
  );
}
