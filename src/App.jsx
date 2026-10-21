import { useState, useEffect } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import OfferingsPage from "./pages/offerings/OfferingsPage.jsx";
import FreedomPage from "./pages/freedom/FreedomPage.jsx";
import ThoughtsPage from "./pages/thoughts/ThoughtsPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");
  const [initialInterest, setInitialInterest] = useState("");

  // Sync state with window.location
  useEffect(() => {
    const syncRoute = () => {
      const path = window.location.pathname || "/";
      const search = window.location.search || "";
      const params = new URLSearchParams(search);
      const interest = params.get("interest") || "";

      setCurrentPath(path);
      setInitialInterest(interest);

      // Handle anchor scroll if present
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    syncRoute();
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const handleNavigate = (to) => {
    let cleanPath = to;
    let queryInterest = "";

    if (to.includes("?")) {
      const parts = to.split("?");
      cleanPath = parts[0];
      const params = new URLSearchParams(parts[1]);
      queryInterest = params.get("interest") || "";
    } else if (to.includes("#")) {
      cleanPath = to.split("#")[0] || "/";
    }

    if (window.location.pathname !== cleanPath || to.includes("#") || to.includes("?")) {
      window.history.pushState({}, "", to);
    }

    setCurrentPath(cleanPath || "/");
    setInitialInterest(queryInterest);

    if (to.includes("#")) {
      const hashId = to.split("#")[1];
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "/offerings":
        return <OfferingsPage onNavigate={handleNavigate} />;
      case "/freedom-from-resistance":
      case "/freedom":
        return <FreedomPage onNavigate={handleNavigate} />;
      case "/thoughts":
        return <ThoughtsPage onNavigate={handleNavigate} />;
      case "/contact":
        return (
          <ContactPage
            initialInterest={initialInterest}
            onNavigate={handleNavigate}
          />
        );
      case "/":
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2A3630] font-sans selection:bg-[#2D1C59]/15 selection:text-[#2D1C59]">
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
      <main key={currentPath} className="flex-1 w-full animate-fade-in">
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
