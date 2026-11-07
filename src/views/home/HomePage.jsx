// "use client";
// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import Reveal from "@/components/ui/Reveal";
// import FounderSpotlight from "@/components/home/FounderSpotlight";
// // import HeroVideo from "@/components/home/HeroVideo";
// import VideoShowcase from "@/components/home/VideoShowcase";
// import FrequenciesThoughtsSections from "@/components/home/FrequenciesThoughtsSections";
// import JankiSpotlight from "@/components/JankiSpotlight";
// import ManifestoSection from "@/components/ManifestoSection"; 
// import { Heart, Sun, Flower2, ArrowRight, Volume2, Sparkles } from "lucide-react";

// /* ------------------------------------------------------------------
//    PAGE SETTINGS
// ------------------------------------------------------------------- */
// // Client: ek hi CTA label poori site pe
// const CTA_LABEL = "Book Free Discovery Call";
// // Thoughts section mein homepage pe kitne cards dikhane hain (baaki /thoughts pe)
// const HOME_THOUGHTS_COUNT = 3;
// // Neeche wala FrequenciesThoughtsSections upar ke sections se duplicate hai.
// // Homepage chhota rakhne ke liye false. Wapas chahiye to true kar do.
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

//   manifesto: {
//     title: "From Innocence to Identity Crisis",
//     subtitle:
//       "In our modern lives, we spend an enormous amount of energy trying to fix external circumstances. True transformation doesn’t happen at the surface level; it begins at the root of who you are in essence.",
//     pillars: [
//       {
//         id: "as-children",
//         icon: "Sun",
//         color: "#FAF4E6",
//         accentColor: "#C5A265",
//         title: "As Children",
//         description:
//           "We lived in pure presence—laughing, playing, crying, and sleeping without barriers, beliefs, or cultural conditioning. We simply were.",
//       },
//       {
//         id: "layering-of-identity",
//         icon: "Flower2",
//         color: "#E3F1EF",
//         accentColor: "#0E6E6B",
//         title: "The Layering of Identity",
//         description:
//           "As we grew, external labels were added: gender, nationality, status, career titles, and societal expectations. This division created fragile egos, stress, and self-sabotage.",
//       },
//     ],
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
//       {
//         number: "01",
//         title: "Biofield Measurement",
//         description: "Pre- and post-session biofield measurement & resonance mapping.",
//       },
//       {
//         number: "02",
//         title: "HRV Tracking",
//         description: "Heart rate variability (HRV) & parasympathetic coherence tracking.",
//       },
//       {
//         number: "03",
//         title: "Integration Guidance",
//         description:
//           "Personalized integration guidance rooted in ancient wisdom and modern science.",
//       },
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
//       {
//         id: "inquiry-3",
//         tag: "Abundance & Wealth",
//         readTime: "Inquiry 03",
//         title: "With money, do you feel like a trustee, or operate from fear and ownership?",
//       },
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

//   // const heroVideo = homePage.hero.video;
//   // const hasVideo = Boolean(heroVideo?.enabled && heroVideo?.src);

//   return (
//     <div className="relative w-full bg-[#FBF9F5]">
//       {/* 1. HERO */}
//             {/* 1. HERO */}
//       <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 lg:pb-24 lg:pt-14">
//         <div className="container-x relative z-20">
//           <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
//             {/* Left column */}
//             <div className="space-y-6 lg:col-span-7">
//               <div
//                 className="hero-rise inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B88B4A]"
//                 style={{ "--d": "0ms" }}
//               >
//                 <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
//                 <span>{content.hero.kicker}</span>
//                 <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
//               </div>

//               <h1
//                 className="hero-rise font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
//                 style={{ "--d": "120ms" }}
//               >
//                 <span className="block text-[#2D1C59]">{content.hero.line1}</span>
//                 <span className="block text-[#0E6E6B]">{content.hero.line2}</span>
//               </h1>

//               <p
//                 className="hero-rise max-w-xl text-base leading-relaxed text-[#4A5D54] sm:text-lg"
//                 style={{ "--d": "240ms" }}
//               >
//                 {content.hero.subtitle}
//               </p>

//               <div className="hero-rise pt-2" style={{ "--d": "360ms" }}>
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   onClick={() => handleNav("/contact#contact-form")}
//                   className="group"
//                 >
//                   <span>{content.hero.cta}</span>
//                   <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </div>

