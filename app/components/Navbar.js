"use client";

import { useState } from "react";
import { MessageCircle, Sparkle, Menu, X } from "lucide-react";

const navLinkClass =
  "nav-link relative inline-flex items-center gap-2 py-0.5 text-sm font-medium text-slate-600 transition-transform duration-300 hover:-translate-y-0.5 hover:text-slate-900";

const brandClass =
  "nav-link relative inline-flex items-center gap-2 mb-1 transition-transform duration-300 hover:-translate-y-0.5 brand-script text-xl text-slate-800";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const openMessage = () => {
    setIsOpen(false);
    setIsMessageOpen(true);
  };

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
          <a href="#story" className={navLinkClass}>
            About
          </a>
          <button type="button" onClick={openMessage} className={navLinkClass}>
            <Sparkle size={14} /> Goal
          </button>
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
          <a
            href="#work"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Work
          </a>
          <a
            href="#story"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            About
          </a>
          <a
            href="#currently"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            Currently
          </a>
          <div className="my-1 h-px w-full bg-slate-200/60" />
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={navLinkClass}
          >
            <Sparkle size={14} fill="currentColor" /> Let's Connect
          </a>
          <button type="button" onClick={openMessage} className={navLinkClass}>
            <Sparkle size={14} /> Goal
          </button>
        </div>
      )}

      {isMessageOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#2d2926]/30 px-4 py-8 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="goals-message-title"
          onClick={() => setIsMessageOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-[#e8e2da] bg-[#fffbf7] p-5 shadow-[0_18px_55px_rgba(45,41,38,0.18)] sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsMessageOpen(false)}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2da] bg-white text-[#6b6560] transition hover:-translate-y-0.5 hover:text-[#2d2926]"
              aria-label="Close message"
            >
              <X size={16} />
            </button>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8e2da] bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#6b6560] shadow-sm">
              <Sparkle
                size={13}
                className="text-[#e8837c]"
                fill="currentColor"
              />
              Slow and steady
            </div>

            <h2
              id="goals-message-title"
              className="serif-display mb-3 pr-8 text-3xl leading-tight text-[#4a3f35]"
            >
              A little note to future me
            </h2>

            <div className="space-y-3 text-sm leading-6 text-[#6b6560]">
              <p>
                Grow to at least 500 Instagram followers, without rushing it.
                Keep showing up slowly, steadily, and honestly.
              </p>
              <p>
                Share my websites with more and more people, so the work starts
                feeling real and gives me that quiet sense of accomplishment.
              </p>
              <p>
                Grind DSA and switch to a better job. This job is good, and it
                gives me time for freelance projects, but staying at home has
                started making every day feel the same.
              </p>
              <p>
                I think I need to try something different, then weigh what
                actually feels best for me.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-[#e8e2da]" />
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[#a8a29e]">
              Built with patience, curiosity, and small daily reps.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
