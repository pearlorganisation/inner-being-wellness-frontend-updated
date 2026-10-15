import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Feather, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  setSelectedProgram,
  openBookingModal,
  setCurrentNav
} from '../../../store/wellnessSlice';

export const CoreProgramsSection = () => {
  const dispatch = useAppDispatch();
  const programs = useAppSelector((state) => state.wellness.programs);

  return (
    <section id="programs" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-white">
      {/* Decorative leafy branches on sides matching Figma */}
      <div className="hidden 2xl:block absolute -left-12 top-1/2 -translate-y-1/2 w-20 h-40 opacity-70 pointer-events-none">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M10 20 Q50 100 20 180" stroke="#13382C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <ellipse cx="30" cy="50" rx="14" ry="8" transform="rotate(-25 30 50)" fill="#7F9F86" opacity="0.8" />
          <ellipse cx="40" cy="90" rx="15" ry="9" transform="rotate(30 40 90)" fill="#4B6F55" opacity="0.75" />
          <ellipse cx="25" cy="130" rx="13" ry="8" transform="rotate(-15 25 130)" fill="#6B8E72" opacity="0.8" />
        </svg>
      </div>

      <div className="hidden 2xl:block absolute -right-12 top-1/2 -translate-y-1/2 w-20 h-40 opacity-70 pointer-events-none">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <path d="M90 20 Q50 100 80 180" stroke="#13382C" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <ellipse cx="70" cy="50" rx="14" ry="8" transform="rotate(25 70 50)" fill="#7F9F86" opacity="0.8" />
          <ellipse cx="60" cy="90" rx="15" ry="9" transform="rotate(-30 60 90)" fill="#4B6F55" opacity="0.75" />
          <ellipse cx="75" cy="130" rx="13" ry="8" transform="rotate(15 75 130)" fill="#6B8E72" opacity="0.8" />
        </svg>
      </div>

      {/* Header matching Figma: "I'm Ready to Begin" --- "View All Programs →" */}
      <div className="flex items-center justify-between gap-6 mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1B44] tracking-tight font-normal whitespace-nowrap">
          I&apos;m Ready to Begin
        </h2>

        {/* Center Golden Divider Rule */}
        <div className="hidden sm:block flex-1 h-[1px] bg-[#EAE5DD] max-w-md mx-6" />

        {/* View All Programs Link */}
        <button
          onClick={() => dispatch(setCurrentNav('programs'))}
          className="text-xs sm:text-sm font-semibold text-[#1F1B44] hover:text-[#13382C] transition-colors flex items-center gap-1.5 whitespace-nowrap group cursor-pointer"
        >
          <span>View All Programs</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 3-Column Program Cards matching Figma */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, idx) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="group bg-white rounded-[28px] overflow-hidden border border-[#EAE5DD] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E4ECE6]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Seam Emblem Icon Badge (centered at boundary) */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md border-3 border-white transition-transform group-hover:scale-110 z-10"
                  style={{ backgroundColor: program.badgeColor }}
                >
                  {program.badgeType === 'lotus' && (
                    <svg className="w-6 h-6 text-[#7E22CE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 4c-2 3-5 7-5 11a5 5 0 0 0 10 0c0-4-3-8-5-11z" />
                      <path d="M12 15c-3-2-6-1-7 2 1 2 4 2 7-2z" />
                      <path d="M12 15c3-2 6-1 7 2-1 2-4 2-7-2z" />
                    </svg>
                  )}
                  {program.badgeType === 'leaf' && (
                    <Feather className="w-5 h-5 text-[#15803D]" />
                  )}
                  {program.badgeType === 'sun' && (
                    <Sun className="w-5 h-5 text-[#CA8A04]" />
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-10 px-8 pb-4 text-center">
                <h3 className="font-serif text-2xl text-[#1F1B44] font-normal mb-3 group-hover:text-[#13382C] transition-colors">
                  {program.title}
                </h3>

                <p className="text-sm text-[#6B6673] leading-relaxed line-clamp-3 mb-4">
                  {program.description}
                </p>

                <p className="text-xs text-[#C59B4B] font-semibold uppercase tracking-wider">
                  {program.format} · {program.duration}
                </p>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="px-8 pb-8 pt-3 flex items-center justify-center gap-3 border-t border-[#EAE5DD]/60">
              <button
                onClick={() => dispatch(setSelectedProgram(program))}
                className="text-xs font-semibold text-[#1F1B44] hover:text-[#13382C] transition-colors flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-full hover:bg-slate-50"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => dispatch(openBookingModal(program.id))}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
