'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const BeforeAfterSection = dynamic(() => import('@/components/BeforeAfterSection'), {
  loading: () => <div className="h-96 bg-carbon border-y border-white/5 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading transformations...</p></div>,
});

// Gallery items — replace src paths with your actual images later
const galleryItems = [
  { id: 1, src: '/images/gallery/goc-gallery-1.jpg', alt: 'Premium Ceramic Coating', category: 'ceramic', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, src: '/images/gallery/goc-gallery-2.jpg', alt: 'PPF Installation', category: 'ppf', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/images/gallery/goc-gallery-3.jpg', alt: 'Signature Exterior Detailing', category: 'transformations', span: 'col-span-1 row-span-1' },
  { id: 4, src: '/images/gallery/goc-gallery-4.jpg', alt: 'God of Ceramic Finish', category: 'ceramic', span: 'col-span-1 row-span-1' },
  { id: 5, src: '/images/gallery/goc-gallery-5.jpg', alt: 'Luxury Car Care', category: 'transformations', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 6, src: '/images/gallery/goc-gallery-6.jpg', alt: 'Flawless Paint Correction', category: 'ceramic', span: 'col-span-1 row-span-1' },
  { id: 7, src: '/images/gallery/goc-gallery-7.jpg', alt: 'High Gloss Protection', category: 'ppf', span: 'col-span-1 row-span-1' },
  { id: 8, src: '/images/gallery/goc-gallery-8.jpg', alt: 'Showroom Ready', category: 'transformations', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 9, src: '/images/gallery/goc-gallery-9.jpg', alt: 'Graphene Coating Shield', category: 'ceramic', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 10, src: '/images/gallery/goc-gallery-10.jpg', alt: 'Precision Detailing', category: 'interior', span: 'col-span-1 row-span-1' },
  { id: 11, src: '/images/gallery/goc-gallery-11.jpg', alt: 'Ultimate Hydrophobic Effect', category: 'ceramic', span: 'col-span-1 row-span-1' },
  { id: 12, src: '/images/gallery/goc-gallery-12.jpg', alt: 'Matte Finish Protection', category: 'ppf', span: 'col-span-1 row-span-1' },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  };

  return (
    <main className="flex min-h-screen flex-col bg-goc-dark" onKeyDown={handleKeyDown} tabIndex={-1}>

      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/ferrari-design.jpeg"
            alt="God of Ceramic Gallery"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Visual Excellence
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Gallery</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Our Work Speaks Volumes
          </p>
        </div>
      </section>



      {/* 3. MASONRY GALLERY GRID */}
      <SectionWrapper className="bg-goc-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Gallery Count */}
          <div className="flex items-center justify-between mb-10">
            <p className="text-gray-500 text-sm uppercase tracking-wider">
              Showing <span className="text-white font-bold">{filteredItems.length}</span> {filteredItems.length === 1 ? 'item' : 'items'}
            </p>
            <div className="w-20 h-[1px] bg-gradient-to-r from-goc-red/40 to-transparent"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px] grid-flow-dense">
            {filteredItems.map((item, i) => (
              <div
                key={item.id}
                className={`group relative bg-carbon border border-white/5 hover:border-goc-red/30 rounded-sm overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,30,30,0.15)] ${item.span}`}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.alt}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm border border-white/10 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4 text-goc-red" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-[2px] bg-goc-red mb-3"></div>
                  <p className="text-white font-bold uppercase tracking-wider text-sm">
                    {item.alt}
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mt-1 capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 uppercase tracking-wider text-sm">No items found in this category</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* 4. BEFORE & AFTER COMPONENT */}
      <BeforeAfterSection />

      {/* 5. LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/5 border border-white/10 hover:border-goc-red/50 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-goc-red/10 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/10 hover:border-goc-red/50 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-goc-red/10 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/10 hover:border-goc-red/50 rounded-sm flex items-center justify-center transition-all duration-300 hover:bg-goc-red/10 z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Caption below */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-white font-bold uppercase tracking-wider text-sm mb-1">
              {filteredItems[lightboxIndex].alt}
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">
              {lightboxIndex + 1} / {filteredItems.length}
            </p>
          </div>
        </div>
      )}

    </main>
  );
}
