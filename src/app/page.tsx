import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PerformersSection from '@/components/PerformersSection';
import AdditionalSections from '@/components/AdditionalSections';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PerformersSection />
      <AdditionalSections />
      <Footer />
    </main>
  );
}
