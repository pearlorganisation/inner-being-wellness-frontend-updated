"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Film } from "lucide-react";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function FilmSection() {
  const router = useRouter();
  const data = siteData.homePage.filmSection;

  if (!data) return null;

  return (
    <section id={data.id} className="section-y bg-[#FBF9F5]">
      <div className="container-x">
        {/* Heading */}
        <Reveal className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
            <span className="h-px w-6 bg-[#B88B4A]" />
            <Film className="h-4 w-4" aria-hidden />
            {data.eyebrow}
            <span className="h-px w-6 bg-[#B88B4A]" />
          </div>

          <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
            {data.title}
          </h2>

          <p className="text-base leading-relaxed text-[#475A51]">
            {data.description}
          </p>

          {data.releaseNote && (
            <span className="inline-block rounded-full bg-[#2D1C59] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {data.releaseNote}
            </span>
          )}
        </Reveal>

        {/* Videos */}

{/* Videos */}
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
  {data.videos.map((v, idx) => (
    <Reveal key={v.src} delay={idx * 100} className="h-full">
      <div className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white p-2 shadow-md">
        <video
          key={v.src}
          src={v.src}
          title={v.title}
          aria-label={v.title}
          className="mx-auto aspect-[9/16] max-h-[560px] w-full rounded-xl bg-black object-contain"
          controls
          playsInline
          preload="metadata"
        >
          Your browser does not support HTML5 video.
        </video>
      </div>
    </Reveal>
  ))}
</div>

        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {data.videos.map((v, idx) => (
            <Reveal key={v.src} delay={idx * 100} className="h-full">
              <div className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white p-2 shadow-md">
                <video
                  src={v.src}
                  poster={v.poster}
                  title={v.title}
                  aria-label={v.title}
                  className="mx-auto aspect-[9/16] max-h-[560px] w-full rounded-xl bg-black object-contain"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </Reveal>
          ))}
        </div> */}

        {/* Question + CTA */}
        <Reveal className="mx-auto mt-10 max-w-2xl space-y-4 text-center sm:mt-14">
          <p className="font-serif text-xl italic leading-snug text-[#2D1C59] sm:text-2xl">
            {data.question}
          </p>
          <p className="text-base text-[#475A51]">{data.subtext}</p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(data.cta.href)}
              className="w-full justify-center sm:w-auto"
            >
              {data.cta.label}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {data.note && (
            <p className="pt-2 text-xs italic text-[#7A8E83]">{data.note}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
