// // new updated code 


// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
// import Button from "@/components/ui/Button";

// const navLinks = [
//   { label: "Home", href: "/", id: "home" },
//   { label: "Manifesto", href: "/#manifesto", id: "manifesto" },
//   {
//     label: "Founder",
//     href: "/about",
//     id: "founder",
//     children: [
//       { label: "About Muazzam Abdul Rehman", href: "/about" },
//       { label: "About Janki Ravani", href: "/janki" },
//     ],
//   },
//   { label: "Product", href: "/freedom-from-resistance", id: "product" },
//   { label: "Frequencies", href: "/offerings", id: "programs" },
//   { label: "Defaults", href: "/#four-defaults", id: "defaults" },
//   { label: "Contact", href: "/contact", id: "contact" },
// ];

// export default function Header() {
//   const currentPath = usePathname() || "/";
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubOpen, setMobileSubOpen] = useState(false);
//   const [desktopSubOpen, setDesktopSubOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setDesktopSubOpen(false);
//     setMobileMenuOpen(false);
//     setMobileSubOpen(false);
//   }, [currentPath]);

//   useEffect(() => {
//     const onClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDesktopSubOpen(false);
//       }
//     };
//     const onKey = (e) => e.key === "Escape" && setDesktopSubOpen(false);
//     document.addEventListener("mousedown", onClick);
//     document.addEventListener("keydown", onKey);
//     return () => {
//       document.removeEventListener("mousedown", onClick);
//       document.removeEventListener("keydown", onKey);
//     };
//   }, []);

//   const closeMenu = () => {
//     setMobileMenuOpen(false);
//     setMobileSubOpen(false);
//     setDesktopSubOpen(false);
//   };

//   const isLinkActive = (link) => {
//     if (link.children) return link.children.some((c) => c.href === currentPath);
//     if (link.href.includes("#")) return false;
//     return currentPath === link.href;
//   };

//   return (
//     <header
//       className={`sticky top-0 z-40 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-2xs border-b border-[#2D1C59]/10 py-3"
//           : "bg-[#FBF9F5] border-b border-[#2D1C59]/8 py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-6">
//           {/* Logo */}
//           <Link href="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0 group">
//             <img
//               src="/assets/aistudio/inner_being_logo_1791870134219_08a12639.png"
//               alt="Inner Being Wellness logo"
//               className="w-10 h-10 object-contain rounded-full bg-white/80 p-0.5 shadow-2xs group-hover:scale-105 transition-transform"
//               referrerPolicy="no-referrer"
//             />
//             <div className="flex flex-col">
//               <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-[#1E255E] leading-tight">
//                 INNER BEING
//               </span>
//               <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C5A265] uppercase leading-none">
//                 WELLNESS
//               </span>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
//             {navLinks.map((link) => {
//               const isActive = isLinkActive(link);
//               const linkClass = `relative py-1 whitespace-nowrap transition-colors ${
//                 isActive
//                   ? "text-[#2D1C59] font-semibold"
//                   : "text-[#586860] hover:text-[#2D1C59]"
//               }`;

//               if (link.children) {
//                 return (
//                   <div
//                     key={link.id}
//                     ref={dropdownRef}
//                     className="relative"
//                     onMouseEnter={() => setDesktopSubOpen(true)}
//                     onMouseLeave={() => setDesktopSubOpen(false)}
//                   >
//                     <button
//                       type="button"
//                       aria-haspopup="menu"
//                       aria-expanded={desktopSubOpen}
//                       onClick={() => setDesktopSubOpen((v) => !v)}
//                       className={`${linkClass} flex items-center gap-1 cursor-pointer`}
//                     >
//                       {link.label}
//                       <ChevronDown
//                         className={`w-3.5 h-3.5 transition-transform ${
//                           desktopSubOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                       {isActive && (
//                         <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D1C59] rounded-full" />
//                       )}
//                     </button>

//                     {desktopSubOpen && (
//                       <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
//                         <div
//                           role="menu"
//                           className="w-72 rounded-xl border border-[#2D1C59]/10 bg-white p-2 shadow-xl"
//                         >
//                           {link.children.map((child) => (
//                             <Link
//                               key={child.href}
//                               href={child.href}
//                               role="menuitem"
//                               onClick={closeMenu}
//                               className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
//                                 currentPath === child.href
//                                   ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
//                                   : "text-[#586860] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
//                               }`}
//                             >
//                               {child.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <Link key={link.id} href={link.href} onClick={closeMenu} className={linkClass}>
//                   {link.label}
//                   {isActive && (
//                     <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D1C59] rounded-full" />
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* CTA + hamburger */}
//           <div className="flex items-center gap-3 shrink-0">
//             <div className="hidden sm:block">
//               <Button variant="primary" size="sm" href="/contact" onClick={closeMenu}>
//                 Book Session
//               </Button>
//             </div>

