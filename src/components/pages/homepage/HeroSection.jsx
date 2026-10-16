// import React from 'react';
// import { motion } from 'motion/react';
// import { Star, ArrowRight } from 'lucide-react';
// import { useAppDispatch } from '../../../store/store';
// import { openBookingModal, setCurrentNav } from '../../../store/wellnessSlice';

// export const HeroSection = () => {
//   const dispatch = useAppDispatch();

//   return (
//     <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-16 text-center bg-white">
//       {/* Left Decorative Botanical Flourish & Vertical Mantra */}
//       <div className="hidden xl:flex flex-col items-center absolute left-8 top-12 bottom-12 justify-between pointer-events-none select-none z-10">
//         <div className="w-28 h-36 opacity-90">
//           <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
//             <path d="M20 10 Q45 60 70 140" stroke="#13382C" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
//             <ellipse cx="32" cy="35" rx="14" ry="9" transform="rotate(-30 32 35)" fill="#6B8E72" opacity="0.75" />
//             <ellipse cx="50" cy="55" rx="16" ry="10" transform="rotate(25 50 55)" fill="#4B6F55" opacity="0.7" />
//             <ellipse cx="42" cy="85" rx="15" ry="10" transform="rotate(-20 42 85)" fill="#7F9F86" opacity="0.8" />
//             <ellipse cx="65" cy="115" rx="16" ry="9" transform="rotate(35 65 115)" fill="#52785D" opacity="0.7" />
//             <path d="M85 45 C88 40 98 48 95 55 C92 60 82 52 85 45 Z" fill="#4A2B66" opacity="0.75" />
//             <path d="M78 88 C81 83 91 91 88 98 C85 103 75 95 78 88 Z" fill="#6B21A8" opacity="0.6" />
//             <path d="M92 130 C95 125 105 133 102 140 C99 145 89 137 92 130 Z" fill="#321B47" opacity="0.7" />
//           </svg>
//         </div>

//         <div className="flex flex-col gap-5 text-[11px] font-semibold tracking-[0.25em] text-[#6B6673]/80 uppercase">
//           <span>MIND</span>
//           <span>BODY</span>
//           <span>SPIRIT</span>
//           <span>HARMONY</span>
//         </div>
//       </div>

//       {/* Right Decorative Botanical Flourish & Vertical Mantra */}
//       <div className="hidden xl:flex flex-col items-center absolute right-8 top-12 bottom-12 justify-between pointer-events-none select-none z-10">
//         <div className="w-28 h-36 opacity-90">
//           <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
//             <path
//               d="M95 15 C60 25 35 70 30 145 M35 70 C55 60 85 65 95 70 M32 95 C60 90 85 100 92 108 M30 125 C50 120 75 130 82 138"
//               stroke="#C59B4B"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               opacity="0.85"
//             />
//             <path d="M25 40 C28 35 38 43 35 50 C32 55 22 47 25 40 Z" fill="#4A2B66" opacity="0.75" />
//             <path d="M15 90 C18 85 28 93 25 100 C22 105 12 97 15 90 Z" fill="#321B47" opacity="0.7" />
//             <path d="M30 135 C33 130 43 138 40 145 C37 150 27 142 30 135 Z" fill="#6B21A8" opacity="0.65" />
//           </svg>
//         </div>

//         <div className="flex flex-col gap-5 text-[11px] font-semibold tracking-[0.25em] text-[#6B6673]/80 uppercase">
//           <span>HEAL</span>
//           <span>GROW</span>
//           <span>BALANCE</span>
//           <span>BE YOU</span>
//         </div>
//       </div>

//       {/* Main Central Content Area */}
//       <div className="max-w-4xl mx-auto px-6 relative z-10">
//         {/* Eyebrow Label with flanking gold lines */}
//         <motion.div
//           initial={{ opacity: 0, y: -8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center gap-3 mb-4"
//         >
//           <span className="w-8 h-[1px] bg-[#C59B4B]"></span>
//           <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C59B4B]">
//             A SPACE TO RETURN TO YOURSELF
//           </span>
//           <span className="w-8 h-[1px] bg-[#C59B4B]"></span>
//         </motion.div>

