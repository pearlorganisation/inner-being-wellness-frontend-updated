import { useState } from "react";
import { siteData } from "../../data/siteData.js";
import Button from "../../components/ui/Button.jsx";
import Modal from "../../components/ui/Modal.jsx";
import { ArrowRight, BookOpen, Clock, Calendar, CheckCircle2, Mail } from "lucide-react";

export default function ThoughtsPage({ onNavigate }) {
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
    <div className="w-full bg-[#FBF9F5]">
      {/* 1. HERO */}
      <section className="relative py-16 lg:py-24 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88B4A]">
              <span className="w-6 h-px bg-[#B88B4A]" />
              {thoughtsPage.hero.badge}
              <span className="w-6 h-px bg-[#B88B4A]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1C59] leading-[1.12]">
              {thoughtsPage.hero.title}
            </h1>

            <p className="text-lg text-[#475A51] leading-relaxed">
              {thoughtsPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT */}
      <section className="py-16 lg:py-20 border-b border-[#2D1C59]/10 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => setActiveArticle(thoughtsPage.featuredArticle)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-[#2D1C59]/12 bg-white shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 h-72 lg:h-auto overflow-hidden relative bg-slate-100">
              <img
                src={thoughtsPage.featuredArticle.image.src}
                alt={thoughtsPage.featuredArticle.image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#2D1C59] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured · {thoughtsPage.featuredArticle.tag}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#8A9C92]">
                  <span>{thoughtsPage.featuredArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{thoughtsPage.featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#2D1C59] group-hover:text-[#0E6E6B] transition-colors leading-tight">
                  {thoughtsPage.featuredArticle.title}
                </h2>

                <p className="text-sm text-[#4E6258] leading-relaxed">
                  {thoughtsPage.featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0E6E6B] flex items-center gap-1.5">
                  Read full article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <BookOpen className="w-4 h-4 text-[#B88B4A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY FILTER & ARTICLES GRID */}
      <section className="py-20 lg:py-28 border-b border-[#2D1C59]/10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {thoughtsPage.categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#2D1C59] text-white shadow-xs font-semibold"
                      : "bg-white text-[#52665B] hover:bg-[#EAE4D7] border border-[#2D1C59]/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#2D1C59]/10 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img
                    src={article.image.src}
                    alt={article.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#2D1C59] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {article.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#8A9C92]">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#2D1C59] group-hover:text-[#0E6E6B] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#52665B] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E6E6B]">
                    <span className="flex items-center gap-1">
                      Read reflection
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER SUBSCRIPTION */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#FAF4E6] text-[#B88B4A] flex items-center justify-center mx-auto mb-2 border border-[#E9DCBF]">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-[#2D1C59]">
            {thoughtsPage.newsletter.title}
          </h2>

          <p className="text-base text-[#4E6258] max-w-xl mx-auto">
            {thoughtsPage.newsletter.description}
          </p>

          {newsletterSuccess ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{thoughtsPage.newsletter.successMessage}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto space-y-3"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={thoughtsPage.newsletter.emailPlaceholder}
                  className="flex-1 px-4 py-2.5 rounded-full border border-[#D8CFBF] bg-white text-sm text-[#1A2C24] focus:outline-none focus:ring-1 focus:ring-[#2D1C59] focus:border-[#2D1C59]"
                />
                <Button variant="primary" size="md" type="submit">
                  {thoughtsPage.newsletter.submitLabel}
                </Button>
              </div>

              {newsletterError && (
                <p className="text-xs text-red-600 text-left">
                  {newsletterError}
                </p>
              )}

              <p className="text-[11px] text-[#7E9086] text-left leading-normal">
                {thoughtsPage.newsletter.consentText}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      <Modal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        title={activeArticle?.title || "Reflection"}
        maxWidth="max-w-3xl"
      >
        {activeArticle && (
          <div className="space-y-6">
            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden relative">
              <img
                src={activeArticle.image.src}
                alt={activeArticle.image.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-[#7B8E83] border-b border-stone-200 pb-3">
              <span className="font-semibold text-[#2D1C59] uppercase tracking-wider">
                {activeArticle.tag}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.date}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <div className="space-y-4 text-base text-[#384C42] leading-relaxed font-sans">
              {activeArticle.content && activeArticle.content.length > 0 ? (
                activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>{activeArticle.excerpt}</p>
              )}
            </div>

            <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-[#7B8E83]">
                Written with care by Inner Being Wellness
              </span>
              <Button
                variant="outline"
                size="sm"
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
