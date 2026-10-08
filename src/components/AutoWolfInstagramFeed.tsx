"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export interface InstagramPost {
  href: string;
  src: string;
}

const defaultInstagramPosts: InstagramPost[] = [
  { href: "https://www.instagram.com/godofceramic?igsh=YWZqYWd4MDN3MDJr", src: "/images/ig/default1.jpg" },
  { href: "https://www.instagram.com/godofceramic?igsh=YWZqYWd4MDN3MDJr", src: "/images/ig/default2.jpg" },
  { href: "https://www.instagram.com/godofceramic?igsh=YWZqYWd4MDN3MDJr", src: "/images/ig/default3.jpg" },
];

interface InstagramFeedProps {
  posts?: InstagramPost[];
  instagramUrl?: string;
  instagramHandle?: string;
}

export default function AutoWolfInstagramFeed({ 
  posts = defaultInstagramPosts,
  instagramUrl = "https://www.instagram.com/godofceramic?igsh=YWZqYWd4MDN3MDJr",
  instagramHandle = "@GodOfCeramic"
}: InstagramFeedProps = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={sectionRef}
          className="mb-12 text-center"
        >
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Follow The Journey</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-goc-red transition-colors"
            aria-label={`Visit ${instagramHandle} on Instagram`}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white hover:text-goc-red transition-colors mb-2">{instagramHandle}</h2>
          </a>
          <p className="text-gray-500 text-sm">See our latest work on Instagram</p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`View Instagram post ${i + 1}`}
              >
                <div className="relative aspect-[4/5] bg-[#050505] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,30,30,0.1)]">
                  <div className="relative w-full h-full bg-transparent">
                    <Image
                      src={post.src}
                      alt={`God of Ceramic work showcase ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      className="object-cover transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-sm border border-white/20">View Post</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Follow Button */}
          <div className="text-center mt-10">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-goc-red/50 hover:bg-goc-red/10 transition-all duration-500 rounded-sm"
              aria-label={`Follow ${instagramHandle} on Instagram`}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-goc-red group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="text-white font-bold uppercase tracking-[0.2em] text-sm group-hover:text-goc-red transition-colors duration-300">Follow {instagramHandle}</span>
              <ArrowRight size={16} className="text-white/50 group-hover:text-goc-red group-hover:translate-x-2 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
