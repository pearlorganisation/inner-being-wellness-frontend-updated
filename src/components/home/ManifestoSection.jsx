// src/components/ManifestoSection.jsx
"use client";

import { Sun, Flower2, ArrowRight, ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const content = {
  title: "From Innocence to Identity Crisis",
  subtitle:
    "In our modern lives, we spend an enormous amount of energy trying to fix external circumstances. True transformation doesn’t happen at the surface level; it begins at the root of who you are in essence.",
  pillars: [
    {
      id: "as-children",
      icon: Sun,
      bg: "#FAF4E6",
      accent: "#C5A265",
      title: "As Children",
      description:
        "We lived in pure presence—laughing, playing, crying, and sleeping without barriers, beliefs, or cultural conditioning. We simply were.",
    },
    {
      id: "layering-of-identity",
      icon: Flower2,
      bg: "#E3F1EF",
      accent: "#0E6E6B",
      title: "The Layering of Identity",
      description:
        "As we grew, external labels were added: gender, nationality, status, career titles, and societal expectations. This division created fragile egos, stress, and self-sabotage.",
    },
  ],
};

function PillarCard({ pillar, delay, direction }) {
  const Icon = pillar.icon;
  return (
    <Reveal direction={direction} delay={delay} className="h-full w-full min-w-0">
      <div className="group flex h-full flex-col items-center justify-start rounded-3xl border border-[#2D1C59]/10 bg-white p-8 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl sm:p-10">
        
        <div
          className="animate-float mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full ring-8 ring-[#FBF9F5] transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: pillar.bg, animationDelay: `${delay}ms` }}
        >
          <Icon
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12"
            strokeWidth={1.5}
            style={{ color: pillar.accent }}
          />
        </div>

        <h3 className="mb-3 font-serif text-2xl font-bold text-[#2D1C59] sm:text-[26px]">
          {pillar.title}
        </h3>

        <span
          aria-hidden="true"
          className="mb-5 block h-0.5 w-12 rounded-full transition-all duration-500 group-hover:w-20"
          style={{ backgroundColor: pillar.accent }}
        />

        <p className="text-[17px] leading-relaxed text-[#4A5D54]">
          {pillar.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function ManifestoSection() {
  const [first, second] = content.pillars;

  return (
    <section
      id="manifesto"
      className="section-y relative overflow-x-clip bg-[#FAF7F2] pt-10 pb-20 sm:pt-16 sm:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C5A265]/10 blur-3xl" />
      </div>

      <div className="container-x relative z-20 mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl space-y-4 text-center sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C5A265]/60" />
            <Flower2 className="animate-spin-slow h-6 w-6 text-[#C5A265]" />
            <span className="h-px w-8 bg-[#C5A265]/60" />
          </div>
          <h2 className="font-serif text-[32px] leading-tight text-[#2D1C59] sm:text-[38px] lg:text-[46px]">
            {content.title}
          </h2>
          <p className="text-[17px] leading-relaxed text-[#4A5D54] sm:text-[19px]">
            {content.subtitle}
          </p>
        </Reveal>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 md:grid md:grid-cols-2 md:gap-16 lg:gap-20">
          
          <PillarCard pillar={first} direction="left" delay={0} />

          <div className="flex w-full justify-center md:hidden">
            <Reveal direction="zoom" delay={150}>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A265]/30 bg-white text-[#B88B4A] shadow-sm">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A265] opacity-20 duration-1000"></span>
                <ArrowDown className="animate-bounce-subtle relative h-6 w-6" />
              </div>
            </Reveal>
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <Reveal direction="zoom" delay={150}>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A265]/30 bg-white text-[#B88B4A] shadow-sm">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A265] opacity-20 duration-1000"></span>
                <ArrowRight className="animate-slide-right relative h-6 w-6" />
              </div>
            </Reveal>
          </div>

          <PillarCard pillar={second} direction="right" delay={300} />
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }

        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-slide-right { animation: slide-right 2s ease-in-out infinite; }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
      `}} />
    </section>
  );
}