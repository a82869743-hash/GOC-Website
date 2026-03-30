"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Navigation, MessageCircle } from 'lucide-react';

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-goc-dark">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,30,30,0.06),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,240,255,0.04),transparent_50%)]" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-goc-red/30 to-transparent" aria-hidden="true" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white mb-4">
            Ready for <span className="text-goc-red">Perfection?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Your vehicle deserves the ultimate protection. Reach out to us today.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: CTA Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* WhatsApp CTA Card */}
            <div className="group relative p-8 rounded-sm border border-[#25D366]/20 bg-[#25D366]/5 backdrop-blur-sm overflow-hidden hover:border-[#25D366]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,211,102,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold uppercase tracking-wider text-lg mb-2">Book on WhatsApp</h3>
                  <p className="text-gray-400 text-sm mb-4">Instant response. Send us a message and we&apos;ll get back to you right away.</p>
                  <a
                    href="https://wa.me/919727713480?text=Hi%2C%20I%20want%20car%20detailing%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-[#20BD5A] transition-colors duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                  >
                    Chat Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram CTA Card */}
            <div className="group relative p-8 rounded-sm border border-pink-500/20 bg-pink-500/5 backdrop-blur-sm overflow-hidden hover:border-pink-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold uppercase tracking-wider text-lg mb-2">Follow Our Work</h3>
                  <p className="text-gray-400 text-sm mb-4">See our latest transformations, behind-the-scenes, and premium detailing content.</p>
                  <a
                    href="https://www.instagram.com/godofceramic?igsh=YWZqYWd4MDN3MDJr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold uppercase tracking-wider text-xs rounded-sm hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
                  >
                    @GodOfCeramic
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Directions CTA Card */}
            <div className="group relative p-8 rounded-sm border border-goc-neon/20 bg-goc-neon/5 backdrop-blur-sm overflow-hidden hover:border-goc-neon/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-br from-goc-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-goc-neon/10 border border-goc-neon/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                  <Navigation className="w-7 h-7 text-goc-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold uppercase tracking-wider text-lg mb-2">Visit Our Studio</h3>
                  <p className="text-gray-400 text-sm mb-4">GF 6-9, Arize House, 6, Old Padra Rd, Akota, Vadodara, Gujarat 390007</p>
                  <a
                    href="https://www.google.com/maps/dir//God+Of+Ceramic,+GF+6-9,+Arize+House,+6,+Old+Padra+Rd,+Akota,+Vadodara,+Gujarat+390007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-goc-neon/10 border border-goc-neon/30 text-goc-neon font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-goc-neon/20 hover:border-goc-neon/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                  >
                    Get Directions
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="tel:+919727713480" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-goc-red" />
                +91 97277 13480
              </a>
              <a href="mailto:info@godofceramic.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-goc-red" />
                info@godofceramic.com
              </a>
            </div>
          </motion.div>

          {/* Right: Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-sm overflow-hidden border border-white/10 group hover:border-goc-red/20 transition-all duration-500">
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.712041704016!2d73.16065977775922!3d22.288895290976388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7e2bab69f59%3A0xc31da58599fe88e0!2sGod%20Of%20Ceramic!5e0!3m2!1sen!2sus!4v1774040896474!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(84%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
                title="God of Ceramic location on Google Maps"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" aria-hidden="true" />

              {/* Map overlay badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-sm border border-white/10">
                  <MapPin className="w-4 h-4 text-goc-red" />
                  <span className="text-white text-xs font-bold uppercase tracking-wider">God of Ceramic</span>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-goc-red/10 via-transparent to-goc-neon/10 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
