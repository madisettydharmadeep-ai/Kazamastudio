"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { WORKS } from "../data";
import { Heart, ArrowUpRight, BookOpen, Gift, Scroll } from "lucide-react";

const PROJECT_METADATA = [
  {
    label: "Private Journal",
    background: "#18181b",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    textColor: "#f4f4f5",
    iconColor: "#38bdf8",
    iconBg: "rgba(56, 189, 248, 0.12)",
    Icon: BookOpen,
  },
  {
    label: "Free Digital Gift",
    background: "#ffffff",
    border: "1px solid #e4e4e7",
    textColor: "#18181b",
    iconColor: "#fbbf24",
    iconBg: "rgba(251, 191, 36, 0.12)",
    Icon: Gift,
  },
  {
    label: "short storiessss",
    background: "#2c2420",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    textColor: "#faf8f4",
    iconColor: "#f43f5e",
    iconBg: "rgba(244, 63, 94, 0.15)",
    Icon: Scroll,
  },
];

export default function WorkSection() {
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
  const activeMeta = hasHover
    ? PROJECT_METADATA[hoveredIndex % PROJECT_METADATA.length]
    : PROJECT_METADATA[0];
  const CursorIcon = activeMeta.Icon;

  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 py-24 bg-[#faf8f4]"
    >
      <style>{`
        /* Only apply custom hidden cursor styles on devices that support hovering */
        @media (hover: hover) {
          .projects-wrapper {
            cursor: none;
          }
          .project-card:hover {
            transform: translateY(-10px) scale(1.01);
            box-shadow: 0 40px 80px rgba(44, 36, 32, 0.08), 0 12px 32px rgba(44, 36, 32, 0.04);
            border-color: #d9cab9;
          }
          .project-card:hover .project-image {
            transform: scale(1.06);
            filter: saturate(1.03) brightness(0.9);
          }
          .content-reveal-tray {
            transform: translate3d(0, 68px, 0);
          }
          .project-card:hover .content-reveal-tray {
            transform: translate3d(0, 0, 0);
          }
          .reveal-body-segment {
            opacity: 0;
            transform: translate3d(0, 15px, 0);
          }
          .project-card:hover .reveal-body-segment {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
          .project-card:hover .hover-arrow-btn {
            transform: scale(1.03);
            background-color: #ffffff;
            color: #1e1814;
          }
        }

        .project-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: #fffdfa;
          border: 1px solid #e8dfd3;
          height: 440px;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease;
          transform-style: preserve-3d;
        }
        .project-image-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .project-image {
          transition: transform 1.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }
        .grain {
          position: absolute;
          inset: 0;
          opacity: .05;
          background-image:
            radial-gradient(circle at 20% 20%, black 1px, transparent 1px),
            radial-gradient(circle at 80% 40%, black 1px, transparent 1px);
          background-size: 120px 120px;
          mix-blend-mode: soft-light;
          pointer-events: none;
          z-index: 2;
        }
        
        /* Mobile-first baseline styles: Everything fully visible and resting in its final spot */
        .content-reveal-tray {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding: 24px;
          background: linear-gradient(to top, rgba(18, 13, 10, 0.95) 0%, rgba(18, 13, 10, 0.5) 60%, transparent 100%);
          z-index: 10;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-body-segment {
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.02s;
        }
        .hover-arrow-btn {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease;
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
        }
        .cursor-label {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
      `}</style>

      {/* Synchronized Portal Studio Dynamic Cursor */}
      {mounted && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={floatingRef}
              className="cursor-box hidden md:block" /* Hidden on mobile screen views entirely */
              style={{
                opacity: hasHover ? 1 : 0,
                transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="cursor-box-inner"
                style={{
                  background: activeMeta.background,
                  border: activeMeta.border,
                  transform: hasHover ? "scale(1)" : "scale(0.92)",
                  transition:
                    "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div
                  className="icon-container"
                  style={{ background: activeMeta.iconBg }}
                >
                  {hasHover && (
                    <CursorIcon
                      size={13}
                      color={activeMeta.iconColor}
                      strokeWidth={2.5}
                    />
                  )}
                </div>
                <span
                  className="cursor-label"
                  style={{ color: activeMeta.textColor }}
                >
                  {hasHover ? activeMeta.label : ""}
                </span>
              </div>
            </div>,
            document.body,
          )
        : null}

      {/* AMBIENT BACKGROUND LAYER */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-0 h-[260px] w-[260px] rounded-full bg-rose-100/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-[320px] w-[320px] rounded-full bg-amber-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 shadow-sm">
            <Heart size={14} className="fill-rose-100 text-rose-400" />
            <span className="text-xs uppercase tracking-[0.22em] text-stone-500 font-medium">
              Powered by Coffee
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#43362c] sm:text-5xl">
            Kazama Studio Originals
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#7c6d61]">
            Quiet internet projects shaped by late-night curiosity, comfort
            aesthetics, and tiny ideas that kept growing.
          </p>
        </div>

        {/* EDGE-TO-EDGE PROJECT CANVAS GRID */}
        {/* Added gap-12 on mobile so elements have breathing room, returns to tidy gap-7 on desktop grids */}
        <div className="projects-wrapper grid grid-cols-1 gap-12 md:gap-7 md:grid-cols-3">
          {WORKS.slice(0, 3).map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target={project.url?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                project-card group block
                ${index === 1 ? "md:translate-y-10" : ""}
                ${index === 2 ? "md:-translate-y-4" : ""}
              `}
            >
              {/* BACKDROP IMAGE LAYER */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image h-full w-full object-cover"
                />
                <div className="grain" />

                {/* Sticky Badges over Art Base */}
                <div className="absolute left-5 top-5 right-5 flex items-center justify-between z-20">
                  <span className="rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md font-medium border border-white/10">
                    {project.status}
                  </span>
                  <span
                    className="text-sm text-white/80"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    ✦ cozy web
                  </span>
                </div>
              </div>

              {/* CURTAIN REVEAL TRAY */}
              <div className="content-reveal-tray">
                {/* Always-Visible Baseline Title Anchor */}
                <h3 className="font-serif text-4xl text-white drop-shadow-md mb-3">
                  {project.title}
                </h3>

                {/* Concealed Metadata Block sweeping vertically upward on trigger */}
                <div className="reveal-body-segment w-full">
                  <p className="text-[13.5px] leading-relaxed text-white/80 font-medium">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[10.5px] text-white/90 font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between w-full">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">
                      Workspace
                    </span>
                    {/* Standard look on mobile, animations unlock inside desktop `@media (hover: hover)` rules */}
                    <div className="hover-arrow-btn flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1e1814]">
                      <span>Open</span>
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
