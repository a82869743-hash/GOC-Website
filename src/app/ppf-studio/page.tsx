import React from 'react';
import { Metadata } from 'next';
import RollsRoyceStudioSection from '@/components/RollsRoyceStudioSection';

export const metadata: Metadata = {
  title: 'Rolls-Royce 3D Coloured PPF Studio | God of Ceramic',
  description: 'Interactive 360° 3D Coloured PPF Visualizer for Rolls-Royce Ghost. Select from 12 bespoke gloss, velvet satin, and metallic pearl TPU finishes with instant self-healing simulation.',
};

export default function PPFStudioPage() {
  return (
    <main className="min-h-screen bg-[#070708] pt-20">
      <RollsRoyceStudioSection />
    </main>
  );
}
