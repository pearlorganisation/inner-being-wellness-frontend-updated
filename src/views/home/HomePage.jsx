// "use client";

// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";

// import Button from "@/components/ui/Button";
// import {
//   Heart,
//   Sun,
//   Eye,
//   Leaf,
//   Flower2,
//   Compass,
//   ArrowRight,
//   Volume2,
//   Sparkles,
// } from "lucide-react";

// export default function HomePage() {
//   const router = useRouter();
//   const { homePage, brand } = siteData;

//   const handleNav = (href) => {
//     router.push(href);
//   };

//   return (
//     <div className="w-full relative bg-[#FBF9F5]">
//       {/* Botanical left edge decorative artwork (matching Figma image.png) */}
//       {/* <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-[850px] pointer-events-none z-10 opacity-70 lg:opacity-90">
//         <img
//           src="/assets/aistudio/Botanical_border_880a09be.png"
//           alt=""
//           className="w-full h-full object-contain object-left-top"
//           aria-hidden="true"
//         />
//       </div> */}
//       {/* Botanical left edge decorative artwork — blends into page background */}
//       <div
//         className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-[850px] pointer-events-none z-10 opacity-80 lg:opacity-95"
//         style={{
//           mixBlendMode: "multiply",
//           WebkitMaskImage:
//             "linear-gradient(to right, black 55%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
//           maskImage:
//             "linear-gradient(to right, black 55%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
//           WebkitMaskComposite: "source-in",
//           maskComposite: "intersect",
//         }}
//       >
//         <img
//           src="/assets/aistudio/Botanical_border_880a09be-removebg-preview.png"
//           alt=""
//           className="w-full h-full object-contain object-left-top"
//           style={{ filter: "brightness(1.06) contrast(1.05)" }}
//           aria-hidden="true" 
//         />
//       </div>
//       {/* 1. HERO SECTION (Exact layout, typography, colors, and styling from screenshot) */}
//       <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
//             {/* Left Column: Typography, Kicker, Subtitle, CTA, and 3 Feature Icons */}
//             <div className="lg:col-span-7 space-y-6 lg:pl-10">
//               {/* Kicker with horizontal golden lines */}
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88B4A]">
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//                 <span>A JOURNEY WITHIN</span>
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//               </div>

//               {/* Headline: Rewire Within in Purple, Live Freely in Teal */}
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.12] tracking-tight">
//                 <span className="block text-[#2D1C59]">Rewire Within.</span>
//                 <span className="block text-[#0E6E6B]">Live Freely.</span>
//               </h1>

//               {/* Subtitle */}
//               <p className="text-base sm:text-lg text-[#4A5D54] max-w-xl leading-relaxed">
//                 Blending Bioenergetic Healing, Modern Frequencies and Conscious
//                 Awareness for a Healthier, Calmer and More Aligned You.
//               </p>

//               {/* CTA Button */}
//               <div className="pt-2">
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   onClick={() => handleNav("/contact")}
//                   className="group"
//                 >
//                   <span>Book a Session</span>
//                   <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </div>

//               {/* 3 Feature Icons (Clear Mind, Emotional Balance, Aligned Energy) */}
//               <div className="pt-8  grid grid-cols-3 gap-4 max-w-lg">
//                 <div className="flex flex-col items-center text-center space-y-2">
//                   <div className="w-10 h-10 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C5A265] border border-[#E9DCBF]">
//                     <Flower2 className="w-5 h-5 stroke-[1.6]" />
//                   </div>
//                   <span className="text-xs sm:text-sm font-serif font-bold text-[#2D1C59]">
//                     Clear Mind
//                   </span>
//                 </div>

//                 <div className="flex flex-col items-center text-center space-y-2">
//                   <div className="w-10 h-10 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C5A265] border border-[#E9DCBF]">
//                     <Heart className="w-5 h-5 stroke-[1.6]" />
//                   </div>
//                   <span className="text-xs sm:text-sm font-serif font-bold text-[#2D1C59]">
//                     Emotional Balance
//                   </span>
//                 </div>

