'use client';

import { useState } from 'react';
import { services, serviceCategories } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import SectionWrapper from '@/components/SectionWrapper';
import { Layers, Droplets, Wrench, Plus } from 'lucide-react';

import Image from 'next/image';

type CategoryKey = keyof typeof serviceCategories | 'all';

const categoryIcons: Record<CategoryKey, React.ReactNode> = {
  all: <Layers size={16} />,
  coating: <Droplets size={16} />,
  detailing: <Droplets size={16} />,
  mechanical: <Wrench size={16} />,
  additional: <Plus size={16} />,
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const categories: { key: CategoryKey; label: string; count: number }[] = [
    { key: 'all', label: 'All Services', count: services.length },
    ...Object.entries(serviceCategories).map(([key, val]) => ({
      key: key as CategoryKey,
      label: val.label,
      count: services.filter(s => s.category === key).length,
    })),
  ];

  return (
    <main className="min-h-screen bg-goc-dark">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/ppf-hero.png"
            alt="God of Ceramic Services"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Comprehensive Care
          </div>
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light px-2">
            From cutting-edge coatings and professional detailing to complete mechanical services — everything your vehicle needs, under one roof.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <SectionWrapper className="bg-goc-dark pt-16 md:pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-400 border ${
                  activeCategory === cat.key
                    ? 'bg-goc-red/10 border-goc-red/50 text-goc-red shadow-[0_0_20px_rgba(255,30,30,0.15)]'
                    : 'bg-white/[0.03] border-white/10 text-gray-400 hover:border-white/20 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span className={`transition-colors duration-300 ${
                  activeCategory === cat.key ? 'text-goc-red' : 'text-gray-600 group-hover:text-white'
                }`}>
                  {categoryIcons[cat.key]}
                </span>
                {cat.label}
                <span className={`ml-1 px-1.5 py-0.5 rounded-sm text-[10px] font-bold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-goc-red/20 text-goc-red'
                    : 'bg-white/5 text-gray-600 group-hover:text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <SectionWrapper className="bg-goc-dark pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active category label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-[2px] bg-goc-red"></span>
            <h2 className="text-white font-bold uppercase tracking-wider text-lg">
              {activeCategory === 'all' ? 'All Services' : serviceCategories[activeCategory].label}
            </h2>
            <span className="text-gray-600 text-sm">
              — {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredServices.map((service, i) => (
              <div
                key={service.id}
                className="animate-[fadeInUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
