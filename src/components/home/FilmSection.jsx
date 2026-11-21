// "use client";

// import { useRouter } from "next/navigation";
// import { ArrowRight, Film } from "lucide-react";
// import { siteData } from "@/data/siteData";
// import Button from "@/components/ui/Button";
// import Reveal from "@/components/ui/Reveal";

// export default function FilmSection() {
//   const router = useRouter();
//   const data = siteData.homePage.filmSection;

//   if (!data) return null;

//   return (
//     <section id={data.id} className="section-y bg-[#FBF9F5]">
//       <div className="container-x">
//         {/* Heading */}
//         <Reveal className="mx-auto mb-10 max-w-3xl space-y-4 text-center sm:mb-14">
//           <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//             <span className="h-px w-6 bg-[#B88B4A]" />
//             <Film className="h-4 w-4" aria-hidden />
//             {data.eyebrow}
//             <span className="h-px w-6 bg-[#B88B4A]" />
//           </div>

//           <h2 className="font-serif text-[26px] leading-tight text-[#2D1C59] sm:text-4xl">
//             {data.title}
//           </h2>

//           <p className="text-base leading-relaxed text-[#475A51]">
//             {data.description}
//           </p>

//           {data.releaseNote && (
//             <span className="inline-block rounded-full bg-[#2D1C59] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
//               {data.releaseNote}
//             </span>
//           )}
//         </Reveal>

//         {/* Videos */}

// {/* Videos */}
// <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
//   {data.videos.map((v, idx) => (
//     <Reveal key={v.src} delay={idx * 100} className="h-full">
//       <div className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white p-2 shadow-md">
//         <video
//           key={v.src}
//           src={v.src}
//           title={v.title}
//           aria-label={v.title}
//           className="mx-auto aspect-[9/16] max-h-[560px] w-full rounded-xl bg-black object-contain"
//           controls
//           playsInline
//           preload="metadata"
//         >
//           Your browser does not support HTML5 video.
//         </video>
//       </div>
//     </Reveal>
//   ))}
// </div>

//         {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
//           {data.videos.map((v, idx) => (
//             <Reveal key={v.src} delay={idx * 100} className="h-full">
//               <div className="overflow-hidden rounded-2xl border border-[#2D1C59]/10 bg-white p-2 shadow-md">
//                 <video
//                   src={v.src}
//                   poster={v.poster}
//                   title={v.title}
//                   aria-label={v.title}
//                   className="mx-auto aspect-[9/16] max-h-[560px] w-full rounded-xl bg-black object-contain"
//                   controls
//                   playsInline
//                   preload="metadata"
//                 />
//               </div>
//             </Reveal>
//           ))}
//         </div> */}

//         {/* Question + CTA */}
//         <Reveal className="mx-auto mt-10 max-w-2xl space-y-4 text-center sm:mt-14">
//           <p className="font-serif text-xl italic leading-snug text-[#2D1C59] sm:text-2xl">
//             {data.question}
//           </p>
//           <p className="text-base text-[#475A51]">{data.subtext}</p>

//           <div className="pt-2">
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={() => router.push(data.cta.href)}
//               className="w-full justify-center sm:w-auto"
//             >
//               {data.cta.label}
//               <ArrowRight className="ml-1 h-4 w-4" />
//             </Button>
//           </div>

//           {data.note && (
//             <p className="pt-2 text-xs italic text-[#7A8E83]">{data.note}</p>
//           )}
//         </Reveal>
//       </div>
//     </section>
//   );
// }








