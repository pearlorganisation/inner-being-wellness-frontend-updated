// "use client";

// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import { Check, ArrowRight, Sparkles, HelpCircle, AlertCircle } from "lucide-react";

// export default function OfferingsPage() {
//   const router = useRouter();
//   const { offeringsPage } = siteData;

//   const handleNav = (href) => {
//     router.push(href);
//   };

//   return (
//     <div className="w-full bg-[#FBF9F5]">
//       {/* 1. HERO */}
//       <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl space-y-4">
//             <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               <span className="w-6 h-px bg-[#B88B4A]" />
//               {offeringsPage.hero.badge}
//               <span className="w-6 h-px bg-[#B88B4A]" />
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
//               {offeringsPage.hero.title}
//             </h1>

//             <p className="text-lg text-[#475A51] leading-relaxed">
//               {offeringsPage.hero.description}
//             </p>

//             <div className="pt-2">
//               <Button
//                 variant="primary"
//                 size="md"
//                 onClick={() => handleNav("/contact")}
//               >
//                 <span>Find Your Starting Point</span>
//                 <ArrowRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. SIGNATURE OFFERING: FREEDOM FROM RESISTANCE */}
//       <section className="py-20 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FBF9F5]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#2D1C59]/12 shadow-sm">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//               <div className="lg:col-span-7 space-y-5">
//                 <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                   <Sparkles className="w-4 h-4 text-[#E8A948]" />
//                   {offeringsPage.signatureOffering.badge}
//                 </div>

//                 <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//                   {offeringsPage.signatureOffering.title}
//                 </h2>

//                 <blockquote className="text-xl sm:text-2xl font-serif italic text-[#0E6E6B]">
//                   "{offeringsPage.signatureOffering.quote}"
//                 </blockquote>

//                 <p className="text-base text-[#4C6056] leading-relaxed">
//                   {offeringsPage.signatureOffering.description}
//                 </p>

//                 <div className="pt-3">
//                   <Button
//                     variant="primary"
//                     size="md"
//                     onClick={() => handleNav("/freedom-from-resistance")}
//                   >
//                     {offeringsPage.signatureOffering.cta.label}
//                     <ArrowRight className="w-4 h-4 ml-1" />
//                   </Button>
//                 </div>
//               </div>

//               <div className="lg:col-span-5">
//                 <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2D1C59]/10 bg-white">
//                   <img
//                     src={offeringsPage.signatureOffering.image.src}
//                     alt={offeringsPage.signatureOffering.image.alt}
//                     className="w-full h-[360px] object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. FOUR CORE SERVICES (DETAILED LIST) */}
//       <section className="py-20 lg:py-28 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
//           <div className="text-center max-w-2xl mx-auto space-y-3">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               MODALITIES & EXPERIENCES
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {offeringsPage.introduction.title}
//             </h2>
//             <p className="text-base text-[#4A5D54]">
//               {offeringsPage.introduction.paragraphs[1]}
//             </p>
//           </div>

//           {offeringsPage.services.map((service, index) => {
//             const isEven = index % 2 === 1;
//             return (
//               <div
//                 key={service.id}
//                 id={service.id}
//                 className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
//               >
//                 {/* Visual */}
//                 <div
//                   className={`lg:col-span-5 ${
//                     isEven ? "lg:order-2" : "lg:order-1"
//                   }`}
//                 >
//                   <div className="rounded-2xl overflow-hidden shadow-md border border-[#2D1C59]/10 bg-white">
//                     <img
//                       src={service.image.src}
//                       alt={service.image.alt}
//                       className="w-full h-[380px] sm:h-[420px] object-cover"
//                       referrerPolicy="no-referrer"
//                     />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div
//                   className={`lg:col-span-7 space-y-6 ${
//                     isEven ? "lg:order-1" : "lg:order-2"
//                   }`}
//                 >
//                   <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                     <span className="w-6 h-px bg-[#B88B4A]" />
//                     {service.eyebrow}
//                   </div>

//                   <h3 className="text-3xl font-serif text-[#2D1C59]">
//                     {service.title}
//                   </h3>

