'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { currentEvent } from '@/data/siteConfig';
import BackgroundAnimation from './BackgroundAnimation';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" aria-label="YAGATE LIVE イベント情報">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* THREE.jsアニメーション背景 */}
        <BackgroundAnimation />
        {/* 追加の暗いオーバーレイ */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary/80 z-10" aria-hidden="true"></div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-accent font-medium text-lg md:text-xl mb-2" aria-label="次回のライブ">NEXT LIVE</h2>
          {currentEvent.eventName && (
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-2">
              Y<span className="text-white">A</span>G<span className="text-secondary">A</span>TE
              {currentEvent.eventVolume && (
                <span className="text-2xl md:text-3xl lg:text-4xl ml-2 align-top">{currentEvent.eventVolume}</span>
              )}
            </h1>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-2">
            {currentEvent.date} {currentEvent.day}
          </h1>
          <div className="flex flex-col items-center space-y-1 mb-2">
            <p className="text-2xl md:text-3xl font-display">
              {currentEvent.time}
            </p>
          </div>
          <p className="text-xl md:text-2xl mb-8">
            at {currentEvent.venue}
          </p>
          
          <motion.a 
            href={currentEvent.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg md:text-xl inline-block"
          >
            チケットを購入する
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
