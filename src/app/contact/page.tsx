import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: "Contact | God of Ceramic",
  description: "Get in touch with God of Ceramic auto detailing studio.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-goc-dark">
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/cars-hero.jpeg"
            alt="God of Ceramic Contact"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Get In Touch
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Ready to elevate your vehicle to the next level? Reach out to our team of experts.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-goc-dark py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Intel Grid */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-carbon border border-white/5 p-8 flex items-start">
                <MapPin className="text-goc-red w-8 h-8 mr-6 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-2">Studio Location</h3>
                  <p className="text-gray-400 leading-relaxed">GF 6-9, Arize House, 6, Old Padra Rd<br/>Opp. Ward Office, Ward No 6<br/>Shreenathji Park Society, Madhav Nagar<br/>Akota, Vadodara, Gujarat 390007</p>
                </div>
              </div>
              
              <div className="bg-carbon border border-white/5 p-8 flex items-start">
                <Phone className="text-goc-red w-8 h-8 mr-6 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-2">Phone</h3>
                  <p className="text-gray-400 leading-relaxed"><a href="tel:+919727713480" className="hover:text-goc-red transition-colors">+91 97277 13480</a></p>
                </div>
              </div>
              
              <div className="bg-carbon border border-white/5 p-8 flex items-start">
                <Clock className="text-goc-red w-8 h-8 mr-6 shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-2">Hours</h3>
                  <p className="text-gray-400 leading-relaxed">Mon - Sun: 9:00 AM - 9:00 PM<br/>Open All Day</p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="lg:col-span-2 h-[500px] lg:h-auto bg-carbon border border-white/5 relative group p-2">
              <div className="w-full h-full relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.712041704016!2d73.16065977775922!3d22.288895290976388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7e2bab69f59%3A0xc31da58599fe88e0!2sGod%20Of%20Ceramic!5e0!3m2!1sen!2sus!4v1774040896474!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(84%)' }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  title="God of Ceramic location on Google Maps">
                </iframe>
                {/* Subtle red overlay */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
        </div>
      </SectionWrapper>
    </main>
  );
}
