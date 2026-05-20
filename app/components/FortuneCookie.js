"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

const FORTUNES = [
  "You don’t need to rush your becoming.",
  "Some beautiful things take longer to arrive.",
  "Rest is productive, too.",
  "Midnight ideas count.",
  "Maybe the small projects matter most.",
  "Slow down; the world will wait.",
  "Your worth is not defined by your output.",
  "It's okay to just exist for a while.",
  "Give yourself permission to make mistakes.",
  "The most meaningful progress is often silent.",
  "You are allowed to take up space.",
  "Comparison is the thief of joy.",
  "What is meant for you will not pass you by.",
  "Celebrate your invisible victories.",
  "Not every action needs an immediate reaction.",
  "Peace is a valid measure of success.",
  "You can start over as many times as you need.",
  "Let go of the timeline you created for yourself.",
  "Your energy is a currency; spend it wisely.",
  "Closure is something you give yourself.",
  "Growth is rarely linear.",
  "Saying no is a complete sentence.",
  "You don't have to have it all figured out today.",
  "Embrace the quiet moments.",
  "Protect your peace fiercely.",
  "The right path is the one that feels like breathing.",
  "Don't let yesterday take up too much of today.",
  "Softness is not a weakness.",
  "You are more than your productivity.",
  "There is power in a gentle approach.",
  "Take things one step, one hour, one day at a time.",
  "It is enough to do your best.",
  "Allow yourself to be a beginner.",
  "Focus on the step in front of you, not the whole staircase.",
  "Your feelings are valid, even if they are messy.",
  "Sometimes the most productive thing you can do is rest.",
  "Trust the timing of your life.",
  "You are not behind; you are exactly where you need to be.",
  "Be kind to your past self; they did what they could.",
  "Inhale the future, exhale the past.",
  "A quiet mind is a powerful mind.",
  "You are allowed to change your mind.",
  "Look how far you've already come.",

  // new ones
  "Your future self is rooting for you quietly.",
  "You survived days you thought would break you.",
  "Tiny steps are still movement.",
  "Romanticize the life you already have.",
  "Not everything needs to become content.",
  "You deserve mornings that feel soft.",
  "Healing is not a race.",
  "The version of you from two years ago would be proud.",
  "A slower life is still a meaningful one.",
  "The moon does not rush and neither should you.",
  "You don't owe anyone constant availability.",
  "Some chapters are meant to feel uncertain.",
  "You are allowed to disappear for a while and recharge.",
  "Being sensitive is a form of depth.",
  "The right people will understand your quietness.",
  "You don't have to monetize every talent.",
  "There is beauty in unfinished things.",
  "Your creativity needs gentleness, not pressure.",
  "Even paused progress is progress.",
  "You can be both healing and hurting.",
  "Not all growth is visible.",
  "The calm you seek is already within reach.",
  "Your softness deserves protection.",
  "You are not difficult for needing reassurance.",
  "Take the pressure off this season of your life.",
  "You are allowed to outgrow old dreams.",
  "There is no deadline for becoming yourself.",
  "A peaceful life is a successful life.",
  "You don't need permission to rest.",
  "Something good is slowly finding you.",
  "The universe isn't late; it's buffering.",
  "You are not lazy for being tired.",
  "Your best today may look different tomorrow.",
  "The art you almost didn't make might save someone.",
  "You don't need to earn love through exhaustion.",
  "Being overwhelmed does not make you incapable.",
  "The life you want is built quietly.",
  "You are carrying too much alone.",
  "Gentle people change the world too.",
  "You are allowed to romanticize tiny moments.",
  "No flower blooms all year.",
  "There is wisdom in slowing down.",
  "Some dreams need patience more than hustle.",
  "You don't have to win every day.",
  "The quiet version of you is still valuable.",
  "You are becoming someone your younger self needed.",
  "Your existence alone has meaning.",
  "Being lost is sometimes part of the map.",
  "Not every season is meant for blooming.",
  "The stars think you're doing better than you believe.",
  "There is courage in trying again.",
  "Take care of yourself like you would a favorite character.",
  "Your inner child notices the kindness you give yourself.",
  "Maybe healing looks boring because it's working.",
  "You are allowed to feel proud of small things.",
  "The softest hearts survive the hardest storms.",
  "Sometimes surviving is the achievement.",
  "Your story does not need to look impressive to matter.",
  "There is magic in consistency.",
  "You are not falling behind the universe.",
  "Your pace is still a pace.",
  "You don't need to explain your exhaustion.",
  "A rested mind creates better dreams.",
  "Your life is not a productivity competition.",
  "Even the sky changes every day.",
  "You deserve spaces that feel safe and warm.",
  "You can miss people and still move on.",
  "The future does not need all your answers today.",
  "You are learning even when nothing feels productive.",
  "The universe appreciates your effort more than perfection.",
];

