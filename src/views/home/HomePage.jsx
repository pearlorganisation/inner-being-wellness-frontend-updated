








// "use client";
// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import Reveal from "@/components/ui/Reveal";
// import HeroSection from "@/components/home/HeroSection";
// import FounderSpotlight from "@/components/home/FounderSpotlight";
// import VideoShowcase from "@/components/home/VideoShowcase";
// import FrequenciesThoughtsSections from "@/components/home/FrequenciesThoughtsSections";
// import JankiSpotlight from "@/components/JankiSpotlight";
// import ManifestoSection from "@/components/home/ManifestoSection";
// import { ArrowRight, Volume2 } from "lucide-react";

// /* ------------------------------------------------------------------
//    PAGE SETTINGS
// ------------------------------------------------------------------- */
// // Client: ek hi CTA label poori site pe
// const CTA_LABEL = "Book Free Discovery Call";
// // Thoughts section mein homepage pe kitne cards dikhane hain (baaki /thoughts pe)
// const HOME_THOUGHTS_COUNT = 3;
// // Neeche wala FrequenciesThoughtsSections upar ke sections se duplicate hai.
// const SHOW_BOTTOM_SECTIONS = false;

// /* ------------------------------------------------------------------
//    CLIENT CONTENT
//    Images / hrefs siteData se aate hain, text yahan hai.
// ------------------------------------------------------------------- */
// const content = {
//   hero: {
//     kicker: "Inner Being Wellness • Abu Dhabi & Dubai",
//     line1: "Fix the “Being” first,",
//     line2: "and the “Doing” will naturally follow.",
//     subtitle:
//       "“If I am peace, my career decisions will be peaceful. If I am love, my relationships will be loving. So today we don’t fix career, money, or relationships—we fix the BEING.”",
//     cta: CTA_LABEL,
//     features: ["Peace", "Love", "Joy"],
//     cardLabel: "Our Manifesto",
//     cardQuote: "“Fix the Being first.”",
//   },

//   introduction: {
//     eyebrow: "Objective Verification",
//     title: "Human Touch Meets Modern Technology",
//     paragraphs: [
//       "We scientifically analyze and record your journey from illness to wellness. By blending deep inner awareness with modern frequency technology, you receive an objective report proving that inner alignment creates tangible real-world results.",
//       "Real-Time Biofield Feedback: our diagnostic dashboards visualize energetic shifts as they happen during your custom frequency protocol.",
//     ],
//   },

//   fourDefaults: {
//     eyebrow: "BIO-ENERGETIC RESET",
//     title: "Returning to Your Original Default Settings",
//     subtitle:
//       "When your internal battery is low, external achievements cannot truly power you up. Most modern dis-eases stem from stresses stored over time. We bring you back to your original state:",
//     cards: [
//       { id: "love", title: "Love", subtitle: "Default Setting 01", description: "Unconditional source resonance" },
//       { id: "peace", title: "Peace", subtitle: "Default Setting 02", description: "Unshakable inner calm" },
//       { id: "joy", title: "Joy", subtitle: "Default Setting 03", description: "Spontaneous lightness of being" },
//       { id: "contentment", title: "Contentment", subtitle: "Default Setting 04", description: "Deep fulfillment in the now" },
//       { id: "truth", title: "Truth", subtitle: "Default Setting 05", description: "Authentic self-expression" },
//       { id: "purity", title: "Purity", subtitle: "Default Setting 06", description: "Clear energetic container" },
//       { id: "honesty", title: "Honesty", subtitle: "Default Setting 07", description: "Radical internal integrity" },
//     ],
//   },

//   healingFrequencies: {
//     badge: "Advanced Bioresonance",
//     title: "Frequency-Based Energy Healing Protocols",
//     description:
//       "We blend deep inner awareness with modern frequency technology to clear blockages, restore biological equilibrium, and align your energy state across specialized dimensions.",
//     note: "Chakra Balancing · Holistic Health · Prosperity · Cell Harmony · Prostate Harmony · Vagus · Mental Clarity · Detoxify · Negative Entities Clearance",
//     ctaLabel: "Explore Frequencies",
//     overlay: "9 Frequency Protocols · Bioresonance · Biofield Balance",
//   },

