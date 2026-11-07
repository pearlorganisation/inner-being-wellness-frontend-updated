"use client";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Brain,
  GraduationCap,
  HeartHandshake,
  Waves,
  Quote,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const CTA_LABEL = "Book Free Discovery Call";

const founder = {
  name: "Muazzam Abdul Rehman",
  title: "Managing Director, Jusoor Facility Management",
  image: "/assets/aistudio/image2_aedbb8dd.jpeg",
  badge: "Founder Story",
  heading: "From Executive Leadership to Inner Transformation",
  intro:
    "For decades, Muazzam Abdul Rehman built his career around structure, strategy, and high-level management. Academically trained with an MBA and specialized in organizational leadership, he serves as the Managing Director of Jusoor Facility Management across Abu Dhabi and Dubai, mastering the art of driving operational excellence and leading complex organizations.",
  quote:
    "Yet, despite his corporate achievements, Muazzam realized that external success is only half the equation—true performance, vitality, and fulfillment begin from within.",
  credentials: [
    { icon: GraduationCap, label: "MBA, specialized in organizational leadership" },
    { icon: Briefcase, label: "Managing Director, Jusoor Facility Management (Abu Dhabi & Dubai)" },
    { icon: Brain, label: "Certified Master NLP Practitioner" },
    { icon: HeartHandshake, label: "EFT & Ho’oponopono Specialist" },
    { icon: Waves, label: "Bioenergetic Frequency Expert in Subconscious Reprogramming" },
  ],
};

export default function FounderSpotlight() {
  const router = useRouter();

  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient background accents
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C5A265]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0E6E6B]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2D1C59]/10 to-transparent" />
      </div> */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C5A265]/40 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B88B4A] shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88B4A]" />
            {founder.badge}
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-[1.15] tracking-tight text-[#2D1C59] sm:text-4xl lg:text-[2.75rem]">
            {founder.heading}
          </h2>
        </Reveal>

        {/* Main content grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Portrait column */}
          <Reveal
            direction="left"
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="group relative mx-auto max-w-md lg:max-w-none">
              {/* Offset frame accent */}
              {/* <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[2rem] border border-[#C5A265]/50 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 sm:block"
              /> */}
              <div className="relative overflow-hidden rounded-[2rem] border border-[#2D1C59]/10 bg-white shadow-2xl shadow-[#2D1C59]/10">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231754]/60 via-transparent to-transparent" /> */}

                {/* Name plate */}
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-lg backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-serif text-base font-bold leading-tight text-[#2D1C59] sm:text-lg">
                        {founder.name}
                      </h3>
                      <p className="mt-0.5 truncate text-xs text-[#52655B] sm:text-sm">
                        {founder.title}
                      </p>
                    </div>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3F1EF] text-[#0E6E6B]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Narrative + credentials column */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal className="space-y-5">
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#475A51] sm:text-base">
                {founder.intro}
              </p>
            </Reveal>

            {/* Quote card */}
            <Reveal delay={100} className="mt-6 sm:mt-8">
              <blockquote className="relative overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
                <Quote
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 h-16 w-16 text-[#C5A265]/15"
                  strokeWidth={1.2}
                />
                <div className="relative">
                  <span className="mb-2 block h-1 w-10 rounded-full bg-[#C5A265]" />
                  <p className="font-serif text-base italic leading-relaxed text-[#2D1C59] sm:text-lg">
                    “{founder.quote}”
                  </p>
                </div>
              </blockquote>
            </Reveal>

            {/* Credentials */}
            <div className="mt-8 sm:mt-10">
              <Reveal>
                <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B88B4A]">
                  <span className="h-px w-5 bg-[#B88B4A]" />
                  Credentials & Expertise
                </h3>
              </Reveal>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {founder.credentials.map(({ icon: Icon, label }, i) => (
                  <Reveal
                    as="li"
                    key={label}
                    delay={160 + i * 70}
                    className={`min-w-0 ${
                      i === founder.credentials.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="group/card flex h-full items-center gap-3 rounded-xl border border-[#2D1C59]/10 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0E6E6B]/30 hover:shadow-md">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E3F1EF] text-[#0E6E6B] transition-colors duration-300 group-hover/card:bg-[#0E6E6B] group-hover/card:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="min-w-0 text-sm font-medium leading-snug text-[#2A3630]">
                        {label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <Reveal
              delay={520}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Button
                variant="primary"
                size="md"
                className="group w-full justify-center sm:w-auto"
                onClick={() => router.push("/about")}
              >
                Read Full Journey
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full justify-center sm:w-auto"
                onClick={() => router.push("/contact#contact-form")}
              >
                {CTA_LABEL}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}