//                 <div className="flex flex-col items-center text-center space-y-2">
//                   <div className="w-10 h-10 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C5A265] border border-[#E9DCBF]">
//                     <Sun className="w-5 h-5 stroke-[1.6]" />
//                   </div>
//                   <span className="text-xs sm:text-sm font-serif font-bold text-[#2D1C59]">
//                     Aligned Energy
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column: Hero Visual Artwork */}
//             <div className="lg:col-span-5 relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2D1C59]/10 bg-white">
//                 <img
//                   src={homePage.hero.image.src}
//                   alt={homePage.hero.image.alt}
//                   className="w-full h-[480px] sm:h-[540px] object-cover hover:scale-103 transition-transform duration-700"
//                   referrerPolicy="no-referrer"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#231754]/40 via-transparent to-transparent pointer-events-none" />

//                 <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2.5 rounded-xl bg-[#2D1C59] text-white">
//                       <Sparkles className="w-5 h-5 text-[#E8A948]" />
//                     </div>
//                     <div>
//                       <span className="block text-xs uppercase tracking-wider text-[#7A8E83] font-medium">
//                         Awakening & Vitality
//                       </span>
//                       <span className="text-sm font-serif font-bold text-[#2D1C59]">
//                         "Quiet the noise, rewire within."
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//   {/* 2. OUR MANIFESTO */}
// {/* 2. OUR MANIFESTO */}
// <section
//   id="manifesto"
//   className="relative py-16 lg:py-20  bg-[#FBF9F5]"
// >
//   <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
//       <div className="inline-flex items-center justify-center gap-3 mb-1">
//         <span className="w-8 h-px bg-[#C5A265]/60" />
//         <Flower2 className="w-5 h-5 text-[#C5A265]" />
//         <span className="w-8 h-px bg-[#C5A265]/60" />
//       </div>

//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D1C59]">
//         {homePage.manifesto?.title}
//       </h2>
//       <p className="text-base text-[#4A5D74]">
//         {homePage.manifesto?.subtitle}
//       </p>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
//       {(homePage.manifesto?.pillars ?? []).map((pillar, idx, arr) => {
//         // Capital-letter keys, matching siteData.js
//         const iconMap = {
//           Leaf: Leaf,
//           Lotus: Flower2,
//           Flower2: Flower2,
//           Sun: Sun,
//           Heart: Heart,
//         };
//         const Icon = iconMap[pillar.icon] || Leaf;
//         const isLast = idx === arr.length - 1;

//         return (
//           <div
//             key={pillar.id}
//             className="relative flex flex-col items-center text-center px-6"
//           >
//             <div
//               className="w-20 h-20 rounded-full flex items-center justify-center mb-5 ring-8 ring-white/60"
//               style={{ backgroundColor: pillar.color }}
//             >
//               <Icon
//                 className="w-9 h-9"
//                 strokeWidth={1.5}
//                 style={{ color: pillar.accentColor }}
//               />
//             </div>

//             <h3 className="text-xl font-serif text-[#2D1C59] mb-2">
//               {pillar.title}
//             </h3>
//             <p className="text-sm text-[#4A5D74] leading-relaxed max-w-[200px]">
//               {pillar.description}
//             </p>

//             {!isLast && (
//               <span
//                 aria-hidden="true"
//                 className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-[#2D1C59]/15"
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>

//       {/* 3. INTRODUCTION / LISTEN INWARD */}
//       <section className="py-20 lg:py-28 bg-[#FBF9F5] ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             {/* Image */}
//             <div className="lg:col-span-5 order-2 lg:order-1">
//               <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#2D1C59]/10 bg-white">
//                 <img
//                   src={homePage.introduction.image.src}
//                   alt={homePage.introduction.image.alt}
//                   className="w-full h-[420px] sm:h-[480px] object-cover"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
//             </div>

//             {/* Text */}
//             <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//                 {homePage.introduction.eyebrow}
//               </div>

//               <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
//                 {homePage.introduction.title}
//               </h2>

//               <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
//                 {homePage.introduction.paragraphs.map((p, idx) => (
//                   <p key={idx}>{p}</p>
//                 ))}
//               </div>

//               <div className="pt-2">
//                 <Button
//                   variant="outline"
//                   size="md"
//                   onClick={() => handleNav("/about")}
//                 >
//                   Meet the Founder
//                   <ArrowRight className="w-4 h-4 ml-1" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. FOUNDER SPOTLIGHT WITH REAL FOUNDER PHOTO */}
//       <section className="py-20 lg:py-28 bg-[#FAF7F2] ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             {/* Real Founder Photo (image2_aedbb8dd.jpeg) */}
//             <div className="lg:col-span-5 relative">
//               <div className="relative rounded-3xl overflow-hidden border border-[#2D1C59]/15 shadow-xl bg-white">
//                 <img
//                   src="/assets/aistudio/image2_aedbb8dd.jpeg"
//                   alt="Muazzam Abdul Rehman"
//                   className="w-full h-[480px] sm:h-[540px] object-cover object-top"
//                   referrerPolicy="no-referrer"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#231754]/80 via-transparent to-transparent pointer-events-none" />

