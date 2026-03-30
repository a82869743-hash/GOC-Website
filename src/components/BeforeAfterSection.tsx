"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const BeforeAfterSlider = dynamic(() => import('./BeforeAfterSlider'), {
  loading: () => <div className="aspect-[4/3] bg-carbon animate-pulse rounded-sm border border-white/5" />,
});

const showcaseItems = [
  {
    beforeImage: '/images/before-exterior.png',
    afterImage: '/images/after-exterior.png',
    beforeAlt: 'Dirty car exterior before ceramic coating',
    afterAlt: 'Gleaming car exterior after ceramic coating',
    title: 'Full Exterior Ceramic Coating',
  },
  {
    beforeImage: '/images/before-interior.png',
    afterImage: '/images/after-interior.png',
    beforeAlt: 'Stained car interior before detailing',
    afterAlt: 'Pristine car interior after deep cleaning',
    title: 'Premium Interior Detailing',
  },
  {
    beforeImage: '/images/before-paint.png',
    afterImage: '/images/after-paint.png',
    beforeAlt: 'Scratched car paint before PPF application',
    afterAlt: 'Mirror-finish paint after PPF protection',
    title: 'Paint Correction & PPF',
  },
];

interface BeforeAfterSectionProps {
  whatsappUrl?: string;
}

export default function BeforeAfterSection({ 
  whatsappUrl = "https://wa.me/919727713480?text=Hi%2C%20I%20want%20car%20detailing%20service" 
}: BeforeAfterSectionProps = {}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#050505] border-y border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.03),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,30,30,0.03),transparent_60%)]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-goc-neon" />
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm">Transformations</p>
            <Sparkles className="w-4 h-4 text-goc-neon" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white mb-4">
            Witness The <span className="text-goc-red">Difference</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Drag the slider to reveal stunning before & after transformations. Every detail matters.
          </p>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-goc-red to-transparent mx-auto mt-6" aria-hidden="true" />
        </motion.div>

        {/* Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <BeforeAfterSlider key={index} {...item} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" aria-hidden="true" />
            <span className="relative z-10">Get This Finish</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
