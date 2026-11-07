// "use client";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize2,
//   Minimize2,
//   ArrowRight,
// } from "lucide-react";
// import Reveal from "@/components/ui/Reveal";
// import Button from "@/components/ui/Button";

// const fmt = (s) => {
//   if (!Number.isFinite(s)) return "0:00";
//   const m = Math.floor(s / 60);
//   const sec = Math.floor(s % 60);
//   return `${m}:${sec.toString().padStart(2, "0")}`;
// };

// export default function VideoShowcase({ data }) {
//   const router = useRouter();
//   const frameRef = useRef(null);
//   const videoRef = useRef(null);
//   const barRef = useRef(null);
//   const hideTimer = useRef(null);
//   const userPaused = useRef(false);
//   const seeking = useRef(false);

//   const video = data?.video;
//   const loop = video?.loop ?? true;
//   const allowFullscreen = video?.allowFullscreen ?? true;

//   const [playing, setPlaying] = useState(false);
//   const [muted, setMuted] = useState(video?.muted ?? true);
//   const [isFs, setIsFs] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [current, setCurrent] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [controls, setControls] = useState(true);
//   const [ready, setReady] = useState(false);
//   const [error, setError] = useState(false);
//   const [portrait, setPortrait] = useState(false);

//   /* ---------- controls auto-hide ---------- */
//   const reveal = useCallback(() => {
//     setControls(true);
//     clearTimeout(hideTimer.current);
//     hideTimer.current = setTimeout(() => {
//       if (videoRef.current && !videoRef.current.paused) setControls(false);
//     }, 2800);
//   }, []);

//   /* ---------- actions ---------- */
//   const togglePlay = useCallback(async () => {
//     const v = videoRef.current;
//     if (!v) return;
//     try {
//       if (v.paused) {
//         userPaused.current = false;
//         await v.play();
//       } else {
//         userPaused.current = true;
//         v.pause();
//       }
//     } catch {
//       /* play blocked */
//     }
//     reveal();
//   }, [reveal]);

//   const toggleMute = useCallback(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = !v.muted;
//     setMuted(v.muted);
//     reveal();
//   }, [reveal]);

//   const toggleFullscreen = useCallback(async () => {
//     const el = frameRef.current;
//     const v = videoRef.current;
//     if (!el || !v) return;
//     const active = document.fullscreenElement || document.webkitFullscreenElement;
//     try {
//       if (active) {
//         if (document.exitFullscreen) await document.exitFullscreen();
//         else document.webkitExitFullscreen?.();
//       } else if (el.requestFullscreen) {
//         await el.requestFullscreen();
//       } else if (el.webkitRequestFullscreen) {
//         el.webkitRequestFullscreen();
//       } else if (v.webkitEnterFullscreen) {
//         v.webkitEnterFullscreen(); // iPhone Safari
//       }
//     } catch {
//       v.webkitEnterFullscreen?.();
//     }
//     reveal();
//   }, [reveal]);

//   /* ---------- seeking (click + drag) ---------- */
//   const seekFromEvent = (e) => {
//     const v = videoRef.current;
//     const bar = barRef.current;
//     if (!v || !bar || !v.duration) return;
//     const rect = bar.getBoundingClientRect();
//     const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
//     v.currentTime = ratio * v.duration;
//     setProgress(ratio * 100);
//     setCurrent(ratio * v.duration);
//   };
//   const onBarDown = (e) => {
//     e.stopPropagation();
//     seeking.current = true;
//     e.currentTarget.setPointerCapture?.(e.pointerId);
//     seekFromEvent(e);
//   };
//   const onBarMove = (e) => {
//     if (seeking.current) seekFromEvent(e);
//   };
//   const onBarUp = (e) => {
//     seeking.current = false;
//     e.currentTarget.releasePointerCapture?.(e.pointerId);
//   };

//   /* ---------- keyboard ---------- */
//   const onKeyDown = (e) => {
//     if (e.target.tagName === "BUTTON") return;
//     if (e.key === " " || e.key.toLowerCase() === "k") {
//       e.preventDefault();
//       togglePlay();
//     } else if (e.key.toLowerCase() === "m") {
//       toggleMute();
//     } else if (e.key.toLowerCase() === "f" && allowFullscreen) {
//       toggleFullscreen();
//     }
//   };

