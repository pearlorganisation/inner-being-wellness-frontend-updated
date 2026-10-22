"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Header() {
  const currentPath = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", id: "home" },
    { label: "Manifesto", href: "/#manifesto", id: "manifesto" },
    { label: "About us", href: "/about", id: "about" },
    { label: "Product", href: "/freedom-from-resistance", id: "product" },
    { label: "Programs", href: "/offerings", id: "programs" },
    { label: "Defaults", href: "/#four-defaults", id: "defaults" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

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
          {/* Zone 1: Logo & Brand Lockup */}
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

          {/* Zone 2: Navigation Links (matching screenshot) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isHomeActive = currentPath === "/" && link.id === "home";
              const isAboutActive = currentPath === "/about" && link.id === "about";
              const isOfferingsActive =
                (currentPath === "/offerings" || currentPath === "/freedom-from-resistance") &&
                link.id === "programs";
              const isContactActive = currentPath === "/contact" && link.id === "contact";

              const isActive =
                isHomeActive || isAboutActive || isOfferingsActive || isContactActive;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`relative py-1 whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-[#2D1C59] font-semibold"
                      : "text-[#586860] hover:text-[#2D1C59]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2D1C59] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                onClick={closeMenu}
              >
                Book Session
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#2D1C59] hover:bg-[#2D1C59]/8 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF7F2] border-b border-[#2D1C59]/15 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isHomeActive = currentPath === "/" && link.id === "home";
              const isAboutActive = currentPath === "/about" && link.id === "about";
              const isOfferingsActive =
                (currentPath === "/offerings" || currentPath === "/freedom-from-resistance") &&
                link.id === "programs";
              const isContactActive = currentPath === "/contact" && link.id === "contact";
              const isActive =
                isHomeActive || isAboutActive || isOfferingsActive || isContactActive;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#2D1C59]/10 text-[#2D1C59] font-semibold"
                      : "text-[#4A5D54] hover:bg-[#2D1C59]/5 hover:text-[#2D1C59]"
                  }`}
                >
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
