import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/data/blogs';
import { Clock, Calendar, ArrowLeft, ArrowRight, Shield, Share2, CheckCircle2, User, ChevronRight } from 'lucide-react';
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return { title: 'Post Not Found | God of Ceramic' };

  return {
    title: `${post.metaTitle}`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://godofceramic.in/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      url: `https://godofceramic.in/blog/${post.slug}`,
      siteName: 'God of Ceramic',
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.featuredImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((b) => b.slug !== post.slug)
    .slice(0, 3);

  // Markdown-like text parser into sections and styled blocks
  const renderFormattedContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let tableBuffer: string[] = [];
    let inTable = false;

    const flushTable = (key: number) => {
      if (tableBuffer.length === 0) return null;
      const rows = tableBuffer.map((row) =>
        row
          .split('|')
          .map((c) => c.trim())
          .filter((c, i, arr) => i > 0 && i < arr.length - 1)
      );
      if (rows.length < 2) return null;
      const headers = rows[0];
      const dataRows = rows.slice(2); // Skip separator row

      return (
        <div key={`table-${key}`} className="my-8 overflow-x-auto rounded-sm border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-carbon border-b border-white/10 text-xs uppercase tracking-wider text-goc-red font-bold">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-5 py-3.5">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/40">
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-5 py-3.5 text-gray-300">
                      <span dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    const formatInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>');
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table handling
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        tableBuffer.push(trimmed);
        return;
      } else if (inTable) {
        elements.push(flushTable(index));
        tableBuffer = [];
        inTable = false;
      }

      if (!trimmed) {
        return;
      }

      // H2 Headings
      if (trimmed.startsWith('## ')) {
        const titleText = trimmed.replace('## ', '');
        const idMatch = titleText.match(/\{#(.*?)\}/);
        const id = idMatch ? idMatch[1] : titleText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const cleanTitle = titleText.replace(/\{#.*?\}/, '').trim();

        elements.push(
          <h2
            key={index}
            id={id}
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-12 mb-5 pt-4 border-t border-white/10 flex items-center gap-3 scroll-mt-28"
          >
            <span className="w-1.5 h-6 bg-goc-red shrink-0" />
            <span>{cleanTitle}</span>
          </h2>
        );
        return;
      }

      // H3 Headings
      if (trimmed.startsWith('### ')) {
        const cleanTitle = trimmed.replace('### ', '').trim();
        elements.push(
          <h3
            key={index}
            className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white mt-8 mb-3 text-goc-red"
          >
            {cleanTitle}
          </h3>
        );
        return;
      }

      // Horizontal Rule
      if (trimmed === '---') {
        elements.push(<hr key={index} className="my-8 border-white/10" />);
        return;
      }

      // Unordered list
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const text = trimmed.substring(2);
        elements.push(
          <li key={index} className="flex items-start gap-3 my-2 text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-goc-red shrink-0 mt-2.5" />
            <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
          </li>
        );
        return;
      }

      // Ordered list
      if (/^\d+\.\s/.test(trimmed)) {
        const num = trimmed.match(/^(\d+)\.\s/)?.[1] || '1';
        const text = trimmed.replace(/^\d+\.\s/, '');
        elements.push(
          <div key={index} className="flex items-start gap-3 my-3 text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-goc-red/10 border border-goc-red/30 text-goc-red text-[11px] font-bold shrink-0 mt-0.5">
              {num}
            </span>
            <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
          </div>
        );
        return;
      }

      // Regular Paragraph
      elements.push(
        <p
          key={index}
          className="text-gray-300 text-sm sm:text-base leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    });

    if (inTable) {
      elements.push(flushTable(lines.length));
    }

    return elements;
  };

  return (
    <main className="min-h-screen bg-goc-dark pt-24 pb-20 text-white">
      {/* JSON-LD Schemas */}
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        url={`https://godofceramic.in/blog/${post.slug}`}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        authorName={post.author.name}
        imageUrl={`https://godofceramic.in${post.featuredImage}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://godofceramic.in' },
          { name: 'Blog', url: 'https://godofceramic.in/blog' },
          { name: post.title, url: `https://godofceramic.in/blog/${post.slug}` },
        ]}
      />
      <FAQJsonLd faqs={post.faqs} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Guides</Link>
          <ChevronRight size={12} />
          <span className="text-goc-red font-medium truncate max-w-xs">{post.category}</span>
        </nav>

        {/* Article Header */}
        <header className="max-w-4xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-goc-red/10 border border-goc-red/30 text-goc-red text-xs font-bold uppercase tracking-wider mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
            {post.excerpt}
          </p>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-carbon border border-goc-red/30 overflow-hidden relative">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{post.author.name}</p>
                <p className="text-[11px] text-gray-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden mb-12 border border-white/10">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Main Content Layout (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Body (8 cols) */}
          <article className="lg:col-span-8">
            
            {/* Quick Takeaway Banner */}
            <div className="p-6 bg-carbon/80 border-l-4 border-goc-red rounded-sm mb-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                <Shield size={16} className="text-goc-red" />
                Key Takeaway for Vehicle Owners
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Whether you drive a daily luxury saloon or an exotic hypercar, physical stone-chip and UV protection is vital for paint longevity and resale value. God of Ceramic utilizes genuine 10mil TPU film with heat-activated memory polymers.
              </p>
            </div>

            {/* Formatted Article Content */}
            <div className="prose prose-invert max-w-none">
              {renderFormattedContent(post.content)}
            </div>

            {/* Article Specific FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-14 pt-8 border-t border-white/10">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 bg-carbon/50 border border-white/5 rounded-sm">
                      <h4 className="text-sm sm:text-base font-bold text-white mb-2 flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-goc-red shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6.5">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Credential Bio Box */}
            <div className="mt-12 p-6 bg-carbon/70 border border-white/10 rounded-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-goc-red">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h4 className="text-base font-bold text-white">{post.author.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 bg-goc-red/10 text-goc-red border border-goc-red/30 rounded-full font-semibold">
                    Certified Specialist
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{post.author.role}</p>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Specializing in advanced surface preparation, multi-stage paint correction, and custom digital template PPF applications on high-end luxury and supercar marques.
                </p>
              </div>
            </div>

            {/* Back to Blog link */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-goc-red transition-colors"
              >
                <ArrowLeft size={14} /> Back to All Articles
              </Link>
            </div>
          </article>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Table of Contents Sticky Widget */}
            <div className="sticky top-28 bg-carbon/80 border border-white/10 rounded-sm p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-goc-red mb-4">
                In This Guide
              </h3>
              <nav className="space-y-2 mb-8">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all py-1 border-l-2 border-transparent hover:border-goc-red pl-2.5"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              {/* Consultation Booking Widget */}
              <div className="p-5 bg-gradient-to-b from-[#190000] to-black border border-goc-red/40 rounded-sm text-center">
                <Shield size={28} className="text-goc-red mx-auto mb-2" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                  Protect Your Car Today
                </h4>
                <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                  Get a personalized quotation for Coloured PPF, 10mil TPU, or 10H Ceramic Coating.
                </p>
                <Link
                  href="/book"
                  className="block w-full py-2.5 bg-goc-button text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,30,30,0.4)] mb-2"
                >
                  Book Studio Visit
                </Link>
                <a
                  href="https://wa.me/919925566886?text=Hi!%20I'm%20reading%20your%20guide%20and%20want%20a%20quote%20for%20my%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-white/5 border border-white/10 text-gray-300 text-[11px] font-bold uppercase tracking-wider rounded-sm hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Expert
                </a>
              </div>
            </div>

          </aside>

        </div>

        {/* Related Guides Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-8">
              Recommended Masterclasses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="group bg-carbon/50 border border-white/5 hover:border-goc-red/40 rounded-sm overflow-hidden transition-all duration-300 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] text-goc-red font-bold uppercase tracking-wider mb-2 block">
                      {rel.category}
                    </span>
                    <Link href={`/blog/${rel.slug}`}>
                      <h4 className="text-sm font-bold text-white group-hover:text-goc-red transition-colors line-clamp-2 uppercase tracking-wide mb-2">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-goc-red transition-colors uppercase tracking-wider"
                  >
                    Read Guide <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
