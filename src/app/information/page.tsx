import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import { Shield, Droplets, Sun, AlertTriangle, CheckCircle, Layers, LayoutGrid } from 'lucide-react';

export const metadata = {
  title: 'Information & Technology | God of Ceramic',
  description: 'Discover the advanced protective science behind God of Ceramic coating technology.',
};

export default function InformationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-goc-dark">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 w-full h-full bg-black">
          <Image
            src="/images/interior-hero.png"
            alt="Information & Technology"
            fill
            className="object-cover scale-[1.02] filter brightness-50 opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-goc-dark pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full flex flex-col items-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 mb-6 font-mono text-goc-red text-xs md:text-sm tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-goc-red animate-pulse"></span>
            Advanced Protective Science
          </div>
          <h1 className="text-[3rem] md:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
            Coating <span className="text-transparent bg-clip-text bg-gradient-to-r from-goc-red to-red-500">Excellence</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Understanding the technology behind God of Ceramic&#39;s unrivaled automotive protection and detailing processes.
          </p>
        </div>
      </section>

      {/* 2. WHY CERAMIC: BENEFITS & UNCOATED VS COATED */}
      <SectionWrapper id="ceramic-benefits" className="bg-goc-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Why <span className="text-goc-red">Ceramic Coating?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Your car faces dirt, scratches, and sun damage every day. Ceramic coating forms a rigid shield protecting it from all that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Uncoated Container */}
            <div className="bg-carbon border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <AlertTriangle className="w-40 h-40 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase mb-6 flex items-center gap-3 relative z-10">
                <span className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </span>
                Uncoated Surface
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed flex-grow relative z-10">
                Pores and microscopic imperfections in the paint trap dirt and grime, leading to deeply embedded contaminants and vastly accelerated wear over time.
              </p>
              
              <div className="mt-8 p-6 bg-black/40 rounded-xl border border-white/5 relative z-10">
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <Sun className="w-6 h-6 text-red-500/50 mb-2" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">UV Rays</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Droplets className="w-6 h-6 text-red-500/50 mb-2" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Acid Rain</span>
                  </div>
                </div>
                <div className="h-4 w-full bg-red-950/40 rounded-full overflow-hidden relative border-t border-red-500/20 shadow-inner">
                  {/* Rough surface representation */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSdub25lJy8+PGNpcmNsZSBjeD0nMTAnIGN5PSc1JyByPSc1JyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LDAuMSknLz48Y2lyY2xlIGN4PSczMCcgY3k9JzInIHI9JzInIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsMC4xKScvPjxjaXJjbGUgY3g9JzUwJyBjeT0nNicgcj0nNicgZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwwLjEpJy8+PGNpcmNsZSBjeD0nODAnIGN5PSc0JyByPSc0JyBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LDAuMSknLz48L3N2Zz4=')]"></div>
                </div>
                <p className="text-red-400 text-xs text-center mt-3 uppercase tracking-widest font-semibold">Microscopic Paint Pores</p>
              </div>
            </div>

            {/* Coated Container (GOC) */}
            <div className="bg-gradient-to-br from-goc-red/10 to-carbon border border-goc-red/30 rounded-2xl p-8 relative overflow-hidden group shadow-[0_0_40px_rgba(255,30,30,0.1)] flex flex-col">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Shield className="w-48 h-48 text-goc-red" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase mb-6 flex items-center gap-3 relative z-10">
                <span className="w-10 h-10 rounded-full bg-goc-red/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-goc-red" />
                </span>
                God of Ceramic Coating
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed flex-grow relative z-10">
                Creates a powerful nanoscopic barrier that intensely repels water <span className="text-white font-semibold">(Hydrophobic Effect)</span>, prevents chemical bonding, and completely stops contaminants from attaching. Keeps paint pristine and incredibly easy to clean.
              </p>
              
              <div className="mt-8 p-6 bg-black/40 rounded-xl border border-white/5 relative z-10">
                <div className="flex justify-between items-end mb-4">
                  <div className="text-center group/icon">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2 border border-blue-500/30">
                      <Droplets className="w-6 h-6 text-blue-400 group-hover/icon:-translate-y-1 transition-transform" />
                    </div>
                    <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Hydrophobic Repel</span>
                  </div>
                  <div className="text-center group/icon">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 border border-white/20">
                      <Shield className="w-6 h-6 text-white group-hover/icon:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Contaminant Shield</span>
                  </div>
                </div>
                
                {/* Flat smooth coated line */}
                <div className="h-3 w-full bg-gradient-to-r from-goc-red via-red-500 to-white rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,0,0,0.5)]"></div>
                <p className="text-goc-red text-xs text-center mt-3 uppercase tracking-widest font-semibold">Flawless Protective Layer</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. CERAMIC VS BMG COMPARISON */}
      <SectionWrapper id="ceramic-vs-bmg" className="py-20 bg-black relative border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,30,30,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              The Ceramic <span className="text-gray-500 text-2xl md:text-4xl">vs.</span> BMG Coating Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Understanding the mechanical dynamics at the microscopic level between Ceramic Matrix formulations and Bulk Metallic Glass (BMG).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Ceramic Impact */}
            <div className="bg-carbon border border-white/10 p-10 flex flex-col justify-between rounded-xl hover:border-goc-red/30 transition-colors">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-goc-red/10 rounded-lg flex items-center justify-center">
                    <Layers className="text-goc-red w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Ceramic Impact</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                  Brittle fracture dominates during impact, creating dense, fragmented particle stacks upon the glass substrate. This localized friction produces pristine new-surface adhesion properties and bonding.
                </p>
              </div>
              <div className="bg-gradient-to-r from-goc-red/20 to-transparent p-6 border-l-4 border-goc-red rounded-r-xl">
                <p className="text-white text-lg uppercase tracking-wider font-bold flex flex-col gap-1">
                  <span>Dense Coating Formation</span>
                  <span className="text-goc-red text-sm">&#10003; Preferred Method</span>
                </p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Micro-fragmentation allows for incredibly dense particle packing inside the crater. The final layer is an atomic-level 9H matrix.
                </p>
              </div>
            </div>

            {/* BMG Plastic Impact  */}
            <div className="bg-[#111] border border-white/5 p-10 flex flex-col justify-between rounded-xl">
               <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                    <LayoutGrid className="text-gray-500 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-300 uppercase tracking-widest">BMG Plastic Impact</h3>
                </div>
                <p className="text-gray-500 leading-relaxed mb-8 font-light text-lg">
                  Bulk Metallic Glass exhibits significant plastic deformation, creating a different type of bond and energy profile. Particles deform rather than cleanly fragmenting.
                </p>
              </div>
               <div className="bg-black/80 p-6 border-l-4 border-gray-600 rounded-r-xl shadow-inner">
                <p className="text-gray-400 text-lg uppercase tracking-wider font-bold">Porous Coating Formation</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  The unique plastic deformation of BMG results in a network of controlled pores and different bonding mechanics. Anchoring layer is less uniform.
                </p>
              </div>
            </div>

          </div>
        </div>
      </SectionWrapper>


      {/* 4. TOTAL EXCELLENCE FLOW CHART */}
      <SectionWrapper id="excellence-flow" className="py-24 bg-goc-dark relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 md:border-l-8 md:border-goc-red md:pl-6 leading-tight">
              Total Ceramic Coating <br className="hidden md:block"/>
              <span className="text-gray-500">Excellence Flow Chart</span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto md:mx-0">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute left-24 top-0 bottom-0 w-[4px] bg-gradient-to-b from-goc-red via-red-900 to-transparent z-0"></div>

            <div className="space-y-12">
              
              {/* Wash Step */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 w-full">
                <div className="w-48 h-16 shrink-0 bg-goc-red rounded shadow-[0_10px_30px_rgba(255,0,0,0.3)] flex items-center justify-center border border-red-400/50 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                   <span className="text-white font-black uppercase text-2xl tracking-widest relative z-10">Wash</span>
                </div>
                <div className="bg-carbon border border-white/5 p-8 rounded-xl flex-grow w-full md:w-auto shadow-2xl relative">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-carbon hidden md:block"></span>
                  
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                     <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">Guards Against Scratches</h4>
                     <span className="text-goc-red font-mono font-bold self-start mt-2 md:mt-0 px-3 py-1 bg-goc-red/10 rounded border border-goc-red/30">☑ V6</span>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest mb-6 font-semibold border-b border-white/10 pb-4">Molecular Shield</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-gray-500"/> New Surface E</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-gray-500"/> Friction E</li>
                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-goc-red"/> Hydrophobic Effect</li>
                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-goc-red"/> Ceramic Bond</li>
                  </ul>
                </div>
              </div>

              {/* Clay arrow down visual */}
              <div className="hidden md:flex justify-center md:justify-start pl-[5.25rem]">
                <div className="w-6 h-12 border-x-4 border-b-4 border-dashed border-goc-red/40 animate-pulse"></div>
              </div>

              {/* Clay Step */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10">
                <div className="w-48 h-16 shrink-0 bg-[#b30000] rounded shadow-[0_10px_30px_rgba(150,0,0,0.3)] flex items-center justify-center border border-red-500/30 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                   <span className="text-white font-black uppercase text-2xl tracking-widest relative z-10">Clay</span>
                </div>
                <div className="bg-carbon border border-white/5 p-8 rounded-xl flex-grow w-full md:w-auto shadow-2xl relative">
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-carbon hidden md:block"></span>
                  <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-6">Keeps Shiny For Long</h4>
                  <ul className="flex flex-wrap gap-x-8 gap-y-4">
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-goc-red"/> New Surface E</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-goc-red"/> Friction E</li>
                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-goc-red"/> Hydrophobic Effect</li>
                  </ul>
                </div>
              </div>

               {/* Polish split path visual */}
              <div className="hidden md:flex justify-center md:justify-start pl-16">
                 <svg width="100" height="80" viewBox="0 0 100 80" className="opacity-50 text-goc-red">
                    <path d="M 30 0 L 30 30 L 90 30 L 90 50" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="6 4" />
                 </svg>
              </div>

              {/* Polish Step */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start md:pl-20 gap-6 md:gap-12 z-10">
                <div className="w-48 h-16 shrink-0 bg-goc-red/90 rounded shadow-[0_10px_30px_rgba(255,0,0,0.3)] flex items-center justify-center border border-red-500/50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                   <span className="text-white font-black uppercase text-2xl tracking-widest relative z-10">Polish</span>
                </div>
                <div className="bg-gradient-to-br from-carbon to-black border border-white/5 p-8 rounded-xl flex-grow w-full md:w-auto shadow-2xl">
                  
                  <div className="space-y-6">
                    {/* Level 1 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white/5 p-4 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center font-black text-xl text-gray-400">1</div>
                      <div className="flex-grow">
                        <span className="text-gray-400 font-bold uppercase tracking-wider block mb-1">Poor Condition</span>
                        <span className="text-white uppercase font-bold text-lg">Dirt slides off effortlessly.</span>
                        <div className="flex gap-4 mt-2 text-xs text-gray-500"><span className="flex items-center gap-1"><CheckCircle className="w-3 h-3"/> New Surface E</span> <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3"/> Hydrophobic Bond</span></div>
                      </div>
                    </div>
                    {/* Level 2 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white/10 p-4 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-black text-xl text-gray-300">2</div>
                      <div className="flex-grow">
                        <span className="text-gray-400 font-bold uppercase tracking-wider block mb-1">Moderate Condition</span>
                        <span className="text-white uppercase font-bold text-lg">Dirt slides off effortlessly.</span>
                        <div className="flex gap-4 mt-2 text-xs text-gray-400"><span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-goc-red"/> New Surface E</span> <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-goc-red"/> Hydrophobic Bond</span></div>
                      </div>
                    </div>
                    {/* Level 3 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-goc-red/10 border border-goc-red/30 p-4 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-goc-red rounded-full flex items-center justify-center font-black text-xl text-white">3</div>
                      <div className="flex-grow">
                        <span className="text-goc-red font-bold uppercase tracking-wider block mb-1">Very Light Condition</span>
                        <span className="text-white uppercase font-bold text-lg">Remove flaws effortlessly.</span>
                        <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-300">
                          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-goc-red"/> Remove Glos E</span> 
                          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-goc-red"/> Friction E</span>
                          <span className="flex items-center gap-1 font-bold"><CheckCircle className="w-3 h-3 text-white"/> Ceramic Bond</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               {/* Protect Step */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10 mt-12">
                <div className="w-48 h-16 shrink-0 bg-[#d90000] rounded flex items-center justify-center border border-red-500/40 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                   <span className="text-white font-black uppercase text-2xl tracking-widest relative z-10">Protect</span>
                </div>
                <div className="bg-carbon border border-white/5 p-8 rounded-xl flex-grow w-full md:w-auto relative">
                   <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-carbon hidden md:block"></span>
                  <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-6">Blocks UV Rays To Prevent Fading</h4>
                  <ul className="flex flex-wrap gap-x-8 gap-y-4">
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-goc-red"/> New Surface E</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-gray-500"/> Friction E</li>
                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-goc-red"/> Hydrophobic Effect</li>
                  </ul>
                </div>
              </div>

               {/* Maintain Step */}
              <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 z-10">
                <div className="w-48 h-16 shrink-0 bg-[#ff1a1a] rounded shadow-xl flex items-center justify-center border border-red-400 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>
                   <span className="text-white font-black uppercase text-2xl tracking-widest relative z-10 drop-shadow-md">Maintain</span>
                </div>
                <div className="bg-carbon border border-white/5 p-8 rounded-xl flex-grow w-full md:w-auto relative">
                   <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-carbon hidden md:block"></span>
                  <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-6">Preserves Your Car&#39;s Value Over Time.</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-goc-red"/> New Surface E</li>
                    <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-goc-red"/> Friction E</li>
                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-goc-red"/> Hydrophobic Effect</li>
                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle className="w-5 h-5 text-goc-red"/> Ceramic Bond</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SectionWrapper>


      {/* 5. ULTIMATE DETAILING EXCELLENCE ROADMAP */}
      <SectionWrapper id="detailing-roadmap" className="py-24 bg-carbon border-t border-white/10 relative overflow-hidden">
        {/* Aesthetic background polygons mapped to roadmap style */}
        <div className="absolute left-0 bottom-0 w-full h-[150%] bg-[url('/images/pattern-dots.svg')] opacity-5 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 flex justify-center items-center gap-4">
              <span className="hidden md:inline-block w-16 h-1 bg-goc-red"></span>
              The Ultimate Ceramic <br className="md:hidden"/>
              <span className="text-goc-red">Coating Excellence</span>
              <span className="hidden md:inline-block w-16 h-1 bg-goc-red"></span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Why? Your car faces tough conditions daily, and sun damage every day. Ceramic coating protects it guards against scratch from all that.
            </p>
          </div>

          <div className="relative">
            {/* Winding road visual (hidden on small screens, approximated on large) */}
            <div className="hidden lg:block absolute left-[15%] right-[15%] top-[10%] bottom-[10%] w-[70%] z-0 border-x-4 border-dashed border-red-500/20 rounded-[100px] pointer-events-none"></div>

            <div className="space-y-6 md:space-y-12">
              
              {/* Step 1: Engine Bay */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-goc-red bg-black flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                   <span className="text-[4rem] font-black text-goc-red leading-none">1</span>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 w-full hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-widest">Engine Bay</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Use a degreaser and a soft-bristled brush, rinse with water, and apply a protectant dressing. Avoid electrical components and take safety precautions to prevent damage.
                  </p>
                </div>
              </div>

              {/* Step 2: Wheels & Tires */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 z-10 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-goc-red bg-black flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                   <span className="text-[4rem] font-black text-goc-red leading-none">2</span>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 w-full hover:-translate-y-1 transition-transform text-left md:text-right">
                  <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-widest">Wheels &amp; Tires</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Use a wheel cleaner and a tire cleaner to remove brake dust, grime, and dirt. Scrub with a brush, rinse with water, and dry with a microfiber towel.
                  </p>
                </div>
              </div>

              {/* Step 3: Wash */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-goc-red bg-goc-red flex items-center justify-center shrink-0 z-10 shadow-[0_0_50px_rgba(255,0,0,0.5)]">
                   <span className="text-[4rem] font-black text-white leading-none">3</span>
                </div>
                <div className="bg-gradient-to-r from-[#1a1a1a] to-goc-red/10 p-8 rounded-2xl border border-goc-red/30 w-full hover:-translate-y-1 transition-transform">
                  <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-widest">Wash</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Pre-rinse with water to remove loose dirt &amp; debris. Then use a dedicated car soap and a wash mitt to remove the impurities on your vehicle&#39;s paint.
                  </p>
                </div>
              </div>

               {/* Step 4: Clay Treatment */}
               <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 z-10 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-goc-red bg-black flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                   <span className="text-[4rem] font-black text-goc-red leading-none">4</span>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 w-full hover:-translate-y-1 transition-transform text-left md:text-right">
                  <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-widest">Clay Treatment</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Using clay lubricant and a clay mitt/bar, gently rub the painted surfaces of your vehicle to remove deeply embedded contaminants.
                  </p>
                </div>
              </div>

                {/* Step 5: Wax */}
               <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 z-10 relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-goc-red bg-black flex items-center justify-center shrink-0 z-10 shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                   <span className="text-[4rem] font-black text-goc-red leading-none">5</span>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 w-full hover:-translate-y-1 transition-transform relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 opacity-10">
                    <Sun className="w-48 h-48 text-goc-red animate-[spin_10s_linear_infinite]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase mb-4 tracking-widest relative z-10">Wax &amp; Tire Shine</h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">
                    Waxing your car helps paint and a glossy look lie the shine adds the &#39;wet look&#39; everyone loves see.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
