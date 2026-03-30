import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Sparkles, Droplets, Check, Star, Clock, Users, Award, Car, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: "Packages | God of Ceramic",
  description: "Explore our Paint Protection Film, Ceramic Coating, and Graphene Coating packages. Premium auto detailing solutions since 2016 with up to 5-year protection.",
};

const ppfPackages = [
  {
    name: 'Shine Series',
    price: '₹49,999',
    popular: false,
  },
  {
    name: 'Armor Series',
    price: '₹59,999',
    popular: true,
  },
  {
    name: 'Legacy Series',
    price: '₹69,999',
    popular: false,
  },
];

const ppfBenefits = [
  'Self-Healing Technology',
  'Stone Chip Protection',
  'UV & Fade Shield',
  'High Gloss or Matte Finish',
];

const ceramicPackages = [
  {
    name: 'Basic',
    price: '₹9,999',
    popular: false,
  },
  {
    name: 'Standard',
    price: '₹11,999',
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹14,999',
    popular: false,
  },
];

const ceramicBenefits = [
  'Long-Lasting Shine',
  'UV Protection',
  'Easy Maintenance',
  'Water Beading Effect',
];

const graphenePackages = [
  {
    name: 'Basic',
    price: '₹11,999',
    popular: false,
  },
  {
    name: 'Standard',
    price: '₹13,999',
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹17,999',
    popular: false,
  },
];

const grapheneBenefits = [
  'Higher Heat Resistance',
  '5-Year Protection',
  'Scratch Resistance',
  'Advanced Hydrophobic Effect',
];

const whyChooseUs = [
  { icon: Clock, text: 'Since 2016 — 8+ Years Experience' },
  { icon: Users, text: '5,000+ Happy Clients' },
  { icon: Award, text: 'Trained & Certified Staff' },
  { icon: Star, text: 'Celebrity Approved (Hiten Tejwani)' },
  { icon: Car, text: 'Car Pickup & Drop Available' },
  { icon: Shield, text: 'Easy EMI & Warranty Options' },
];

const services = [
  'Ceramic Coating',
  'Graphene Coating',
  'Paint Protection Film (PPF)',
  'Hydro Dipping',
  'Interior Detailing',
  'Glass Coating',
  'Car Spa & Paint Correction',
];

