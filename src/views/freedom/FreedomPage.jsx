// "use client";

// import { useRouter } from "next/navigation";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import {
//   Sparkles,
//   Check,
//   ArrowRight,
//   AlertCircle,
//   Compass,
//   Volume2,
//   Flower2,
//   CheckCircle2,
// } from "lucide-react";

// export default function FreedomPage() {
//   const router = useRouter();
//   const { freedomFromResistancePage } = siteData;

//   const handleNav = (href) => {
//     router.push(href);
//   };

//   return (
//     <div className="w-full bg-[#FBF9F5]">
//       {/* 1. HERO */}
//       <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//                 {freedomFromResistancePage.hero.badge}
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
//                 {freedomFromResistancePage.hero.title}
//               </h1>

//               <blockquote className="text-xl sm:text-2xl font-serif italic text-[#0E6E6B] border-l-2 border-[#0E6E6B]/40 pl-4 py-1">
//                 "{freedomFromResistancePage.hero.quote}"
//               </blockquote>

//               <p className="text-lg text-[#475A51] leading-relaxed max-w-xl">
//                 {freedomFromResistancePage.hero.description}
//               </p>

//               <div className="pt-2 flex flex-wrap gap-4">
//                 <Button
//                   variant="primary"
//                   size="md"
//                   onClick={() => handleNav("/contact?interest=freedom-from-resistance")}
//                 >
//                   Request a Consultation
//                   <ArrowRight className="w-4 h-4 ml-1" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="md"
//                   onClick={() => handleNav("/offerings")}
//                 >
//                   View All Offerings
//                 </Button>
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#2D1C59]/10 bg-white">
//                 <img
//                   src={freedomFromResistancePage.hero.image.src}
//                   alt={freedomFromResistancePage.hero.image.alt}
//                   className="w-full h-[440px] sm:h-[500px] object-cover"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. UNDERSTANDING RESISTANCE */}
//       <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-5 order-2 lg:order-1">
//               <div className="rounded-3xl overflow-hidden shadow-lg border border-[#2D1C59]/10 bg-white">
//                 <img
//                   src={freedomFromResistancePage.understanding.image.src}
//                   alt={freedomFromResistancePage.understanding.image.alt}
//                   className="w-full h-[400px] object-cover"
//                   referrerPolicy="no-referrer"
//                 />
//               </div>
//             </div>

//             <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
//               <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//                 <span className="w-6 h-px bg-[#B88B4A]" />
//                 CORE CONSCIOUSNESS
//               </div>

//               <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//                 {freedomFromResistancePage.understanding.title}
//               </h2>