//               <div
//                 className="hero-rise grid max-w-lg grid-cols-3 gap-4 pt-6"
//                 style={{ "--d": "480ms" }}
//               >
//                 {[Flower2, Heart, Sun].map((Icon, i) => (
//                   <div
//                     key={content.hero.features[i]}
//                     className="flex flex-col items-center space-y-2 text-center"
//                   >
//                     <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9DCBF] bg-[#FAF4E6] text-[#C5A265]">
//                       <Icon className="h-5 w-5 stroke-[1.6]" />
//                     </div>
//                     <span className="font-serif text-sm font-bold text-[#2D1C59]">
//                       {content.hero.features[i]}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right column: hero photo */}
//             <div className="hero-rise lg:col-span-5" style={{ "--d": "200ms" }}>
//               <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-2xl">
//                 <img
//                   src={homePage.hero.image.src}
//                   alt={homePage.hero.image.alt}
//                   className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[460px] lg:h-[540px]"
//                   referrerPolicy="no-referrer"
//                   fetchPriority="high"
//                 />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231754]/40 via-transparent to-transparent" />

//                 <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-md backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-4">
//                   <div className="flex items-center gap-3">
//                     <div className="rounded-xl bg-[#2D1C59] p-2.5 text-white">
//                       <Sparkles className="h-5 w-5 text-[#E8A948]" />
//                     </div>
//                     <div className="min-w-0">
//                       <span className="block text-xs font-medium uppercase tracking-wider text-[#7A8E83]">
//                         {content.hero.cardLabel}
//                       </span>
//                       <span className="block font-serif text-sm font-bold text-[#2D1C59]">
//                         {content.hero.cardQuote}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 1b. INTRO VIDEO (hero ke neeche, wide rectangle) */}
//       <VideoShowcase data={homePage.videoSection} />

//       {/* 2. OUR MANIFESTO */}
//       <section id="manifesto" className="section-y relative bg-[#FBF9F5]">
//         <div className="container-x relative z-20 max-w-6xl">
//           <Reveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-12">
//             <div className="mb-1 inline-flex items-center justify-center gap-3">
//               <span className="h-px w-8 bg-[#C5A265]/60" />
//               <Flower2 className="h-5 w-5 text-[#C5A265]" />
//               <span className="h-px w-8 bg-[#C5A265]/60" />
//             </div>
//             <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl lg:text-5xl">
//               {content.manifesto.title}
//             </h2>
//             <p className="text-base text-[#4A5D54]">{content.manifesto.subtitle}</p>
//           </Reveal>

//           <div
//             className={`grid grid-cols-1 gap-y-10 ${
//               content.manifesto.pillars.length <= 2
//                 ? "mx-auto max-w-3xl sm:grid-cols-2"
//                 : "sm:grid-cols-2 lg:grid-cols-4"
//             }`}
//           >
//             {content.manifesto.pillars.map((pillar, idx, arr) => {
//               const iconMap = { Lotus: Flower2, Flower2, Sun, Heart };
//               const Icon = iconMap[pillar.icon] || Flower2;
//               const isLast = idx === arr.length - 1;

//               return (
//                 <Reveal
//                   key={pillar.id}
//                   delay={idx * 120}
//                   className="relative flex flex-col items-center px-4 text-center sm:px-6"
//                 >
//                   <div
//                     className="mb-5 flex h-20 w-20 items-center justify-center rounded-full ring-8 ring-white/60"
//                     style={{ backgroundColor: pillar.color }}
//                   >
//                     <Icon
//                       className="h-9 w-9"
//                       strokeWidth={1.5}
//                       style={{ color: pillar.accentColor }}
//                     />
//                   </div>
//                   <h3 className="mb-2 font-serif text-xl text-[#2D1C59]">{pillar.title}</h3>
//                   <p className="max-w-[300px] text-sm leading-relaxed text-[#4A5D54]">
//                     {pillar.description}
//                   </p>
//                   {!isLast && (
//                     <span
//                       aria-hidden="true"
//                       className="absolute right-0 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-[#2D1C59]/15 sm:block"
//                     />
//                   )}
//                 </Reveal>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 3. INTRODUCTION */}
//       <section className="section-y bg-[#FBF9F5]">
//         <div className="container-x">
//           <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
//             <Reveal direction="left" className="order-2 lg:order-1 lg:col-span-5">
//               <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-xl">
//                 <img
//                   src={homePage.introduction.image.src}
//                   alt={homePage.introduction.image.alt}
//                   className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[480px]"
//                   referrerPolicy="no-referrer"
//                   loading="lazy"
//                 />
//               </div>
//             </Reveal>

