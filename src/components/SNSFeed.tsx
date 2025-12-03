'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

export default function SNSFeed() {
    useEffect(() => {
        // Load Twitter widget script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="sns" className="py-16 px-4 md:px-8 bg-white dark:bg-dark">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="section-heading"
                >
                    SNS
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-8 max-w-2xl mx-auto"
                >
                    <div className="bg-light dark:bg-primary/20 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-center">最新情報をチェック！</h3>
                        <p className="text-center mb-6">
                            公式Xアカウントで最新情報を発信中
                        </p>

                        {/* Twitter Timeline Embed */}
                        <div className="flex justify-center">
                            <a
                                className="twitter-timeline"
                                data-height="600"
                                data-theme="dark"
                                data-chrome="noheader nofooter noborders"
                                href="https://twitter.com/gate_yagate?ref_src=twsrc%5Etfw"
                            >
                                Tweets by gate_yagate
                            </a>
                        </div>

                        {/* Follow Button */}
                        <div className="mt-6 text-center">
                            <a
                                href="https://x.com/gate_yagate"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                                フォローする
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
