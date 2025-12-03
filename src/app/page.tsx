import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PerformersSection from '@/components/PerformersSection';
import AdditionalSections from '@/components/AdditionalSections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PerformersSection />
      <AdditionalSections />
    </main>
  );
}
