import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

// Extract data outside the component to keep JSX clean
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
];

const SOCIAL_LINKS = [
  {
    id: "behance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
    href: "#",
    label: "Behance",
  },
  {
    id: "linkedin",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    href: "#",
    label: "LinkedIn",
  },
  {
    id: "dribbble",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
      </svg>
    ),
    href: "#",
    label: "Dribbble",
  }
];

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      // YOUR EXACT STYLES - UNTOUCHED
      className="relative max-w-[95%] mx-auto m-10 rounded-lg text-center flex flex-col items-center justify-end overflow-hidden min-h-[500px]"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/1200x/e2/50/2a/e2502af23214be0c28acc9bd7c627d20.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Darkened gradient overlay to ensure text is readable against the background */}
      <div className="relative z-10 flex flex-col items-center w-full px-6 pb-10 pt-40 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent">
        
        {/* Main CTA Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md">
            Let's build something beautiful.
          </h2>
          <a 
            href="mailto:hello@kazama.studio" 
            className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
          >
            <Mail size={20} className="text-slate-700" />
            hello@kazama.studio
            <ArrowUpRight size={20} className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12 text-lg font-medium text-white/80">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full max-w-5xl border-t border-white/10 mb-8" />

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-6">
          
          <div className="flex flex-col items-center md:items-start text-white/50 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} Kazama Studio. All rights reserved.</p>
            <p className="mt-1">Powered by caffeine and curiosity.</p>
            <p className="mt-2 text-white/40 italic text-center md:text-left max-w-3xl">
              * Disclaimer: Images and illustrations used in this portfolio are sourced from Pinterest for demonstration purposes and do not belong to me.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}