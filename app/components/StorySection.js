"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
// Importing sleek, structural icons from lucide-react
import { Cpu, Ship, Home } from "lucide-react";
const STORY_CARDS = [
  {
    eyebrow: "By day",
    title: "AI/ML Engineer",
    copy: "Just my daytime gig. I write code and work on machine learning models for heavy machinery. Simple as that.",
    box: "Day Job | Stress",
    tags: ["Python", "Code", "Data"],
  },
  {
    eyebrow: "By night",
    title: "Kazama Studio",
    copy: "My tiny digital workshop. Crafting free, gentle apps designed to bring small, helpful ripples to daily routines.",
    box: "Kazama Studio | Making",
    tags: ["Next.js", "Cozy UI", "Free Tools"],
  },
  {
    eyebrow: "In between",
    title: "Life in progress",
    copy: "WFH in my hometown. Keeping things simple with soft lo-fi loops, open windows, and the quiet rhythm of a slow hometown.",
    box: "Country Bumpkin | Slow Days",
    tags: ["Country Bumpkin", "WFH", "Quiet"],
  },
];

// Pure design-system tokens: identical layout structures, differing strictly by color profiles
const CURSOR_THEMES = [
  {
    background: "#18181b", // Dark tactical charcoal
    border: "1px solid rgba(255, 255, 255, 0.08)",
    textColor: "#f4f4f5",
    iconColor: "#34d399", // Emerald accent
    iconBg: "rgba(52, 211, 153, 0.12)",
  },
  {
    background: "#ffffff", // Crisp canvas white
    border: "1px solid #e4e4e7",
    textColor: "#18181b",
    iconColor: "#3b82f6", // Indigo/Blue accent
    iconBg: "rgba(59, 130, 246, 0.1)",
  },
  {
    background: "#2c2420", // Deep espresso-umber
    border: "1px solid rgba(255, 255, 255, 0.05)",
    textColor: "#faf8f4",
    iconColor: "#b07d5c", // Warm earth clay accent
    iconBg: "rgba(176, 125, 92, 0.18)",
  },
];

const aestheticImages = [
  "https://i.pinimg.com/736x/35/68/2b/35682b83453c0ce89f81b0a6d0f7ae1b.jpg",
  "https://i.pinimg.com/1200x/c5/44/05/c544057ace0b71d4955cf305d3593a23.jpg",
  "https://i.pinimg.com/736x/42/4d/be/424dbe3fd87e88c20738334b5a68565a.jpg",
];

const hoverNotes = [
  "fueled entirely by black coffee ☕",
  "everything here is free and open-source 💗",
  "currently gathering the courage for a solo trip 🚢",
];

