"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import { testimonials, type Testimonial } from '@/data/testimonials';
import { Star, BadgeCheck, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

/** Extract initials from a full name (up to 2 chars). */
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/** Avatar circle with initials and a subtle gradient ring. */
function Avatar({ name }: { name: string }) {
  return (
    <div className="relative flex-shrink-0">
      {/* Gradient ring */}
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-goc-red via-goc-red/60 to-transparent opacity-80" />
      <div className="relative w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-sm tracking-wider select-none">
        {getInitials(name)}
      </div>
    </div>
  );
}

/** Visual 5-star rating. Filled stars in red, empty in dim gray. */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[3px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={
            i <= rating
              ? 'text-goc-red fill-goc-red'
              : 'text-white/15 fill-white/15'
          }
        />
      ))}
    </div>
  );
}

/** Single testimonial card. */
function TestimonialCard({ t }: { t: Testimonial }) {
  const googleReviewLink = "https://www.google.com/maps/place/God+Of+Ceramic/@22.2888953,73.1606598,17z/data=!4m8!3m7!1s0x395fc7e2bab69f59:0xc31da58599fe88e0!8m2!3d22.2888953!4d73.1606598!9m1!1b1!16s%2Fg%2F11w9t33p3k?entry=ttu";

  return (
    <div className="group relative flex-shrink-0 w-[320px] sm:w-[360px] snap-center select-none">
      {/* Card */}
      <a 
        href={googleReviewLink}
        target="_blank"
        rel="noopener noreferrer"
        draggable={false}
        className="block relative h-full rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-6 sm:p-7 flex flex-col gap-5 transition-all duration-500 hover:border-goc-red/30 hover:shadow-[0_0_40px_rgba(255,30,30,0.06)] hover:translate-y-[-4px] cursor-pointer"
      >
        {/* Decorative quote icon */}
        <Quote
          size={32}
          className="absolute top-4 right-4 text-white/[0.04] group-hover:text-goc-red/10 transition-colors duration-500"
        />

        {/* Star rating */}
        <StarRating rating={t.rating} />

        {/* Review text */}
        <p className="text-[15px] leading-relaxed text-gray-300/90 font-light flex-1">
          &ldquo;{t.review}&rdquo;
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Author row */}
        <div className="flex items-center gap-3">
          <Avatar name={t.name} />
          <div className="flex flex-col min-w-0">
            <span className="text-white font-semibold text-sm tracking-wide truncate group-hover:text-goc-red transition-colors duration-300">
              {t.name}
            </span>
            <span className="text-gray-500 text-xs tracking-wider truncate">
              {t.location}
            </span>
          </div>
        </div>

        {/* Verified badge */}
        <div className="flex items-center gap-1.5">
          <BadgeCheck size={14} className="text-goc-red" />
          <span className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-medium">
            Verified Customer
          </span>
        </div>
      </a>
    </div>
  );
}

/** Horizontal scroll carousel with drag support, arrow buttons, and auto-scroll. */
export default function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  /* ── Scroll state checker ─────────────────────────────────────── */
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  /* ── Auto-scroll ──────────────────────────────────────────────── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const timer = setInterval(() => {
      if (isDragging) return;
      const cardWidth = 380; // approximate card + gap
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [isDragging]);

  /* ── Drag-to-scroll (mouse) ───────────────────────────────────── */
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - dx;
  };
  const onMouseUp = () => setIsDragging(false);

  /* ── Arrow handlers ───────────────────────────────────────────── */
  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 380;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Scroll track ────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className={`flex gap-5 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        role="region"
        aria-label="Customer testimonials"
      >
        {/* Spacer so first card isn't flush-left on large screens */}
        <div className="flex-shrink-0 w-0 lg:w-4" aria-hidden="true" />

        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-0 lg:w-4" aria-hidden="true" />
      </div>

      {/* ── Navigation row ──────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll testimonials left"
          className="p-2.5 rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-goc-red/50 hover:text-goc-red hover:shadow-[0_0_16px_rgba(255,30,30,0.15)] disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:text-white/60 disabled:hover:shadow-none"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scroll progress dots */}
        <div className="flex gap-1.5 mx-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollRef.current?.scrollTo({
                  left: i * 380,
                  behavior: 'smooth',
                });
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className="w-1.5 h-1.5 rounded-full bg-white/15 hover:bg-goc-red/60 transition-colors duration-300"
            />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll testimonials right"
          className="p-2.5 rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-goc-red/50 hover:text-goc-red hover:shadow-[0_0_16px_rgba(255,30,30,0.15)] disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:text-white/60 disabled:hover:shadow-none"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ── Google Review CTA ──────────────────────────────────────── */}
      <div className="mt-12 text-center">
        <a 
          href="https://www.google.com/maps/place/God+Of+Ceramic/@22.2888953,73.1606598,17z/data=!4m8!3m7!1s0x395fc7e2bab69f59:0xc31da58599fe88e0!8m2!3d22.2888953!4d73.1606598!9m1!1b1!16s%2Fg%2F11w9t33p3k?entry=ttu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 rounded-sm"
          aria-label="View our reviews on Google"
        >
          {/* Google G Logo SVG */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-white font-bold uppercase tracking-[0.2em] text-sm transition-colors duration-300">Reviews on Google</span>
        </a>
      </div>
    </div>
  );
}
