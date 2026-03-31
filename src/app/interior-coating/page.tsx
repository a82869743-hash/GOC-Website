import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Sun, Sparkles, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Car Interior Ceramic Coating | God of Ceramic",
  description: "Premium ceramic coating for your car's interior — leather seats, dashboard, console & trim. Stain-proof, UV-resistant, anti-aging nano protection by God of Ceramic.",
};

const benefits = [
  {
    icon: Shield,
    title: 'Stain & Spill Protection',
    desc: 'Nano ceramic coating creates an invisible barrier on leather, fabric, and plastic surfaces — repelling coffee, water, food stains, and body oils before they penetrate.',
  },
  {
    icon: Sun,
    title: 'UV & Heat Shield',
    desc: 'Advanced UV-blocking nano layer prevents dashboard cracking, leather fading, and plastic discoloration caused by prolonged sun exposure and extreme cabin heat.',
  },
  {
    icon: Sparkles,
    title: 'Anti-Aging & Gloss Retention',
    desc: 'Your interior surfaces maintain their factory-fresh look for years. The ceramic layer prevents wear marks, scuffs, and the dull aging that comes with daily use.',
  },
  {
    icon: Droplets,
    title: 'Effortless Cleaning',
    desc: 'Dust, fingerprints, and grime wipe off in seconds. The hydrophobic coating keeps every surface — from steering wheel to center console — spotless with minimal effort.',
  },
];

const protectionSurfaces = [
  'Leather Seats & Headrests',
  'Dashboard & Center Console',
  'Steering Wheel & Gear Knob',
  'Door Panels & Armrests',
  'Plastic & Vinyl Trim Pieces',
  'Piano Black & Glossy Surfaces',
  'Fabric & Alcantara Upholstery',
  'Infotainment Screens & Bezels',
];

const processSteps = [
  { step: '01', title: 'Deep Interior Clean', desc: 'Every surface is meticulously vacuumed, steam-cleaned, and decontaminated to remove embedded dirt, oils, and residues from leather, fabric, and plastics.' },
  { step: '02', title: 'Surface Conditioning', desc: 'Leather is conditioned and all surfaces are prepped with specialized cleaners to ensure maximum ceramic coating adhesion and penetration.' },
  { step: '03', title: 'Nano Coating Application', desc: 'Our certified technicians carefully apply nano ceramic coating to each interior surface — seats, dashboard, console, door panels, and trim — in controlled conditions.' },
  { step: '04', title: 'Cure & Quality Check', desc: 'The coating is heat-cured and undergoes a rigorous multi-point inspection to ensure uniform coverage, hydrophobic performance, and a pristine showroom finish.' },
];

export default function InteriorCoatingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/interior-coating-hero.png"
            alt="Car Interior Ceramic Coating Hero — God of Ceramic"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Pristine Cabin Protection
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Interior <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Coating</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light mb-4 text-goc-red/90 drop-shadow-sm uppercase">
            Your Cabin Deserves Supercar-Level Protection
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Premium nano ceramic coating for your car&apos;s interior surfaces. Protect leather seats, dashboard, console, and every touchpoint from stains, UV damage, and daily wear — by God of Ceramic.
          </p>
        </div>
      </section>

      {/* 2. SHOWCASE IMAGE SECTION */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Interior Protection</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4">Every Surface, Perfected</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our nano ceramic interior coating bonds at a molecular level with leather, plastic, vinyl, and fabric — creating an invisible, permanent shield that keeps your cabin looking factory-new.
            </p>
          </div>

          {/* Large Featured Image */}
          <div className="relative w-full bg-carbon border border-white/5 hover:border-goc-red/30 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,30,30,0.15)] group">
            <div className="relative aspect-video w-full">
              <Image
                src="/images/interior-coating-hero.png"
                alt="Interior Ceramic Coating Application by God of Ceramic"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-white font-bold uppercase tracking-wider text-sm">God of Ceramic</p>
                  <p className="text-gray-300 text-xs uppercase tracking-wider">Premium Interior Protection</p>
                </div>
                <div className="bg-goc-red/90 backdrop-blur-sm px-4 py-2 border border-goc-red/50">
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Nano Ceramic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature note */}
          <div className="mt-6 flex items-start gap-4 p-5 bg-carbon border border-white/5 rounded-sm">
            <Shield className="text-goc-red w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Cabin-Grade Ceramic Technology</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your car&apos;s interior is exposed to body oils, sweat, UV rays, food spills, and constant friction from daily use. God of Ceramic&apos;s nano ceramic coating creates an invisible, self-cleaning barrier on every surface — leather seats, plastic trim, dashboard, and console — preventing stains, cracking, fading, and premature aging while maintaining a showroom-fresh finish for years.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. BENEFITS GRID */}
      <SectionWrapper className="bg-carbon border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Why Interior Coating</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Unmatched Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="group bg-goc-dark border border-white/5 hover:border-goc-red/30 p-8 transition-all duration-500 relative overflow-hidden rounded-sm hover:shadow-[0_0_30px_rgba(255,30,30,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <b.icon className="text-goc-red w-10 h-10 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-bold uppercase tracking-wider text-lg mb-3 group-hover:text-goc-red transition-colors duration-300">{b.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. SURFACES WE PROTECT */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Complete Interior Coverage</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4">Surfaces We Protect</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From premium leather seats and soft-touch dashboards to piano-black trim and alcantara headliners — we coat and protect every surface your hands and body touch daily.
            </p>
            <div className="space-y-4">
              {protectionSurfaces.map((surface, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="text-goc-red w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{surface}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10" aria-hidden="true"></div>
            <Image
              src="/images/interior-coating-hero.png"
              alt="Car Interior Coating Protection by God of Ceramic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 z-20 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm px-4 py-2 border border-white/10">
              <p className="text-white text-xs font-bold uppercase tracking-wider">Showroom Fresh</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. PROCESS STEPS */}
      <SectionWrapper className="bg-[#050505] border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Precision At Every Step</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <div key={i} className="relative group">
                <span className="text-7xl font-black text-white/[0.03] absolute top-0 left-0 group-hover:text-goc-red/10 transition-colors duration-500">{s.step}</span>
                <div className="pt-12 pl-2">
                  <div className="w-8 h-[2px] bg-goc-red mb-4"></div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-lg mb-3 group-hover:text-goc-red transition-colors duration-300">{s.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. CTA — WHATSAPP + INSTAGRAM */}
      <SectionWrapper className="bg-goc-dark relative py-24 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-carbon to-[#0A0A0A]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6">
            Ready to <span className="text-goc-red">Protect</span> Your Interior?
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to us on WhatsApp or Instagram. We&apos;ll assess your car&apos;s interior and recommend the perfect ceramic coating solution for your vehicle.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/919925566886?text=Hi,%20I%20want%20to%20know%20about%20car%20interior%20ceramic%20coating"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm transition-all duration-500 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            {/* Instagram Button */}
            <Link
              href="https://www.instagram.com/godofceramic"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(228,64,95,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:text-[#E4405F] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Follow on Instagram
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
