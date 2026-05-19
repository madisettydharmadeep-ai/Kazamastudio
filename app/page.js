"use client";

import { useEffect, useState } from "react";
import ContactFooter from "./components/ContactFooter";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PixelLoader from "./components/PixelLoader";
import PortfolioStyles from "./components/PortfolioStyles";
import SideWorks from "./components/SideWorks";
import StorySection from "./components/StorySection";
import WorkSection from "./components/WorkSection";
import CurrentlySection from "./components/CurrentlySection";
import FortuneCookie from "./components/FortuneCookie";
import StayedSection from "./components/StayedSection";
import AmbientQuoteSection from "./components/AmbientQuoteSection";

export default function KazamaStudio() {
  const [showLoader, setShowLoader] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fade out at 2800ms
    const fadeTimer = window.setTimeout(() => setIsFadingOut(true), 2800);
    // Completely unmount at 3800ms
    const removeTimer = window.setTimeout(() => setShowLoader(false), 3800);
    
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f7f5] text-slate-950">
      <PortfolioStyles />
      
      {showLoader && (
        <div 
          className={`fixed inset-0 z-50 transition-all duration-[800ms] ease-in-out ${
            isFadingOut ? "opacity-0 pointer-events-none blur-md scale-[1.02]" : "opacity-100 blur-none scale-100"
          }`}
        >
          <PixelLoader />
        </div>
      )}

      {/* Navbar moved outside the transformed container so it stays fixed relative to the viewport */}
      <div
        className={`relative z-50 transition-opacity duration-[1200ms] ease-out delay-[400ms] ${
          isFadingOut ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
      </div>

      <div 
        className={`page-shell transition-all duration-[1200ms] ease-out delay-[400ms] ${
          isFadingOut ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
        }`}
      >
        <HeroSection />
        <StorySection />
        <CurrentlySection />
        {/* <AmbientQuoteSection /> */}
        <WorkSection />
        <FortuneCookie />
        {/* <StayedSection /> */}
        <ContactFooter />
      </div>
    </main>
  );
}
