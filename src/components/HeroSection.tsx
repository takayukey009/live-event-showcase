'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimationControls, useScroll, useTransform } from 'framer-motion';
import { currentEvent } from '@/data/siteConfig';
import BackgroundAnimation from './BackgroundAnimation';

// カウントダウン計算
function getTimeRemaining(targetDate: string, targetTime: string) {
  const target = new Date(`${targetDate}T${targetTime}:00+09:00`);
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: false,
  };
}

// アニメーションバリアント
const letterVariants = {
  initial: {
    opacity: 0,
    scale: 3,
    filter: "blur(12px)"
  },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    }
  }),
  float: (i: number) => ({
    y: [0, -12, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 3,
        ease: "easeInOut",
        delay: i * 0.15,
      },
    }
  })
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1.2, when: "beforeChildren" }
  }
};

// カウントダウン表示コンポーネント
function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card px-3 py-2 md:px-5 md:py-3 min-w-[60px] md:min-w-[80px]">
        <span className="text-2xl md:text-4xl font-display font-bold text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-white/50 mt-2 uppercase tracking-widest font-light">
        {label}
      </span>
    </div>
  );
}

const HeroSection = () => {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const yagateLogo = ["Y", "A", "G", "A", "T", "E"];

  // カウントダウン（hydrationエラー回避のため初期値は固定）
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCountdown(getTimeRemaining(currentEvent.date, currentEvent.time));
    const timer = setInterval(() => {
      setCountdown(getTimeRemaining(currentEvent.date, currentEvent.time));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // アニメーション
  useEffect(() => {
    controls.start("animate");
    const timer = setTimeout(() => {
      controls.start("float");
    }, 2500);
    return () => clearTimeout(timer);
  }, [controls]);

  // 文字色
  const getLetterStyle = (index: number) => {
    if (index === 3) return { color: '#e94560', textShadow: '0 0 20px rgba(233,69,96,0.6)' };
    return { color: '#ffffff', textShadow: '0 0 10px rgba(255,255,255,0.3)' };
  };

  return (
    <motion.section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      aria-label="YAGATE LIVE イベント情報"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <BackgroundAnimation />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-primary/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40" aria-hidden="true" />
      </div>

      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(233,69,96,0.1) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 md:px-8"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* NEXT LIVE badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-neon-pink animate-neon-pulse" />
            <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/70 font-light">
              Next Live
            </span>
            <span className="w-2 h-2 rounded-full bg-neon-pink animate-neon-pulse" />
          </motion.div>

          {/* YAGATE Logo */}
          {currentEvent.eventName && (
            <div className="flex flex-col items-center mb-2">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter flex justify-center"
                initial="initial"
                animate={controls}
              >
                {yagateLogo.map((letter, i) => (
                  <motion.span
                    key={`yagate-${i}`}
                    className="inline-block"
                    custom={i}
                    variants={letterVariants}
                    style={{
                      ...getLetterStyle(i),
                      willChange: 'transform, opacity, filter'
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              {currentEvent.eventVolume && (
                <motion.span
                  className="text-lg md:text-2xl lg:text-3xl text-white/60 font-light tracking-widest mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.5, duration: 0.8, ease: "easeOut" }
                  }}
                >
                  {currentEvent.eventVolume}
                </motion.span>
              )}
            </div>
          )}

          {/* Date */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1, y: 0,
              transition: { delay: 1.2, duration: 0.8, type: "spring", stiffness: 40, damping: 10 }
            }}
          >
            <span className="text-white">{currentEvent.date}</span>
            <span className="text-white/50 ml-2">{currentEvent.day}</span>
          </motion.h2>

          {/* Time & Venue */}
          <motion.div
            className="flex flex-col items-center space-y-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1, y: 0,
              transition: { delay: 1.4, duration: 0.8 }
            }}
          >
            <p className="text-xl md:text-2xl font-display text-white/80">
              {currentEvent.time}
            </p>
            <p className="text-base md:text-lg text-white/50">
              at {currentEvent.venue}
            </p>
          </motion.div>

          {/* Countdown Timer */}
          {isMounted && !countdown.isOver && (
            <motion.div
              className="flex items-center justify-center gap-2 md:gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1, y: 0,
                transition: { delay: 1.6, duration: 0.8 }
              }}
            >
              <CountdownUnit value={countdown.days} label="Days" />
              <span className="text-2xl md:text-3xl text-white/30 font-light mt-[-20px]">:</span>
              <CountdownUnit value={countdown.hours} label="Hours" />
              <span className="text-2xl md:text-3xl text-white/30 font-light mt-[-20px]">:</span>
              <CountdownUnit value={countdown.minutes} label="Min" />
              <span className="text-2xl md:text-3xl text-white/30 font-light mt-[-20px]">:</span>
              <CountdownUnit value={countdown.seconds} label="Sec" />
            </motion.div>
          )}

          {/* CTA Button */}
          <motion.a
            href={currentEvent.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg md:text-xl px-10 py-5 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{
              opacity: 1, y: 0, scale: 1,
              transition: { delay: 1.8, duration: 0.8, type: "spring", stiffness: 40, damping: 8 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                animation: 'shimmer 2s linear infinite',
                backgroundSize: '200% 100%',
              }}
            />
            <span className="relative z-10">チケットを購入する</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest text-white/30">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
