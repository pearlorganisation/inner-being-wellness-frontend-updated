import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Feather, Wind, Heart, Sun } from 'lucide-react';
import { useAppDispatch } from '../../store/store';
import { openBookingModal, setCurrentNav } from '../../store/wellnessSlice';

export const ApproachPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#C59B4B]"></span>
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C59B4B]">
            OUR GUIDING PHILOSOPHY
          </span>
          <span className="w-6 h-[1px] bg-[#C59B4B]"></span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F1B44] font-normal tracking-tight mb-6">
          Where Ancient Wisdom Meets Somatic Wholeness
        </h1>
        <p className="text-base sm:text-lg text-[#6B6673] leading-relaxed">
          At Inner Being, we view wellness not as an aggressive pursuit of perfection, but as a gentle return to your natural state of equilibrium.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
        <div className="lg:col-span-6 rounded-[32px] overflow-hidden border border-[#EAE5DD] shadow-md">
          <img
            src="/src/assets/images/yoga_sunroom_1791868806713.jpg"
            alt="Sunroom yoga meditation"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#13382C]">
            The 4 Foundational Pillars
          </span>
          <h2 className="font-serif text-3xl text-[#1F1B44] font-normal leading-tight">
            Nurturing Every Dimension of Your Being
          </h2>
          <p className="text-sm text-[#6B6673] leading-relaxed">
            Every practice offered at our sanctuary integrates ancient Vedic principles, bio-resonant acoustic frequencies, and evidence-based nervous system regulation.
          </p>

          <div className="space-y-4 pt-2">
            {[
              {
                icon: Feather,
                title: 'Mindful Somatic Movement',
                desc: 'Unwinding deep-seated fascial constriction through breath-aligned asanas.'
              },
              {
                icon: Wind,
                title: 'Conscious Pranayama Breathwork',
                desc: 'Modulating vagal nerve tone to bring heart rate variability into coherent rhythm.'
              },
              {
                icon: Heart,
                title: 'Acoustic Sound Therapy',
                desc: 'Bathing the brain in theta frequencies using 7-metal Tibetan hammered bowls.'
              },
              {
                icon: Sun,
                title: 'Introspective Inner Growth',
                desc: 'Structured contemplation and journaling rituals for lasting life clarity.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#EAE5DD]">
                  <div className="w-9 h-9 rounded-full bg-[#E4ECE6] text-[#13382C] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#13382C]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#1F1B44]">{item.title}</h4>
                    <p className="text-xs text-[#6B6673] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={() => dispatch(openBookingModal())}
              className="px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Experience a Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => dispatch(setCurrentNav('home'))}
              className="text-xs font-semibold text-[#6B6673] hover:text-[#1F1B44] transition-colors cursor-pointer"
            >
              ← Back to Sanctuary Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
