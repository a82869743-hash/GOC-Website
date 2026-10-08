'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeVideoCardProps {
  id: string;
  title: string;
}

export default function YouTubeVideoCard({ id, title }: YouTubeVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="snap-center shrink-0 w-[85vw] md:w-[560px] group">
      <div className="relative aspect-video bg-carbon border border-white/5 group-hover:border-goc-red/30 rounded-sm overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,30,30,0.15)]">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div 
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer overflow-hidden"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true); }}
            aria-label={`Play ${title}`}
          >
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              loading="lazy"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Red Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-goc-red/90 group-hover:bg-goc-red text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,30,30,0.6)] group-hover:scale-110 transition-all duration-300">
                <Play size={28} className="fill-white ml-1" />
              </div>
            </div>

            {/* Quick Watch Badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-wider text-white">
              HD Video
            </div>
          </div>
        )}
      </div>
      <p className="mt-4 text-white font-bold uppercase tracking-wider text-sm group-hover:text-goc-red transition-colors">
        {title}
      </p>
    </div>
  );
}
