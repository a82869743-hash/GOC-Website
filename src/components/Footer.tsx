import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Youtube, Clock, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="God of Ceramic — Home">
              <Image 
                src="/images/logo.png" 
                alt="God of Ceramic Logo" 
                width={200}
                height={80}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain mix-blend-lighten opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Perfection beyond shine. The ultimate destination for luxury car detailing, paint protection &amp; premium ceramic coatings.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/godofceramic?igsh=YWZqYWd4MDN3MDJr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-goc-red/10 hover:border-goc-red/40 hover:text-goc-red transition-all duration-300 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@godofceramic" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-goc-red/10 hover:border-goc-red/40 hover:text-goc-red transition-all duration-300 active:scale-95"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://wa.me/919925566886?text=Hi!%20I'm%20interested%20in%20detailing%20services%20for%20my%20car." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:text-[#25D366] transition-all duration-300 active:scale-95"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-goc-red"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2.5">
              {[
                { href: '/services', label: 'Services' },
                { href: '/furniture-ppf', label: 'Furniture' },
                { href: '/packages', label: 'Packages' },
                { href: '/franchise', label: 'Franchise' },
                { href: '/branches', label: 'Auto Wolf' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/warranty', label: 'Warranty' },
                { href: '/information', label: 'Information' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-300 inline-flex items-center gap-1 py-0.5 active:text-goc-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-goc-red"></span>
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=GF+6-9,+Arize+House,+Old+Padra+Rd,+Akota,+Vadodara,+Gujarat+390007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="text-goc-red w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold tracking-wider uppercase mb-1 group-hover:text-goc-red transition-colors">Auto Wolf Flagship</span>
                    <span className="text-gray-500 text-sm leading-relaxed">
                      GF 6-9, Arize House, 6, Old Padra Rd, Akota, Vadodara, Gujarat 390007
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+919925566886" className="flex items-center gap-3 text-gray-500 text-sm hover:text-white transition-colors duration-300 active:text-goc-red py-1">
                  <Phone className="text-goc-red w-4 h-4 shrink-0" />
                  +91 99255 66886
                </a>
              </li>
              <li>
                <a href="mailto:info@godofceramic.com" className="flex items-center gap-3 text-gray-500 text-sm hover:text-white transition-colors duration-300 active:text-goc-red py-1 break-all">
                  <Mail className="text-goc-red w-4 h-4 shrink-0" />
                  info@godofceramic.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hours + CTA Column */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-[2px] bg-goc-red"></span>
              Studio Hours
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm gap-4">
                <span className="text-gray-500 flex items-center gap-2">
                  <Clock size={14} className="text-goc-red shrink-0" />
                  Mon — Sun
                </span>
                <span className="text-white font-medium whitespace-nowrap">9:00 AM — 9:00 PM</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link 
                href="/book" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-goc-red text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-300 rounded-sm text-center active:scale-95"
              >
                Book Appointment
                <ArrowUpRight size={14} />
              </Link>
              <a 
                href="https://wa.me/919925566886?text=Hi!%20I'm%20interested%20in%20detailing%20services%20for%20my%20car." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-all duration-300 rounded-sm text-center active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs tracking-wider text-center sm:text-left">
            &copy; {new Date().getFullYear()} God of Ceramic. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs text-gray-600 tracking-wider">
            <Link href="/warranty" className="hover:text-white transition-colors active:text-goc-red">Warranty Policy</Link>
            <span className="text-white/10">|</span>
            <Link href="/contact" className="hover:text-white transition-colors active:text-goc-red">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