//   /* ---------- video events ---------- */
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = video?.muted ?? true;
//     v.defaultMuted = true;

//     const onPlay = () => setPlaying(true);
//     const onPause = () => setPlaying(false);
//     const onTime = () => {
//       if (seeking.current || !v.duration) return;
//       setCurrent(v.currentTime);
//       setProgress((v.currentTime / v.duration) * 100);
//     };
//     const onMeta = () => {
//       setDuration(v.duration || 0);
//       setPortrait(v.videoHeight > v.videoWidth);
//     };
//     const onReady = () => setReady(true);
//     const onErr = () => setError(true);

//     v.addEventListener("play", onPlay);
//     v.addEventListener("pause", onPause);
//     v.addEventListener("timeupdate", onTime);
//     v.addEventListener("loadedmetadata", onMeta);
//     v.addEventListener("loadeddata", onReady);
//     v.addEventListener("error", onErr);
//     if (v.readyState >= 1) onMeta();
//     if (v.readyState >= 2) onReady();

//     return () => {
//       v.removeEventListener("play", onPlay);
//       v.removeEventListener("pause", onPause);
//       v.removeEventListener("timeupdate", onTime);
//       v.removeEventListener("loadedmetadata", onMeta);
//       v.removeEventListener("loadeddata", onReady);
//       v.removeEventListener("error", onErr);
//     };
//   }, [video?.src, video?.muted]);

//   /* ---------- fullscreen sync ---------- */
//   useEffect(() => {
//     const sync = () =>
//       setIsFs(Boolean(document.fullscreenElement || document.webkitFullscreenElement));
//     document.addEventListener("fullscreenchange", sync);
//     document.addEventListener("webkitfullscreenchange", sync);
//     return () => {
//       document.removeEventListener("fullscreenchange", sync);
//       document.removeEventListener("webkitfullscreenchange", sync);
//     };
//   }, []);

//   /* ---------- play in view, pause out of view ---------- */
//   useEffect(() => {
//     const el = frameRef.current;
//     const v = videoRef.current;
//     if (!el || !v || typeof IntersectionObserver === "undefined") return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (document.fullscreenElement || document.webkitFullscreenElement) return;
//         if (entry.isIntersecting) {
//           if (video?.autoPlay !== false && !userPaused.current) v.play().catch(() => {});
//         } else {
//           v.pause();
//         }
//       },
//       { threshold: 0.35 }
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [video?.autoPlay]);

//   useEffect(() => () => clearTimeout(hideTimer.current), []);

//   if (!video?.src) return null;

//   const showUI = controls || !playing;

//   return (
//     <section
//       id={data.id || "intro-video"}
//       className="section-y relative overflow-hidden bg-[#FBF9F5]"
//     >
//       {/* soft ambient blobs */}
//       <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#C5A265]/15 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0E6E6B]/10 blur-3xl" />

//       <div className="container-x relative z-10 max-w-6xl">
//         {/* Heading */}
//         <Reveal className="mx-auto mb-8 max-w-2xl space-y-3 text-center sm:mb-12">
//           <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
//             <span className="h-px w-6 bg-[#B88B4A]" />
//             {data.eyebrow}
//             <span className="h-px w-6 bg-[#B88B4A]" />
//           </div>
//           <h2 className="font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl lg:text-5xl">
//             {data.title}
//           </h2>
//           {data.description && (
//             <p className="text-base leading-relaxed text-[#4A5D54]">{data.description}</p>
//           )}
//         </Reveal>

//         {/* Player */}
//         <Reveal delay={120}>
//           <div className="relative">
//             {/* glow */}
//             <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#C5A265]/40 via-[#2D1C59]/30 to-[#0E6E6B]/30 opacity-70 blur-2xl sm:-inset-5" />

