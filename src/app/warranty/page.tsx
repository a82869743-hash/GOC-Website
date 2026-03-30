'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { Shield, FileCheck, Clock, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Image from 'next/image';

const coverageItems = [
  'Ceramic Coating Defects',
  'PPF Peeling or Bubbling',
  'Self-Healing Film Failures',
  'Coating Discoloration',
  'Adhesion Issues',
  'Manufacturing Defects',
];

const warrantyInfo = [
  {
    icon: Shield,
    title: 'Coverage Period',
    desc: 'Up to 10 years depending on the service package selected at the time of application.',
  },
  {
    icon: FileCheck,
    title: 'Claim Process',
    desc: 'Submit your claim online. Our team will review within 48 hours and schedule an inspection if needed.',
  },
  {
    icon: Clock,
    title: 'Resolution Time',
    desc: 'Most claims are resolved within 7 working days of inspection approval.',
  },
  {
    icon: AlertCircle,
    title: 'Requirements',
    desc: 'Valid warranty ID, proof of service, and adherence to maintenance guidelines are required.',
  },
];

export default function WarrantyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Honeypot anti-bot check
    if (formData.get('company')) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-goc-dark">

      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/cars-hero.jpeg"
            alt="God of Ceramic E-Warranty"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Protection Guaranteed
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            E-Warranty <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Claim</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Your GOC protection is backed by our comprehensive warranty program. Submit a claim below and our team will handle the rest.
          </p>
        </div>
      </section>

      {/* Warranty Info Cards */}
      <SectionWrapper className="bg-goc-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warrantyInfo.map((item, i) => (
              <div key={i} className="group bg-goc-dark border border-white/5 hover:border-goc-red/30 p-8 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <item.icon className="text-goc-red w-10 h-10 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-bold uppercase tracking-wider text-lg mb-3">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Claim Form + Coverage */}
      <SectionWrapper className="bg-goc-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Submit Claim</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-10">Warranty Claim Form</h3>

            {submitted ? (
              <div className="bg-carbon border border-goc-red/30 p-12 text-center">
                <Shield className="w-16 h-16 text-goc-red mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-white uppercase tracking-wider mb-4">Claim Submitted</h4>
                <p className="text-gray-400 max-w-md mx-auto">
                  Your warranty claim has been received. Our team will review your submission and contact you within 48 hours with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field — hidden from users, catches bots */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                  <label htmlFor="company">Leave this empty</label>
                  <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      maxLength={100}
                      autoComplete="name"
                      className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300 placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300 placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={15}
                      pattern="[+0-9\s]+"
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300 placeholder:text-gray-600"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Warranty ID *</label>
                    <input
                      type="text"
                      name="warrantyId"
                      required
                      maxLength={20}
                      pattern="GOC-[A-Za-z0-9-]+"
                      className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300 placeholder:text-gray-600"
                      placeholder="GOC-XXXX-XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Vehicle / Item Details *</label>
                    <input
                      type="text"
                      name="vehicleDetails"
                      required
                      maxLength={150}
                      className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300 placeholder:text-gray-600"
                      placeholder="e.g. BMW X5 2024 / Dining Table"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Service Date *</label>
                    <input
                      type="date"
                      name="serviceDate"
                      required
                      className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Service Type *</label>
                  <select
                    name="serviceType"
                    required
                    className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300"
                  >
                    <option value="">Select service type</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="ppf">Paint Protection Film (PPF)</option>
                    <option value="furniture-ppf">Furniture</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="paint-correction">Paint Correction</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-wider font-bold mb-2">Describe the Issue *</label>
                  <textarea
                    name="issueDescription"
                    required
                    rows={5}
                    maxLength={2000}
                    className="w-full bg-carbon border border-white/10 focus:border-goc-red/50 text-white px-4 py-3 outline-none transition-colors duration-300 resize-none placeholder:text-gray-600"
                    placeholder="Please describe the issue in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-goc-button text-white font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(255,30,30,0.3)] hover:shadow-[0_0_25px_rgba(255,30,30,0.5)]"
                >
                  Submit Warranty Claim
                </button>
              </form>
            )}
          </div>

          {/* Coverage Sidebar */}
          <div className="lg:col-span-2">
            <h2 className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Coverage</h2>
            <h3 className="text-3xl font-black uppercase tracking-wider text-white mb-8">What&apos;s Covered</h3>
            <div className="bg-carbon border border-white/5 p-8">
              <ul className="space-y-4">
                {coverageItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <span className="w-2 h-2 bg-goc-red rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="w-full h-[1px] bg-white/10 my-8"></div>
              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Not Covered</h4>
                <ul className="space-y-3 text-gray-500 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></span>
                    Damage from accidents or collisions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></span>
                    Improper maintenance or use of abrasive chemicals
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></span>
                    Natural wear beyond warranty period
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full shrink-0"></span>
                    Modifications by unauthorized third parties
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