//             <Reveal direction="right" className="order-1 space-y-6 lg:order-2 lg:col-span-7">
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 <span className="h-px w-6 bg-[#B88B4A]" />
//                 {content.introduction.eyebrow}
//               </div>
//               <h2 className="font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl">
//                 {content.introduction.title}
//               </h2>
//               <div className="space-y-4 text-base leading-relaxed text-[#475A51]">
//                 {content.introduction.paragraphs.map((p, idx) => (
//                   <p key={idx}>{p}</p>
//                 ))}
//               </div>
//               <div className="pt-2">
//                 <Button variant="outline" size="md" onClick={() => handleNav("/about")}>
//                   Meet the Founder
//                   <ArrowRight className="ml-1 h-4 w-4" />
//                 </Button>
//               </div>
//             </Reveal>
//           </div>
//         </div>
//       </section>

//       {/* 4. FOUNDER SPOTLIGHT (short intro + credentials, full story /about pe) */}
//       <FounderSpotlight />

//       {/* 4b. JANKI RAVANI SPOTLIGHT */}
//       <JankiSpotlight />

//       {/* 5. DEFAULT SETTINGS (homepage pe limited cards + full view link) */}
//       <section id="four-defaults" className="section-y bg-[#FBF9F5]">
//         <div className="container-x">
//           <Reveal className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               {content.fourDefaults.eyebrow}
//             </span>
//             <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">
//               {content.fourDefaults.title}
//             </h2>
//             <p className="text-base text-[#4A5D54]">{content.fourDefaults.subtitle}</p>
//           </Reveal>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

//                     <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
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
//             <Reveal delay={150} className="mt-10 flex justify-center">
//               <Button
//                 variant="outline"
//                 size="md"
//                 onClick={() =>
//                   handleNav(homePage.fourDefaults.fullViewCta?.href ?? "/offerings")
//                 }
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
//           <Reveal className="rounded-3xl border border-[#2D1C59]/12 bg-white p-5 shadow-sm sm:p-10 lg:p-12">
//             <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
//               <div className="lg:col-span-5">
//                 <div className="relative overflow-hidden rounded-2xl border border-[#2D1C59]/10 shadow-md">
//                   <img
//                     src={homePage.healingFrequencies.image.src}
//                     alt={homePage.healingFrequencies.image.alt}
//                     className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[400px]"
//                     referrerPolicy="no-referrer"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/60 p-3 text-xs text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
//                     <Volume2 className="h-4 w-4 shrink-0 text-[#E8A948]" />
//                     <span>{content.healingFrequencies.overlay}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6 lg:col-span-7">
//                 <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                   <span className="h-px w-6 bg-[#B88B4A]" />
//                   {content.healingFrequencies.badge}
//                 </div>
//                 <h2 className="font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl">
//                   {content.healingFrequencies.title}
//                 </h2>
//                 <p className="text-base leading-relaxed text-[#475A51]">
//                   {content.healingFrequencies.description}
//                 </p>
//                 <p className="text-xs italic text-[#7A8E83]">
//                   {content.healingFrequencies.note}
//                 </p>
//                 <div className="pt-2">
//                   <Button
//                     variant="primary"
//                     size="md"
//                     onClick={() => handleNav(homePage.healingFrequencies.cta.href)}
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
//           <Reveal className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               {content.journeySteps.eyebrow}
//             </span>
//             <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">
//               {content.journeySteps.title}
//             </h2>
//           </Reveal>

