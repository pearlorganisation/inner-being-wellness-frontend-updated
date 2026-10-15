import { createSlice } from '@reduxjs/toolkit';

const initialPrograms = [
  {
    id: 'mind-body-balance',
    title: 'Mind & Body Balance',
    category: 'movement',
    categoryLabel: 'Mindful Movement',
    badgeType: 'lotus',
    badgeColor: '#E9D5FF', // Soft lilac/purple
    tagline: 'Harmonize physical posture and internal rhythm through gentle somatic flow.',
    description: 'Yoga, mindfulness, and breathing exercises to build a calm, grounded, and energized you. Suitable for beginners to seasoned practitioners seeking mindful alignment.',
    image: '/src/assets/images/program_mind_balance_1791868807308.jpg',
    duration: '60 - 75 Mins',
    instructor: {
      name: 'Elena Vance',
      role: 'Master Somatic Yogini',
      experience: '14 Years Practice'
    },
    rating: 4.95,
    reviewsCount: 420,
    format: 'Studio & Online',
    level: 'All Levels',
    schedule: 'Mon, Wed, Fri · 08:00 AM & 06:00 PM',
    price: '$35 / session',
    features: [
      'Gentle spinal decompressive sequencing',
      'Breath-guided postural alignment',
      'Somatic tension release techniques',
      'Sound bath integration cooldown'
    ]
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    category: 'healing',
    categoryLabel: 'Sound Resonance',
    badgeType: 'leaf',
    badgeColor: '#DCFCE7', // Soft sage green
    tagline: 'Bathe the nervous system in sacred frequencies and restorative therapies.',
    description: 'Restorative sonic vibration therapy to relieve deep-seated stress and nurture mental well-being. Hammered Himalayan singing bowls and gentle tuning forks.',
    image: '/src/assets/images/program_guided_healing_1791868808281.jpg',
    duration: '90 Mins',
    instructor: {
      name: 'Julian Mercer',
      role: 'Acoustic Sound Healer',
      experience: '11 Years Practice'
    },
    rating: 4.98,
    reviewsCount: 512,
    format: 'In-Person Sanctuary',
    level: 'Deep Practice',
    schedule: 'Tue, Thu, Sat · 07:00 PM',
    price: '$50 / session',
    features: [
      'Hammered 7-metal Himalayan singing bowls',
      'Palo santo and copal aura cleansing',
      'Targeted bio-acoustic frequency bath',
      'Guided restorative savasana relaxation'
    ]
  },
  {
    id: 'inner-growth',
    title: 'Inner Growth',
    category: 'growth',
    categoryLabel: 'Mindfulness & Coaching',
    badgeType: 'sun',
    badgeColor: '#FEF08A', // Soft warm yellow/peach
    tagline: 'Cultivate emotional clarity, grounded presence, and conscious daily living.',
    description: 'Mindful self-discovery and meditation programs to help you align with your true self. Learn how to transform reactivity into centered poise and intentional intention.',
    image: '/src/assets/images/program_inner_growth_1791868807800.jpg',
    duration: '60 Mins',
    instructor: {
      name: 'Dr. Sarah Lin, PhD',
      role: 'Holistic Psychologist & Mentor',
      experience: '16 Years Practice'
    },
    rating: 4.92,
    reviewsCount: 380,
    format: 'Hybrid Immersion',
    level: 'Introductory to Advanced',
    schedule: 'Wed, Sun · 10:00 AM & 04:00 PM',
    price: '$45 / session',
    features: [
      'Structured mindfulness journaling prompt system',
      'Cognitive decluttering and emotional regulation',
      'Daily micro-rituals for peaceful routines',
      '1-on-1 personalized mentorship debrief'
    ]
  }
];

const initialJournalArticles = [
  {
    id: 'art-of-stillness',
    title: 'The Architecture of Daily Stillness',
    category: 'Mindfulness',
    readTime: '4 min read',
    excerpt: 'How creating a micro-sanctuary at dawn recalibrates your circadian rhythm and somatic balance.',
    date: 'October 2026',
    author: 'Elena Vance',
    content: 'Stillness is not an absence of sound, but an intentional return to the breath. In our modern hyper-connected landscape, taking twelve mindful minutes at dawn grounds the nervous system before external stimuli can provoke the fight-or-flight cascade...'
  },
  {
    id: 'science-sound-healing',
    title: 'Sonic Frequency & The Vagus Nerve',
    category: 'Sound Therapy',
    readTime: '6 min read',
    excerpt: 'Examining the physiological effect of 432Hz Himalayan singing bowls on heart rate variability.',
    date: 'September 2026',
    author: 'Julian Mercer',
    content: 'When acoustic vibrations resonate through bone conduction, the vagus nerve receives direct parasympathetic stimulation. Measurements taken before and after 45-minute sound baths reveal significant reductions in salivary cortisol...'
  },
  {
    id: 'unwinding-nervous-system',
    title: 'Somatic Unwinding: Moving Past Fatigue',
    category: 'Holistic Movement',
    readTime: '5 min read',
    excerpt: 'Three restorative postures you can practice before sleep to release spinal compression.',
    date: 'August 2026',
    author: 'Dr. Sarah Lin',
    content: 'Tension is often stored silently along the psoas and thoracic spine. Through gentle, non-striving movement, the fascia releases its protective grip, allowing deep rest to occur naturally...'
  }
];