//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 rounded-full text-[#2D1C59] hover:bg-[#2D1C59]/8 transition-colors"
//               aria-label="Toggle navigation menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed inset-x-0 top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto bg-[#FAF7F2] border-b border-[#2D1C59]/15 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
//           <nav className="flex flex-col gap-2">
//             {navLinks.map((link) => {
//               const isActive = isLinkActive(link);
//               const rowClass = `px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between w-full text-left ${
//                 isActive
//                   ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
//                   : "text-[#4A5D54] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
//               }`;

//               if (link.children) {
//                 return (
//                   <div key={link.id}>
//                     <button
//                       type="button"
//                       aria-expanded={mobileSubOpen}
//                       onClick={() => setMobileSubOpen((v) => !v)}
//                       className={rowClass}
//                     >
//                       <span>{link.label}</span>
//                       <ChevronDown
//                         className={`w-4 h-4 opacity-50 transition-transform ${
//                           mobileSubOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {mobileSubOpen && (
//                       <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-[#2D1C59]/15 pl-3">
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             onClick={closeMenu}
//                             className={`px-3 py-2 rounded-lg text-[15px] transition-colors ${
//                               currentPath === child.href
//                                 ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
//                                 : "text-[#4A5D54] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
//                             }`}
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <Link key={link.id} href={link.href} onClick={closeMenu} className={rowClass}>
//                   <span>{link.label}</span>
//                   <ArrowRight className="w-4 h-4 opacity-40" />
//                 </Link>
//               );
//             })}
//             <div className="pt-3 border-t border-[#2D1C59]/10 mt-2">
//               <Button
//                 variant="primary"
//                 size="md"
//                 className="w-full justify-center"
//                 href="/contact"
//                 onClick={closeMenu}
//               >
//                 Book Session
//               </Button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }






// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ArrowRight } from "lucide-react";
// import Button from "@/components/ui/Button";

// export default function Header() {
//   const currentPath = usePathname() || "/";
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { label: "Home", href: "/", id: "home" },
//     { label: "Manifesto", href: "/#manifesto", id: "manifesto" },
//     { label: "Founder", href: "/about", id: "about" },
//     { label: "Product", href: "/freedom-from-resistance", id: "Product" },
//     { label: "Frequencies", href: "/offerings", id: "programs" },
//     { label: "Defaults", href: "/#four-defaults", id: "defaults" },
//     { label: "Contact", href: "/contact", id: "contact" },
//   ];

//   const closeMenu = () => setMobileMenuOpen(false);

//   return (
//     <header
//       className={`sticky top-0 z-40 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-2xs border-b border-[#2D1C59]/10 py-3"
//           : "bg-[#FBF9F5] border-b border-[#2D1C59]/8 py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-6">
//           {/* Zone 1: Logo & Brand Lockup */}
//           <Link
//             href="/"
//             onClick={closeMenu}
//             className="flex items-center gap-3 shrink-0 group"
//           >
//             <img
//               src="/assets/aistudio/inner_being_logo_1791870134219_08a12639.png"
//               alt="Inner Being Wellness logo"
//               className="w-10 h-10 object-contain rounded-full bg-white/80 p-0.5 shadow-2xs group-hover:scale-105 transition-transform"
//               referrerPolicy="no-referrer"
//             />
//             <div className="flex flex-col">
//               <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-[#1E255E] leading-tight">
//                 INNER BEING
//               </span>
//               <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C5A265] uppercase leading-none">
//                 WELLNESS
//               </span>
//             </div>
//           </Link>

//           {/* Zone 2: Navigation Links (matching screenshot) */}
//           <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
//             {navLinks.map((link) => {
//               const isHomeActive = currentPath === "/" && link.id === "home";
//               const isAboutActive = currentPath === "/about" && link.id === "about";
//               const isProductActive = currentPath === "/freedom-from-resistance" && link.id === "Product";
//               const isOfferingsActive =
//                 (currentPath === "/offerings" ) &&
//                 link.id === "programs";
//               const isContactActive = currentPath === "/contact" && link.id === "contact";

//               const isActive =
//                 isHomeActive || isAboutActive || isProductActive || isOfferingsActive || isContactActive;

//               return (
//                 <Link
//                   key={link.id}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className={`relative py-1 whitespace-nowrap transition-colors ${
//                     isActive
//                       ? "text-[#2D1C59] font-semibold"
//                       : "text-[#586860] hover:text-[#2D1C59]"
//                   }`}
//                 >
//                   {link.label}
//                   {isActive && (
//                     <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D1C59] rounded-full" />
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Zone 3: CTA & Mobile Hamburger */}
//           <div className="flex items-center gap-3 shrink-0">
//             <div className="hidden sm:block">
//               <Button
//                 variant="primary"
//                 size="sm"
//                 href="/contact"
//                 onClick={closeMenu}
//               >
//                 Book Session
//               </Button>
//             </div>

