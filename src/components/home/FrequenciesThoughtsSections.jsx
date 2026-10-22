import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { homeSectionsData } from "@/data/homeSectionsData";

const TONES = {
  purple: "text-[#2D1C59]",
  teal: "text-[#0E6E6B]",
  "deep-teal": "text-[#0B4F52]",
};

function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#C5A265] sm:text-xs">
      <span className="h-px w-5 bg-[#C5A265]/70" />
      {children}
      <span className="h-px w-5 bg-[#C5A265]/70" />
    </p>
  );
}

function Title({ lines }) {
  return (
    <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1]">
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.map((p, j) => (
            <span
              key={j}
              className={`${TONES[p.tone] || TONES.purple} ${p.italic ? "italic" : ""}`}
            >
              {p.text}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}

function Row({ section }) {
  const imageLeft = section.imageSide === "left";

  return (
    <div
      id={section.id}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-0"
    >
      {/* picture: first on mobile; side chosen from data on desktop */}
      <div className={`order-1 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={section.image.src}
          alt={section.image.alt}
          width={section.image.width}
          height={section.image.height}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={`h-auto w-full object-cover mix-blend-multiply rounded-2xl ${
            imageLeft ? "lg:rounded-r-none" : "lg:rounded-l-none"
          }`}
        />
      </div>

      <div
        className={`order-2 space-y-5 ${
          imageLeft ? "lg:order-2 lg:pl-12 xl:pl-16" : "lg:order-1 lg:pr-12 xl:pr-16"
        }`}
      >
        <Eyebrow>{section.eyebrow}</Eyebrow>
        <Title lines={section.titleLines} />

        {section.body && (
          <p className="max-w-lg text-[0.95rem] leading-relaxed text-[#4A5560] sm:text-base">
            {section.body}
          </p>
        )}

        {section.quote && (
          <blockquote className="relative max-w-lg pl-9 font-serif text-[clamp(1.1rem,2vw,1.4rem)] leading-snug text-[#2D1C59]/90">
            <span
              aria-hidden="true"
              className="absolute left-0 top-[-0.35rem] font-serif text-5xl leading-none text-[#0E6E6B]"
            >
              “
            </span>
            {section.quote}”
            <span className="mt-4 block h-px w-10 bg-[#C5A265]/70" />
          </blockquote>
        )}

        {section.button && (
          <div className="pt-1">
            <Button
              variant="primary"
              size="lg"
              href={section.button.href}
              className="!bg-gradient-to-r !from-[#F4C95D] !to-[#E8A948]"
            >
              {section.button.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FrequenciesThoughtsSections() {
  const { decorations, sections } = homeSectionsData;

  return (
    <section
      aria-label="Healing frequencies and reflections"
      className="relative overflow-hidden  bg-[#FBF9F5] py-14 sm:py-16 lg:py-20"
    >
      {decorations.leaf && (
        <img
          src={decorations.leaf}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute left-0 top-6 h-auto w-10 select-none sm:w-16 lg:w-24"
        />
      )}
      {decorations.golden && (
        <img
          src={decorations.golden}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-auto w-24 -scale-x-100 select-none mix-blend-multiply sm:block lg:w-36"
        />
      )}
      {decorations.leaf && (
        <img
          src={decorations.leaf}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute bottom-6 right-0 h-auto w-10 -scale-x-100 select-none sm:w-16 lg:w-24"
        />
      )}

      <div className="relative mx-auto max-w-6xl space-y-14 px-5 sm:space-y-16 sm:px-8 lg:space-y-20 lg:px-12">
        {sections.map((s) => (
          <Row key={s.id} section={s} />
        ))}
      </div>
    </section>
  );
}