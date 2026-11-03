"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

/* ---------- mock data (replace with API data) ---------- */
const rng = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const series = (n, base, vol, seed) => {
  const r = rng(seed);
  return Array.from({ length: n }, (_, i) => Math.round(base + i * (vol / n) * 2 + (r() - 0.4) * vol));
};
const RANGES = { 7: "7 days", 30: "30 days", 90: "90 days" };
const SERVICES = [
  { name: "Yoga therapy", value: 38, color: "#4A3A9A" },
  { name: "Counselling", value: 27, color: "#E3A33B" },
  { name: "Ayurveda", value: 20, color: "#8C7BD6" },
  { name: "Meditation", value: 15, color: "#CBC2EA" },
];
const APPTS = [
  { id: "A-2041", client: "Ananya Sharma", service: "Counselling", pro: "Dr. Meera Rao", time: "09:30", status: "Confirmed" },
  { id: "A-2042", client: "Rohan Bisht", service: "Yoga therapy", pro: "Kabir Nair", time: "10:15", status: "Pending" },
  { id: "A-2043", client: "Priya Negi", service: "Ayurveda", pro: "Dr. Sunil Joshi", time: "11:00", status: "Confirmed" },
  { id: "A-2044", client: "Vikram Rawat", service: "Meditation", pro: "Isha Kapoor", time: "12:30", status: "Cancelled" },
  { id: "A-2045", client: "Neha Thakur", service: "Counselling", pro: "Dr. Meera Rao", time: "14:00", status: "Pending" },
  { id: "A-2046", client: "Arjun Mehta", service: "Yoga therapy", pro: "Kabir Nair", time: "15:45", status: "Confirmed" },
];
const ACTIVITY = [
  { t: "2 min ago", text: "New booking from Ananya Sharma" },
  { t: "18 min ago", text: "Payment of ₹3,500 received" },
  { t: "1 hr ago", text: "Dr. Sunil Joshi updated availability" },
  { t: "3 hrs ago", text: "Vikram Rawat cancelled a session" },
  { t: "Yesterday", text: "12 new client sign-ups" },
];
const fmt = (n) => new Intl.NumberFormat("en-IN").format(n);

/* ---------- small pieces ---------- */
function Spark({ data, color }) {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 100},${28 - ((v - min) / (max - min || 1)) * 24}`).join(" ");
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="ibw-spark" aria-hidden="true">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}

function AreaChart({ data, labels }) {
  const [hover, setHover] = useState(null);
  const W = 720, H = 260, P = { l: 44, r: 12, t: 14, b: 26 };
  const max = Math.ceil(Math.max(...data) / 5000) * 5000 || 5000;
  const x = (i) => P.l + (i / (data.length - 1)) * (W - P.l - P.r);
  const y = (v) => P.t + (1 - v / max) * (H - P.t - P.b);
  const line = data.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${H - P.b} L${x(0)},${H - P.b} Z`;
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const rel = ((e.clientX - r.left) / r.width) * W;
    setHover(Math.max(0, Math.min(data.length - 1, Math.round(((rel - P.l) / (W - P.l - P.r)) * (data.length - 1)))));
  };
  return (
    <div className="ibw-chart">
      <svg viewBox={`0 0 ${W} ${H}`} onMouseMove={onMove} onMouseLeave={() => setHover(null)} role="img" aria-label="Revenue over time">
        <defs>
          <linearGradient id="ibwArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--moss)" stopOpacity=".28" />
            <stop offset="1" stopColor="var(--moss)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((g) => {
          const v = (max / 4) * g;
          return (
            <g key={g}>
              <line x1={P.l} x2={W - P.r} y1={y(v)} y2={y(v)} stroke="var(--line)" />
              <text x={P.l - 8} y={y(v) + 4} textAnchor="end" className="ibw-axis">{v >= 1000 ? `${v / 1000}k` : v}</text>
            </g>
          );
        })}
        <path key={`a${data.length}`} className="ibw-areafill" d={area} fill="url(#ibwArea)" />
        <path key={`l${data.length}`} className="ibw-line" pathLength="1" d={line} fill="none" stroke="var(--moss)" strokeWidth="2.5" strokeLinejoin="round" />
        {labels.map((l, i) => (l ? <text key={i} x={x(i)} y={H - 6} textAnchor="middle" className="ibw-axis">{l}</text> : null))}
        {hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={P.t} y2={H - P.b} stroke="var(--muted)" strokeDasharray="3 3" />
            <circle cx={x(hover)} cy={y(data[hover])} r="5" fill="var(--surface)" stroke="var(--moss)" strokeWidth="2.5" />
          </g>
        )}
      </svg>
      {hover !== null && (
        <div className="ibw-tip" style={{ left: `${(x(hover) / W) * 100}%` }}>
          <b>₹{fmt(data[hover])}</b>
          <span>Day {hover + 1}</span>
        </div>
      )}
    </div>
  );
}

