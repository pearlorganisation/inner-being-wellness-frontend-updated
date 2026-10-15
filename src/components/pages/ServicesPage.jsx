import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { openBookingModal, setSelectedProgram, setCurrentNav } from '../../store/wellnessSlice';

export const ServicesPage = () => {
  const dispatch = useAppDispatch();
  const programs = useAppSelector((state) => state.wellness.programs);

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C59B4B] block mb-2">
          SANCTUARY OFFERINGS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F1B44] font-normal tracking-tight mb-4">
          Healing Services &amp; Immersions
        </h1>
        <p className="text-base text-[#6B6673]">
          Curated modalities led by accredited masters in our tranquil studio or from the sanctuary of your home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-[28px] overflow-hidden border border-[#EAE5DD] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] bg-[#E4ECE6] overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#13382C]">
                  {prog.price}
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-[#C59B4B] font-semibold">
                  {prog.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl text-[#1F1B44] font-normal mt-1 mb-2">
                  {prog.title}
                </h3>
                <p className="text-xs text-[#6B6673] leading-relaxed mb-4">
                  {prog.description}
                </p>

                <div className="border-t border-[#EAE5DD] pt-4 space-y-2">
                  <p className="text-xs font-semibold text-[#1F1B44]">Curriculum Highlights:</p>
                  <ul className="space-y-1.5 text-xs text-[#6B6673]">
                    {prog.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#13382C] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              <button
                onClick={() => dispatch(setSelectedProgram(prog))}
                className="text-xs font-semibold text-[#1F1B44] hover:text-[#13382C] cursor-pointer"
              >
                View Details
              </button>
              <button
                onClick={() => dispatch(openBookingModal(prog.id))}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-xs cursor-pointer"
              >
                Reserve Space
              </button>
            </div>
          </div>
        ))}
      </div>

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
