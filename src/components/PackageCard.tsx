import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Package } from '@/data/packages';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className={`relative bg-carbon border rounded-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,30,30,0.15)] flex flex-col h-full ${pkg.popular ? 'border-goc-red' : 'border-white/5'}`}>
      {pkg.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-goc-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
          Most Popular
        </div>
      )}
      
      <div className="mb-8 text-center border-b border-white/10 pb-8">
        <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">{pkg.name}</h3>
        <p className="text-gray-400 text-sm mb-6 h-10">{pkg.tagline}</p>
        <div className="text-4xl font-bold text-goc-red">{pkg.price}</div>
      </div>
      
      <ul className="flex-grow space-y-4 mb-8">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-gray-300">
            <Check size={18} className="text-goc-red mr-3 shrink-0 mt-0.5" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link href="/book" className={`block w-full text-center py-3 font-bold uppercase tracking-wider transition-all duration-300 ${pkg.popular ? 'bg-goc-button text-white shadow-lg shadow-goc-red/20 hover:shadow-goc-red/40' : 'bg-transparent border border-white/20 text-white hover:border-goc-red hover:text-goc-red'}`}>
        Book Now
      </Link>
    </div>
  );
}
