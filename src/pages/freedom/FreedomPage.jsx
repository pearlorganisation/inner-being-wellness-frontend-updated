import { siteData } from "../../data/siteData.js";
import Button from "../../components/ui/Button.jsx";
import {
  Sparkles,
  Check,
  ArrowRight,
  AlertCircle,
  Compass,
  Volume2,
  Flower2,
  CheckCircle2,
} from "lucide-react";

export default function FreedomPage({ onNavigate }) {
  const { freedomFromResistancePage } = siteData;

  const handleNav = (href) => {
    if (onNavigate) onNavigate(href);
  };

  return (
    <div className="w-full bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                {freedomFromResistancePage.hero.badge}
                <span className="w-6 h-px bg-[#B88B4A]" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
                {freedomFromResistancePage.hero.title}
              </h1>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#0E6E6B] border-l-2 border-[#0E6E6B]/40 pl-4 py-1">
                "{freedomFromResistancePage.hero.quote}"
              </blockquote>

              <p className="text-lg text-[#475A51] leading-relaxed max-w-xl">
                {freedomFromResistancePage.hero.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleNav("/contact?interest=freedom-from-resistance")}
                >
                  Request a Consultation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handleNav("/offerings")}
                >
                  View All Offerings
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#2D1C59]/10 bg-white">
                <img
                  src={freedomFromResistancePage.hero.image.src}
                  alt={freedomFromResistancePage.hero.image.alt}
                  className="w-full h-[440px] sm:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UNDERSTANDING RESISTANCE */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#2D1C59]/10 bg-white">
                <img
                  src={freedomFromResistancePage.understanding.image.src}
                  alt={freedomFromResistancePage.understanding.image.alt}
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="w-6 h-px bg-[#B88B4A]" />
                CORE CONSCIOUSNESS
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
                {freedomFromResistancePage.understanding.title}
              </h2>

              <div className="space-y-4 text-base text-[#475A51] leading-relaxed">
                {freedomFromResistancePage.understanding.paragraphs.map(
                  (p, idx) => (
                    <p key={idx}>{p}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNS OF RESISTANCE */}
      <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              RECOGNISING INTERNAL TENSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {freedomFromResistancePage.signs.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freedomFromResistancePage.signs.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#2D1C59]/10 shadow-xs flex items-start gap-3.5 hover:shadow-md transition-shadow"
              >
                <div className="w-7 h-7 rounded-full bg-[#FAF4E6] text-[#B88B4A] border border-[#E9DCBF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-serif">
                  {idx + 1}
                </div>
                <p className="text-sm text-[#3C4F44] leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODALITIES IN THIS PATHWAY */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              INTEGRATIVE SUPPORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {freedomFromResistancePage.modalities.title}
            </h2>
            <p className="text-base text-[#4A5D54]">
              {freedomFromResistancePage.modalities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freedomFromResistancePage.modalities.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-serif font-bold text-[#2D1C59] shadow-xs">
                    {card.title}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-[#2D1C59]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#52655B] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <ul className="space-y-1.5 text-xs text-[#3E5247]">
                      {card.bulletPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#0E6E6B]" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE PROCESS (01 LISTEN, 02 OBSERVE, 03 REGULATE, 04 INTEGRATE) */}
      <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#2D1C59]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {freedomFromResistancePage.process.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freedomFromResistancePage.process.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#2D1C59]/10 shadow-xs"
              >
                <span className="text-3xl font-serif font-bold text-[#2D1C59]/20 block mb-3">
                  {st.number}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#2D1C59] mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-[#52665C] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUITABILITY */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59] text-center">
            {freedomFromResistancePage.suitableFor.title}
          </h2>

          <div className="space-y-3">
            {freedomFromResistancePage.suitableFor.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#2D1C59]/10 shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0E6E6B] shrink-0 mt-0.5" />
                <span className="text-sm text-[#33463B] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER (Off-white presentation) */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
            {freedomFromResistancePage.ctaBanner.title}
          </h2>
          <p className="text-base text-[#4E6258] leading-relaxed">
            {freedomFromResistancePage.ctaBanner.subtitle}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNav("/contact?interest=freedom-from-resistance")}
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
