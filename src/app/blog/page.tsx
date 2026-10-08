'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs, blogCategories } from '@/data/blogs';
import { Search, Clock, ArrowRight, Shield, Sparkles, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd';

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredPost = blogs[0];

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const globalFaqs = [
    {
      question: 'What makes TPU Coloured PPF superior to ordinary car vinyl wraps?',
      answer: 'TPU Coloured PPF is 8.5 to 10 mil thick (almost 3x thicker than vinyl), features an instant self-healing elastomeric top-coat that erases swirl marks under sunlight, provides true stone-chip ballistic absorption, and carries an 8 to 10-year warranty with zero orange peel.'
    },
    {
      question: 'Can Coloured PPF be applied on luxury cars like Rolls-Royce, Bentley, and Porsche?',
      answer: 'Yes! In fact, Coloured PPF is specifically engineered for high-value bespoke vehicles. It allows owners to customize their vehicle’s aesthetics while preserving the pristine factory paint underneath for 100% resale value retention.'
    },
    {
      question: 'How do I maintain my car after installing ceramic coating or PPF?',
      answer: 'Use the two-bucket wash technique with a pH-neutral automotive shampoo, wash with plush microfiber mitts, avoid abrasive tunnel car washes, and apply an SiO2 ceramic booster spray every 3 to 4 months.'
    },
    {
      question: 'Does God of Ceramic offer warranty on PPF and Ceramic Coating?',
      answer: 'Yes, God of Ceramic provides comprehensive manufacturer-backed warranties ranging from 3 to 10 years, including free annual maintenance checkups and computerized warranty registration.'
    }
  ];

  return (
    <main className="min-h-screen bg-goc-dark pt-24 pb-20 text-white">
      {/* JSON-LD Schemas */}
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://godofceramic.in' },
          { name: 'Blog & Guides', url: 'https://godofceramic.in/blog' },
        ]}
      />
      <FAQJsonLd faqs={globalFaqs} />

      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-goc-red/10 border border-goc-red/30 backdrop-blur-md mb-4">
            <Sparkles size={14} className="text-goc-red" />
            <span className="text-goc-red text-xs font-bold uppercase tracking-[0.2em]">Automotive Masterclass &amp; Knowledge</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            The Detailing <span className="text-goc-red">Journal</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            Authoritative guides, chemical deep-dives, and masterclass insights on Coloured PPF, self-healing TPU technology, 10H ceramic coatings, and preserving elite automotive investments.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. Coloured PPF, Rolls Royce, Self-Healing, Maintenance)..."
              className="w-full pl-12 pr-4 py-3.5 bg-carbon/80 border border-white/10 rounded-sm text-sm text-white placeholder-gray-500 focus:outline-none focus:border-goc-red transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-10">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-goc-red text-white shadow-[0_0_15px_rgba(255,30,30,0.5)]'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:border-goc-red/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* 2. FEATURED ARTICLE (Shown when category is 'All' and no search query) */}
      {selectedCategory === 'All' && searchQuery.trim() === '' && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-carbon to-[#141414] border border-white/10 rounded-sm overflow-hidden p-6 sm:p-10 lg:p-12 hover:border-goc-red/40 transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-goc-red/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-goc-red text-white text-[10px] font-black uppercase tracking-widest rounded-sm">
                    Featured Masterclass
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={13} /> {featuredPost.readTime}
                  </span>
                </div>
                
                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-goc-red transition-colors mb-4 uppercase tracking-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3 bg-black/40 border border-white/5 rounded-sm">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Material</p>
                    <p className="text-sm font-bold text-white">Aliphatic TPU</p>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/5 rounded-sm">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Thickness</p>
                    <p className="text-sm font-bold text-goc-red">8.5 - 10.0 Mil</p>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/5 rounded-sm col-span-2 sm:col-span-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Durability</p>
                    <p className="text-sm font-bold text-white">10-Year Warranty</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-goc-button text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,30,30,0.4)]"
                >
                  Read Comprehensive Guide <ArrowRight size={14} />
                </Link>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                  <span className="font-semibold text-white">{featuredPost.author.name}</span>
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. POSTS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
            {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs text-gray-400 uppercase tracking-wider">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Guide' : 'Guides'} Found
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-carbon/40 rounded-sm border border-white/5">
            <BookOpen size={40} className="mx-auto text-gray-600 mb-4" />
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">No Articles Found</h3>
            <p className="text-sm text-gray-400 mb-6">No matching guides found for &quot;{searchQuery}&quot;. Try exploring other categories.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2 bg-goc-red text-white text-xs font-bold uppercase tracking-wider rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-carbon/70 border border-white/5 hover:border-goc-red/40 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,30,30,0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 bg-black/70 backdrop-blur-md text-gray-300 text-[10px] flex items-center gap-1 rounded-sm">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-500 mb-2">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-white group-hover:text-goc-red transition-colors line-clamp-2 uppercase tracking-wide mb-3 leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 text-gray-400 rounded-sm border border-white/5">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-goc-red transition-colors"
                    >
                      Read Full Guide <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. WHY TRUST GOD OF CERAMIC METRICS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="bg-black/60 border border-white/10 rounded-sm p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs mb-2">Unmatched Craftsmanship</p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">Why Luxury Owners Choose GOC</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '1,500+',
                title: 'Exotics & Luxury Cars',
                desc: 'Protected across Rolls-Royce, Porsche, Bentley, Ferrari & BMW.'
              },
              {
                stat: '100% TPU',
                title: 'Medical & Optical Grade',
                desc: 'Aliphatic non-yellowing polyurethane with self-healing memory.'
              },
              {
                stat: '10 Years',
                title: 'Comprehensive Warranty',
                desc: 'Certified protection against cracking, peeling, and yellowing.'
              },
              {
                stat: 'Clean Bay',
                title: 'Positive-Pressure Studio',
                desc: 'Climate-controlled bays in Vadodara with purified slip filtration.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-carbon/50 border border-white/5 rounded-sm text-center">
                <p className="text-3xl font-black text-goc-red mb-2 tracking-tight">{item.stat}</p>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
        <div className="text-center mb-12">
          <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-xs mb-2">Knowledge Base</p>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-white">Common Questions Answered</h2>
        </div>

        <div className="space-y-4">
          {globalFaqs.map((faq, i) => (
            <div key={i} className="p-6 bg-carbon/60 border border-white/5 rounded-sm">
              <h3 className="text-base font-bold text-white mb-2 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-goc-red shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed pl-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-sm bg-gradient-to-r from-[#170000] via-carbon to-black border border-goc-red/30 p-8 sm:p-14 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Shield size={40} className="text-goc-red mx-auto mb-4" />
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Protect Your Vehicle with Perfection Beyond Shine
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Speak with our master paint protection specialists in Vadodara to inspect your vehicle, test film samples, and receive a bespoke detailing proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 bg-goc-button text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-transform shadow-[0_0_25px_rgba(255,30,30,0.5)]"
              >
                Book Detailing Consultation
              </Link>
              <a
                href="https://wa.me/919925566886?text=Hi!%20I'm%20interested%20in%20Coloured%20PPF%20and%20Ceramic%20Coating%20for%20my%20vehicle."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
