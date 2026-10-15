import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppSelector } from '../../../store/store';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { WisdomShowcase } from './WisdomShowcase';
import { CoreProgramsSection } from './CoreProgramsSection';
import { FeatureRibbon } from './FeatureRibbon';
import { PanoramicCTABanner } from './PanoramicCTABanner';
import { TestimonialsSection } from './TestimonialsSection';
import { Footer } from './Footer';
import { ApproachPage } from '../ApproachPage';
import { ServicesPage } from '../ServicesPage';
import { JournalPage } from '../JournalPage';
import { ContactPage } from '../ContactPage';
import { ProgramDetailModal } from '../../ui/ProgramDetailModal';
import { BookingModal } from '../../ui/BookingModal';
import { SignInModal } from '../../ui/SignInModal';
import { AmbientSoundPlayer } from '../../ui/AmbientSoundPlayer';

export const HomePage = () => {
  const currentNav = useAppSelector((state) => state.wellness.currentNav);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F1B44] selection:bg-[#E4ECE6] selection:text-[#13382C]">
      {/* 3-Zone Navigation Header with exact Tree of Life Logo */}
      <Navbar />

      {/* Dynamic Main Body with smooth Framer Motion page entrance */}
      <main className="flex-1 bg-white">
        <AnimatePresence mode="wait">
          {currentNav === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white"
            >
              <HeroSection />
              <WisdomShowcase />
              <CoreProgramsSection />
              <FeatureRibbon />
              <PanoramicCTABanner />
              <TestimonialsSection />
            </motion.div>
          )}

          {currentNav === 'approach' && (
            <motion.div
              key="approach"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white"
            >
              <ApproachPage />
            </motion.div>
          )}

          {currentNav === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white"
            >
              <ServicesPage />
            </motion.div>
          )}

          {currentNav === 'programs' && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="pt-6 bg-white"
            >
              <CoreProgramsSection />
              <FeatureRibbon />
            </motion.div>
          )}

          {currentNav === 'journal' && (
            <motion.div
              key="journal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white"
            >
              <JournalPage />
            </motion.div>
          )}

          {currentNav === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white"
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Sanctuary Footer */}
      <Footer />

      {/* Modals & Sound Sanctuary */}
      <ProgramDetailModal />
      <BookingModal />
      <SignInModal />
      <AmbientSoundPlayer />
    </div>
  );
};

export default HomePage;
