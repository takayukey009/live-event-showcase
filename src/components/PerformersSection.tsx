'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { performers } from '@/data/performers';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

const PerformersSection = () => {
  // ゲストと所属を分離
  const regularPerformers = performers.filter(p => !p.isGuest);
  const guestPerformers = performers.filter(p => p.isGuest);

  // 共通のカードコンポーネント
  const PerformerCard = ({ performer, isGuest = false }: { performer: typeof performers[0]; isGuest?: boolean }) => (
    <motion.div
      key={performer.id}
      variants={item}
      className="relative group"
      role="listitem"
      aria-label={performer.name}
    >
      {/* Card */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 transition-all duration-500 group-hover:border-secondary/30">
        {/* Image */}
        <Image
          src={performer.image}
          alt={`${performer.name}（${performer.description || '出演者'}）の写真`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-center transition-all duration-700 group-hover:scale-110"
        />

        {/* Guest badge */}
        {isGuest && (
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-block bg-secondary/90 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
              GUEST
            </span>
          </div>
        )}

        {/* Note badge */}
        {performer.note && (
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-block bg-secondary/90 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
              {performer.note}
            </span>
          </div>
        )}

        {/* Gradient overlay - always visible on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/10 to-transparent" aria-hidden="true" />

        {/* Hover glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

        {/* Performer name - always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg md:text-xl font-display font-bold text-white drop-shadow-lg">
            {performer.name}
          </h3>
          {performer.description && (
            <p className="text-xs text-white/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {performer.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="performers" className="relative py-20 px-4 md:px-8 bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* GUEST セクション */}
        {guestPerformers.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-heading">GUEST</h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 mb-16"
              role="list"
              aria-label="ゲスト出演者"
            >
              {guestPerformers.map((performer) => (
                <PerformerCard key={performer.id} performer={performer} isGuest={true} />
              ))}
            </motion.div>
          </>
        )}

        {/* LINE UP */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">LINE UP</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8"
          role="list"
          aria-label="出演者一覧"
        >
          {regularPerformers.map((performer) => (
            <PerformerCard key={performer.id} performer={performer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformersSection;
