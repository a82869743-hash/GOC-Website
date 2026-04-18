"use client";

import { useState, useRef } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { services } from '@/data/services';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

import Image from 'next/image';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function BookPage() {
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Honeypot anti-bot check — if this hidden field is filled, reject silently
    if (formData.get('website')) return;

    // Set loading state
    setStatus({ type: 'loading', message: 'Submitting your booking...' });

    // Build JSON payload
    const payload = {
      fullName: formData.get('name') as string,
      phone: formData.get('phone') as string,
      vehicleModel: formData.get('carMake') as string,
      vehicleYear: formData.get('year') as string || '',
      service: formData.get('service') as string || '',
      preferredDate: formData.get('date') as string || '',
      preferredTime: formData.get('time') as string || '',
      notes: formData.get('notes') as string || '',
      website: formData.get('website') as string || '', // honeypot
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Booking submitted successfully!',
        });
        // Reset form
        formRef.current?.reset();
        // Scroll to top
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    }
  };

  const isLoading = status.type === 'loading';

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

          {status.type === 'success' ? (
            <div className="bg-carbon border border-green-500/40 p-12 text-center rounded-sm">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-4">Booking Confirmed</h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">{status.message}</p>
              <button
                onClick={() => setStatus({ type: 'idle', message: '' })}
                className="text-goc-red font-bold uppercase tracking-widest border-b border-goc-red pb-1 hover:text-white transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="bg-carbon border border-white/5 p-8 md:p-12 shadow-2xl space-y-8 rounded-sm relative">
              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-sm">
                  <Loader2 className="w-10 h-10 text-goc-red animate-spin mb-4" />
                  <p className="text-white font-bold uppercase tracking-wider text-sm">Submitting your booking...</p>
                </div>
              )}

              {/* Error Banner */}
              {status.type === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-sm">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-300 font-semibold text-sm">{status.message}</p>
                    <button
                      type="button"
                      onClick={() => setStatus({ type: 'idle', message: '' })}
                      className="text-red-400/60 text-xs mt-1 hover:text-red-300 transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {/* Honeypot field — hidden from users, catches bots */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <label htmlFor="website">Leave this empty</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required maxLength={15} pattern="[+0-9\s]+" inputMode="tel" autoComplete="tel" disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors disabled:opacity-50" placeholder="+91 90000 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="carMake" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Vehicle Make & Model *</label>
                  <input type="text" id="carMake" name="carMake" required maxLength={100} disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors disabled:opacity-50" placeholder="e.g. Porsche 911" />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Vehicle Year</label>
                  <input type="text" id="year" name="year" maxLength={4} pattern="\d{4}" inputMode="numeric" disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors disabled:opacity-50" placeholder="2024" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Service of Interest *</label>
                <select id="service" name="service" required disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors appearance-none cursor-pointer disabled:opacity-50">
                  <option value="" disabled selected>Select a Service</option>
                  {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Signature Package">Signature Package</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="date" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Preferred Date</label>
                  <input type="date" id="date" name="date" disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-gray-400 focus:text-white focus:outline-none focus:border-goc-red transition-colors cursor-text disabled:opacity-50" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Preferred Time</label>
                  <select id="time" name="time" disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors appearance-none cursor-pointer disabled:opacity-50">
                    <option value="Any Time">Any Time</option>
                    <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Additional Notes</label>
                <textarea id="notes" name="notes" rows={4} maxLength={1000} disabled={isLoading} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-goc-red transition-colors resize-none disabled:opacity-50" placeholder="Tell us about the condition of your vehicle..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-goc-button text-white font-bold uppercase tracking-widest text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-goc-red/20 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