//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
//             {content.journeySteps.steps.map((step, idx) => (
//               <Reveal key={step.number} delay={idx * 120} className="h-full">
//                 <div className="card-hover relative h-full rounded-2xl border border-[#2D1C59]/10 bg-white p-7 shadow-xs sm:p-8">
//                   <span className="mb-4 block font-serif text-4xl font-bold text-[#2D1C59]/20">
//                     {step.number}
//                   </span>
//                   <h3 className="mb-3 font-serif text-xl text-[#2D1C59]">{step.title}</h3>
//                   <p className="text-sm leading-relaxed text-[#4E6258]">{step.description}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 8. THOUGHTS & REFLECTIONS PREVIEW (limited cards) */}
//       <section className="section-y bg-[#FAF7F2]">
//         <div className="container-x">
//           <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
//             <div className="space-y-3">
//               <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 {content.thoughtsPreview.badge}
//               </span>
//               <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">
//                 {content.thoughtsPreview.title}
//               </h2>
//               <p className="max-w-xl text-base text-[#4E6258]">
//                 {content.thoughtsPreview.description}
//               </p>
//             </div>
//             <div className="shrink-0">
//               <Button variant="outline" size="sm" onClick={() => handleNav("/thoughts")}>
//                 {homePage.thoughtsPreview.cta.label}
//                 <ArrowRight className="ml-1 h-3.5 w-3.5" />
//               </Button>
//             </div>
//           </Reveal>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
//                       <div className="absolute left-3 top-3 rounded-md bg-[#2D1C59] px-2.5 py-1 text-[15px] font-semibold text-white">
//                         {article.tag}
//                       </div>
//                     </div>

//                     <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
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
//         <Reveal className="container-x relative z-10 max-w-5xl space-y-6 text-center">
//           <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//             <span className="h-px w-6 bg-[#B88B4A]" />
//             {content.finalCta.eyebrow}
//             <span className="h-px w-6 bg-[#B88B4A]" />
//           </div>

//           <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-[#2D1C59] sm:text-5xl">
//             {content.finalCta.title}
//           </h2>

//           <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4E6258]">
//             {content.finalCta.description}
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:gap-4">
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => handleNav("/contact#contact-form")}
//             >
//               {content.finalCta.primary}
//               <ArrowRight className="ml-1 h-4 w-4" />
//             </Button>
//             <Button variant="outline" size="lg" onClick={() => handleNav("/offerings")}>
//               {content.finalCta.secondary}
//             </Button>
//           </div>
//         </Reveal>
//       </section>

//       {/* 10. HEALING FREQUENCIES + THOUGHTS (footer ke upar). Default off: upar ke sections se duplicate. */}
//       {SHOW_BOTTOM_SECTIONS && <FrequenciesThoughtsSections />}
//     </div>
//   );
// }







