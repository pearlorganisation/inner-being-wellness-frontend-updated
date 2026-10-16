import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAppDispatch } from '../../../store/store';
import { openBookingModal } from '../../../store/wellnessSlice';

export const PanoramicCTABanner = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[560px] flex items-center shadow-lg border border-[#EAE5DD]">
        <img
          src="/assets/images/mountain_meditation_1791868808291.jpg"
          alt="Meditator atop sunrise mountain ridge"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent md:from-black/40" />

        <div className="relative z-10 p-6 sm:p-10 md:p-12 w-full max-w-lg lg:max-w-xl md:ml-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/60"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C59B4B]"></span>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C59B4B]">
                START YOUR JOURNEY
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1F1B44] leading-tight font-normal mb-4">
              A More Present, Peaceful and Purposeful You
            </h3>

            <p className="text-sm sm:text-base text-[#6B6673] leading-relaxed mb-8">
              Join our community and experience guided classes, quiet retreats, and holistic lifestyle mentorship tailored to your personal rhythm.
            </p>

            <button
              onClick={() => dispatch(openBookingModal())}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-md hover:shadow-xl active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