//                   <p className="text-base text-[#2E4238] font-medium leading-relaxed">
//                     {service.shortDescription}
//                   </p>

//                   <p className="text-sm text-[#4E6258] leading-relaxed">
//                     {service.description}
//                   </p>

//                   {/* Outcomes List */}
//                   <div className="space-y-2 pt-2">
//                     <span className="text-xs font-semibold uppercase tracking-wider text-[#2D1C59]">
//                       Key Outcomes & Focus:
//                     </span>
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#475A51]">
//                       {service.outcomes.map((outcome, idx) => (
//                         <li key={idx} className="flex items-center gap-2">
//                           <Check className="w-4 h-4 text-[#0E6E6B] shrink-0" />
//                           <span>{outcome}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="p-3.5 rounded-xl bg-white border border-[#2D1C59]/10 text-xs text-[#52655C]">
//                     <strong className="text-[#2D1C59]">Format: </strong>
//                     {service.sessionFormat}
//                   </div>

//                   <div>
//                     <Button
//                       variant="primary"
//                       size="sm"
//                       onClick={() => handleNav(service.cta.href)}
//                     >
//                       {service.cta.label}
//                       <ArrowRight className="w-3.5 h-3.5 ml-1" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* 4. GUIDANCE CALLOUT */}
//       <section className="py-16 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
//           <div className="w-12 h-12 rounded-full bg-[#FAF4E6] text-[#B88B4A] flex items-center justify-center mx-auto mb-2 border border-[#E9DCBF]">
//             <HelpCircle className="w-6 h-6" />
//           </div>
//           <h3 className="text-2xl sm:text-3xl font-serif text-[#2D1C59]">
//             {offeringsPage.choosingOffering.title}
//           </h3>
//           <p className="text-base text-[#4E6258] leading-relaxed max-w-xl mx-auto">
//             {offeringsPage.choosingOffering.description}
//           </p>
//           <div className="pt-2">
//             <Button
//               variant="outline"
//               size="md"
//               onClick={() => handleNav("/contact")}
//             >
//               Ask for Guidance
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* 5. WELLNESS DISCLAIMER NOTE */}
//       <section className="py-10 bg-[#FAF7F2]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#2D1C59]/12 text-xs text-[#52655C] leading-relaxed">
//             <AlertCircle className="w-5 h-5 text-[#B88B4A] shrink-0 mt-0.5" />
//             <div>
//               <strong className="text-[#2D1C59] font-medium block mb-0.5">
//                 {offeringsPage.importantNote.title}
//               </strong>
//               {offeringsPage.importantNote.text}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }




// // new updated code 
// "use client";

// // src/views/offerings/OfferingsPage.jsx
// // Everything on this page comes from siteData.offeringsPage.
// // Missing optional fields simply hide their block, nothing crashes.

// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import FrequencyHero from "@/components/offerings/FrequencyHero";
// import ProtocolGrid from "@/components/offerings/ProtocolGrid";
// import { Check, ArrowRight, Sparkles, HelpCircle, AlertCircle } from "lucide-react";

// export default function OfferingsPage() {
//   const router = useRouter();
//   const page = siteData?.offeringsPage;
//   if (!page) return null;

//   const {
//     hero,
//     introduction,
//     services = [],
//     signatureOffering,
//     choosingOffering,
//     importantNote,
//     protocolGrid,
//     protocolStyles,
//     detailsSection,
//   } = page;

//   const handleNav = (href) => {
//     if (!href) return;
//     if (href.startsWith("#")) {
//       const el = document.getElementById(href.slice(1));
//       if (!el) return;
//       const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
//       el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
//       return;
//     }
//     router.push(href);
//   };

//   const outcomesLabel = detailsSection?.outcomesLabel ?? "Key Outcomes & Focus:";
//   const formatLabel = detailsSection?.formatLabel ?? "Format:";
//   const detailsIntro = introduction?.paragraphs?.[1] ?? introduction?.paragraphs?.[0];

