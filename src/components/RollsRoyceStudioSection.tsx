'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Sparkles, Eye } from 'lucide-react';

const RollsRoycePPFStudio = dynamic(() => import('@/components/RollsRoycePPFStudio'), {
  ssr: false,
  loading: () => (
    <div className="h-[460px] sm:h-[540px] flex flex-col items-center justify-center bg-carbon/60 border border-white/10 rounded-sm">
      <div className="w-10 h-10 border-2 border-goc-red border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">Loading 3D Rolls-Royce Studio...</p>
    </div>
  ),
});

export default function RollsRoyceStudioSection({ immediate = false }: { immediate?: boolean }) {
  const [shouldLoad, setShouldLoad] = useState(immediate);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate || shouldLoad) return;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '450px' } // Preload when user scrolls within 450px
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, shouldLoad]);

  if (!shouldLoad) {
    return (
      <section 
        ref={containerRef}
        id="coloured-ppf-studio" 
        className="relative w-full py-20 bg-[#070708] border-y border-white/10 overflow-hidden text-white"
        aria-label="3D Coloured PPF Studio"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-goc-red animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-200">
              Interactive 360° Luxury Studio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
            Coloured <span className="text-goc-red">PPF</span> Visualizer
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience our bespoke 10mil TPU film on the authentic Rolls-Royce Ghost. Rotate 360° with touch, test instant self-healing technology, and preview 12 luxury finishes.
          </p>

          <div className="h-[360px] sm:h-[440px] max-w-4xl mx-auto bg-[#08080A] border border-white/10 rounded-sm flex flex-col items-center justify-center p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            <div className="w-16 h-16 rounded-full bg-goc-red/10 border border-goc-red/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye size={28} className="text-goc-red" />
            </div>
            <p className="text-white text-base font-bold uppercase tracking-wider mb-2">
              Rolls-Royce Ghost &bull; 3D Studio Ready
            </p>
            <p className="text-gray-400 text-xs max-w-md mb-6">
              Interactive 3D model loads on demand to keep initial website browsing ultra-fast.
            </p>
            <button
              onClick={() => setShouldLoad(true)}
              className="px-8 py-3.5 bg-goc-button text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,30,30,0.4)] flex items-center gap-2"
            >
              <Sparkles size={14} /> Launch 3D Visualizer
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef}>
      <RollsRoycePPFStudio />
    </div>
  );
}
