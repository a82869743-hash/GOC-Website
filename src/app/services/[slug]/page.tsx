import type { Metadata } from 'next';
import { services } from '@/data/services';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | God of Ceramic`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Rotating gallery images for service detail pages — real GOC photos
const galleryImages = [
  '/images/gallery/goc-gallery-2.jpg',
  '/images/gallery/goc-gallery-5.jpg',
  '/images/gallery/goc-gallery-3.jpg',
  '/images/gallery/goc-gallery-7.jpg',
  '/images/gallery/goc-gallery-4.jpg',
  '/images/gallery/goc-gallery-11.jpg',
  '/images/gallery/goc-gallery-1.jpg',
  '/images/gallery/goc-gallery-8.jpg',
  '/images/gallery/goc-gallery-6.jpg',
  '/images/gallery/goc-gallery-10.jpg',
  '/images/gallery/goc-gallery-12.jpg',
  '/images/gallery/goc-gallery-9.jpg',
];

// Pick 3 high-quality gallery images for the bottom visual banner
const bannerImages = [
  '/images/gallery/goc-gallery-2.jpg',
  '/images/gallery/goc-gallery-5.jpg',
  '/images/gallery/goc-gallery-7.jpg',
];

export default function ServiceDetail({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const items = service.benefits.length > 0 ? service.benefits : (service.includes || []);
  const isCoating = service.benefits.length > 0;

  return (
    <main className="min-h-screen bg-goc-dark">
      {/* Hero */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-goc-dark via-goc-dark/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply"></div>
          <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover filter brightness-75" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-l-4 border-goc-red pl-5 sm:pl-8">
          <p className="text-goc-red font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 text-xs sm:text-sm">{service.tagline}</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-wider mb-4 sm:mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-6 sm:mb-8">
            {service.description}
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link href="/book" className="px-6 sm:px-8 py-3 bg-goc-red text-white font-bold uppercase tracking-wider text-xs sm:text-sm hover:scale-105 transition-transform active:scale-95">
              Book This Service
            </Link>
            <a href="tel:+919925566886" className="flex items-center gap-2 text-gray-300 hover:text-goc-red transition-colors text-sm">
              <Phone size={16} /> +91 99255 66886
            </a>
          </div>
        </div>
      </section>

      {/* Benefits/Includes with Image Grid */}
      <SectionWrapper className="bg-carbon border-y border-white/5 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-goc-red font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              {isCoating ? 'Why Choose This?' : 'What\'s Included'}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white">
              {isCoating ? 'Benefits' : 'Service Includes'}
            </h3>
          </div>
          
          {/* Benefits/Includes Grid with Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {items.map((item, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-sm border border-white/5 hover:border-goc-red/30 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={galleryImages[i % galleryImages.length]} 
                    alt={item}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 flex items-start gap-4 min-h-[120px]">
                  <span className="w-10 h-10 rounded-full bg-goc-red/10 border border-goc-red/20 flex items-center justify-center shrink-0 group-hover:bg-goc-red/20 transition-colors duration-300">
                    <ShieldCheck size={18} className="text-goc-red" />
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-base uppercase tracking-wide group-hover:text-goc-red transition-colors duration-300">
                      {item}
                    </h4>
                  </div>
                </div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-goc-red to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section with Visual Cards */}
      <SectionWrapper className="bg-goc-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Process Image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image 
                src={service.image} 
                alt={`${service.title} Process`} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <span className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs">Expert Process</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-wider mt-2">{service.title}</h3>
              </div>
              {/* Corner decoration */}
              <div className="absolute top-6 left-6 bottom-6 right-6 border border-white/10 pointer-events-none group-hover:border-goc-red/20 transition-colors duration-500"></div>
            </div>

            {/* Process Steps */}
            <div>
              <h2 className="text-goc-red font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">Step by Step</h2>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white mb-8 sm:mb-10">Our Process</h3>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div 
                    key={i} 
                    className="group/step flex items-center gap-6 py-5 border-b border-white/5 last:border-0 hover:pl-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/step:bg-goc-red/10 group-hover/step:border-goc-red/30 transition-all duration-300">
                      <span className="text-goc-red font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-gray-300 font-medium text-lg group-hover/step:text-white transition-colors duration-300">
                      {step.replace(/^\d+\.\s*/, '')}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-goc-red/10 border border-goc-red/30 rounded-sm text-center">
                <h4 className="text-goc-red font-bold uppercase tracking-widest text-sm mb-2">Completion Time</h4>
                <p className="text-white text-xl font-light">Typically 2-3 Days</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Visual Gallery Banner */}
      <section className="relative">
        <div className="grid grid-cols-3 h-[200px] sm:h-[300px] md:h-[400px]">
          {bannerImages.map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
              <Image 
                src={img} 
                alt={`Gallery ${i + 1}`}
                fill
                sizes="33vw"
                className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-white/40 uppercase tracking-[0.5em] text-sm font-bold">God of Ceramic</p>
            <p className="text-white/20 uppercase tracking-[0.3em] text-xs mt-2">Perfection Beyond Shine</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-carbon text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-carbon to-black"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">Don&apos;t wait until the damage is done. Secure your booking today and experience the God of Ceramic standard.</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link href="/book" className="px-10 py-5 bg-white text-black text-lg font-bold uppercase tracking-wider hover:bg-goc-red hover:text-white transition-colors duration-300 inline-block shadow-2xl">
              Reserve Your Spot
            </Link>
            <a 
              href="https://wa.me/919925566886?text=Hi!%20I'm%20interested%20in%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 border border-white/20 text-white text-lg font-bold uppercase tracking-wider hover:border-goc-red hover:text-goc-red transition-colors duration-300 inline-flex items-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