//             {/* gradient border */}
//             <div className="relative rounded-[1.5rem] bg-gradient-to-br from-[#C5A265] via-[#2D1C59] to-[#0E6E6B] p-[2px] shadow-2xl sm:rounded-[2rem]">
//               <div
//                 ref={frameRef}
//                 tabIndex={0}
//                 onKeyDown={onKeyDown}
//                 onMouseMove={reveal}
//                 onMouseLeave={() => playing && setControls(false)}
//                 onTouchStart={reveal}
//                 className={`group relative overflow-hidden bg-[#120C2B] outline-none focus-visible:ring-2 focus-visible:ring-[#E8A948] ${
//                   isFs
//                     ? "h-full w-full rounded-none"
//                     : "aspect-[16/10] rounded-[calc(1.5rem-2px)] sm:aspect-video sm:rounded-[calc(2rem-2px)]"
//                 }`}
//               >
//                 {/* blurred poster backdrop (portrait video ke side bars ke liye) */}
//                 {video.poster && (
//                   <div
//                     aria-hidden="true"
//                     className="absolute inset-0 scale-125 bg-cover bg-center opacity-60 blur-2xl"
//                     style={{ backgroundImage: `url(${video.poster})` }}
//                   />
//                 )}

//                 <video
//                   ref={videoRef}
//                   src={video.src}
//                   poster={video.poster}
//                   loop={loop}
//                   muted={muted}
//                   autoPlay={video.autoPlay !== false}
//                   playsInline
//                   preload="metadata"
//                   disablePictureInPicture
//                   onClick={togglePlay}
//                   onDoubleClick={allowFullscreen ? toggleFullscreen : undefined}
//                   aria-label={data.title}
//                   className={`relative h-full w-full cursor-pointer ${
//                     portrait || isFs ? "object-contain" : "object-cover"
//                   }`}
//                 />

//                 {/* loading shimmer */}
//                 {!ready && !error && (
//                   <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-br from-[#2D1C59]/40 to-[#0E6E6B]/30" />
//                 )}

//                 {/* error */}
//                 {error && (
//                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#231754] p-6 text-center text-white">
//                     <Play className="h-8 w-8 opacity-70" />
//                     <p className="text-sm">Video load nahi ho payi. Please page refresh karein.</p>
//                   </div>
//                 )}

//                 {/* vignette */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

//                 {/* top-left caption */}
//                 {data.caption && (
//                   <div
//                     className={`pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md transition-opacity duration-300 sm:left-5 sm:top-5 sm:text-xs ${
//                       showUI ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     <span
//                       className={`h-2 w-2 rounded-full ${
//                         playing ? "animate-pulse bg-[#E8A948]" : "bg-white/60"
//                       }`}
//                     />
//                     {data.caption}
//                   </div>
//                 )}

//                 {/* unmute hint */}
//                 {playing && muted && (
//                   <button
//                     type="button"
//                     onClick={toggleMute}
//                     className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#2D1C59] shadow-lg transition hover:scale-105 sm:right-5 sm:top-5"
//                   >
//                     <Volume2 className="h-4 w-4" />
//                     Tap for sound
//                   </button>
//                 )}

//                 {/* big center play */}
//                 {!playing && !error && (
//                   <button
//                     type="button"
//                     onClick={togglePlay}
//                     aria-label="Play video"
//                     className="absolute inset-0 flex items-center justify-center"
//                   >
//                     <span className="relative flex h-18 w-18 items-center justify-center sm:h-24 sm:w-24">
//                       <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
//                       <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2D1C59] shadow-2xl transition-transform hover:scale-110 sm:h-20 sm:w-20">
//                         <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
//                       </span>
//                     </span>
//                   </button>
//                 )}

