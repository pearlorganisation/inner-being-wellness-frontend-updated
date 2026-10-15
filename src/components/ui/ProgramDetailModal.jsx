import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { closeDetailModal, openBookingModal } from '../../store/wellnessSlice';

export const ProgramDetailModal = () => {
  const dispatch = useAppDispatch();
  const { selectedProgram, isDetailModalOpen } = useAppSelector((state) => state.wellness);

  if (!isDetailModalOpen || !selectedProgram) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => dispatch(closeDetailModal())}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-[#EAE5DD] my-8"
        >
          <div className="relative aspect-[16/9] w-full bg-[#E4ECE6] overflow-hidden">
            <img
              src={selectedProgram.image}
              alt={selectedProgram.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => dispatch(closeDetailModal())}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 text-[#1F1B44] flex items-center justify-center hover:bg-white shadow-md transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 bg-white/95 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#13382C] border border-[#EAE5DD] shadow-sm">
              {selectedProgram.categoryLabel} · {selectedProgram.format}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE5DD] pb-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1B44] font-normal">
                  {selectedProgram.title}
                </h3>
                <p className="text-xs text-[#C59B4B] font-semibold tracking-wider uppercase mt-1">
                  {selectedProgram.tagline}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1F1B44]">
                <Star className="w-4 h-4 fill-[#C59B4B] text-[#C59B4B]" />
                <span className="tabular-nums">{selectedProgram.rating}</span>
                <span className="text-xs text-[#6B6673]">({selectedProgram.reviewsCount} reviews)</span>
              </div>
            </div>

            <p className="text-sm text-[#6B6673] leading-relaxed">
              {selectedProgram.description}
            </p>

            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DD]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] mb-3">
                Key Curriculum &amp; Practices
              </h4>
              <ul className="space-y-2.5">
                {selectedProgram.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#6B6673]">
                    <CheckCircle className="w-4 h-4 text-[#13382C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-[#EAE5DD] bg-white">
                <p className="text-[#6B6673] text-[11px] uppercase tracking-wider font-medium">Facilitator</p>
                <p className="font-serif text-base font-semibold text-[#1F1B44] mt-1">{selectedProgram.instructor.name}</p>
                <p className="text-[#13382C] mt-0.5">{selectedProgram.instructor.role} · {selectedProgram.instructor.experience}</p>
              </div>

              <div className="p-4 rounded-xl border border-[#EAE5DD] bg-white">
                <p className="text-[#6B6673] text-[11px] uppercase tracking-wider font-medium">Schedule &amp; Pace</p>
                <p className="font-semibold text-[#1F1B44] mt-1">{selectedProgram.schedule}</p>
                <p className="text-[#6B6673] mt-0.5">{selectedProgram.duration} · {selectedProgram.level}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border-t border-[#EAE5DD] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-[#6B6673] uppercase tracking-wider block">Investment</span>
              <span className="font-serif text-xl font-semibold text-[#1F1B44]">{selectedProgram.price}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(closeDetailModal())}
                className="px-5 py-2.5 text-xs font-semibold text-[#6B6673] hover:text-[#1F1B44] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedProgram.id;
                  dispatch(closeDetailModal());
                  dispatch(openBookingModal(id));
                }}
                className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Book This Pathway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
