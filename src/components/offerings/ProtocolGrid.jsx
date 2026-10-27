"use client";

// src/components/offerings/ProtocolGrid.jsx
// Light (off-white) overview grid of every protocol, matching the rest of the site.
// 100% driven by props from siteData.offeringsPage:
//   services -> offeringsPage.services
//   styles   -> offeringsPage.protocolStyles  { [serviceId]: { icon, color } }
//   id, eyebrow, title, description, ctaLabel, badgeLabel -> offeringsPage.protocolGrid
// Columns: 1 (mobile) / 2 (tablet) / 3 (desktop). Number of cards = services.length.

import { useState } from "react";
import {
  Atom, ShieldCheck, Coins, Dna, UserCheck, Brain, Lightbulb, Wind, Sun,
  Sparkles, Heart, Leaf, Flower2, Compass, Waves, Check,
} from "lucide-react";

const PRIMARY = "#2D1C59";
const GOLD = "#B88B4A";
const INK = "#4A5D54";
const SURFACE = "#FBF9F5";
const LINE = "rgba(45, 28, 89, 0.10)";

const ICONS = {
  Atom, ShieldCheck, Coins, Dna, UserCheck, Brain, Lightbulb, Wind, Sun,
  Sparkles, Heart, Leaf, Flower2, Compass, Waves,
};

// Used only when siteData has no protocolStyles entry for that id
const BY_ID = {
  "chakra-balancing": { icon: "Atom", color: "#D4A537" },
  "holistic-health": { icon: "ShieldCheck", color: "#22B8CF" },
  prosperity: { icon: "Coins", color: "#F5C518" },
  "cell-harmony": { icon: "Dna", color: "#2DD4A0" },
  "prostate-harmony": { icon: "UserCheck", color: "#4C8DF6" },
  vagus: { icon: "Brain", color: "#A855F7" },
  "mental-clarity": { icon: "Lightbulb", color: "#6366F1" },
  detoxify: { icon: "Wind", color: "#14B8A6" },
  "negative-entities-clearance": { icon: "Sun", color: "#F43F5E" },
};

const FALLBACK_COLORS = ["#D4A537", "#22B8CF", "#2DD4A0", "#4C8DF6", "#A855F7", "#F43F5E"];

const isHex = (c) => typeof c === "string" && /^#([0-9a-f]{6})$/i.test(c);

function goTo(e, href) {
  if (!href || !href.startsWith("#")) return;
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

function ProtocolCard({ service, index, style, ctaLabel, badgeLabel }) {
  const [active, setActive] = useState(false);

  const candidate = service.color || style?.color || BY_ID[service.id]?.color;
  const color = isHex(candidate) ? candidate : FALLBACK_COLORS[index % FALLBACK_COLORS.length];
  const Icon = ICONS[service.icon || style?.icon || BY_ID[service.id]?.icon] || Sparkles;
  const num = String(index + 1).padStart(2, "0");
  const href = service.id ? `#${service.id}` : null;

  return (
    <article
      className="flex h-full min-w-0 flex-col rounded-3xl border bg-white p-5 transition-shadow duration-300 sm:p-6"
      style={{
        borderColor: `${color}66`,
        borderLeftWidth: 4,
        borderLeftColor: color,
        boxShadow: active
          ? `0 14px 36px -14px ${color}99`
          : "0 1px 2px rgba(45, 28, 89, 0.06)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${color}26`, color: PRIMARY }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
          {badgeLabel} {num}
        </span>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}1F` }}
        >
          <Icon className="h-5 w-5" style={{ color }} aria-hidden="true" />
        </span>
      </div>

      <h3
        className="mt-5 break-words font-serif text-lg leading-snug sm:text-xl"
        style={{ color: PRIMARY }}
      >
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: INK }}>
        {service.shortDescription || service.description}
      </p>

      {href && (
        // mt-auto pushes the button to the bottom so all cards line up
        <div className="mt-auto pt-6">
          <a
            href={href}
            onClick={(e) => goTo(e, href)}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: active ? color : `${color}22`,
              color: PRIMARY,
              outlineColor: color,
            }}
            aria-label={`${ctaLabel}: ${service.title}`}
          >
            {ctaLabel}
            <Check className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </article>
  );
}

export default function ProtocolGrid({
  services = [],
  styles = {},
  id = "protocols",
  eyebrow,
  title,
  description,
  ctaLabel = "Select Protocol",
  badgeLabel = "Protocol",
}) {
  if (!Array.isArray(services) || services.length === 0) return null;

  return (
    <section
      id={id}
      className="scroll-mt-28 overflow-x-clip"
      style={{ backgroundColor: SURFACE, borderTop: `1px solid ${LINE}` }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {(eyebrow || title || description) && (
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && (
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs"
                style={{ color: GOLD }}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl"
                style={{ color: PRIMARY }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: INK }}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ProtocolCard
              key={service.id || i}
              service={service}
              index={i}
              style={styles?.[service.id]}
              ctaLabel={ctaLabel}
              badgeLabel={badgeLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}