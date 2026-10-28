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
//   // { label: "Frequencies", href: "/offerings", id: "programs" },
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

//   // page change par sab band
//   useEffect(() => {
//     setDesktopSubOpen(false);
//     setMobileMenuOpen(false);
//     setMobileSubOpen(false);
//   }, [currentPath]);

//   // bahar click / Esc par dropdown band
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
//           <Link
//             href="/"
//             onClick={closeMenu}
//             className="flex items-center gap-3 shrink-0 group"
//           >
//             <img
//               // src="/assets/aistudio/inner_being_logo_1791870134219_08a12639.png"
//               src="/assets/aistudio/sinner_being_logo.png"
//               alt="Inner Being Wellness logo"
//               className="w-20 h-20 object-contain rounded-full bg-white/80 p-0.5 shadow-2xs group-hover:scale-105 transition-transform"
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

//               // Founder dropdown
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
//                           {link.children.map((child) => {
//                             const childActive = currentPath === child.href;
//                             return (
//                               <Link
//                                 key={child.href}
//                                 href={child.href}
//                                 role="menuitem"
//                                 onClick={closeMenu}
//                                 className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
//                                   childActive
//                                     ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
//                                     : "text-[#586860] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
//                                 }`}
//                               >
//                                 {child.label}
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={link.id}
//                   href={link.href}
//                   onClick={closeMenu}
//                   className={linkClass}
//                 >
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

//               // Founder accordion
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






// new updated code 






"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X, ArrowRight, ChevronDown, LogOut } from "lucide-react";
import { logoutUser } from "@/store/authSlice";
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

function Avatar({ user, size = "h-9 w-9" }) {
  return user.profile_pic ? (
    <img
      src={user.profile_pic}
      alt={user.name || "Profile"}
      className={`${size} shrink-0 rounded-full object-cover ring-1 ring-[#2D1C59]/20`}
      referrerPolicy="no-referrer"
    />
  ) : (
    <span
      className={`${size} flex shrink-0 items-center justify-center rounded-full bg-[#2D1C59] text-sm font-semibold text-white`}
    >
      {user.name?.[0]?.toUpperCase()}
    </span>
  );
}

export default function Header() {
  const currentPath = usePathname() || "/";
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, hydrated } = useSelector((s) => s.auth);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [desktopSubOpen, setDesktopSubOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const userMenuRef = useRef(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubOpen(false);
    setDesktopSubOpen(false);
    setUserMenuOpen(false);
  };

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // page change par sab band
  useEffect(() => {
    setDesktopSubOpen(false);
    setMobileMenuOpen(false);
    setMobileSubOpen(false);
    setUserMenuOpen(false);
  }, [currentPath]);

  // bahar click / Esc par dropdowns band
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopSubOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDesktopSubOpen(false);
        setUserMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // screen desktop size pe jaye to mobile menu band
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setMobileMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // mobile menu khula ho to background scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    closeMenu();
    router.push("/");
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
          ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#2D1C59]/10 py-2 sm:py-3"
          : "bg-[#FBF9F5] border-b border-[#2D1C59]/10 py-2 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
          >
            <img
              src="/assets/aistudio/sinner_being_logo.png"
              alt="Inner Being Wellness logo"
              className="h-12 w-12 shrink-0 rounded-full bg-white/80 object-contain p-0.5 shadow-sm transition-transform group-hover:scale-105 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              referrerPolicy="no-referrer"
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-serif text-sm font-bold leading-tight tracking-wider text-[#1E255E] sm:text-lg">
                INNER BEING
              </span>
              <span className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.25em] text-[#C5A265] sm:text-[10px]">
                WELLNESS
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-8">
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
                      className={`${linkClass} flex cursor-pointer items-center gap-1`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${
                          desktopSubOpen ? "rotate-180" : ""
                        }`}
                      />
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#2D1C59]" />
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
                                    ? "bg-[#2D1C59]/10 font-semibold text-[#2D1C59]"
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
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#2D1C59]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side: auth + CTA + hamburger */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Auth (desktop only) */}
            {hydrated && (
              <div className="hidden lg:block">
                {user ? (
                  <div ref={userMenuRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setUserMenuOpen((v) => !v)}
                      aria-haspopup="menu"
                      aria-expanded={userMenuOpen}
                      className="flex items-center gap-2 rounded-full p-1 pr-3 transition-colors hover:bg-[#2D1C59]/5"
                    >
                      <Avatar user={user} />
                      <span className="max-w-[90px] truncate text-sm font-medium text-[#2D1C59]">
                        {user.name?.split(" ")[0]}
                      </span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 text-[#586860] transition-transform ${
                          userMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {userMenuOpen && (
                      <div
                        role="menu"
                        className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-[#2D1C59]/10 bg-white p-2 shadow-xl"
                      >
                        <div className="border-b border-[#2D1C59]/10 px-3 pb-2 pt-1">
                          <p className="truncate text-sm font-semibold text-[#2D1C59]">
                            {user.name}
                          </p>
                          <p className="truncate text-xs text-[#586860]">{user.email}</p>
                        </div>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={handleLogout}
                          className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#586860] transition-colors hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
                        >
                          <LogOut className="h-4 w-4" /> Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="text-sm font-medium text-[#586860] transition-colors hover:text-[#2D1C59]"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      onClick={closeMenu}
                      className="text-sm font-medium text-[#2D1C59] underline-offset-4 hover:underline"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Book Session (sm and up) */}
            <div className="hidden sm:block">
              <Button variant="primary" size="sm" href="/contact" onClick={closeMenu}>
                Book Session
              </Button>
            </div>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-full p-2 text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/10 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet drawer: header ke neeche hi khulta hai, koi fixed offset nahi */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-[#2D1C59]/15 bg-[#FAF7F2] px-4 pb-6 pt-3 shadow-xl animate-in slide-in-from-top-2 sm:px-6 lg:hidden">
          <nav className="mx-auto flex max-w-xl flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const rowClass = `px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between w-full text-left ${
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
                        className={`h-4 w-4 opacity-50 transition-transform ${
                          mobileSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSubOpen && (
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#2D1C59]/15 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className={`rounded-lg px-3 py-2.5 text-[15px] transition-colors ${
                              currentPath === child.href
                                ? "bg-[#2D1C59]/10 font-semibold text-[#2D1C59]"
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
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </Link>
              );
            })}

            {/* Auth (mobile) */}
            {hydrated && (
              <div className="mt-2 border-t border-[#2D1C59]/10 pt-4">
                {user ? (
                  <div className="flex items-center justify-between gap-3 px-1">
                    <div className="flex min-w-0 items-center gap-3">
                      <Avatar user={user} size="h-10 w-10" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[#2D1C59]">
                          {user.name}
                        </p>
                        <p className="truncate text-xs text-[#586860]">{user.email}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex shrink-0 items-center gap-1.5 rounded-lg border border-[#2D1C59]/15 px-3 py-2 text-sm text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/5"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="rounded-lg border border-[#2D1C59]/20 py-3 text-center text-sm font-medium text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/5"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      onClick={closeMenu}
                      className="rounded-lg bg-[#2D1C59] py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#35146E]"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Book Session (mobile) */}
            <div className="mt-3">
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