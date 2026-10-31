"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, ChevronDown, LogOut } from "lucide-react";
import { logoutUser } from "@/store/authSlice";
import Button from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/*  NAV CONFIG (single source of truth)                                        */
/*  placement: "main" -> navbar me seedha | "more" -> More dropdown me         */
/*  Mobile drawer isi array ke order me banta hai.                             */
/* -------------------------------------------------------------------------- */
const NAV_ITEMS = [
  { label: "Home", href: "/", id: "home", placement: "main" },
  { label: "Manifesto", href: "/#manifesto", id: "manifesto", placement: "more" },
  {
    label: "Founder",
    href: "/about",
    id: "founder",     
    placement: "main",
    children: [
      { label: "About Muazzam Abdul Rehman", href: "/about" },
      { label: "About Janki Ravani", href: "/janki" },
    ],
  },
  { label: "Product", href: "/freedom-from-resistance", id: "product", placement: "main" },
  { label: "Frequencies", href: "/offerings", id: "programs", placement: "main" },
  { label: "Defaults", href: "/#four-defaults", id: "defaults", placement: "more" },
    { label: "Reflections", href: "/reflections", id: "Reflections", placement: "more" },
  { label: "Contact", href: "/contact", id: "contact", placement: "more" },
];

const mainLinks = NAV_ITEMS.filter((l) => l.placement === "main");
const moreLinks = NAV_ITEMS.filter((l) => l.placement === "more");

const isLinkActive = (link, currentPath) => {
  if (link.children) return link.children.some((c) => c.href === currentPath);
  if (link.href.includes("#")) return false;
  return currentPath === link.href;
};

/* ------------------------------ shared styles ----------------------------- */
const panelBase =
  "origin-top transition-[opacity,transform,visibility] duration-150 ease-out";
const panelState = (open) =>
  open
    ? "visible translate-y-0 opacity-100"
    : "invisible pointer-events-none -translate-y-1 opacity-0";

const navItemClass = (active) =>
  `relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 transition-colors duration-200 ${
    active
      ? "bg-[#2D1C59]/[0.07] font-semibold text-[#2D1C59]"
      : "text-[#586860] hover:text-[#2D1C59]"
  }`;

/* --------------------------------- Avatar --------------------------------- */
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

