import { useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_EMAIL } from "../data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  type: string;
  budget: string;
  deadline: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  type: "サイト制作",
  budget: "未定・相談したい",
  deadline: "",
  message: "",
};

const LIMITS = {
  name: 50,
  email: 254,
  company: 100,
  deadline: 40,
  message: 1000,
} as const;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "confirming" | "sending" | "sent">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    const limit = key in LIMITS ? LIMITS[key as keyof typeof LIMITS] : undefined;
    const next = typeof value === "string" && limit != null ? value.slice(0, limit) : value;
    setForm((current) => ({ ...current, [key]: next }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("confirming");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function sendForm() {
    setStatus("sending");

    const payload = {
      name: form.name,
      email: form.email,
      company: form.company,
      type: form.type,
      budget: form.budget,
      deadline: form.deadline,
      message: form.message,
      _subject: `【ポートフォリオ】${form.type}の相談 / ${form.name}`,
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...payload, _captcha: "false" }),
      });

      if (!response.ok) throw new Error("submit failed");
      setStatus("sent");
      setForm(initialForm);
    } catch {
      const body = [
        `お名前: ${form.name}`,
        `メール: ${form.email}`,
        `会社名: ${form.company || "（なし）"}`,
        `依頼種別: ${form.type}`,
        `ご予算: ${form.budget}`,
        `希望納期: ${form.deadline || "（未記入）"}`,
        "",
        form.message,
      ].join("\n");

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        payload._subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink">お問い合わせ</h1>
      <p className="mt-4 leading-relaxed text-ink/70">
        3日以内を目安に返信します。返信は
        <a href={`mailto:${CONTACT_EMAIL}`} className="mx-1 font-bold text-coral underline underline-offset-4">
          {CONTACT_EMAIL}
        </a>
        から行います。
      </p>

      {status === "sent" ? (
        <div className="card-pop mt-10 border-l-4 border-l-mint p-6">
          <p className="font-bold text-ink">送信ありがとうございました。</p>
          <p className="mt-2 text-sm text-ink/60">内容を確認のうえ、ご入力のメールアドレスへご連絡します。</p>
          <button
            type="button"
            className="mt-4 text-sm font-bold text-coral hover:underline"
            onClick={() => setStatus("idle")}
          >
            別の内容を送る
          </button>
        </div>
      ) : status === "confirming" || status === "sending" ? (
        <div className="card-pop mt-10 space-y-5 p-5 sm:p-8">
          <div>
            <p className="text-lg font-bold text-ink">送信内容の確認</p>
            <p className="mt-1 text-sm text-ink/60">内容に問題なければ「この内容で送信する」を押してください。</p>
          </div>
          <dl className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-cream/80">
            <ConfirmRow label="お名前" value={form.name} />
            <ConfirmRow label="メールアドレス" value={form.email} />
            <ConfirmRow label="会社名・屋号" value={form.company || "（なし）"} />
            <ConfirmRow label="依頼種別" value={form.type} />
            <ConfirmRow label="ご予算" value={form.budget} />
            <ConfirmRow label="希望納期" value={form.deadline || "（未記入）"} />
            <ConfirmRow label="ご相談内容" value={form.message} multiline />
          </dl>
          <div className="flex flex-col gap-3 sm:flex-row-reverse">
            <button
              type="button"
              disabled={status === "sending"}
              onClick={() => void sendForm()}
              className="btn-pop w-full px-6 py-4 tracking-widest disabled:opacity-60 sm:w-auto sm:min-w-56"
            >
              {status === "sending" ? "送信中…" : "この内容で送信する"}
            </button>
            <button
              type="button"
              disabled={status === "sending"}
              onClick={() => setStatus("idle")}
              className="btn-pop-outline w-full px-6 py-4 tracking-widest disabled:opacity-60 sm:w-auto sm:min-w-40"
            >
              修正する
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card-pop mt-10 space-y-5 p-5 sm:p-8">
          <Field label="お名前" required currentLength={form.name.length} maxLength={LIMITS.name}>
            <input
              required
              maxLength={LIMITS.name}
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              className={inputClass}
              autoComplete="name"
            />
          </Field>
          <Field label="メールアドレス" required currentLength={form.email.length} maxLength={LIMITS.email}>
            <input
              required
              type="email"
              maxLength={LIMITS.email}
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              className={inputClass}
              autoComplete="email"
            />
          </Field>
          <Field label="会社名・屋号" currentLength={form.company.length} maxLength={LIMITS.company}>
            <input
              maxLength={LIMITS.company}
              value={form.company}
              onChange={(event) => update("company", event.target.value)}
              className={inputClass}
              autoComplete="organization"
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="依頼種別">
              <select value={form.type} onChange={(event) => update("type", event.target.value)} className={inputClass}>
                <option>サイト制作</option>
                <option>業務システム</option>
                <option>改修・保守</option>
                <option>その他</option>
              </select>
            </Field>
            <Field label="ご予算">
              <select value={form.budget} onChange={(event) => update("budget", event.target.value)} className={inputClass}>
                <option>未定・相談したい</option>
                <option>10万円未満</option>
                <option>10〜30万円</option>
                <option>30〜80万円</option>
                <option>80万円以上</option>
              </select>
            </Field>
          </div>
          <Field label="希望納期" currentLength={form.deadline.length} maxLength={LIMITS.deadline}>
            <input
              maxLength={LIMITS.deadline}
              value={form.deadline}
              onChange={(event) => update("deadline", event.target.value)}
              className={inputClass}
              placeholder="例: 2026年11月頃 / 急ぎ / 未定"
            />
          </Field>
          <Field label="ご相談内容" required currentLength={form.message.length} maxLength={LIMITS.message}>
            <textarea
              required
              rows={6}
              maxLength={LIMITS.message}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              className={`${inputClass} resize-y`}
              placeholder="現状、実現したいこと、既存システムの有無など"
            />
          </Field>

          <button
            type="submit"
            className="btn-pop w-full px-6 py-4 tracking-widest"
          >
            送信する
          </button>
        </form>
      )}
    </main>
  );
}

const inputClass =
  "w-full rounded-2xl border border-ink/12 bg-cream/70 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-coral/50 focus:bg-white";

function ConfirmRow({
  label,
  value,
  multiline,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="px-4 py-3 sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-4 sm:px-5">
      <dt className="text-xs font-bold tracking-wider text-coral">{label}</dt>
      <dd className={`mt-1 text-sm text-ink sm:mt-0 ${multiline ? "whitespace-pre-wrap leading-relaxed" : ""}`}>
        {value}
      </dd>
    </div>
  );
}

function Field({
  label,
  required,
  currentLength,
  maxLength,
  children,
}: {
  label: string;
  required?: boolean;
  currentLength?: number;
  maxLength?: number;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-ink/60">
        {label}
        {required && <span className="rounded-full bg-coral/12 px-2 py-0.5 text-[10px] text-coral-dark">必須</span>}
        {maxLength != null && currentLength != null && (
          <span className={`ml-auto font-medium tabular-nums ${currentLength >= maxLength ? "text-coral" : "text-ink/35"}`}>
            {currentLength}/{maxLength}
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
