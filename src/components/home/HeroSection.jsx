"use client";
import {
  ArrowRight,
  Heart,
  Sun,
  Flower2,
  Sparkles,
  Mic2,
  Award,
} from "lucide-react";
import Button from "@/components/ui/Button";
import HeroVideo from "@/components/home/HeroVideo";
import { getWhatsAppLink } from "@/data/siteData";

const FEATURE_ICONS = [Flower2, Heart, Sun];

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
}) {
  const hasVideo = Boolean(video?.enabled && video?.src);

  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pb-14 lg:pb-12 lg:pt-8">
      {/* Ambient background (soft, slow drift) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hv-blob absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C5A265]/15 blur-3xl" />
        <div
          className="hv-blob absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#0E6E6B]/10 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="container-x relative z-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ================= LEFT ================= */}
          <div className="min-w-0 space-y-4 text-center sm:space-y-5 lg:col-span-6 lg:text-left">
            <div
              className="hv-rise inline-flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B88B4A] sm:text-xs lg:justify-start"
              style={{ "--d": "0ms" }}
            >
              <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
              <span>{kicker}</span>
              <span className="hidden h-px w-6 bg-[#B88B4A] sm:block" />
            </div>

            <div className="hv-rise" style={{ "--d": "120ms" }}>
              {/* FIX: heading chhota (lg 44px, xl 50px) taaki CTA fold ke andar aaye */}
              <h1 className="font-serif text-[32px] leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                <span className="block text-[#2D1C59]">{line1}</span>
                <span className="hv-grad-text block pb-1">{line2}</span>
              </h1>
              {/* Gold underline draw animation */}
              <span
                aria-hidden="true"
                className="hv-underline mx-auto mt-3 block h-[3px] w-24 rounded-full bg-gradient-to-r from-[#C5A265] to-[#E8A948] lg:mx-0"
                style={{ "--d": "900ms" }}
              />
            </div>

            <p
              className="hv-rise mx-auto max-w-xl text-base leading-relaxed text-[#4A5D54] lg:mx-0 lg:border-l-2 lg:border-[#C5A265]/60 lg:pl-5 xl:text-lg"
              style={{ "--d": "260ms" }}
            >
              {subtitle}
            </p>

            {/* Video na ho to CTA yahan, warna video ke neeche (client requirement) */}
            {!hasVideo && (
              <div className="hv-rise pt-1" style={{ "--d": "380ms" }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCta}
                  className="group w-full justify-center sm:w-auto"
                >
                  <span>{cta}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}

            {/* Peace / Love / Joy pills */}
            <div
              className="hv-rise flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start"
              style={{ "--d": "500ms" }}
            >
              {FEATURE_ICONS.map((Icon, i) => (
                <span
                  key={features[i] ?? i}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#E9DCBF] bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C5A265] hover:shadow-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF4E6] text-[#C5A265]">
                    <Icon className="h-4 w-4 stroke-[1.8]" />
                  </span>
                  <span className="font-serif text-sm font-bold text-[#2D1C59]">
                    {features[i]}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="hv-pop relative mx-auto w-full min-w-0 max-w-sm sm:max-w-md lg:col-span-6 lg:max-w-none"
            style={{ "--d": "250ms" }}
          >
            {hasVideo ? (
              <>
                {/* FIX: offset gold border + extra glow div hata diye.
                    Glow/ring ab .hv-frame (CSS) se aata hai, float ke saath sync rehta hai. */}
                <div className="hv-frame hv-float">
                  <HeroVideo video={video} />
                </div>

                {/* Credentials: video ke neeche, chehre par kuch nahi */}
                <div className="hv-rise hv-badges" style={{ "--d": "600ms" }}>
                  <span className="hv-badge">
                    <Mic2 className="h-4 w-4 text-[#C5A265]" />
                    TEDx Speaker
                  </span>
                  <span className="hv-badge">
                    <Award className="h-4 w-4 text-[#0E6E6B]" />
                    Global Happiness Leader
                  </span>
                </div>

                {/* CTA video ke neeche */}
                <div
                  className="hv-rise relative z-10 mt-3 flex flex-col items-center"
                  style={{ "--d": "700ms" }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={onCta}
                    className="hv-shine group w-full justify-center sm:w-auto"
                  >
                    <span>{cta}</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="mt-2 text-xs text-[#7A8E83]">
                    Free discovery call · No obligationa
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#128C7E] transition-colors hover:text-[#25D366]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                      Or chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </>
            ) : (
              image?.src && (
                <div className="relative overflow-hidden rounded-3xl border border-[#2D1C59]/10 bg-white shadow-2xl">
                  <img
                    src={image.src}
                    alt={image.alt || ""}
                    className="h-[340px] w-full object-cover sm:h-[460px] lg:h-[540px]"
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
                          {cardLabel}
                        </span>
                        <span className="block font-serif text-sm font-bold text-[#2D1C59]">
                          {cardQuote}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