// Thoughtful, non-cliché fortunes
const SCOLDS = [
  "The stars said you need to touch grass.",
  "Your aura is giving 'needs a nap'.",
  "Stop procrastinating and go do the thing.",
  "I'm just a card, not your therapist.",
  "Mercury is in retrograde, don't ask me.",
  "Drink some water, you dried up houseplant.",
  "Error 404: Good vibes not found. Try again.",
  "The universe is judging your screen time.",
  "Have you considered just going to sleep?",
  "You picked the wrong card. I'm judging you.",
  "My cosmic wisdom says: stop slouching.",
  "No alignment for you today. Better luck tomorrow.",

  // new ones
  "The moon called. It wants your sleep schedule fixed.",
  "Your WiFi connection is stronger than your discipline.",
  "You cannot heal by opening another tab.",
  "The universe saw your search history. Yikes.",
  "You're one iced coffee away from a breakdown.",
  "Cosmic energy levels: emotionally overcooked.",
  "This card recommends logging off immediately.",
  "You have the vibes of someone avoiding emails.",
  "Your ancestors did not survive this long for you to doomscroll.",
  "Today's prediction: unfinished tasks.",
  "The stars suggest you stop refreshing Instagram.",
  "You're spiritually buffering.",
  "Even your houseplants think you're dramatic.",
  "Your inner peace left you on read.",
  "This card smells burnout on you.",
  "You need less screen time and more sunlight.",
  "Your brain has 47 tabs open right now.",
  "Your current quest: fold the laundry.",
  "You radiate 'I'll do it tomorrow' energy.",
  "The universe says: answer your messages.",
  "Your alignment is blocked by procrastination.",
  "You need sleep, not another playlist.",
  "Astrology cannot save your deadlines.",
  "The spirits are begging you to hydrate.",
  "You are not mysterious. You are avoiding responsibilities.",
  "The stars saw that typo. Embarrassing.",
  "Your vibe today is raccoon near a trash can.",
  "The cosmos recommends a shower and a reset.",
  "Your guardian angel muted your notifications.",
  "The universe says your coping mechanisms are getting creative.",
  "You can't girlboss your way through sleep deprivation.",
  "The tarot cards are tired of your excuses.",
  "You are giving emotionally attached to caffeine.",
  "This card predicts another unnecessary all-nighter.",
  "The moon says: unclench your jaw.",
  "You're acting like a side character in your own life.",
  "Your soul needs soup and silence.",
  "The universe is not sending signs. That's just anxiety.",
  "You need to stop treating snacks like meals.",
  "The stars would like a word about your posture.",
  "Your fate is currently tangled in charging cables.",
  "The prophecy says: clean your room.",
  "You looked at one productivity video and did nothing after.",
  "The universe watched you overthink for 3 hours straight.",
  "The vibes are off but at least you're self-aware.",
  "Your spiritual animal is a tired pigeon.",
  "The stars suggest you stop stalking people online.",
  "The cosmos rates today's decisions a solid 4/10.",
  "Even the moon needs phases. Why are you always online?",
  "You are running entirely on caffeine and denial.",
  "This card says: stop making fake scenarios in your head.",
  "The universe wants you to sit properly for once.",
  "The spirits noticed your sleep schedule. They're concerned.",
  "Today's cosmic lesson: close the app.",
  "The stars say you need a hobby that isn't suffering.",
  "You have strong 'main character burnout' energy.",
  "Your emotional support playlist cannot fix this.",
  "The universe gently requests you to go outside.",
  "Your alignment improves significantly after eating real food.",
  "The tarot says your toxic trait is starting new projects at 2AM.",
  "Your destiny is currently trapped under piles of unfinished ideas.",
  "The stars say: maybe stop over-romanticizing sadness.",
  "You are one inconvenience away from becoming a forest cryptid.",
  "The moon noticed your unread notifications and gasped.",
  "Your current energy: laptop overheating.",
  "The universe says you're overdue for a nap and a personality reset.",
  "This card would like to recommend therapy and vegetables.",
  "The stars are impressed you're functioning at all.",
];

