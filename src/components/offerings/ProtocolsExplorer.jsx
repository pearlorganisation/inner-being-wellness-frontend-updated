"use client";

// src/components/offerings/ProtocolsExplorer.jsx
// All protocols as cards, styled like the offerings-page ProtocolGrid.
// Data: siteData.offeringsPage.services (title, shortDescription, id, cta.href).

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Search, Check, Atom, ShieldCheck, Coins, Dna,
  UserCheck, Brain, Lightbulb, Droplets, Sparkles,
} from "lucide-react";

const PRIMARY = "#2D1C59";
const GOLD_LIGHT = "#F3CF63";
const INK = "#4A5D54";
const SURFACE = "#FBF9F5";

// One accent + icon per protocol (same order as the offerings page)
const ACCENTS = [
  "#D4A537", "#22B8CF", "#F5C518", "#2DD4A0", "#4C8DF6",
  "#A855F7", "#6366F1", "#14B8A6", "#F43F5E",
];
const ICONS = [Atom, ShieldCheck, Coins, Dna, UserCheck, Brain, Lightbulb, Droplets, Sparkles];

export default function ProtocolsExplorer({ protocols = [] }) {
  const [query, setQuery] = useState("");

  // keep original index so numbering/colours stay the same while searching
  const items = useMemo(() => {
    const all = protocols.map((p, idx) => ({ p, idx }));
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter(({ p }) =>
      [p.title, p.shortDescription, p.description, p.eyebrow].filter(Boolean).join(" ").toLowerCase().includes(q)
    );
  }, [protocols, query]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: SURFACE }}>
      {/* Top banner */}
      <header
        className="relative overflow-hidden border-b"
        style={{ backgroundColor: "#FAF7F2", borderColor: "rgba(45, 28, 89, 0.10)" }}
      >
        <style>{`
          @keyframes pf-gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .pf-gradient-text {
            background-image: linear-gradient(100deg, #0E6E6B 0%, #2DD4A0 30%, #16A34A 55%, #14B8A6 75%, #0E6E6B 100%);
            background-size: 250% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: pf-gradient 8s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) { .pf-gradient-text { animation: none; } }
        `}</style>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 85% 0%, rgba(45,212,160,0.16), rgba(250,247,242,0) 55%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/offerings"
            className="inline-flex items-center gap-2 text-sm transition hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ color: "#0E6E6B", outlineColor: "#0E6E6B" }}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to offerings
          </Link>

          <h1 className="mt-6 max-w-3xl break-words pf-gradient-text pb-1 font-serif text-3xl leading-[1.15] sm:text-5xl lg:text-6xl">
            All frequency protocols
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: INK }}>
            {protocols.length
              ? `Browse all ${protocols.length} protocols and choose the one that fits where you are right now.`
              : "Browse every protocol and choose the one that fits where you are right now."}
          </p>

          <div className="relative mt-8 max-w-md">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
              style={{ color: INK }}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search protocols"
              aria-label="Search protocols"
              className="w-full rounded-full border bg-white py-3.5 pl-11 pr-4 text-sm shadow-sm outline-none focus-visible:ring-2"
              style={{ color: PRIMARY, borderColor: "rgba(45, 28, 89, 0.12)", "--tw-ring-color": "#2DD4A0" }}
            />
          </div>
        </div>
      </header>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {items.length === 0 ? (
          <div className="rounded-3xl border border-[#2D1C59]/10 bg-white px-6 py-14 text-center">
            <p className="font-serif text-xl" style={{ color: PRIMARY }}>
              {protocols.length ? "No protocols match your search" : "No protocols added yet"}
            </p>
            <p className="mt-2 text-sm" style={{ color: INK }}>
              {protocols.length ? "Try a different word, or clear the search." : "Add items to siteData.offeringsPage.services."}
            </p>
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-5 rounded-full border border-[#0E6E6B] px-5 py-2.5 text-sm font-semibold text-[#0E6E6B] transition hover:bg-[#FBF9F5]"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <ul
            className="grid gap-5 sm:gap-6"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))" }}
          >
            {items.map(({ p, idx }) => {
              const color = ACCENTS[idx % ACCENTS.length];
              const Icon = ICONS[idx % ICONS.length];
              const href = p.cta?.href || p.href || (p.id ? `/offerings#${p.id}` : "/offerings");
              const body = p.shortDescription || p.description || p.text;

              return (
                <li key={p.id || p.title || idx} className="min-w-0">
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-3xl bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6"
                    style={{
                      border: `1px solid ${color}55`,
                      borderLeft: `4px solid ${color}`,
                      outlineColor: color,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                        style={{ backgroundColor: `${color}24`, color: PRIMARY }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
                        Protocol {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${color}24` }}
                      >
                        <Icon className="h-[18px] w-[18px]" style={{ color }} aria-hidden="true" />
                      </span>
                    </div>

                    <h2 className="mt-5 break-words font-serif text-xl leading-snug" style={{ color: PRIMARY }}>
                      {p.title || `Protocol ${idx + 1}`}
                    </h2>

                    {body && (
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: INK }}>
                        {body}
                      </p>
                    )}

                    <span
                      className="mt-auto flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition group-hover:brightness-95"
                      style={{ backgroundColor: `${color}22`, color: PRIMARY, marginTop: "1.5rem" }}
                    >
                      Select Protocol
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border p-6 sm:flex-row sm:items-center sm:p-8"
          style={{
            background: "linear-gradient(135deg, #E6F4EF 0%, #FAF7F2 70%)",
            borderColor: "rgba(14, 110, 107, 0.18)",
          }}
        >
          <div>
            <p className="font-serif text-xl sm:text-2xl" style={{ color: PRIMARY }}>Not sure where to begin?</p>
            <p className="mt-1 max-w-md text-sm" style={{ color: INK }}>Tell us what you are looking for and we will point you to the right protocol.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
            style={{ backgroundColor: "#E8A94A", color: PRIMARY, outlineColor: GOLD_LIGHT }}
          >
            Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}