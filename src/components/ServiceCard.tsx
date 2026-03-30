import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link 
      href={`/services/${service.slug}`}
      className="group relative block bg-carbon rounded-sm overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 hover:-translate-y-3"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-goc-red to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20"></div>

      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
          loading="lazy"
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/30 via-transparent to-transparent"></div>

        {/* Price badge — slides in on hover */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-goc-red text-xs font-bold uppercase tracking-wider translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {service.pricing}
          </span>
        </div>
        
        {/* Title overlay on image */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <h3 className="text-2xl font-black text-white uppercase tracking-wider group-hover:text-goc-red transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-1 font-medium">{service.tagline}</p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 relative">
        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        <p className="text-gray-500 line-clamp-2 mb-6 text-sm leading-relaxed relative z-10 group-hover:text-gray-400 transition-colors duration-500">{service.description}</p>
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center text-white/60 font-bold text-xs group-hover:text-goc-red transition-colors duration-500 uppercase tracking-[0.2em]">
            Explore Service
            <ArrowRight size={14} className="ml-3 group-hover:translate-x-3 transition-transform duration-500" />
          </div>
          
          {/* Decorative corner */}
          <div className="w-8 h-8 border-r border-b border-white/5 group-hover:border-goc-red/30 transition-colors duration-700"></div>
        </div>
      </div>
    </Link>
  );
}
