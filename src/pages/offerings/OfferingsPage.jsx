import { siteData } from "../../data/siteData.js";
import Button from "../../components/ui/Button.jsx";
import { Check, ArrowRight, Sparkles, HelpCircle, AlertCircle } from "lucide-react";

export default function OfferingsPage({ onNavigate }) {
  const { offeringsPage } = siteData;

  const handleNav = (href) => {
    if (onNavigate) onNavigate(href);
  };

  return (
    <div className="w-full bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              <span className="w-6 h-px bg-[#B88B4A]" />
              {offeringsPage.hero.badge}
              <span className="w-6 h-px bg-[#B88B4A]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
              {offeringsPage.hero.title}
            </h1>

            <p className="text-lg text-[#475A51] leading-relaxed">
              {offeringsPage.hero.description}
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => handleNav("/contact")}
              >
                <span>Find Your Starting Point</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE OFFERING: FREEDOM FROM RESISTANCE */}
      <section className="py-20 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#2D1C59]/12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                  <Sparkles className="w-4 h-4 text-[#E8A948]" />
                  {offeringsPage.signatureOffering.badge}
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
                  {offeringsPage.signatureOffering.title}
                </h2>

                <blockquote className="text-xl sm:text-2xl font-serif italic text-[#0E6E6B]">
                  "{offeringsPage.signatureOffering.quote}"
                </blockquote>

                <p className="text-base text-[#4C6056] leading-relaxed">
                  {offeringsPage.signatureOffering.description}
                </p>

                <div className="pt-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => handleNav("/freedom-from-resistance")}
                  >
                    {offeringsPage.signatureOffering.cta.label}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2D1C59]/10 bg-white">
                  <img
                    src={offeringsPage.signatureOffering.image.src}
                    alt={offeringsPage.signatureOffering.image.alt}
                    className="w-full h-[360px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE SERVICES (DETAILED LIST) */}
      <section className="py-20 lg:py-28 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              MODALITIES & EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
              {offeringsPage.introduction.title}
            </h2>
            <p className="text-base text-[#4A5D54]">
              {offeringsPage.introduction.paragraphs[1]}
            </p>
          </div>

          {offeringsPage.services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-md border border-[#2D1C59]/10 bg-white">
                    <img
                      src={service.image.src}
                      alt={service.image.alt}
                      className="w-full h-[380px] sm:h-[420px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
                    <span className="w-6 h-px bg-[#B88B4A]" />
                    {service.eyebrow}
                  </div>

                  <h3 className="text-3xl font-serif text-[#2D1C59]">
                    {service.title}
                  </h3>

                  <p className="text-base text-[#2E4238] font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-[#4E6258] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Outcomes List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2D1C59]">
                      Key Outcomes & Focus:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#475A51]">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#0E6E6B] shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#2D1C59]/10 text-xs text-[#52655C]">
                    <strong className="text-[#2D1C59]">Format: </strong>
                    {service.sessionFormat}
                  </div>

                  <div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleNav(service.cta.href)}
                    >
                      {service.cta.label}
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. GUIDANCE CALLOUT */}
      <section className="py-16 bg-[#FBF9F5] border-b border-[#2D1C59]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FAF4E6] text-[#B88B4A] flex items-center justify-center mx-auto mb-2 border border-[#E9DCBF]">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#2D1C59]">
            {offeringsPage.choosingOffering.title}
          </h3>
          <p className="text-base text-[#4E6258] leading-relaxed max-w-xl mx-auto">
            {offeringsPage.choosingOffering.description}
          </p>
          <div className="pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => handleNav("/contact")}
            >
              Ask for Guidance
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* 5. WELLNESS DISCLAIMER NOTE */}
      <section className="py-10 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#2D1C59]/12 text-xs text-[#52655C] leading-relaxed">
            <AlertCircle className="w-5 h-5 text-[#B88B4A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#2D1C59] font-medium block mb-0.5">
                {offeringsPage.importantNote.title}
              </strong>
              {offeringsPage.importantNote.text}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
