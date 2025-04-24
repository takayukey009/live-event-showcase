'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { currentEvent } from '@/data/siteConfig';
import BackgroundAnimation from './BackgroundAnimation';

// アニメーションバリアント
const letterVariants = {
  initial: { 
    opacity: 0,
    scale: 3,
    z: 100,
    filter: "blur(8px)"
  },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    z: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // カスタムイージング
    }
  }),
  float: (i: number) => ({
    y: [0, -15, 0],
    filter: ["drop-shadow(0 0 0 rgba(255,255,255,0))", "drop-shadow(0 10px 8px rgba(255,255,255,0.5))", "drop-shadow(0 0 0 rgba(255,255,255,0))"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2.5,
        ease: "easeInOut",
        delay: i * 0.1,
      },
      filter: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2.5,
        ease: "easeInOut",
        delay: i * 0.1,
      }
    }
  })
};

// ページ全体のアニメーション
const containerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren"
    }
  }
};

const HeroSection = () => {
  // アニメーション制御
  const controls = useAnimationControls();
  
  // YAGATE文字列を分解
  const yagateLogo = ["Y", "A", "G", "A", "T", "E"];
  
  // 色の設定（YとGを白に修正）
  const getLetterClass = (letter: string, index: number): string => {
    // YとGは白に修正
    if (index === 3) return "text-secondary"; // 2番目のA
    return "text-white";
  };
  
  // コンポーネントマウント時に自動でアニメーション開始
  useEffect(() => {
    controls.start("animate");
    // 少し遅れて浮遊アニメーションを開始
    const timer = setTimeout(() => {
      controls.start("float");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <motion.section 
      id="home" 
      className="relative h-screen w-full overflow-hidden" 
      aria-label="YAGATE LIVE イベント情報"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-accent font-medium text-lg md:text-xl mb-2" 
            aria-label="次回のライブ"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NEXT LIVE
          </motion.h2>
          
          {currentEvent.eventName && (
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-2 flex justify-center items-center perspective-[1200px]"
              initial="initial"
              animate={controls}
              style={{ 
                perspective: 1200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline'
              }}
            >
              <div className="inline-flex relative" style={{ transformStyle: 'preserve-3d' }}>
                {yagateLogo.map((letter, i) => (
                  <motion.span
                    key={`yagate-${i}`}
                    className={`inline-block ${getLetterClass(letter, i)}`}
                    custom={i}
                    variants={letterVariants}
                    style={{ 
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center',
                      textShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      willChange: 'transform, opacity, filter'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                
                {currentEvent.eventVolume && (
                  <motion.span 
                    className="text-2xl md:text-3xl lg:text-4xl ml-2 align-top"
                    initial={{ opacity: 0, scale: 0, y: -20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      transition: { 
                        delay: 1.2,
                        duration: 0.8,
                        ease: [0.175, 0.885, 0.32, 1.275]
                      }
                    }}
                  >
                    {currentEvent.eventVolume}
                  </motion.span>
                )}
              </div>
            </motion.h1>
          )}
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 1.0,
                duration: 0.8,
                type: "spring",
                stiffness: 40,
                damping: 8
              }
            }}
          >
            {currentEvent.date} {currentEvent.day}
          </motion.h1>
          
          <motion.div 
            className="flex flex-col items-center space-y-1 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 1.3,
                duration: 0.8,
                type: "spring",
                stiffness: 40,
                damping: 8
              }
            }}
          >
            <p className="text-2xl md:text-3xl font-display">
              {currentEvent.time}
            </p>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 1.5,
                duration: 0.8,
                type: "spring",
                stiffness: 40,
                damping: 8
              }
            }}
          >
            at {currentEvent.venue}
          </motion.p>
          
          <motion.a 
            href={currentEvent.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg md:text-xl inline-block"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: { 
                delay: 1.7,
                duration: 0.8,
                type: "spring",
                stiffness: 40,
                damping: 8
              }
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(255,255,255,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            チケットを購入する
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut" 
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
