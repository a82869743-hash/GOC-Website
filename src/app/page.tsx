import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { services } from '@/data/services';
import { packages } from '@/data/packages';
import { blogs } from '@/data/blogs';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight, Sparkles, BookOpen, Clock } from 'lucide-react';
import { FAQJsonLd } from '@/components/JsonLd';

import RollsRoyceStudioSection from '@/components/RollsRoyceStudioSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import InstagramFeedComponent from '@/components/InstagramFeedComponent';
import ContactCTASection from '@/components/ContactCTASection';
import HeroSection from '@/components/HeroSection';
import YouTubeVideoCard from '@/components/YouTubeVideoCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">
      
      {/* 1. HERO SECTION (HARDWARE-ACCELERATED VIDEO & DIRECT COMPOSITION) */}
      <HeroSection />

      {/* 2. SERVICES PREVIEW */}
      <SectionWrapper id="services" className="bg-carbon border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Premium Services</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
            {services.slice(3, 5).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i + 3} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center text-white font-bold tracking-wider uppercase hover:text-goc-red transition-colors">
              View All Services <span className="w-12 h-[1px] bg-goc-red ml-4" aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 2.5 INTERACTIVE 3D ROLLS-ROYCE COLOURED PPF STUDIO */}
      <RollsRoyceStudioSection />

      {/* 3. BRAND AMBASSADOR — Hiten Tejwani */}
      <SectionWrapper className="bg-goc-dark relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-goc-red/[0.03] to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-goc-red/[0.02] rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" aria-hidden="true"></div>
            <Image 
              src="/images/hiten-tejwani-ambassador.jpeg" 
              alt="Hiten Tejwani — Official Brand Ambassador of God of Ceramic" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw" 
              quality={85}
              loading="lazy"
              className="object-cover object-top transition-transform duration-1000 group-hover:scale-105" 
            />
            {/* Decorative border */}
            <div className="absolute top-6 left-6 bottom-6 right-6 border border-white/15 z-20 pointer-events-none group-hover:border-goc-red/20 transition-colors duration-700" aria-hidden="true"></div>
            
            {/* Name overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 z-30 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 backdrop-blur-md mb-3">
                <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
                <span className="text-goc-red text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">Official Brand Ambassador</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider drop-shadow-lg">Hiten Tejwani</h3>
            </div>
          </div>
          
          {/* Text Content */}
          <div>
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">The Face of Excellence</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6 sm:mb-8">
              Hiten Tejwani
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              We are proud to announce <span className="text-white font-semibold">Hiten Tejwani</span> as the Official Brand Ambassador of God of Ceramic. A name synonymous with trust, style, and excellence — perfectly reflecting our brand&apos;s commitment to absolute perfection.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              When you demand nothing but the best for your vehicle, you trust the best. With Hiten Tejwani championing our vision, God of Ceramic continues to set the gold standard in automotive care and protection across India.
            </p>
            <Link href="/about" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-goc-red hover:text-white transition-colors duration-300 inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. BEFORE & AFTER SHOWCASE (NEW) */}
      <BeforeAfterSection />

      {/* 5. PACKAGES */}
      <SectionWrapper className="bg-[#050505] border-y border-white/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Protection & Perfection</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4 sm:mb-6">Our Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">Choose the level of protection your vehicle deserves. From ceramic coating to PPF — every package is crafted for lasting excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <PackageCard key={i} pkg={pkg} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/packages" 
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                View All Packages & Pricing <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. TESTIMONIALS */}
      <SectionWrapper className="bg-goc-dark relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.02] skew-x-12 transform origin-top-right mix-blend-overlay" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-goc-red/[0.03] rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-goc-red/[0.02] rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="text-center mb-12 sm:mb-16 px-4">
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">The Cult of Shine</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4">Client Voices</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">Real reviews from real customers who trusted us with their prized vehicles.</p>
        </div>
        <TestimonialSlider />
      </SectionWrapper>

      {/* 7. YOUTUBE SHOWCASE */}
      <SectionWrapper className="bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Watch The Craft</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Our Work in Motion</h2>
          </div>

          {/* Horizontal Scrolling Videos */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} role="region" aria-label="Video showcase">
            {[
              { id: 'rqVtPYUW8bI', title: 'Premium Ceramic Coating Process' },
              { id: 'ztzcBp8IjzE', title: 'PPF Installation Masterclass' },
              { id: '9RpjsBGf6pk', title: 'Full Detail Transformation' },
            ].map((video) => (
              <YouTubeVideoCard key={video.id} id={video.id} title={video.title} />
            ))}
          </div>

          {/* GOC Official Channel Button */}
          <div className="text-center mt-10">
            <a 
              href="https://www.youtube.com/@godofceramic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-goc-red/50 hover:bg-goc-red/10 transition-all duration-500 rounded-sm"
              aria-label="Visit GOC Official YouTube Channel"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-goc-red group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-white font-bold uppercase tracking-[0.2em] text-sm group-hover:text-goc-red transition-colors duration-300">GOC Official Channel</span>
              <ArrowRight size={16} className="text-white/50 group-hover:text-goc-red group-hover:translate-x-2 transition-all duration-300" />
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* 8. INSTAGRAM & MEDIA GALLERY */}
      <InstagramFeedComponent />

      {/* 8.5 FROM THE JOURNAL / AUTOMOTIVE MASTERCLASSES */}
      <SectionWrapper className="bg-[#050505] border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-goc-red/10 border border-goc-red/30 mb-3">
                <Sparkles size={12} className="text-goc-red" />
                <span className="text-goc-red text-[11px] font-bold uppercase tracking-[0.2em]">Automotive Masterclass</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white">
                From The <span className="text-goc-red">Journal</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="mt-4 md:mt-0 inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-goc-red transition-colors group"
            >
              Explore All Articles <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogs.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-carbon/60 border border-white/5 hover:border-goc-red/40 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,30,30,0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 bg-black/75 backdrop-blur-md text-gray-300 text-[10px] flex items-center gap-1 rounded-sm">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-goc-red transition-colors line-clamp-2 uppercase tracking-wide mb-3">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-goc-red transition-colors"
                  >
                    Read Guide <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. CONTACT CTA (NEW — replaced old section) */}
      <ContactCTASection />

      {/* HOME PAGE FAQ SCHEMA */}
      <FAQJsonLd
        faqs={[
          {
            question: "What is Coloured PPF and how does it compare to vinyl wrap?",
            answer: "Coloured PPF (Paint Protection Film) is an advanced 10mil TPU film that combines bespoke color change with true rock-chip defense, instant self-healing elastomeric polymers, and an 8 to 10-year warranty, unlike 3mil vinyl wraps which offer zero impact absorption."
          },
          {
            question: "Does God of Ceramic offer services for luxury cars and Rolls-Royce?",
            answer: "Yes, God of Ceramic is Vadodara's premier studio specializing in high-value luxury marques including Rolls-Royce, Bentley, Ferrari, Porsche, and Mercedes-Maybach with certified climate-controlled installation bays."
          },
          {
            question: "Where is God of Ceramic located?",
            answer: "Our flagship detailing studio is located at GF 6-9, Arize House, Old Padra Rd, Akota, Vadodara, Gujarat 390007."
          }
        ]}
      />

    </main>
  );
}
