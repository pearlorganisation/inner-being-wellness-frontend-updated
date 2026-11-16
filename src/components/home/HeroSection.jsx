// "use client";
// import {
//   ArrowRight,
//   Heart,
//   Sun,
//   Flower2,
//   Sparkles,
//   Mic2,
//   Award,
// } from "lucide-react";
// import Button from "@/components/ui/Button";
// import HeroVideo from "@/components/home/HeroVideo";
// import { getWhatsAppLink } from "@/data/siteData";

// const FEATURE_ICONS = [Flower2, Heart, Sun];

// export default function HeroSection({
//   kicker,
//   line1,
//   line2,
//   subtitle,
//   cta,
//   features = [],
//   cardLabel,
//   cardQuote,
//   video,
//   image,
//   onCta,
// }) {
//   const hasVideo = Boolean(video?.enabled && video?.src);

//   return (
//     <section className="relative overflow-hidden pb-10 pt-6 sm:pb-14 lg:pb-12 lg:pt-8">
//       {/* Ambient background (soft, slow drift) */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//         <div className="hv-blob absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C5A265]/15 blur-3xl" />
//         <div
//           className="hv-blob absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0E6E6B]/10 blur-3xl"
//           style={{ animationDelay: "-6s" }}
//         />
//       </div>

//       <div className="container-x relative z-20">
//         <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
//           {/* ================= LEFT ================= */}
//           <div className="min-w-0 space-y-4 text-center sm:space-y-5 lg:col-span-6 lg:text-left">
//             <div
//               className="hv-rise inline-flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B88B4A] sm:text-xs lg:justify-start"
//               style={{ "--d": "0ms" }}
//             >
//               <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
//               <span>{kicker}</span>
//               <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
//             </div>

//             <div className="hv-rise" style={{ "--d": "120ms" }}>
//               {/* FIX: heading chhota (lg 44px, xl 50px) taaki CTA fold ke andar aaye */}
//               <h1 className="font-serif text-[32px] leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
//                 <span className="block text-[#2D1C59]">{line1}</span>
//                 <span className="hv-grad-text block pb-1">{line2}</span>
//               </h1>
//               {/* Gold underline draw animation */}
//               <span
//                 aria-hidden="true"
//                 className="hv-underline mx-auto mt-3 block h-[3px] w-24 rounded-full bg-gradient-to-r from-[#C5A265] to-[#E8A948] lg:mx-0"
//                 style={{ "--d": "900ms" }}
//               />
//             </div>

//             <p
//               className="hv-rise mx-auto max-w-xl text-base leading-relaxed text-[#4A5D54] lg:mx-0 lg:border-l-2 lg:border-[#C5A265]/60 lg:pl-5 xl:text-lg"
//               style={{ "--d": "260ms" }}
//             >
//               {subtitle}
//             </p>

//             {/* Video na ho to CTA yahan, warna video ke neeche (client requirement) */}
//             {!hasVideo && (
//               <div className="hv-rise pt-1" style={{ "--d": "380ms" }}>
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   onClick={onCta}
//                   className="group w-full justify-center sm:w-auto"
//                 >
//                   <span>{cta}</span>
//                   <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </div>
//             )}

//             {/* Peace / Love / Joy pills */}
//             <div
//               className="hv-rise flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start"
//               style={{ "--d": "500ms" }}
//             >
//               {FEATURE_ICONS.map((Icon, i) => (
//                 <span
//                   key={features[i] ?? i}
//                   className="group inline-flex items-center gap-2 rounded-full border border-[#E9DCBF] bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5A265] hover:shadow-md"
//                 >
//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF4E6] text-[#C5A265]">
//                     <Icon className="h-4 w-4 stroke-[1.8]" />
//                   </span>
//                   <span className="font-serif text-sm font-bold text-[#2D1C59]">
//                     {features[i]}
//                   </span>
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* ================= RIGHT ================= */}
//           <div
//             className="hv-pop relative mx-auto w-full min-w-0 max-w-sm sm:max-w-md lg:col-span-6 lg:max-w-none"
//             style={{ "--d": "250ms" }}
//           >
//             {hasVideo ? (
//               <>
//                 {/* FIX: offset gold border + extra glow div hata diye.
//                     Glow/ring ab .hv-frame (CSS) se aata hai, float ke saath sync rehta hai. */}
//                 <div className="hv-frame hv-float">
//                   <HeroVideo video={video} />
//                 </div>

