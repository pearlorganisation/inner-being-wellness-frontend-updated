"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Save, Copy, Check, Leaf } from "lucide-react";
import { reflectionsPage } from "@/data/reflectionsData";

/* Tailwind ko static class names chahiye, isliye accent -> classes ka map */
const ACCENTS = {
  gold: {
    text: "text-[#B88B4A]",
    bar: "bg-[#B88B4A]",
    focus:
      "focus-within:border-[#B88B4A]/60 focus-within:shadow-[0_18px_45px_-18px_rgba(184,139,74,0.45)]",
  },
  cyan: {
    text: "text-[#0E6E6B]",
    bar: "bg-[#0E6E6B]",
    focus:
      "focus-within:border-[#0E6E6B]/50 focus-within:shadow-[0_18px_45px_-18px_rgba(14,110,107,0.40)]",
  },
  amber: {
    text: "text-[#C5A265]",
    bar: "bg-[#C5A265]",
    focus:
      "focus-within:border-[#C5A265]/60 focus-within:shadow-[0_18px_45px_-18px_rgba(197,162,101,0.45)]",
  },
  emerald: {
    text: "text-[#2F6F5B]",
    bar: "bg-[#2F6F5B]",
    focus:
      "focus-within:border-[#2F6F5B]/50 focus-within:shadow-[0_18px_45px_-18px_rgba(47,111,91,0.40)]",
  },
};

/* Scroll karte hi element fade-up hota hai */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Likhte waqt textarea apne aap bada hota hai */
function AutoTextarea({ value, ...props }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [value]);
  return <textarea ref={ref} value={value} {...props} />;
}

