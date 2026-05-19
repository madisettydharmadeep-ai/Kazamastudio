import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

// Extract data outside the component to keep JSX clean
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#story" },
  { label: "Currently", href: "#currently" },
  { label: "Resume", href: "#resume" },
];

const SOCIAL_LINKS = [
  {
    id: "instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
    href: "https://www.instagram.com/kazama_studio/",
    label: "Instagram",
  },
  {
    id: "twitter",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/Bot_code_2003",
    label: "X (Twitter)",
  }
];

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      // YOUR EXACT STYLES - UNTOUCHED
      className="relative max-w-full sm:max-w-[98%] mx-auto mt-10 sm:m-10 sm:rounded-lg text-center flex flex-col items-center justify-end overflow-hidden min-h-[500px]"
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
        <div className="flex flex-col items-center mb-16 w-full max-w-full px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-md text-center">
            Let's build something beautiful.
          </h2>
          <a 
            href="mailto:futurepiratekingxx@gmail.com" 
            className="group flex items-center gap-2 sm:gap-3 bg-white text-slate-900 px-4 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-xs sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] max-w-full overflow-hidden"
          >
            <Mail size={16} className="text-slate-700 shrink-0" />
            <span className="truncate">futurepiratekingxx@gmail.com</span>
            <ArrowUpRight size={16} className="text-slate-400 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-sm sm:text-base md:text-lg font-medium text-white/80">
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
            <p className="mt-2 text-white/40 italic text-center md:text-left max-w-3xl text-[10px] sm:text-xs">
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