//   journeySteps: {
//     eyebrow: "Real-Time Biofield Feedback",
//     title: "From Illness to Wellness, Objectively Recorded",
//     steps: [
//       { number: "01", title: "Biofield Measurement", description: "Pre- and post-session biofield measurement & resonance mapping." },
//       { number: "02", title: "HRV Tracking", description: "Heart rate variability (HRV) & parasympathetic coherence tracking." },
//       { number: "03", title: "Integration Guidance", description: "Personalized integration guidance rooted in ancient wisdom and modern science." },
//       { number: "04", title: "Custom Frequency Protocol", description: "Targeted bioresonance frequencies applied to clear blockages and restore energetic balance." },
//       { number: "05", title: "Nervous System Reset", description: "Somatic practices and guided breathwork to shift your body from survival mode into deep restoration." },
//       { number: "06", title: "Long-Term Vitality Plan", description: "Actionable lifestyle recommendations and ongoing support to sustain your original default state." },
//     ],
//   },

//   thoughtsPreview: {
//     badge: "Journal & Inner Inquiry",
//     title: "Reflections for Your Journey",
//     description:
//       "True realization arises from asking the right inner questions. Reflect deeply and save your answers below.",
//     readLabel: "Reflect now",
//     articles: [
//       { id: "inquiry-1", tag: "Career & Alignment", readTime: "Inquiry 01", title: "At work, do you act from peace or pressure?" },
//       { id: "inquiry-2", tag: "Relationships & Source", readTime: "Inquiry 02", title: "In relationships, do you give love or ask for love?" },
//       { id: "inquiry-3", tag: "Abundance & Wealth", readTime: "Inquiry 03", title: "With money, do you feel like a trustee, or operate from fear and ownership?" },
//       { id: "inquiry-4", tag: "Identity & Future", readTime: "Inquiry 04", title: "Who do you want to BE this year?" },
//     ],
//   },

//   finalCta: {
//     eyebrow: "Begin Your Transformation",
//     title: "Schedule Your Free Discovery Call",
//     description:
//       "Take the first step toward aligning your energy field, clearing deep stressors, and restoring your original default state with Muazzam Abdul Rehman.",
//     primary: CTA_LABEL,
//     secondary: "Explore Frequencies",
//   },
// };

// export default function HomePage() {
//   const router = useRouter();
//   const { homePage } = siteData;

//   const handleNav = (href) => {
//     router.push(href);
//   };

//   // Images siteData se (content ke items zyada ho to cycle hote hain)
//   const defaultsImages = homePage.fourDefaults.cards;
//   const thoughtsImages = homePage.thoughtsPreview.featuredArticles;

//   const homeVisibleDefaults = homePage.fourDefaults.homeVisibleCount ?? 4;
//   const visibleDefaults = content.fourDefaults.cards.slice(0, homeVisibleDefaults);
//   const hasMoreDefaults = content.fourDefaults.cards.length > visibleDefaults.length;
//   const visibleThoughts = content.thoughtsPreview.articles.slice(0, HOME_THOUGHTS_COUNT);

//   // Hero media (siteData.homePage.hero se). Dono optional-safe hain.
//   const heroVideo = homePage.hero?.video;
//   const heroImage = homePage.hero?.image;

//   return (
//     <div className="relative w-full overflow-x-hidden bg-[#FBF9F5]">
//       {/* 1. HERO */}
//       <HeroSection
//         kicker={content.hero.kicker}
//         line1={content.hero.line1}
//         line2={content.hero.line2}
//         subtitle={content.hero.subtitle}
//         cta={content.hero.cta}
//         features={content.hero.features}
//         cardLabel={content.hero.cardLabel}
//         cardQuote={content.hero.cardQuote}
//         video={heroVideo}
//         image={heroImage}
//         onCta={() => handleNav("/contact#contact-form")}
//       />

//       {/* 1b. INTRO VIDEO (hero ke neeche, wide rectangle) */}
//       <VideoShowcase data={homePage.videoSection} />

//       {/* 2. OUR MANIFESTO */}
//       <ManifestoSection />

