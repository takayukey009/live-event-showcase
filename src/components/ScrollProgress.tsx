'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'performers', label: 'PERFORMERS' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'concept', label: 'CONCEPT' },
  { id: 'access', label: 'ACCESS' },
  { id: 'archive', label: 'ARCHIVE' },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-1">
      {/* Progress track */}
      <div className="relative w-[2px] h-48 bg-white/5 rounded-full overflow-hidden mb-3">
        <motion.div
          className="absolute top-0 left-0 right-0 rounded-full origin-top"
          style={{
            scaleY,
            background: 'linear-gradient(180deg, #e94560, #00f0ff)',
          }}
        />
      </div>

      {/* Section dots */}
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center py-1.5"
          aria-label={`${section.label}セクションへ移動`}
        >
          {/* Dot */}
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-secondary scale-125 shadow-neon-pink'
                : 'bg-white/20 group-hover:bg-white/50'
            }`}
          />
          {/* Tooltip */}
          <span className="absolute right-5 text-xs text-white/0 group-hover:text-white/70 transition-all duration-300 whitespace-nowrap pointer-events-none">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollProgress;