//   return (
//     <div className="w-full overflow-x-clip bg-[#FBF9F5]">
//       {/* 1. HERO */}
//       {hero && <FrequencyHero hero={hero} protocolCount={services.length} />}

//       {/* 2. PROTOCOL OVERVIEW GRID (target of "View all protocols") */}
//       <ProtocolGrid services={services} styles={protocolStyles} {...(protocolGrid || {})} />

//       {/* 3. SIGNATURE OFFERING */}
//       {signatureOffering && (
//         <section className="border-b border-[#2D1C59]/10 bg-[#FBF9F5] py-14 sm:py-20 lg:py-24">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="rounded-3xl border border-[#2D1C59]/12 bg-[#FAF7F2] p-6 shadow-sm sm:p-10 lg:p-12">
//               <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
//                 <div
//                   className={`min-w-0 space-y-5 ${
//                     signatureOffering.image?.src ? "lg:col-span-7" : "lg:col-span-12"
//                   }`}
//                 >
//                   {signatureOffering.badge && (
//                     <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                       <Sparkles className="h-4 w-4 text-[#E8A948]" />
//                       {signatureOffering.badge}
//                     </div>
//                   )}

//                   {signatureOffering.title && (
//                     <h2 className="break-words font-serif text-2xl text-[#2D1C59] sm:text-3xl lg:text-4xl">
//                       {signatureOffering.title}
//                     </h2>
//                   )}

//                   {signatureOffering.quote && (
//                     <blockquote className="font-serif text-lg italic text-[#0E6E6B] sm:text-xl lg:text-2xl">
//                       &ldquo;{signatureOffering.quote}&rdquo;
//                     </blockquote>
//                   )}

//                   {signatureOffering.description && (
//                     <p className="text-base leading-relaxed text-[#4C6056]">
//                       {signatureOffering.description}
//                     </p>
//                   )}

//                   {signatureOffering.cta && (
//                     <div className="pt-2 sm:pt-3">
//                       <Button
//                         variant="primary"
//                         size="md"
//                         onClick={() => handleNav(signatureOffering.cta.href)}
//                       >
//                         {signatureOffering.cta.label}
//                         <ArrowRight className="ml-1 h-4 w-4" />
//                       </Button>
//                     </div>
//                   )}
//                 </div>

//                 {signatureOffering.image?.src && (
//                   <div className="lg:col-span-5">
//                     <div className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-lg">
//                       <img
//                         src={signatureOffering.image.src}
//                         alt={signatureOffering.image.alt || signatureOffering.title || ""}
//                         className="aspect-[4/3] w-full object-cover"
//                         loading="lazy"
//                         referrerPolicy="no-referrer"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
     
//       {services.length > 0 && (
//         <section
//           id="protocol-details"
//           className="scroll-mt-28 border-b border-[#2D1C59]/10 bg-[#FAF7F2] py-14 sm:py-20 lg:py-28"
//         >
//           <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-24 lg:px-8">
//             {(detailsSection?.eyebrow || introduction?.title || detailsIntro) && (
//               <div className="mx-auto max-w-2xl space-y-3 text-center">
//                 {detailsSection?.eyebrow && (
//                   <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                     {detailsSection.eyebrow}
//                   </span>
//                 )}
//                 {introduction?.title && (
//                   <h2 className="font-serif text-2xl text-[#2D1C59] sm:text-3xl lg:text-4xl">
//                     {introduction.title}
//                   </h2>
//                 )}
//                 {detailsIntro && <p className="text-base text-[#4A5D54]">{detailsIntro}</p>}
//               </div>
//             )}

