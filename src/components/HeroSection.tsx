'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || typeof IntersectionObserver === 'undefined') return;

    // Viewport-aware playback: Pause video when scrolled away to save 100% GPU/CPU
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);

    // Pause when browser tab is hidden or minimized
    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const rect = section.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          video.play().catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black" 
      aria-label="Hero"
    >
      {/* Hardware-Accelerated Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
      >
        <source src="/videos/car2.mp4" type="video/mp4" />
      </video>
      
      {/* Pure Alpha Direct-Composited Luxury Overlays (Zero GPU overhead, eliminates lag) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-[#0A0A0A] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#180000]/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden="true" />
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-10">
          
          {/* Main Typography */}
          <div className="flex flex-col items-center opacity-0 animate-[fadeInUp_1.5s_ease-out_0.3s_forwards]">
            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-black text-white uppercase tracking-tighter leading-none mb-0 drop-shadow-2xl flex flex-col items-center">
              <span>GOD</span>
              <span className="font-serif italic text-3xl md:text-5xl lg:text-5xl text-goc-red tracking-[0.3em] md:tracking-[0.5em] my-[-10px] md:my-[-20px] drop-shadow-lg z-10 relative">of</span>
              <span>CERAMIC</span>
            </h1>
            
            <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-goc-red to-transparent mb-6 mt-6 opacity-80" aria-hidden="true" />
            
            <p className="text-xs md:text-lg lg:text-xl text-gray-300 font-light tracking-[0.6em] md:tracking-[1em] mb-12 uppercase text-center pl-2 md:pl-4 opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
              Perfection Beyond Shine
            </p>
          </div>
          
          {/* Premium Button */}
          <div className="opacity-0 animate-[fadeInUp_1.5s_ease-out_0.6s_forwards]">
            <Link 
              href="#services" 
              className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 bg-black/40 border border-white/10 hover:border-goc-red/60 backdrop-blur-md overflow-hidden text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all duration-700 rounded-sm shadow-[0_0_0_rgba(255,30,30,0)] hover:shadow-[0_0_30px_rgba(255,30,30,0.3)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-goc-red/0 via-goc-red/10 to-goc-red/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-goc-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-goc-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" aria-hidden="true" />
              
              <span className="relative z-10 flex items-center shrink-0 drop-shadow-md group-hover:text-goc-red transition-colors duration-500">
                Explore Experience 
                <ArrowRight className="ml-4 text-white group-hover:text-goc-red group-hover:translate-x-3 transition-all duration-500" size={16} />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
