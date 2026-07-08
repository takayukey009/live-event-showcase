'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SNSFeed = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-primary">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="section-heading-center"
        >
          SNS
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 text-white/40"
        >
          最新情報をチェック！
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-sm text-white/50">公式Xアカウントで最新情報を発信中</span>
          </div>

          <div className="rounded-lg overflow-hidden border border-white/5">
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-chrome="noheader nofooter noborders transparent"
              href="https://twitter.com/gate_yagate?ref_src=twsrc%5Etfw"
            >
              Tweets by gate_yagate
            </a>
          </div>

          <div className="mt-6 text-center">
            <motion.a
              href="https://x.com/gate_yagate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              フォローする
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} YAGATE LIVE by GATE. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SNSFeed;
