// // src/components/home/TestimonialsSection.jsx
// // Home page par "What Our Clients Say": lagataar ghumta (infinite marquee) testimonials strip.
// // Card yahin bana hai (FeedbackPage ke card par depend nahi), isliye sab cards barabar size ke rehte hain.
// // Poora text + video ke liye data/modal /feedback page wale hi hain.
// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { ArrowRight, Play, Quote, Star } from "lucide-react";
// import Button from "@/components/ui/Button";
// import Reveal from "@/components/ui/Reveal";
// import {
//   HERO,
//   TESTIMONIALS,
//   VideoModal,
// } from "@/views/feedback/FeedbackPage";

// const HOME_COUNT = 9; // kitne testimonials ghumne hain
// const SECONDS_PER_CARD = 4; // ek card ko nikalne me kitne second (kam = tez, zyada = slow)
// const PAUSE_ON_HOVER = true; // mouse upar aaye to ruk jaye (Watch video dabane ke liye). false = kabhi na ruke
// const VIEW_ALL_LABEL = "View all feedback";
// const VIEW_ALL_HREF = "/feedback";

// const initialsOf = (name = "") =>
//   name
//     .split(" ")
//     .filter(Boolean)
//     .slice(0, 2)
//     .map((w) => w[0]?.toUpperCase())
//     .join("");

// // Photo na ho / load na ho to initials circle
// function Avatar({ name, image }) {
//   const [failed, setFailed] = useState(false);
//   const imgRef = useRef(null);

//   // Server render me 404 ho to onError miss ho jata hai, isliye mount par bhi check
//   useEffect(() => {
//     const el = imgRef.current;
//     if (el && el.complete && el.naturalWidth === 0) setFailed(true);
//   }, [image]);

//   if (image && !failed) {
//     return (
//       <img
//         ref={imgRef}
//         src={image}
//         alt=""
//         width={44}
//         height={44}
//         loading="lazy"
//         decoding="async"
//         onError={() => setFailed(true)}
//         className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-[#2D1C59]/10"
//       />
//     );
//   }
//   return (
//     <span
//       aria-hidden="true"
//       className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2D1C59] font-serif text-base font-semibold text-white"
//     >
//       {initialsOf(name)}
//     </span>
//   );
// }

// // Compact card: sab ka size fixed, quote 4 line tak
// function MarqueeCard({ t, onPlay }) {
//   const rating = Math.round(t.rating ?? 5);
//   const hasVideo = Boolean(t.video?.src);

//   return (
//     <article className="relative flex h-full w-full flex-col rounded-2xl border border-[#2D1C59]/[0.06] bg-white p-5 shadow-[0_10px_30px_-12px_rgba(45,28,89,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(45,28,89,0.28)]">
//       <Quote
//         aria-hidden="true"
//         className="absolute right-4 top-4 h-8 w-8 fill-[#B88B4A]/15 text-[#B88B4A]/25"
//       />

//       <div className="flex items-center gap-3 pr-8">
//         <Avatar name={t.name} image={t.image} />
//         <div className="min-w-0">
//           <p className="truncate text-base font-semibold leading-tight text-[#14123A]">
//             {t.name}
//           </p>
//           <p className="truncate text-sm text-[#6B7A90]">
//             {[t.role, t.location].filter(Boolean).join(" · ")}
//           </p>
//         </div>
//       </div>

//       <div className="mt-3 flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
//         {[1, 2, 3, 4, 5].map((n) => (
//           <Star
//             key={n}
//             aria-hidden="true"
//             className={`h-3.5 w-3.5 ${n <= rating ? "fill-[#E8A948] text-[#E8A948]" : "text-[#2D1C59]/20"}`}
//           />
//         ))}
//       </div>

//       <p className="mt-3 line-clamp-4 min-h-[96px] text-sm leading-6 text-[#6B7A90]">
//         {t.quote}
//       </p>

//       <div className="mt-4 flex min-h-[32px] items-center justify-between gap-2">
//         {t.service && (
//           <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-[#B88B4A]">
//             {t.service}
//           </span>
//         )}
//         {hasVideo && (
//           <button
//             type="button"
//             onClick={() => onPlay(t)}
//             aria-label={`Play ${t.name} video testimonial`}
//             className="ml-auto inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#2D1C59] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1A103F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1C59]"
//           >
//             <Play className="h-3 w-3 fill-white" aria-hidden="true" />
//             Watch video
//           </button>
//         )}
//       </div>
//     </article>
//   );
// }

// export default function TestimonialsSection() {
//   const router = useRouter();
//   const [playing, setPlaying] = useState(null);
//   const closeVideo = useCallback(() => setPlaying(null), []);

//   const items = TESTIMONIALS.slice(0, HOME_COUNT);
//   const n = items.length;
//   if (!n) return null;

//   // Ek set itna lamba ho ki badi screen bhi bhar jaye (>= 8 cards), phir 2 copy = seamless loop
//   const base = Array.from({ length: Math.max(n, 8) }, (_, i) => items[i % n]);
//   const track = [...base, ...base];
//   const duration = base.length * SECONDS_PER_CARD;