//                 <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
//                   <h4 className="text-lg font-serif font-bold text-[#2D1C59]">
//                     {homePage.founderSpotlight.name}
//                   </h4>
//                   <p className="text-xs text-[#52655B]">{brand.founderTitle}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Founder Bio */}
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//                 {homePage.founderSpotlight.badge}
//               </div>

//               <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
//                 {homePage.founderSpotlight.subtitle}
//               </h2>

//               <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
//                 {homePage.founderSpotlight.paragraphs.map((p, idx) => (
//                   <p key={idx}>{p}</p>
//                 ))}
//               </div>

//               <div className="pt-2 flex flex-wrap gap-4">
//                 <Button
//                   variant="primary"
//                   size="md"
//                   onClick={() => handleNav("/about")}
//                 >
//                   Read Full Journey
//                   <ArrowRight className="w-4 h-4 ml-1" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="md"
//                   onClick={() => handleNav("/contact")}
//                 >
//                   Book Consultation
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. THE FOUR DEFAULTS */}
//       <section
//         id="four-defaults"
//         className="py-20 lg:py-28 bg-[#FBF9F5] "
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               CORE PILLARS OF TRANSFORMATION
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {homePage.fourDefaults.title}
//             </h2>
//             <p className="text-base text-[#4A5D54]">
//               {homePage.fourDefaults.subtitle}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {homePage.fourDefaults.cards.map((card) => (
//               <div
//                 key={card.id}
//                 className="group bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
//               >
//                 {/* Photo Header */}
//                 <div className="relative h-52 overflow-hidden bg-slate-100">
//                   <img
//                     src={card.image.src}
//                     alt={card.image.alt}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
//                   <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-serif font-bold text-[#2D1C59]">
//                     {card.title}
//                   </div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                   <div>
//                     <span className="block text-xs uppercase tracking-wider text-[#B88B4A] mb-1 font-semibold">
//                       {card.subtitle}
//                     </span>
//                     <p className="text-sm text-[#4E6258] leading-relaxed">
//                       {card.description}
//                     </p>
//                   </div>
//                   <div className="pt-3 border-t border-slate-100">
//                     <button
//                       onClick={() => handleNav("/offerings")}
//                       className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E6E6B] hover:text-[#094D4B] transition-colors cursor-pointer"
//                     >
//                       <span>Explore practice</span>
//                       <ArrowRight className="w-3.5 h-3.5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. HEALING FREQUENCIES BANNER (Warm off-white card presentation) */}
//       <section className="py-20 lg:py-28 bg-[#FAF7F2] ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="rounded-3xl bg-white border border-[#2D1C59]/12 p-8 sm:p-12 shadow-sm">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//               {/* Visual with Singing Bowls */}
//               <div className="lg:col-span-5">
//                 <div className="relative rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-md">
//                   <img
//                     src={homePage.healingFrequencies.image.src}
//                     alt={homePage.healingFrequencies.image.alt}
//                     className="w-full h-[360px] sm:h-[400px] object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl text-xs text-white border border-white/10 flex items-center gap-2">
//                     <Volume2 className="w-4 h-4 text-[#E8A948] shrink-0" />
//                     <span>Tibetan bowls · Resonant acoustics · Deep rest</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="lg:col-span-7 space-y-6">
//                 <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                   <span className="w-6 h-px bg-[#B88B4A]" />
//                   {homePage.healingFrequencies.badge}
//                 </div>

//                 <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
//                   {homePage.healingFrequencies.title}
//                 </h2>

//                 <p className="text-base text-[#475A51] leading-relaxed">
//                   {homePage.healingFrequencies.description}
//                 </p>

//                 <p className="text-xs text-[#7A8E83] italic">
//                   {homePage.healingFrequencies.note}
//                 </p>

