'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/Button';

export default function Pricing() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    // Helper for WhatsApp link
    const getWhatsAppLink = (planName: string) => {
        const message = `Halo Vercelity Studio, saya tertarik untuk mendiskusikan paket ${planName} untuk proyek saya.`;
        return `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    };

    return (
        <section
            id="pricing"
            ref={sectionRef}
            className="w-full bg-white text-black pt-24 pb-24 lg:pt-32 lg:pb-32 relative z-10 border-t border-black/5 overflow-hidden"
        >
            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                        <span className="text-[15px] font-medium tracking-wide" />
                        {t('pricing.label')}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter"
                    >
                        {t('pricing.title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
                    >
                        {t('pricing.subtitle')}
                    </motion.p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* CARD 1: Web Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-[#f4f5f7] rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-black/5 hover:border-black/10 transition-colors"
                    >
                        {/* 3 Dots Detail from Reference */}
                        <div className="flex justify-end gap-1 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF402D]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                        </div>

                        <div className="flex items-baseline gap-2 mb-6">
                            <h3 className="text-3xl font-extrabold tracking-tight">{t('pricing.web.price')}</h3>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 bg-[#FF402D] rounded-sm" />
                            <span className="font-bold text-lg">{t('pricing.web.name')}</span>
                        </div>

                        <p className="text-black/60 font-medium mb-10 h-12">
                            {t('pricing.web.target')}
                        </p>

                        <div className="mb-10 w-full flex items-center justify-start relative z-10">
                            <AnimatedButton
                                href={getWhatsAppLink('Web Development')}
                                text={t('pricing.web.btn')}
                                className="bg-white shadow-md border border-black/5 pr-6"
                            />
                        </div>

                        <div className="bg-black/5 h-[1px] w-full mb-8" />

                        <p className="font-bold mb-6 text-sm">What's included</p>

                        <ul className="space-y-4 font-medium text-black/80 flex-1">
                            {[1, 2, 3, 4].map((num) => (
                                <li key={num} className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#FF402D]/10 text-[#FF402D] flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span>{t(`pricing.web.f${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CARD 2: Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#f4f5f7] rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-black/5 hover:border-black/10 transition-colors"
                    >
                        {/* 3 Dots Detail from Reference */}
                        <div className="flex justify-end gap-1 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF402D]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                        </div>

                        <div className="flex items-baseline gap-2 mb-6">
                            <h3 className="text-3xl font-extrabold tracking-tight">{t('pricing.design.price')}</h3>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 bg-[#FF402D] rounded-sm" />
                            <span className="font-bold text-lg">{t('pricing.design.name')}</span>
                        </div>

                        <p className="text-black/60 font-medium mb-10 h-12">
                            {t('pricing.design.target')}
                        </p>

                        <div className="mb-10 w-full flex items-center justify-start relative z-10">
                            <AnimatedButton
                                href={getWhatsAppLink('UI/UX Design')}
                                text={t('pricing.design.btn')}
                                className="bg-white shadow-md border border-black/5 pr-6"
                            />
                        </div>

                        <div className="bg-black/5 h-[1px] w-full mb-8" />

                        <p className="font-bold mb-6 text-sm">What's included</p>

                        <ul className="space-y-4 font-medium text-black/80 flex-1">
                            {[1, 2, 3, 4].map((num) => (
                                <li key={num} className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#FF402D]/10 text-[#FF402D] flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span>{t(`pricing.design.f${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CARD 3: Full Package (Dark) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-[#09090b] text-white rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-white/10 relative overflow-hidden group"
                    >
                        {/* Optional glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF402D] opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                        {/* 3 Dots Detail from Reference */}
                        <div className="flex justify-between items-center mb-8">
                            <span className="bg-[#FF402D]/20 text-[#FF402D] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                                {t('pricing.full.badge')}
                            </span>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF402D]" />
                            </div>
                        </div>

                        <div className="flex items-baseline gap-2 mb-6">
                            <h3 className="text-4xl font-extrabold tracking-tight">{t('pricing.full.price')}</h3>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 bg-[#FF402D] rounded-sm" />
                            <span className="font-bold text-lg">{t('pricing.full.name')}</span>
                        </div>

                        <p className="text-white/60 font-medium mb-10 h-12">
                            {t('pricing.full.target')}
                        </p>

                        <div className="mb-10 w-full flex items-center justify-start relative z-10">
                            <AnimatedButton
                                href={getWhatsAppLink('Full Package')}
                                text={t('pricing.full.btn')}
                                className="bg-white/95 text-black pr-6 shadow-xl"
                            />
                        </div>

                        <div className="bg-white/10 h-[1px] w-full mb-8" />

                        <p className="font-bold mb-6 text-sm text-white/80">What's included</p>

                        <ul className="space-y-4 font-medium text-white/70 flex-1">
                            {[1, 2, 3, 4].map((num) => (
                                <li key={num} className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#FF402D]/20 text-[#FF402D] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,64,45,0.2)]">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span>{t(`pricing.full.f${num}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
