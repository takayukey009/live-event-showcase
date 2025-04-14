'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { currentEvent } from '@/data/siteConfig';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-display font-bold text-xl md:text-2xl">
          Y<span className="text-white">A</span>G<span className="text-secondary">A</span>TE <span className="text-white">LIVE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['HOME', 'SCHEDULE', 'PERFORMERS', 'ACCESS'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-secondary transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          <a 
            href={currentEvent.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            TICKETS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-primary/95 backdrop-blur-md"
        >
          <div className="px-4 py-5 space-y-4">
            {['HOME', 'SCHEDULE', 'PERFORMERS', 'ACCESS'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="block text-white hover:text-secondary transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a 
              href={currentEvent.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-full text-center transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TICKETS
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
