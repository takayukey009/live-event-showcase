import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PerformersSection from '@/components/PerformersSection';
import AdditionalSections from '@/components/AdditionalSections';
import SNSFeed from '@/components/SNSFeed';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PerformersSection />
      <AdditionalSections />
      <SNSFeed />
    </main>
  );
}
