"use client";

import { useState, useRef } from "react";

/**
 * FloatingCard
 *
 * Plain image by default.
 * On hover → image blurs + text fades in (Apple-style).
 * Fully draggable within the parent container.
 *
 * Props:
 *  - image      : image URL
 *  - label      : small eyebrow text (e.g. "now playing")
 *  - children   : body text shown on hover
 *  - rotateDeg  : initial tilt in degrees
 *  - initialX   : CSS left (e.g. "2%")
 *  - initialY   : CSS top  (e.g. "20%")
 */
export default function FloatingCard({
  image,
  label,
  children,
  rotateDeg = -3,
  initialX = "5%",
  initialY = "20%",
}) {
  const [pixelPos, setPixelPos]   = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [zIndex, setZIndex]       = useState(20);

  const nodeRef = useRef(null);
  const drag    = useRef({ active: false, startX: 0, startY: 0, origX: 0, origY: 0 });

  /* ── Drag handlers ── */
  const onPointerDown = (e) => {
    e.preventDefault();
    const el         = nodeRef.current;
    const parentRect = el.parentElement.getBoundingClientRect();
    const rect       = el.getBoundingClientRect();

    drag.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      origX:  rect.left - parentRect.left,
      origY:  rect.top  - parentRect.top,
    };

    el.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setZIndex(50);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const el         = nodeRef.current;
    const parentRect = el.parentElement.getBoundingClientRect();
    const noteRect   = el.getBoundingClientRect();

    let newX = drag.current.origX + (e.clientX - drag.current.startX);
    let newY = drag.current.origY + (e.clientY - drag.current.startY);

    newX = Math.max(0, Math.min(newX, parentRect.width  - noteRect.width));
    newY = Math.max(0, Math.min(newY, parentRect.height - noteRect.height));

    setPixelPos({ x: newX, y: newY });
  };

  const onPointerUp = () => {
    drag.current.active = false;
    setIsDragging(false);
    setZIndex(20);
  };

  /* ── Styles ── */
  const posStyle = pixelPos
    ? { left: pixelPos.x, top: pixelPos.y }
    : { left: initialX,   top: initialY   };

  return (
    <div
      ref={nodeRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="w-[65px] h-[65px] md:w-[130px] md:h-[130px] absolute block pointer-events-none md:pointer-events-auto select-none group"
      style={{
        ...posStyle,
        zIndex,
        borderRadius: "12px",
        overflow:     "hidden",
        cursor:       isDragging ? "grabbing" : "grab",
        transform:    `rotate(${isDragging ? rotateDeg + 3 : rotateDeg}deg) scale(${isDragging ? 1.05 : 1})`,
        transition:   isDragging
          ? "transform 0.08s ease, box-shadow 0.1s ease"
          : "transform 0.3s ease,  box-shadow 0.3s ease",
        boxShadow:    isDragging
          ? "0 20px 48px rgba(0,0,0,0.32)"
          : "0 6px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* Base image */}
      <img
        src={image}
        alt={label}
        draggable={false}
        className="w-full h-full object-cover"
        style={{
          transition: "filter 0.45s ease",
        }}
      />

      {/* Hover overlay — blur + text reveal */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
        style={{
          backdropFilter:   "blur(10px) brightness(0.6)",
          WebkitBackdropFilter: "blur(10px) brightness(0.6)",
          background:       "rgba(0,0,0,0.25)",
          opacity:          0,
          transition:       "opacity 0.4s ease",
          pointerEvents:    "none",
        }}
        /* React doesn't support CSS :hover on inline styles, so we use the
           group-hover Tailwind mechanism via a sibling trick below */
      />

      {/* Invisible hover trigger layer (Tailwind group-hover) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backdropFilter:       "blur(10px) brightness(0.55)",
          WebkitBackdropFilter: "blur(10px) brightness(0.55)",
          background:           "rgba(0,0,0,0.22)",
          pointerEvents:        "none",
        }}
      >
        {/* Eyebrow */}
        {label && (
          <p
            className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/60"
          >
            {label}
          </p>
        )}

        {/* Body */}
        <p
          className="translate-y-2 group-hover:translate-y-0 transition-transform duration-[600ms] text-[12px] font-medium leading-snug text-white"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
