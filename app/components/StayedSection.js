"use client";

import { useState } from "react";
import { Coffee } from "lucide-react";

export default function StayedSection() {
  // Starting with a static number to simulate previous visitors
  const [coffeeCount, setCoffeeCount] = useState(1892);
  const [hasSipped, setHasSipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSip = () => {
    if (hasSipped) return; // Only allow one sip per visit
    
    setIsAnimating(true);
    setCoffeeCount((prev) => prev + 1);
    setHasSipped(true);
    
    // Reset the active click animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  return (
    // Outer wrapper to center the card
    <section className="flex min-h-[60vh] w-full items-center justify-center p-6 sm:p-12">
      
      {/* The Wider Horizontal Card with rounded-lg */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-16 overflow-hidden rounded-lg bg-[#fafaf8] px-8 py-16 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.03] sm:px-16 md:flex-row md:py-24 lg:px-24">
        
        {/* Ambient glow anchored to the right side (behind the cup) */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-amber-100/50 blur-[100px]" />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* Continuous Steam Animation CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes steam {
              0% { transform: translateY(0) scaleX(1); opacity: 0; }
              20% { opacity: 0.55; }
              100% { transform: translateY(-70px) scaleX(2.2); opacity: 0; }
            }
            .steam {
              animation: steam 3.5s ease-out infinite;
              background: linear-gradient(to top, rgba(160, 140, 125, 0.5), transparent);
              filter: blur(2.5px);
              pointer-events: none;
            }
            .steam:nth-child(2) { animation-delay: 1.2s; }
            .steam:nth-child(3) { animation-delay: 2.4s; }
          `,
          }}
        />

        {/* Left Side: Content & Gratitude */}
        <div className="relative z-10 flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
          
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-amber-900/10 bg-amber-50/50 px-4 py-1.5 backdrop-blur-sm">
            <Coffee size={12} className="text-amber-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-800/80">
              Before You Go
            </span>
          </div>

          {/* Title */}
          <h2 className="serif-display text-4xl leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            You stayed
            <br />
            <span className="text-slate-400">this long?</span>
          </h2>

          {/* Divider */}
          <div className="mt-8 h-px w-12 bg-slate-200 md:w-16" />

          {/* Message */}
          <p className="mt-8 text-[15px] leading-relaxed text-slate-500 sm:text-base">
  Thanks for wandering this far.
  <br className="mt-4 block content-['']" />
  Take a breath, and tap the cup to join the others who paused here today.
</p>
        </div>

        {/* Right Side: The Visual (Clickable Coffee Cup) */}
        <div className="relative z-10 flex shrink-0 flex-col items-center justify-center md:pr-12">
          
          {/* Permanent warm glow around the cup */}
          <div className="absolute top-0 h-40 w-40 scale-125 rounded-full bg-amber-200/30 blur-2xl" />

          {/* Interactive Cup Area */}
          <div 
            onClick={handleSip}
            role="button"
            tabIndex={0}
            aria-label="Drink coffee"
            className={`
              relative flex flex-col items-center justify-center transition-all duration-300 ease-out
              ${!hasSipped ? "cursor-pointer hover:-translate-y-2 hover:drop-shadow-xl" : "cursor-default"}
              ${isAnimating ? "scale-95" : "scale-100"}
            `}
          >
            {/* Continuous Steam */}
            <div className="absolute top-[-45px] z-20 flex gap-3.5 justify-center">
              <div className="steam h-14 w-3.5 rounded-full" />
              <div className="steam h-22 w-4 rounded-full" />
              <div className="steam h-11 w-3 rounded-full" />
            </div>

            {/* Coffee Image */}
            <div className="relative z-10 w-44 h-44 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-slate-100">
              <img
                src="/coffee.jpg"
                alt="Cozy Coffee"
                className="w-full h-full object-cover"
              />
              {/* Soft overlay when sipped */}
              {hasSipped && (
                <div className="absolute inset-0 bg-amber-950/20 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="rounded-full bg-white/90 px-3.5 py-1 text-xs font-bold text-amber-800 shadow-md">
                    Sipped ☕
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Counter Status */}
          <div className="mt-12 text-center h-8">
            <p className="text-[13px] font-medium tracking-wide text-slate-500 transition-opacity duration-300">
              {hasSipped ? (
                <span className="text-amber-700">
                  You and {coffeeCount.toLocaleString()} others took a pause.
                </span>
              ) : (
                <span>
                  {coffeeCount.toLocaleString()} people paused here.
                </span>
              )}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}