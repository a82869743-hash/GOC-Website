import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Shield, Sparkles, Target, Clock, Users, Star, Gem, Crown } from 'lucide-react';

export const metadata = {
  title: "About Us | God of Ceramic",
  description: "Discover the story behind God of Ceramic — the visionary owner, our relentless pursuit of perfection, and how we became Vadodara's premier luxury car detailing studio.",
};

const milestones = [
  {
    year: '2016',
    title: 'The Beginning',
    description: 'God of Ceramic was born from a single-minded obsession — to redefine car care in India. What started in a modest garage quickly became a movement.',
  },
  {
    year: '2017',
    title: 'Building the Foundation',
    description: 'Intensive research and training in advanced ceramic coating techniques. Partnerships forged with premium international product brands.',
  },
  {
    year: '2018',
    title: 'First Studio Launch',
    description: 'Our first professional studio opened in Vadodara, equipped with climate-controlled bays and world-class ceramic coating technology.',
  },
  {
    year: '2019',
    title: 'PPF Mastery',
    description: 'We introduced Paint Protection Film services, becoming one of the first studios in Gujarat to offer precision-cut, self-healing PPF installations.',
  },
  {
    year: '2020',
    title: 'Expanding Services',
    description: 'Added interior detailing, paint correction, and custom packages — establishing GOC as a one-stop luxury car care destination.',
  },
  {
    year: '2021',
    title: 'Growing Reputation',
    description: 'Word-of-mouth and social media recognition drove rapid growth. GOC became the go-to studio for luxury and supercar owners across Gujarat.',
  },
  {
    year: '2022',
    title: 'AUTO WOLF Branch',
    description: 'The launch of AUTO WOLF — our premium detailing sub-brand — marked a new chapter in luxury automotive care and expanded our reach.',
  },
  {
    year: '2023',
    title: 'Multi-City Presence',
    description: 'GOC expanded operations beyond Vadodara, bringing our signature quality and expertise to new locations and a wider clientele.',
  },
  {
    year: '2024',
    title: 'Franchise Expansion',
    description: 'With a proven model and growing demand, GOC opened its doors to franchise partners, bringing our standard of perfection to new cities.',
  },
  {
    year: '2025',
    title: 'Industry Leader',
    description: 'Today, GOC stands as one of India\'s most trusted names in ceramic coating and PPF, with 1,000+ vehicles protected and counting.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Uncompromising Standards',
    description: 'We reject shortcuts. Every vehicle receives our full attention, from multi-stage paint correction to flawless coating application.',
  },
  {
    icon: Gem,
    title: 'Premium Products Only',
    description: 'We use exclusively the world\'s most advanced ceramic coatings, PPF, and detailing products — nothing less than the best.',
  },
  {
    icon: Users,
    title: 'Client-First Obsession',
    description: 'Your vehicle is treated as our own. We build trust through transparency, communication, and results that speak for themselves.',
  },
  {
    icon: Shield,
    title: 'Long-Term Protection',
    description: 'Our coatings and films don\'t just beautify — they defend. Multi-year warranties back every service we deliver.',
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/after-exterior.png"
            alt="God of Ceramic Studio"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            The Origin Story
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Legacy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Built on Passion. Driven by Perfection.
          </p>
        </div>
      </section>

      {/* 2. OWNER / FOUNDER SECTION */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Top Row: Image + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center mb-16">
          
            {/* Owner Image — 2 cols */}
            <div className="md:col-span-2 relative aspect-[3/4] rounded-sm overflow-hidden group">
            <Image
              src="/images/owner.jpg"
              alt="Hiren Patel - Founder of God of Ceramic"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Bottom gradient for name tag */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>

            {/* Name tag */}
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white text-sm font-bold uppercase tracking-[0.2em]">Hiren Patel</p>
              <p className="text-goc-red text-xs font-bold uppercase tracking-wider mt-1">Founder & CEO</p>
            </div>
            </div>

            {/* Owner Bio — 3 cols */}
            <div className="md:col-span-3">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">The Founder</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-4 leading-tight">
              Hiren Patel
            </h2>
            
            <div className="w-12 h-[1px] bg-goc-red/60 my-6"></div>

            <div className="space-y-6 text-gray-300 text-base leading-relaxed mb-10">
              <p>
                Hiren Patel&apos;s journey in the automotive industry showcases his commitment to excellence and innovation. From running a repair garage to establishing multiple successful franchises and his own businesses, he has consistently demonstrated his ability to adapt and thrive in a dynamic market. His all ventures reflects his vision to offer comprehensive automotive services, ensuring customer satisfaction and trust.
              </p>
            </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-goc-red" />
                  <span className="text-white font-bold uppercase tracking-wider text-sm">Founder &amp; CEO</span>
                </div>
                <div className="w-[1px] h-6 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-goc-red" />
                  <span className="text-gray-400 text-sm uppercase tracking-wider">God of Ceramic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Certifications + Interests side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications Card */}
            <div className="p-8 md:p-10 bg-goc-dark/50 border border-white/5 rounded-sm">
                <h3 className="text-goc-red font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-goc-red"></span>
                  Certifications & Training
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Hiren Patel has completed several certifications and training programs to ensure he remains at the forefront of the automotive industry, including:
                </p>
                <ul className="space-y-6 text-sm text-gray-300">
                  <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Certified Automotive Technician (CAT)</span>
                      <span className="text-gray-400 leading-relaxed">Comprehensive training in vehicle repair and maintenance.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Ceramic Coating Specialist</span>
                      <span className="text-gray-400 leading-relaxed">Advanced certification in car ceramic coating applications from &quot;Always Dry&quot; and &quot;System X.&quot;</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Business Management</span>
                      <span className="text-gray-400 leading-relaxed">Completed courses in business administration and management to effectively run and expand his enterprises.</span>
                    </div>
                  </li>
                </ul>
            </div>

            {/* Personal Interests Card */}
            <div className="p-8 md:p-10 bg-goc-dark/50 border border-white/5 rounded-sm">
                <h3 className="text-goc-red font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-goc-red"></span>
                  Personal Interests
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Outside of his professional endeavors, Hiren is passionate about:
                </p>
                <ul className="space-y-6 text-sm text-gray-300">
                   <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Classic Cars</span>
                      <span className="text-gray-400 leading-relaxed">Enthusiast and collector of vintage automobiles.</span>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Motorsports</span>
                      <span className="text-gray-400 leading-relaxed">Active participant in local racing events.</span>
                    </div>
                  </li>
                   <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Community Service</span>
                      <span className="text-gray-400 leading-relaxed">Involved in various charitable activities and community development programs.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-goc-red mt-0.5 text-lg">✓</span>
                    <div>
                      <span className="text-white font-bold block mb-1 tracking-wide">Travel</span>
                      <span className="text-gray-400 leading-relaxed">Enjoys exploring new places and experiencing different cultures, often attending international auto shows.</span>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* DIRECTORS SECTION */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Our Directors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Director 1 — Rahul Jain */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-carbon border border-white/5 group-hover:border-goc-red/30 transition-all duration-500">
                <Image
                  src="/images/rahul-new.jpg"
                  alt="Rahul Jain - Director, God of Ceramic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-black uppercase tracking-wider">Rahul Jain</h3>
                <p className="text-goc-red text-xs font-bold uppercase tracking-[0.2em] mt-2">Director</p>
              </div>
            </div>

            {/* Director 2 — Hardik Patel */}
            <div className="group">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-carbon border border-white/5 group-hover:border-goc-red/30 transition-all duration-500">
                <Image
                  src="/images/director-hardik.jpg"
                  alt="Hardik Patel - Director, God of Ceramic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-black uppercase tracking-wider">Hardik Patel</h3>
                <p className="text-goc-red text-xs font-bold uppercase tracking-[0.2em] mt-2">Director</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. STATS SECTION */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '1,000+', label: 'Vehicles Protected' },
              { number: '10 Yr', label: 'Maximum Warranty' },
              { number: '6+', label: 'Years of Excellence' },
              { number: '2', label: 'Premium Studios' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <h3 className="text-4xl md:text-5xl font-black text-goc-red mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. HISTORY / TIMELINE */}
      <SectionWrapper className="bg-carbon border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">The GOC Story</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-goc-red/60 via-white/10 to-transparent" aria-hidden="true"></div>

            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-goc-red rounded-full shadow-[0_0_15px_rgba(255,30,30,0.5)] z-10" aria-hidden="true"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="text-goc-red font-black text-3xl md:text-4xl tracking-tight">{milestone.year}</span>
                    <h3 className="text-white font-bold uppercase tracking-wider text-lg mt-2 mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. VISION & MISSION */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white">Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group relative p-10 md:p-12 bg-carbon border border-white/5 hover:border-goc-red/30 rounded-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,30,30,0.08)] overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-goc-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-sm bg-goc-red/10 border border-goc-red/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-goc-red" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">Vision</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-goc-red/40">
                <span className="absolute -left-1 -top-2 text-goc-red text-5xl font-black leading-none opacity-30">&ldquo;</span>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To revolutionize the automotive service industry by providing unparalleled quality and convenience, ensuring every vehicle we touch performs at its best and looks its finest.
                </p>
                <span className="absolute -right-2 bottom-0 text-goc-red text-5xl font-black leading-none opacity-30">&rdquo;</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative p-10 md:p-12 bg-carbon border border-white/5 hover:border-goc-red/30 rounded-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,30,30,0.08)] overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-goc-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-sm bg-goc-red/10 border border-goc-red/30 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-goc-red" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">Mission</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-goc-red/40">
                <span className="absolute -left-1 -top-2 text-goc-red text-5xl font-black leading-none opacity-30">&ldquo;</span>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To deliver comprehensive automotive solutions that exceed customer expectations through innovation, expertise, and exceptional service, fostering long-term relationships with our clients based on trust and satisfaction.
                </p>
                <span className="absolute -right-2 bottom-0 text-goc-red text-5xl font-black leading-none opacity-30">&rdquo;</span>
              </div>
            </div>
          </div>

          {/* Core Values Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-6 bg-carbon/50 border border-white/5 hover:border-goc-red/20 rounded-sm transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mx-auto mb-4 group-hover:border-goc-red/40 group-hover:bg-goc-red/5 transition-all duration-300">
                  <value.icon className="w-5 h-5 text-goc-red group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-2 group-hover:text-goc-red transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. WHY GOC — IMAGE + TEXT */}
      <SectionWrapper className="bg-carbon border-b border-white/5 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-8 leading-tight">
              The GOC<br />Difference
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                While others cut corners, we invest in perfection. Climate-controlled bays ensure flawless coating cures. Dust-free environments eliminate contamination. Every tool, every product, every technique is chosen for one reason — the best possible result.
              </p>
              <p>
                Our team undergoes rigorous training and certification. We don&apos;t just apply products — we understand the science behind them. That&apos;s why GOC delivers results that last years, backed by warranties that prove it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-goc-red to-[#B30000] text-white font-bold uppercase tracking-[0.2em] text-xs overflow-hidden rounded-sm shadow-[0_0_30px_rgba(255,30,30,0.2)] hover:shadow-[0_0_50px_rgba(255,30,30,0.4)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Our Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-black/40 border border-white/10 hover:border-goc-red/60 backdrop-blur-md overflow-hidden text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-700 rounded-sm"
              >
                <div className="absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-transparent via-goc-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-goc-red transition-colors duration-500">
                  Get In Touch
                </span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10" aria-hidden="true"></div>
            <Image
              src="/images/goc-difference.png"
              alt="GOC Matte Finish Transformation — Customer Satisfaction"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-8 left-8 bottom-8 right-8 border border-white/20 z-20 pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. BOTTOM CTA */}
      <SectionWrapper className="bg-goc-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Ready to Experience Perfection?</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-8">
            Your Vehicle Deserves The Best
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed text-lg">
            Join 1,000+ car owners who trust God of Ceramic to protect and perfect their vehicles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://wa.me/919328823089?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm transition-all duration-500 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book on WhatsApp <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              href="/gallery"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-black/40 border border-white/10 hover:border-goc-red/60 backdrop-blur-md overflow-hidden text-white font-bold uppercase tracking-[0.2em] text-sm transition-all duration-700 rounded-sm"
            >
              <div className="absolute w-full h-[1px] bottom-0 left-0 bg-gradient-to-r from-transparent via-goc-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="relative z-10 flex items-center gap-3 group-hover:text-goc-red transition-colors duration-500">
                View Gallery
              </span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
