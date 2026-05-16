import { Flower } from "lucide-react";
import FloatingCard from "./StickyNote";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#2f66bb_0%,#3f78c9_30%,#78a9d9_64%,#eef5fb_92%,#f7f7f5_100%)] px-5 text-white">
      {/* Decorative blur */}
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-blue-400/20 blur-[120px]" />

      {/* Centre content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center text-center">
        <p 
          className="mb-4 text-[13px] font-medium uppercase tracking-widest text-white/80"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Hey, welcome — glad you&apos;re here.
        </p>

        <h1 className="serif-display max-w-4xl text-[16vw] font-semibold leading-[0.85] tracking-[-0.04em] sm:text-[90px] md:text-[120px] lg:text-[150px]">
          Kazama Studio
        </h1>

        <div className="mt-6 h-px w-12 bg-white/40" />

        <p
          className="mt-8 max-w-[30rem] text-[16px] leading-relaxed text-white/90"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I&apos;m the founder of Kazama Studio. We build simple, meaningful websites
          and digital experiences — the kind that don&apos;t rush you.
          Things made to add a quiet bit of beauty to the everyday.
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
          initialX="78%" initialY="70%"
          rotateDeg={-8}
          label="current status"
        >
          Jet engines by day,{" "}gentle interfaces by night.
        </FloatingCard>


        <FloatingCard
          image="https://i.pinimg.com/736x/24/2c/1a/242c1a960184aff25b7d367399b24294.jpg"
          initialX="-5%" initialY="15%"
          rotateDeg={10}
          label="now playing"
        >
          Atmospheric lo-fi &amp; the sound of distant rain.
        </FloatingCard>

        <FloatingCard
          image="https://i.pinimg.com/736x/58/e5/de/58e5decaf69b3f073fc667b24b0bd939.jpg"
          initialX="90%" initialY="12%"
          rotateDeg={-5}
          label="origin"
        >
          A country bumpkin building digital gardens in the big city.
        </FloatingCard>

        <FloatingCard
          image="https://i.pinimg.com/736x/41/85/67/4185673ca1ac9363b65adb9c0c92cf3f.jpg"
          initialX="2%" initialY="68%"
          
          rotateDeg={6}
          label="slow life"
        >
          Slow living isn&apos;t a pace — it&apos;s an intention.
        </FloatingCard>
      </div>
    </section>
  );
}