//       {/* 3. INTRODUCTION */}
//       <section className="section-y bg-[#FBF9F5]">
//         <div className="container-x">
//           <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
//             <Reveal direction="left" className="order-2 min-w-0 lg:order-1 lg:col-span-5">
//               <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-xl">
//                 <img
//                   src={homePage.introduction.image.src}
//                   alt={homePage.introduction.image.alt}
//                   className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[480px]"
//                   referrerPolicy="no-referrer"
//                   loading="lazy"
//                 />
//               </div>
//             </Reveal>

//             <Reveal
//               direction="right"
//               className="order-1 min-w-0 space-y-5 sm:space-y-6 lg:order-2 lg:col-span-7"
//             >
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 <span className="h-px w-6 bg-[#B88B4A]" />
//                 {content.introduction.eyebrow}
//               </div>
//               <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
//                 {content.introduction.title}
//               </h2>
//               <div className="space-y-4 text-base leading-relaxed text-[#475A51]">
//                 {content.introduction.paragraphs.map((p, idx) => (
//                   <p key={idx}>{p}</p>
//                 ))}
//               </div>
//               <div className="pt-2">
//                 <Button
//                   variant="outline"
//                   size="md"
//                   onClick={() => handleNav("/about")}
//                   className="w-full justify-center sm:w-auto"
//                 >
//                   Meet the Founder
//                   <ArrowRight className="ml-1 h-4 w-4" />
//                 </Button>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* 4. FOUNDER SPOTLIGHT */}
//       <FounderSpotlight />

//       {/* 4b. JANKI RAVANI SPOTLIGHT */}
//       <JankiSpotlight />

//       {/* 5. DEFAULT SETTINGS */}
//       <section id="four-defaults" className="section-y bg-[#FBF9F5]">
//         <div className="container-x">
//           <Reveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               {content.fourDefaults.eyebrow}
//             </span>
//             <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
//               {content.fourDefaults.title}
//             </h2>
//             <p className="text-base text-[#4A5D54]">{content.fourDefaults.subtitle}</p>
//           </Reveal>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
//             {visibleDefaults.map((card, idx) => {
//               const img = defaultsImages[idx % defaultsImages.length].image;
//               return (
//                 <Reveal key={card.id} delay={idx * 100} className="h-full">
//                   <div className="group card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-xs">
//                     <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52">
//                       <img
//                         src={img.src}
//                         alt={img.alt}
//                         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         referrerPolicy="no-referrer"
//                         loading="lazy"
//                       />
//                       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                       <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-serif text-xs font-bold text-[#2D1C59] backdrop-blur-xs">
//                         {card.title}
//                       </div>
//                     </div>

//                     <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
//                       <div>
//                         <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#B88B4A]">
//                           {card.subtitle}
//                         </span>
//                         <p className="text-sm leading-relaxed text-[#4E6258]">
//                           {card.description}
//                         </p>
//                       </div>
//                       <div className="border-t border-slate-100 pt-3">
//                         <button
//                           onClick={() => handleNav("/offerings")}
//                           className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold text-[#0E6E6B] transition-colors hover:text-[#094D4B]"
//                         >
//                           <span>Explore practice</span>
//                           <ArrowRight className="h-3.5 w-3.5" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </Reveal>
//               );
//             })}
//           </div>

//           {hasMoreDefaults && (
//             <Reveal delay={150} className="mt-8 flex justify-center sm:mt-10">
//               <Button
//                 variant="outline"
//                 size="md"
//                 onClick={() =>
//                   handleNav(homePage.fourDefaults.fullViewCta?.href ?? "/offerings")
//                 }
//                 className="w-full justify-center sm:w-auto"
//               >
//                 {homePage.fourDefaults.fullViewCta?.label ?? "View all default settings"}
//                 <ArrowRight className="ml-1 h-4 w-4" />
//               </Button>
//             </Reveal>
//           )}
//         </div>
//       </section>

