"use client";

import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import {
  Heart,
  Sun,
  Compass,
  ArrowRight,
  Anchor,
  Layers,
  User,
  Award,
  Check,
  CheckCircle,
} from "lucide-react";

// Client: story ke paragraphs 2 aur 3 bullets mein (text wahi hai). false karo to purana plain paragraphs.
const USE_BULLETS = true;

const principleIcons = { User, Layers, Anchor, Heart };

// Original chips (content change nahi)
const chips = [
  "10+ Years Corporate Leadership",
  "Certified Coach & Master NLP",
  "EFT & Subconscious Alignment",
  "Bioenergetic Field Harmonization",
];

const eyebrow =
  "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#B88B4A]";

export default function AboutPage() {
  const router = useRouter();
  const { aboutPage, brand } = siteData;

  const handleNav = (href) => router.push(href);

  const [leadParagraph, ...restParagraphs] = aboutPage.story.paragraphs;

  return (
    <div className="relative w-full overflow-x-clip bg-[#FAF7F2]">
      
      {/* Ambient Background Accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#C5A265]/10 blur-3xl" />
        <div className="absolute -right-32 top-[800px] h-96 w-96 rounded-full bg-[#0E6E6B]/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 1. HERO */}
        <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="max-w-3xl space-y-6">
                <div className={`hero-rise ${eyebrow}`} style={{ "--d": "0ms" }}>
                  <span className="h-px w-6 bg-[#B88B4A]" />
                  {aboutPage.hero.badge}
                  <span className="h-px w-6 bg-[#B88B4A]" />
                </div>

                <h1
                  className="hero-rise font-serif text-[40px] leading-[1.14] text-[#2D1C59] sm:text-5xl lg:text-6xl"
                  style={{ "--d": "120ms" }}
                >
                  {aboutPage.hero.title}
                </h1>

                <p
                  className="hero-rise text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]"
                  style={{ "--d": "240ms" }}
                >
                  {aboutPage.hero.subtitle}
                </p>
              </div>

              <div className="hero-rise w-full" style={{ "--d": "200ms" }}>
                <div className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-[#2D1C59]/10">
                  <img
                    src="/assets/aistudio/imagee.jpeg"
                    alt="Inner Being Wellness"
                    className="block h-[300px] w-full object-cover object-center sm:h-[400px] lg:h-[500px]"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. FOUNDER STORY */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal direction="left" className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#2D1C59]/10 lg:max-w-none">
                  <img
                    src="/assets/aistudio/image2_aedbb8dd.jpeg"
                    alt="Founder Muazzam Abdul Rehman"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1E1244]/80 via-transparent to-transparent" />

                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="font-serif text-[22px] font-bold text-[#2D1C59]">
                          {brand.founderName}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-[#52655B]">
                          {brand.founderTitle}
                        </p>
                      </div>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FAF4E6] text-[#B88B4A]">
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="space-y-8 lg:col-span-7">
                <Reveal className="space-y-4">
                  <div className={eyebrow}>
                    <span className="h-px w-6 bg-[#B88B4A]" />
                    {aboutPage.story.badge}
                  </div>
                  <h2 className="font-serif text-[32px] leading-tight text-[#2D1C59] sm:text-4xl lg:text-[42px]">
                    {aboutPage.story.title}
                  </h2>
                  <h3 className="font-serif text-xl italic text-[#0E6E6B] sm:text-[22px]">
                    {aboutPage.story.subtitle}
                  </h3>

                  {USE_BULLETS ? (
                    <p className="text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">{leadParagraph}</p>
                  ) : (
                    <div className="space-y-4 text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">
                      {aboutPage.story.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  )}
                </Reveal>

                {USE_BULLETS && (
                  <ul className="space-y-4">
                    {restParagraphs.map((p, i) => (
                      <Reveal as="li" key={i} delay={100 + i * 100}>
                        <div className="flex items-start gap-4 text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F1EF] text-[#0E6E6B]">
                            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </span>
                          <span>{p}</span>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                )}

                {/* Original chips */}
                <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                  {chips.map((label, i) => (
                    <Reveal as="li" key={label} delay={250 + i * 80}>
                      <div className="group flex h-full items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                        <CheckCircle className="h-5 w-5 shrink-0 text-[#0E6E6B] transition-colors group-hover:text-[#C5A265]" />
                        <span className="text-[15px] font-medium text-[#3E5147]">{label}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BRIDGING LEADERSHIP, MINDSET & BIOENERGETIC HEALING */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#2D1C59]/5">
              <img
                src={aboutPage.bridgingSection.bannerImage.src}
                alt={aboutPage.bridgingSection.bannerImage.alt}
                className="block h-auto max-h-[400px] w-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              <div className="space-y-6 p-8 sm:p-12 lg:p-16">
                <div className={eyebrow}>
                  <span className="h-px w-6 bg-[#B88B4A]" />
                  {aboutPage.bridgingSection.badge}
                </div>
                <h3 className="font-serif text-[28px] leading-tight text-[#2D1C59] sm:text-4xl">
                  {aboutPage.bridgingSection.title}
                </h3>
                <div className="space-y-5 text-[17px] leading-relaxed text-[#4A5E54] sm:text-[19px]">
                  {aboutPage.bridgingSection.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. THE TURNING POINT */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal direction="left" className="order-2 space-y-6 lg:order-1 lg:col-span-7">
                <div className={eyebrow}>
                  <span className="h-px w-6 bg-[#B88B4A]" />
                  {aboutPage.transition.eyebrow}
                </div>
                <h2 className="font-serif text-[32px] leading-tight text-[#2D1C59] sm:text-4xl lg:text-[42px]">
                  {aboutPage.transition.title}
                </h2>
                <div className="space-y-5 text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">
                  {aboutPage.transition.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal direction="right" className="order-1 lg:order-2 lg:col-span-5">
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#2D1C59]/10">
                  <img
                    src={aboutPage.transition.image.src}
                    alt={aboutPage.transition.image.alt}
                    className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. A MESSAGE FROM OUR FOUNDER */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal direction="left" className="lg:col-span-5">
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#2D1C59]/10">
                  <img
                    src={aboutPage.founderMessage.stillLifeImage.src}
                    alt={aboutPage.founderMessage.stillLifeImage.alt}
                    className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal direction="right" className="space-y-6 lg:col-span-7">
                <div className={eyebrow}>
                  <span className="h-px w-6 bg-[#B88B4A]" />
                  {aboutPage.founderMessage.badge}
                </div>

                <blockquote className="border-l-4 border-[#C5A265] pl-5 font-serif text-[26px] italic leading-snug text-[#2D1C59] sm:text-[32px]">
                  "{aboutPage.founderMessage.quote}"
                </blockquote>

                <div className="space-y-5 text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">
                  {aboutPage.founderMessage.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-4">
                  <span className="block font-serif text-[18px] font-bold text-[#2D1C59]">
                    — {brand.founderName}
                  </span>
                  <span className="mt-1 block text-[15px] text-[#62776E]">{brand.founderTitle}</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6. OUR APPROACH */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#B88B4A]">
                {aboutPage.approach.eyebrow}
              </span>
              <h2 className="font-serif text-[32px] text-[#2D1C59] sm:text-4xl lg:text-[42px]">
                {aboutPage.approach.title}
              </h2>
              <p className="text-[17px] leading-relaxed text-[#4A5D54] sm:text-[19px]">{aboutPage.approach.description}</p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {aboutPage.approach.principles.map((principle, idx) => {
                const Icon = principleIcons[principle.icon] || User;
                return (
                  <Reveal key={principle.id} delay={idx * 100} className="h-full">
                    <div className="group flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D1C59]/10">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF4E6] text-[#B88B4A] transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-3 font-serif text-[22px] font-bold text-[#2D1C59]">
                        {principle.title}
                      </h3>
                      <p className="text-[16px] leading-relaxed text-[#54685E]">
                        {principle.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. VISION & MISSION */}
        <section id="vision-mission" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-6 lg:col-span-7">
                <Reveal className="space-y-4">
                  <h2 className="font-serif text-[32px] text-[#2D1C59] sm:text-4xl lg:text-[42px]">
                    {aboutPage.visionMission.title}
                  </h2>
                  <p className="text-[17px] text-[#475A51] sm:text-[19px]">{aboutPage.visionMission.subtitle}</p>
                </Reveal>

                <div className="space-y-5 pt-2">
                  <Reveal delay={100}>
                    <div className="space-y-3 rounded-[1.5rem] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
                      <div className="flex items-center gap-3 text-[#B88B4A]">
                        <Sun className="h-7 w-7" />
                        <h3 className="font-serif text-[22px] font-bold text-[#2D1C59]">
                          {aboutPage.visionMission.vision.title}
                        </h3>
                      </div>
                      <p className="text-[16px] leading-relaxed text-[#4E6258]">
                        {aboutPage.visionMission.vision.description}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={200}>
                    <div className="space-y-3 rounded-[1.5rem] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
                      <div className="flex items-center gap-3 text-[#0E6E6B]">
                        <Compass className="h-7 w-7" />
                        <h3 className="font-serif text-[22px] font-bold text-[#2D1C59]">
                          {aboutPage.visionMission.mission.title}
                        </h3>
                      </div>
                      <p className="text-[16px] leading-relaxed text-[#4E6258]">
                        {aboutPage.visionMission.mission.description}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal direction="right" className="lg:col-span-5">
                <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#2D1C59]/10">
                  <img
                    src={aboutPage.visionMission.image.src}
                    alt={aboutPage.visionMission.image.alt}
                    className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="pb-24 pt-12 text-center sm:pt-16">
          <Reveal className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-[32px] text-[#2D1C59] sm:text-4xl lg:text-[42px]">
              {aboutPage.finalCta.title}
            </h2>
            <p className="mx-auto max-w-xl text-[17px] leading-relaxed text-[#4E6258] sm:text-[19px]">
              {aboutPage.finalCta.description}
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleNav("/contact#contact-form")}
                className="w-full justify-center sm:w-auto"
              >
                {aboutPage.finalCta.cta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}