//               <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
//                 {freedomFromResistancePage.understanding.paragraphs.map(
//                   (p, idx) => (
//                     <p key={idx}>{p}</p>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. SIGNS OF RESISTANCE */}
//       <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               RECOGNISING INTERNAL TENSION
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {freedomFromResistancePage.signs.title}
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {freedomFromResistancePage.signs.items.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="p-6 rounded-2xl bg-white border border-[#2D1C59]/10 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
//               >
//                 <div className="w-7 h-7 rounded-full bg-[#FAF4E6] text-[#B88B4A] border border-[#E9DCBF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-serif">
//                   {idx + 1}
//                 </div>
//                 <p className="text-sm text-[#3C4F44] leading-relaxed font-medium">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. MODALITIES IN THIS PATHWAY */}
//       <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
//             <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//               INTEGRATIVE SUPPORT
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {freedomFromResistancePage.modalities.title}
//             </h2>
//             <p className="text-base text-[#4A5D54]">
//               {freedomFromResistancePage.modalities.subtitle}
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {freedomFromResistancePage.modalities.cards.map((card) => (
//               <div
//                 key={card.id}
//                 className="bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
//               >
//                 <div className="h-52 overflow-hidden bg-slate-100 relative">
//                   <img
//                     src={card.image.src}
//                     alt={card.image.alt}
//                     className="w-full h-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                   <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-serif font-bold text-[#2D1C59] shadow-xs">
//                     {card.title}
//                   </div>
//                 </div>

//                 <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                   <div className="space-y-3">
//                     <h3 className="text-xl font-serif text-[#2D1C59]">
//                       {card.title}
//                     </h3>
//                     <p className="text-xs text-[#52655B] leading-relaxed">
//                       {card.description}
//                     </p>
//                   </div>

//                   <div className="pt-3 border-t border-slate-100">
//                     <ul className="space-y-1.5 text-xs text-[#3E5247]">
//                       {card.bulletPoints.map((pt, idx) => (
//                         <li key={idx} className="flex items-center gap-1.5">
//                           <Check className="w-3.5 h-3.5 text-[#0E6E6B]" />
//                           <span>{pt}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. THE PROCESS (01 LISTEN, 02 OBSERVE, 03 REGULATE, 04 INTEGRATE) */}
//       <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
//             <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//               {freedomFromResistancePage.process.title}
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {freedomFromResistancePage.process.steps.map((st, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl p-6 border border-[#2D1C59]/10 shadow-xs"
//               >
//                 <span className="text-3xl font-serif font-bold text-[#2D1C59]/20 block mb-3">
//                   {st.number}
//                 </span>
//                 <h3 className="text-lg font-serif font-bold text-[#2D1C59] mb-2">
//                   {st.title}
//                 </h3>
//                 <p className="text-xs text-[#52665C] leading-relaxed">
//                   {st.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. SUITABILITY */}
//       <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
//           <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] text-center">
//             {freedomFromResistancePage.suitableFor.title}
//           </h2>

//           <div className="space-y-3">
//             {freedomFromResistancePage.suitableFor.items.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#2D1C59]/10 shadow-2xs"
//               >
//                 <CheckCircle2 className="w-5 h-5 text-[#0E6E6B] shrink-0 mt-0.5" />
//                 <span className="text-sm text-[#33463B] font-medium">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 7. CTA BANNER (Off-white presentation) */}
//       <section className="py-20 bg-[#FAF7F2]">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
//             {freedomFromResistancePage.ctaBanner.title}
//           </h2>
//           <p className="text-base text-[#4E6258] leading-relaxed">
//             {freedomFromResistancePage.ctaBanner.subtitle}
//           </p>
//           <div className="pt-2 flex flex-wrap justify-center gap-4">
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => handleNav("/contact?interest=freedom-from-resistance")}
//             >
//               Request a Consultation
//               <ArrowRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





import Button from "@/components/ui/Button";
import { freedomPageData } from "@/data/freedomPageData";

/** Purely decorative image: hidden from assistive tech, never blocks clicks. */
function Deco({ src, className = "" }) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none absolute select-none h-auto ${className}`}
    />
  );
}

function Divider({ src, className = "" }) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`mx-auto h-auto select-none ${className}`}
    />
  );
}

export default function FreedomPage() {
  const { decorations: deco, hero, understanding, help, cta } = freedomPageData;
  const cols = Math.max(1, help.items.length);

  return (
    <div className="w-full overflow-x-clip bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative border-none border-[#2D1C59]/10 bg-[#FAF7F2]">
        <Deco
          src={deco.heroLeft}
          className="left-0 top-3 z-0 w-12 sm:w-20 lg:w-24 xl:w-28"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-[1] flex flex-col justify-center py-10 pl-14 pr-5 sm:py-14 sm:pl-24 sm:pr-10 lg:py-16 lg:pl-28 lg:pr-8 xl:pl-36">
            <p className="text-[0.7rem] font-medium tracking-[0.18em] text-[#C5A265] sm:text-xs lg:text-sm">
              {hero.label}
            </p>

            <h1 className="mt-3 font-serif text-[clamp(2.6rem,6.2vw,4.5rem)] leading-[1.05] text-[#2D1C59]">
              {hero.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part, j) =>
                    part.italic ? (
                      <em key={j} className="font-normal italic">
                        {part.text}
                      </em>
                    ) : (
                      <span key={j}>{part.text}</span>
                    )
                  )}
                </span>
              ))}
            </h1>

            <blockquote className="mt-5 max-w-md font-serif text-[clamp(1.15rem,2.2vw,1.6rem)] leading-snug text-[#3B2F66] sm:mt-6">
              “{hero.quote}”
            </blockquote>

            <Divider src={deco.divider} className="mt-6 !mx-0 w-24 sm:w-28" />
          </div>

          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] xl:min-h-[520px]">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              fetchPriority="high"
              
              className="absolute inset-0 h-full w-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent lg:block" />
          </div>
        </div>
      </section>

      {/* 2. UNDERSTANDING */}
      <section className="relative px-5 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <Deco
          src={deco.understandingRight}
          className="right-0 top-10 w-12 -scale-x-100 sm:w-20 lg:w-24"
        />

        <div className="mx-auto max-w-5xl">
          <Divider src={deco.divider} className="w-32 sm:w-36" />
          <h2 className="mt-3 text-balance text-center font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] leading-tight text-[#2D1C59]">
            {understanding.title}
          </h2>

          <div className="mt-8 grid grid-cols-1 items-center gap-7 sm:mt-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10 lg:gap-14">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(45,28,89,0.10)] md:max-w-none">
              <img
                src={understanding.image.src}
                alt={understanding.image.alt}
                width={understanding.image.width}
                height={understanding.image.height}
                loading="lazy"
                className="h-auto w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-5 text-[0.95rem] leading-[1.75] text-[#4A5560] sm:space-y-6 sm:text-base">
              {understanding.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HELP PANEL */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#E9EEE3] px-5 py-9 sm:px-10 sm:py-10 lg:py-12">
          <Divider src={deco.divider} className="w-32 sm:w-36" />
          <h2 className="mt-3 text-balance text-center font-serif text-[clamp(1.6rem,3.6vw,2.4rem)] leading-tight text-[#2D1C59]">
            {help.title}
          </h2>

          <div
            style={{ "--cols": cols }}
            className="mt-8 grid grid-cols-1 divide-y divide-[#B9C7B6] sm:mt-10 md:divide-y-0 md:divide-x md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
          >
            {help.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center px-2 py-7 text-center first:pt-0 last:pb-0 md:px-6 md:py-0 lg:px-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-12 w-12 object-contain"
                  />
                </span>
                <h3 className="mt-4 font-serif text-[1.65rem] leading-tight text-[#2D1C59]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#4A5560]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="relative px-5 pb-16 pt-6 text-center sm:px-6 sm:pb-20 lg:pb-24">
        <Deco
          src={deco.ctaLeft}
          className="bottom-0 left-0 w-20 mix-blend-multiply sm:w-32 lg:w-44"
        />
        <Deco
          src={deco.ctaRight}
          className="bottom-0 right-0 w-20 -scale-x-100 mix-blend-multiply sm:w-32 lg:w-44"
        />

        <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
          <Divider src={deco.divider} className="w-32 sm:w-36" />
          <h2 className="mt-3 text-balance font-serif text-[clamp(1.8rem,4vw,2.7rem)] leading-tight text-[#2D1C59]">
            {cta.title}
          </h2>
          <div className="mt-7 sm:mt-8">
            <Button variant="purple" size="lg" href={cta.button.href}>
              {cta.button.label}
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
