"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, BookOpen, CheckCircle2, Mail } from "lucide-react";

export default function ThoughtsPage() {
  const router = useRouter();
  const { thoughtsPage } = siteData;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticle, setActiveArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const filteredArticles =
    selectedCategory === "all"
      ? thoughtsPage.articles
      : thoughtsPage.articles.filter((art) => art.category === selectedCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterError(thoughtsPage.newsletter.errorMessage);
      return;
    }
    setNewsletterError("");
    setNewsletterSuccess(true);
  };

  return (
    <div className="relative w-full overflow-x-clip bg-[#FAF7F2]">
      
      {/* Ambient Background Accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#C5A265]/10 blur-3xl" />
        <div className="absolute -right-32 top-[600px] h-96 w-96 rounded-full bg-[#0E6E6B]/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 1. HERO - Top space fixed (pt-12 instead of py-16/24) */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#B88B4A]">
                <span className="h-px w-6 bg-[#B88B4A]" />
                {thoughtsPage.hero.badge}
                <span className="h-px w-6 bg-[#B88B4A]" />
              </div>

              <h1 className="font-serif text-[38px] leading-[1.12] text-[#2D1C59] sm:text-5xl lg:text-6xl">
                {thoughtsPage.hero.title}
              </h1>

              <p className="max-w-2xl text-[18px] leading-relaxed text-[#475A51] sm:text-xl">
                {thoughtsPage.hero.description}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2. FEATURED ARTICLE SPOTLIGHT - Tightened spacing */}
        <section className="pb-12 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div
                onClick={() => setActiveArticle(thoughtsPage.featuredArticle)}
                className="group grid cursor-pointer grid-cols-1 overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#2D1C59]/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#2D1C59]/10 lg:grid-cols-12"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100 lg:col-span-7 lg:h-auto">
                  <img
                    src={thoughtsPage.featuredArticle.image.src}
                    alt={thoughtsPage.featuredArticle.image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#2D1C59]/90 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
                    Featured · {thoughtsPage.featuredArticle.tag}
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-6 p-8 lg:col-span-5 lg:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-medium text-[#8A9C92]">
                      <span>{thoughtsPage.featuredArticle.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{thoughtsPage.featuredArticle.readTime}</span>
                    </div>

                    <h2 className="font-serif text-[28px] leading-tight text-[#2D1C59] transition-colors group-hover:text-[#0E6E6B] sm:text-3xl lg:text-[32px]">
                      {thoughtsPage.featuredArticle.title}
                    </h2>

                    <p className="text-[16px] leading-relaxed text-[#4E6258] sm:text-[17px]">
                      {thoughtsPage.featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="flex items-center gap-2 text-[15px] font-bold text-[#0E6E6B]">
                      Read full article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                    <BookOpen className="h-5 w-5 text-[#B88B4A]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. CATEGORY FILTER & ARTICLES GRID */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter */}
            <Reveal delay={100} className="flex flex-wrap items-center justify-center gap-2.5">
              {thoughtsPage.categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`cursor-pointer rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                      isSelected
                        ? "bg-[#2D1C59] text-white shadow-md shadow-[#2D1C59]/20"
                        : "bg-white text-[#52665B] shadow-sm hover:bg-[#FBF9F5] hover:text-[#2D1C59]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </Reveal>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, idx) => (
                <Reveal key={article.id} delay={idx * 100}>
                  <article
                    onClick={() => setActiveArticle(article)}
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2D1C59]/10"
                  >
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={article.image.src}
                        alt={article.image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#2D1C59] shadow-sm backdrop-blur-md">
                        {article.tag}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between space-y-5 p-7">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-[13px] font-medium text-[#8A9C92]">
                          <span>{article.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3 className="font-serif text-[22px] font-bold leading-snug text-[#2D1C59] transition-colors group-hover:text-[#0E6E6B]">
                          {article.title}
                        </h3>

                        <p className="line-clamp-3 text-[15px] leading-relaxed text-[#52665B]">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-5 text-[14px] font-bold text-[#0E6E6B]">
                        <span className="flex items-center gap-1.5">
                          Read reflection
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. NEWSLETTER SUBSCRIPTION */}
        <section className="pb-24 pt-4">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 text-center shadow-xl shadow-[#2D1C59]/5 sm:p-12 lg:p-16">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E6E6B]/5 via-transparent to-[#C5A265]/10" />
                
                <div className="relative z-10 mx-auto max-w-xl space-y-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF4E6] text-[#B88B4A]">
                    <Mail className="h-7 w-7" />
                  </div>

                  <h2 className="font-serif text-[32px] text-[#2D1C59] sm:text-4xl">
                    {thoughtsPage.newsletter.title}
                  </h2>

                  <p className="mx-auto text-[17px] leading-relaxed text-[#4E6258]">
                    {thoughtsPage.newsletter.description}
                  </p>

                  {newsletterSuccess ? (
                    <div className="mx-auto flex max-w-md items-center justify-center gap-2 rounded-2xl bg-[#E3F1EF] p-5 text-[15px] font-medium text-[#0E6E6B]">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      <span>{thoughtsPage.newsletter.successMessage}</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="mx-auto max-w-md space-y-4 pt-2">
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                          type="email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder={thoughtsPage.newsletter.emailPlaceholder}
                          className="w-full flex-1 rounded-xl border-none bg-[#FBF9F5] px-5 py-4 text-[15px] text-[#1A2C24] shadow-sm outline-none ring-1 ring-[#2D1C59]/10 transition-shadow placeholder:text-[#8A9C92] focus:ring-2 focus:ring-[#0E6E6B]"
                        />
                        <Button variant="primary" size="lg" type="submit" className="shrink-0 sm:w-auto">
                          {thoughtsPage.newsletter.submitLabel}
                        </Button>
                      </div>

                      {newsletterError && (
                        <p className="text-left text-sm font-medium text-red-500">
                          {newsletterError}
                        </p>
                      )}

                      <p className="text-left text-[13px] leading-relaxed text-[#7E9086]">
                        {thoughtsPage.newsletter.consentText}
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* ARTICLE READER MODAL */}
      <Modal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || "Reflection"}
        maxWidth="max-w-3xl"
      >
        {activeArticle && (
          <div className="space-y-6">
            <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80">
              <img
                src={activeArticle.image.src}
                alt={activeArticle.image.alt}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-3 border-b border-stone-200 pb-4 text-sm font-medium text-[#7B8E83]">
              <span className="font-bold uppercase tracking-wider text-[#2D1C59]">
                {activeArticle.tag}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.date}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <div className="space-y-5 text-[17px] leading-relaxed text-[#384C42]">
              {activeArticle.content && activeArticle.content.length > 0 ? (
                activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>{activeArticle.excerpt}</p>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-stone-200 pt-6">
              <span className="text-sm font-medium text-[#7B8E83]">
                Written with care by Inner Being Wellness
              </span>
              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveArticle(null)}
              >
                Close Reflection
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}