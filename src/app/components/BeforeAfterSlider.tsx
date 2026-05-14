"use client";

import { useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  label: string;
  beforeImage?: string;
  afterImage?: string;
};

export default function BeforeAfterSlider({
  label,
  beforeImage = "/images/beforeafter.jpg",
  afterImage = "/images/beforeafter.jpg",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="ba-after">
        <img src={afterImage} alt="After treatment" width={1600} height={900} loading="lazy" />
      </div>

      <div className="ba-before" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={beforeImage} alt="Before treatment" width={1600} height={900} loading="lazy" />
      </div>

      <div
        className="ba-handle"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="ba-handle-line" />
        <div className="ba-handle-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 6 3 12 9 18" />
            <polyline points="15 6 21 12 15 18" />
          </svg>
        </div>
      </div>

      <div className="ba-label">{label}</div>
    </div>
  );
}
