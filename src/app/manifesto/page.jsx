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

/* File ke bahar defined: re-render pe remount nahi hota, animation state safe rehti hai */
function PillarCard({ pillar, delay, direction }) {
  const Icon = pillar.icon;
  return (
    <Reveal direction={direction} delay={delay} className="h-full min-w-0">
      {/* Premium Hover: Card upar uthega, shadow deep hogi, aur smooth transition */}
      <div className="group flex h-full flex-col items-center rounded-[2rem] border border-[#2D1C59]/5 bg-white px-6 py-10 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2D1C59]/10 sm:px-8 sm:py-12">
        
        {/* Icon Container with Floating Animation */}
        <div
          className="animate-float mb-6 flex h-20 w-20 items-center justify-center rounded-full ring-8 ring-[#FBF9F5] transition-transform duration-500 group-hover:scale-110 group-hover:ring-white"
          style={{ backgroundColor: pillar.bg, animationDelay: `${delay}ms` }}
        >
          <Icon
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
            strokeWidth={1.5}
            style={{ color: pillar.accent }}
          />
        </div>

        {/* Title (+2px) */}
        <h3 className="mb-3 font-serif text-[26px] text-[#2D1C59] transition-colors duration-300 group-hover:text-[#B88B4A]">
          {pillar.title}
        </h3>

        {/* Divider Line expands on hover */}
        <span
          aria-hidden="true"
          className="mb-4 block h-0.5 w-10 rounded-full transition-all duration-500 ease-out group-hover:w-20"
          style={{ backgroundColor: pillar.accent }}
        />

        {/* Description (+2px) */}
        <p className="max-w-sm text-[17px] leading-relaxed text-[#4A5D54]">
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
      className="section-y relative overflow-x-clip bg-[#FAF7F2] pt-0"
    >
      {/* 1. Subtle Background Animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C5A265]/10 blur-3xl" />
        <div className="animate-float absolute right-10 top-40 h-40 w-40 rounded-full bg-[#0E6E6B]/5 blur-2xl" />
      </div>

      <div className="container-x relative z-20 max-w-6xl">
        {/* Heading */}
        <Reveal className="mx-auto mb-12 max-w-2xl space-y-4 text-center sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C5A265]/60" />
            <Flower2 className="animate-spin-slow h-6 w-6 text-[#C5A265]" />
            <span className="h-px w-8 bg-[#C5A265]/60" />
          </div>
          {/* Heading (+2px) */}
          <h2 className="font-serif text-[32px] leading-tight text-[#2D1C59] sm:text-[38px] lg:text-[50px]">
            {content.title}
          </h2>
          {/* Subtitle (+2px) */}
          <p className="text-[17px] leading-relaxed text-[#4A5D54] sm:text-[19px]">
            {content.subtitle}
          </p>
        </Reveal>

        {/* Cards + connector */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8">
          <PillarCard pillar={first} direction="left" delay={0} />

          {/* 2. Connector Arrow with Pulse Ring Animation */}
          <Reveal
            delay={150}
            direction="zoom"
            className="flex items-center justify-center py-2 md:py-0"
          >
            <div className="relative flex items-center justify-center">
              {/* Animated Pulse Ring */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A265] opacity-20 duration-1000"></span>
              
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A265]/30 bg-white text-[#B88B4A] shadow-sm">
                <ArrowRight className="animate-slide-right hidden h-6 w-6 md:block" />
                <ArrowDown className="animate-bounce-subtle h-6 w-6 md:hidden" />
              </span>
            </div>
          </Reveal>

          <PillarCard pillar={second} direction="right" delay={300} />
        </div>
      </div>

      {/* Custom Keyframes for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}