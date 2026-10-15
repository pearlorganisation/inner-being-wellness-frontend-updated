import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Mail, Sparkles, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { closeSignInModal, setCurrentUser } from '../../store/wellnessSlice';

export const SignInModal = () => {
  const dispatch = useAppDispatch();
  const isSignInModalOpen = useAppSelector((state) => state.wellness.isSignInModalOpen);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  if (!isSignInModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = name || email.split('@')[0] || 'Sapna Sharma';
    dispatch(setCurrentUser({ name: userName, email: email || 'sharma.sapna@pearlorganisation.com' }));
  };

  const handleDemoSignIn = () => {
    dispatch(setCurrentUser({ name: 'Sapna Sharma', email: 'sharma.sapna@pearlorganisation.com' }));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => dispatch(closeSignInModal())}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl z-10 border border-[#EAE5DD]"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EAE5DD]">
                <img
                  src="/src/assets/images/inner_being_logo_1791870134219.jpg"
                  alt="Inner Being Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1F1B44]">
                  {isRegistering ? 'Create Sanctuary Account' : 'Welcome Back'}
                </h3>
                <p className="text-xs text-[#6B6673]">Inner Being Wellness Portal</p>
              </div>
            </div>

            <button
              onClick={() => dispatch(closeSignInModal())}
              className="p-1.5 text-[#6B6673] hover:text-[#1F1B44] rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sapna Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                  />
                  <User className="w-4 h-4 text-[#6B6673] absolute left-3 top-3" />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                />
                <Mail className="w-4 h-4 text-[#6B6673] absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                />
                <Lock className="w-4 h-4 text-[#6B6673] absolute left-3 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B44] hover:bg-[#151230] transition-all shadow-md active:scale-95 cursor-pointer mt-2"
            >
              {isRegistering ? 'Join Sanctuary' : 'Sign In'}
            </button>
          </form>

          <div className="my-5 flex items-center justify-between gap-3 text-xs text-[#6B6673]">
            <span className="w-full h-[1px] bg-[#EAE5DD]" />
            <span className="shrink-0 uppercase tracking-widest text-[10px]">Or</span>
            <span className="w-full h-[1px] bg-[#EAE5DD]" />
          </div>

          <button
            onClick={handleDemoSignIn}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-[#13382C] bg-[#E4ECE6] hover:bg-[#D2E3D8] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>Continue as Verified Practitioner</span>
          </button>

          <p className="mt-4 text-center text-xs text-[#6B6673]">
            {isRegistering ? 'Already have an account?' : 'New to Inner Being?'}{' '}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="font-semibold text-[#1F1B44] underline hover:text-[#13382C] cursor-pointer"
            >
              {isRegistering ? 'Sign In' : 'Create an Account'}
            </button>
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
