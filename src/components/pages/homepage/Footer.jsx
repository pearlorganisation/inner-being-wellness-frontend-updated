import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  setNewsletterEmail,
  submitNewsletter,
  resetNewsletterSuccess,
  setCurrentNav
} from '../../../store/wellnessSlice';

export const Footer = () => {
  const dispatch = useAppDispatch();
  const { newsletterEmail, newsletterSuccess } = useAppSelector((state) => state.wellness);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      dispatch(submitNewsletter());
    }
  };

  const navigateTo = (nav) => {
    dispatch(setCurrentNav(nav));
  };

  return (
    <footer id="contact-footer" className="bg-[#13382C] text-[#FBF9F5] pt-16 pb-12 border-t border-[#0E2820]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-white/20 shadow-xs flex items-center justify-center shrink-0">
                <img
                  src="/src/assets/images/inner_being_logo_1791870134219.jpg"
                  alt="Inner Being Logo"
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.08em] text-lg font-bold text-white uppercase leading-tight">
                  INNER BEING
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-3 h-[1px] bg-[#C59B4B]"></span>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#C59B4B] font-semibold leading-none">
                    WELLNESS
                  </span>
                  <span className="w-3 h-[1px] bg-[#C59B4B]"></span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#D2E3D8] leading-relaxed max-w-sm">
              An architectural and holistic haven created to restore equilibrium, awaken presence, and deepen somatic and mental vitality.
            </p>

            <div className="pt-2 text-xs text-[#D2E3D8]/80 space-y-1">
              <p>Sanctuary: 420 Lotus Way, Peaceful Valley, CA</p>
              <p>Email: concierge@innerbeingwellness.com</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#C59B4B]">
              Pathways
            </h5>
            <ul className="space-y-2 text-xs text-[#D2E3D8]">
              <li>
                <button
                  onClick={() => navigateTo('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mind &amp; Body Balance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sound Healing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('programs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inner Growth
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  All Healing Services
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#C59B4B]">
              Sanctuary
            </h5>
            <ul className="space-y-2 text-xs text-[#D2E3D8]">
              <li>
                <button
                  onClick={() => navigateTo('approach')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('journal')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Journal &amp; Wisdom
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sanctuary Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Retreat
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#C59B4B]">
              The Mindful Letter
            </h5>
            <p className="text-xs text-[#D2E3D8] leading-relaxed">
              Bi-weekly reflections, sound meditation audio clips, and seasonal retreats.
            </p>

            {newsletterSuccess ? (
              <div className="bg-white/10 rounded-2xl p-4 border border-white/20 text-xs flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C59B4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Blessings &amp; Welcome</p>
                  <p className="text-[#D2E3D8] mt-0.5">You will receive our next Sunday morning reflection.</p>
                  <button
                    onClick={() => dispatch(resetNewsletterSuccess())}
                    className="text-[10px] underline text-[#C59B4B] mt-2 block cursor-pointer"
                  >
                    Subscribe another email
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => dispatch(setNewsletterEmail(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-[#C59B4B]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-white text-[#13382C] rounded-full text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#D2E3D8]/60 block pl-2">
                  No noise. Unsubscribe whenever you wish.
                </span>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D2E3D8]/70">
          <p>© {new Date().getFullYear()} Inner Being Wellness Sanctuary. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Practice</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Code of Sanctuary</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
