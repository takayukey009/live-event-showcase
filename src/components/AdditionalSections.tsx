'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { currentEvent } from '@/data/siteConfig';
import { pastEvents } from '@/data/pastEvents';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AdditionalSections = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  return (
    <>
      {/* ==================== SCHEDULE ==================== */}
      <section id="schedule" className="relative py-20 px-4 md:px-8 bg-primary-light">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="section-heading-center"
          >
            SCHEDULE
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="mt-10 glass-card p-6 md:p-8"
          >
            {/* Event header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/10 pb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                  {currentEvent.eventName} {currentEvent.eventVolume}
                </h3>
                <p className="text-xl md:text-2xl font-medium mt-2 text-white/70">
                  {currentEvent.date} {currentEvent.day}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-white/5 border border-white/10 text-accent px-4 py-2 rounded-full font-medium text-sm">
                  📍 {currentEvent.venue}
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {/* 開場・開演 */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-secondary/30 bg-secondary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">開場・開演</h4>
                  <p className="mt-1 text-white/50">開場 {currentEvent.openTime} ／ 開演 {currentEvent.time}</p>
                </div>
              </div>

              {currentEvent.schedule && (
                <>
                  {/* 前半 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-neon-cyan/30 bg-neon-cyan/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">前半</h4>
                      <p className="mt-1 text-white/50">{currentEvent.schedule.firstHalf}</p>
                    </div>
                  </div>

                  {/* 後半 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-neon-purple/30 bg-neon-purple/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">後半</h4>
                      <p className="mt-1 text-white/50">{currentEvent.schedule.secondHalf}</p>
                    </div>
                  </div>

                  {/* 終了 */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border border-neon-gold/30 bg-neon-gold/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">終了</h4>
                      <p className="mt-1 text-white/50">{currentEvent.schedule.endTime}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Ticket pricing */}
            <div className="mt-8 glass-card p-5">
              <h4 className="text-lg font-bold mb-4 text-center text-white">チケット料金</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">前売り</p>
                  <p className="text-2xl font-bold text-white mt-1">¥2,500</p>
                </div>
                <div className="border-x border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-wider">当日</p>
                  <p className="text-2xl font-bold text-white mt-1">¥3,000</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">注釈席</p>
                  <p className="text-2xl font-bold text-white mt-1">¥2,000</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center space-y-4">
              <motion.a
                href={currentEvent.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg inline-block"
              >
                チケットを購入する
              </motion.a>

              {currentEvent.chekiFormUrl && (
                <div>
                  <motion.a
                    href={currentEvent.chekiFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-lg inline-block"
                  >
                    📸 チェキ販売フォーム
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONCEPT ==================== */}
      <section id="concept" className="relative py-20 px-4 md:px-8 gradient-mesh">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="section-heading-center"
          >
            CONCEPT
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 text-lg leading-relaxed space-y-6 text-center"
          >
            {currentEvent.description ? (
              currentEvent.description.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-white/70 leading-loose"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {paragraph}
                </motion.p>
              ))
            ) : (
              <>
                <p className="text-white/70 leading-loose">
                  毎月、都内（主に新宿・下北沢）で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。
                  主役は、日々進化を続けるGATE所属の若手お笑い芸人。さらに、毎回迎える実力派ゲストとの化学反応から生まれる展開もこのライブの醍醐味です。
                </p>
                <p className="text-white/70 leading-loose">
                  ここでしか見られない貴重な組み合わせや、この日限りの企画が、あなたの五感を刺激します。
                  ライブならではの熱気、画面越しでは伝わらない生の迫力、そしてブレイク前夜の才能が放つ輝きを、
                  ぜひ会場で体感してください。
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* ==================== ACCESS ==================== */}
      <section id="access" className="relative py-20 px-4 md:px-8 bg-primary">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="section-heading"
          >
            ACCESS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-white">渋谷区文化総合センター大和田 伝承ホール</h3>
              <p className="mb-2 text-white/60"><span className="font-medium text-white/80">住所:</span> 〒150-0031 東京都渋谷区桜丘町23-21</p>
              <p className="mb-6 text-white/60"><span className="font-medium text-white/80">アクセス:</span> JR渋谷駅 南改札西口より徒歩5分 / 東急東横線・田園都市線・東京メトロ半蔵門線・副都心線 渋谷駅より徒歩5分</p>

              <div className="aspect-video relative rounded-lg overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d139.6987!3d35.6562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b579e6d2e6d%3A0x8b8b8b8b8b8b8b8b!2z5riL6LC35Yy65paH5YyW57eP5ZCI44K744Oz44K_44O85aSn5ZKM55Sw!5e0!3m2!1sja!2sjp!4v1704800000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="渋谷区文化総合センター大和田の地図"
                  aria-label="渋谷区文化総合センター大和田の地図"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            >
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-white">注意事項</h3>
                <ul className="space-y-3">
                  {[
                    '開場は公演開始の15分前です',
                    'チケットは電子チケットのみの取り扱いとなります',
                    '会場内での写真撮影・録音・録画は当日案内があります',
                    '公演中の入退場は他のお客様のご迷惑となりますのでご遠慮ください',
                  ].map((note, i) => (
                    <li key={i} className="flex items-start text-white/60">
                      <span className="text-secondary mr-3 mt-1.5 flex-shrink-0">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-white">お問い合わせ</h3>
                <p className="mb-3 text-white/60">公演に関するお問い合わせは下記のDMにてご連絡ください。</p>
                <a
                  href="https://x.com/gate_yagate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dim transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @gate_yagate
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FOLLOW US ==================== */}
      <section className="relative py-16 px-4 md:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(233,69,96,0.15), rgba(168,85,247,0.1), rgba(0,240,255,0.05))' }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
          >
            FOLLOW US
          </motion.h2>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-base text-white/50 mb-8"
          >
            最新情報や舞台裏の様子は各種SNSでチェック！
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="flex justify-center space-x-4"
          >
            {[
              {
                id: 'twitter',
                icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                url: 'https://x.com/gate_yagate',
                label: 'X (Twitter)'
              },
              {
                id: 'instagram',
                icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                url: 'https://www.instagram.com/gate_talentagency/',
                label: 'Instagram'
              },
            ].map((social) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== ARCHIVE ==================== */}
      <section id="archive" className="relative py-20 px-4 md:px-8 bg-primary-light">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="section-heading-center"
          >
            ARCHIVE
          </motion.h2>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-10 text-white/40"
          >
            過去のYAGATE公演記録 — {pastEvents.length}公演
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {pastEvents.map((event, index) => {
              // ボリューム番号を抽出
              const volNum = event.volume.replace('vol. ', '');
              return (
                <motion.div
                  key={event.volume}
                  variants={fadeInUp}
                  className="glass-card group cursor-pointer overflow-hidden"
                  tabIndex={0}
                  onClick={() => {
                    setExpandedEvent(expandedEvent === event.volume ? null : event.volume);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpandedEvent(expandedEvent === event.volume ? null : event.volume);
                    }
                  }}
                  aria-expanded={expandedEvent === event.volume}
                  aria-label={`${event.name} - ${event.date}`}
                >
                  {/* Card header */}
                  <div className="p-5 flex items-center gap-4">
                    {/* Volume badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 group-hover:border-secondary/30 group-hover:bg-secondary/10 transition-all duration-300">
                      <span className="text-sm font-bold font-mono text-white/60 group-hover:text-secondary transition-colors">
                        {volNum}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-white truncate">{event.name}</h3>
                      <p className="text-xs text-white/30 mt-0.5 font-mono">{event.date} ({event.day})</p>
                    </div>

                    {/* Expand icon */}
                    <svg
                      className={`w-4 h-4 text-white/20 group-hover:text-white/50 transition-all duration-300 ${
                        expandedEvent === event.volume ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Expandable performer list */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      expandedEvent === event.volume ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-white/5">
                      <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">出演者</p>
                      <div className="flex flex-wrap gap-1.5">
                        {event.performers.map((performer, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/5"
                          >
                            {performer}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>


        </div>
      </section>
    </>
  );
};

export default AdditionalSections;