/* ------------------- Reusable desktop dropdown (Founder + More) ------------------- */
function DesktopDropdown({ label, items, isActive, currentPath, align = "center" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  // chhota delay taaki mouse button se panel tak jaate waqt flicker na ho
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);
  useEffect(() => setOpen(false), [currentPath]);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const alignClass = align === "right" ? "right-0 origin-top-right" : "left-1/2 -translate-x-1/2";

  return (
    <div
      ref={ref}
      className="relative"
      // hover sirf mouse par, touch par tap se toggle
      onPointerEnter={(e) => e.pointerType === "mouse" && openMenu()}
      onPointerLeave={(e) => e.pointerType === "mouse" && closeSoon()}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${navItemClass(isActive)} cursor-pointer`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div className={`absolute top-full z-50 pt-2 ${alignClass} ${panelBase} ${panelState(open)}`}>
        <div
          role="menu"
          aria-hidden={!open}
          className="w-64 rounded-xl border border-[#2D1C59]/10 bg-white p-2 shadow-xl"
        >
          {items.map((child) => {
            const childActive = !child.href.includes("#") && currentPath === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
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
    </div>
  );
}

/* ---------------------------------- Header -------------------------------- */
export default function Header() {
  const currentPath = usePathname() || "/";
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, hydrated } = useSelector((s) => s.auth);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const userMenuRef = useRef(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubOpen(false);
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
    closeMenu();
  }, [currentPath]);

  // user menu: bahar click / Esc
  useEffect(() => {
    const onClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
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

  // desktop size par jaye to mobile menu band
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

  const isMoreActive = moreLinks.some((l) => isLinkActive(l, currentPath));

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-[#2D1C59]/10 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBF9F5]/95 py-2 shadow-sm backdrop-blur-md"
          : "bg-[#FBF9F5] py-2 sm:py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-4">
          {/* Logo (shrink-0: text kabhi cut nahi hoga) */}
          <Link href="/" onClick={closeMenu} className="group flex shrink-0 items-center gap-2 sm:gap-3">
            <img
              src="/assets/aistudio/sinner_being_logo.png"
              alt="Inner Being Wellness logo"
              className="h-11 w-11 shrink-0 rounded-full bg-white/80 object-contain p-0.5 shadow-sm transition-transform group-hover:scale-105 sm:h-12 sm:w-12 xl:h-16 xl:w-16"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-serif text-sm font-bold leading-tight tracking-wider text-[#1E255E] sm:text-base xl:text-lg">
                INNER BEING
              </span>
              <span className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.25em] text-[#C5A265] sm:text-[10px]">
                WELLNESS
              </span>
            </div>
          </Link>

          {/* Desktop nav: sirf main links + More */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center text-sm font-medium lg:flex lg:gap-0.5 xl:gap-2"
          >
            {mainLinks.map((link) => {
              const isActive = isLinkActive(link, currentPath);

              if (link.children) {
                return (
                  <DesktopDropdown
                    key={link.id}
                    label={link.label}
                    items={link.children}
                    isActive={isActive}
                    currentPath={currentPath}
                  />
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={navItemClass(isActive)}
                >
                  {link.label}
                </Link>
              );
            })}

            <DesktopDropdown
              label="More"
              items={moreLinks}
              isActive={isMoreActive}
              currentPath={currentPath}
              align="right"
            />
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
                        className={`h-3.5 w-3.5 text-[#586860] transition-transform duration-200 ${
                          userMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      role="menu"
                      aria-hidden={!userMenuOpen}
                      className={`absolute right-0 top-full z-50 mt-2 w-60 origin-top-right rounded-xl border border-[#2D1C59]/10 bg-white p-2 shadow-xl ${panelBase} ${panelState(
                        userMenuOpen
                      )}`}
                    >
                      <div className="border-b border-[#2D1C59]/10 px-3 pb-2 pt-1">
                        <p className="truncate text-sm font-semibold text-[#2D1C59]">{user.name}</p>
                        <p className="truncate text-xs text-[#586860]">{user.email}</p>
                      </div>
                      <button
                        type="button"
                        role="menuitem"
                        tabIndex={userMenuOpen ? 0 : -1}
                        onClick={handleLogout}
                        className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#586860] transition-colors hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
                      >
                        <LogOut className="h-4 w-4" /> Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[#586860] transition-colors hover:text-[#2D1C59]"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      onClick={closeMenu}
                      className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/5"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Book Session (sm and up) */}
            <div className="hidden whitespace-nowrap sm:block">
              <Button variant="primary" size="sm" href="/contact" onClick={closeMenu}>
                Book Session
              </Button>
            </div>

            {/* Hamburger -> X */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-full p-2 text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/10 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "top-[9px] rotate-45" : "top-[3px]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "top-[9px] -rotate-45" : "top-[15px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet backdrop */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`absolute inset-x-0 top-full -z-10 h-[100dvh] bg-[#1E255E]/20 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-[#2D1C59]/15 bg-[#FAF7F2] px-4 pb-6 pt-3 shadow-xl transition-[opacity,transform,visibility] duration-200 ease-out sm:px-6 lg:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-xl flex-col gap-1.5">
          {NAV_ITEMS.map((link) => {
            const isActive = isLinkActive(link, currentPath);
            const rowClass = `flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
              isActive
                ? "bg-[#2D1C59]/10 font-semibold text-[#2D1C59]"
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
                      className={`h-4 w-4 opacity-50 transition-transform duration-200 ${
                        mobileSubOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                      mobileSubOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#2D1C59]/15 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            tabIndex={mobileSubOpen ? 0 : -1}
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
                    </div>
                  </div>
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
                      <p className="truncate text-sm font-semibold text-[#2D1C59]">{user.name}</p>
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
                    className="rounded-xl border border-[#2D1C59]/20 py-3 text-center text-sm font-medium text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/5"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={closeMenu}
                    className="rounded-xl bg-[#2D1C59] py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#35146E]"
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
    </header>
  );
}

// new updated code 






// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { Menu, X, ArrowRight, ChevronDown, LogOut } from "lucide-react";
// import { logoutUser } from "@/store/authSlice";
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

// function Avatar({ user, size = "h-9 w-9" }) {
//   return user.profile_pic ? (
//     <img
//       src={user.profile_pic}
//       alt={user.name || "Profile"}
//       className={`${size} shrink-0 rounded-full object-cover ring-1 ring-[#2D1C59]/20`}
//       referrerPolicy="no-referrer"
//     />
//   ) : (
//     <span
//       className={`${size} flex shrink-0 items-center justify-center rounded-full bg-[#2D1C59] text-sm font-semibold text-white`}
//     >
//       {user.name?.[0]?.toUpperCase()}
//     </span>
//   );
// }

// export default function Header() {
//   const currentPath = usePathname() || "/";
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { user, hydrated } = useSelector((s) => s.auth);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSubOpen, setMobileSubOpen] = useState(false);
//   const [desktopSubOpen, setDesktopSubOpen] = useState(false);
//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const dropdownRef = useRef(null);
//   const userMenuRef = useRef(null);

//   const closeMenu = () => {
//     setMobileMenuOpen(false);
//     setMobileSubOpen(false);
//     setDesktopSubOpen(false);
//     setUserMenuOpen(false);
//   };

//   // scroll shadow
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // page change par sab band
//   useEffect(() => {
//     setDesktopSubOpen(false);
//     setMobileMenuOpen(false);
//     setMobileSubOpen(false);
//     setUserMenuOpen(false);
//   }, [currentPath]);

//   // bahar click / Esc par dropdowns band
//   useEffect(() => {
//     const onClick = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDesktopSubOpen(false);
//       }
//       if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
//         setUserMenuOpen(false);
//       }
//     };
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setDesktopSubOpen(false);
//         setUserMenuOpen(false);
//         setMobileMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", onClick);
//     document.addEventListener("keydown", onKey);
//     return () => {
//       document.removeEventListener("mousedown", onClick);
//       document.removeEventListener("keydown", onKey);
//     };
//   }, []);

//   // screen desktop size pe jaye to mobile menu band
//   useEffect(() => {
//     const mq = window.matchMedia("(min-width: 1024px)");
//     const onChange = (e) => e.matches && setMobileMenuOpen(false);
//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   // mobile menu khula ho to background scroll lock
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileMenuOpen]);

//   const handleLogout = async () => {
//     await dispatch(logoutUser());
//     closeMenu();
//     router.push("/");
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
//           ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#2D1C59]/10 py-2 sm:py-3"
//           : "bg-[#FBF9F5] border-b border-[#2D1C59]/10 py-2 sm:py-4"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between gap-3 sm:gap-6">
//           {/* Logo */}
//           <Link
//             href="/"
//             onClick={closeMenu}
//             className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
//           >
//             <img
//               src="/assets/aistudio/sinner_being_logo.png"
//               alt="Inner Being Wellness logo"
//               className="h-12 w-12 shrink-0 rounded-full bg-white/80 object-contain p-0.5 shadow-sm transition-transform group-hover:scale-105 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
//               referrerPolicy="no-referrer"
//             />
//             <div className="flex min-w-0 flex-col">
//               <span className="truncate font-serif text-sm font-bold leading-tight tracking-wider text-[#1E255E] sm:text-lg">
//                 INNER BEING
//               </span>
//               <span className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.25em] text-[#C5A265] sm:text-[10px]">
//                 WELLNESS
//               </span>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-8">
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
//                       className={`${linkClass} flex cursor-pointer items-center gap-1`}
//                     >
//                       {link.label}
//                       <ChevronDown
//                         className={`h-3.5 w-3.5 transition-transform ${
//                           desktopSubOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                       {isActive && (
//                         <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#2D1C59]" />
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
//                                     ? "bg-[#2D1C59]/10 font-semibold text-[#2D1C59]"
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
//                     <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#2D1C59]" />
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Right side: auth + CTA + hamburger */}
//           <div className="flex shrink-0 items-center gap-2 sm:gap-3">
//             {/* Auth (desktop only) */}
//             {hydrated && (
//               <div className="hidden lg:block">
//                 {user ? (
//                   <div ref={userMenuRef} className="relative">
//                     <button
//                       type="button"
//                       onClick={() => setUserMenuOpen((v) => !v)}
//                       aria-haspopup="menu"
//                       aria-expanded={userMenuOpen}
//                       className="flex items-center gap-2 rounded-full p-1 pr-3 transition-colors hover:bg-[#2D1C59]/5"
//                     >
//                       <Avatar user={user} />
//                       <span className="max-w-[90px] truncate text-sm font-medium text-[#2D1C59]">
//                         {user.name?.split(" ")[0]}
//                       </span>
//                       <ChevronDown
//                         className={`h-3.5 w-3.5 text-[#586860] transition-transform ${
//                           userMenuOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>

//                     {userMenuOpen && (
//                       <div
//                         role="menu"
//                         className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-[#2D1C59]/10 bg-white p-2 shadow-xl"
//                       >
//                         <div className="border-b border-[#2D1C59]/10 px-3 pb-2 pt-1">
//                           <p className="truncate text-sm font-semibold text-[#2D1C59]">
//                             {user.name}
//                           </p>
//                           <p className="truncate text-xs text-[#586860]">{user.email}</p>
//                         </div>
//                         <button
//                           type="button"
//                           role="menuitem"
//                           onClick={handleLogout}
//                           className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#586860] transition-colors hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
//                         >
//                           <LogOut className="h-4 w-4" /> Logout
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="flex items-center gap-4">
//                     <Link
//                       href="/login"
//                       onClick={closeMenu}
//                       className="text-sm font-medium text-[#586860] transition-colors hover:text-[#2D1C59]"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       href="/signup"
//                       onClick={closeMenu}
//                       className="text-sm font-medium text-[#2D1C59] underline-offset-4 hover:underline"
//                     >
//                       Sign up
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Book Session (sm and up) */}
//             <div className="hidden sm:block">
//               <Button variant="primary" size="sm" href="/contact" onClick={closeMenu}>
//                 Book Session
//               </Button>
//             </div>

//             {/* Hamburger */}
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen((v) => !v)}
//               className="rounded-full p-2 text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/10 lg:hidden"
//               aria-label="Toggle navigation menu"
//               aria-expanded={mobileMenuOpen}
//             >
//               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile / tablet drawer: header ke neeche hi khulta hai, koi fixed offset nahi */}
//       {mobileMenuOpen && (
//         <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-[#2D1C59]/15 bg-[#FAF7F2] px-4 pb-6 pt-3 shadow-xl animate-in slide-in-from-top-2 sm:px-6 lg:hidden">
//           <nav className="mx-auto flex max-w-xl flex-col gap-1.5">
//             {navLinks.map((link) => {
//               const isActive = isLinkActive(link);
//               const rowClass = `px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between w-full text-left ${
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
//                         className={`h-4 w-4 opacity-50 transition-transform ${
//                           mobileSubOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {mobileSubOpen && (
//                       <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-[#2D1C59]/15 pl-3">
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             onClick={closeMenu}
//                             className={`rounded-lg px-3 py-2.5 text-[15px] transition-colors ${
//                               currentPath === child.href
//                                 ? "bg-[#2D1C59]/10 font-semibold text-[#2D1C59]"
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
//                   <ArrowRight className="h-4 w-4 opacity-40" />
//                 </Link>
//               );
//             })}

//             {/* Auth (mobile) */}
//             {hydrated && (
//               <div className="mt-2 border-t border-[#2D1C59]/10 pt-4">
//                 {user ? (
//                   <div className="flex items-center justify-between gap-3 px-1">
//                     <div className="flex min-w-0 items-center gap-3">
//                       <Avatar user={user} size="h-10 w-10" />
//                       <div className="min-w-0">
//                         <p className="truncate text-sm font-semibold text-[#2D1C59]">
//                           {user.name}
//                         </p>
//                         <p className="truncate text-xs text-[#586860]">{user.email}</p>
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="flex shrink-0 items-center gap-1.5 rounded-lg border border-[#2D1C59]/15 px-3 py-2 text-sm text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/5"
//                     >
//                       <LogOut className="h-4 w-4" /> Logout
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-2 gap-2">
//                     <Link
//                       href="/login"
//                       onClick={closeMenu}
//                       className="rounded-lg border border-[#2D1C59]/20 py-3 text-center text-sm font-medium text-[#2D1C59] transition-colors hover:bg-[#2D1C59]/5"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       href="/signup"
//                       onClick={closeMenu}
//                       className="rounded-lg bg-[#2D1C59] py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#35146E]"
//                     >
//                       Sign up
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Book Session (mobile) */}
//             <div className="mt-3">
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