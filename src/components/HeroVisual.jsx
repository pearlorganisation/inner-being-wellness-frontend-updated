// import Image from "next/image";

// /**
//  * HeroVisual — har page ke hero ki khaali right side bharne ke liye.
//  *
//  * Props:
//  *  - image: { src, alt, width?, height? }  -> arch-shaped photo (optional)
//  *  - logo:  { src, alt, width?, height? }  -> floating badge (image ke saath) ya center emblem (image ke bina)
//  *  - className: extra wrapper classes
//  *
//  * Kuch bhi na do to sirf decorative rings + leaves dikhenge.
//  */

// function Leaf({ className = "", style }) {
//   return (
//     <svg
//       viewBox="0 0 64 64"
//       fill="none"
//       aria-hidden="true"
//       className={className}
//       style={style}
//     >
//       <path
//         d="M4 60C4 28 22 6 60 4c0 32-18 54-56 56Z"
//         fill="currentColor"
//         opacity="0.9"
//       />
//       <path
//         d="M6 58C22 42 38 26 56 8"
//         stroke="#FAF7F2"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         opacity="0.55"
//       />
//     </svg>
//   );
// }

// export default function HeroVisual({ image, logo, className = "" }) {
//   return (
//     <div
//       className={`relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-md ${className}`}
//     >
//       <style>{`
//         @keyframes hv-sway { 0%,100% { transform: rotate(var(--r)) translateY(0) } 50% { transform: rotate(calc(var(--r) + 4deg)) translateY(-6px) } }
//         @keyframes hv-spin { to { transform: rotate(360deg) } }
//         @media (prefers-reduced-motion: reduce) { .hv-anim { animation: none !important } }
//       `}</style>

//       {/* soft glow blobs */}
//       <div className="absolute -left-6 top-6 h-2/3 w-2/3 rounded-full bg-[#E4ECE6] blur-3xl" />
//       <div className="absolute -right-4 bottom-0 h-1/2 w-1/2 rounded-full bg-[#F3E6C8] blur-3xl" />

//       {/* rotating dashed gold ring */}
//       <svg
//         viewBox="0 0 200 200"
//         aria-hidden="true"
//         className="hv-anim absolute inset-0 h-full w-full text-[#B88B4A]/50"
//         style={{ animation: "hv-spin 60s linear infinite" }}
//       >
//         <circle
//           cx="100"
//           cy="100"
//           r="96"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="0.6"
//           strokeDasharray="2 5"
//         />
//       </svg>
//       <div className="absolute inset-6 rounded-full border border-[#2D1C59]/10" />

//       {image?.src ? (
//         <>
//           {/* offset gold frame */}
//           <div className="absolute inset-x-10 bottom-0 top-8 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-3xl border border-[#B88B4A]/50" />

//           {/* arch photo */}
//           <div className="absolute inset-x-10 bottom-0 top-8 overflow-hidden rounded-t-[999px] rounded-b-3xl bg-[#E4ECE6] shadow-xl shadow-[#2D1C59]/10">
//             <Image
//               src={image.src}
//               alt={image.alt || ""}
//               width={image.width || 800}
//               height={image.height || 1000}
//               priority
//               sizes="(max-width: 640px) 220px, 400px"
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#13382C]/25 via-transparent to-transparent" />
//           </div>

//           {/* floating logo badge */}
//           {logo?.src && (
//             <div className="absolute -left-1 bottom-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#E9DCBF] bg-white p-2 shadow-lg sm:h-20 sm:w-20">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt || ""}
//                 width={logo.width || 120}
//                 height={logo.height || 120}
//                 className="h-full w-full object-contain"
//               />
//             </div>
//           )}
//         </>
//       ) : (
//         /* image nahi hai -> center emblem */
//         <div className="absolute inset-12 flex items-center justify-center rounded-full border border-[#E9DCBF] bg-white/80 shadow-xl shadow-[#2D1C59]/10 backdrop-blur-sm">
//           {logo?.src ? (
//             <Image
//               src={logo.src}
//               alt={logo.alt || ""}
//               width={logo.width || 400}
//               height={logo.height || 400}
//               priority
//               className="h-3/4 w-3/4 object-contain"
//             />
//           ) : (
//             <span className="font-serif text-6xl text-[#B88B4A]/70">∞</span>
//           )}
//         </div>
//       )}

//       {/* leaves */}
//       <Leaf
//         className="hv-anim absolute -right-2 top-2 h-16 w-16 text-[#2F6F5B] sm:h-20 sm:w-20"
//         style={{ "--r": "20deg", transform: "rotate(20deg)", animation: "hv-sway 8s ease-in-out infinite" }}
//       />
//       <Leaf
//         className="hv-anim absolute right-10 -top-3 h-9 w-9 text-[#13382C] sm:h-12 sm:w-12"
//         style={{ "--r": "-35deg", transform: "rotate(-35deg)", animation: "hv-sway 10s ease-in-out infinite" }}
//       />
//       <Leaf
//         className="hv-anim absolute -left-3 bottom-2 h-14 w-14 text-[#13382C] sm:h-16 sm:w-16"
//         style={{ "--r": "200deg", transform: "rotate(200deg)", animation: "hv-sway 9s ease-in-out infinite" }}
//       />
//       <Leaf
//         className="hv-anim absolute bottom-0 right-14 h-8 w-8 text-[#B88B4A]"
//         style={{ "--r": "120deg", transform: "rotate(120deg)", animation: "hv-sway 11s ease-in-out infinite" }}
//       />
//     </div>
//   );
// }