//                 {/* bottom controls */}
//                 {!error && (
//                   <div
//                     className={`absolute inset-x-0 bottom-0 px-3 pb-3 pt-12 transition-opacity duration-300 sm:px-6 sm:pb-5 ${
//                       showUI ? "opacity-100" : "pointer-events-none opacity-0"
//                     }`}
//                   >
//                     {/* progress */}
//                     <div
//                       ref={barRef}
//                       role="slider"
//                       aria-label="Video progress"
//                       aria-valuemin={0}
//                       aria-valuemax={100}
//                       aria-valuenow={Math.round(progress)}
//                       onPointerDown={onBarDown}
//                       onPointerMove={onBarMove}
//                       onPointerUp={onBarUp}
//                       className="group/bar mb-3 flex h-4 w-full cursor-pointer touch-none items-center"
//                     >
//                       <div className="relative h-1.5 w-full rounded-full bg-white/30 transition-all group-hover/bar:h-2">
//                         <div
//                           className="h-full rounded-full bg-gradient-to-r from-[#C5A265] to-[#E8A948]"
//                           style={{ width: `${progress}%` }}
//                         />
//                         <span
//                           className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"
//                           style={{ left: `${progress}%` }}
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between gap-3 text-white">
//                       <div className="flex items-center gap-2 sm:gap-3">
//                         <button
//                           type="button"
//                           onClick={togglePlay}
//                           aria-label={playing ? "Pause" : "Play"}
//                           className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
//                         >
//                           {playing ? (
//                             <Pause className="h-4 w-4 fill-current" />
//                           ) : (
//                             <Play className="ml-0.5 h-4 w-4 fill-current" />
//                           )}
//                         </button>
//                         <button
//                           type="button"
//                           onClick={toggleMute}
//                           aria-label={muted ? "Unmute" : "Mute"}
//                           className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
//                         >
//                           {muted ? (
//                             <VolumeX className="h-4 w-4" />
//                           ) : (
//                             <Volume2 className="h-4 w-4" />
//                           )}
//                         </button>
//                         <span className="text-xs tabular-nums text-white/90 sm:text-sm">
//                           {fmt(current)} / {fmt(duration)}
//                         </span>
//                       </div>

//                       {allowFullscreen && (
//                         <button
//                           type="button"
//                           onClick={toggleFullscreen}
//                           aria-label={isFs ? "Exit full screen" : "Full screen"}
//                           className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
//                         >
//                           {isFs ? (
//                             <Minimize2 className="h-4 w-4" />
//                           ) : (
//                             <Maximize2 className="h-4 w-4" />
//                           )}
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Reveal>

//         {/* CTAs */}
//         {data.ctas?.length > 0 && (
//           <Reveal
//             delay={200}
//             className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4"
//           >
//             {data.ctas.map((cta) => (
//               <Button
//                 key={cta.label}
//                 variant={cta.variant === "secondary" ? "outline" : "primary"}
//                 size="md"
//                 onClick={() => router.push(cta.href)}
//               >
//                 {cta.label}
//                 <ArrowRight className="ml-1 h-4 w-4" />
//               </Button>
//             ))}
//           </Reveal>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const RING_R = 18;
const RING_C = 2 * Math.PI * RING_R;

