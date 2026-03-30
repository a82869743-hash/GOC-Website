import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Award, Layers, BadgeCheck, Zap } from 'lucide-react';

import Image from 'next/image';

export const metadata = {
  title: "Franchise | God of Ceramic",
  description: "Own a God of Ceramic studio. Explore franchise opportunities with India's premium detailing brand.",
};

const advantages = [
  {
    icon: TrendingUp,
    title: 'Proven Business Model',
    desc: 'A battle-tested operational blueprint with high margins and recurring revenue streams.',
  },
  {
    icon: Award,
    title: 'Premium Brand Equity',
    desc: 'Leverage the God of Ceramic name — a brand synonymous with luxury automotive care.',
  },
  {
    icon: Users,
    title: 'Complete Training',
    desc: 'Comprehensive onboarding: technical mastery, customer service excellence, and business management.',
  },
  {
    icon: Layers,
    title: 'Supply Chain Access',
    desc: 'Direct access to world-class ceramic coatings, PPF, and proprietary products at partner pricing.',
  },
  {
    icon: BadgeCheck,
    title: 'Marketing Support',
    desc: 'National brand campaigns, social media assets, and local area marketing strategies included.',
  },
  {
    icon: Zap,
    title: 'Technology Platform',
    desc: 'Proprietary CRM, booking system, e-warranty, and customer management tools from day one.',
  },
];



export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-goc-dark">

      {/* Hero */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/after-exterior.png"
            alt="God of Ceramic Franchise"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Partner With Excellence
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Own a <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">GOC</span> Studio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Join India&apos;s fastest-growing premium detailing franchise. Build a thriving business backed by the God of Ceramic brand, training, and technology.
          </p>
        </div>
      </section>

      {/* Why Franchise */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">The GOC Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Why Partner With Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <div key={i} className="group bg-goc-dark border border-white/5 hover:border-goc-red/30 p-8 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <a.icon className="text-goc-red w-10 h-10 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-bold uppercase tracking-wider text-lg mb-3">{a.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Investment Model */}
      <SectionWrapper className="bg-[#050505] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10 md:py-20">
          <div className="text-center mb-16">
            <h2 className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Investment Model</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6">Own The Studio</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">A streamlined, high-efficiency business model designed for premium automotive care. Perfect for ambitious entrepreneurs looking to dominate their local market. All models include full GOC brand license, training, and ongoing support.</p>
          </div>

          <div className="relative group p-10 md:p-14 border border-goc-red/30 bg-gradient-to-b from-white/5 to-goc-dark rounded-sm transition-all duration-500 overflow-hidden shadow-[0_4px_60px_rgba(255,30,30,0.1)] hover:shadow-[0_4px_80px_rgba(255,30,30,0.2)] hover:border-goc-red/60">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-goc-red to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-goc-red/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-8 items-center md:items-start justify-between">
              
              <div className="text-center md:text-left flex-1">
                <span className="inline-block px-4 py-1.5 bg-goc-red/20 text-goc-red text-xs font-bold uppercase tracking-wider mb-6 border border-goc-red/30 rounded-sm">Featured Model</span>
                <h4 className="text-white font-black uppercase tracking-wider text-3xl md:text-4xl mb-4">EXPRESS STUDIO</h4>
                <p className="text-goc-red font-black text-5xl md:text-6xl mb-4 tracking-tighter drop-shadow-lg">₹15-25 Lakhs</p>
                <p className="text-gray-400 text-lg uppercase tracking-[0.2em] font-medium">500-800 SQ FT</p>
              </div>

              <div className="hidden md:block w-[1px] h-48 bg-white/10 self-center"></div>
              <div className="md:hidden w-full h-[1px] bg-white/10"></div>

              <div className="flex-1 w-full flex flex-col justify-center text-center pl-0 md:pl-8">
                <ul className="space-y-6 max-w-xs mx-auto md:mx-0 text-left">
                  {[
                    'Ceramic Coating',
                    'Interior Detailing',
                    'Paint Correction',
                    'Basic PPF Services'
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-center gap-5 text-gray-200 text-lg md:text-2xl font-medium group/item tracking-wide">
                      <div className="w-2.5 h-2.5 bg-goc-red rounded-full shrink-0 group-hover/item:scale-[1.8] group-hover/item:shadow-[0_0_15px_rgba(255,30,30,0.9)] transition-all duration-300 shadow-[0_0_8px_rgba(255,30,30,0.6)]"></div>
                      <span className="group-hover/item:text-white transition-colors duration-300 drop-shadow-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-goc-dark relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-carbon to-[#0A0A0A]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6">
            Start Your <span className="text-goc-red">Journey</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Ready to own a piece of perfection? Fill out our franchise inquiry form and our expansion team will be in touch within 48 hours.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-black/40 border border-white/10 hover:border-goc-red/60 backdrop-blur-md overflow-hidden text-white font-bold uppercase tracking-[0.3em] text-xs transition-all duration-700 rounded-sm shadow-[0_0_0_rgba(255,30,30,0)] hover:shadow-[0_0_30px_rgba(255,30,30,0.3)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-goc-red/0 via-goc-red/10 to-goc-red/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <span className="relative z-10 flex items-center gap-4">
              Apply for Franchise
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
            </span>
          </Link>
        </div>
      </SectionWrapper>

    </main>
  );
}
