import Header from "../src/components/layout/Header.jsx";
import Footer from "../src/components/layout/Footer.jsx";
import "./globals.css";

export const metadata = {
  title: "Inner Being Wellness | Rewire Within, Live Freely",
  description:
    "Modern holistic yoga, meditation, breathwork and frequency healing designed to support a healthier, more balanced daily existence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FBF9F5] text-[#2A3630] font-sans antialiased selection:bg-[#2D1C59]/15 selection:text-[#2D1C59]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