//                 {/* Credentials: video ke neeche, chehre par kuch nahi */}
//                 <div className="hv-rise hv-badges" style={{ "--d": "600ms" }}>
//                   <span className="hv-badge">
//                     <Mic2 className="h-4 w-4 text-[#C5A265]" />
//                     TEDx Speaker
//                   </span>
//                   <span className="hv-badge">
//                     <Award className="h-4 w-4 text-[#0E6E6B]" />
//                     Global Happiness Leader
//                   </span>
//                 </div>

//                 {/* CTA video ke neeche */}
//                 <div
//                   className="hv-rise relative z-10 mt-3 flex flex-col items-center"
//                   style={{ "--d": "700ms" }}
//                 >
//                   <Button
//                     variant="primary"
//                     size="lg"
//                     onClick={onCta}
//                     className="hv-shine group w-full justify-center sm:w-auto"
//                   >
//                     <span>{cta}</span>
//                     <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Button>
//                   <p className="mt-2 text-xs text-[#7A8E83]">
//                     Free discovery call · No obligationa
//                     <a
//                       href={getWhatsAppLink()}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#128C7E] transition-colors hover:text-[#25D366]"
//                     >
//                       <span className="h-2 w-2 rounded-full bg-[#25D366]" />
//                       Or chat with us on WhatsApp
//                     </a>
//                   </p>
//                 </div>
//               </>
//             ) : (
//               image?.src && (
//                 <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-2xl">
//                   <img
//                     src={image.src}
//                     alt={image.alt || ""}
//                     className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[540px]"
//                     referrerPolicy="no-referrer"
//                     fetchPriority="high"
//                   />
//                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#231754]/40 via-transparent to-transparent" />
//                   <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-md backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="rounded-xl bg-[#2D1C59] p-2.5 text-white">
//                         <Sparkles className="h-5 w-5 text-[#E8A948]" />
//                       </div>
//                       <div className="min-w-0">
//                         <span className="block text-xs font-medium uppercase tracking-wider text-[#7A8E83]">
//                           {cardLabel}
//                         </span>
//                         <span className="block font-serif text-sm font-bold text-[#2D1C59]">
//                           {cardQuote}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef, useState } from "react";
import { Maximize2, Volume2, VolumeX, Mic, Sparkles, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection({
  kicker,
  line1,
  line2,
  subtitle,
  cta,
  features = [],
  cardLabel,
  cardQuote,
  video,
  image,
  onCta,
  tagline,
  taglineShort,
  founder,
}) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(video?.muted ?? true);

  const showVideo = Boolean(video?.enabled && video?.src);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  const goFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen(); // iOS Safari
  };

  return (
    <section id="home" className="section-y relative overflow-hidden bg-[#FBF9F5]">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#F3CF63]/25 blur-3xl"
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ============ LEFT: CONTENT ============ */}
          <div className="min-w-0 text-center lg:text-left">
            {kicker && (
              <span className="inline-block rounded-full border border-[#2D1C59]/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0E6E6B]">
                {kicker}
              </span>
            )}

            <h1 className="mt-5 font-serif text-[30px] font-semibold leading-tight sm:text-5xl xl:text-6xl">
              <span className="block text-[#2D1C59]">{line1}</span>
              <span className="block text-[#0E6E6B]">{line2}</span>
            </h1>

            {subtitle && (
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#445064] sm:text-lg lg:mx-0">
                {subtitle}
              </p>
            )}

            {/* Tagline */}
            {(tagline || taglineShort) && (
              <div className="mx-auto mt-6 max-w-xl border-l-4 border-[#C5A265] py-1 pl-4 text-left lg:mx-0">
                {tagline && (
                  <p className="font-serif text-lg italic leading-snug text-[#2D1C59] sm:text-xl">
                    {tagline}
                  </p>
                )}
                {taglineShort && (
                  <p className="mt-1 flex items-center gap-2 font-serif text-2xl font-semibold text-[#C5A265] sm:text-3xl">
                    <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
                    “{taglineShort}”
                  </p>
                )}
              </div>
            )}

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                onClick={onCta}
                className="w-full justify-center sm:w-auto"
              >
                {cta}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {features.length > 0 && (
              <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
                {features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-[#2D1C59]/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2D1C59]"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ============ RIGHT: VIDEO / IMAGE CARD ============ */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-[#2D1C59]/10 bg-white p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-3xl bg-[#F3EFE6]">
                {showVideo ? (
                  <>
                    <video
                      ref={videoRef}
                      src={video.src}
                      poster={video.poster || undefined}
                      className="aspect-[4/5] w-full object-cover"
                      autoPlay
                      loop={video.loop ?? true}
                      muted={video.muted ?? true}
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute right-3 top-3 flex gap-2">
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={muted ? "Unmute video" : "Mute video"}
                        className="rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75"
                      >
                        {muted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>
                      {video.allowFullscreen && (
                        <button
                          type="button"
                          onClick={goFullscreen}
                          aria-label="Full screen"
                          className="rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  image?.src && (
                    <>
                      <img
                        src={image.src}
                        alt={image.alt || ""}
                        className="aspect-[4/5] w-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="eager"
                      />
                      {(cardLabel || cardQuote) && (
                        <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/55 p-3 text-white backdrop-blur-md">
                          {cardLabel && (
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#F3CF63]">
                              {cardLabel}
                            </p>
                          )}
                          {cardQuote && (
                            <p className="mt-0.5 font-serif text-base">{cardQuote}</p>
                          )}
                        </div>
                      )}
                    </>
                  )
                )}
              </div>

              {/* Name + Title + Badges */}
              {founder && (
                <div className="px-2 pb-2 pt-5 text-center">
                  <h2 className="font-serif text-2xl font-semibold text-[#2D1C59] sm:text-3xl">
                    {founder.name}
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E6E6B] sm:text-[13px]">
                    {founder.title}
                  </p>

                  {founder.badges?.length > 0 && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {founder.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#2D1C59]/10 bg-[#F3EFE6] px-3 py-1 text-xs font-medium text-[#2D1C59]"
                        >
                          <Mic className="h-3 w-3 text-[#C5A265]" aria-hidden />
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  <Button
                    variant="primary"
                    size="md"
                    onClick={onCta}
                    className="mt-5 w-full justify-center"
                  >
                    {cta}
                  </Button>
                  {founder.ctaNote && (
                    <p className="mt-2 text-xs text-[#7A8599]">{founder.ctaNote}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import { useRef, useState } from "react";
// import { Flower2, Heart, Sun, Maximize2, Volume2, VolumeX, Mic, Sparkles } from "lucide-react";
// import siteData from "../../data/siteData";

// const ICONS = { Lotus: Flower2, Flower2, Heart, Sun };





// export default function HeroSection() {
//   const { theme } = siteData;
//   const hero = siteData.homePage.hero;
//   const id = siteData.homePage.sectionIds.hero;

//   const {
//     badge,
//     titleLines = [],
//     description,
//     primaryCta,
//     image,
//     video,
//     tagline,
//     taglineShort,
//     founder,
//     highlights = [],
//   } = hero;

//   const videoRef = useRef(null);
//   const [muted, setMuted] = useState(video?.muted ?? true);

//   const toneColor = (tone) =>
//     tone === "secondary" ? theme.secondary : theme.primary;

//   const toggleMute = () => {
//     if (!videoRef.current) return;
//     videoRef.current.muted = !videoRef.current.muted;
//     setMuted(videoRef.current.muted);
//   };

//   const goFullscreen = () => {
//     const el = videoRef.current;
//     if (!el) return;
//     if (el.requestFullscreen) el.requestFullscreen();
//     else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen(); // iOS Safari
//   };

//   return (
//     <section
//       id={id}
//       className="relative overflow-hidden"
//       style={{ backgroundColor: theme.surface }}
//     >
//       {/* soft background glow */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
//         style={{ background: `radial-gradient(circle, ${theme.goldLight}55, transparent 70%)` }}
//       />

//       <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
//         {/* ============ LEFT: CONTENT ============ */}
//         <div className="text-center lg:text-left">
//           {badge && (
//             <span
//               className="inline-block rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
//               style={{
//                 color: theme.secondary,
//                 borderColor: theme.line,
//                 backgroundColor: theme.card,
//               }}
//             >
//               {badge}
//             </span>
//           )}

//           <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
//             {titleLines.map((line, i) => (
//               <span
//                 key={i}
//                 className="block"
//                 style={{ color: toneColor(line.tone) }}
//               >
//                 {line.text}
//               </span>
//             ))}
//           </h1>

//           {description && (
//             <p
//               className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg lg:mx-0"
//               style={{ color: theme.ink }}
//             >
//               {description}
//             </p>
//           )}

//           {/* ---- NEW: Tagline ---- */}
//           {(tagline || taglineShort) && (
//             <div
//               className="mx-auto mt-6 max-w-xl border-l-4 py-1 pl-4 text-left lg:mx-0"
//               style={{ borderColor: theme.gold }}
//             >
//               {tagline && (
//                 <p
//                   className="font-serif text-lg italic leading-snug md:text-xl"
//                   style={{ color: theme.primary }}
//                 >
//                   {tagline}
//                 </p>
//               )}
//               {taglineShort && (
//                 <p
//                   className="mt-1 flex items-center gap-2 font-serif text-2xl font-semibold md:text-3xl"
//                   style={{ color: theme.gold }}
//                 >
//                   <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
//                   “{taglineShort}”
//                 </p>
//               )}
//             </div>
//           )}

//           {primaryCta && (
//             <div className="mt-8 flex justify-center lg:justify-start">
//               <a
//                 href={primaryCta.href}
//                 className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
//                 style={{
//                   backgroundColor: theme.goldLight,
//                   color: theme.dark,
//                 }}
//               >
//                 {primaryCta.label}
//               </a>
//             </div>
//           )}

//           {/* ---- Highlights ---- */}
//           {highlights.length > 0 && (
//             <ul className="mt-10 grid gap-4 sm:grid-cols-3">
//               {highlights.map((h) => {
//                 const Icon = ICONS[h.icon] || Sparkles;
//                 return (
//                   <li
//                     key={h.id}
//                     className="rounded-2xl border p-4 text-left"
//                     style={{ backgroundColor: theme.card, borderColor: theme.line }}
//                   >
//                     <Icon className="h-6 w-6" style={{ color: theme.secondary }} aria-hidden />
//                     <p className="mt-2 text-sm font-semibold" style={{ color: theme.primary }}>
//                       {h.label}
//                     </p>
//                     <p className="mt-1 text-xs leading-snug" style={{ color: theme.muted }}>
//                       {h.description}
//                     </p>
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </div>

//         {/* ============ RIGHT: VIDEO / IMAGE CARD ============ */}
//         <div className="mx-auto w-full max-w-md">
//           <div
//             className="rounded-[2rem] border p-3 shadow-2xl"
//             style={{ backgroundColor: theme.card, borderColor: theme.line }}
//           >
//             <div
//               className="relative overflow-hidden rounded-3xl"
//               style={{ backgroundColor: theme.surfaceAlt }}
//             >
//               {video?.enabled && video?.src ? (
//                 <>
//                   <video
//                     ref={videoRef}
//                     src={video.src}
//                     poster={video.poster || undefined}
//                     className="aspect-[4/5] w-full object-cover"
//                     autoPlay
//                     loop={video.loop}
//                     muted={video.muted}
//                     playsInline
//                     preload="metadata"
//                   />
//                   <div className="absolute right-3 top-3 flex gap-2">
//                     <button
//                       type="button"
//                       onClick={toggleMute}
//                       aria-label={muted ? "Unmute video" : "Mute video"}
//                       className="rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75"
//                     >
//                       {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
//                     </button>
//                     {video.allowFullscreen && (
//                       <button
//                         type="button"
//                         onClick={goFullscreen}
//                         aria-label="Full screen"
//                         className="rounded-full bg-black/55 p-2 text-white backdrop-blur transition hover:bg-black/75"
//                       >
//                         <Maximize2 className="h-4 w-4" />
//                       </button>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 image?.src && (
//                   <img
//                     src={image.src}
//                     alt={image.alt || ""}
//                     className="aspect-[4/5] w-full object-cover"
//                     loading="eager"
//                   />
//                 )
//               )}
//             </div>

//             {/* ---- NEW: Name + Title ---- */}
//             {founder && (
//               <div className="px-2 pb-2 pt-5 text-center">
//                 <h2
//                   className="font-serif text-2xl font-semibold md:text-3xl"
//                   style={{ color: theme.primary }}
//                 >
//                   {founder.name}
//                 </h2>
//                 <p
//                   className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] md:text-[13px]"
//                   style={{ color: theme.secondary }}
//                 >
//                   {founder.title}
//                 </p>

//                 {founder.badges?.length > 0 && (
//                   <div className="mt-4 flex flex-wrap justify-center gap-2">
//                     {founder.badges.map((b) => (
//                       <span
//                         key={b}
//                         className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
//                         style={{
//                           color: theme.primary,
//                           borderColor: theme.line,
//                           backgroundColor: theme.surfaceAlt,
//                         }}
//                       >
//                         <Mic className="h-3 w-3" style={{ color: theme.gold }} aria-hidden />
//                         {b}
//                       </span>
//                     ))}
//                   </div>
//                 )}

//                 {primaryCta && (
//                   <a
//                     href={primaryCta.href}
//                     className="mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition hover:-translate-y-0.5"
//                     style={{ backgroundColor: theme.goldLight, color: theme.dark }}
//                   >
//                     {primaryCta.label}
//                   </a>
//                 )}
//                 {founder.ctaNote && (
//                   <p className="mt-2 text-xs" style={{ color: theme.muted }}>
//                     {founder.ctaNote}
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }