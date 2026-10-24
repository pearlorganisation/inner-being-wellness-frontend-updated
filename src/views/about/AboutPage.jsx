"use client";

import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import {
  Sparkles,
  Heart,
  Sun,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Anchor,
  Layers,
  User,
  Award,
} from "lucide-react";

export default function AboutPage() {
  const router = useRouter();
  const { aboutPage, brand } = siteData;

  const handleNav = (href) => {
    router.push(href);
  };

  return (
    <div className="w-full bg-[#FBF9F5]">
      {/* 1. HERO SECTION */}
      {/* <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              <span className="w-6 h-px bg-[#B88B4A]" />
              {aboutPage.hero.badge}
              <span className="w-6 h-px bg-[#B88B4A]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.14]">
              {aboutPage.hero.title}
            </h1>

            <p className="text-lg text-[#475A51] leading-relaxed">
              {aboutPage.hero.subtitle}
            </p>
          </div>
        </div>
      </section> */}
      
      {/* 1. HERO SECTION */}
      <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Existing Hero Content */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {aboutPage.hero.badge}
                <span className="w-6 h-px bg-[#B88B4A]" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.14]">
                {aboutPage.hero.title}
              </h1>

              <p className="text-lg text-[#475A51] leading-relaxed">
                {aboutPage.hero.subtitle}
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="w-full">
              <div className="relative w-full overflow-hidden rounded-3xl">
                <img
                  src="/assets/aistudio/imagee.jpeg"
                  alt="Inner Being Wellness"
                  className="block w-full h-[280px] sm:h-[380px] lg:h-[460px] object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. FOUNDER STORY (FIXED WITH REAL FOUNDER PHOTO: image2_aedbb8dd.jpeg) */}
      <section className="py-20 lg:py-28 border-b border-[#2D1C59]/10 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column with authentic portrait of Muazzam */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2D1C59]/15 bg-white">
                <img
                  src="/assets/aistudio/image2_aedbb8dd.jpeg"
                  alt="Founder Muazzam Abdul Rehman"
                  className="w-full h-[520px] sm:h-[580px] object-cover object-top hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1244]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#2D1C59]">
                        {brand.founderName}
                      </h4>
                      <p className="text-xs text-[#52655B] font-medium mt-0.5">
                        {brand.founderTitle}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FAF4E6] border border-[#E8A948]/40 flex items-center justify-center text-[#B88B4A]">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {aboutPage.story.badge}
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
                {aboutPage.story.title}
              </h2>

              <h3 className="text-xl text-[#0E6E6B] font-serif italic">
                {aboutPage.story.subtitle}
              </h3>

              <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
                {aboutPage.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#3E5147]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#2D1C59]/10">
                  <CheckCircle className="w-4 h-4 text-[#0E6E6B] shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">10+ Years Corporate Leadership</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#2D1C59]/10">
                  <CheckCircle className="w-4 h-4 text-[#0E6E6B] shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Certified Coach & Master NLP</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#2D1C59]/10">
                  <CheckCircle className="w-4 h-4 text-[#0E6E6B] shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">EFT & Subconscious Alignment</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#2D1C59]/10">
                  <CheckCircle className="w-4 h-4 text-[#0E6E6B] shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Bioenergetic Field Harmonization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRIDGING LEADERSHIP, MINDSET & BIOENERGETIC HEALING */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-[#2D1C59]/15 bg-white shadow-xl">
            {/* Top decorative banner graphic from Figma */}
            <div className="relative">
              <img
                src={aboutPage.bridgingSection.bannerImage.src}
                alt={aboutPage.bridgingSection.bannerImage.alt}
                className="w-full h-auto object-cover max-h-[380px]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {aboutPage.bridgingSection.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#2D1C59]">
                {aboutPage.bridgingSection.title}
              </h3>

              <div className="space-y-4 text-base text-[#4A5E54] leading-relaxed">
                {aboutPage.bridgingSection.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE TURNING POINT */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {aboutPage.transition.eyebrow}
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
                {aboutPage.transition.title}
              </h2>

              <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
                {aboutPage.transition.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#2D1C59]/10 bg-white">
                <img
                  src={aboutPage.transition.image.src}
                  alt={aboutPage.transition.image.alt}
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A MESSAGE FROM OUR FOUNDER */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual with Still Life Stones & Leaves */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#2D1C59]/10 shadow-xl bg-white">
                <img
                  src={aboutPage.founderMessage.stillLifeImage.src}
                  alt={aboutPage.founderMessage.stillLifeImage.alt}
                  className="w-full h-[440px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Quote and Message */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {aboutPage.founderMessage.badge}
              </div>

              <blockquote className="text-2xl sm:text-3xl font-serif italic text-[#2D1C59] leading-snug">
                "{aboutPage.founderMessage.quote}"
              </blockquote>

              <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
                {aboutPage.founderMessage.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2">
                <span className="block text-base font-serif font-bold text-[#2D1C59]">
                  — {brand.founderName}
                </span>
                <span className="text-xs text-[#62776E]">
                  {brand.founderTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH (4 PRINCIPLES) */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {aboutPage.approach.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {aboutPage.approach.title}
            </h2>
            <p className="text-base text-[#4A5D54]">
              {aboutPage.approach.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPage.approach.principles.map((principle) => (
              <div
                key={principle.id}
                className="bg-white rounded-2xl p-8 border border-[#2D1C59]/10 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] text-[#B88B4A] flex items-center justify-center mb-6 border border-[#E9DCBF]">
                  {principle.icon === "User" && <User className="w-6 h-6" />}
                  {principle.icon === "Layers" && <Layers className="w-6 h-6" />}
                  {principle.icon === "Anchor" && <Anchor className="w-6 h-6" />}
                  {principle.icon === "Heart" && <Heart className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-serif text-[#2D1C59] mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#54685E] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISION & MISSION */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Vision and Mission Blocks */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
                  {aboutPage.visionMission.title}
                </h2>
                <p className="text-base text-[#475A51]">
                  {aboutPage.visionMission.subtitle}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-8 rounded-2xl bg-white border border-[#2D1C59]/10 shadow-xs space-y-3">
                <div className="flex items-center gap-3 text-[#B88B4A]">
                  <Sun className="w-6 h-6" />
                  <h3 className="text-xl font-serif font-bold text-[#2D1C59]">
                    {aboutPage.visionMission.vision.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4E6258] leading-relaxed">
                  {aboutPage.visionMission.vision.description}
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-8 rounded-2xl bg-white border border-[#2D1C59]/10 shadow-xs space-y-3">
                <div className="flex items-center gap-3 text-[#0E6E6B]">
                  <Compass className="w-6 h-6" />
                  <h3 className="text-xl font-serif font-bold text-[#2D1C59]">
                    {aboutPage.visionMission.mission.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4E6258] leading-relaxed">
                  {aboutPage.visionMission.mission.description}
                </p>
              </div>
            </div>

            {/* Tree of Life Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#2D1C59]/10 shadow-xl bg-white">
                <img
                  src={aboutPage.visionMission.image.src}
                  alt={aboutPage.visionMission.image.alt}
                  className="w-full h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-[#FBF9F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
            {aboutPage.finalCta.title}
          </h2>
          <p className="text-base text-[#4E6258] leading-relaxed">
            {aboutPage.finalCta.description}
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNav(aboutPage.finalCta.cta.href)}
            >
              {aboutPage.finalCta.cta.label}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