function Donut({ items }) {
  const total = items.reduce((s, i) => s + i.value, 0);
  const R = 52, C = 2 * Math.PI * R;
  let off = 0;
  return (
    <div className="ibw-donut">
      <svg viewBox="0 0 140 140" role="img" aria-label="Sessions by service">
        <g transform="rotate(-90 70 70)">
          {items.map((it) => {
            const len = (it.value / total) * C;
            const el = <circle key={it.name} cx="70" cy="70" r={R} fill="none" stroke={it.color} strokeWidth="16" strokeDasharray={`${len - 2} ${C - len + 2}`} strokeDashoffset={-off} />;
            off += len;
            return el;
          })}
        </g>
        <text x="70" y="68" textAnchor="middle" className="ibw-donut-n">1,284</text>
        <text x="70" y="86" textAnchor="middle" className="ibw-axis">sessions</text>
      </svg>
      <ul>
        {items.map((it) => (
          <li key={it.name}><i style={{ background: it.color }} />{it.name}<b>{it.value}%</b></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- page (sidebar/topbar/logout ab AdminShell me hain) ---------- */
export default function AdminDashboardPage() {
  const user = useSelector((s) => s.adminAuth.user);
  const name = user?.name || "Admin";

  const [range, setRange] = useState(30);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");

  const revenue = useMemo(() => series(range, 9000, 7000, range + 3), [range]);
  const labels = useMemo(() => revenue.map((_, i) => (i % Math.ceil(range / 6) === 0 ? `D${i + 1}` : "")), [revenue, range]);
  const total = revenue.reduce((a, b) => a + b, 0);

  const kpis = [
    { label: "Revenue", value: `₹${fmt(total)}`, delta: 12.4, color: "#4A3A9A", data: revenue.slice(-12) },
    { label: "Appointments", value: fmt(range * 14 + 62), delta: 8.1, color: "#E3A33B", data: series(12, 40, 20, 7) },
    { label: "New clients", value: fmt(Math.round(range * 3.6)), delta: 4.7, color: "#2F8F83", data: series(12, 20, 12, 11) },
    { label: "Cancellation rate", value: "4.2%", delta: -1.3, color: "#C85A54", data: series(12, 10, 6, 19), invert: true },
  ];

  const rows = APPTS.filter(
    (a) =>
      (status === "All" || a.status === status) &&
      `${a.client} ${a.service} ${a.pro}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="ibw">
      <style>{CSS}</style>

      <main className="ibw-content">
        <div className="ibw-head">
          <div>
            <h1>Welcome back, {name.split(" ")[0]}</h1>
            <p>Here’s how the clinic is performing over the last {RANGES[range]}.</p>
          </div>
          <div className="ibw-seg" role="group" aria-label="Date range">
            {Object.entries(RANGES).map(([k, v]) => (
              <button key={k} className={+k === range ? "is-on" : ""} onClick={() => setRange(+k)}>{v}</button>
            ))}
          </div>
        </div>

        <section className="ibw-kpis" aria-label="Key metrics">
          {kpis.map((k) => {
            const good = k.invert ? k.delta < 0 : k.delta > 0;
            return (
              <article key={k.label} className="ibw-card ibw-kpi">
                <span className="ibw-label">{k.label}</span>
                <strong>{k.value}</strong>
                <div className="ibw-kpi-foot">
                  <span className={`ibw-delta ${good ? "up" : "down"}`}>{k.delta > 0 ? "▲" : "▼"} {Math.abs(k.delta)}%</span>
                  <small>vs previous period</small>
                </div>
                <Spark data={k.data} color={k.color} />
              </article>
            );
          })}
        </section>

        <section className="ibw-grid">
          <article className="ibw-card ibw-revenue">
            <div className="ibw-card-h"><h2>Revenue</h2><span className="ibw-label">₹{fmt(total)} total</span></div>
            <AreaChart data={revenue} labels={labels} />
          </article>
          <article className="ibw-card">
            <div className="ibw-card-h"><h2>Sessions by service</h2></div>
            <Donut items={SERVICES} />
          </article>
        </section>

        <section className="ibw-grid ibw-grid-b">
          <article className="ibw-card ibw-table-card">
            <div className="ibw-card-h">
              <h2>Today’s appointments</h2>
              <div className="ibw-tools">
                <label className="ibw-search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-4.5-4.5" />
                  </svg>
                  <input type="search" placeholder="Search appointments…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search appointments" />
                </label>
                <div className="ibw-chips" role="group" aria-label="Filter by status">
                  {["All", "Confirmed", "Pending", "Cancelled"].map((s) => (
                    <button key={s} className={status === s ? "is-on" : ""} onClick={() => setStatus(s)}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="ibw-scroll">
              <table>
                <thead><tr><th>Client</th><th>Service</th><th>Practitioner</th><th>Time</th><th>Status</th></tr></thead>
                <tbody>
                  {rows.map((a) => (
                    <tr key={a.id}>
                      <td data-l="Client"><span className="ibw-av">{a.client.split(" ").map((w) => w[0]).join("")}</span>{a.client}</td>
                      <td data-l="Service">{a.service}</td>
                      <td data-l="Practitioner">{a.pro}</td>
                      <td data-l="Time">{a.time}</td>
                      <td data-l="Status"><span className={`ibw-pill ${a.status.toLowerCase()}`}>{a.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!rows.length && (
                <div className="ibw-empty"><b>No appointments found</b><span>Try a different search or clear the status filter.</span>
                  <button onClick={() => { setQ(""); setStatus("All"); }}>Clear filters</button></div>
              )}
            </div>
          </article>

          <article className="ibw-card">
            <div className="ibw-card-h"><h2>Recent activity</h2></div>
            <ol className="ibw-feed">
              {ACTIVITY.map((a) => (<li key={a.text}><span>{a.text}</span><small>{a.t}</small></li>))}
            </ol>
          </article>
        </section>
      </main>
    </div>
  );
}

/* ---------- styles (scoped by .ibw) ---------- */
const CSS = `
.ibw{--ink:#241B4B;--moss:#4A3A9A;--amber:#E3A33B;--mint:#EEE9F8;--bg:#FAF8F3;--surface:#fff;--text:#2A2440;--muted:#7B7590;--line:#ECE6DA;--serif:var(--font-cormorant,"Cormorant Garamond"),Georgia,serif;--ease:cubic-bezier(.2,.7,.2,1);
color:var(--text);font-family:inherit;font-size:14px;line-height:1.5;overflow-x:clip}
.ibw *{box-sizing:border-box}
.ibw button{font:inherit;color:inherit;cursor:pointer;background:none;border:0}
.ibw :focus-visible{outline:2px solid var(--amber);outline-offset:2px}
@keyframes ibw-in{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes ibw-left{from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:none}}
@keyframes ibw-wipe{to{clip-path:inset(-4px -4px -4px -4px)}}
@keyframes ibw-draw{to{stroke-dashoffset:0}}
@keyframes ibw-fade{to{opacity:1}}
@keyframes ibw-donut{from{opacity:0;transform:rotate(-140deg) scale(.88)}to{opacity:1;transform:none}}
@keyframes ibw-tip{from{opacity:0;transform:translate(-50%,2px)}to{opacity:1;transform:translate(-50%,-4px)}}
.ibw-content{padding:clamp(16px,3vw,34px);display:flex;flex-direction:column;gap:22px;max-width:1480px;width:100%;margin:0 auto}
.ibw-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-end;flex-wrap:wrap;animation:ibw-in .7s .1s var(--ease) both}
.ibw-head h1{margin:0;font-family:var(--serif);font-weight:500;font-size:clamp(28px,4vw,40px);line-height:1.1;letter-spacing:-.01em;color:var(--ink)}
.ibw-head p{margin:6px 0 0;color:var(--muted)}
.ibw-seg{display:flex;padding:4px;border-radius:14px;background:var(--surface);border:1px solid var(--line)}
.ibw-seg button{padding:7px 16px;border-radius:10px;color:var(--muted);transition:background .25s,color .25s}
.ibw-seg button:hover{color:var(--ink)}
.ibw-seg .is-on{background:var(--ink);color:#fff;box-shadow:0 6px 14px -8px rgba(36,27,75,.8)}
.ibw-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:20px;min-width:0;box-shadow:0 1px 2px rgba(36,27,75,.04),0 14px 30px -20px rgba(36,27,75,.25);transition:transform .3s var(--ease),box-shadow .3s var(--ease),border-color .3s;animation:ibw-in .7s var(--ease) both}
.ibw-card:hover{transform:translateY(-3px);border-color:#E3D9C2;box-shadow:0 2px 4px rgba(36,27,75,.05),0 24px 40px -22px rgba(36,27,75,.35)}
.ibw-label{color:var(--muted);font-size:12.5px}
.ibw-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.ibw-kpis .ibw-card:nth-child(1){animation-delay:.2s}.ibw-kpis .ibw-card:nth-child(2){animation-delay:.28s}.ibw-kpis .ibw-card:nth-child(3){animation-delay:.36s}.ibw-kpis .ibw-card:nth-child(4){animation-delay:.44s}
.ibw-kpi{display:flex;flex-direction:column;gap:6px;position:relative;overflow:hidden}
.ibw-kpi::before{content:"";position:absolute;left:0;top:0;width:100%;height:3px;background:linear-gradient(90deg,var(--amber),transparent 70%);transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease)}
.ibw-kpi:hover::before{transform:scaleX(1)}
.ibw-kpi strong{font-size:clamp(22px,2.4vw,29px);letter-spacing:-.02em;font-variant-numeric:tabular-nums;color:var(--ink)}
.ibw-kpi-foot{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.ibw-kpi-foot small{color:var(--muted)}
.ibw-delta{font-weight:600;font-size:12px;padding:2px 9px;border-radius:99px}
.ibw-delta.up{background:#DDF1E6;color:#1E7A4B}.ibw-delta.down{background:#F8E0DE;color:#B0403A}
.ibw-spark{width:100%;height:30px;margin-top:6px;overflow:visible;clip-path:inset(-4px 100% -4px -4px);animation:ibw-wipe 1.2s .6s var(--ease) forwards}
.ibw-grid{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:16px}
.ibw-grid .ibw-card:nth-child(1){animation-delay:.5s}.ibw-grid .ibw-card:nth-child(2){animation-delay:.6s}
.ibw-grid-b .ibw-card:nth-child(1){animation-delay:.7s}.ibw-grid-b .ibw-card:nth-child(2){animation-delay:.8s}
.ibw-card-h{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px}
.ibw-card-h h2{margin:0;font-family:var(--serif);font-weight:600;font-size:22px;color:var(--ink)}
.ibw-chart{position:relative}.ibw-chart svg{width:100%;height:auto;display:block;overflow:visible}
.ibw-line{stroke-dasharray:1;stroke-dashoffset:1;animation:ibw-draw 1.5s .6s var(--ease) forwards}
.ibw-areafill{opacity:0;animation:ibw-fade 1s 1.2s forwards}
.ibw-axis{font-size:11px;fill:var(--muted)}
.ibw-tip{position:absolute;top:0;transform:translate(-50%,-4px);background:var(--ink);color:#fff;padding:7px 12px;border-radius:10px;font-size:12px;pointer-events:none;display:flex;flex-direction:column;align-items:center;white-space:nowrap;animation:ibw-tip .18s ease both}
.ibw-tip span{color:#B7ADE0;font-size:11px}
.ibw-donut{display:flex;flex-direction:column;gap:18px;align-items:center}
.ibw-donut svg{width:176px;height:176px;animation:ibw-donut 1.1s .7s var(--ease) both}.ibw-donut-n{font-size:22px;font-weight:700;fill:var(--ink)}
.ibw-donut ul{list-style:none;margin:0;padding:0;width:100%;display:flex;flex-direction:column;gap:6px}
.ibw-donut li{display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:10px;transition:background .2s}
.ibw-donut li:hover{background:var(--mint)}.ibw-donut li i{width:10px;height:10px;border-radius:3px}.ibw-donut li b{margin-left:auto}
.ibw-tools{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.ibw-search{display:flex;align-items:center;gap:8px;padding:0 12px;height:36px;width:220px;max-width:100%;border-radius:99px;background:var(--surface);border:1px solid var(--line);color:var(--muted);transition:border-color .2s,box-shadow .2s}
.ibw-search input{flex:1;min-width:0;border:0;background:none;outline:0;font:inherit;color:var(--text)}
.ibw-search:focus-within{border-color:var(--moss);box-shadow:0 0 0 4px rgba(74,58,154,.1)}
.ibw-chips{display:flex;gap:6px;flex-wrap:wrap}
.ibw-chips button{padding:5px 14px;border-radius:99px;border:1px solid var(--line);color:var(--muted);transition:all .2s var(--ease)}
.ibw-chips button:hover{border-color:var(--moss);color:var(--moss)}
.ibw-chips .is-on{background:var(--ink);border-color:var(--ink);color:#fff}
.ibw-scroll{overflow-x:auto}
.ibw table{width:100%;border-collapse:collapse;min-width:620px}
.ibw th{text-align:left;font-weight:600;color:var(--muted);font-size:12.5px;padding:8px 10px;border-bottom:1px solid var(--line)}
.ibw td{padding:13px 10px;border-bottom:1px solid var(--line);white-space:nowrap}
.ibw td:first-child{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--ink)}
.ibw tbody tr{animation:ibw-in .45s var(--ease) both;transition:background .2s}
.ibw tbody tr:nth-child(2){animation-delay:.05s}.ibw tbody tr:nth-child(3){animation-delay:.1s}.ibw tbody tr:nth-child(4){animation-delay:.15s}.ibw tbody tr:nth-child(5){animation-delay:.2s}.ibw tbody tr:nth-child(6){animation-delay:.25s}
.ibw tbody tr:hover{background:color-mix(in srgb,var(--mint) 55%,transparent)}
.ibw-av{width:32px;height:32px;border-radius:50%;background:var(--mint);color:var(--moss);display:grid;place-items:center;font-size:11px;font-weight:700}
.ibw-pill{padding:3px 11px;border-radius:99px;font-size:12px;font-weight:600}
.ibw-pill.confirmed{background:#DDF1E6;color:#1E7A4B}.ibw-pill.pending{background:#FBEFD3;color:#8A6411}.ibw-pill.cancelled{background:#F8E0DE;color:#B0403A}
.ibw-empty{display:flex;flex-direction:column;align-items:center;gap:6px;padding:34px 12px;text-align:center;color:var(--muted);animation:ibw-in .4s both}
.ibw-empty b{color:var(--ink);font-family:var(--serif);font-size:20px}.ibw-empty button{margin-top:8px;padding:8px 16px;border-radius:12px;background:var(--ink);color:#fff;transition:transform .2s var(--ease)}.ibw-empty button:hover{transform:translateY(-2px)}
.ibw-feed{list-style:none;margin:0;padding:0 0 0 16px;border-left:2px solid var(--line);display:flex;flex-direction:column;gap:18px}
.ibw-feed li{position:relative;display:flex;flex-direction:column;animation:ibw-left .5s var(--ease) both}
.ibw-feed li:nth-child(1){animation-delay:.9s}.ibw-feed li:nth-child(2){animation-delay:1s}.ibw-feed li:nth-child(3){animation-delay:1.1s}.ibw-feed li:nth-child(4){animation-delay:1.2s}.ibw-feed li:nth-child(5){animation-delay:1.3s}
.ibw-feed li::before{content:"";position:absolute;left:-23px;top:5px;width:10px;height:10px;border-radius:50%;background:var(--amber);border:2px solid var(--surface);box-shadow:0 0 0 3px var(--gold-soft,#F6E7C8)}
.ibw-feed small{color:var(--muted)}
@media (max-width:1180px){.ibw-kpis{grid-template-columns:repeat(2,1fr)}.ibw-grid,.ibw-grid-b{grid-template-columns:1fr}}
@media (max-width:900px){.ibw-axis{font-size:15px}}
@media (max-width:560px){
.ibw-kpis{grid-template-columns:1fr}
.ibw-seg{width:100%}.ibw-seg button{flex:1;padding:7px 4px}
.ibw-search{width:100%}
.ibw-card{padding:16px;border-radius:18px}
.ibw-axis{font-size:20px}.ibw-donut svg{width:150px;height:150px}
.ibw table{min-width:0}.ibw thead{display:none}
.ibw tr{display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;padding:12px 0;border-bottom:1px solid var(--line)}
.ibw td{border:0;padding:2px 0;white-space:normal}
.ibw td:first-child{grid-column:1/-1;margin-bottom:4px}
.ibw td[data-l]:not(:first-child)::before{content:attr(data-l);display:block;font-size:11px;color:var(--muted)}
}
@media (hover:none){.ibw-card:hover{transform:none}}
@media (prefers-reduced-motion:reduce){
.ibw *,.ibw *::before{animation:none!important;transition:none!important}
.ibw-line{stroke-dashoffset:0}.ibw-spark{clip-path:none}.ibw-areafill{opacity:1}
}
`;