//                 <div className="pt-2">
//                   <Button
//                     variant="primary"
//                     size="md"
//                     onClick={() =>
//                       handleNav(homePage.healingFrequencies.cta.href)
//                     }
//                   >
//                     {homePage.healingFrequencies.cta.label}
//                     <ArrowRight className="w-4 h-4 ml-1" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 7. JOURNEY STEPS (01 CONNECT -> 02 CLARIFY -> 03 PRACTISE) */}
//       <section className="py-20 lg:py-28 bg-[#FBF9F5] ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               {homePage.journeySteps.eyebrow}
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {homePage.journeySteps.title}
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {homePage.journeySteps.steps.map((step, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl p-8 border border-[#2D1C59]/10 shadow-xs relative"
//               >
//                 <span className="text-4xl font-serif font-bold text-[#2D1C59]/20 block mb-4">
//                   {step.number}
//                 </span>
//                 <h3 className="text-xl font-serif text-[#2D1C59] mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-[#4E6258] leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 8. THOUGHTS & REFLECTIONS PREVIEW */}
//       <section className="py-20 lg:py-28 bg-[#FAF7F2] ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
//             <div className="space-y-3">
//               <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 {homePage.thoughtsPreview.badge}
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//                 {homePage.thoughtsPreview.title}
//               </h2>
//               <p className="text-base text-[#4E6258] max-w-xl">
//                 {homePage.thoughtsPreview.description}
//               </p>
//             </div>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => handleNav("/thoughts")}
//             >
//               {homePage.thoughtsPreview.cta.label}
//               <ArrowRight className="w-3.5 h-3.5 ml-1" />
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {homePage.thoughtsPreview.featuredArticles.map((article) => (
//               <article
//                 key={article.id}
//                 onClick={() => handleNav("/thoughts")}
//                 className="group bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
//               >
//                 <div className="h-52 overflow-hidden bg-slate-100 relative">
//                   <img
//                     src={article.image.src}
//                     alt={article.image.alt}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="absolute top-3 left-3 bg-[#2D1C59] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
//                     {article.tag}
//                   </div>
//                 </div>

//                 <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                   <div className="space-y-2">
//                     <span className="text-xs text-[#8A9C92]">
//                       {article.readTime}
//                     </span>
//                     <h3 className="text-lg font-serif font-bold text-[#2D1C59] group-hover:text-[#0E6E6B] transition-colors leading-snug">
//                       {article.title}
//                     </h3>
//                     <p className="text-xs text-[#52665B] leading-relaxed line-clamp-2">
//                       {article.excerpt}
//                     </p>
//                   </div>
//                   <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0E6E6B]">
//                     <span>Read reflection</span>
//                     <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 9. FINAL CTA SECTION */}
//       <section className="relative py-24 bg-[#FBF9F5] overflow-hidden">
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
//           <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//             <span className="w-6 h-px bg-[#B88B4A]" />
//             {homePage.finalCta.eyebrow}
//             <span className="w-6 h-px bg-[#B88B4A]" />
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-serif text-[#2D1C59] max-w-2xl mx-auto leading-tight">
//             {homePage.finalCta.title}
//           </h2>

//           <p className="text-base text-[#4E6258] max-w-xl mx-auto leading-relaxed">
//             {homePage.finalCta.description}
//           </p>

//           <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => handleNav("/contact")}
//             >
//               Request a Session
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               onClick={() => handleNav("/offerings")}
//             >
//               Explore Offerings
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// updated code 






"use client";

import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import FrequenciesThoughtsSections from "@/components/home/FrequenciesThoughtsSections";
import {
  Heart,
  Sun,
  Eye,
  Leaf,
  Flower2,
  Compass,
  ArrowRight,
  Volume2,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const { homePage, brand } = siteData;

  const handleNav = (href) => {
    router.push(href);
  };

  return (
    <div className="w-full relative bg-[#FBF9F5]">
      {/* Botanical left edge decorative artwork (matching Figma image.png) */}
      {/* <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-[850px] pointer-events-none z-10 opacity-70 lg:opacity-90">
        <img
          src="/assets/aistudio/Botanical_border_880a09be.png"
          alt=""
          className="w-full h-full object-contain object-left-top"
          aria-hidden="true"
        />
      </div> */}
      {/* Botanical left edge decorative artwork — blends into page background */}
      <div
        className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-[850px] pointer-events-none z-10 opacity-80 lg:opacity-95"
        style={{
          mixBlendMode: "multiply",
          WebkitMaskImage:
            "linear-gradient(to right, black 55%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, black 55%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <img
          src="/assets/aistudio/Botanical_border_880a09be-removebg-preview.png"
          alt=""
          className="w-full h-full object-contain object-left-top"
          style={{ filter: "brightness(1.06) contrast(1.05)" }}
          aria-hidden="true"
        />
      </div>
      {/* 1. HERO SECTION (Exact layout, typography, colors, and styling from screenshot) */}
      <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography, Kicker, Subtitle, CTA, and 3 Feature Icons */}
            <div className="lg:col-span-7 space-y-6 lg:pl-10">
              {/* Kicker with horizontal golden lines */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                <span>A JOURNEY WITHIN</span>
                <span className="w-6 h-px bg-[#B88B4A]" />
              </div>

              {/* Headline: Rewire Within in Purple, Live Freely in Teal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.12] tracking-tight">
                <span className="block text-[#2D1C59]">Rewire Within.</span>
                <span className="block text-[#0E6E6B]">Live Freely.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#4A5D54] max-w-xl leading-relaxed">
                Blending Bioenergetic Healing, Modern Frequencies and Conscious
                Awareness for a Healthier, Calmer and More Aligned You.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleNav("/contact")}
                  className="group"
                >
                  <span>Book a Session</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* 3 Feature Icons (Clear Mind, Emotional Balance, Aligned Energy) */}
              <div className="pt-8  grid grid-cols-3 gap-4 max-w-lg">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C5A265] border border-[#E9DCBF]">
                    <Flower2 className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#2D1C59]">
                    Clear Mind
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C5A265] border border-[#E9DCBF]">
                    <Heart className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#2D1C59]">
                    Emotional Balance
                  </span>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#FAF4E6] flex items-center justify-center text-[#C5A265] border border-[#E9DCBF]">
                    <Sun className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#2D1C59]">
                    Aligned Energy
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Artwork */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2D1C59]/10 bg-white">
                <img
                  src={homePage.hero.image.src}
                  alt={homePage.hero.image.alt}
                  className="w-full h-[480px] sm:h-[540px] object-cover hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231754]/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#2D1C59] text-white">
                      <Sparkles className="w-5 h-5 text-[#E8A948]" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-[#7A8E83] font-medium">
                        Awakening & Vitality
                      </span>
                      <span className="text-sm font-serif font-bold text-[#2D1C59]">
                        "Quiet the noise, rewire within."
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* 2. OUR MANIFESTO */}
{/* 2. OUR MANIFESTO */}
<section
  id="manifesto"
  className="relative py-16 lg:py-20  bg-[#FBF9F5]"
>
  <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
      <div className="inline-flex items-center justify-center gap-3 mb-1">
        <span className="w-8 h-px bg-[#C5A265]/60" />
        <Flower2 className="w-5 h-5 text-[#C5A265]" />
        <span className="w-8 h-px bg-[#C5A265]/60" />
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D1C59]">
        {homePage.manifesto?.title}
      </h2>
      <p className="text-base text-[#4A5D74]">
        {homePage.manifesto?.subtitle}
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
      {(homePage.manifesto?.pillars ?? []).map((pillar, idx, arr) => {
        // Capital-letter keys, matching siteData.js
        const iconMap = {
          Leaf: Leaf,
          Lotus: Flower2,
          Flower2: Flower2,
          Sun: Sun,
          Heart: Heart,
        };
        const Icon = iconMap[pillar.icon] || Leaf;
        const isLast = idx === arr.length - 1;

        return (
          <div
            key={pillar.id}
            className="relative flex flex-col items-center text-center px-6"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5 ring-8 ring-white/60"
              style={{ backgroundColor: pillar.color }}
            >
              <Icon
                className="w-9 h-9"
                strokeWidth={1.5}
                style={{ color: pillar.accentColor }}
              />
            </div>

            <h3 className="text-xl font-serif text-[#2D1C59] mb-2">
              {pillar.title}
            </h3>
            <p className="text-sm text-[#4A5D74] leading-relaxed max-w-[200px]">
              {pillar.description}
            </p>

            {!isLast && (
              <span
                aria-hidden="true"
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-[#2D1C59]/15"
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* 3. INTRODUCTION / LISTEN INWARD */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#2D1C59]/10 bg-white">
                <img
                  src={homePage.introduction.image.src}
                  alt={homePage.introduction.image.alt}
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {homePage.introduction.eyebrow}
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
                {homePage.introduction.title}
              </h2>

              <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
                {homePage.introduction.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleNav("/about")}
                >
                  Meet the Founder
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SPOTLIGHT WITH REAL FOUNDER PHOTO */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Founder Photo (image2_aedbb8dd.jpeg) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#2D1C59]/15 shadow-xl bg-white">
                <img
                  src="/assets/aistudio/image2_aedbb8dd.jpeg"
                  alt="Muazzam Abdul Rehman"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231754]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg">
                  <h4 className="text-lg font-serif font-bold text-[#2D1C59]">
                    {homePage.founderSpotlight.name}
                  </h4>
                  <p className="text-xs text-[#52655B]">{brand.founderTitle}</p>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {homePage.founderSpotlight.badge}
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
                {homePage.founderSpotlight.subtitle}
              </h2>

              <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
                {homePage.founderSpotlight.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleNav("/about")}
                >
                  Read Full Journey
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleNav("/contact")}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FOUR DEFAULTS */}
      <section
        id="four-defaults"
        className="py-20 lg:py-28 bg-[#FBF9F5] "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              CORE PILLARS OF TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {homePage.fourDefaults.title}
            </h2>
            <p className="text-base text-[#4A5D54]">
              {homePage.fourDefaults.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePage.fourDefaults.cards.map((card) => (
              <div
                key={card.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-serif font-bold text-[#2D1C59]">
                    {card.title}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#B88B4A] mb-1 font-semibold">
                      {card.subtitle}
                    </span>
                    <p className="text-sm text-[#4E6258] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => handleNav("/offerings")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E6E6B] hover:text-[#094D4B] transition-colors cursor-pointer"
                    >
                      <span>Explore practice</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HEALING FREQUENCIES BANNER (Warm off-white card presentation) */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-[#2D1C59]/12 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Visual with Singing Bowls */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-md">
                  <img
                    src={homePage.healingFrequencies.image.src}
                    alt={homePage.healingFrequencies.image.alt}
                    className="w-full h-[360px] sm:h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl text-xs text-white border border-white/10 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-[#E8A948] shrink-0" />
                    <span>Tibetan bowls · Resonant acoustics · Deep rest</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                  <span className="w-6 h-px bg-[#B88B4A]" />
                  {homePage.healingFrequencies.badge}
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] leading-tight">
                  {homePage.healingFrequencies.title}
                </h2>

                <p className="text-base text-[#475A51] leading-relaxed">
                  {homePage.healingFrequencies.description}
                </p>

                <p className="text-xs text-[#7A8E83] italic">
                  {homePage.healingFrequencies.note}
                </p>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() =>
                      handleNav(homePage.healingFrequencies.cta.href)
                    }
                  >
                    {homePage.healingFrequencies.cta.label}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOURNEY STEPS (01 CONNECT -> 02 CLARIFY -> 03 PRACTISE) */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              {homePage.journeySteps.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {homePage.journeySteps.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePage.journeySteps.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-[#2D1C59]/10 shadow-xs relative"
              >
                <span className="text-4xl font-serif font-bold text-[#2D1C59]/20 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-serif text-[#2D1C59] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4E6258] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. THOUGHTS & REFLECTIONS PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                {homePage.thoughtsPreview.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
                {homePage.thoughtsPreview.title}
              </h2>
              <p className="text-base text-[#4E6258] max-w-xl">
                {homePage.thoughtsPreview.description}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNav("/thoughts")}
            >
              {homePage.thoughtsPreview.cta.label}
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePage.thoughtsPreview.featuredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => handleNav("/thoughts")}
                className="group bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img
                    src={article.image.src}
                    alt={article.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#2D1C59] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {article.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs text-[#8A9C92]">
                      {article.readTime}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#2D1C59] group-hover:text-[#0E6E6B] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#52665B] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0E6E6B]">
                    <span>Read reflection</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="relative py-24 bg-[#FBF9F5] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
            <span className="w-6 h-px bg-[#B88B4A]" />
            {homePage.finalCta.eyebrow}
            <span className="w-6 h-px bg-[#B88B4A]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-[#2D1C59] max-w-2xl mx-auto leading-tight">
            {homePage.finalCta.title}
          </h2>

          <p className="text-base text-[#4E6258] max-w-xl mx-auto leading-relaxed">
            {homePage.finalCta.description}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNav("/contact")}
            >
              Request a Session
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleNav("/offerings")}
            >
              Explore Offerings
            </Button>
          </div>
        </div>
      </section>

      {/* 10. HEALING FREQUENCIES + THOUGHTS (just above the footer) */}
      <FrequenciesThoughtsSections />
    </div>
  );
}