export default function ReflectionsPage() {
  const { hero, inquiries, form } = reflectionsPage;

  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const timer = useRef(null);

  /* saved answers load (sirf client par) */
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(form.storageKey);
      if (raw) setAnswers(JSON.parse(raw));
    } catch {
      /* storage blocked ho to ignore */
    }
    return () => clearTimeout(timer.current);
  }, [form.storageKey]);

  const flash = (type, text) => {
    clearTimeout(timer.current);
    setStatus({ type, text });
    timer.current = setTimeout(
      () => setStatus({ type: "idle", text: "" }),
      2600
    );
  };

  const answeredCount = inquiries.filter((q) => answers[q.id]?.trim()).length;
  const progress = Math.round((answeredCount / inquiries.length) * 100);
  const hasContent = answeredCount > 0;

  const handleChange = (id, value) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const handleSave = () => {
    try {
      sessionStorage.setItem(form.storageKey, JSON.stringify(answers));
      flash("saved", form.messages.saved);
    } catch {
      flash("error", form.messages.error);
    }
  };

  const handleCopy = async () => {
    if (!hasContent) {
      flash("error", form.messages.empty);
      return;
    }
    const text =
      `${hero.title}\n\n` +
      inquiries
        .map(
          (q, i) => `${i + 1}. ${q.question}\n${answers[q.id]?.trim() || "-"}`
        )
        .join("\n\n");

    try {
      await navigator.clipboard.writeText(text);
      flash("copied", form.messages.copied);
    } catch {
      flash("error", form.messages.error);
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#FBF9F5] text-[#2D1C59]">
      <style>{`
        @keyframes rp-up { from { opacity: 0; transform: translateY(26px) } to { opacity: 1; transform: none } }
        @keyframes rp-float { 0%,100% { transform: translateY(0) rotate(var(--r)) } 50% { transform: translateY(-16px) rotate(calc(var(--r) + 8deg)) } }
        @keyframes rp-blob { 0%,100% { transform: translate(0,0) scale(1) } 50% { transform: translate(18px,-14px) scale(1.08) } }
        @keyframes rp-pop { 0% { transform: scale(0) } 70% { transform: scale(1.25) } 100% { transform: scale(1) } }
        @keyframes rp-shine { from { transform: translateX(-140%) skewX(-12deg) } to { transform: translateX(380%) skewX(-12deg) } }
        @keyframes rp-line { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .rp-up { animation: rp-up .9s cubic-bezier(.22,1,.36,1) both }
        .rp-line { transform-origin: center; animation: rp-line .9s .1s cubic-bezier(.22,1,.36,1) both }
        .rp-pop { animation: rp-pop .35s ease-out both }
        .rp-btn:hover .rp-shine { animation: rp-shine .8s ease }
        @media (prefers-reduced-motion: reduce) {
          .rp-up, .rp-line, .rp-pop, .rp-float, .rp-blob, .rp-btn:hover .rp-shine { animation: none !important }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-none border-[#2D1C59]/10 bg-[#FAF7F2] px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        {/* animated blobs */}
        <div
          className="rp-blob pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#E4ECE6] blur-3xl sm:h-80 sm:w-80"
          style={{ animation: "rp-blob 14s ease-in-out infinite" }}
        />
        <div
          className="rp-blob pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#F3E6C8] blur-3xl sm:h-72 sm:w-72"
          style={{ animation: "rp-blob 16s ease-in-out infinite reverse" }}
        />

        {/* floating leaves */}
        <Leaf
          aria-hidden="true"
          className="rp-float pointer-events-none absolute left-[6%] top-16 h-8 w-8 text-[#2F6F5B]/50 sm:h-12 sm:w-12"
          style={{ "--r": "-20deg", animation: "rp-float 9s ease-in-out infinite" }}
        />
        <Leaf
          aria-hidden="true"
          className="rp-float pointer-events-none absolute right-[8%] top-24 h-7 w-7 text-[#B88B4A]/60 sm:h-10 sm:w-10"
          style={{ "--r": "35deg", animation: "rp-float 11s ease-in-out infinite" }}
        />
        <Leaf
          aria-hidden="true"
          className="rp-float pointer-events-none absolute bottom-10 right-[18%] hidden h-9 w-9 text-[#13382C]/40 sm:block"
          style={{ "--r": "120deg", animation: "rp-float 10s ease-in-out infinite" }}
        />
        <Leaf
          aria-hidden="true"
          className="rp-float pointer-events-none absolute bottom-12 left-[16%] hidden h-8 w-8 text-[#2F6F5B]/40 sm:block"
          style={{ "--r": "200deg", animation: "rp-float 12s ease-in-out infinite" }}
        />

        <div className="relative mx-auto max-w-3xl space-y-4 sm:space-y-5">
          <div className="rp-up inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-[#B88B4A] sm:text-xs">
            <span className="rp-line h-px w-6 bg-[#B88B4A] sm:w-8" />
            {hero.badge}
            <span className="rp-line h-px w-6 bg-[#B88B4A] sm:w-8" />
          </div>

          <h1
            className="rp-up font-serif text-4xl leading-[1.1] text-[#2D1C59] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            {hero.title}
          </h1>

          <p
            className="rp-up mx-auto max-w-2xl text-base leading-relaxed text-[#475A51] sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {hero.description}
          </p>
        </div>
      </section>

      {/* ================= INQUIRIES ================= */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-5 sm:space-y-6">
          {inquiries.map((q, i) => {
            const number = String(i + 1).padStart(2, "0");
            const fieldId = `reflection-${q.id}`;
            const accent = ACCENTS[q.accent] || ACCENTS.gold;
            const answered = Boolean(answers[q.id]?.trim());

            return (
              <Reveal key={q.id} delay={(i % 2) * 90}>
                <article
                  className={`group relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none sm:p-8 ${accent.focus}`}
                >
                  {/* animated left accent bar */}
                  <span
                    className={`absolute inset-y-0 left-0 w-1 origin-top scale-y-0 transition-transform duration-500 group-focus-within:scale-y-100 group-hover:scale-y-100 ${accent.bar}`}
                  />

                  {/* big watermark number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 right-4 select-none font-serif text-8xl font-bold leading-none text-[#2D1C59]/[0.04] transition-transform duration-700 group-hover:-translate-y-2 sm:text-9xl"
                  >
                    {number}
                  </span>

                  <div className="relative">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 sm:mb-4">
                      <span
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${accent.text}`}
                      >
                        {form.inquiryLabel} {number}
                        {answered && (
                          <span className="rp-pop inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#2F6F5B] text-white">
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-[#61746B]">
                        {q.category}
                      </span>
                    </div>

                    <label
                      htmlFor={fieldId}
                      className="mb-4 block font-serif text-xl leading-snug text-[#2D1C59] sm:text-2xl"
                    >
                      {i + 1}. {q.question}
                    </label>

                    <AutoTextarea
                      id={fieldId}
                      rows={4}
                      value={answers[q.id] || ""}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      placeholder={form.placeholder}
                      className="min-h-[120px] w-full resize-none overflow-hidden rounded-2xl border border-[#D8CFBF] bg-[#FAF7F2] p-4 text-sm leading-relaxed text-[#2D1C59] transition-all duration-300 placeholder:text-[#8A978F] focus:border-[#2D1C59]/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#2D1C59]/5 sm:text-base"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* ================= ACTIONS ================= */}
          <Reveal>
            <div className="space-y-5 pt-3">
              {/* progress */}
              <div className="flex items-center gap-3">
                <div
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#2D1C59]/10"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={inquiries.length}
                  aria-valuenow={answeredCount}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#B88B4A] to-[#2F6F5B] transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs font-semibold tabular-nums text-[#61746B]">
                  {answeredCount} / {inquiries.length}
                </span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs italic text-[#61746B]">
                  {form.privacyNote}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="rp-btn relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[#E8A84C] px-7 py-3 text-sm font-bold text-[#2D1C59] shadow-md shadow-[#E8A84C]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E8A84C]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1C59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F5] active:translate-y-0 motion-reduce:transform-none"
                  >
                    <span className="rp-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 -translate-x-[140%] bg-white/50" />
                    {status.type === "saved" ? (
                      <Check className="rp-pop h-4 w-4" strokeWidth={3} />
                    ) : (
                      <Save className="h-4 w-4" />
                    )}
                    <span className="relative">
                      {status.type === "saved"
                        ? form.buttons.saved
                        : form.buttons.save}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rp-btn relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-[#2D1C59]/20 bg-white px-7 py-3 text-sm font-bold text-[#2D1C59] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2D1C59]/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1C59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF9F5] active:translate-y-0 motion-reduce:transform-none"
                  >
                    <span className="rp-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 -translate-x-[140%] bg-[#2D1C59]/10" />
                    {status.type === "copied" ? (
                      <Check className="rp-pop h-4 w-4" strokeWidth={3} />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="relative">
                      {status.type === "copied"
                        ? form.buttons.copied
                        : form.buttons.copy}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TOAST ================= */}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-4 bottom-5 z-50 flex justify-center transition-all duration-500 ${
          status.text ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span
          className={`max-w-md rounded-full px-5 py-3 text-center text-sm font-medium shadow-xl ${
            status.type === "error"
              ? "bg-red-600 text-white"
              : "bg-[#2D1C59] text-white"
          }`}
        >
          {status.text}
        </span>
      </div>
    </div>
  );
}