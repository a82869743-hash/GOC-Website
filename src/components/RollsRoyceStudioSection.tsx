'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, RotateCw, Flame, Droplets, Layers, ArrowRight, Play, Maximize2 } from 'lucide-react';

const RollsRoycePPFStudio = dynamic(() => import('@/components/RollsRoycePPFStudio'), {
  ssr: false,
  loading: () => (
    <div className="h-[460px] sm:h-[540px] flex flex-col items-center justify-center bg-carbon/60 border border-white/10 rounded-sm">
      <div className="w-10 h-10 border-2 border-goc-red border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">Loading 3D Rolls-Royce Studio...</p>
    </div>
  ),
});

interface RollsRoyceStudioSectionProps {
  autoLoad?: boolean;
}

export default function RollsRoyceStudioSection({ autoLoad = false }: RollsRoyceStudioSectionProps) {
  const [isStudioActive, setIsStudioActive] = useState<boolean>(autoLoad);

  if (isStudioActive) {
    return <RollsRoycePPFStudio />;
  }

  return (
    <section 
      id="coloured-ppf-studio" 
      className="relative w-full py-16 sm:py-20 bg-[#070708] border-y border-white/10 overflow-hidden text-white select-none"
      aria-label="3D Coloured PPF Studio"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-goc-red/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
            <Sparkles size={14} className="text-goc-red animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-200">
              Interactive 360° Luxury Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Coloured <span className="text-goc-red">PPF</span> Visualizer
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Experience our bespoke 10mil TPU film on the authentic Rolls-Royce Ghost. Rotate 360° with touch, test instant self-healing technology, and inspect hydrophobic lotus water beading across 12 ultra-gloss, velvet satin, and pearl finishes.
          </p>
        </div>

        {/* HIGH-PERFORMANCE PREVIEW SHOWCASE HERO CARD (0 MB on initial page load) */}
        <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] rounded-sm bg-[#08080A] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
          
          {/* Background Luxury Automotive Visual */}
          <Image
            src="/images/ppf-hero.png"
            alt="Rolls Royce Coloured PPF Studio 3D Visualizer"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center filter brightness-[0.65] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />

          {/* Vignette & Radial Light Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

          {/* TOP HUD BADGE */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="px-3.5 py-2 bg-black/80 border border-white/15 backdrop-blur-md rounded-sm">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-goc-red animate-pulse" />
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  Rolls-Royce Ghost &bull; 3D Visualizer
                </h3>
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-400">
                10mil Self-Healing TPU &bull; 12 Bespoke Finishes &bull; Real-time 3D
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="px-3 py-1.5 bg-black/70 border border-white/15 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-gray-300 rounded-sm">
                High-Definition 3D Model
              </span>
            </div>
          </div>

          {/* CENTER INTERACTIVE LAUNCH CALLOUT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
            
            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 max-w-xl">
              <span className="px-3 py-1 bg-black/75 border border-white/15 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-200 flex items-center gap-1.5 shadow-md">
                <RotateCw size={12} className="text-goc-red" /> 360° Touch Rotation
              </span>
              <span className="px-3 py-1 bg-black/75 border border-white/15 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-200 flex items-center gap-1.5 shadow-md">
                <Flame size={12} className="text-goc-red" /> Instant Self-Healing
              </span>
              <span className="px-3 py-1 bg-black/75 border border-white/15 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-200 flex items-center gap-1.5 shadow-md">
                <Droplets size={12} className="text-blue-400" /> Lotus Hydrophobic Effect
              </span>
              <span className="px-3 py-1 bg-black/75 border border-white/15 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-200 flex items-center gap-1.5 shadow-md">
                <Layers size={12} className="text-goc-red" /> Two-Tone Coachline
              </span>
            </div>

            {/* Launch Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center">
              <button
                onClick={() => setIsStudioActive(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-goc-button text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em] rounded-sm shadow-[0_0_25px_rgba(255,30,30,0.5)] hover:shadow-[0_0_40px_rgba(255,30,30,0.8)] hover:scale-105 transition-all flex items-center justify-center gap-2.5 group/btn"
              >
                <Play size={15} className="fill-white group-hover/btn:scale-110 transition-transform" />
                <span>Launch Interactive 3D Model</span>
              </button>

              <Link
                href="/ppf-studio"
                className="w-full sm:w-auto px-6 py-3.5 bg-black/80 hover:bg-white/10 border border-white/20 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-[0.15em] rounded-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Maximize2 size={14} />
                <span>Full Studio Page</span>
              </Link>
            </div>

            <p className="text-[11px] text-gray-400 mt-4 tracking-wide font-medium">
              Tap to load the real-time 3D Rolls-Royce Ghost or open fullscreen
            </p>
          </div>

          {/* BOTTOM FEATURE BAR */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-gray-400 pointer-events-none z-10">
            <span className="px-3 py-1 bg-black/70 border border-white/10 rounded-sm backdrop-blur-md hidden sm:inline">
              10mil Optical Clear TPU &bull; 10-Year Warranty
            </span>
            <span className="px-3 py-1 bg-black/70 border border-white/10 rounded-sm backdrop-blur-md ml-auto">
              12 Authentic Factory &amp; Exotic Colors
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