//             {services.map((service, index) => {
//               const flip = index % 2 === 1;
//               const hasImage = Boolean(service.image?.src);
//               return (
//                 <div
//                   key={service.id || index}
//                   id={service.id}
//                   className="grid scroll-mt-28 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12"
//                 >
//                   {hasImage && (
//                     <div className={`lg:col-span-5 ${flip ? "lg:order-2" : "lg:order-1"}`}>
//                       <div className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white shadow-md">
//                         <img
//                           src={service.image.src}
//                           alt={service.image.alt || service.title || ""}
//                           className="aspect-[4/3] w-full object-cover"
//                           loading="lazy"
//                           referrerPolicy="no-referrer"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <div
//                     className={`min-w-0 space-y-5 sm:space-y-6 ${
//                       hasImage ? "lg:col-span-7" : "lg:col-span-12"
//                     } ${flip ? "lg:order-1" : "lg:order-2"}`}
//                   >
//                     {service.eyebrow && (
//                       <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                         <span className="h-px w-6 bg-[#B88B4A]" />
//                         {service.eyebrow}
//                       </div>
//                     )}

//                     <h3 className="break-words font-serif text-2xl text-[#2D1C59] sm:text-3xl">
//                       {service.title}
//                     </h3>

//                     {service.shortDescription && (
//                       <p className="text-base font-medium leading-relaxed text-[#2E4238]">
//                         {service.shortDescription}
//                       </p>
//                     )}

//                     {service.description && (
//                       <p className="text-sm leading-relaxed text-[#4E6258]">{service.description}</p>
//                     )}

//                     {Array.isArray(service.outcomes) && service.outcomes.length > 0 && (
//                       <div className="space-y-2 pt-1">
//                         <span className="text-xs font-semibold uppercase tracking-wider text-[#2D1C59]">
//                           {outcomesLabel}
//                         </span>
//                         <ul className="grid grid-cols-1 gap-2 text-sm text-[#475A51] sm:grid-cols-2">
//                           {service.outcomes.map((outcome, idx) => (
//                             <li key={idx} className="flex items-start gap-2">
//                               <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0E6E6B]" />
//                               <span>{outcome}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}

//                     {service.sessionFormat && (
//                       <div className="rounded-xl border border-[#2D1C59]/10 bg-white p-3.5 text-xs text-[#52655C]">
//                         <strong className="text-[#2D1C59]">{formatLabel} </strong>
//                         {service.sessionFormat}
//                       </div>
//                     )}

//                     {service.cta && (
//                       <div>
//                         <Button variant="primary" size="sm" onClick={() => handleNav(service.cta.href)}>
//                           {service.cta.label}
//                           <ArrowRight className="ml-1 h-3.5 w-3.5" />
//                         </Button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//       )}

//       {/* 5. GUIDANCE CALLOUT */}
//       {choosingOffering && (
//         <section className="border-b border-[#2D1C59]/10 bg-[#FBF9F5] py-12 sm:py-16">
//           <div className="mx-auto max-w-4xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
//             <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-[#E9DCBF] bg-[#FAF4E6] text-[#B88B4A]">
//               <HelpCircle className="h-6 w-6" />
//             </div>
//             <h3 className="font-serif text-xl text-[#2D1C59] sm:text-2xl lg:text-3xl">
//               {choosingOffering.title}
//             </h3>
//             {choosingOffering.description && (
//               <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4E6258]">
//                 {choosingOffering.description}
//               </p>
//             )}
//             {choosingOffering.cta && (
//               <div className="pt-2">
//                 <Button variant="outline" size="md" onClick={() => handleNav(choosingOffering.cta.href)}>
//                   {choosingOffering.cta.label}
//                   <ArrowRight className="ml-1 h-4 w-4" />
//                 </Button>
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* 6. WELLNESS DISCLAIMER */}
//       {importantNote && (
//         <section className="bg-[#FAF7F2] py-8 sm:py-10">
//           <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//             <div className="flex items-start gap-3.5 rounded-xl border border-[#2D1C59]/12 bg-white p-4 text-xs leading-relaxed text-[#52655C]">
//               <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#B88B4A]" />
//               <div>
//                 <strong className="mb-0.5 block font-medium text-[#2D1C59]">{importantNote.title}</strong>
//                 {importantNote.text}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }






// src/views/offerings/OfferingsPage.jsx
"use client";