//   return (
//     <section
//       id="testimonials"
//       aria-labelledby="testimonials-heading"
//       className="section-y overflow-hidden bg-[#FBF9F5]"
//     >
//       <style>{`
//         @keyframes ibw-marquee {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         .ibw-marquee-track { animation: ibw-marquee var(--dur) linear infinite; will-change: transform; }
//         ${PAUSE_ON_HOVER ? "@media (hover: hover) { .ibw-marquee:hover .ibw-marquee-track { animation-play-state: paused; } }" : ""}
//       `}</style>

//       <div className="container-x">
//         <Reveal className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-14">
//           <h2
//             id="testimonials-heading"
//             className="text-[28px] font-extrabold leading-tight tracking-tight text-[#14123A] sm:text-5xl"
//           >
//             {HERO.titlePrefix}{" "}
//             <span className="bg-gradient-to-r from-[#5B2FC2] via-[#B88B4A] to-[#E8A948] bg-clip-text text-transparent">
//               {HERO.titleHighlight}
//             </span>{" "}
//             {HERO.titleSuffix}
//           </h2>
//           <p className="text-base text-[#6B7A90] sm:text-lg">{HERO.subtitle}</p>
//         </Reveal>
//       </div>

//       {/* Full-width strip, dono kinaron par fade */}
//       <div
//         role="region"
//         aria-label="Client testimonials"
//         className="ibw-marquee relative -my-8 py-8"
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
//           maskImage:
//             "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
//         }}
//       >
//         <ul
//           className="ibw-marquee-track flex w-max items-stretch"
//           style={{
//             "--dur": `${duration}s`,
//             animationPlayState: playing ? "paused" : undefined,
//           }}
//         >
//           {track.map((t, i) => (
//             <li
//               key={`${t.id}-${i}`}
//               aria-hidden={i >= base.length ? "true" : undefined}
//               className="flex w-[280px] shrink-0 pr-5 sm:w-[320px] lg:w-[360px]"
//             >
//               <MarqueeCard t={t} onPlay={setPlaying} />
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="container-x">
//         <Reveal delay={150} className="mt-12 flex justify-center">
//           <Button
//             variant="outline"
//             size="md"
//             onClick={() => router.push(VIEW_ALL_HREF)}
//             className="w-full justify-center sm:w-auto"
//           >
//             {VIEW_ALL_LABEL}
//             <ArrowRight className="ml-1 h-4 w-4" />
//           </Button>
//         </Reveal>
//       </div>

//       {playing && (
//         <VideoModal video={playing.video} name={playing.name} onClose={closeVideo} />
//       )}
//     </section>
//   );
// }









// "use client";

// import { useEffect, useState } from "react";
// import Stars from "./Stars";
// import { getPublicFeedbacksApi, rowsOf, customerOf } from "@/services/feedbackService";

// function Avatar({ name, pic }) {
//   const [broken, setBroken] = useState(false);
//   if (pic && !broken) {
//     return (
//       <img
//         src={pic}
//         alt={name}
//         onError={() => setBroken(true)}
//         referrerPolicy="no-referrer"
//         className="h-12 w-12 rounded-full object-cover"
//       />
//     );
//   }
//   return (
//     <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9EEE3] font-serif text-lg text-[#2D1C59]">
//       {(name || "C").charAt(0).toUpperCase()}
//     </span>
//   );
// }

// export default function PublicTestimonials({
//   eyebrow = "Testimonials",
//   title = "Words From Our Community",
//   limit = 6,
// }) {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let alive = true;
//     getPublicFeedbacksApi({ page: 1, limit })
//       .then((d) => alive && setItems(rowsOf(d)))
//       .catch((e) => console.warn("Testimonials load failed:", e))
//       .finally(() => alive && setLoading(false));
//     return () => {
//       alive = false;
//     };
//   }, [limit]);

//   if (!loading && items.length === 0) return null;

//   return (
//     <section className="px-4 py-14 sm:px-6 lg:py-20">
//       <div className="mx-auto max-w-6xl">
//         <div className="text-center">
//           <p className="text-xs font-medium tracking-[0.18em] text-[#C5A265]">
//             {eyebrow.toUpperCase()}
//           </p>
//           <h2 className="mt-3 text-balance font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] leading-tight text-[#2D1C59]">
//             {title}
//           </h2>
//         </div>

//         {loading ? (
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <div key={i} className="h-48 animate-pulse rounded-3xl bg-[#E9EEE3]/70" />
//             ))}
//           </div>
//         ) : (
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
//             {items.map((f) => {
//               const c = customerOf(f);
//               return (
//                 <article
//                   key={f.id}
//                   className="flex flex-col rounded-3xl bg-white p-7 shadow-[0_8px_24px_rgba(45,28,89,0.08)]"
//                 >
//                   <Stars value={f.rating} size="h-4 w-4" />
//                   {f.title && (
//                     <h3 className="mt-4 font-serif text-xl leading-snug text-[#2D1C59]">
//                       {f.title}
//                     </h3>
//                   )}
//                   <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A5560]">
//                     “{f.comment}”
//                   </p>
//                   <div className="mt-6 flex items-center gap-3">
//                     <Avatar name={c.name} pic={c.pic} />
//                     <span className="text-sm font-semibold text-[#2D1C59]">{c.name}</span>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }