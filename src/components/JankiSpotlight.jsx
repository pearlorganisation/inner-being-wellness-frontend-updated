// src/components/JankiSpotlight.jsx
// Home page par Founder section ke baad lagao: <JankiSpotlight />
import Image from "next/image";
import { jankiData as d } from "@/data/janki";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function JankiSpotlight() {
  return (
    <section
      id="janki"
      className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24"
    >
      {/* 1. Ambient Background Accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C5A265]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0E6E6B]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2. items-center ensures text stays vertically centered with the image */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* === IMAGE COLUMN === */}
          <Reveal direction="right" className="min-w-0 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              {/* aspect-[3/4] gives the exact portrait ratio for Janki's image, preventing face cut */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-[#2D1C59]/5">
                <Image
                  src={d.images.work}
                  alt={d.images.alt?.work || `${d.name}, personal coach to founders and leaders`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* === CONTENT COLUMN === */}
          <div className="flex flex-col justify-center lg:order-1">
            <Reveal>
              {/* Font Increased +2px: text-xs -> text-sm */}
              <span className="text-sm font-semibold tracking-[0.2em] text-[#B88B4A]">
                {d.spotlight.badge}
              </span>
              {/* Font Increased +2px: 30px->32px, 36px->38px, 44px->46px */}
              <h2 className="mt-3 font-serif text-[32px] leading-tight text-[#2D1C59] sm:text-[38px] lg:text-[46px]">
                {d.name}
              </h2>
              {/* Font Increased +2px: 14px->16px, 16px->18px */}
              <p className="mt-2 text-base font-semibold text-[#0E6E6B] sm:text-lg">
                {d.role}
              </p>
            </Reveal>

            <Reveal delay={100}>
              {/* Font Increased +2px: 15px->17px, 16px->18px */}
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#475A51] sm:text-lg">
                {d.hero.intro}
              </p>
            </Reveal>

            <Reveal delay={160}>
              {/* Font Increased +2px: 15px->17px, 16px->18px */}
              <ul className="mt-6 space-y-3 text-[17px] text-[#475A51] sm:text-lg">
                {d.ways.items.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A265]"
                    />
                    <span className="min-w-0 leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 sm:mt-10">
                <Button
                  variant="primary"
                  size="md"
                  href={d.spotlight.cta.href}
                  className="w-full justify-center text-base sm:w-auto"
                >
                  {d.spotlight.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}