// Front of the card (Unrevealed - The Pink/Cream Celestial Tarot style)
const TarotCardBack = ({ className = "" }) => (
  <div
    className={`relative w-full h-full rounded-[16px] overflow-hidden ${className}`}
  >
    <svg
      viewBox="0 0 200 320"
      className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e89bcc" />
          <stop offset="100%" stopColor="#a362b8" />
        </linearGradient>
        <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0b3" />
          <stop offset="100%" stopColor="#f3ca5a" />
        </linearGradient>
      </defs>

      {/* Card Border */}
      <rect
        x="4"
        y="4"
        width="192"
        height="312"
        rx="14"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="4"
      />
      <rect
        x="20"
        y="20"
        width="160"
        height="280"
        rx="8"
        fill="url(#cardBg)"
        stroke="#4a2e21"
        strokeWidth="3"
      />

      {/* Top Left Moon & Circles */}
      <path
        d="M 45 42 A 10 10 0 1 0 55 62 A 12 12 0 1 1 45 42 Z"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="75"
        cy="45"
        r="2.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1.5"
      />
      <circle
        cx="85"
        cy="55"
        r="1.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1"
      />

      {/* Top Right Circle & Dots */}
      <circle
        cx="150"
        cy="52"
        r="10"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="2"
      />
      <circle
        cx="125"
        cy="42"
        r="1.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1"
      />
      <circle
        cx="115"
        cy="52"
        r="2.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1.5"
      />

      {/* Center Sun/Star */}
      <g transform="translate(100, 160)">
        <polygon
          points="0,-75 8,-18 65,0 8,18 0,75 -8,18 -65,0 -8,-18"
          fill="url(#starGrad)"
          stroke="#4a2e21"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <polygon
          points="0,-45 6,-12 40,0 6,12 0,45 -6,12 -40,0 -6,-12"
          fill="url(#starGrad)"
          stroke="#4a2e21"
          strokeWidth="2.5"
          strokeLinejoin="round"
          transform="rotate(45)"
        />
        <circle
          cx="0"
          cy="0"
          r="16"
          fill="#fcf8e8"
          stroke="#4a2e21"
          strokeWidth="2.5"
        />
      </g>

      {/* Bottom Right Moon & Circles */}
      <path
        d="M 155 278 A 10 10 0 1 0 145 258 A 12 12 0 1 1 155 278 Z"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="125"
        cy="275"
        r="2.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1.5"
      />
      <circle
        cx="115"
        cy="265"
        r="1.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1"
      />

      {/* Bottom Left Circle & Dots */}
      <circle
        cx="50"
        cy="268"
        r="10"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="2"
      />
      <circle
        cx="75"
        cy="278"
        r="1.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1"
      />
      <circle
        cx="85"
        cy="268"
        r="2.5"
        fill="#fcf8e8"
        stroke="#4a2e21"
        strokeWidth="1.5"
      />
    </svg>
  </div>
);

