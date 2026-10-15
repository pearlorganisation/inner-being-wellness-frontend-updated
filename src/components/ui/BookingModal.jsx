import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, User, Mail, Phone, Trash2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  closeBookingModal,
  updateBookingDraft,
  submitBooking,
  cancelBooking
} from '../../store/wellnessSlice';

export const BookingModal = () => {
  const dispatch = useAppDispatch();
  const {
    isBookingModalOpen,
    bookingDraft,
    programs,
    bookedSessions
  } = useAppSelector((state) => state.wellness);

  const [activeTab, setActiveTab] = useState('book');
  const [successBookingId, setSuccessBookingId] = useState(null);

  if (!isBookingModalOpen) return null;

  const currentProgram = programs.find((p) => p.id === bookingDraft.programId) || programs[0];

  const timeSlots = [
    '08:00 AM - 09:15 AM (Morning Prana)',
    '10:30 AM - 11:45 AM (Midday Balance)',
    '02:00 PM - 03:15 PM (Restorative Stillness)',
    '05:30 PM - 06:45 PM (Twilight Sound Bath)',
    '07:15 PM - 08:30 PM (Evening Candlelight)'
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingDraft.name || !bookingDraft.email) return;

    dispatch(submitBooking());
    setSuccessBookingId(`IB-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setSuccessBookingId(null);
            dispatch(closeBookingModal());
          }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl z-10 border border-[#EAE5DD] my-8"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#EAE5DD] flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EAE5DD] shadow-xs">
                <img
                  src="/src/assets/images/inner_being_logo_1791870134219.jpg"
                  alt="Inner Being Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1F1B44] font-normal">
                  Reserve Your Sanctuary Session
                </h3>
                <p className="text-xs text-[#6B6673]">
                  Select your pathway, preferred time, and personal details.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setSuccessBookingId(null);
                dispatch(closeBookingModal());
              }}
              className="p-1.5 text-[#6B6673] hover:text-[#1F1B44] rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#EAE5DD] bg-white px-6">
            <button
              onClick={() => {
                setSuccessBookingId(null);
                setActiveTab('book');
              }}
              className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === 'book'
                  ? 'border-[#1F1B44] text-[#1F1B44]'
                  : 'border-transparent text-[#6B6673] hover:text-[#1F1B44]'
              }`}
            >
              New Reservation
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'history'
                  ? 'border-[#1F1B44] text-[#1F1B44]'
                  : 'border-transparent text-[#6B6673] hover:text-[#1F1B44]'
              }`}
            >
              <span>My Sessions</span>
              {bookedSessions.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#13382C] text-white text-[10px] flex items-center justify-center">
                  {bookedSessions.length}
                </span>
              )}
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto">
            {successBookingId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E4ECE6] text-[#13382C] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#1F1B44]">
                    Sanctuary Reserved
                  </h4>
                  <p className="text-xs text-[#C59B4B] font-semibold tracking-wider mt-1">
                    BOOKING REFERENCE: {successBookingId}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#EAE5DD] text-xs text-left space-y-2 text-[#6B6673]">
                  <p className="font-semibold text-[#1F1B44] text-sm">
                    {currentProgram.title}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#13382C]" />
                    <span>{bookingDraft.date} · {bookingDraft.timeSlot}</span>
                  </p>
                  <p>Format: {bookingDraft.format}</p>
                  <p>Confirmation emailed to: <span className="font-semibold text-[#1F1B44]">{bookingDraft.email}</span></p>
                </div>

                <p className="text-xs text-[#6B6673] leading-relaxed">
                  We look forward to welcoming you into stillness. Please arrive 10 minutes prior to begin with herbal hydration.
                </p>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setActiveTab('history')}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#1F1B44] bg-[#E4ECE6] hover:bg-[#D2E3D8] transition-colors cursor-pointer"
                  >
                    View All Booked Sessions
                  </button>
                  <button
                    onClick={() => {
                      setSuccessBookingId(null);
                      dispatch(closeBookingModal());
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#1F1B44] hover:bg-[#151230] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : activeTab === 'book' ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1.5">
                    Choose Pathway
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {programs.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => dispatch(updateBookingDraft({ programId: p.id }))}
                        className={`p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer ${
                          bookingDraft.programId === p.id
                            ? 'border-[#1F1B44] bg-[#1F1B44] text-white shadow-sm'
                            : 'border-[#EAE5DD] bg-white hover:border-[#1F1B44]/50 text-[#6B6673]'
                        }`}
                      >
                        <p className={`font-semibold truncate ${bookingDraft.programId === p.id ? 'text-white' : 'text-[#1F1B44]'}`}>
                          {p.title}
                        </p>
                        <p className="text-[10px] mt-1 opacity-80">{p.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1.5">
                      Session Date
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDraft.date}
                      onChange={(e) => dispatch(updateBookingDraft({ date: e.target.value }))}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1.5">
                      Session Format
                    </label>
                    <select
                      value={bookingDraft.format}
                      onChange={(e) => dispatch(updateBookingDraft({ format: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                    >
                      <option value="Studio & Online">Studio &amp; Online Live</option>
                      <option value="In-Person Sanctuary">In-Person Sanctuary Only</option>
                      <option value="Hybrid Immersion">Hybrid Immersion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1F1B44] block mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={bookingDraft.timeSlot}
                    onChange={(e) => dispatch(updateBookingDraft({ timeSlot: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                  >
                    {timeSlots.map((ts, i) => (
                      <option key={i} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-2 border-t border-[#EAE5DD] space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B4B] block">
                    Guest Information
                  </span>

                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={bookingDraft.name}
                        onChange={(e) => dispatch(updateBookingDraft({ name: e.target.value }))}
                        className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] placeholder-[#6B6673]/60 focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                      />
                      <User className="w-4 h-4 text-[#6B6673] absolute left-3 top-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={bookingDraft.email}
                        onChange={(e) => dispatch(updateBookingDraft({ email: e.target.value }))}
                        className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] placeholder-[#6B6673]/60 focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                      />
                      <Mail className="w-4 h-4 text-[#6B6673] absolute left-3 top-3" />
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={bookingDraft.phone}
                        onChange={(e) => dispatch(updateBookingDraft({ phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 pl-9 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] placeholder-[#6B6673]/60 focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                      />
                      <Phone className="w-4 h-4 text-[#6B6673] absolute left-3 top-3" />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder="Special intentions, injuries, or personal notes (optional)..."
                      value={bookingDraft.notes}
                      onChange={(e) => dispatch(updateBookingDraft({ notes: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE5DD] text-xs text-[#1F1B44] placeholder-[#6B6673]/60 focus:outline-none focus:ring-1 focus:ring-[#1F1B44]"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#EAE5DD]">
                  <div className="text-xs text-[#6B6673]">
                    <span>Total Investment: </span>
                    <span className="font-semibold text-[#1F1B44]">{currentProgram.price}</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#1F1B44] hover:bg-[#151230] transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                {bookedSessions.length === 0 ? (
                  <div className="text-center py-12 text-[#6B6673] space-y-2">
                    <Calendar className="w-10 h-10 mx-auto text-[#D2E3D8]" />
                    <p className="text-sm font-semibold text-[#1F1B44]">No Active Sessions Yet</p>
                    <p className="text-xs">Your reserved sanctuary classes will appear here.</p>
                    <button
                      onClick={() => setActiveTab('book')}
                      className="mt-3 px-4 py-2 text-xs font-semibold text-[#13382C] bg-[#E4ECE6] rounded-full hover:bg-[#D2E3D8] transition-colors cursor-pointer"
                    >
                      Book Your First Session
                    </button>
                  </div>
                ) : (
                  bookedSessions.map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-2xl border border-[#EAE5DD] bg-white flex items-center justify-between gap-4"
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C59B4B] font-semibold">
                          CONFIRMED · {session.id}
                        </span>
                        <h4 className="font-serif text-base font-semibold text-[#1F1B44] mt-0.5">
                          {session.programTitle}
                        </h4>
                        <p className="text-xs text-[#6B6673] mt-1">
                          {session.date} · {session.timeSlot}
                        </p>
                        <p className="text-[11px] text-[#13382C] mt-0.5">
                          Guest: {session.userName} ({session.userEmail})
                        </p>
                      </div>

                      <button
                        onClick={() => dispatch(cancelBooking(session.id))}
                        className="p-2 text-[#6B6673] hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title="Cancel reservation"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
