import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Clock, Sparkles, Shield, Droplets, Wrench } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const BeforeAfterSection = dynamic(() => import('@/components/BeforeAfterSection'), {
  loading: () => <div className="h-96 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading showcase...</p></div>,
});

const AutoWolfInstagramFeed = dynamic(() => import('@/components/AutoWolfInstagramFeed'), {
  loading: () => <div className="h-64 flex items-center justify-center"><p className="text-gray-500 uppercase tracking-wider text-sm">Loading feed...</p></div>,
});

const autoWolfPosts = [
  { href: "https://www.instagram.com/p/DTSWDD0CojZ/?igsh=eGl4MDhpeTJuaTl1", src: "/images/ig/auto-fixed-1.jpg" },
  { href: "https://www.instagram.com/p/DTSWKwSinbR/?igsh=dzk5aXl2ZmM4bnkw", src: "/images/ig/auto-fixed-2.jpg" },
  { href: "https://www.instagram.com/p/DTSWX6dCs07/?igsh=MTB2bThtZzFoaGduNA==", src: "/images/ig/auto-fixed-3.jpg" },
];

export const metadata = {
  title: "AUTO WOLF | Premium Car Detailing Branch",
  description: "Experience absolute perfection at AUTO WOLF, God of Ceramic's flagship premium detailing and protection studio.",
};

export default function AutoWolfBranchPage() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">

      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/autowolf-hero-2.jpg"
            alt="AUTO WOLF Studio"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            God of Ceramic Presents
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            AUTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">WOLF</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light mb-8">
            Premium Car Detailing & Protection
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link
              href="https://wa.me/918238013480?text=Hi,%20I%20want%20car%20detailing%20service%20at%20AUTO%20WOLF"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Book on WhatsApp <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="#gallery"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-black/40 border border-white/10 hover:border-goc-red/60 backdrop-blur-md overflow-hidden text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-700 rounded-sm"
            >
              <div className="absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-transparent via-goc-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-goc-red transition-colors duration-500">
                View Our Work
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT AUTO WOLF */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto md:max-w-none rounded-sm overflow-hidden group bg-black shadow-2xl flex items-center justify-center">
            {/* Extended wrapper to crop out top header and bottom footer of the instagram iframe */}
            <div className="absolute -top-[80px] -bottom-[120px] -left-8 -right-8 bg-black">
              <iframe
                src="https://www.instagram.com/p/DUnk3aIiiyV/embed/?theme=dark"
                className="w-full h-full border-0 bg-transparent scale-[1.05]"
                scrolling="no"
                allowTransparency={true}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Auto Wolf Instagram post"
              ></iframe>
            </div>
            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none" aria-hidden="true"></div>
          </div>

          <div>
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">The Standard</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-8">Refusing To Compromise</h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              AUTO WOLF is our flagship premium detailing sanctuary. We strip away the ordinary and orchestrate a symphony of restoration, protection, and unparalleled shine. Designed for enthusiasts who demand absolute perfection.
            </p>

            <div className="w-12 h-[1px] bg-white/20 my-8"></div>

            {/* Services Grid Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Sparkles, title: 'Ceramic Coating', desc: 'Unrivaled gloss and multi-year protection.' },
                { icon: Shield, title: 'PPF Installation', desc: 'Invisible armor defending against rock chips.' },
                { icon: Wrench, title: 'Paint Correction', desc: 'Flawless elimination of swirls and scratches.' },
                { icon: Droplets, title: 'Interior Detailing', desc: 'Pristine cabin restoration and scent prep.' },
              ].map((service, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-goc-red/40 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-goc-red group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1 group-hover:text-goc-red transition-colors">{service.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. OUR WORKS (INSTAGRAM REELS) */}
      <SectionWrapper id="gallery" className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Latest Projects</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Our Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'DVyWKi5igFo',
              'DTFsL1gCgA0',
              'DS2TaWRivzZ',
            ].map((reelId, i) => (
              <div
                key={i}
                className="relative w-full aspect-[4/5] rounded-sm overflow-hidden group bg-black shadow-2xl flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,30,30,0.15)] transition-all duration-500 border border-white/5 hover:border-goc-red/30"
              >
                {/* Extended wrapper to crop out top header and bottom footer of the instagram iframe */}
                <div className="absolute -top-[80px] -bottom-[120px] -left-8 -right-8 bg-black">
                  <iframe
                    src={`https://www.instagram.com/reel/${reelId}/embed/?theme=dark`}
                    className="w-full h-full border-0 bg-transparent scale-[1.05]"
                    scrolling="no"
                    allowTransparency={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Auto Wolf Instagram reel ${i + 1}`}
                  ></iframe>
                </div>
                <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. BEFORE & AFTER */}
      <BeforeAfterSection whatsappUrl="https://wa.me/918238013480?text=Hi,%20I%20want%20car%20detailing%20service%20at%20AUTO%20WOLF" />

      {/* 5. INSTAGRAM FEED */}
      <AutoWolfInstagramFeed
        posts={autoWolfPosts}
        instagramUrl="https://www.instagram.com/autowolf_cars?igsh=MWdpdHMyZnplend5ZA=="
        instagramHandle="@autowolf_cars"
      />

      {/* 6 & 7. WHATSAPP + CONTACT + LOCATION */}
      <SectionWrapper className="bg-carbon py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Info Side */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-8">AUTO WOLF HQ</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-5 bg-goc-dark border border-white/5 hover:border-goc-red/20 transition-colors duration-300 rounded-sm">
                <MapPin className="text-goc-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-2">Location</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">GF 6-9, Arize House, 6, Old Padra Rd, Akota, Vadodara, Gujarat 390007</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-goc-dark border border-white/5 hover:border-goc-red/20 transition-colors duration-300 rounded-sm">
                <Phone className="text-goc-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-2">Phone</h4>
                  <a href="tel:+918238013480" className="text-gray-400 leading-relaxed text-sm hover:text-white transition-colors">+91 82380 13480</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-goc-dark border border-white/5 hover:border-goc-red/20 transition-colors duration-300 rounded-sm">
                <Clock className="text-goc-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-2">Hours</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Mon - Sun: 9:00 AM - 9:00 PM<br />
                    <span className="text-[#25D366] mt-1 inline-block text-xs font-bold uppercase tracking-wider">Open Everyday</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="https://wa.me/918238013480?text=Hi,%20I%20want%20car%20detailing%20service%20at%20AUTO%20WOLF"
                target="_blank"
                className="group relative inline-flex items-center justify-center w-full px-8 py-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm transition-all duration-500 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book on WhatsApp <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-3 h-[500px] lg:h-auto min-h-[500px]">
            <div className="w-full h-full bg-goc-dark border border-white/5 relative group p-2 rounded-sm shadow-2xl">
              <div className="w-full h-full relative overflow-hidden rounded-sm">
                <iframe
                  src="https://www.google.com/maps?q=Auto+Wolf+Cars,+Vadodara&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(84%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  title="Auto Wolf Location on Google Maps"
                ></iframe>
                {/* Overlay to intercept initial scroll issues and add pure stylistic dark tint */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>

                {/* Get Directions overlay button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    href="https://maps.app.goo.gl/zBqEFLEJrx2fVn2c6?g_st=aw"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black/80 backdrop-blur-md border border-white/10 hover:border-goc-red text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm"
                  >
                    <MapPin className="text-goc-red w-4 h-4" /> Get Directions
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </SectionWrapper>

    </main>
  );
}