"use client";
import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import FounderSpotlight from "@/components/home/FounderSpotlight";
// import HeroVideo from "@/components/home/HeroVideo";
import VideoShowcase from "@/components/home/VideoShowcase";
import FrequenciesThoughtsSections from "@/components/home/FrequenciesThoughtsSections";
import JankiSpotlight from "@/components/JankiSpotlight";
import ManifestoSection from "@/components/home/ManifestoSection";
import { Heart, Sun, Flower2, ArrowRight, Volume2, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------
   PAGE SETTINGS
------------------------------------------------------------------- */
// Client: ek hi CTA label poori site pe
const CTA_LABEL = "Book Free Discovery Call";
// Thoughts section mein homepage pe kitne cards dikhane hain (baaki /thoughts pe)
const HOME_THOUGHTS_COUNT = 3;
// Neeche wala FrequenciesThoughtsSections upar ke sections se duplicate hai.
// Homepage chhota rakhne ke liye false. Wapas chahiye to true kar do.
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

  manifesto: {
    title: "From Innocence to Identity Crisis",
    subtitle:
      "In our modern lives, we spend an enormous amount of energy trying to fix external circumstances. True transformation doesn’t happen at the surface level; it begins at the root of who you are in essence.",
    pillars: [
      {
        id: "as-children",
        icon: "Sun",
        color: "#FAF4E6",
        accentColor: "#C5A265",
        title: "As Children",
        description:
          "We lived in pure presence—laughing, playing, crying, and sleeping without barriers, beliefs, or cultural conditioning. We simply were.",
      },
      {
        id: "layering-of-identity",
        icon: "Flower2",
        color: "#E3F1EF",
        accentColor: "#0E6E6B",
        title: "The Layering of Identity",
        description:
          "As we grew, external labels were added: gender, nationality, status, career titles, and societal expectations. This division created fragile egos, stress, and self-sabotage.",
      },
    ],
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
      {
        number: "01",
        title: "Biofield Measurement",
        description: "Pre- and post-session biofield measurement & resonance mapping.",
      },
      {
        number: "02",
        title: "HRV Tracking",
        description: "Heart rate variability (HRV) & parasympathetic coherence tracking.",
      },
      {
        number: "03",
        title: "Integration Guidance",
        description:
          "Personalized integration guidance rooted in ancient wisdom and modern science.",
      },
          {
        number: "04",
        title: "Custom Frequency Protocol",
        description: "Targeted bioresonance frequencies applied to clear blockages and restore energetic balance.",
      },
      {
        number: "05",
        title: "Nervous System Reset",
        description: "Somatic practices and guided breathwork to shift your body from survival mode into deep restoration.",
      },
      {
        number: "06",
        title: "Long-Term Vitality Plan",
        description: "Actionable lifestyle recommendations and ongoing support to sustain your original default state.",
      }
    
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
      {
        id: "inquiry-3",
        tag: "Abundance & Wealth",
        readTime: "Inquiry 03",
        title: "With money, do you feel like a trustee, or operate from fear and ownership?",
      },
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

  // const heroVideo = homePage.hero.video;
  // const hasVideo = Boolean(heroVideo?.enabled && heroVideo?.src);

  return (
    <div className="relative w-full bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 lg:pb-24 lg:pt-14">
        <div className="container-x relative z-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
            {/* Left column */}
            <div className="space-y-6 lg:col-span-7">
              <div
                className="hero-rise inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B88B4A]"
                style={{ "--d": "0ms" }}
              >
                <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
                <span>{content.hero.kicker}</span>
                <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
              </div>

              <h1
                className="hero-rise font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
                style={{ "--d": "120ms" }}
              >
                <span className="block text-[#2D1C59]">{content.hero.line1}</span>
                <span className="block text-[#0E6E6B]">{content.hero.line2}</span>
              </h1>

              <p
                className="hero-rise max-w-xl text-base leading-relaxed text-[#4A5D54] sm:text-lg"
                style={{ "--d": "240ms" }}
              >
                {content.hero.subtitle}
              </p>

              <div className="hero-rise pt-2" style={{ "--d": "360ms" }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleNav("/contact#contact-form")}
                  className="group"
                >
                  <span>{content.hero.cta}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <div
                className="hero-rise grid max-w-lg grid-cols-3 gap-4 pt-6"
                style={{ "--d": "480ms" }}
              >
                {[Flower2, Heart, Sun].map((Icon, i) => (
                  <div
                    key={content.hero.features[i]}
                    className="flex flex-col items-center space-y-2 text-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E9DCBF] bg-[#FAF4E6] text-[#C5A265]">
                      <Icon className="h-5 w-5 stroke-[1.6]" />
                    </div>
                    <span className="font-serif text-sm font-bold text-[#2D1C59]">
                      {content.hero.features[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: hero photo */}
            <div className="hero-rise lg:col-span-5" style={{ "--d": "200ms" }}>
              <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-2xl">
                <img
                  src={homePage.hero.image.src}
                  alt={homePage.hero.image.alt}
                  className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[460px] lg:h-[540px]"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231754]/40 via-transparent to-transparent" />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-md backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#2D1C59] p-2.5 text-white">
                      <Sparkles className="h-5 w-5 text-[#E8A948]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wider text-[#7A8E83]">
                        {content.hero.cardLabel}
                      </span>
                      <span className="block font-serif text-sm font-bold text-[#2D1C59]">
                        {content.hero.cardQuote}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1b. INTRO VIDEO (hero ke neeche, wide rectangle) */}
      <VideoShowcase data={homePage.videoSection} />

      {/* 2. OUR MANIFESTO (NEW ANIMATED SECTION) */}
      <ManifestoSection />

      {/* 3. INTRODUCTION */}
      <section className="section-y bg-[#FBF9F5]">
        <div className="container-x">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal direction="left" className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-xl">
                <img
                  src={homePage.introduction.image.src}
                  alt={homePage.introduction.image.alt}
                  className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal direction="right" className="order-1 space-y-6 lg:order-2 lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="h-px w-6 bg-[#B88B4A]" />
                {content.introduction.eyebrow}
              </div>
              <h2 className="font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl">
                {content.introduction.title}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#475A51]">
                {content.introduction.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-2">
                <Button variant="outline" size="md" onClick={() => handleNav("/about")}>
                  Meet the Founder
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SPOTLIGHT (short intro + credentials, full story /about pe) */}
      <FounderSpotlight />

      {/* 4b. JANKI RAVANI SPOTLIGHT */}
      <JankiSpotlight />

      {/* 5. DEFAULT SETTINGS (homepage pe limited cards + full view link) */}
      <section id="four-defaults" className="section-y bg-[#FBF9F5]">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {content.fourDefaults.eyebrow}
            </span>
            <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">
              {content.fourDefaults.title}
            </h2>
            <p className="text-base text-[#4A5D54]">{content.fourDefaults.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

                    <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
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
            <Reveal delay={150} className="mt-10 flex justify-center">
              <Button
                variant="outline"
                size="md"
                onClick={() =>
                  handleNav(homePage.fourDefaults.fullViewCta?.href ?? "/offerings")
                }
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
          <Reveal className="rounded-3xl border border-[#2D1C59]/12 bg-white p-5 shadow-sm sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-[#2D1C59]/10 shadow-md">
                  <img
                    src={homePage.healingFrequencies.image.src}
                    alt={homePage.healingFrequencies.image.alt}
                    className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[400px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-white/10 bg-black/60 p-3 text-xs text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                    <Volume2 className="h-4 w-4 shrink-0 text-[#E8A948]" />
                    <span>{content.healingFrequencies.overlay}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                  <span className="h-px w-6 bg-[#B88B4A]" />
                  {content.healingFrequencies.badge}
                </div>
                <h2 className="font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl">
                  {content.healingFrequencies.title}
                </h2>
                <p className="text-base leading-relaxed text-[#475A51]">
                  {content.healingFrequencies.description}
                </p>
                <p className="text-xs italic text-[#7A8E83]">
                  {content.healingFrequencies.note}
                </p>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleNav(homePage.healingFrequencies.cta.href)}
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

      {/* 7. JOURNEY STEPS */}
      <section className="section-y bg-[#FBF9F5]">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl space-y-3 text-center sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {content.journeySteps.eyebrow}
            </span>
            <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">
              {content.journeySteps.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {content.journeySteps.steps.map((step, idx) => (
              <Reveal key={step.number} delay={idx * 120} className="h-full">
                <div className="card-hover relative h-full rounded-2xl border border-[#2D1C59]/10 bg-white p-7 shadow-xs sm:p-8">
                  <span className="mb-4 block font-serif text-4xl font-bold text-[#2D1C59]/20">
                    {step.number}
                  </span>
                  <h3 className="mb-3 font-serif text-xl text-[#2D1C59]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4E6258]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THOUGHTS & REFLECTIONS PREVIEW (limited cards) */}
      <section className="section-y bg-[#FAF7F2]">
        <div className="container-x">
          <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                {content.thoughtsPreview.badge}
              </span>
              <h2 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">
                {content.thoughtsPreview.title}
              </h2>
              <p className="max-w-xl text-base text-[#4E6258]">
                {content.thoughtsPreview.description}
              </p>
            </div>
            <div className="shrink-0">
              <Button variant="outline" size="sm" onClick={() => handleNav("/thoughts")}>
                {homePage.thoughtsPreview.cta.label}
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
                      <div className="absolute left-3 top-3 rounded-md bg-[#2D1C59] px-2.5 py-1 text-[15px] font-semibold text-white">
                        {article.tag}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
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
        <Reveal className="container-x relative z-10 max-w-5xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
            <span className="h-px w-6 bg-[#B88B4A]" />
            {content.finalCta.eyebrow}
            <span className="h-px w-6 bg-[#B88B4A]" />
          </div>

          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-[#2D1C59] sm:text-5xl">
            {content.finalCta.title}
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4E6258]">
            {content.finalCta.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNav("/contact#contact-form")}
            >
              {content.finalCta.primary}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => handleNav("/offerings")}>
              {content.finalCta.secondary}
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 10. HEALING FREQUENCIES + THOUGHTS (footer ke upar). Default off: upar ke sections se duplicate. */}
      {SHOW_BOTTOM_SECTIONS && <FrequenciesThoughtsSections />}
    </div>
  );
}