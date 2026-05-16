"use client";

import { useState } from "react";
import { Sparkle, Star, Menu, X } from "lucide-react";

const navLinkClass =
  "nav-link relative inline-flex items-center gap-2 py-0.5 text-sm font-medium text-slate-600 transition-transform duration-300 hover:-translate-y-0.5 hover:text-slate-900";

const brandClass =
  "nav-link relative inline-flex items-center gap-2 mb-1 transition-transform duration-300 hover:-translate-y-0.5 brand-script text-xl text-slate-800";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-0">
      {/* Top Bar */}
      <nav className="mx-auto flex w-full max-w-[min(580px,100%)] items-center justify-between rounded-lg border border-black/20 bg-white px-5 py-2 md:px-6 md:py-1.5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all">
        
        {/* Desktop Layout */}
        <div className="hidden w-full items-center justify-between md:flex">
          <a href="#contact" className={navLinkClass}>
            <Sparkle size={14} fill="currentColor" /> Let's Connect
          </a>
          <a href="#work" className={navLinkClass}>
            Work
          </a>
          <a href="#" className={brandClass}>
            kazama
          </a>
          <a href="#about" className={navLinkClass}>
            About
          </a>
          <a href="#resume" className={navLinkClass}>
            <Sparkle size={14} /> Resume
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between md:hidden">
          <a href="#" className={brandClass}>
            kazama
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mx-auto mt-2 flex w-full max-w-[min(580px,100%)] flex-col gap-4 rounded-lg border border-black/20 bg-white p-5 shadow-lg backdrop-blur-md md:hidden animate-fadeIn">
          <a href="#work" onClick={() => setIsOpen(false)} className={navLinkClass}>
            Work
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className={navLinkClass}>
            About
          </a>
          <div className="my-1 h-px w-full bg-slate-200/60" />
          <a href="#contact" onClick={() => setIsOpen(false)} className={navLinkClass}>
            <Sparkle size={14} fill="currentColor" /> Let&apos;s Connect
          </a>
          <a href="#resume" onClick={() => setIsOpen(false)} className={navLinkClass}>
            <Sparkle size={14} /> Resume
          </a>
        </div>
      )}
    </header>
  );
}
