"use client";
import { useEffect, useState } from "react";
import { getInfoCards, submitConsultationRequest } from "@/services/consultationService";

const empty = { full_name: "", email: "", phone: "", interest: "", session_format: "online", message: "", consent: false };

export default function ConsultationForm() {
  const [form, setForm] = useState(empty);
  const [cards, setCards] = useState(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getInfoCards().then((r) => setCards(r.data || r)).catch(() => {});
  }, []);

  const set = (k) => (e) =>
    setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.consent) return setStatus({ type: "error", msg: "Please accept consent to continue." });
    setLoading(true); setStatus({ type: "", msg: "" });
    try {
      await submitConsultationRequest(form);
      setStatus({ type: "success", msg: "Thank you! We'll get back to you shortly." });
      setForm(empty);
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    } finally { setLoading(false); }
  };

  const input = "w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500";

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Info cards: email, location, time */}
      <div className="space-y-4">
        {cards ? (Array.isArray(cards) ? cards : Object.entries(cards)).map((c, i) => {
          const [title, value] = Array.isArray(c) ? c : [c.title || c.label || c.type, c.value || c.content || c.text];
          return (
            <div key={i} className="rounded-xl border p-4">
              <p className="text-sm uppercase text-gray-500">{String(title)}</p>
              <p className="font-medium">{typeof value === "object" ? JSON.stringify(value) : String(value)}</p>
            </div>
          );
        }) : null}
      </div>

      <form onSubmit={submit} className="space-y-4">
        <input className={input} placeholder="Full name" required value={form.full_name} onChange={set("full_name")} />
        <input className={input} type="email" placeholder="Email" required value={form.email} onChange={set("email")} />
        <input className={input} placeholder="Phone" value={form.phone} onChange={set("phone")} />
        <input className={input} placeholder="Interest (e.g. Holistic Coaching)" required value={form.interest} onChange={set("interest")} />
        <select className={input} value={form.session_format} onChange={set("session_format")}>
          <option value="online">Online</option>
          <option value="in-person">In person</option>
        </select>
        <textarea className={input} rows={4} placeholder="Message" value={form.message} onChange={set("message")} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.consent} onChange={set("consent")} /> I consent to being contacted.
        </label>
        {status.msg && <p className={status.type === "success" ? "text-emerald-600" : "text-red-600"}>{status.msg}</p>}
        <button disabled={loading} className="rounded-lg bg-emerald-600 px-6 py-2 text-white disabled:opacity-60">
          {loading ? "Sending..." : "Request Consultation"}
        </button>
      </form>
    </div>
  );
}