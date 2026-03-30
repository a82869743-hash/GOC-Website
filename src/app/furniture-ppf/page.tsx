import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Sun, Sparkles, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "Furniture Ceramic Protection | God of Ceramic",
  description: "Don't ruin your ₹10 Lakh sofa! Premium ceramic coating protection for luxury furniture — scratch resistance, UV protection, self-healing technology by God of Ceramic.",
};

const benefits = [
  {
    icon: Shield,
    title: 'Scratch & Scuff Resistance',
    desc: 'Military-grade ceramic coating shields your luxury furniture from scratches, scuffs, and daily wear without altering its original look or feel.',
  },
  {
    icon: Sun,
    title: 'UV & Fade Protection',
    desc: 'Advanced UV-blocking nano layers prevent fading, yellowing, and sun damage — keeping leather, fabric, and wood surfaces pristine for years.',
  },
  {
    icon: Sparkles,
    title: 'Self-Healing Technology',
    desc: 'Minor surface scratches vanish with heat exposure. The ceramic layer reforms itself, maintaining a flawless finish indefinitely.',
  },
  {
    icon: Wrench,
    title: 'Effortless Maintenance',
    desc: 'Simply wipe clean — no special products required. The hydrophobic surface actively repels dust, liquid stains, body oils, and fingerprints.',
  },
];

const applications = [
  'Luxury Leather Sofas & Recliners',
  'Dining Tables & Kitchen Countertops',
  'Office Desks & Conference Tables',
  'Marble & Natural Stone Surfaces',
  'Wooden Cabinets & Designer Shelving',
  'Piano & Musical Instruments',
  'Premium Handbags & Leather Goods',
  'Metal Home Décor & Fixtures',
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We assess your furniture material, discuss your needs, and recommend the ideal ceramic protection solution tailored to your pieces.' },
  { step: '02', title: 'Surface Prep', desc: 'Every surface is meticulously cleaned, conditioned, and prepared to ensure maximum coating adhesion and longevity.' },
  { step: '03', title: 'Ceramic Application', desc: 'Our certified technicians apply nano ceramic coating in controlled conditions for a perfectly even, bubble-free protective layer.' },
  { step: '04', title: 'Quality Inspection', desc: 'Rigorous multi-point inspection ensures flawless coverage, hydrophobic performance, and pristine finish before handover.' },
];

export default function FurniturePPFPage() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">

      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/sofa-ppf.jpg"
            alt="Furniture Ceramic Protection Hero"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Surface Protection Redefined
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Furniture <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Protection</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light mb-4 text-goc-red/90 drop-shadow-sm uppercase">
            Don&apos;t ruin your ₹10 Lakh Sofa — Protect it with Ceramic
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Your premium furniture deserves the same protection trusted by supercar owners worldwide. Invisible. Self-healing. Permanent. God of Ceramic brings military-grade nano ceramic technology to your luxury interiors.
          </p>
        </div>
      </section>

      {/* 2. LARGE VIDEO SHOWCASE */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Watch The Process</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4">See Ceramic Protection In Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch how we transform and protect luxury furniture with nano ceramic coating technology — from prep to final reveal.
            </p>
          </div>

          {/* Large Video Embed */}
          <div className="relative w-full bg-carbon border border-white/5 hover:border-goc-red/30 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,30,30,0.15)] group">
            <div className="relative aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rqVtPYUW8bI?rel=0"
                title="Your ₹10 Lakh Sofa Is NOT Protected — God of Ceramic Furniture Protection"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video description note */}
          <div className="mt-6 flex items-start gap-4 p-5 bg-carbon border border-white/5 rounded-sm">
            <Shield className="text-goc-red w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Your ₹10 Lakh Sofa Is NOT Protected</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Luxury leather sofas, designer furniture, and premium surfaces are constantly exposed to body oils, UV damage, spills, and everyday wear. This video demonstrates how God of Ceramic&apos;s nano ceramic coating creates an invisible, permanent shield — keeping your investment looking brand new for years.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. BENEFITS GRID */}
      <SectionWrapper className="bg-carbon border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Why Ceramic for Furniture</p>
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

      {/* 4. WHAT WE PROTECT */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Versatile Protection</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4">What We Protect</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              From leather sofas worth lakhs to marble dining tables and antique wood — we protect surfaces that matter most to you.
            </p>
            <div className="space-y-4">
              {applications.map((app, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="text-goc-red w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10" aria-hidden="true"></div>
            <Image
              src="/images/sofa-ppf.jpg"
              alt="Furniture Ceramic Protection by God of Ceramic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 z-20 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm px-4 py-2 border border-white/10">
              <p className="text-white text-xs font-bold uppercase tracking-wider">Premium Protection</p>
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

      {/* 6. CTA — WHATSAPP + INSTAGRAM ONLY */}
      <SectionWrapper className="bg-goc-dark relative py-24 md:py-32">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-carbon to-[#0A0A0A]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6">
            Ready to <span className="text-goc-red">Protect</span> Your Furniture?
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Reach out to us on WhatsApp or Instagram. We&apos;ll assess your furniture and recommend the perfect ceramic protection solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/919925909526?text=Hi,%20I%20want%20to%20know%20about%20furniture%20ceramic%20protection"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm transition-all duration-500 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                {/* WhatsApp icon */}
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
                {/* Instagram icon */}
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