export default function StorySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const floatingRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (floatingRef.current) {
          // Precise geometric spacing away from native cursor pointer
          floatingRef.current.style.transform = `translate3d(${mousePos.current.x + 22}px, ${mousePos.current.y + 22}px, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const hasHover = hoveredIndex !== null;
  // Fallback cleanly to standard theme settings when not active
  const activeTheme = hasHover ? CURSOR_THEMES[hoveredIndex] : CURSOR_THEMES[0];

  return (
    <section
      id="story"
      className="mx-auto max-w-6xl px-5 py-12 sm:py-20 relative"
      style={{ background: "#faf8f4", borderRadius: "1rem" }}
    >
      <style>{`
        .story-cards-wrapper {
          cursor: none;
        }
        .story-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease;
          transform-style: preserve-3d;
        }
        .story-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.6), transparent 45%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 2;
        }
        .story-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 60px rgba(44, 36, 32, 0.08), 0 10px 24px rgba(44, 36, 32, 0.04);
          border-color: #e0d4c5;
        }
        .story-card:hover::before {
          opacity: 1;
        }
        .story-image {
          transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }
        .story-card:hover .story-image {
          transform: scale(1.04);
          filter: saturate(1.02) brightness(1.01);
        }
        .hover-note {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .story-card:hover .hover-note {
          opacity: 1;
          transform: translateY(0px);
        }
        .floating-glow {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255, 233, 210, 0.35), transparent 70%);
          top: -40px;
          right: -40px;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .story-card:hover .floating-glow {
          opacity: 1;
        }
        .cursor-box {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          pointer-events: none;
          will-change: transform;
        }
        .cursor-box-inner {
          display: flex;
          align-items: center;
          gap: 10px;
          height: 38px;
          padding: 0 14px 0 10px;
          border-radius: 8px;
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03);
          white-space: nowrap;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .cursor-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
      `}</style>

      {/* Structured Minimal Context Cursor */}
      {mounted && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={floatingRef}
              className="cursor-box"
              style={{
                opacity: hasHover ? 1 : 0,
                transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="cursor-box-inner"
                style={{
                  background: activeTheme.background,
                  border: activeTheme.border,
                  transform: hasHover ? "scale(1)" : "scale(0.92)",
                  transition:
                    "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease",
                }}
              >
                {/* Fixed-width Icon Container Housing Lucide Indicators */}
                <div
                  className="icon-container"
                  style={{ background: activeTheme.iconBg }}
                >
                  {hoveredIndex === 0 && (
                    <Cpu
                      size={13}
                      color={activeTheme.iconColor}
                      strokeWidth={2.5}
                    />
                  )}
                  {hoveredIndex === 1 && (
                    <Ship
                      size={13}
                      color={activeTheme.iconColor}
                      strokeWidth={2.5}
                    />
                  )}
                  {hoveredIndex === 2 && (
                    <Home
                      size={13}
                      color={activeTheme.iconColor}
                      strokeWidth={2.5}
                    />
                  )}
                </div>

                {/* Highly structured, clean modern type */}
                <span
                  className="cursor-label"
                  style={{
                    color: activeTheme.textColor,
                    transition: "color 0.3s ease",
                  }}
                >
                  {hasHover ? STORY_CARDS[hoveredIndex].box : ""}
                </span>
              </div>
            </div>,
            document.body,
          )
        : null}

      {/* Heading */}
      <div className="mb-12">
        <p
          className="mb-2 text-lg"
          style={{ fontFamily: "'Caveat', cursive", color: "#b07d5c" }}
        >
          ✦ a bit about me
        </p>
        <h2
          className="text-4xl leading-tight sm:text-5xl"
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 400,
            color: "#2c2420",
          }}
        >
          AI models, cozy code,
          <br />
          and <em style={{ color: "#b07d5c" }}>hometown peace.</em>
        </h2>
      </div>

      {/* Cards */}
      <div className="story-cards-wrapper grid items-start gap-6 md:grid-cols-3">
        {STORY_CARDS.map((card, index) => (
          <article
            key={card.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="story-card relative flex flex-col rounded-xl"
            style={{
              background: "#fffdf9",
              border: "1px solid #ede8df",
              marginTop: index === 1 ? "1.5rem" : index === 2 ? "-0.5rem" : "0",
            }}
          >
            <div className="floating-glow" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={aestheticImages[index]}
                alt=""
                className="story-image w-full object-cover"
                style={{ height: "170px", display: "block" }}
              />
              <svg
                viewBox="0 0 400 20"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: "absolute",
                  bottom: -1,
                  left: 0,
                  width: "100%",
                }}
              >
                <path
                  d="M0,10 Q50,0 100,10 T200,10 T300,10 T400,10 L400,20 L0,20 Z"
                  fill="#fffdf9"
                />
              </svg>
            </div>

            {/* Decorative mark */}
            <span
              className="absolute right-4 top-3"
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "13px",
                color: "#c9a98a",
                opacity: 0.75,
              }}
            >
              {["✧", "✦", "✶"][index]}
            </span>

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col p-5">
              <p
                className="mb-1 text-sm"
                style={{ fontFamily: "'Caveat', cursive", color: "#b07d5c" }}
              >
                {card.eyebrow}
              </p>
              <h3
                className="mb-3 text-xl leading-snug"
                style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 400,
                  color: "#2c2420",
                }}
              >
                {card.title}
              </h3>
              <p
                className="mb-4 text-[15px] font-medium leading-relaxed"
                style={{ color: "#4a3f38" }}
              >
                {card.copy}
              </p>
              <div className="mb-4 mt-auto flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ background: "#f0ebe2", color: "#8a6d5b" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="hover-note text-sm"
                style={{
                  fontFamily: "'Caveat', cursive",
                  color: "#9a7a67",
                  borderTop: "1px dashed #e5d8ca",
                  paddingTop: "0.7rem",
                }}
              >
                ↳ {hoverNotes[index]}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
