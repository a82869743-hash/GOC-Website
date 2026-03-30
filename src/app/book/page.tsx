"use client";

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { services } from '@/data/services';

import Image from 'next/image';

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Honeypot anti-bot check — if this hidden field is filled, reject silently
    if (formData.get('website')) return;
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-goc-dark relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-white opacity-[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/gallery/goc-gallery-5.jpg"
            alt="God of Ceramic Booking"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Book Now
          </div>
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Spot</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light px-2">
            Fill out the form below to request a booking. Our master detailers will contact you to confirm the date and time.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-goc-dark pt-14 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {submitted ? (
            <div className="bg-carbon border border-goc-red p-12 text-center rounded-sm">
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-4">Request Received</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">Thank you for choosing God of Ceramic. One of our specialists will be in touch shortly to confirm your booking.</p>
              <button onClick={() => setSubmitted(false)} className="text-goc-red font-bold uppercase tracking-widest border-b border-goc-red pb-1 hover:text-white transition-colors">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-carbon border border-white/5 p-8 md:p-12 shadow-2xl space-y-8 rounded-sm">
              {/* Honeypot field — hidden from users, catches bots */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <label htmlFor="website">Leave this empty</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required maxLength={15} pattern="[+0-9\s]+" inputMode="tel" autoComplete="tel" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors" placeholder="+91 90000 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="carMake" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Vehicle Make & Model *</label>
                  <input type="text" id="carMake" name="carMake" required maxLength={100} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors" placeholder="e.g. Porsche 911" />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Vehicle Year</label>
                  <input type="text" id="year" name="year" maxLength={4} pattern="\d{4}" inputMode="numeric" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors" placeholder="2024" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Service of Interest *</label>
                <select id="service" name="service" required className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a Service</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  <option value="package">Signature Package</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="date" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Preferred Date</label>
                  <input type="date" id="date" name="date" className="w-full bg-black border border-white/10 p-4 text-gray-400 focus:text-white focus:outline-none focus:border-goc-red transition-colors cursor-text" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Preferred Time</label>
                  <select id="time" name="time" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Any Time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Additional Notes</label>
                <textarea id="notes" name="notes" rows={4} maxLength={1000} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors resize-none" placeholder="Tell us about the condition of your vehicle..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-goc-button text-white font-bold uppercase tracking-widest text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-goc-red/20">
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
