import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-goc-dark px-6">
      <div className="text-center max-w-lg">
        <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">404</p>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider text-white mb-6">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-goc-red hover:text-white transition-colors duration-300 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