//       {/* 6. HEALING FREQUENCIES BANNER */}
//       <section className="section-y bg-[#FAF7F2]">
//         <div className="container-x">
//           <Reveal className="rounded-3xl border border-[#2D1C59]/12 bg-white p-4 shadow-sm sm:p-10 lg:p-12">
//             <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
//               <div className="min-w-0 lg:col-span-5">
//                 <div className="relative overflow-hidden rounded-2xl border border-[#2D1C59]/10 shadow-md">
//                   <img
//                     src={homePage.healingFrequencies.image.src}
//                     alt={homePage.healingFrequencies.image.alt}
//                     className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[400px]"
//                     referrerPolicy="no-referrer"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/60 p-3 text-xs text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
//                     <Volume2 className="h-4 w-4 shrink-0 text-[#E8A948]" />
//                     <span className="min-w-0">{content.healingFrequencies.overlay}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7">
//                 <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                   <span className="h-px w-6 bg-[#B88B4A]" />
//                   {content.healingFrequencies.badge}
//                 </div>
//                 <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
//                   {content.healingFrequencies.title}
//                 </h2>
//                 <p className="text-base leading-relaxed text-[#475A51]">
//                   {content.healingFrequencies.description}
//                 </p>
//                 <p className="text-xs italic leading-relaxed text-[#7A8E83]">
//                   {content.healingFrequencies.note}
//                 </p>
//                 <div className="pt-2">
//                   <Button
//                     variant="primary"
//                     size="md"
//                     onClick={() => handleNav(homePage.healingFrequencies.cta.href)}
//                     className="w-full justify-center sm:w-auto"
//                   >
//                     {content.healingFrequencies.ctaLabel}
//                     <ArrowRight className="ml-1 h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* 7. JOURNEY STEPS */}
//       <section className="section-y bg-[#FBF9F5]">
//         <div className="container-x">
//           <Reveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               {content.journeySteps.eyebrow}
//             </span>
//             <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
//               {content.journeySteps.title}
//             </h2>
//           </Reveal>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
//             {content.journeySteps.steps.map((step, idx) => (
//               <Reveal key={step.number} delay={idx * 120} className="h-full">
//                 <div className="card-hover relative h-full rounded-2xl border border-[#2D1C59]/10 bg-white p-6 shadow-xs sm:p-8">
//                   <span className="mb-3 block font-serif text-4xl font-bold text-[#2D1C59]/20 sm:mb-4">
//                     {step.number}
//                   </span>
//                   <h3 className="mb-2 font-serif text-lg text-[#2D1C59] sm:mb-3 sm:text-xl">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-[#4E6258]">{step.description}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 8. THOUGHTS & REFLECTIONS PREVIEW */}
//       <section className="section-y bg-[#FAF7F2]">
//         <div className="container-x">
//           <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:mb-14 sm:gap-6 md:flex-row md:items-end">
//             <div className="min-w-0 space-y-3">
//               <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 {content.thoughtsPreview.badge}
//               </span>
//               <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
//                 {content.thoughtsPreview.title}
//               </h2>
//               <p className="max-w-xl text-base text-[#4E6258]">
//                 {content.thoughtsPreview.description}
//               </p>
//             </div>
//             <div className="shrink-0">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => handleNav("/thoughts")}
//                 className="w-full justify-center md:w-auto"
//               >
//                 {homePage.thoughtsPreview.cta.label}
//                 <ArrowRight className="ml-1 h-3.5 w-3.5" />
//               </Button>
//             </div>
//           </Reveal>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
//             {visibleThoughts.map((article, idx) => {
//               const img = thoughtsImages[idx % thoughtsImages.length].image;
//               return (
//                 <Reveal key={article.id} delay={idx * 100} className="h-full">
//                   <article
//                     onClick={() => handleNav("/thoughts")}
//                     className="group card-hover flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-xs"
//                   >
//                     <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52">
//                       <img
//                         src={img.src}
//                         alt={img.alt}
//                         className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                         referrerPolicy="no-referrer"
//                         loading="lazy"
//                       />
//                       <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-md bg-[#2D1C59] px-2.5 py-1 text-sm font-semibold text-white sm:text-[15px]">
//                         {article.tag}
//                       </div>
//                     </div>

