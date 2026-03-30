'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Only log the digest in production to avoid leaking internal error details
    console.error('Application error:', error.digest ?? 'Unknown error');
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-goc-dark px-6">
      <div className="text-center max-w-lg">
        <p className="text-goc-red font-bold tracking-[0.3em] uppercase text-sm mb-4">Error</p>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-6">
          Something Went Wrong
        </h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-goc-red text-white font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
