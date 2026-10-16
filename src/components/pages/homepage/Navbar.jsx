// import React, { useState } from 'react';
// import { Menu, X, ArrowRight, UserCheck, CalendarCheck } from 'lucide-react';
// import { useAppDispatch, useAppSelector } from '../../../store/store';
// import {
//   setCurrentNav,
//   openBookingModal,
//   openSignInModal
// } from '../../../store/wellnessSlice';


// export const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dispatch = useAppDispatch();
//   const { currentNav, bookedSessions, currentUser } = useAppSelector((state) => state.wellness);

//   const navLinks = [
//     { id: 'home', label: 'Home' },
//     { id: 'approach', label: 'Our Approach' },
//     { id: 'services', label: 'Healing Services' },
//     { id: 'programs', label: 'Programs' },
//     { id: 'journal', label: 'Journal' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   const handleNavClick = (id) => {
//     dispatch(setCurrentNav(id));
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EAE5DD] transition-all">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
//         {/* Exact Brand Logo matching Figma & WhatsApp Image */}
//         <button
//           onClick={() => handleNavClick('home')}
//           className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
//         >
//           <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-[#EAE5DD] shadow-xs flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
//             <img
//               src="/assets/images/inner_being_logo_1791870134219.jpg"
//               alt="Inner Being Wellness Tree of Life Logo"
//               className="w-full h-full object-cover scale-110"
//               referrerPolicy="no-referrer"
//             />
//           </div>

//           <div className="flex flex-col">
//             <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.08em] text-[#1F1B44] leading-tight">
//               INNER BEING
//             </span>
//             <div className="flex items-center gap-1.5 mt-0.5">
//               <span className="w-3 h-[1px] bg-[#C59B4B]"></span>
//               <span className="text-[10px] tracking-[0.25em] uppercase text-[#C59B4B] font-semibold leading-none">
//                 WELLNESS
//               </span>
//               <span className="w-3 h-[1px] bg-[#C59B4B]"></span>
//             </div>
//           </div>
//         </button>

//         {/* Center Nav Items with active indicator bar */}
//         <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#6B6673]">
//           {navLinks.map((item) => {
//             const isActive = currentNav === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`relative py-2 transition-colors whitespace-nowrap cursor-pointer ${
//                   isActive ? 'text-[#1F1B44] font-semibold' : 'hover:text-[#1F1B44]'
//                 }`}
//               >
//                 <span>{item.label}</span>
//                 {isActive && (
//                   <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F1B44] rounded-full" />
//                 )}
//               </button>
//             );
//           })}
//         </nav>

//         {/* Right Actions: Sign In (outlined) & Join a Session → (solid plum) */}
//         <div className="hidden sm:flex items-center gap-3 shrink-0">
//           {bookedSessions.length > 0 && (
//             <button
//               onClick={() => dispatch(openBookingModal())}
//               className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#13382C] bg-[#E4ECE6] rounded-full border border-[#D2E3D8] hover:bg-[#D2E3D8] transition-colors whitespace-nowrap cursor-pointer"
//               title="View your booked sessions"
//             >
//               <CalendarCheck className="w-3.5 h-3.5" />
//               <span>{bookedSessions.length}</span>
//             </button>
//           )}

//           {currentUser ? (
//             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E4ECE6] rounded-full text-xs font-semibold text-[#13382C]">
//               <UserCheck className="w-3.5 h-3.5" />
//               <span className="truncate max-w-[100px]">{currentUser.name}</span>
//             </div>
//           ) : (
//             <button
//               onClick={() => dispatch(openSignInModal())}
//               className="px-5 py-2 text-xs font-medium text-[#1F1B44] bg-transparent border border-[#1F1B44] rounded-full hover:bg-[#1F1B44]/5 transition-all cursor-pointer whitespace-nowrap"
//             >
//               Sign In
//             </button>
//           )}

//           <button
//             onClick={() => dispatch(openBookingModal())}
//             className="px-5 py-2 text-xs font-semibold text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-sm active:scale-[0.98] cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
//           >
//             <span>Join a Session</span>
//             <ArrowRight className="w-3.5 h-3.5" />
//           </button>
//         </div>