export default function PackagesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/ceramic-hero.png"
            alt="God of Ceramic Packages"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Protection & Perfection
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Packages</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Choose the level of protection your vehicle deserves. From ceramic coating to PPF, every package is crafted for lasting excellence.
          </p>
        </div>
      </section>

      {/* 1. PAINT PROTECTION FILM (PPF) */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-sm bg-goc-red/10 border border-goc-red/30 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-goc-red" />
                </div>
                <div>
                  <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs">Ultimate Defense</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white mb-6 leading-tight">
                Paint Protection<br />Film <span className="text-goc-red">(PPF)</span>
              </h2>

              <div className="w-12 h-[1px] bg-goc-red/60 my-6"></div>

              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-5 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-goc-red"></span>
                Benefits
              </h3>
              <ul className="space-y-4 mb-10">
                {ppfBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-goc-red/15 border border-goc-red/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-goc-red" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Pricing Cards */}
            <div>
              <h3 className="text-goc-red font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-goc-red"></span>
                Packages
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {ppfPackages.map((pkg, i) => (
                  <div
                    key={i}
                    className={`relative p-6 rounded-sm text-center transition-all duration-500 group ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-goc-red/20 to-goc-red/5 border-2 border-goc-red/60 shadow-[0_0_30px_rgba(255,30,30,0.15)]'
                        : 'bg-goc-dark/60 border border-white/10 hover:border-goc-red/30'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-goc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        Popular
                      </div>
                    )}
                    <p className="text-white font-bold uppercase tracking-wider text-sm mb-4">{pkg.name}</p>
                    <p className={`text-2xl md:text-3xl font-black ${pkg.popular ? 'text-goc-red' : 'text-white'}`}>{pkg.price}</p>
                  </div>
                ))}
              </div>

              <Link
                href="https://wa.me/919328823089?text=Hi,%20I%20am%20interested%20in%20PPF%20packages"
                target="_blank"
                className="group relative mt-8 w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Book PPF Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. CERAMIC COATING PACKAGES */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Pricing Cards */}
            <div className="order-2 lg:order-1">
              <h3 className="text-goc-red font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-goc-red"></span>
                Packages
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {ceramicPackages.map((pkg, i) => (
                  <div
                    key={i}
                    className={`relative p-6 rounded-sm text-center transition-all duration-500 group ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-goc-red/20 to-goc-red/5 border-2 border-goc-red/60 shadow-[0_0_30px_rgba(255,30,30,0.15)]'
                        : 'bg-carbon border border-white/10 hover:border-goc-red/30'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-goc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        Popular
                      </div>
                    )}
                    <p className="text-white font-bold uppercase tracking-wider text-sm mb-4">{pkg.name}</p>
                    <p className={`text-2xl md:text-3xl font-black ${pkg.popular ? 'text-goc-red' : 'text-white'}`}>{pkg.price}</p>
                  </div>
                ))}
              </div>

              {/* Warranty Badge */}
              <div className="mt-8 p-5 bg-carbon/50 border border-goc-red/20 rounded-sm flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-goc-red/10 border-2 border-goc-red/40 flex items-center justify-center shrink-0">
                  <span className="text-goc-red font-black text-lg">2 Yr</span>
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-wider text-sm">Up to 2 Years Warranty</p>
                  <p className="text-gray-400 text-xs mt-1">Premium protection backed by our guarantee</p>
                </div>
              </div>

              <Link
                href="https://wa.me/919328823089?text=Hi,%20I%20am%20interested%20in%20Ceramic%20Coating%20packages"
                target="_blank"
                className="group relative mt-6 w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Book Ceramic Coating <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Right: Info */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-sm bg-goc-red/10 border border-goc-red/30 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-goc-red" />
                </div>
                <div>
                  <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs">Mirror Finish</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white mb-6 leading-tight">
                Ceramic Coating<br /><span className="text-goc-red">Packages</span>
              </h2>

              <div className="w-12 h-[1px] bg-goc-red/60 my-6"></div>

              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-5 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-goc-red"></span>
                Benefits
              </h3>
              <ul className="space-y-4">
                {ceramicBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-goc-red/15 border border-goc-red/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-goc-red" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. GRAPHENE COATING PACKAGES */}
      <SectionWrapper className="bg-carbon border-b border-white/5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-sm bg-goc-red/10 border border-goc-red/30 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-goc-red" />
                </div>
                <div>
                  <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs">Next-Gen Protection</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white mb-6 leading-tight">
                Graphene Coating<br /><span className="text-goc-red">Packages</span>
              </h2>

              <div className="w-12 h-[1px] bg-goc-red/60 my-6"></div>

              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-5 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-goc-red"></span>
                Benefits
              </h3>
              <ul className="space-y-4 mb-10">
                {grapheneBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-goc-red/15 border border-goc-red/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-goc-red" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Pricing Cards */}
            <div>
              <h3 className="text-goc-red font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-3">
                <span className="w-4 h-[1px] bg-goc-red"></span>
                Packages
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {graphenePackages.map((pkg, i) => (
                  <div
                    key={i}
                    className={`relative p-6 rounded-sm text-center transition-all duration-500 group ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-goc-red/20 to-goc-red/5 border-2 border-goc-red/60 shadow-[0_0_30px_rgba(255,30,30,0.15)]'
                        : 'bg-goc-dark/60 border border-white/10 hover:border-goc-red/30'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-goc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        Popular
                      </div>
                    )}
                    <p className="text-white font-bold uppercase tracking-wider text-sm mb-4">{pkg.name}</p>
                    <p className={`text-2xl md:text-3xl font-black ${pkg.popular ? 'text-goc-red' : 'text-white'}`}>{pkg.price}</p>
                  </div>
                ))}
              </div>

              {/* Warranty Badge */}
              <div className="mt-8 p-5 bg-goc-dark/50 border border-goc-red/20 rounded-sm flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-goc-red/10 border-2 border-goc-red/40 flex items-center justify-center shrink-0">
                  <span className="text-goc-red font-black text-lg">5 Yr</span>
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-wider text-sm">Up to 5 Years Protection</p>
                  <p className="text-gray-400 text-xs mt-1">Industry-leading graphene technology</p>
                </div>
              </div>

              <Link
                href="https://wa.me/919328823089?text=Hi,%20I%20am%20interested%20in%20Graphene%20Coating%20packages"
                target="_blank"
                className="group relative mt-6 w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Book Graphene Coating <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FREE CERAMIC COATING OFFER */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative p-10 md:p-14 bg-gradient-to-br from-goc-red/15 via-carbon to-carbon border border-goc-red/30 rounded-sm overflow-hidden text-center">
            {/* Glow effects */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-goc-red to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-goc-red/50 to-transparent"></div>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-goc-red/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>

            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs mb-4">Special Offer</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-4">
              Free Ceramic Coating<br />
              <span className="text-goc-red">With Partial PPF!</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 mb-8">
              {['Double Protection', 'Deep Gloss', 'Zero Extra Cost'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-goc-red/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-goc-red" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-8">
              <MapPin className="w-4 h-4 text-goc-red" />
              <span>Old Padra Road, Vadodara</span>
            </div>

            <Link
              href="https://wa.me/919328823089?text=Hi,%20I%20am%20interested%20in%20the%20Free%20Ceramic%20Coating%20with%20PPF%20offer"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.3)] hover:shadow-[0_0_50px_rgba(255,30,30,0.5)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Claim This Offer <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* WHY CHOOSE GOC + OUR SERVICES */}
      <SectionWrapper className="bg-carbon border-b border-white/5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Why Choose Us */}
            <div>
              <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Why Choose</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-8 leading-tight">
                God of <span className="text-goc-red">Ceramic?</span>
              </h2>

              <div className="space-y-5">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-goc-dark/50 border border-white/5 rounded-sm hover:border-goc-red/20 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-sm bg-goc-red/10 border border-goc-red/30 flex items-center justify-center shrink-0 group-hover:bg-goc-red/20 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-goc-red" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium tracking-wide">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div>
              <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wider text-white mb-8 leading-tight">
                Our <span className="text-goc-red">Services</span>
              </h2>

              <div className="space-y-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-goc-dark/50 border border-white/5 rounded-sm hover:border-goc-red/20 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-goc-red/15 border border-goc-red/30 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-goc-red" />
                    </div>
                    <span className="text-gray-300 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* BOTTOM CTA: Shine Bhi, Shield Bhi */}
      <SectionWrapper className="bg-goc-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Shine Bhi, Shield Bhi</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4">
            God of Ceramic <span className="text-goc-red">Ke Saath!</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            Join 5,000+ happy clients who trust GOC to protect and perfect their vehicles. Book your appointment today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://wa.me/919328823089?text=Hi,%20I%20want%20to%20book%20a%20service"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm transition-all duration-500 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book on WhatsApp <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="tel:+919259009526"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-black/40 border border-white/10 hover:border-goc-red/60 backdrop-blur-md overflow-hidden text-white font-bold uppercase tracking-[0.2em] text-sm transition-all duration-700 rounded-sm"
            >
              <div className="absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-transparent via-goc-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-goc-red transition-colors duration-500">
                <Phone size={16} /> Call: 99259 09526
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
