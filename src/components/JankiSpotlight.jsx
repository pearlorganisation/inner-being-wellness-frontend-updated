// src/components/JankiSpotlight.jsx
// Home page par Founder section ke baad lagao: <JankiSpotlight />
import Image from "next/image";               
import { jankiData as d } from "@/data/janki";
import Button from "@/components/ui/Button";

export default function JankiSpotlight() {
  return (
    <section id="janki" className="bg-[#F6F3EC] py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-white lg:order-2 lg:max-w-none">
          <Image
            src={d.images.work}
            alt={`${d.name}, personal coach to founders and leaders`}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-top"
          />
        </div>

        <div className="lg:order-1">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C59B27]">
            {d.spotlight.badge}
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl">
            {d.name}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#0F6F73]">{d.role}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-[#445064]">{d.hero.intro}</p>

          <ul className="mt-6 space-y-2 text-[#445064]">
            {d.ways.items.map((w) => (
              <li key={w} className="flex gap-3">
                <span aria-hidden className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C59B27]" />
                <span>{w}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button variant="primary" size="md" href={d.spotlight.cta.href}>
              {d.spotlight.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}