"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Film, Play } from "lucide-react";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/* ---------- Single video card ---------- */
function VideoCard({ video, index, onPlayed, registerRef }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false); // native controls only after first play

  // register ref so the parent can pause the other clips
  useEffect(() => {
    registerRef(index, ref.current);
    return () => registerRef(index, null);
  }, [index, registerRef]);

  // auto-pause when the card leaves the viewport
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !el.paused) el.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handlePlayClick = () => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => {});
  };

  return (
    <Reveal delay={index * 120} className="h-full">
      <div className="film-card group relative h-full rounded-[22px] p-[2px]">
        {/* animated gold border */}
        <span aria-hidden className="film-border" />

        <div className="relative overflow-hidden rounded-[20px] bg-white p-2 shadow-lg shadow-[#2D1C59]/10 transition-transform duration-500 ease-out group-hover:-translate-y-2">
          <div className="relative overflow-hidden rounded-xl bg-black">
            <video
              ref={ref}
              src={video.src}
              title={video.title}
              aria-label={video.title}
              className="mx-auto aspect-[9/16] max-h-[560px] w-full object-contain"
              controls={started}
              playsInline
              preload="metadata"
              onPlay={() => {
                setPlaying(true);
                setStarted(true);
                onPlayed(index);
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              Your browser does not support HTML5 video.
            </video>

            {/* play overlay */}
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label={`Play ${video.title}`}
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#2D1C59]/70 via-[#2D1C59]/10 to-transparent transition-opacity duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B88B4A] ${
                playing || started ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#B88B4A] text-white shadow-xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                <span aria-hidden className="film-pulse absolute inset-0 rounded-full bg-[#B88B4A]" />
                <Play className="relative ml-1 h-6 w-6 fill-white sm:h-7 sm:w-7" aria-hidden />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- Section ---------- */
export default function FilmSection() {
  const router = useRouter();
  const data = siteData.homePage.filmSection;
  const videoRefs = useRef([]);

  if (!data) return null;

  const registerRef = (i, el) => {
    videoRefs.current[i] = el;
  };

  // only one clip plays at a time
  const pauseOthers = (activeIdx) => {
    videoRefs.current.forEach((el, i) => {
      if (el && i !== activeIdx && !el.paused) el.pause();
    });
  };

  return (
    <section id={data.id} className="section-y relative overflow-hidden bg-[#FBF9F5]">
      {/* scoped animations */}
      <style>{`
        @keyframes film-pulse { 0% { transform: scale(1); opacity: .55 } 100% { transform: scale(1.8); opacity: 0 } }
        @keyframes film-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
        @keyframes film-spin { to { transform: rotate(360deg) } }
        @keyframes film-shimmer { 0% { background-position: 0% 50% } 100% { background-position: 200% 50% } }
        @keyframes film-arrow { 0%,100% { transform: translateX(0) } 50% { transform: translateX(5px) } }
        .film-pulse { animation: film-pulse 2s ease-out infinite }
        .film-orb { animation: film-float 9s ease-in-out infinite }
        .film-reel { animation: film-spin 40s linear infinite }
        .film-border {
          position: absolute; inset: 0; border-radius: 22px; opacity: 0;
          background: linear-gradient(110deg, #B88B4A, #2D1C59, #B88B4A, #2D1C59);
          background-size: 200% 100%;
          transition: opacity .5s ease;
        }
        .film-card:hover .film-border { opacity: 1; animation: film-shimmer 3s linear infinite }
        .film-cta:hover svg { animation: film-arrow 1s ease-in-out infinite }
        .film-title { background: linear-gradient(90deg,#2D1C59 0%,#2D1C59 40%,#B88B4A 50%,#2D1C59 60%,#2D1C59 100%); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: film-shimmer 6s linear infinite }
        @media (prefers-reduced-motion: reduce) {
          .film-pulse, .film-orb, .film-reel, .film-title, .film-card:hover .film-border, .film-cta:hover svg { animation: none !important }
          .film-title { color: #2D1C59; background: none }
        }
      `}</style>

      {/* decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="film-orb absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#B88B4A]/15 blur-3xl sm:h-80 sm:w-80" />
        <div
          className="film-orb absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#2D1C59]/10 blur-3xl sm:h-80 sm:w-80"
          style={{ animationDelay: "-4s" }}
        />
        <Film className="film-reel absolute -right-10 top-6 hidden h-40 w-40 text-[#2D1C59]/[0.04] md:block" />
      </div>

      <div className="container-x relative">
        {/* Heading */}
        <Reveal className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
            <span className="h-px w-6 bg-[#B88B4A]" />
            <Film className="h-4 w-4" aria-hidden />
            {data.eyebrow}
            <span className="h-px w-6 bg-[#B88B4A]" />
          </div>

          <h2 className="film-title pb-1 font-serif text-[26px] leading-[1.15] sm:text-4xl lg:text-5xl">
            {data.title}
          </h2>

          <p className="-mt-1 text-base leading-relaxed text-[#475A51] sm:text-lg">
            {data.description}
          </p>

          {data.releaseNote && (
            <span className="inline-block rounded-full bg-[#2D1C59] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-[#2D1C59]/20">
              {data.releaseNote}
            </span>
          )}
        </Reveal>

        {/* Videos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {data.videos.map((v, idx) => (
            <div
              key={v.src}
              /* centre a lone last card on the 2-col tablet layout */
              className="mx-auto w-full max-w-[380px] sm:max-w-none sm:last:odd:col-span-2 sm:last:odd:mx-auto sm:last:odd:max-w-[380px] lg:last:odd:col-span-1"
            >
              <VideoCard
                video={{ ...v, src: encodeURI(v.src) }}
                index={idx}
                onPlayed={pauseOthers}
                registerRef={registerRef}
              />
            </div>
          ))}
        </div>

        {/* Question + CTA */}
        <Reveal className="mx-auto mt-12 max-w-2xl space-y-4 text-center sm:mt-16">
          <p className="font-serif text-xl italic leading-snug text-[#2D1C59] sm:text-2xl">
            {data.question}
          </p>
          <p className="text-base text-[#475A51]">{data.subtext}</p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(data.cta.href)}
              className="film-cta w-full justify-center transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              {data.cta.label}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {data.note && (
            <p className="pt-2 text-xs italic text-[#7A8E83]">{data.note}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}