//             {/* Mobile menu button */}
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 rounded-full text-[#2D1C59] hover:bg-[#2D1C59]/8 transition-colors"
//               aria-label="Toggle navigation menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF7F2] border-b border-[#2D1C59]/15 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
//           <nav className="flex flex-col gap-2">
//             {navLinks.map((link) => {
//               const isHomeActive = currentPath === "/" && link.id === "home";
//               const isAboutActive = currentPath === "/about" && link.id === "about";
//               const isProductActive = currentPath === "/freedom-from-resistance" && link.id === "Product";
//               const isOfferingsActive =
//                 (currentPath === "/offerings" || currentPath === "/freedom-from-resistance") &&
//                 link.id === "programs";
//               const isContactActive = currentPath === "/contact" && link.id === "contact";
//               const isActive =
//                 isHomeActive || isAboutActive || isProductActive  || isOfferingsActive || isContactActive;

//               return (
//                 <Link
//                   key={link.id}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
//                     isActive
//                       ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
//                       : "text-[#4A5D54] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
//                   }`}
//                 >
//                   <span>{link.label}</span>
//                   <ArrowRight className="w-4 h-4 opacity-40" />
//                 </Link>
//               );
//             })}
//             <div className="pt-3 border-t border-[#2D1C59]/10 mt-2">
//               <Button
//                 variant="primary"
//                 size="md"
//                 className="w-full justify-center"
//                 href="/contact"
//                 onClick={closeMenu}
//               >
//                 Book Session
//               </Button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }





// updated 






"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "Manifesto", href: "/#manifesto", id: "manifesto" },
  {
    label: "Founder",
    href: "/about",
    id: "founder",
    children: [
      { label: "About Muazzam Abdul Rehman", href: "/about" },
      { label: "About Janki Ravani", href: "/janki" },
    ],
  },
  { label: "Product", href: "/freedom-from-resistance", id: "product" },
  { label: "Frequencies", href: "/offerings", id: "programs" },
  { label: "Defaults", href: "/#four-defaults", id: "defaults" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export default function Header() {
  const currentPath = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [desktopSubOpen, setDesktopSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // page change par sab band
  useEffect(() => {
    setDesktopSubOpen(false);
    setMobileMenuOpen(false);
    setMobileSubOpen(false);
  }, [currentPath]);

  // bahar click / Esc par dropdown band
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopSubOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setDesktopSubOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubOpen(false);
    setDesktopSubOpen(false);
  };

  const isLinkActive = (link) => {
    if (link.children) return link.children.some((c) => c.href === currentPath);
    if (link.href.includes("#")) return false;
    return currentPath === link.href;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-2xs border-b border-[#2D1C59]/10 py-3"
          : "bg-[#FBF9F5] border-b border-[#2D1C59]/8 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 shrink-0 group"
          >
            <img
              src="/assets/aistudio/inner_being_logo_1791870134219_08a12639.png"
              alt="Inner Being Wellness logo"
              className="w-10 h-10 object-contain rounded-full bg-white/80 p-0.5 shadow-2xs group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-[#1E255E] leading-tight">
                INNER BEING
              </span>
              <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C5A265] uppercase leading-none">
                WELLNESS
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const linkClass = `relative py-1 whitespace-nowrap transition-colors ${
                isActive
                  ? "text-[#2D1C59] font-semibold"
                  : "text-[#586860] hover:text-[#2D1C59]"
              }`;

              // Founder dropdown
              if (link.children) {
                return (
                  <div
                    key={link.id}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDesktopSubOpen(true)}
                    onMouseLeave={() => setDesktopSubOpen(false)}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={desktopSubOpen}
                      onClick={() => setDesktopSubOpen((v) => !v)}
                      className={`${linkClass} flex items-center gap-1 cursor-pointer`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          desktopSubOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D1C59] rounded-full" />
                      )}
                    </button>

                    {desktopSubOpen && (
                      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                        <div
                          role="menu"
                          className="w-72 rounded-xl border border-[#2D1C59]/10 bg-white p-2 shadow-xl"
                        >
                          {link.children.map((child) => {
                            const childActive = currentPath === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                onClick={closeMenu}
                                className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                                  childActive
                                    ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
                                    : "text-[#586860] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={linkClass}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D1C59] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">
              <Button variant="primary" size="sm" href="/contact" onClick={closeMenu}>
                Book Session
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#2D1C59] hover:bg-[#2D1C59]/8 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto bg-[#FAF7F2] border-b border-[#2D1C59]/15 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const rowClass = `px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between w-full text-left ${
                isActive
                  ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
                  : "text-[#4A5D54] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
              }`;

              // Founder accordion
              if (link.children) {
                return (
                  <div key={link.id}>
                    <button
                      type="button"
                      aria-expanded={mobileSubOpen}
                      onClick={() => setMobileSubOpen((v) => !v)}
                      className={rowClass}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 opacity-50 transition-transform ${
                          mobileSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubOpen && (
                      <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-[#2D1C59]/15 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className={`px-3 py-2 rounded-lg text-[15px] transition-colors ${
                              currentPath === child.href
                                ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
                                : "text-[#4A5D54] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={link.id} href={link.href} onClick={closeMenu} className={rowClass}>
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#2D1C59]/10 mt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                href="/contact"
                onClick={closeMenu}
              >
                Book Session
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}