const loadPersistedBookings = () => {
  try {
    const raw = localStorage.getItem('inner_being_bookings');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return [];
};

const initialState = {
  currentNav: 'home',
  activeCategory: 'all',
  selectedProgram: null,
  isDetailModalOpen: false,
  isBookingModalOpen: false,
  isSignInModalOpen: false,
  currentUser: null,
  bookingDraft: {
    programId: 'mind-body-balance',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '10:30 AM - 11:45 AM (Midday Balance)',
    format: 'Studio & Online',
    name: '',
    email: '',
    phone: '',
    notes: ''
  },
  activeWisdomPillar: 'Mindful Movement',
  isAmbientSoundActive: false,
  ambientVolume: 0.35,
  newsletterEmail: '',
  newsletterSuccess: false,
  bookedSessions: loadPersistedBookings(),
  programs: initialPrograms,
  journalArticles: initialJournalArticles
};

export const wellnessSlice = createSlice({
  name: 'wellness',
  initialState,
  reducers: {
    setCurrentNav: (state, action) => {
      state.currentNav = action.payload;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload;
      state.isDetailModalOpen = action.payload !== null;
    },
    closeDetailModal: (state) => {
      state.isDetailModalOpen = false;
      state.selectedProgram = null;
    },
    openBookingModal: (state, action) => {
      state.isBookingModalOpen = true;
      if (action.payload) {
        state.bookingDraft.programId = action.payload;
        const prog = state.programs.find((p) => p.id === action.payload);
        if (prog) {
          state.bookingDraft.format = prog.format;
        }
      } else if (!state.bookingDraft.programId && state.programs.length > 0) {
        state.bookingDraft.programId = state.programs[0].id;
      }
    },
    closeBookingModal: (state) => {
      state.isBookingModalOpen = false;
    },
    openSignInModal: (state) => {
      state.isSignInModalOpen = true;
    },
    closeSignInModal: (state) => {
      state.isSignInModalOpen = false;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isSignInModalOpen = false;
    },
    updateBookingDraft: (state, action) => {
      state.bookingDraft = { ...state.bookingDraft, ...action.payload };
    },
    submitBooking: (state) => {
      const prog = state.programs.find((p) => p.id === state.bookingDraft.programId) || state.programs[0];
      const newBooking = {
        id: `ib-${Date.now()}`,
        programId: prog.id,
        programTitle: prog.title,
        date: state.bookingDraft.date,
        timeSlot: state.bookingDraft.timeSlot,
        format: state.bookingDraft.format,
        userName: state.bookingDraft.name || (state.currentUser?.name || 'Guest Yogi'),
        userEmail: state.bookingDraft.email || (state.currentUser?.email || 'guest@innerbeing.com'),
        bookedAt: new Date().toISOString()
      };
      state.bookedSessions.unshift(newBooking);
      try {
        localStorage.setItem('inner_being_bookings', JSON.stringify(state.bookedSessions));
      } catch (e) {
        console.error(e);
      }
      state.isBookingModalOpen = false;
      state.bookingDraft.name = '';
      state.bookingDraft.email = '';
      state.bookingDraft.phone = '';
      state.bookingDraft.notes = '';
    },
    cancelBooking: (state, action) => {
      state.bookedSessions = state.bookedSessions.filter((b) => b.id !== action.payload);
      try {
        localStorage.setItem('inner_being_bookings', JSON.stringify(state.bookedSessions));
      } catch (e) {
        console.error(e);
      }
    },
    setActiveWisdomPillar: (state, action) => {
      state.activeWisdomPillar = action.payload;
    },
    toggleAmbientSound: (state) => {
      state.isAmbientSoundActive = !state.isAmbientSoundActive;
    },
    setAmbientVolume: (state, action) => {
      state.ambientVolume = action.payload;
    },
    setNewsletterEmail: (state, action) => {
      state.newsletterEmail = action.payload;
    },
    submitNewsletter: (state) => {
      if (state.newsletterEmail && state.newsletterEmail.includes('@')) {
        state.newsletterSuccess = true;
      }
    },
    resetNewsletterSuccess: (state) => {
      state.newsletterSuccess = false;
      state.newsletterEmail = '';
    }
  }
});

export const {
  setCurrentNav,
  setActiveCategory,
  setSelectedProgram,
  closeDetailModal,
  openBookingModal,
  closeBookingModal,
  openSignInModal,
  closeSignInModal,
  setCurrentUser,
  updateBookingDraft,
  submitBooking,
  cancelBooking,
  setActiveWisdomPillar,
  toggleAmbientSound,
  setAmbientVolume,
  setNewsletterEmail,
  submitNewsletter,
  resetNewsletterSuccess
} = wellnessSlice.actions;

export default wellnessSlice.reducer;
