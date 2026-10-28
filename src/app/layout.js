// import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import "./globals.css";

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   variable: "--font-cormorant",
//   display: "swap",
// });

// const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   variable: "--font-jakarta",
//   display: "swap",
// });

// const description =
//   "Modern holistic yoga, meditation, breathwork and frequency healing designed to support a healthier, more balanced daily existence.";

// export const metadata = {
//   title: {
//     default: "Inner Being Wellness | Rewire Within, Live Freely",
//     template: "%s | Inner Being Wellness",
//   },
//   description,
//   openGraph: {
//     title: "Inner Being Wellness | Rewire Within, Live Freely",
//     description,
//     type: "website",
//   },
//   twitter: { card: "summary_large_image" },
// };

// export const viewport = {
//   themeColor: "#35146E",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       data-scroll-behavior="smooth"
//       className={`${cormorant.variable} ${jakarta.variable}`}
//     >
//       <body className="font-sans bg-[#FBF9F5] text-[#2A3630] antialiased selection:bg-[#2D1C59]/15 selection:text-[#2D1C59]">
//         <div className="min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-1 w-full">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }



// new updated code 





import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoreProvider from "@/store/StoreProvider"; // 👈 NEW
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Modern holistic yoga, meditation, breathwork and frequency healing designed to support a healthier, more balanced daily existence.";

export const metadata = {
  title: {
    default: "Inner Being Wellness | Rewire Within, Live Freely",
    template: "%s | Inner Being Wellness",
  },
  description,
  openGraph: {
    title: "Inner Being Wellness | Rewire Within, Live Freely",
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#35146E",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jakarta.variable}`}
    >
      <body className="font-sans bg-[#FBF9F5] text-[#2A3630] antialiased selection:bg-[#2D1C59]/15 selection:text-[#2D1C59]">
        {/* 👇 NEW: Header, main, Footer sab ko wrap karo */}
        <StoreProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}