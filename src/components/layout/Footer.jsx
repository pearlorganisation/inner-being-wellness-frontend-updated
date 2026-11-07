import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Mail, Clock, MapPin } from "lucide-react";
import { jankiData } from "@/data/janki";
import Reveal from "@/components/ui/Reveal";

const linkClass =
  "relative inline-block py-1 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#E8A948] after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none";

const headingClass =
  "mb-4 font-serif text-sm font-semibold uppercase tracking-widest text-[#E8A948]";

export default function Footer() {
  const { footer, brand } = siteData;

  return (
    <footer className="border-t border-[#2D1C59]/30 bg-[#1A103F] pb-10 pt-12 text-[#DCE2DE] sm:pb-12 sm:pt-16">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 border-b border-[#2C1F56] pb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand Column */}
          <Reveal className="min-w-0 space-y-5 md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={brand.logoImage}
                alt="Inner Being Wellness logo"
                className="h-12 w-12 shrink-0 rounded-full bg-white/10 object-contain p-1"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-white">
                  INNER BEING
                </span>
                <span className="font-sans text-[13px] font-semibold uppercase leading-none tracking-[0.25em] text-[#E8A948]">
                  WELLNESS
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#C1CAD4]">
              Fix the Being first, and the Doing will naturally follow.
            </p>
            <p className="max-w-sm text-xs leading-relaxed text-[#9DA6B8]">
              We blend deep inner awareness with modern frequency technology to
              clear blockages, restore biological equilibrium, and align your
              energy state across specialized dimensions.
            </p>

            {/* Two practitioners */}
            <div className="grid max-w-md grid-cols-1 gap-5 pt-2 sm:grid-cols-2">
              <Link href="/about" className="group block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-[#8BAAA0]">
                  Managing Director, Jusoor Facility Management
                </span>
                <span className="text-sm font-medium text-white group-hover:underline">
                  Muazzam Abdul Rehman
                </span>
              </Link>
              <Link href="/janki" className="group block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-[#8BAAA0]">
                  {jankiData.role}
                </span>
                <span className="text-sm font-medium text-white group-hover:underline">
                  {jankiData.name}
                </span>
              </Link>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={100} className="min-w-0">
            <h4 className={headingClass}>Quick Links</h4>
            <ul className="space-y-1.5 text-sm text-[#B3BDCC]">
              {footer.columns[0].links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Offerings */}
          <Reveal delay={200} className="min-w-0">
            <h4 className={headingClass}>Offerings</h4>
            <ul className="space-y-1.5 text-sm text-[#B3BDCC]">
              {footer.columns[1].links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contact Details */}
          <Reveal delay={300} className="min-w-0">
            <h4 className={headingClass}>Direct Contact</h4>
            <div className="space-y-3.5 text-sm text-[#B3BDCC]">
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A948]" />
                <div className="min-w-0">
                  <span className="block text-xs text-[#8BAAA0]">Email Enquiries</span>
                  <a
                    href="mailto:hello@innerbeingwellness.com"
                    className="break-all text-xs font-medium text-white hover:underline sm:text-sm"
                  >
                    hello@innerbeingwellness.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A948]" />
                <div>
                  <span className="block text-xs text-[#8BAAA0]">Response Window</span>
                  <span className="text-xs sm:text-sm">Within 2 working days</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A948]" />
                <div>
                  <span className="block text-xs text-[#8BAAA0]">Location</span>
                  <span className="text-xs sm:text-sm">Abu Dhabi & Dubai, UAE</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Disclaimer & Copyright */}
        <Reveal className="space-y-4 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-[#8B96AA]">
            <strong className="text-[#C1CAD4]">Wellness Notice: </strong>
            {footer.wellnessDisclaimer}
          </p>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#2C1F56] pt-4 text-center text-xs text-[#8B96AA] sm:flex-row sm:text-left">
            <div>
              © 2026 Inner Being Wellness. Fix the Being first, and the Doing will
              naturally follow.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footer.legalLinks.map((item, idx) => (
                <a key={idx} href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}