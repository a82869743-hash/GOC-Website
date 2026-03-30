"use client";

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, title }: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const updateSliderPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    updateSliderPos(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [updateSliderPos]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updateSliderPos(e.clientX);
  }, [isDragging, updateSliderPos]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 cursor-col-resize select-none hover:border-goc-red/30 transition-border-color duration-500 touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label={`Before and after comparison: ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
    >
      {/* After Image (Background - full) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        {/* Shine sweep animation on After side */}
        <div className="absolute inset-0 shine-sweep pointer-events-none" aria-hidden="true" />
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        {/* Darker overlay on before side */}
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] -translate-x-1/2 z-20"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-full h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
        {/* Drag Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-black">
            <path d="M7 4L3 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-30">
        <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm border border-white/20">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 z-30">
        <span className="px-3 py-1.5 bg-goc-red/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm border border-goc-red/40 shadow-[0_0_15px_rgba(255,30,30,0.3)]">
          After
        </span>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 pt-12">
        <p className="text-white font-bold uppercase tracking-wider text-sm">{title}</p>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,30,0.05),transparent_70%)]" aria-hidden="true" />
    </motion.div>
  );
}
