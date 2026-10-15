import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setCurrentNav } from '../../store/wellnessSlice';

export const JournalPage = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.wellness.journalArticles);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C59B4B] block mb-2">
          SANCTUARY JOURNAL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F1B44] font-normal tracking-tight mb-4">
          Wisdom &amp; Mindful Living
        </h1>
        <p className="text-base text-[#6B6673]">
          Reflections on somatic awareness, ancient philosophy, and nervous system regulation.
        </p>
      </div>

      {selectedArticle ? (
        <div className="max-w-3xl mx-auto bg-white rounded-[32px] p-8 sm:p-12 border border-[#EAE5DD] shadow-sm space-y-6 mb-16">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-xs font-semibold text-[#1F1B44] hover:text-[#13382C] flex items-center gap-1.5 cursor-pointer"
          >
            ← Back to All Reflections
          </button>

          <div>
            <span className="text-xs uppercase tracking-wider text-[#C59B4B] font-semibold">
              {selectedArticle.category} · {selectedArticle.readTime}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1B44] font-normal mt-2 mb-3">
              {selectedArticle.title}
            </h2>
            <p className="text-xs text-[#6B6673]">
              By {selectedArticle.author} · Published {selectedArticle.date}
            </p>
          </div>

          <div className="border-t border-[#EAE5DD] pt-6 text-sm text-[#1F1B44] leading-relaxed space-y-4">
            <p className="text-base font-serif italic text-[#13382C]">
              {selectedArticle.excerpt}
            </p>
            <p>{selectedArticle.content}</p>
            <p>
              When you honor the transition between states of attention, your nervous system learns that stillness is not an obstacle, but the very vessel through which vital prana restores.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-[28px] p-8 border border-[#EAE5DD] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#6B6673] mb-3">
                  <span className="text-[#C59B4B] font-semibold uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl text-[#1F1B44] font-normal mb-3 hover:text-[#13382C] transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs text-[#6B6673] leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE5DD] flex items-center justify-between">
                <span className="text-xs text-[#6B6673]">{art.author}</span>
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="text-xs font-semibold text-[#1F1B44] hover:text-[#13382C] flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => dispatch(setCurrentNav('home'))}
          className="text-xs font-semibold text-[#6B6673] hover:text-[#1F1B44] transition-colors cursor-pointer"
        >
          ← Return to Sanctuary Homepage
        </button>
      </div>
    </div>
  );
};