//         {/* Main Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1F1B44] tracking-tight leading-[1.12] text-balance font-normal mb-5"
//         >
//           Find Your Balance.
//           <span className="block mt-1 font-normal">
//             Awaken Your{' '}
//             <span className="italic text-[#13382C] font-normal">
//               Inner Being.
//             </span>
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-base sm:text-lg text-[#6B6673] max-w-xl mx-auto font-normal leading-relaxed mb-9 text-balance"
//         >
//           Holistic wellness practices to nurture your mind, body, and spirit.
//         </motion.p>

//         {/* Action Group: Pill Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
//         >
//           <button
//             onClick={() => dispatch(openBookingModal())}
//             className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group"
//           >
//             <span>Explore Healing Sessions</span>
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </button>

//           <button
//             onClick={() => dispatch(setCurrentNav('approach'))}
//             className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-medium text-[#1F1B44] bg-transparent border border-[#1F1B44] rounded-full hover:bg-slate-50 transition-all active:scale-[0.98] cursor-pointer"
//           >
//             Discover Our Approach
//           </button>
//         </motion.div>

//         {/* Rating and Mindful Journeys Stats Strip */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="inline-flex items-center justify-center gap-8 text-xs sm:text-sm text-[#1F1B44]"
//         >
//           {/* Left Block: 5 Gold Stars + 4.9/5 + Community Rating */}
//           <div className="flex items-center gap-3 text-left">
//             <div className="flex text-[#C59B4B]">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="w-4 h-4 fill-current" />
//               ))}
//             </div>
//             <div>
//               <p className="font-bold text-base text-[#1F1B44] leading-tight tabular-nums">
//                 4.9/5
//               </p>
//               <p className="text-[11px] text-[#6B6673] leading-tight">
//                 Community Rating
//               </p>
//             </div>
//           </div>

//           <div className="w-[1px] h-8 bg-[#EAE5DD]" aria-hidden="true" />

//           {/* Right Block: Yogi Icon + 600+ + Mindful Journeys */}
//           <div className="flex items-center gap-2.5 text-left">
//             <div className="w-8 h-8 rounded-full border border-[#C59B4B] flex items-center justify-center text-[#C59B4B]">
//               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
//                 <circle cx="12" cy="7" r="3" />
//                 <path d="M6 19c0-3.5 3-6 6-6s6 2.5 6 6" />
//                 <path d="M4 19h16" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-bold text-base text-[#1F1B44] leading-tight tabular-nums">
//                 600+
//               </p>
//               <p className="text-[11px] text-[#6B6673] leading-tight">
//                 Mindful Journeys
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// updated code snippet from src/components/pages/homepage/HomePage.jsx:

import React from "react";
import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";
import { useAppDispatch } from "../../../store/store";
import { openBookingModal, setCurrentNav } from "../../../store/wellnessSlice";

import { ProgramDetailModal } from '../../ui/ProgramDetailModal';
import { BookingModal } from '../../ui/BookingModal';
import { SignInModal } from '../../ui/SignInModal';
import { AmbientSoundPlayer } from '../../ui/AmbientSoundPlayer';

// mix-blend-multiply: image ka cream/white box section bg me gayab ho jata hai
const decoImg =
  "h-auto object-contain mix-blend-multiply pointer-events-none select-none";

export const HeroSection = () => {
  const dispatch = useAppDispatch();

  return (
    // <section className="relative overflow-hidden isolate pt-8 pb-12 md:pt-14 md:pb-16 text-center bg-[#FBF9F4]">
    //   {/* ===== Tablet / small desktop (md → xl): compact corners ===== */}
    //   <img
    //     src={botanicalCorner}
    //     alt=""
    //     aria-hidden="true"
    //     draggable={false}
    //     decoding="async"
    //     className={`${decoImg} hidden md:block xl:hidden absolute left-2 lg:left-6 top-6 w-16 lg:w-24 opacity-80 z-0 bg-transaprent
    //     `}
    //   />
    //   <img
    //     src={goldenBotanical}
    //     alt=""
    //     aria-hidden="true"
    //     draggable={false}
    //     decoding="async"
    //     className={`${decoImg} hidden md:block xl:hidden absolute right-2 lg:right-6 top-6 w-16 lg:w-24 opacity-80 z-0 bg-transparent`}
    //   />

    //   {/* ===== xl+: LEFT — Botanical corner (green leaves) + mantra ===== */}
    //   <div className="hidden xl:flex flex-col items-start absolute left-8 2xl:left-16 top-10 pointer-events-none select-none z-10">
    //     <img
    //       src={botanicalCorner}
    //       alt=""
    //       aria-hidden="true"
    //       draggable={false}
    //       decoding="async"
    //       className={`${decoImg} w-36 2xl:w-44`}
    //     />
    //     <div className="mt-6 ml-2 flex flex-col gap-4 text-[11px] font-semibold tracking-[0.25em] text-[#6B6673]/80 uppercase text-left">
    //       <span>MIND</span>
    //       <span>BODY</span>
    //       <span>SPIRIT</span>
    //       <span>HARMONY</span>
    //     </div>
    //   </div>

    //   {/* ===== xl+: RIGHT — Golden botanical + mantra ===== */}
    //   <div className="hidden xl:flex flex-col items-end absolute right-8 2xl:right-16 top-10 pointer-events-none select-none z-10">
    //     <img
    //       src={goldenBotanical}
    //       alt=""
    //       aria-hidden="true"
    //       draggable={false}
    //       decoding="async"
    //       className={`${decoImg} w-36 2xl:w-44`}
    //     />
    //     <div className="mt-6 mr-2 flex flex-col gap-4 text-[11px] font-semibold tracking-[0.25em] text-[#6B6673]/80 uppercase text-right">
    //       <span>HEAL</span>
    //       <span>GROW</span>
    //       <span>BALANCE</span>
    //       <span>BE YOU</span>
    //     </div>
    //   </div>

    //   {/* Main Central Content Area */}
    //   <div className="max-w-4xl mx-auto px-6 relative z-20">
    //     <motion.div
    //       initial={{ opacity: 0, y: -8 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //       className="inline-flex items-center gap-3 mb-4"
    //     >
    //       <span className="w-6 sm:w-8 h-[1px] bg-[#C59B4B]"></span>
    //       <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C59B4B]">
    //         A SPACE TO RETURN TO YOURSELF
    //       </span>
    //       <span className="w-6 sm:w-8 h-[1px] bg-[#C59B4B]"></span>
    //     </motion.div>

    //     <motion.h1
    //       initial={{ opacity: 0, y: 12 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.1 }}
    //       className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1F1B44] tracking-tight leading-[1.12] text-balance font-normal mb-5"
    //     >
    //       Find Your Balance.
    //       <span className="block mt-1 font-normal">
    //         Awaken Your{' '}
    //         <span className="italic text-[#13382C] font-normal">Inner Being.</span>
    //       </span>
    //     </motion.h1>

    //     <motion.p
    //       initial={{ opacity: 0, y: 12 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.2 }}
    //       className="text-base sm:text-lg text-[#6B6673] max-w-xl mx-auto font-normal leading-relaxed mb-9 text-balance"
    //     >
    //       Holistic wellness practices to nurture your mind, body, and spirit.
    //     </motion.p>

    //     {/* Buttons: centered */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 12 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.3 }}
    //       className="flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 mx-auto"
    //     >
    //       <button
    //         onClick={() => dispatch(openBookingModal())}
    //         className="w-full max-w-[260px] sm:w-auto sm:max-w-none px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
    //       >
    //         <span>Join a Class</span>
    //         <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    //       </button>

    //       <button
    //         onClick={() => dispatch(setCurrentNav('contact'))}
    //         className="w-full max-w-[260px] sm:w-auto sm:max-w-none px-7 py-3 text-xs sm:text-sm font-medium text-[#1F1B44] bg-transparent border border-[#C59B4B] rounded-full hover:bg-[#C59B4B]/10 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center whitespace-nowrap"
    //       >
    //         Contact Us
    //       </button>
    //     </motion.div>

    //     {/* Stats strip */}
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 0.6, delay: 0.4 }}
    //       className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-[#1F1B44]"
    //     >
    //       <div className="flex items-center gap-3 text-left">
    //         <div className="flex text-[#C59B4B]">
    //           {[...Array(5)].map((_, i) => (
    //             <Star key={i} className="w-4 h-4 fill-current" />
    //           ))}
    //         </div>
    //         <div>
    //           <p className="font-bold text-base text-[#1F1B44] leading-tight tabular-nums">4.9/5</p>
    //           <p className="text-[11px] text-[#6B6673] leading-tight">Community Rating</p>
    //         </div>
    //       </div>

    //       <div className="hidden sm:block w-[1px] h-8 bg-[#EAE5DD]" aria-hidden="true" />

    //       <div className="flex items-center gap-2.5 text-left">
    //         <div className="w-8 h-8 rounded-full border border-[#C59B4B] flex items-center justify-center text-[#C59B4B]">
    //           <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    //             <circle cx="12" cy="7" r="3" />
    //             <path d="M6 19c0-3.5 3-6 6-6s6 2.5 6 6" />
    //             <path d="M4 19h16" />
    //           </svg>
    //         </div>
    //         <div>
    //           <p className="font-bold text-base text-[#1F1B44] leading-tight tabular-nums">600+</p>
    //           <p className="text-[11px] text-[#6B6673] leading-tight">Mindful Journeys</p>
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>

    <section className="relative isolate overflow-hidden pt-8 pb-12 md:pt-14 md:pb-16 text-center bg-[#FBF9F4]">
      {/* Tablet / Small Desktop Botanical Decorations */}
      <img
        src="/assets/images/Botanical corner.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        decoding="async"
        className={`${decoImg} hidden md:block xl:hidden absolute left-2 lg:left-6 top-6 w-16 lg:w-24 z-0 opacity-75 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]`}
      />

      <img
        src="/assets/images/Golden botanical.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        decoding="async"
        className={`${decoImg} hidden md:block xl:hidden absolute right-2 lg:right-6 top-6 w-16 lg:w-24 z-0 opacity-75 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]`}
      />

      {/* Desktop Left Botanical */}
      <div className="hidden xl:flex flex-col items-start absolute left-8 2xl:left-16 top-10 pointer-events-none select-none z-10">
        <img
          src="/assets/images/Botanical corner.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          decoding="async"
          className={`${decoImg} w-36 2xl:w-44 opacity-80 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]`}
        />

        <div className="mt-6 ml-2 flex flex-col gap-4 text-[11px] font-semibold tracking-[0.25em] text-[#6B6673]/80 uppercase text-left">
          <span>MIND</span>
          <span>BODY</span>
          <span>SPIRIT</span>
          <span>HARMONY</span>
        </div>
      </div>

      {/* Desktop Right Botanical */}
      <div className="hidden xl:flex flex-col items-end absolute right-8 2xl:right-16 top-10 pointer-events-none select-none z-10">
        <img
          src="/assets/images/Golden botanical.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          decoding="async"
          className={`${decoImg} w-36 2xl:w-44 opacity-80 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]`}
        />

        <div className="mt-6 mr-2 flex flex-col gap-4 text-[11px] font-semibold tracking-[0.25em] text-[#6B6673]/80 uppercase text-right">
          <span>HEAL</span>
          <span>GROW</span>
          <span>BALANCE</span>
          <span>BE YOU</span>
        </div>
      </div>

      {/* Main Central Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-5"
        >
          <span className="w-6 sm:w-8 h-px bg-[#C59B4B]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C59B4B]">
            A SPACE TO RETURN TO YOURSELF
          </span>
          <span className="w-6 sm:w-8 h-px bg-[#C59B4B]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1F1B44] tracking-tight leading-[1.08] text-balance font-normal mb-5"
        >
          Find Your Balance.
          <span className="block mt-1 font-normal">
            Awaken Your{" "}
            <span className="italic text-[#13382C] font-normal">
              Inner Being.
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6B6673] max-w-2xl mx-auto font-normal leading-relaxed mb-8 text-balance"
        >
          Holistic wellness practices to nurture your mind, body, and spirit.
        </motion.p>

        {/* Centered Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex w-full flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-9 mx-auto"
        >
          <button
            onClick={() => dispatch(openBookingModal())}
            className="w-full max-w-[260px] sm:w-auto sm:max-w-none px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>Explore Healing Section</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => dispatch(setCurrentNav("contact"))}
            className="w-full max-w-[260px] sm:w-auto sm:max-w-none px-7 py-3 text-xs sm:text-sm font-medium text-[#1F1B44] bg-transparent border border-[#C59B4B] rounded-full hover:bg-[#C59B4B]/10 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center whitespace-nowrap"
          >
            Discover Our Approach
          </button>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs sm:text-sm text-[#1F1B44]"
        >
          {/* Community Rating */}
          <div className="flex items-center gap-3 text-left">
            <div className="flex text-[#C59B4B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <div>
              <p className="font-bold text-base text-[#1F1B44] leading-tight tabular-nums">
                4.9/5
              </p>
              <p className="text-[11px] text-[#6B6673] leading-tight">
                Community Rating
              </p>
            </div>
          </div>

          <div
            className="hidden sm:block w-px h-8 bg-[#EAE5DD]"
            aria-hidden="true"
          />

          {/* Happy Yogis */}
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 rounded-full border border-[#C59B4B] flex items-center justify-center text-[#C59B4B]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="7" r="3" />
                <path d="M6 19c0-3.5 3-6 6-6s6 2.5 6 6" />
                <path d="M4 19h16" />
              </svg>
            </div>

            <div>
              <p className="font-bold text-base text-[#1F1B44] leading-tight tabular-nums">
                600+
              </p>
              <p className="text-[11px] text-[#6B6673] leading-tight">
                Mindful Journeys
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
