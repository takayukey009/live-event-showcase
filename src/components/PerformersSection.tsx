'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { performers } from '@/data/performers';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PerformersSection = () => {
  return (
    <section id="performers" className="py-16 px-4 md:px-8 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          PERFORMERS / LINE UP
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8"
          role="list"
          aria-label="出演者一覧"
        >
          {performers.map((performer) => (
            <motion.div 
              key={performer.id}
              variants={item}
              className="relative group aspect-[3/4] overflow-hidden rounded-lg shadow-lg"
              role="listitem"
              aria-label={`${performer.name}${performer.isGuest ? ' (ゲスト)' : ''}${performer.onBreak ? ' (休演)' : ''}`}
            >
              {/* Special: Left grayscale for イクラボブチャンチャン */}
              {performer.name === 'イクラボブチャンチャン' && (
                <>
                  {/* Left half grayscale overlay (z-10) */}
                  <div className="absolute inset-y-0 left-0 w-1/2 z-10 pointer-events-none">
                    <div className="w-full h-full grayscale brightness-40" style={{backgroundColor:'rgba(0,0,0,0.1)'}}></div>
                  </div>
                  {/* 中央の名前表示を削除 */}
                  {/* Note badge at bottom center (z-20) */}
                  {performer.note && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-block bg-primary text-white text-base px-5 py-2 rounded shadow font-semibold tracking-wide">
                        {performer.note}
                      </span>
                    </div>
                  )}
                </>
              )}
              {/* Note badge for others (if any) - left top */}
              {performer.note && performer.name !== 'イクラボブチャンチャン' && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded shadow font-semibold">
                    {performer.note}
                  </span>
                </div>
              )}
              <Image 
                src={performer.image} 
                alt={`${performer.name}（${performer.description ? performer.description : '出演者'}）の写真${performer.isGuest ? '（ゲスト）' : ''}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient for normal performers */}
              {!performer.onBreak && (
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                ></div>
              )}
              
              {/* 休演表示は削除されました */}
              
              {/* Performer name for others */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                aria-hidden="true"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                  {performer.name}
                </h3>
                {performer.isGuest && (
                  <span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded mt-2">
                    GUEST
                  </span>
                )}
                {performer.onBreak && performer.name !== '友田オレ' && (
                  <span className="inline-block bg-black/70 border border-white/20 text-white/90 text-xs px-2 py-1 rounded mt-2 backdrop-blur-sm">
                    休演
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformersSection;
