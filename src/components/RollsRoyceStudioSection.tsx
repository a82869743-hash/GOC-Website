'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const RollsRoycePPFStudio = dynamic(() => import('@/components/RollsRoycePPFStudio'), {
  ssr: false,
  loading: () => (
    <div className="h-[460px] sm:h-[540px] flex flex-col items-center justify-center bg-carbon/60 border border-white/10 rounded-sm">
      <div className="w-10 h-10 border-2 border-goc-red border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-gray-400 uppercase tracking-[0.2em] text-xs">Loading 3D Rolls-Royce Studio...</p>
    </div>
  ),
});

export default function RollsRoyceStudioSection() {
  return <RollsRoycePPFStudio />;
}
