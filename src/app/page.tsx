import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { services } from '@/data/services';
import { packages } from '@/data/packages';
import ServiceCard from '@/components/ServiceCard';
import PackageCard from '@/components/PackageCard';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight } from 'lucide-react';

const TestimonialSlider = dynamic(() => import('@/components/TestimonialSlider'), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading testimonials...</p></div>,
});

const BeforeAfterSection = dynamic(() => import('@/components/BeforeAfterSection'), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading showcase...</p></div>,
});

const InstagramFeedComponent = dynamic(() => import('@/components/InstagramFeedComponent'), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading feed...</p></div>,
});

const ContactCTASection = dynamic(() => import('@/components/ContactCTASection'), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading...</p></div>,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">
      
      {/* 1. HERO SECTION (VIDEO) */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center" aria-label="Hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] filter brightness-75"
        >
          <source src="/videos/car2.mp4" type="video/mp4" />
        </video>
        
        {/* Dark & Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#140000]/90 mix-blend-multiply pointer-events-none" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-goc-dark opacity-30 mix-blend-overlay pointer-events-none" aria-hidden="true"></div>
        
        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center">
          <div className="flex flex-col items-center justify-center pt-10">
            
            {/* Main Typography */}
            <div className="flex flex-col items-center opacity-0 animate-[fadeInUp_1.5s_ease-out_0.3s_forwards]">
              <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] font-black text-white uppercase tracking-tighter leading-none mb-0 drop-shadow-2xl flex flex-col items-center">
                <span>GOD</span>
                <span className="font-serif italic text-3xl md:text-5xl lg:text-5xl text-goc-red tracking-[0.3em] md:tracking-[0.5em] my-[-10px] md:my-[-20px] drop-shadow-lg z-10 relative">of</span>
                <span>CERAMIC</span>
              </h1>
              
              <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent via-goc-red to-transparent mb-6 mt-6 opacity-80" aria-hidden="true"></div>
              
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
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-goc-red/0 via-goc-red/10 to-goc-red/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" aria-hidden="true"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-goc-red/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-goc-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" aria-hidden="true"></div>
                
                <span className="relative z-10 flex items-center shrink-0 drop-shadow-md group-hover:text-goc-red transition-colors duration-500">
                  Explore Experience 
                  <ArrowRight className="ml-4 text-white group-hover:text-goc-red group-hover:translate-x-3 transition-all duration-500" size={16} />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

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

      {/* 3. ABOUT US (Split Layout) */}
      <SectionWrapper className="bg-goc-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-black/30 mix-blend-overlay z-10" aria-hidden="true"></div>
            <Image src="/images/goc-difference.png" alt="GOC Matte Finish Transformation — Customer Satisfaction" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 z-20 pointer-events-none" aria-hidden="true"></div>
          </div>
          
          <div>
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">The Standard</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6 sm:mb-8">Refusing To Compromise</h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              At God of Ceramic, we don&apos;t just wash cars. We orchestrate a symphony of restoration, protection, and unparalleled shine. Born from a passion for automotive excellence, our studio treats every vehicle like a masterpiece.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Using only the world&apos;s most advanced ceramic coatings and self-healing protective films, we lock in perfection. Your vehicle is an investment; we are its ultimate defense.
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
            ].map((video, i) => (
              <div key={i} className="snap-center shrink-0 w-[85vw] md:w-[560px] group">
                <div className="relative aspect-video bg-carbon border border-white/5 group-hover:border-goc-red/30 rounded-sm overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,30,30,0.1)]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <p className="mt-4 text-white font-bold uppercase tracking-wider text-sm group-hover:text-goc-red transition-colors">{video.title}</p>
              </div>
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

      {/* 9. CONTACT CTA (NEW — replaced old section) */}
      <ContactCTASection />

    </main>
  );
}
