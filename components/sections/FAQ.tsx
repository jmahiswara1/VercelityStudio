'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
        { q: t('faq.q5'), a: t('faq.a5') },
    ];

    return (
        <section id="faq" className="w-full bg-white text-black py-24 lg:py-32 relative z-10">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Header Left Column */}
                    <div className="lg:col-span-5 flex flex-col items-start space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                            <span className="text-[15px] font-medium tracking-wide uppercase">{t('faq.label')}</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter"
                        >
                            {t('faq.title')}
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-sm"
                        >
                            {t('contact.subtext')} {/* "First consultation is free..." */}
                        </motion.p>
                    </div>

                    {/* Accordion Right Column */}
                    <div className="lg:col-span-7">
                        <div className="w-full border-t border-black/10">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                        className="border-b border-black/10 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleItem(index)}
                                            className="w-full flex items-center justify-between py-6 md:py-8 text-left group gap-4"
                                            aria-expanded={isOpen}
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black group-hover:text-[#FF402D] transition-colors">
                                                {faq.q}
                                            </h3>
                                            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF402D] group-hover:border-[#FF402D] group-hover:text-white transition-all duration-300 relative text-black">
                                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg) scale(0)' : 'rotate(0deg) scale(1)', opacity: isOpen ? 0 : 1 }}>
                                                    <Plus size={20} />
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300" style={{ transform: isOpen ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0)', opacity: isOpen ? 1 : 0 }}>
                                                    <Minus size={20} />
                                                </div>
                                            </div>
                                        </button>
                                        
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className="pb-8 pr-12 text-black/60 font-medium text-lg leading-relaxed">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