// updated code 




import Image from "next/image";

/**
 * HeroVisual: inner pages ke hero ki right side.
 *
 * Props:
 *  - image: { src, alt, width?, height? }  -> arch-shaped photo (optional)
 *  - logo:  { src, alt, width?, height? }  -> floating badge (image ke saath) ya center emblem (image ke bina)
 *  - leaves: boolean (default false). CLIENT: leaf graphics distracting the, isliye default off.
 *  - className: extra wrapper classes
 */

function Leaf({ className = "", style }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className} style={style}>
      <path d="M4 60C4 28 22 6 60 4c0 32-18 54-56 56Z" fill="currentColor" opacity="0.9" />
      <path
        d="M6 58C22 42 38 26 56 8"
        stroke="#FAF7F2"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function HeroVisual({ image, logo, leaves = false, className = "" }) {
  return (
    <div
      className={`hero-rise relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-md ${className}`}
      style={{ "--d": "200ms" }}
    >
      <style>{`
        @keyframes hv-sway { 0%,100% { transform: rotate(var(--r)) translateY(0) } 50% { transform: rotate(calc(var(--r) + 4deg)) translateY(-6px) } }
        @keyframes hv-spin { to { transform: rotate(360deg) } }
        @media (prefers-reduced-motion: reduce) { .hv-anim { animation: none !important } }
      `}</style>

      {/* soft glow blobs */}
      <div className="absolute -left-6 top-6 h-2/3 w-2/3 rounded-full bg-[#EDE8F5] blur-3xl" />
      <div className="absolute -right-4 bottom-0 h-1/2 w-1/2 rounded-full bg-[#F3E6C8] blur-3xl" />

      {/* rotating dashed gold ring */}
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="hv-anim absolute inset-0 h-full w-full text-[#B88B4A]/50"
        style={{ animation: "hv-spin 60s linear infinite" }}
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="2 5"
        />
      </svg>
      <div className="absolute inset-6 rounded-full border border-[#2D1C59]/10" />

      {image?.src ? (
        <>
          {/* offset gold frame */}
          <div className="absolute inset-x-10 bottom-0 top-8 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-3xl border border-[#B88B4A]/50" />

          {/* arch photo */}
          <div className="absolute inset-x-10 bottom-0 top-8 overflow-hidden rounded-t-[999px] rounded-b-3xl bg-[#EDE8F5] shadow-xl shadow-[#2D1C59]/10">
            <Image
              src={image.src}
              alt={image.alt || ""}
              width={image.width || 800}
              height={image.height || 1000}
              priority
              sizes="(max-width: 640px) 220px, 400px"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#231754]/25 via-transparent to-transparent" />
          </div>

          {/* floating logo badge (white badge: PNG ka white background yahan chhup jata hai) */}
          {logo?.src && (
            <div className="absolute -left-1 bottom-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#E9DCBF] bg-white p-2 shadow-lg sm:h-20 sm:w-20">
              <Image
                src={logo.src}
                alt={logo.alt || ""}
                width={logo.width || 120}
                height={logo.height || 120}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </>
      ) : (
        /* image nahi hai -> center emblem */
        <div className="absolute inset-12 flex items-center justify-center rounded-full border border-[#E9DCBF] bg-white/80 shadow-xl shadow-[#2D1C59]/10 backdrop-blur-sm">
          {logo?.src ? (
            <Image
              src={logo.src}
              alt={logo.alt || ""}
              width={logo.width || 400}
              height={logo.height || 400}
              priority
              className="h-3/4 w-3/4 object-contain"
            />
          ) : (
            <span className="font-serif text-6xl text-[#B88B4A]/70">∞</span>
          )}
        </div>
      )}

      {/* leaves: sirf tab jab explicitly leaves={true} do */}
      {leaves && (
        <>
          <Leaf
            className="hv-anim absolute -right-2 top-2 h-16 w-16 text-[#2F6F5B] sm:h-20 sm:w-20"
            style={{ "--r": "20deg", transform: "rotate(20deg)", animation: "hv-sway 8s ease-in-out infinite" }}
          />
          <Leaf
            className="hv-anim absolute -left-3 bottom-2 h-14 w-14 text-[#13382C] sm:h-16 sm:w-16"
            style={{ "--r": "200deg", transform: "rotate(200deg)", animation: "hv-sway 9s ease-in-out infinite" }}
          />
        </>
      )}
    </div>
  );
}