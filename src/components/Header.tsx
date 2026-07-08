'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { currentEvent } from '@/data/siteConfig';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['HOME', 'PERFORMERS', 'SCHEDULE', 'CONCEPT', 'ACCESS', 'ARCHIVE'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="font-display font-bold text-xl md:text-2xl tracking-tight group"
        >
          <span className="text-white group-hover:text-white transition-colors">Y</span>
          <span className="text-white group-hover:text-white transition-colors">A</span>
          <span className="text-white group-hover:text-white transition-colors">G</span>
          <span className="text-secondary group-hover:text-secondary-glow transition-colors">A</span>
          <span className="text-white group-hover:text-white transition-colors">TE</span>
          <span className="text-white/40 ml-1.5 font-light text-sm md:text-base">LIVE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
              className="text-sm text-white/50 hover:text-white transition-colors duration-300 tracking-wider"
            >
              {item}
            </a>
          ))}
          <a
            href={currentEvent.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #e94560, #d63355)',
              boxShadow: '0 0 15px rgba(233,69,96,0.3)',
            }}
          >
            TICKETS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/60 hover:text-white transition-colors duration-200 text-sm tracking-wider"
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href={currentEvent.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-bold text-white py-3 rounded-full mt-4"
                style={{
                  background: 'linear-gradient(135deg, #e94560, #d63355)',
                  boxShadow: '0 0 15px rgba(233,69,96,0.3)',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                TICKETS
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