//                     <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
//                       <div className="space-y-2">
//                         <span className="text-xs text-[#8A9C92]">{article.readTime}</span>
//                         <h3 className="font-serif text-lg font-bold leading-snug text-[#2D1C59] transition-colors group-hover:text-[#0E6E6B]">
//                           {article.title}
//                         </h3>
//                       </div>
//                       <div className="flex items-center gap-1 pt-2 text-xs font-bold text-[#0E6E6B]">
//                         <span>{content.thoughtsPreview.readLabel}</span>
//                         <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//                       </div>
//                     </div>
//                   </article>
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 9. FINAL CTA */}
//       <section id="begin" className="section-y relative overflow-hidden bg-[#FBF9F5]">
//         <Reveal className="container-x relative z-10 max-w-5xl space-y-5 text-center sm:space-y-6">
//           <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//             <span className="h-px w-6 bg-[#B88B4A]" />
//             {content.finalCta.eyebrow}
//             <span className="h-px w-6 bg-[#B88B4A]" />
//           </div>

//           <h2 className="mx-auto max-w-2xl font-serif text-[28px] leading-tight text-[#2D1C59] sm:text-5xl">
//             {content.finalCta.title}
//           </h2>

//           <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4E6258]">
//             {content.finalCta.description}
//           </p>

//           <div className="mx-auto flex w-full max-w-sm flex-col items-stretch gap-3 pt-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => handleNav("/contact#contact-form")}
//               className="w-full justify-center sm:w-auto"
//             >
//               {content.finalCta.primary}
//               <ArrowRight className="ml-1 h-4 w-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => handleNav("/offerings")}
//               className="w-full justify-center sm:w-auto"
//             >
//               {content.finalCta.secondary}
//             </Button>
//           </div>
//         </Reveal>
//       </section>

//       {/* 10. HEALING FREQUENCIES + THOUGHTS (default off) */}
//       {SHOW_BOTTOM_SECTIONS && <FrequenciesThoughtsSections />}
//     </div>
//   );
// }






// updated 



"use client";
import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSection from "@/components/home/HeroSection";
import FounderSpotlight from "@/components/home/FounderSpotlight";
import VideoShowcase from "@/components/home/VideoShowcase";
import FilmSection from "@/components/home/FilmSection";
import FrequenciesThoughtsSections from "@/components/home/FrequenciesThoughtsSections";
import JankiSpotlight from "@/components/JankiSpotlight";
import ManifestoSection from "@/components/home/ManifestoSection";
import { ArrowRight, Volume2 } from "lucide-react";

/* ------------------------------------------------------------------
   PAGE SETTINGS
------------------------------------------------------------------- */
// Client: ek hi CTA label poori site pe
const CTA_LABEL = "Book Free Discovery Call";
// Thoughts section mein homepage pe kitne cards dikhane hain (baaki /thoughts pe)
const HOME_THOUGHTS_COUNT = 3;
// Neeche wala FrequenciesThoughtsSections upar ke sections se duplicate hai.
const SHOW_BOTTOM_SECTIONS = false;

