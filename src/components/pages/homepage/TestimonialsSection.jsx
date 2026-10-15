import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Clara Delacroix',
      role: 'Member since 2024 · Architect',
      quote: 'The Sound Healing bath was an awakening. I arrived carrying months of chronic tension and left feeling deeply recalibrated, lighter, and clear.',
      stars: 5,
      location: 'San Francisco, CA'
    },
    {
      name: 'Marcus Thorne',
      role: 'Member since 2023 · Creative Director',
      quote: 'Elena’s somatic yoga movement classes fundamentally changed how I hold stress during long workdays. My posture, breath, and peace of mind have never been better.',
      stars: 5,
      location: 'Austin, TX'
    },
    {
      name: 'Amara Patel',
      role: 'Member since 2025 · Research Fellow',
      quote: 'The Inner Growth mindfulness journaling program gave me practical, calm rituals. Inner Being isn’t just a studio; it is my grounding anchor every week.',
      stars: 5,
      location: 'Seattle, WA'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C59B4B] block mb-2">
          PRACTITIONER VOICES
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1B44] tracking-tight font-normal">
          Stories of Inner Transformation
        </h2>
        <p className="text-sm sm:text-base text-[#6B6673] mt-3">
          Reflections from individuals who have made mindfulness and somatic balance part of their everyday life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-[#EAE5DD] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#C59B4B]">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#E4ECE6]" />
              </div>

              <p className="text-sm text-[#1F1B44] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAE5DD]/70">
              <h4 className="font-serif text-base font-semibold text-[#1F1B44]">
                {t.name}
              </h4>
              <p className="text-xs text-[#6B6673] mt-0.5">
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
