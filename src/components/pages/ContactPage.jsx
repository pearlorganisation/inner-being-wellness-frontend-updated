import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock } from 'lucide-react';
import { useAppDispatch } from '../../store/store';
import { setCurrentNav } from '../../store/wellnessSlice';

export const ContactPage = () => {
  const dispatch = useAppDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Sanctuary Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C59B4B] block mb-2">
          GET IN TOUCH
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1F1B44] font-normal tracking-tight mb-4">
          Connect With Our Sanctuary
        </h1>
        <p className="text-base text-[#6B6673]">
          Whether you seek private sound journeys, retreat bookings, or guidance, our caretakers are here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        <div className="lg:col-span-5 bg-[#13382C] text-[#FBF9F5] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B4B]">
              VISITING INNER BEING
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-2 mb-6">
              A Quiet Haven in California
            </h3>

            <div className="space-y-5 text-sm text-[#D2E3D8]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C59B4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sanctuary Grounds</p>
                  <p>420 Lotus Way, Peaceful Valley, CA 94025</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C59B4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sanctuary Hours</p>
                  <p>Daily: 07:00 AM – 08:30 PM</p>
                  <p className="text-xs text-[#D2E3D8]/80">Morning Prana: 07:30 AM · Candlelight: 07:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C59B4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Direct Correspondence</p>
                  <p>concierge@innerbeingwellness.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C59B4B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sanctuary Desk</p>
                  <p>+1 (555) 728-6228</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/15">
            <p className="text-xs text-[#D2E3D8]/80 italic">
              &ldquo;Silence is the language of the soul; all else is poor translation.&rdquo;
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 border border-[#EAE5DD] shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E4ECE6] text-[#13382C] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#1F1B44]">Message Received in Peace</h3>
              <p className="text-xs text-[#6B6673] max-w-sm mx-auto">
                Thank you, {formData.name}. Our sanctuary facilitator will reach back out within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'General Sanctuary Inquiry', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-[#1F1B44] bg-[#E4ECE6] cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl text-[#1F1B44] mb-2 font-normal">
                Send a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sapna Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                >
                  <option value="General Sanctuary Inquiry">General Sanctuary Inquiry</option>
                  <option value="Private Sound Healing Session">Private Sound Healing Session</option>
                  <option value="Custom Group Retreat">Custom Group Retreat</option>
                  <option value="Instructor Mentorship">Instructor Mentorship</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1">
                  Your Thoughts or Questions
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we support your journey..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                />
              </div>

              <button
                type="submit"
                className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B44] hover:bg-[#151230] transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
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
