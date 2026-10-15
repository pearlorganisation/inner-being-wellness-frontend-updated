import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Wind, Heart, Sun, Feather } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  openBookingModal,
  setCurrentNav,
  setActiveWisdomPillar,
} from "../../../store/wellnessSlice";

export const WisdomShowcase = () => {
  const dispatch = useAppDispatch();
  const activeWisdomPillar = useAppSelector(
    (state) => state.wellness.activeWisdomPillar,
  );

  const pillars = [
    {
      id: "Mindful Movement",
      label: "Mindful Movement",
      icon: Feather,
      detail:
        "Gentle, somatic asanas focused on physical awareness and releasing muscular tension.",
    },
    {
      id: "Deep Breathing",
      label: "Deep Breathing",
      icon: Wind,
      detail:
        "Pranayama breathing techniques that balance the autonomic nervous system and soothe the mind.",
    },
    {
      id: "Stress Relief",
      label: "Stress Relief",
      icon: Heart,
      detail:
        "Restorative somatic decompression designed to melt away chronic mental and physical fatigue.",
    },
    {
      id: "Inner Peace",
      label: "Inner Peace",
      icon: Sun,
      detail:
        "Contemplative meditation practices guiding you into enduring clarity and equilibrium.",
    },
  ];

  const currentPillar =
    pillars.find((p) => p.id === activeWisdomPillar) || pillars[0];

  return (
    <section
      id="wisdom"
      className="py-6 md:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Sub-Hero Action & Happy Yogis Strip from Figma */}

      {/* Sub-Hero Action & Happy Yogis Strip */}
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-2">
        {/* Centered Action Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => dispatch(openBookingModal())}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-sm active:scale-[0.98] cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Join a Class</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => dispatch(setCurrentNav("contact"))}
            className="px-6 py-2.5 text-xs font-medium text-[#1F1B44] bg-transparent border border-[#C59B4B] rounded-full hover:bg-slate-50 transition-all cursor-pointer whitespace-nowrap"
          >
            Contact Us
          </button>
        </div>

        {/* Happy Yogis Community Proof — Right Side */}
        <div className="flex items-center gap-2.5 text-left sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2">
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
              Happy Yogis
            </p>
          </div>
        </div>
      </div>

      {/* Main Split Wisdom Card */}
      <div className="rounded-[32px] overflow-hidden border border-[#EAE5DD] shadow-lg grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-white">
        {/* Left 55%: Sunlit Yoga Studio Photography */}
        <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] overflow-hidden">
          <img
            src="/src/assets/images/yoga_sunroom_1791868806713.jpg"
            alt="Yogi practicing mindful pose in sunlit sanctuary with candles and plants"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right 45%: Deep Forest Green (#13382C) Wisdom & Chips Container */}
        <div className="lg:col-span-5 bg-[#13382C] text-[#FBF9F5] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            <blockquote className="font-serif text-2xl sm:text-3xl font-normal italic leading-relaxed text-white tracking-tight">
              &ldquo;Yoga is the journey of the self, through the self, to the
              self.&rdquo;
            </blockquote>

            <p className="mt-4 text-xs tracking-wider uppercase text-[#C59B4B] font-semibold">
              — The Bhagavad Gita
            </p>
          </div>

          {/* 4 Pill Buttons in 2x2 Grid (Solid white pills matching Figma) */}
          <div className="pt-8">
            <div className="grid grid-cols-2 gap-3">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isSelected = activeWisdomPillar === pillar.id;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => dispatch(setActiveWisdomPillar(pillar.id))}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
                      isSelected
                        ? "bg-white text-[#13382C] ring-2 ring-[#C59B4B]"
                        : "bg-white/95 text-[#13382C] hover:bg-white hover:scale-[1.02]"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#13382C] shrink-0" />
                    <span className="truncate">{pillar.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Practice Insight Feedback */}
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 p-3 rounded-2xl bg-white/10 border border-white/15 text-xs text-[#D2E3D8] leading-relaxed"
            >
              <span className="font-semibold text-white block mb-0.5">
                {currentPillar.label}:
              </span>
              {currentPillar.detail}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
