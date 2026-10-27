"use client";

// src/components/offerings/FrequencyHero.jsx
// Reads siteData.offeringsPage.hero. Every optional field has a fallback.
// hero.media: "visual" (default, code-drawn bioresonance graphic) | "image" (uses hero.image.src)
// hero.highlight.title can contain {count}, which is replaced by the number of protocols.

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Waves,
  Scale,
  Compass,
  Activity,
  Sparkles,
  Heart,
  Sun,
  Leaf,
  Flower2,
} from "lucide-react";

const PRIMARY = "#2D1C59";
const TEAL = "#0E6E6B";
const GOLD = "#B88B4A";
const GOLD_LIGHT = "#F3CF63";
const INK = "#4A5D54";
const SURFACE = "#FBF9F5";
const SURFACE_ALT = "#FAF7F2";
const LINE = "rgba(45, 28, 89, 0.10)";

const ICONS = { Waves, Scale, Compass, Activity, Sparkles, Heart, Sun, Leaf, Flower2 };

const NODE_COLORS = [
  "#D4A537", "#22B8CF", "#F5C518", "#2DD4A0", "#4C8DF6",
  "#A855F7", "#6366F1", "#14B8A6", "#F43F5E",
];

const DEFAULT_PILLARS = [
  {
    icon: "Waves",
    title: "Clear blockages",
    text: "Release the mental, emotional and energetic static that holds you back.",
  },
  {
    icon: "Scale",
    title: "Restore equilibrium",
    text: "Support the body's natural biological balance and nervous-system calm.",
  },
  {
    icon: "Compass",
    title: "Align your energy",
    text: "Tune your energy state across specialized dimensions.",
  },
];

// "protocols" -> "#protocols"; "#protocols" stays; "/contact" stays (real route)
function normalizeHref(href) {
  if (!href || typeof href !== "string") return null;
  if (href.startsWith("#") || href.startsWith("/") || /^https?:\/\//.test(href)) return href;
  return `#${href}`;
}

function goTo(e, href) {
  if (!href || !href.startsWith("#")) return;
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function WaveLine() {
  return (
    <svg viewBox="0 0 600 40" className="h-8 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 20 q 37.5 -22 75 0 t 75 0 t 75 0 t 75 0 t 75 0 t 75 0 t 75 0 t 75 0"
        fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M0 24 q 50 -14 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0"
        fill="none" stroke={TEAL} strokeOpacity="0.45" strokeWidth="1.2" strokeLinecap="round"
      />
    </svg>
  );
}

// Biofield graphic: one node per protocol around a pulsing core, plus a waveform
function BiofieldVisual({ count = 9 }) {
  const n = Math.max(count, 1);
  const cx = 200;
  const cy = 190;
  const nodes = Array.from({ length: n }, (_, i) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return {
      x: cx + 135 * Math.cos(a),
      y: cy + 135 * Math.sin(a),
      lx: cx + 162 * Math.cos(a),
      ly: cy + 162 * Math.sin(a),
      color: NODE_COLORS[i % NODE_COLORS.length],
      label: String(i + 1).padStart(2, "0"),
    };
  });

  return (
    <svg
      viewBox="0 0 400 420"
      className="block w-full"
      role="img"
      aria-label={`Biofield map with ${n} frequency protocols around a central pulse`}
    >
      <defs>
        <radialGradient id="bf-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#3A2380" />
          <stop offset="60%" stopColor="#1B1240" />
          <stop offset="100%" stopColor="#0C0A1F" />
        </radialGradient>
        <radialGradient id="bf-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD_LIGHT} stopOpacity="0.9" />
          <stop offset="100%" stopColor={GOLD_LIGHT} stopOpacity="0" />
        </radialGradient>
      </defs>

      <style>{`
        @keyframes bf-spin { to { transform: rotate(360deg); } }
        @keyframes bf-pulse { 0%,100% { transform: scale(1); opacity: .85; } 50% { transform: scale(1.25); opacity: 1; } }
        @keyframes bf-flow { to { stroke-dashoffset: -80; } }
        .bf-spin { transform-origin: 200px 190px; animation: bf-spin 60s linear infinite; }
        .bf-pulse { transform-origin: 200px 190px; animation: bf-pulse 3.2s ease-in-out infinite; }
        .bf-flow { stroke-dasharray: 6 10; animation: bf-flow 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bf-spin, .bf-pulse, .bf-flow { animation: none; }
        }
      `}</style>

      <rect width="400" height="420" fill="url(#bf-bg)" />

      {[45, 90, 135].map((r, i) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#E4ECE6" strokeOpacity={0.22 - i * 0.05} />
      ))}
      <circle
        className="bf-spin"
        cx={cx} cy={cy} r="172"
        fill="none" stroke={GOLD_LIGHT} strokeOpacity="0.45" strokeDasharray="2 9" strokeLinecap="round"
      />

      {nodes.map((p) => (
        <g key={p.label}>
          <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={p.color} strokeOpacity="0.28" className="bf-flow" />
          <circle cx={p.x} cy={p.y} r="15" fill={p.color} opacity="0.18" />
          <circle cx={p.x} cy={p.y} r="6.5" fill={p.color} />
          <text
            x={p.lx} y={p.ly}
            fill="#fff" fillOpacity="0.75" fontSize="10"
            textAnchor="middle" dominantBaseline="middle"
          >
            {p.label}
          </text>
        </g>
      ))}

      <circle cx={cx} cy={cy} r="34" fill="url(#bf-core)" className="bf-pulse" />
      <circle cx={cx} cy={cy} r="7" fill={GOLD_LIGHT} />

      <path
        d="M0 385 q 25 -22 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0"
        fill="none" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round"
      />
      <path
        d="M0 390 q 40 -12 80 0 t 80 0 t 80 0 t 80 0 t 80 0"
        fill="none" stroke="#22B8CF" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round"
      />
    </svg>
  );
}

