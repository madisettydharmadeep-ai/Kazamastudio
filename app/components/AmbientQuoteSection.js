import React from "react";

export default function AmbientQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-6 py-32 sm:py-44">
      
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[0%] h-[280px] w-[280px] rounded-full bg-amber-100/40 blur-3xl" />

      {/* subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      />

      {/* floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-slate-300/50" />
        <div className="absolute left-[70%] top-[28%] h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400/40" />
        <div className="absolute left-[30%] bottom-[18%] h-2 w-2 animate-pulse rounded-full bg-amber-200/50" />
        <div className="absolute right-[14%] bottom-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-200/40" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        
        {/* tiny label */}
        <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
          Somewhere Between
        </p>

        {/* main quote */}
        <h2
          className="
            serif-display
            max-w-5xl
            text-5xl
            leading-[0.95]
            tracking-[-0.04em]
            text-slate-900
            sm:text-7xl
            md:text-8xl
          "
        >
          machine learning
          <br />
          and midnight playlists.
        </h2>

        {/* divider */}
        <div className="mt-14 h-px w-20 bg-slate-300/70" />

        {/* tiny poetic line */}
        <p
          className="
            mt-10
            max-w-md
            text-sm
            leading-relaxed
            text-slate-500
            sm:text-[15px]
          "
        >
          things made slowly, with too much care.
        </p>
      </div>
    </section>
  );
}