export default function FortuneSection() {
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fortune, setFortune] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isScold, setIsScold] = useState(false);
  const [scoldEmoji, setScoldEmoji] = useState("🙄");

  const handleDraw = (index) => {
    setActiveIndex(index);
    setIsAnimating(true);

    setTimeout(() => {
      // 70% chance of a good message, 30% chance of a scold
      const isGood = Math.random() < 0.7;
      if (isGood) {
        setFortune(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
        setIsScold(false);
      } else {
        setFortune(SCOLDS[Math.floor(Math.random() * SCOLDS.length)]);
        setIsScold(true);
        const funnyEmojis = [
          "🙄",
          "🤡",
          "🫣",
          "🤫",
          "🤦‍♂️",
          "👀",
          "🤠",
          "👽",
          "☕",
        ];
        setScoldEmoji(
          funnyEmojis[Math.floor(Math.random() * funnyEmojis.length)],
        );
      }
      setStep(2);
      setIsAnimating(false);
    }, 700);
  };

  const handleReset = () => {
    setStep(1);
    setFortune("");
    setIsScold(false);
    setActiveIndex(null);
  };

  return (
    <section className="flex w-full items-center justify-center sm:px-8 md:px-12 sm:py-24">
      {/* Container */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-lg bg-[#fafaf8] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03] md:flex-row md:min-h-[460px]">
        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />

        {/* LEFT COLUMN: Static Info */}
        <div className="relative z-10 flex w-full flex-col justify-center border-b border-stone-200/60 bg-[#fafaf8] p-8 md:w-[40%] md:border-b-0 md:border-r md:p-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400">
            A Moment of Pause // Celestial
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Seek Your <br /> Alignment
          </h2>
          <p className="mt-6 text-[14px] leading-relaxed text-slate-500">
            Draw a card to receive a quiet, grounding thought for your day.{" "}
            <span className="text-amber-800 border-b border-amber-300/80 pb-0.5 font-medium">
              Choose wisely, the universe has a sense of humor today.
            </span>
          </p>
        </div>

        {/* RIGHT COLUMN: Interactive Area */}
        <div className="relative z-10 flex w-full flex-1 items-center justify-center bg-[#fdfdfc] p-4 sm:p-8 min-h-[400px] md:p-12 overflow-hidden">
          {/* STEP 1: Card Selection */}
          {step === 1 && (
            <div className="flex w-full items-center justify-center animate-in fade-in duration-700">
              {/* Increased height. Fan layout on mobile, side-by-side on sm+ */}
              <div className="relative flex w-full justify-center items-center h-56 sm:h-72 sm:gap-6 mt-8">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => handleDraw(i)}
                    disabled={isAnimating}
                    className={`
                      absolute sm:relative flex aspect-[2/3] h-full cursor-pointer transition-all duration-500 ease-out 
                      
                      /* Animation States */
                      ${isAnimating && activeIndex !== i ? "opacity-0 scale-90 translate-y-12" : ""}
                      ${isAnimating && activeIndex === i ? "scale-110 z-50 -translate-y-4" : ""}
                      
                      /* Fanned Deck for Mobile (Overlapping & Rotated) vs Spread for Desktop */
                      ${!isAnimating && i === 0 ? "-rotate-12 -translate-x-16 sm:rotate-0 sm:translate-x-0" : ""}
                      ${!isAnimating && i === 1 ? "z-10" : "z-0"}
                      ${!isAnimating && i === 2 ? "rotate-12 translate-x-16 sm:rotate-0 sm:translate-x-0" : ""}
                      
                      /* Hover States (bringing hovered card forward and straightening) */
                      ${!isAnimating ? "hover:-translate-y-6 hover:rotate-0 hover:z-20 hover:shadow-2xl" : ""}
                    `}
                  >
                    <TarotCardBack />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Laughing emoji background pattern if it's a scold */}
          {step === 2 && isScold && (
            <div className="absolute inset-0 pointer-events-none select-none opacity-60 z-0 overflow-hidden flex flex-wrap gap-x-16 gap-y-12 items-center justify-center p-6">
              {Array.from({ length: 12 }).map((_, idx) => (
                <span
                  key={idx}
                  className="text-6xl sm:text-7xl transform select-none opacity-20"
                  style={{
                    transform: `rotate(${(idx % 2 === 0 ? 15 : -15) + idx * 5}deg)`,
                  }}
                >
                  😂
                </span>
              ))}
            </div>
          )}

          {/* STEP 2: The Reveal (Nice direct text display, no card container) */}
          {step === 2 && (
            <div className="relative z-10 flex w-full flex-col items-center justify-center text-center max-w-md mx-auto animate-in fade-in zoom-in-[0.98] slide-in-from-bottom-4 duration-700 px-4">
              {isScold ? null : (
                /* Celestial Star Motif Header */
                <div className="mb-6">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-14 h-14 mx-auto animate-pulse"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polygon
                      points="50,15 54,40 79,44 54,48 50,73 46,48 21,44 46,40"
                      fill="#fff0b3"
                      stroke="#4a2e21"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="50"
                      cy="44"
                      r="5"
                      fill="#fcf8e8"
                      stroke="#4a2e21"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}

              {/* Message Display */}
              <p className="serif-display text-2xl sm:text-3xl text-slate-800 italic leading-relaxed mb-10">
                "{fortune}"
              </p>

              {/* Reshuffle Button themed after Tarot card's frontside */}
              <button
                onClick={handleReset}
                className="group flex items-center gap-2.5 bg-[#fcf8e8] border-2 border-[#4a2e21] text-[#4a2e21] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-[4px_4px_0px_#4a2e21] hover:shadow-[2px_2px_0px_#4a2e21] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
              >
                <RotateCcw
                  size={12}
                  className="transition-transform duration-500 group-hover:-rotate-180"
                />
                Reshuffle Deck
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