const fmt = (s) => {
  if (!Number.isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const isFullscreenNow = () =>
  Boolean(document.fullscreenElement || document.webkitFullscreenElement);

export default function VideoShowcase({ data }) {
  const router = useRouter();
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const barRef = useRef(null);
  const hideTimer = useRef(null);
  const userPaused = useRef(false);
  const seeking = useRef(false);
  const endedRef = useRef(false);
  const inViewRef = useRef(false);

  const video = data?.video;
  const end = data?.endScreen;
  const endEnabled = Boolean(end?.enabled);
  const replayDelay = end?.replayDelay ?? 6;
  const wantsLoop = video?.loop ?? true;
  // End screen on ho to native loop band (warna end screen kabhi dikhegi hi nahi)
  const nativeLoop = wantsLoop && !endEnabled;
  const allowFullscreen = video?.allowFullscreen ?? true;

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(video?.muted ?? true);
  const [isFs, setIsFs] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controls, setControls] = useState(true);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [portrait, setPortrait] = useState(false);
  const [ended, setEnded] = useState(false);
  const [count, setCount] = useState(replayDelay);

  /* ---------- controls auto-hide ---------- */
  const reveal = useCallback(() => {
    setControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setControls(false);
    }, 2800);
  }, []);

  /* ---------- actions ---------- */
  const togglePlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        userPaused.current = false;
        await v.play();
      } else {
        userPaused.current = true;
        v.pause();
      }
    } catch {
      /* play blocked */
    }
    reveal();
  }, [reveal]);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    reveal();
  }, [reveal]);

  const toggleFullscreen = useCallback(async () => {
    const el = frameRef.current;
    const v = videoRef.current;
    if (!el || !v) return;
    try {
      if (isFullscreenNow()) {
        if (document.exitFullscreen) await document.exitFullscreen();
        else document.webkitExitFullscreen?.();
      } else if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (v.webkitEnterFullscreen) {
        v.webkitEnterFullscreen(); // iPhone Safari
      }
    } catch {
      v.webkitEnterFullscreen?.();
    }
    reveal();
  }, [reveal]);

  const replay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    endedRef.current = false;
    userPaused.current = false;
    setEnded(false);
    setProgress(0);
    setCurrent(0);
    v.currentTime = 0;
    // Section screen pe (ya fullscreen mein) ho tabhi play; warna scroll karke aane pe chalegi
    if (inViewRef.current || isFullscreenNow()) v.play().catch(() => {});
  }, []);

  // End screen ke buttons (fullscreen mein ho to pehle exit)
  const go = useCallback(async (href) => {
    if (!href) return;
    if (isFullscreenNow()) {
      try {
        if (document.exitFullscreen) await document.exitFullscreen();
        else document.webkitExitFullscreen?.();
      } catch {
        /* ignore */
      }
    }
    const run = () => {
      if (href.startsWith("#")) {
        document
          .querySelector(href)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(href);
      }
    };
    setTimeout(run, 120);
  }, [router]);

  /* ---------- seeking (click + drag) ---------- */
  const seekFromEvent = (e) => {
    const v = videoRef.current;
    const bar = barRef.current;
    if (!v || !bar || !v.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
    setCurrent(ratio * v.duration);
  };
  const onBarDown = (e) => {
    e.stopPropagation();
    seeking.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    seekFromEvent(e);
  };
  const onBarMove = (e) => {
    if (seeking.current) seekFromEvent(e);
  };
  const onBarUp = (e) => {
    seeking.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  /* ---------- keyboard ---------- */
  const onKeyDown = (e) => {
    if (e.target.tagName === "BUTTON") return;
    const k = e.key.toLowerCase();
    if (e.key === " " || k === "k") {
      e.preventDefault();
      togglePlay();
    } else if (k === "m") {
      toggleMute();
    } else if (k === "f" && allowFullscreen) {
      toggleFullscreen();
    }
  };

  /* ---------- video events ---------- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = video?.muted ?? true;
    v.defaultMuted = true;

    const onPlay = () => {
      endedRef.current = false;
      setEnded(false);
      setPlaying(true);
    };
    const onPause = () => setPlaying(false);
    const onTime = () => {
      if (seeking.current || !v.duration) return;
      setCurrent(v.currentTime);
      setProgress((v.currentTime / v.duration) * 100);
    };
    const onMeta = () => {
      setDuration(v.duration || 0);
      setPortrait(v.videoHeight > v.videoWidth);
    };
    const onReady = () => setReady(true);
    const onErr = () => setError(true);
    const onEnd = () => {
      if (!endEnabled) return;
      endedRef.current = true;
      setEnded(true);
      setPlaying(false);
      setProgress(100);
      setControls(true);
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("error", onErr);
    v.addEventListener("ended", onEnd);
    if (v.readyState >= 1) onMeta();
    if (v.readyState >= 2) onReady();

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("error", onErr);
      v.removeEventListener("ended", onEnd);
    };
  }, [video?.src, video?.muted, endEnabled]);

  /* ---------- end screen countdown -> auto replay ---------- */
  useEffect(() => {
    if (!ended) return;
    let left = replayDelay;
    setCount(left);
    const id = setInterval(() => {
      left -= 1;
      setCount(left);
      if (left <= 0) {
        clearInterval(id);
        replay();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [ended, replayDelay, replay]);

  /* ---------- fullscreen sync ---------- */
  useEffect(() => {
    const sync = () => setIsFs(isFullscreenNow());
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync);
    };
  }, []);

  /* ---------- play in view, pause out of view ---------- */
  useEffect(() => {
    const el = frameRef.current;
    const v = videoRef.current;
    if (!el || !v || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        if (isFullscreenNow()) return;
        if (entry.isIntersecting) {
          if (!endedRef.current && video?.autoPlay !== false && !userPaused.current) {
            v.play().catch(() => {});
          }
        } else {
          v.pause();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [video?.autoPlay]);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  if (!video?.src) return null;

  const showUI = (controls || !playing) && !ended;

  return (
    <section
      id={data.id || "intro-video"}
      className="section-y relative overflow-hidden bg-[#FBF9F5]"
    >
      {/* soft ambient blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#C5A265]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0E6E6B]/10 blur-3xl" />

      <div className="container-x relative z-10 max-w-6xl">
        {/* Heading */}
        <Reveal className="mx-auto mb-8 max-w-2xl space-y-3 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
            <span className="h-px w-6 bg-[#B88B4A]" />
            {data.eyebrow}
            <span className="h-px w-6 bg-[#B88B4A]" />
          </div>
          <h2 className="font-serif text-3xl leading-tight text-[#2D1C59] sm:text-4xl lg:text-5xl">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-base leading-relaxed text-[#4A5D54]">{data.description}</p>
          )}
        </Reveal>

        {/* Player */}
        <Reveal delay={120}>
          <div className="relative">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#C5A265]/40 via-[#2D1C59]/30 to-[#0E6E6B]/30 opacity-70 blur-2xl sm:-inset-5" />

            {/* gradient border */}
            <div className="relative rounded-[1.5rem] bg-gradient-to-br from-[#C5A265] via-[#2D1C59] to-[#0E6E6B] p-[2px] shadow-2xl sm:rounded-[2rem]">
              <div
                ref={frameRef}
                tabIndex={0}
                onKeyDown={onKeyDown}
                onMouseMove={reveal}
                onMouseLeave={() => playing && setControls(false)}
                onTouchStart={reveal}
                className={`group relative overflow-hidden bg-[#120C2B] outline-none focus-visible:ring-2 focus-visible:ring-[#E8A948] ${
                  isFs
                    ? "h-full w-full rounded-none"
                    : "aspect-[16/10] rounded-[calc(1.5rem-2px)] sm:aspect-video sm:rounded-[calc(2rem-2px)]"
                }`}
              >
                {/* blurred poster backdrop (portrait video ke side bars ke liye) */}
                {video.poster && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 scale-125 bg-cover bg-center opacity-60 blur-2xl"
                    style={{ backgroundImage: `url(${video.poster})` }}
                  />
                )}

                <video
                  ref={videoRef}
                  src={video.src}
                  poster={video.poster}
                  loop={nativeLoop}
                  muted={muted}
                  autoPlay={video.autoPlay !== false}
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  onClick={togglePlay}
                  onDoubleClick={allowFullscreen ? toggleFullscreen : undefined}
                  aria-label={data.title}
                  className={`relative h-full w-full cursor-pointer ${
                    portrait || isFs ? "object-contain" : "object-cover"
                  }`}
                />

                {/* loading shimmer */}
                {!ready && !error && (
                  <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-br from-[#2D1C59]/40 to-[#0E6E6B]/30" />
                )}

                {/* error */}
                {error && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#231754] p-6 text-center text-white">
                    <Play className="h-8 w-8 opacity-70" />
                    <p className="text-sm">Video load nahi ho payi. Please page refresh karein.</p>
                  </div>
                )}

                {/* vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

                {/* top-left caption */}
                {data.caption && (
                  <div
                    className={`pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur-md transition-opacity duration-300 sm:left-5 sm:top-5 sm:text-xs ${
                      showUI ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        playing ? "animate-pulse bg-[#E8A948]" : "bg-white/60"
                      }`}
                    />
                    {data.caption}
                  </div>
                )}

                {/* unmute hint */}
                {playing && muted && (
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#2D1C59] shadow-lg transition hover:scale-105 sm:right-5 sm:top-5"
                  >
                    <Volume2 className="h-4 w-4" />
                    Tap for sound
                  </button>
                )}

                {/* big center play (paused ho tab, end screen ke time nahi) */}
                {!playing && !ended && !error && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="absolute inset-0 z-10 flex items-center justify-center"
                  >
                    <span className="relative flex h-18 w-18 items-center justify-center sm:h-24 sm:w-24">
                      <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2D1C59] shadow-2xl transition-transform hover:scale-110 sm:h-20 sm:w-20">
                        <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
                      </span>
                    </span>
                  </button>
                )}

                {/* bottom controls */}
                {!error && (
                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 px-3 pb-3 pt-12 transition-opacity duration-300 sm:px-6 sm:pb-5 ${
                      showUI ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    {/* progress */}
                    <div
                      ref={barRef}
                      role="slider"
                      aria-label="Video progress"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(progress)}
                      onPointerDown={onBarDown}
                      onPointerMove={onBarMove}
                      onPointerUp={onBarUp}
                      className="group/bar mb-3 flex h-4 w-full cursor-pointer touch-none items-center"
                    >
                      <div className="relative h-1.5 w-full rounded-full bg-white/30 transition-all group-hover/bar:h-2">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#C5A265] to-[#E8A948]"
                          style={{ width: `${progress}%` }}
                        />
                        <span
                          className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"
                          style={{ left: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 text-white">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={togglePlay}
                          aria-label={playing ? "Pause" : "Play"}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
                        >
                          {playing ? (
                            <Pause className="h-4 w-4 fill-current" />
                          ) : (
                            <Play className="ml-0.5 h-4 w-4 fill-current" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={toggleMute}
                          aria-label={muted ? "Unmute" : "Mute"}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
                        >
                          {muted ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </button>
                        <span className="text-xs tabular-nums text-white/90 sm:text-sm">
                          {fmt(current)} / {fmt(duration)}
                        </span>
                      </div>

                      {allowFullscreen && (
                        <button
                          type="button"
                          onClick={toggleFullscreen}
                          aria-label={isFs ? "Exit full screen" : "Full screen"}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/35"
                        >
                          {isFs ? (
                            <Minimize2 className="h-4 w-4" />
                          ) : (
                            <Maximize2 className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* ============ END SCREEN ============ */}
                {endEnabled && (
                  <div
                    aria-hidden={!ended}
                    className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 overflow-y-auto bg-gradient-to-br from-[#231754]/95 via-[#2D1C59]/92 to-[#0E3F3D]/95 px-4 py-4 text-center backdrop-blur-md transition-opacity duration-500 sm:gap-5 sm:px-8 ${
                      ended ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    {allowFullscreen && (
                      <button
                        type="button"
                        onClick={toggleFullscreen}
                        tabIndex={ended ? 0 : -1}
                        aria-label={isFs ? "Exit full screen" : "Full screen"}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-5 sm:top-5"
                      >
                        {isFs ? (
                          <Minimize2 className="h-4 w-4" />
                        ) : (
                          <Maximize2 className="h-4 w-4" />
                        )}
                      </button>
                    )}

                    {end.eyebrow && (
                      <div className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E8A948] sm:inline-flex">
                        <span className="h-px w-6 bg-[#E8A948]" />
                        {end.eyebrow}
                        <span className="h-px w-6 bg-[#E8A948]" />
                      </div>
                    )}

                    <h3 className="max-w-xl font-serif text-xl leading-snug text-white sm:text-3xl lg:text-4xl">
                      {end.title}
                    </h3>

                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
                      {end.primary && (
                        <button
                          type="button"
                          tabIndex={ended ? 0 : -1}
                          onClick={() => go(end.primary.href)}
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-[#E8A948] px-4 py-2.5 text-xs font-bold text-[#2D1C59] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F3CF63] sm:px-7 sm:py-3.5 sm:text-sm"
                        >
                          {end.primary.label}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      )}
                      {end.secondary && (
                        <button
                          type="button"
                          tabIndex={ended ? 0 : -1}
                          onClick={() => go(end.secondary.href)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/60 px-4 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-sm"
                        >
                          {end.secondary.label}
                        </button>
                      )}
                    </div>

                    {/* countdown + replay now */}
                    <div className="flex items-center gap-3 text-white/90">
                      <div className="relative h-11 w-11">
                        <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90">
                          <circle
                            cx="22"
                            cy="22"
                            r={RING_R}
                            fill="none"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="3"
                          />
                          <circle
                            cx="22"
                            cy="22"
                            r={RING_R}
                            fill="none"
                            stroke="#E8A948"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray={RING_C}
                            strokeDashoffset={RING_C * (1 - Math.max(count, 0) / replayDelay)}
                            style={{ transition: "stroke-dashoffset 1s linear" }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold tabular-nums">
                          {Math.max(count, 0)}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm">Replaying in {Math.max(count, 0)}s</span>
                      <button
                        type="button"
                        tabIndex={ended ? 0 : -1}
                        onClick={replay}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/30"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Replay now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTAs */}
        {data.ctas?.length > 0 && (
          <Reveal
            delay={200}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4"
          >
            {data.ctas.map((cta) => (
              <Button
                key={cta.label}
                variant={cta.variant === "secondary" ? "outline" : "primary"}
                size="md"
                onClick={() => router.push(cta.href)}
              >
                {cta.label}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}