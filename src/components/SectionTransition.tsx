'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  text: string;
  subtext?: string;
  direction?: 'left' | 'right' | 'center';
}

const SectionTransition = ({ text, subtext, direction = 'center' }: SectionTransitionProps) => {
  const alignClass = direction === 'left'
    ? 'items-start text-left pl-8 md:pl-16'
    : direction === 'right'
    ? 'items-end text-right pr-8 md:pr-16'
    : 'items-center text-center';

  return (
    <div className={`relative py-16 md:py-24 flex flex-col ${alignClass} justify-center overflow-hidden`}
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,15,1) 0%, rgba(18,18,26,1) 50%, rgba(10,10,15,1) 100%)',
      }}
    >
      {/* Decorative line */}
      <motion.div
        className="section-divider absolute top-0 left-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: direction === 'right' ? 'right' : 'left' }}
      />

      <motion.p
        className="text-xl md:text-3xl lg:text-4xl font-display font-light text-white/60 tracking-wider px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {text}
      </motion.p>

      {subtext && (
        <motion.p
          className="mt-3 text-sm md:text-base text-white/30 font-light tracking-widest uppercase px-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtext}
        </motion.p>
      )}

      {/* Bottom divider */}
      <motion.div
        className="section-divider absolute bottom-0 left-0"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ transformOrigin: direction === 'left' ? 'left' : 'right' }}
      />
    </div>
  );
};

export default SectionTransition;
