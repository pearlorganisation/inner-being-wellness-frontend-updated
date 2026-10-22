// import Link from "next/link";
// import { siteData } from "@/data/siteData";
// import { Mail, Clock, MapPin, Heart } from "lucide-react";

// export default function Footer() {
//   const { footer, brand } = siteData;

//   return (
//     <footer className="bg-[#1A103F] text-[#DCE2DE] border-t border-[#2D1C59]/30 pt-16 pb-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-[#2C1F56]">
//           {/* Brand Column */}
//           <div className="lg:col-span-2 space-y-5">
//             <div className="flex items-center gap-3">
//               <img
//                 src={brand.logoImage}
//                 alt="Inner Being Wellness logo"
//                 className="w-12 h-12 object-contain rounded-full bg-white/10 p-1"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="flex flex-col">
//                 <span className="text-xl font-serif font-bold tracking-wider text-white">
//                   INNER BEING
//                 </span>
//                 <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#E8A948] uppercase leading-none">
//                   WELLNESS
//                 </span>
//               </div>
//             </div>
//             <p className="text-[#C1CAD4] text-sm leading-relaxed max-w-sm">
//               {brand.tagline}
//             </p>
//             <p className="text-[#9DA6B8] text-xs leading-relaxed max-w-sm">
//               Blending Bioenergetic Healing, Modern Frequencies, Somatic Yoga,
//               and Conscious Awareness for a Healthier, Calmer and More Aligned You.
//             </p>
//             <div className="pt-2">
//               <span className="text-xs text-[#8BAAA0] uppercase tracking-wider block mb-1">
//                 Founder & Transformation Guide
//               </span>
//               <span className="text-sm font-medium text-white">
//                 {brand.founderName}
//               </span>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-serif uppercase tracking-widest text-[#E8A948] mb-4 font-semibold">
//               Quick Links
//             </h4>
//             <ul className="space-y-2.5 text-sm text-[#B3BDCC]">
//               {footer.columns[0].links.map((link, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={link.href}
//                     className="hover:text-white transition-colors block py-0.5"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Offerings */}
//           <div>
//             <h4 className="text-sm font-serif uppercase tracking-widest text-[#E8A948] mb-4 font-semibold">
//               Offerings
//             </h4>
//             <ul className="space-y-2.5 text-sm text-[#B3BDCC]">
//               {footer.columns[1].links.map((link, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={link.href}
//                     className="hover:text-white transition-colors block py-0.5"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Details */}
//           <div>
//             <h4 className="text-sm font-serif uppercase tracking-widest text-[#E8A948] mb-4 font-semibold">
//               Direct Contact
//             </h4>
//             <div className="space-y-3.5 text-sm text-[#B3BDCC]">
//               <div className="flex items-start gap-2.5">
//                 <Mail className="w-4 h-4 text-[#E8A948] mt-0.5 shrink-0" />
//                 <div>
//                   <span className="block text-xs text-[#8BAAA0]">Email Enquiries</span>
//                   <a
//                     href="mailto:hello@innerbeingwellness.com"
//                     className="text-white hover:underline text-xs sm:text-sm font-medium break-all"
//                   >
//                     hello@innerbeingwellness.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2.5">
//                 <Clock className="w-4 h-4 text-[#E8A948] mt-0.5 shrink-0" />
//                 <div>
//                   <span className="block text-xs text-[#8BAAA0]">Response Window</span>
//                   <span className="text-xs sm:text-sm">Within 2 working days</span>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2.5">
//                 <MapPin className="w-4 h-4 text-[#E8A948] mt-0.5 shrink-0" />
//                 <div>
//                   <span className="block text-xs text-[#8BAAA0]">Format</span>
//                   <span className="text-xs sm:text-sm">Online & In-person</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Disclaimer & Copyright */}
//         <div className="pt-8 space-y-4">
//           <p className="text-xs text-[#8B96AA] leading-relaxed max-w-4xl">
//             <strong className="text-[#C1CAD4]">Wellness Notice: </strong>
//             {footer.wellnessDisclaimer}
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2C1F56] text-xs text-[#8B96AA]">
//             <div>{footer.copyright}</div>
//             <div className="flex items-center gap-6">
//               {footer.legalLinks.map((item, idx) => (
//                 <a
//                   key={idx}
//                   href={item.href}
//                   className="hover:text-white transition-colors"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }








import Link from "next/link";
import { siteData } from "@/data/siteData";
import { Mail, Clock, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const { footer, brand } = siteData;

  return (
    <footer className="bg-[#1A103F] text-[#DCE2DE] border-t border-[#2D1C59]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-[#2C1F56]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={brand.logoImage}
                alt="Inner Being Wellness logo"
                className="w-12 h-12 object-contain rounded-full bg-white/10 p-1"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wider text-white">
                  INNER BEING
                </span>
                <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#E8A948] uppercase leading-none">
                  WELLNESS
                </span>
              </div>
            </div>
            <p className="text-[#C1CAD4] text-sm leading-relaxed max-w-sm">
              Fix the Being first, and the Doing will naturally follow.
            </p>
            <p className="text-[#9DA6B8] text-xs leading-relaxed max-w-sm">
              We blend deep inner awareness with modern frequency technology to
              clear blockages, restore biological equilibrium, and align your
              energy state across specialized dimensions.
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#8BAAA0] uppercase tracking-wider block mb-1">
                Managing Director, Jusoor Facility Management
              </span>
              <span className="text-sm font-medium text-white">
                Muazzam Abdul Rehman
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-serif uppercase tracking-widest text-[#E8A948] mb-4 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B3BDCC]">
              {footer.columns[0].links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="text-sm font-serif uppercase tracking-widest text-[#E8A948] mb-4 font-semibold">
              Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B3BDCC]">
              {footer.columns[1].links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-serif uppercase tracking-widest text-[#E8A948] mb-4 font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm text-[#B3BDCC]">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E8A948] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-[#8BAAA0]">Email Enquiries</span>
                  <a
                    href="mailto:hello@innerbeingwellness.com"
                    className="text-white hover:underline text-xs sm:text-sm font-medium break-all"
                  >
                    hello@innerbeingwellness.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E8A948] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-[#8BAAA0]">Response Window</span>
                  <span className="text-xs sm:text-sm">Within 2 working days</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8A948] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-[#8BAAA0]">Location</span>
                  <span className="text-xs sm:text-sm">Abu Dhabi & Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-xs text-[#8B96AA] leading-relaxed max-w-4xl">
            <strong className="text-[#C1CAD4]">Wellness Notice: </strong>
            {footer.wellnessDisclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2C1F56] text-xs text-[#8B96AA]">
            <div>
              © 2026 Inner Being Wellness (Muazzam Abdul Rehman). Fix the Being
              first, and the Doing will naturally follow.
            </div>
            <div className="flex items-center gap-6">
              {footer.legalLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}