//         {/* Mobile Hamburger Drawer Toggle */}
//         <div className="flex items-center gap-2 lg:hidden">
//           <button
//             onClick={() => dispatch(openBookingModal())}
//             className="px-3 py-1.5 text-[11px] font-semibold text-white bg-[#1F1B44] rounded-full"
//           >
//             Join
//           </button>
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="p-2 text-[#1F1B44] hover:bg-[#E4ECE6] rounded-lg transition-colors cursor-pointer"
//             aria-label="Toggle navigation menu"
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden bg-white border-b border-[#EAE5DD] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
//           <nav className="flex flex-col space-y-2 text-base font-medium text-[#6B6673]">
//             {navLinks.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`py-2 text-left transition-colors flex items-center justify-between cursor-pointer ${
//                   currentNav === item.id ? 'text-[#1F1B44] font-bold' : 'hover:text-[#1F1B44]'
//                 }`}
//               >
//                 <span>{item.label}</span>
//                 {currentNav === item.id && <span className="w-1.5 h-1.5 rounded-full bg-[#1F1B44]" />}
//               </button>
//             ))}
//           </nav>

//           <div className="pt-4 border-t border-[#EAE5DD] flex flex-col gap-2.5">
//             {!currentUser && (
//               <button
//                 onClick={() => {
//                   setMobileMenuOpen(false);
//                   dispatch(openSignInModal());
//                 }}
//                 className="w-full py-2.5 text-center text-xs font-semibold text-[#1F1B44] border border-[#1F1B44] rounded-full cursor-pointer"
//               >
//                 Sign In
//               </button>
//             )}
//             <button
//               onClick={() => {
//                 setMobileMenuOpen(false);
//                 dispatch(openBookingModal());
//               }}
//               className="w-full py-3 text-center text-xs font-semibold tracking-wider text-white bg-[#1F1B44] rounded-full shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
//             >
//               <span>Join a Session</span>
//               <ArrowRight className="w-3.5 h-3.5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };




// import React, { useState } from 'react';
import { Menu, X, ArrowRight, UserCheck, CalendarCheck } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  setCurrentNav,
  openBookingModal,
  openSignInModal
} from '../../../store/wellnessSlice';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { currentNav, bookedSessions, currentUser } = useAppSelector((state) => state.wellness);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'services', label: 'Healing Services' },
    { id: 'programs', label: 'Programs' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    dispatch(setCurrentNav(id));
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EAE5DD] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group shrink-0 text-left cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-[#EAE5DD] shadow-xs flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <img
              src="/assets/images/inner_being_logo_1791870134219.jpg"
              alt="Inner Being Wellness Tree of Life Logo"
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.08em] text-[#1F1B44] leading-tight">
              INNER BEING
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-3 h-[1px] bg-[#C59B4B]"></span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C59B4B] font-semibold leading-none">
                WELLNESS
              </span>
              <span className="w-3 h-[1px] bg-[#C59B4B]"></span>
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#6B6673]">
          {navLinks.map((item) => {
            const isActive = currentNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#1F1B44] font-semibold' : 'hover:text-[#1F1B44]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1F1B44] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {bookedSessions.length > 0 && (
            <button
              onClick={() => dispatch(openBookingModal())}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#13382C] bg-[#E4ECE6] rounded-full border border-[#D2E3D8] hover:bg-[#D2E3D8] transition-colors whitespace-nowrap cursor-pointer"
              title="View your booked sessions"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>{bookedSessions.length}</span>
            </button>
          )}

          {currentUser ? (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E4ECE6] rounded-full text-xs font-semibold text-[#13382C]">
              <UserCheck className="w-3.5 h-3.5" />
              <span className="truncate max-w-[100px]">{currentUser.name}</span>
            </div>
          ) : (
            <button
              onClick={() => dispatch(openSignInModal())}
              className="px-5 py-2 text-xs font-medium text-[#1F1B44] bg-transparent border border-[#1F1B44] rounded-full hover:bg-[#1F1B44]/5 transition-all cursor-pointer whitespace-nowrap"
            >
              Sign In
            </button>
          )}

          <button
            onClick={() => dispatch(openBookingModal())}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#1F1B44] rounded-full hover:bg-[#151230] transition-all shadow-sm active:scale-[0.98] cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Join a Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => dispatch(openBookingModal())}
            className="px-3 py-1.5 text-[11px] font-semibold text-white bg-[#1F1B44] rounded-full"
          >
            Join
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1F1B44] hover:bg-[#E4ECE6] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE5DD] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#6B6673]">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 text-left transition-colors flex items-center justify-between cursor-pointer ${
                  currentNav === item.id ? 'text-[#1F1B44] font-bold' : 'hover:text-[#1F1B44]'
                }`}
              >
                <span>{item.label}</span>
                {currentNav === item.id && <span className="w-1.5 h-1.5 rounded-full bg-[#1F1B44]" />}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#EAE5DD] flex flex-col gap-2.5">
            {!currentUser && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  dispatch(openSignInModal());
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-[#1F1B44] border border-[#1F1B44] rounded-full cursor-pointer"
              >
                Sign In
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                dispatch(openBookingModal());
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider text-white bg-[#1F1B44] rounded-full shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Join a Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};