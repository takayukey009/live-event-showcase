'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { currentEvent } from '@/data/siteConfig';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AdditionalSections = () => {
  return (
    <>
      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-primary/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-heading text-center"
          >
            SCHEDULE
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 bg-white dark:bg-primary/20 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">
                    {currentEvent.eventName} {currentEvent.eventVolume}
                  </h3>
                  <p className="text-xl md:text-2xl font-medium mt-2">
                    {currentEvent.date} {currentEvent.day}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                    {currentEvent.venue}
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">開場・開演</h4>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-700 dark:text-gray-300">開場 {currentEvent.openTime} ／ 開演 {currentEvent.time}</p>
                    </div>
                  </div>
                </div>
                
                {currentEvent.schedule && (
                  <>
                    <div className="flex items-start">
                      <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium">前半</h4>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{currentEvent.schedule.firstHalf}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium">後半</h4>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{currentEvent.schedule.secondHalf}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium">終了</h4>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">{currentEvent.schedule.endTime}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="mt-8 text-center">
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Concept Section */}
      <section id="concept" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-primary/20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-heading text-center"
          >
            CONCEPT
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-lg leading-relaxed space-y-4 text-center md:text-left"
          >
            {currentEvent.description ? (
              // 説明文がある場合は、改行ごとに段落に分割して表示
              currentEvent.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              // 説明文がない場合のフォールバック
              <>
                <p>
                  毎月、都内（主に新宿・下北沢）で開催されるGATEがお届けする若手お笑いライブ「YAGATE」。 
                  主役は、日々進化を続けるGATE所属の若手お笑い芸人。さらに、毎回迎える実力派ゲストとの化学反応から生まれる展開もこのライブの醍醐味です。
                </p>
                <p>
                  ここでしか見られない貴重な組み合わせや、この日限りの企画が、あなたの五感を刺激します。
                  ライブならではの熱気、画面越しでは伝わらない生の迫力、そしてブレイク前夜の才能が放つ輝きを、
                  ぜひ会場で体感してください。
                </p>
                <p>
                  おひとりさまでも、友達とでも、家族・恋人とでもどなたさまでも歓迎です。未来のスターを目撃しに、ぜひお越しください。
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Access Info Section */}
      <section id="access" className="py-16 px-4 md:px-8 bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="section-heading"
          >
            ACCESS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-primary/20 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">下北沢シアターミネルヴァ</h3>
              <p className="mb-2"><span className="font-medium">住所:</span> 〒155-0031 東京都世田谷区北沢２丁目７−１４</p>
              <p className="mb-6"><span className="font-medium">アクセス:</span> 京王井の頭線・小田急線 下北沢駅から徒歩3分</p>
              
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5635374892176!2d139.66690287677544!3d35.66176167259339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f36d5d8d3d85%3A0x4a8e7ff27be3a2c6!2z44CSMTU1LTAwMzEg5p2x5Lqs6YO95LiW55Sw6LC35Yy65YyX5rKi77yS5LiB55uu77yX4oiS77yR77yU!5e0!3m2!1sja!2sjp!4v1713177555626!5m2!1sja!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="会場地図"
                ></iframe>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white dark:bg-primary/20 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">注意事項</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>開場は公演開始の15分前です</li>
                  <li>チケットは電子チケットのみの取り扱いとなります</li>
                  <li>会場内での写真撮影・録音・録画は当日案内があります</li>
                  <li>公演中の入退場は他のお客様のご迷惑となりますのでご遠慮ください</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-primary/20 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
                <p className="mb-2">公演に関するお問い合わせは下記のDMにてご連絡ください。</p>
                <p className="font-medium">
                  <a href="https://x.com/gate_yagate" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-secondary hover:underline">
                    https://x.com/gate_yagate
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* SNS Links Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            FOLLOW US
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg mb-8"
          >
            最新情報や舞台裏の様子は各種SNSでチェック！
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center space-x-6"
          >
            {[
              { 
                id: 'twitter', 
                icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                url: 'https://x.com/gate_yagate'
              },
              { 
                id: 'instagram', 
                icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                url: 'https://www.instagram.com/gate_talentagency/'
              },
            ].map((social) => (
              <a 
                key={social.id}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-secondary p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;
