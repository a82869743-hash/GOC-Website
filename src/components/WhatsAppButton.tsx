"use client";

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919925566886?text=Hi%2C%20I%20want%20car%20detailing%20service"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Book on WhatsApp"
    >
      {/* Pulse ring animation */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366]/30 animate-pulseRing" aria-hidden="true" />
      <span className="absolute w-full h-full rounded-full bg-[#25D366]/20 animate-pulseRing" style={{ animationDelay: '0.5s' }} aria-hidden="true" />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
        <MessageCircle size={26} />
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
        Book on WhatsApp
      </span>
    </a>
  );
}
