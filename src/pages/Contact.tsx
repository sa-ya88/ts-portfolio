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

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Contact</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-800">お問い合わせ</h1>
      <p className="mt-4 leading-relaxed text-gray-500">
        2営業日以内を目安に返信します。返信は
        <a href={`mailto:${CONTACT_EMAIL}`} className="mx-1 font-bold text-gray-700 underline">
          {CONTACT_EMAIL}
        </a>
        から行います。
      </p>

      {status === "sent" ? (
        <div className="mt-10 rounded-2xl border border-orange-100 bg-orange-50/60 p-6">
          <p className="font-bold text-gray-800">送信ありがとうございました。</p>
          <p className="mt-2 text-sm text-gray-500">内容を確認のうえ、ご入力のメールアドレスへご連絡します。</p>
          <button
            type="button"
            className="mt-4 text-sm font-bold text-orange-800/80 hover:underline"
            onClick={() => setStatus("idle")}
          >
            別の内容を送る
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-[2rem] border border-gray-100 bg-white p-5 sm:p-8">
          <Field label="お名前" required>
            <input
              required
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              className={inputClass}
              autoComplete="name"
            />
          </Field>
          <Field label="メールアドレス" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              className={inputClass}
              autoComplete="email"
            />
          </Field>
          <Field label="会社名・屋号">
            <input
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
          <Field label="希望納期">
            <input
              value={form.deadline}
              onChange={(event) => update("deadline", event.target.value)}
              className={inputClass}
              placeholder="例: 2026年11月頃 / 急ぎ / 未定"
            />
          </Field>
          <Field label="ご相談内容" required>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              className={`${inputClass} resize-y`}
              placeholder="現状、実現したいこと、既存システムの有無など"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-2xl bg-gray-800 px-6 py-4 text-sm font-bold tracking-widest text-white shadow-lg transition-all hover:bg-gray-700 disabled:opacity-60"
          >
            {status === "sending" ? "送信中…" : "送信する"}
          </button>
        </form>
      )}
    </main>
  );
}

const inputClass =
  "w-full rounded-2xl border border-gray-200 bg-[#FAF9F6] px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:border-orange-200 focus:bg-white";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wider text-gray-500">
        {label}
        {required && <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] text-orange-800/70">必須</span>}
      </span>
      {children}
    </label>
  );
}
