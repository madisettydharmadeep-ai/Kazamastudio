"use client";

import { useState } from "react";
import { Flower } from "lucide-react";
import FloatingCard from "./StickyNote";

export default function HeroSection() {
  const [nameCursor, setNameCursor] = useState({
    isVisible: false,
    x: 0,
    y: 0,
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#2f66bb_0%,#3f78c9_30%,#78a9d9_64%,#eef5fb_92%,#f7f7f5_100%)] px-5 text-white">
      {/* Structural Cloud Animation Keyframes */}
      <style>{`
        @keyframes drift-right {
          0% { transform: translate3d(-100%, 0, 0); opacity: 0; }
          10% { opacity: 0.22; }
          90% { opacity: 0.22; }
          100% { transform: translate3d(100vw, 0, 0); opacity: 0; }
        }
        @keyframes drift-left {
          0% { transform: translate3d(100vw, 0, 0); opacity: 0; }
          10% { opacity: 0.15; }
          90% { opacity: 0.15; }
          100% { transform: translate3d(-100%, 0, 0); opacity: 0; }
        }
        .cloud-track-1 {
          animation: drift-right 75s linear infinite;
        }
        .cloud-track-2 {
          animation: drift-left 90s linear infinite;
          animation-delay: -25s; /* Pre-seeds the cloud into view on mount */
        }
      `}</style>

      {/* Decorative background blur */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-blue-400/20 blur-[120px]" />

      {/* ── ATMOSPHERIC DRIFTING CLOUDS LAYER ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen select-none">
        {/* Cloud 1: Drifts slowly from Left to Right */}
        <div className="cloud-track-1 absolute top-[18%] left-0 w-[380px] h-auto text-white">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-full h-full opacity-70"
          >
            <path d="M416 128A96 96 0 0 0 256 160a128 128 0 0 0 -224 96c0 10.7 1.3 21 3.8 31A96 96 0 0 0 96 448h320a96 96 0 0 0 0 -192 96 96 0 0 0 0 -128z" />
          </svg>
        </div>

        {/* Cloud 2: Drifts slowly from Right to Left at a deeper z-index/altitude */}
        <div className="cloud-track-2 absolute top-[42%] left-0 w-[460px] h-auto text-white">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-full h-full opacity-50"
          >
            <path d="M448 320a64 64 0 0 0 -34.8-57.2A104 104 0 0 0 224 184a72 72 0 0 0 -134.4 32.8A80 80 0 0 0 80 368h304a64 64 0 0 0 64 -64z" />
          </svg>
        </div>
      </div>

      {/* Centre content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center text-center">
        <p
          className="mb-10 text-[13px] font-medium uppercase tracking-widest text-white/80"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Greetings, traveler. The path has led you here.
        </p>

        <div className="relative inline-flex justify-center">
          <h1
            className="serif-display max-w-4xl cursor-none text-[14vw] font-semibold leading-[0.85] tracking-[-0.04em] sm:text-[78px] md:text-[104px] lg:text-[128px]"
            onMouseEnter={(event) =>
              setNameCursor({
                isVisible: true,
                x: event.clientX,
                y: event.clientY,
              })
            }
            onMouseMove={(event) =>
              setNameCursor({
                isVisible: true,
                x: event.clientX,
                y: event.clientY,
              })
            }
            onMouseLeave={() =>
              setNameCursor((cursor) => ({ ...cursor, isVisible: false }))
            }
          >
            カザマスタジオ
          </h1>
          <span
            className={`pointer-events-none fixed z-[80] rounded-md border border-white/30 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-900 shadow-[0_12px_35px_rgba(15,23,42,0.18)] transition-opacity duration-150 ${
              nameCursor.isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: nameCursor.x,
              top: nameCursor.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            Kazama Studio
          </span>
        </div>

        <div className="mt-6 h-px w-12 bg-white/40" />

        <p
          className="mt-8 max-w-[30rem] text-[16px] leading-relaxed text-white/90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We build calm, meaningful digital spaces that invite you to slow down.
          Crafting simple, quiet beauty for your everyday experience.
        </p>

        {/* CTA */}
        <div className="group relative mt-12">
          <a
            href="#work"
            className="relative z-10 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-12 py-3 text-md font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See our work
            <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
              <Flower size={18} className="fill-current" />
            </span>
          </a>
          <div className="absolute inset-0 -z-10 scale-75 bg-white/20 blur-xl transition-transform group-hover:scale-150" />
        </div>

        {/* ── Floating image cards (draggable) ── */}

        <FloatingCard
          image="https://i.pinimg.com/736x/a0/7b/d1/a07bd1befcf661520f4902f471359982.jpg"
          initialX="78%"
          initialY="80%"
          rotateDeg={-8}
          label="current status"
        >
          Jet engines by day, gentle interfaces by night.
        </FloatingCard>

        <FloatingCard
          image="https://i.pinimg.com/736x/24/2c/1a/242c1a960184aff25b7d367399b24294.jpg"
          initialX="-2%"
          initialY="12%"
          rotateDeg={10}
          label="now playing"
        >
          Atmospheric lo-fi &amp; the sound of distant rain.
        </FloatingCard>

        <FloatingCard
          image="https://i.pinimg.com/736x/58/e5/de/58e5decaf69b3f073fc667b24b0bd939.jpg"
          initialX="80%"
          initialY="12%"
          rotateDeg={-5}
          label="origin"
        >
          A country bumpkin building digital gardens in the big city.
        </FloatingCard>

        <FloatingCard
          image="https://i.pinimg.com/736x/41/85/67/4185673ca1ac9363b65adb9c0c92cf3f.jpg"
          initialX="2%"
          initialY="82%"
          rotateDeg={6}
          label="slow life"
        >
          Slow living isn&apos;t a pace — it&apos;s an intention.
        </FloatingCard>
      </div>
    </section>
  );
}