export default function FrequencyHero({ hero, protocolCount = 0 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef(null);

  // If the image failed to load BEFORE React hydrated, onError never fires.
  // This check catches that case and switches to the code-drawn graphic.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setImgFailed(true);
  }, [hero?.image?.src]);

  if (!hero) return null;

  const { badge, title, description, primaryCta, secondaryCta, highlight, pillars, image, media } = hero;

  const pillarList = Array.isArray(pillars) && pillars.length ? pillars : DEFAULT_PILLARS;

  // Replaces {count} with the real number of protocols. Also fixes a hardcoded "9 frequency protocols".
  const fill = (s) =>
    typeof s === "string"
      ? s.replace(/\{count\}/g, String(protocolCount || "")).replace(/\s{2,}/g, " ").trim()
      : s;

  const highlightTitle =
    fill(highlight?.title) ||
    (protocolCount ? `${protocolCount} frequency protocols` : "Frequency protocols");
  const highlightText = fill(highlight?.text) || "";

  const secondary = secondaryCta?.href
    ? { label: secondaryCta.label, href: normalizeHref(secondaryCta.href) }
    : protocolCount
    ? { label: `View all ${protocolCount} protocols`, href: "#protocols" }
    : null;

  const primaryHref = normalizeHref(primaryCta?.href);
  const useImage = media === "image" && image?.src && !imgFailed;

  const highlightBar = (dark) => (
    <div
      className="flex items-center gap-3 border-t px-4 py-4 sm:gap-4 sm:px-5"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.12)" : LINE,
        backgroundColor: dark ? "transparent" : "#FFFFFF",
      }}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: TEAL }}
      >
        <Activity className="h-5 w-5" style={{ color: GOLD_LIGHT }} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p
          className="font-serif text-lg leading-tight sm:text-xl"
          style={{ color: dark ? "#FFFFFF" : PRIMARY }}
        >
          {highlightTitle}
        </p>
        {highlightText && (
          <p
            className="mt-0.5 text-xs leading-snug"
            style={{ color: dark ? "rgba(255,255,255,0.7)" : INK }}
          >
            {highlightText}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-x-clip" style={{ backgroundColor: SURFACE }}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        {/* LEFT */}
        <div className={`min-w-0 ${useImage ? "lg:col-span-6" : "lg:col-span-7"}`}>
          {badge && (
            <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
              <span className="h-px w-6 sm:w-8" style={{ backgroundColor: GOLD }} />
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs"
                style={{ color: GOLD }}
              >
                {badge}
              </span>
              <span className="h-px w-6 sm:w-8" style={{ backgroundColor: GOLD }} />
            </div>
          )}

          {title && (
            <h1
              className="break-words font-serif text-3xl leading-[1.15] sm:text-5xl lg:text-5xl xl:text-6xl"
              style={{ color: PRIMARY }}
            >
              {title}
            </h1>
          )}

          {description && (
            <p
              className="mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg"
              style={{ color: INK }}
            >
              {description}
            </p>
          )}

          {(primaryHref || secondary?.href) && (
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {primaryHref && primaryCta?.label && (
                <Link
                  href={primaryHref}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-sm transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
                  style={{ backgroundColor: "#E8A94A", color: PRIMARY, outlineColor: TEAL }}
                >
                  {primaryCta.label}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}

              {secondary?.href &&
                (secondary.href.startsWith("#") ? (
                  <a
                    href={secondary.href}
                    onClick={(e) => goTo(e, secondary.href)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
                    style={{ borderColor: TEAL, color: TEAL, outlineColor: TEAL }}
                  >
                    {secondary.label}
                  </a>
                ) : (
                  <Link
                    href={secondary.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
                    style={{ borderColor: TEAL, color: TEAL, outlineColor: TEAL }}
                  >
                    {secondary.label}
                  </Link>
                ))}
            </div>
          )}

          <div className="mt-8 hidden max-w-md sm:mt-10 sm:block">
            <WaveLine />
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`relative mx-auto w-full min-w-0 lg:max-w-none ${
            useImage ? "max-w-xl lg:col-span-6" : "max-w-md lg:col-span-5"
          }`}
        >
          <div
            className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-[2rem] sm:block"
            style={{ backgroundColor: TEAL, opacity: 0.12 }}
            aria-hidden="true"
          />
          <div
            className="relative overflow-hidden rounded-3xl border"
            style={{ borderColor: LINE, backgroundColor: "#1B1240" }}
          >
            {useImage ? (
              <>
                <img
                  ref={imgRef}
                  src={image.src}
                  alt={image.alt || ""}
                  onError={() => setImgFailed(true)}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  {...(image.width && image.height ? { width: image.width, height: image.height } : {})}
                  referrerPolicy="no-referrer"
                />
                {highlightBar(false)}
              </>
            ) : (
              <>
                <BiofieldVisual count={protocolCount || 9} />
                {highlightBar(true)}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div style={{ backgroundColor: SURFACE_ALT, borderTop: `1px solid ${LINE}` }}>
        <div
          className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:px-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))" }}
        >
          {pillarList.map((p, i) => {
            const Icon = ICONS[p.icon] || Sparkles;
            return (
              <div key={p.title || i} className="flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: TEAL }}
                >
                  <Icon className="h-5 w-5" style={{ color: GOLD_LIGHT }} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg" style={{ color: PRIMARY }}>{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: INK }}>{p.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}