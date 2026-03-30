"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Furniture', path: '/furniture-ppf' },
    { name: 'Packages', path: '/packages' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Auto Wolf', path: '/branches' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Warranty', path: '/warranty' },
    { name: 'Information', path: '/information' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav scrolled py-3' : 'bg-transparent py-5'}`} aria-label="Main navigation">
      <div className="w-full px-6 lg:px-8 flex items-center">
        {/* Logo — far left */}
        <Link href="/" className="flex items-center group mr-auto shrink-0" aria-label="God of Ceramic — Home">
          <Image 
            src="/images/logo.png" 
            alt="God of Ceramic Logo" 
            width={160}
            height={64}
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-lighten transform-gpu"
            priority
          />
        </Link>

        {/* Desktop Nav — right side */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`text-sm tracking-wide uppercase font-medium transition-colors hover:text-goc-red ${pathname === link.path ? 'text-goc-red' : 'text-gray-300'}`}
              aria-current={pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book" className="px-6 py-2 bg-goc-button text-white text-sm font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,30,30,0.4)] hover:shadow-[0_0_25px_rgba(255,30,30,0.6)]">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-goc-red transition-colors" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-goc-red/30 py-4 px-6 flex flex-col gap-4" role="menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg uppercase tracking-wide font-medium ${pathname === link.path ? 'text-goc-red' : 'text-white'}`}
              role="menuitem"
              aria-current={pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/book" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 text-center bg-goc-button text-white text-lg font-bold uppercase tracking-wider rounded-sm"
            role="menuitem"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