/* ------------------------------------------------------------------
   CLIENT CONTENT
   Images / hrefs siteData se aate hain, text yahan hai.
------------------------------------------------------------------- */
const content = {
  hero: {
    kicker: "Inner Being Wellness • Abu Dhabi & Dubai",
    line1: "Fix the “Being” first,",
    line2: "and the “Doing” will naturally follow.",
    subtitle:
      "“If I am peace, my career decisions will be peaceful. If I am love, my relationships will be loving. So today we don’t fix career, money, or relationships—we fix the BEING.”",
    cta: CTA_LABEL,
    features: ["Peace", "Love", "Joy"],
    cardLabel: "Our Manifesto",
    cardQuote: "“Fix the Being first.”",
  },

  introduction: {
    eyebrow: "Objective Verification",
    title: "Human Touch Meets Modern Technology",
    paragraphs: [
      "We scientifically analyze and record your journey from illness to wellness. By blending deep inner awareness with modern frequency technology, you receive an objective report proving that inner alignment creates tangible real-world results.",
      "Real-Time Biofield Feedback: our diagnostic dashboards visualize energetic shifts as they happen during your custom frequency protocol.",
    ],
  },

  fourDefaults: {
    eyebrow: "BIO-ENERGETIC RESET",
    title: "Returning to Your Original Default Settings",
    subtitle:
      "When your internal battery is low, external achievements cannot truly power you up. Most modern dis-eases stem from stresses stored over time. We bring you back to your original state:",
    cards: [
      { id: "love", title: "Love", subtitle: "Default Setting 01", description: "Unconditional source resonance" },
      { id: "peace", title: "Peace", subtitle: "Default Setting 02", description: "Unshakable inner calm" },
      { id: "joy", title: "Joy", subtitle: "Default Setting 03", description: "Spontaneous lightness of being" },
      { id: "contentment", title: "Contentment", subtitle: "Default Setting 04", description: "Deep fulfillment in the now" },
      { id: "truth", title: "Truth", subtitle: "Default Setting 05", description: "Authentic self-expression" },
      { id: "purity", title: "Purity", subtitle: "Default Setting 06", description: "Clear energetic container" },
      { id: "honesty", title: "Honesty", subtitle: "Default Setting 07", description: "Radical internal integrity" },
    ],
  },

  healingFrequencies: {
    badge: "Advanced Bioresonance",
    title: "Frequency-Based Energy Healing Protocols",
    description:
      "We blend deep inner awareness with modern frequency technology to clear blockages, restore biological equilibrium, and align your energy state across specialized dimensions.",
    note: "Chakra Balancing · Holistic Health · Prosperity · Cell Harmony · Prostate Harmony · Vagus · Mental Clarity · Detoxify · Negative Entities Clearance",
    ctaLabel: "Explore Frequencies",
    overlay: "9 Frequency Protocols · Bioresonance · Biofield Balance",
  },

  journeySteps: {
    eyebrow: "Real-Time Biofield Feedback",
    title: "From Illness to Wellness, Objectively Recorded",
    steps: [
      { number: "01", title: "Biofield Measurement", description: "Pre- and post-session biofield measurement & resonance mapping." },
      { number: "02", title: "HRV Tracking", description: "Heart rate variability (HRV) & parasympathetic coherence tracking." },
      { number: "03", title: "Integration Guidance", description: "Personalized integration guidance rooted in ancient wisdom and modern science." },
      { number: "04", title: "Custom Frequency Protocol", description: "Targeted bioresonance frequencies applied to clear blockages and restore energetic balance." },
      { number: "05", title: "Nervous System Reset", description: "Somatic practices and guided breathwork to shift your body from survival mode into deep restoration." },
      { number: "06", title: "Long-Term Vitality Plan", description: "Actionable lifestyle recommendations and ongoing support to sustain your original default state." },
    ],
  },

  thoughtsPreview: {
    badge: "Journal & Inner Inquiry",
    title: "Reflections for Your Journey",
    description:
      "True realization arises from asking the right inner questions. Reflect deeply and save your answers below.",
    readLabel: "Reflect now",
    articles: [
      { id: "inquiry-1", tag: "Career & Alignment", readTime: "Inquiry 01", title: "At work, do you act from peace or pressure?" },
      { id: "inquiry-2", tag: "Relationships & Source", readTime: "Inquiry 02", title: "In relationships, do you give love or ask for love?" },
      { id: "inquiry-3", tag: "Abundance & Wealth", readTime: "Inquiry 03", title: "With money, do you feel like a trustee, or operate from fear and ownership?" },
      { id: "inquiry-4", tag: "Identity & Future", readTime: "Inquiry 04", title: "Who do you want to BE this year?" },
    ],
  },

  finalCta: {
    eyebrow: "Begin Your Transformation",
    title: "Schedule Your Free Discovery Call",
    description:
      "Take the first step toward aligning your energy field, clearing deep stressors, and restoring your original default state with Muazzam Abdul Rehman.",
    primary: CTA_LABEL,
    secondary: "Explore Frequencies",
  },
};

