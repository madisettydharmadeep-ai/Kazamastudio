import { Coffee, Mail } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-8 overflow-hidden px-5 pb-20 pt-10 text-center"
    >
      <p className="mb-8 text-slate-400">
        Powered by caffeine, curiosity, and too many open tabs.
      </p>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
          <Coffee className="text-lime-700" />
        </div>
        <h2 className="serif-display text-6xl font-semibold leading-none">
          Let&apos;s make it alive.
        </h2>
        <a
          href="mailto:hello@kazama.studio"
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          <Mail size={18} /> hello@kazama.studio
        </a>
      </div>
      <div className="pointer-events-none absolute -bottom-36 left-1/2 h-64 w-[760px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle,#b9e36d_0%,#91cf43_42%,transparent_68%)] opacity-70 blur-sm" />
    </footer>
  );
}
