"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Stars from "./Stars";
import {
  submitFeedbackApi,
  getMyFeedbacksApi,
  rowsOf,
  errMsg,
  fmtDate,
} from "@/services/feedbackService";

const inputCls =
  "w-full rounded-xl border border-[#E2DCEB] bg-white px-4 py-3 text-sm text-[#2D1C59] outline-none transition focus:border-[#2D1C59] focus:ring-2 focus:ring-[#2D1C59]/10";

export default function CustomerFeedback() {
  const [loggedIn, setLoggedIn] = useState(null); // null = checking
  const [form, setForm] = useState({ rating: 0, title: "", comment: "" });
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState(null); // { type, text }
  const [mine, setMine] = useState([]);
  const [loadingMine, setLoadingMine] = useState(false);

  const loadMine = async () => {
    setLoadingMine(true);
    try {
      setMine(rowsOf(await getMyFeedbacksApi({ page: 1, limit: 20 })));
    } catch (e) {
      console.warn("My feedbacks load failed:", e);
    } finally {
      setLoadingMine(false);
    }
  };

  useEffect(() => {
    const has = !!localStorage.getItem("token");
    setLoggedIn(has);
    if (has) loadMine();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    if (form.rating < 1) return setMsg({ type: "error", text: "Please select a rating." });
    if (!form.comment.trim())
      return setMsg({ type: "error", text: "Please write your feedback." });

    setSubmitting(true);
    try {
      await submitFeedbackApi({
        rating: form.rating,
        ...(form.title.trim() ? { title: form.title.trim() } : {}),
        comment: form.comment.trim(),
      });
      setForm({ rating: 0, title: "", comment: "" });
      setMsg({
        type: "success",
        text: "Thank you! Your feedback will appear on the website after admin approval.",
      });
      loadMine();
    } catch (err) {
      setMsg({ type: "error", text: errMsg(err) });
    } finally {
      setSubmitting(false);
    }
  };

  if (loggedIn === null) return null;

  return (
    <section className="px-4 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-[#C5A265]">YOUR VOICE</p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,4.4vw,2.8rem)] leading-tight text-[#2D1C59]">
            Share Your Experience
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] text-[#4A5560]">
            Your feedback helps others begin their healing journey.
          </p>
        </div>

        {!loggedIn ? (
          <div className="mt-10 rounded-2xl bg-[#E9EEE3] px-6 py-8 text-center">
            <p className="text-sm text-[#4A5560]">Feedback dene ke liye please login karein.</p>
            <Link
              href="/login"
              className="mt-4 inline-block rounded-full bg-[#2D1C59] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3B2F66]"
            >
              Login
            </Link>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="mt-10 rounded-3xl bg-white p-6 shadow-[0_8px_24px_rgba(45,28,89,0.08)] sm:p-8"
            >
              {msg && (
                <div
                  className={`mb-5 rounded-xl px-4 py-3 text-sm ${
                    msg.type === "success"
                      ? "bg-[#E9EEE3] text-[#2D1C59]"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {msg.text}
                </div>
              )}

              <label className="mb-2 block text-sm font-medium text-[#2D1C59]">Your rating</label>
              <Stars
                value={form.rating}
                onChange={(n) => setForm({ ...form, rating: n })}
                size="h-8 w-8"
              />

              <label className="mb-2 mt-6 block text-sm font-medium text-[#2D1C59]">
                Title <span className="text-[#6B6673]">(optional)</span>
              </label>
              <input
                value={form.title}
                maxLength={120}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Truly transformative experience"
                className={inputCls}
              />

              <label className="mb-2 mt-5 block text-sm font-medium text-[#2D1C59]">
                Your feedback <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                placeholder="Tell us about your experience..."
                className={`${inputCls} resize-none`}
              />

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full rounded-full bg-[#2D1C59] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3B2F66] disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>

            {/* My feedbacks */}
            <div className="mt-10">
              <h3 className="font-serif text-2xl text-[#2D1C59]">My Feedbacks</h3>

              {loadingMine && mine.length === 0 ? (
                <div className="mt-4 h-24 animate-pulse rounded-2xl bg-[#E9EEE3]/70" />
              ) : mine.length === 0 ? (
                <p className="mt-3 text-sm text-[#4A5560]">Aapne abhi tak koi feedback nahi diya.</p>
              ) : (
                <div className="mt-4 space-y-4">
                  {mine.map((f) => (
                    <article key={f.id} className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Stars value={f.rating} size="h-4 w-4" />
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            f.is_active
                              ? "bg-[#D2E3D8] text-[#13382C]"
                              : "bg-[#F5ECD7] text-[#8A6A1F]"
                          }`}
                        >
                          {f.is_active ? "Approved" : "Pending approval"}
                        </span>
                      </div>
                      {f.title && (
                        <h4 className="mt-3 font-serif text-lg text-[#2D1C59]">{f.title}</h4>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-[#4A5560]">{f.comment}</p>
                      <p className="mt-3 text-xs text-[#6B6673]">{fmtDate(f.created_at)}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}