export default function HomePage() {
  const router = useRouter();
  const { homePage } = siteData;

  const handleNav = (href) => {
    router.push(href);
  };

  // Images siteData se (content ke items zyada ho to cycle hote hain)
  const defaultsImages = homePage.fourDefaults.cards;
  const thoughtsImages = homePage.thoughtsPreview.featuredArticles;

  const homeVisibleDefaults = homePage.fourDefaults.homeVisibleCount ?? 4;
  const visibleDefaults = content.fourDefaults.cards.slice(0, homeVisibleDefaults);
  const hasMoreDefaults = content.fourDefaults.cards.length > visibleDefaults.length;
  const visibleThoughts = content.thoughtsPreview.articles.slice(0, HOME_THOUGHTS_COUNT);

  // Hero media (siteData.homePage.hero se). Sab optional-safe hain.
  const heroVideo = homePage.hero?.video;
  const heroImage = homePage.hero?.image;

  return (
    <div className="relative w-full overflow-x-hidden bg-[#FBF9F5]">
      {/* 1. HERO */}
      <HeroSection
        kicker={content.hero.kicker}
        line1={content.hero.line1}
        line2={content.hero.line2}
        subtitle={content.hero.subtitle}
        cta={content.hero.cta}
        features={content.hero.features}
        cardLabel={content.hero.cardLabel}
        cardQuote={content.hero.cardQuote}
        video={heroVideo}
        image={heroImage}
        tagline={homePage.hero?.tagline}
        taglineShort={homePage.hero?.taglineShort}
        founder={homePage.hero?.founder}
        onCta={() => handleNav("/contact#contact-form")}
      />

      {/* 1b. INTRO VIDEO (hero ke neeche, wide rectangle) */}
      <VideoShowcase data={homePage.videoSection} />

      {/* 2. OUR MANIFESTO */}
      <ManifestoSection />

      {/* 3. INTRODUCTION */}
      <section className="section-y bg-[#FBF9F5]">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal direction="left" className="order-2 min-w-0 lg:order-1 lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-xl">
                <img
                  src={homePage.introduction.image.src}
                  alt={homePage.introduction.image.alt}
                  className="h-[260px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal
              direction="right"
              className="order-1 min-w-0 space-y-5 sm:space-y-6 lg:order-2 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="h-px w-6 bg-[#B88B4A]" />
                {content.introduction.eyebrow}
              </div>
              <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
                {content.introduction.title}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#475A51]">
                {content.introduction.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleNav("/about")}
                  className="w-full justify-center sm:w-auto"
                >
                  Meet the Founder
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SPOTLIGHT */}
      <FounderSpotlight />

      {/* 4b. JANKI RAVANI SPOTLIGHT */}
      <JankiSpotlight />

      {/* 5. DEFAULT SETTINGS */}
      <section id="four-defaults" className="section-y bg-[#FBF9F5]">
        <div className="container-x">
          <Reveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {content.fourDefaults.eyebrow}
            </span>
            <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
              {content.fourDefaults.title}
            </h2>
            <p className="text-base text-[#4A5D54]">{content.fourDefaults.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {visibleDefaults.map((card, idx) => {
              const img = defaultsImages[idx % defaultsImages.length].image;
              return (
                <Reveal key={card.id} delay={idx * 100} className="h-full">
                  <div className="group card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-xs">
                    <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-serif text-xs font-bold text-[#2D1C59] backdrop-blur-xs">
                        {card.title}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
                      <div>
                        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#B88B4A]">
                          {card.subtitle}
                        </span>
                        <p className="text-sm leading-relaxed text-[#4E6258]">
                          {card.description}
                        </p>
                      </div>
                      <div className="border-t border-slate-100 pt-3">
                        <button
                          onClick={() => handleNav("/offerings")}
                          className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold text-[#0E6E6B] transition-colors hover:text-[#094D4B]"
                        >
                          <span>Explore practice</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {hasMoreDefaults && (
            <Reveal delay={150} className="mt-8 flex justify-center sm:mt-10">
              <Button
                variant="outline"
                size="md"
                onClick={() =>
                  handleNav(homePage.fourDefaults.fullViewCta?.href ?? "/offerings")
                }
                className="w-full justify-center sm:w-auto"
              >
                {homePage.fourDefaults.fullViewCta?.label ?? "View all default settings"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Reveal>
          )}
        </div>
      </section>

      {/* 6. HEALING FREQUENCIES BANNER */}
      <section className="section-y bg-[#FAF7F2]">
        <div className="container-x">
          <Reveal className="rounded-3xl border border-[#2D1C59]/12 bg-white p-4 shadow-sm sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-[#2D1C59]/10 shadow-md">
                  <img
                    src={homePage.healingFrequencies.image.src}
                    alt={homePage.healingFrequencies.image.alt}
                    className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[400px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/60 p-3 text-xs text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                    <Volume2 className="h-4 w-4 shrink-0 text-[#E8A948]" />
                    <span className="min-w-0">{content.healingFrequencies.overlay}</span>
                  </div>
                </div>
              </div>

              <div className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                  <span className="h-px w-6 bg-[#B88B4A]" />
                  {content.healingFrequencies.badge}
                </div>
                <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
                  {content.healingFrequencies.title}
                </h2>
                <p className="text-base leading-relaxed text-[#475A51]">
                  {content.healingFrequencies.description}
                </p>
                <p className="text-xs italic leading-relaxed text-[#7A8E83]">
                  {content.healingFrequencies.note}
                </p>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleNav(homePage.healingFrequencies.cta.href)}
                    className="w-full justify-center sm:w-auto"
                  >
                    {content.healingFrequencies.ctaLabel}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6b. HEALY / FILM */}
      <FilmSection />

      {/* 7. JOURNEY STEPS */}
      <section className="section-y bg-[#FBF9F5]">
        <div className="container-x">
          <Reveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {content.journeySteps.eyebrow}
            </span>
            <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
              {content.journeySteps.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {content.journeySteps.steps.map((step, idx) => (
              <Reveal key={step.number} delay={idx * 120} className="h-full">
                <div className="card-hover relative h-full rounded-2xl border border-[#2D1C59]/10 bg-white p-6 shadow-xs sm:p-8">
                  <span className="mb-3 block font-serif text-4xl font-bold text-[#2D1C59]/20 sm:mb-4">
                    {step.number}
                  </span>
                  <h3 className="mb-2 font-serif text-lg text-[#2D1C59] sm:mb-3 sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4E6258]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THOUGHTS & REFLECTIONS PREVIEW */}
      <section className="section-y bg-[#FAF7F2]">
        <div className="container-x">
          <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:mb-14 sm:gap-6 md:flex-row md:items-end">
            <div className="min-w-0 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                {content.thoughtsPreview.badge}
              </span>
              <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
                {content.thoughtsPreview.title}
              </h2>
              <p className="max-w-xl text-base text-[#4E6258]">
                {content.thoughtsPreview.description}
              </p>
            </div>
            <div className="shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNav("/thoughts")}
                className="w-full justify-center md:w-auto"
              >
                {homePage.thoughtsPreview.cta.label}
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {visibleThoughts.map((article, idx) => {
              const img = thoughtsImages[idx % thoughtsImages.length].image;
              return (
                <Reveal key={article.id} delay={idx * 100} className="h-full">
                  <article
                    onClick={() => handleNav("/thoughts")}
                    className="group card-hover flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-xs"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-md bg-[#2D1C59] px-2.5 py-1 text-sm font-semibold text-white sm:text-[15px]">
                        {article.tag}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between space-y-4 p-5 sm:p-6">
                      <div className="space-y-2">
                        <span className="text-xs text-[#8A9C92]">{article.readTime}</span>
                        <h3 className="font-serif text-lg font-bold leading-snug text-[#2D1C59] transition-colors group-hover:text-[#0E6E6B]">
                          {article.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 pt-2 text-xs font-bold text-[#0E6E6B]">
                        <span>{content.thoughtsPreview.readLabel}</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section id="begin" className="section-y relative overflow-hidden bg-[#FBF9F5]">
        <Reveal className="container-x relative z-10 max-w-5xl space-y-5 text-center sm:space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
            <span className="h-px w-6 bg-[#B88B4A]" />
            {content.finalCta.eyebrow}
            <span className="h-px w-6 bg-[#B88B4A]" />
          </div>

          <h2 className="mx-auto max-w-2xl font-serif text-[28px] leading-tight text-[#2D1C59] sm:text-5xl">
            {content.finalCta.title}
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4E6258]">
            {content.finalCta.description}
          </p>

          <div className="mx-auto flex w-full max-w-sm flex-col items-stretch gap-3 pt-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNav("/contact#contact-form")}
              className="w-full justify-center sm:w-auto"
            >
              {content.finalCta.primary}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNav("/offerings")}
              className="w-full justify-center sm:w-auto"
            >
              {content.finalCta.secondary}
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 10. HEALING FREQUENCIES + THOUGHTS (default off) */}
      {SHOW_BOTTOM_SECTIONS && <FrequenciesThoughtsSections />}
    </div>
  );
}