import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import FrequencyHero from "@/components/offerings/FrequencyHero";
import ProtocolGrid from "@/components/offerings/ProtocolGrid";
import Reveal from "@/components/ui/Reveal"; // Animation ke liye add kiya
import { Check, ArrowRight, Sparkles, HelpCircle, AlertCircle } from "lucide-react";

export default function OfferingsPage() {
  const router = useRouter();
  const page = siteData?.offeringsPage;
  if (!page) return null;

  const {
    hero,
    introduction,
    services = [],
    signatureOffering,
    choosingOffering,
    importantNote,
    protocolGrid,
    protocolStyles,
    detailsSection,
  } = page;

  const handleNav = (href) => {
    if (!href) return;
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      return;
    }
    router.push(href);
  };

  const outcomesLabel = detailsSection?.outcomesLabel ?? "Key Outcomes & Focus:";
  const formatLabel = detailsSection?.formatLabel ?? "Format:";
  const detailsIntro = introduction?.paragraphs?.[1] ?? introduction?.paragraphs?.[0];

  return (
    <div className="relative w-full overflow-x-clip bg-[#FAF7F2]">
      
      {/* Ambient Background Glows (Same as Homepage for consistency) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#C5A265]/10 blur-3xl" />
        <div className="absolute -right-32 top-[800px] h-96 w-96 rounded-full bg-[#0E6E6B]/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 1. HERO */}
        {hero && <FrequencyHero hero={hero} protocolCount={services.length} />}

        {/* 2. PROTOCOL OVERVIEW GRID */}
        <ProtocolGrid services={services} styles={protocolStyles} {...(protocolGrid || {})} />

        {/* 3. SIGNATURE OFFERING (Premium Card) */}
        {signatureOffering && (
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                {/* Border hatakar shadow aur rounded corners diye hain */}
                <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-[#2D1C59]/5 sm:p-10 lg:p-14">
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    
                    <div className={`min-w-0 space-y-6 ${signatureOffering.image?.src ? "lg:col-span-7" : "lg:col-span-12"}`}>
                      {signatureOffering.badge && (
                        <div className="inline-flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#B88B4A]">
                          <Sparkles className="h-4 w-4 text-[#E8A948]" />
                          {signatureOffering.badge}
                        </div>
                      )}

                      {signatureOffering.title && (
                        <h2 className="break-words font-serif text-[32px] leading-tight text-[#2D1C59] sm:text-4xl lg:text-[42px]">
                          {signatureOffering.title}
                        </h2>
                      )}

                      {signatureOffering.quote && (
                        <blockquote className="border-l-4 border-[#C5A265] pl-4 font-serif text-lg italic leading-relaxed text-[#0E6E6B] sm:text-xl lg:text-2xl">
                          &ldquo;{signatureOffering.quote}&rdquo;
                        </blockquote>
                      )}

                      {signatureOffering.description && (
                        <p className="text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">
                          {signatureOffering.description}
                        </p>
                      )}

                      {signatureOffering.cta && (
                        <div className="pt-2 sm:pt-4">
                          <Button
                            variant="primary"
                            size="lg"
                            onClick={() => handleNav(signatureOffering.cta.href)}
                          >
                            {signatureOffering.cta.label}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {signatureOffering.image?.src && (
                      <div className="lg:col-span-5">
                        {/* Image border hataya, shadow aur modern look diya */}
                        <div className="group overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                          <img
                            src={signatureOffering.image.src}
                            alt={signatureOffering.image.alt || signatureOffering.title || ""}
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}
       
        {/* 4. PROTOCOL DETAILS (Alternating Layout) */}
        {services.length > 0 && (
          <section id="protocol-details" className="scroll-mt-28 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:space-y-32 lg:px-8">
              
              {(detailsSection?.eyebrow || introduction?.title || detailsIntro) && (
                <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
                  {detailsSection?.eyebrow && (
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#B88B4A]">
                      {detailsSection.eyebrow}
                    </span>
                  )}
                  {introduction?.title && (
                    <h2 className="font-serif text-[32px] text-[#2D1C59] sm:text-4xl lg:text-[42px]">
                      {introduction.title}
                    </h2>
                  )}
                  {detailsIntro && <p className="text-[17px] leading-relaxed text-[#475A51] sm:text-[19px]">{detailsIntro}</p>}
                </Reveal>
              )}

              {services.map((service, index) => {
                const flip = index % 2 === 1;
                const hasImage = Boolean(service.image?.src);
                return (
                  <Reveal key={service.id || index} delay={100}>
                    <div
                      id={service.id}
                      className="grid scroll-mt-28 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
                    >
                      {hasImage && (
                        <div className={`${flip ? "lg:order-2" : "lg:order-1"}`}>
                          <div className="group overflow-hidden rounded-[2rem]  shadow-xl shadow-[#2D1C59]/8">
                            <div className="overflow-hidden rounded-[1.5rem]">
                              <img
                                src={service.image.src}
                                alt={service.image.alt || service.title || ""}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        className={`min-w-0 space-y-6 ${
                          hasImage ? "" : "lg:col-span-2 lg:text-center lg:mx-auto lg:max-w-4xl"
                        } ${flip ? "lg:order-1" : "lg:order-2"}`}
                      >
                        {service.eyebrow && (
                          <div className="inline-flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#B88B4A]">
                            <span className="h-px w-6 bg-[#B88B4A]" />
                            {service.eyebrow}
                          </div>
                        )}

                        <h3 className="break-words font-serif text-[28px] leading-tight text-[#2D1C59] sm:text-3xl lg:text-4xl">
                          {service.title}
                        </h3>

                        {service.shortDescription && (
                          <p className="text-lg font-medium leading-relaxed text-[#2E4238] sm:text-xl">
                            {service.shortDescription}
                          </p>
                        )}

                        {service.description && (
                          <p className="text-[17px] leading-relaxed text-[#475A51]">
                            {service.description}
                          </p>
                        )}

                        {Array.isArray(service.outcomes) && service.outcomes.length > 0 && (
                          <div className="space-y-3 rounded-2xl bg-white/60 p-6 shadow-sm">
                            <span className="text-sm font-semibold uppercase tracking-wider text-[#2D1C59]">
                              {outcomesLabel}
                            </span>
                            <ul className="grid grid-cols-1 gap-3 text-[17px] text-[#475A51] sm:grid-cols-2">
                              {service.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F1EF] text-[#0E6E6B]">
                                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                                  </span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.sessionFormat && (
                          <div className="rounded-xl border border-[#C5A265]/30 bg-[#FAF4E6] p-4 text-[15px] text-[#5C4A2D]">
                            <strong className="font-semibold text-[#B88B4A]">{formatLabel} </strong>
                            {service.sessionFormat}
                          </div>
                        )}

                        {service.cta && (
                          <div className="pt-2">
                            <Button variant="primary" size="md" onClick={() => handleNav(service.cta.href)}>
                              {service.cta.label}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* 5. GUIDANCE CALLOUT (Soft Card) */}
        {choosingOffering && (
          <section className="py-12 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <Reveal>
                <div className="flex flex-col items-center space-y-5 rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-[#2D1C59]/5 sm:p-12">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E3F1EF] text-[#0E6E6B]">
                    <HelpCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#2D1C59] sm:text-3xl">
                    {choosingOffering.title}
                  </h3>
                  {choosingOffering.description && (
                    <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-[#475A51]">
                      {choosingOffering.description}
                    </p>
                  )}
                  {choosingOffering.cta && (
                    <div className="pt-3">
                      <Button variant="outline" size="md" onClick={() => handleNav(choosingOffering.cta.href)}>
                        {choosingOffering.cta.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* 6. WELLNESS DISCLAIMER */}
        {importantNote && (
          <section className="pb-16 pt-4 sm:pb-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Reveal delay={100}>
                <div className="flex items-start gap-4 rounded-2xl bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                  <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#B88B4A]" />
                  <div className="text-[15px] leading-relaxed text-[#475A51]">
                    <strong className="mb-1 block text-base font-semibold text-[#2D1C59]">
                      {importantNote.title}
                    </strong>
                    {importantNote.text}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}