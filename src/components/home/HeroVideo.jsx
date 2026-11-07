"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

/**
 * HeroVideo
 * - Inline (in-page) playback + real fullscreen (iOS Safari bhi supported)
 * - Auto loop, autoplay (muted, browser policy ke hisaab se)
 * - Click video = play/pause, controls hover/tap pe aate hain
 * - Fully responsive (4/5 card, photo ke saath equal height)
 * - Props: video = { src, poster, loop, muted, allowFullscreen }
 */
export default function HeroVideo({ video }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const hideTimer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(video?.muted ?? true);
  const [isFs, setIsFs] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  const loop = video?.loop ?? true;
  const allowFullscreen = video?.allowFullscreen ?? true;

  /* ---------- helpers ---------- */
  const revealControls = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 2500);
  }, []);

  const togglePlay = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) await v.play();
      else v.pause();
    } catch {
      /* autoplay/play blocked: ignore */
    }
    revealControls();
  }, [revealControls]);

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    revealControls();
  };

  const toggleFullscreen = async (e) => {
    e.stopPropagation();
    const el = wrapRef.current;
    const v = videoRef.current;
    if (!el || !v) return;

    const doc = document;
    const fsElement = doc.fullscreenElement || doc.webkitFullscreenElement;

    try {
      if (fsElement) {
        if (doc.exitFullscreen) await doc.exitFullscreen();
        else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
      } else if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (v.webkitEnterFullscreen) {
        // iPhone Safari: sirf <video> element fullscreen hota hai
        v.webkitEnterFullscreen();
      }
    } catch {
      if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
    }
    revealControls();
  };

  const seek = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
  };

  /* ---------- events ---------- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // React ka muted attribute kabhi kabhi autoplay ke liye late set hota hai
    v.muted = video?.muted ?? true;
    v.defaultMuted = true;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };
    const onLoaded = () => setReady(true);
    const onError = () => setError(true);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("error", onError);

    // Autoplay try (muted hone pe browsers allow karte hain)
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => setPlaying(false));

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("error", onError);
    };
  }, [video?.muted, video?.src]);

  // Fullscreen state sync (Esc dabane pe bhi)
  useEffect(() => {
    const onFs = () =>
      setIsFs(Boolean(document.fullscreenElement || document.webkitFullscreenElement));
    document.addEventListener("fullscreenchange", onFs);
    document.addEventListener("webkitfullscreenchange", onFs);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      document.removeEventListener("webkitfullscreenchange", onFs);
    };
  }, []);

  // Tab hidden ho to pause, wapas aaye to resume (battery + performance)
  useEffect(() => {
    const onVis = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) v.pause();
      else if (loop) v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [loop]);

  // Viewport se bahar jaye to pause (scroll pe)
  useEffect(() => {
    const el = wrapRef.current;
    const v = videoRef.current;
    if (!el || !v || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (document.fullscreenElement || document.webkitFullscreenElement) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  if (!video?.src) return null;

  /* ---------- UI ---------- */
  return (
    <div
      ref={wrapRef}
      onMouseMove={revealControls}
      onMouseLeave={() => playing && setShowControls(false)}
      onTouchStart={revealControls}
      className={`group relative overflow-hidden border border-[#2D1C59]/10 bg-black shadow-2xl ${
        isFs ? "rounded-none" : "aspect-[4/5] rounded-3xl"
      }`}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        loop={loop}
        muted={muted}
        autoPlay
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onDoubleClick={allowFullscreen ? toggleFullscreen : undefined}
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        className={`h-full w-full cursor-pointer ${
          isFs ? "object-contain" : "object-cover"
        }`}
        aria-label="Inner Being Wellness introduction video"
      />

      {/* Loading shimmer (poster ke upar) */}
      {!ready && !error && (
        <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-br from-[#2D1C59]/30 to-[#0E6E6B]/20" />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#231754] p-6 text-center text-white">
          <Play className="h-8 w-8 opacity-70" />
          <p className="text-sm">Video abhi load nahi ho payi. Please page refresh karein.</p>
        </div>
      )}

      {/* Big center play button (jab paused ho) */}
      {!playing && !error && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#2D1C59] shadow-xl transition-transform hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
          </span>
        </button>
      )}

      {/* Bottom controls */}
      {!error && (
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 pb-3 pt-10 transition-opacity duration-300 sm:px-4 sm:pb-4 ${
            showControls || !playing ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {/* Progress bar */}
          <div
            role="slider"
            aria-label="Video progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            onClick={seek}
            className="mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/30"
          >
            <div
              className="h-full rounded-full bg-[#E8A948] transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={playing ? "Pause" : "Play"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/35"
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/35"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            {allowFullscreen && (
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFs ? "Exit full screen" : "Full screen"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white/35"
              >
                {isFs ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}