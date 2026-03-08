'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { AnimatedButton } from '@/components/ui/Button';

export default function Services() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    // Data layanan statis (disesuaikan dengan keys di locale)
    const services = [
        { id: '01', titleKey: 'services.01.title', detailKey: 'services.01.detail', image: '/images/hero.jpg' },
        { id: '02', titleKey: 'services.02.title', detailKey: 'services.02.detail', image: '/images/hero.jpg' },
        { id: '03', titleKey: 'services.03.title', detailKey: 'services.03.detail', image: '/images/hero.jpg' },
        { id: '04', titleKey: 'services.04.title', detailKey: 'services.04.detail', image: '/images/hero.jpg' },
        { id: '05', titleKey: 'services.05.title', detailKey: 'services.05.detail', image: '/images/hero.jpg' },
    ];

    const [hoveredService, setHoveredService] = useState<string | null>(null);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="w-full bg-zinc-100 text-black py-24 lg:py-32 relative z-10 border-t border-black/10"
        >
            <Container>
                {/* Header Grid: Left Sidebar & Right Content Area (which actually holds the huge title) */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-24 mb-20 lg:mb-24">

                    {/* Left Column: Heading and Intro */}
                    <div className="w-full lg:w-1/4 flex flex-col items-start pr-0 lg:pr-10">
                        {/* Section Label */}
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                            <span className="text-[15px] font-medium tracking-wide">{t('services.label')}</span>
                        </div>

                        {/* Huge Heading */}
                        <motion.h2
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
                        >
                            {t('services.heading')}
                        </motion.h2>

                        {/* Intro Text */}
                        <motion.p
                            className="text-black/60 text-lg md:text-xl font-medium max-w-md leading-relaxed mb-12"
                        >
                            {t('services.intro')}
                        </motion.p>

                        {/* Features List (Hardcoded per design reference) */}
                        <motion.div
                            className="flex flex-col gap-4 mb-12"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF402D]/10 text-[#FF402D] font-bold text-lg leading-none shrink-0">+</div>
                                <span className="font-semibold text-[15px]">Convert More, Grow Faster</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF402D]/10 text-[#FF402D] font-bold text-lg leading-none shrink-0">+</div>
                                <span className="font-semibold text-[15px]">Future-Proof & Scalable</span>
                            </div>
                        </motion.div>

                        <AnimatedButton
                            href="/services"
                            text="Our Services"
                            className="bg-black/5 hover:bg-black/10 pr-6 border border-transparent hover:border-black/5 max-w-[200px]"
                        />
                    </div>

                    {/* Right Column: Top Label and Services List */}
                    <div className="w-full lg:w-3/4 flex flex-col justify-start">
                        {/* Top Label (CQ® — 05 and Copyright) */}
                        <div className="hidden lg:flex justify-between items-center w-full mb-16 text-[15px] font-medium tracking-wide">
                            <span>UPDATED</span>
                            <span>©2026</span>
                        </div>

                        {/* Interactive Services List */}
                        <div className="flex flex-col gap-3 w-full">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    className="group relative"
                                    onMouseEnter={() => setHoveredService(service.id)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    <div className="w-full flex items-center bg-[#ebebeb] hover:bg-[#e0e0e0] transition-colors duration-300 rounded-3xl p-3 pr-8 cursor-pointer border border-transparent hover:border-black/5">

                                        {/* Image Thumbnail */}
                                        <div className="relative w-24 h-20 sm:w-32 sm:h-24 md:w-56 md:h-36 rounded-2xl overflow-hidden shrink-0 bg-black/10 transition-transform duration-500 group-hover:scale-[0.98]">
                                            <Image
                                                src={service.image}
                                                alt={t(service.titleKey)}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 150px, 300px"
                                            />
                                        </div>

                                        {/* Text Info */}
                                        <div className="flex flex-col flex-grow ml-6 md:ml-10 justify-center h-full">
                                            <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-1 md:mb-3 text-black transition-colors duration-300">
                                                {t(service.titleKey)}
                                            </h3>
                                            <p className="text-black/60 text-sm md:text-base font-medium max-w-xl">
                                                {t(service.detailKey).replace('Tools: ', '').replace('Deliverables: ', '').replace('Tech Stack: ', '').replace('Estimasi: ', '')}
                                            </p>
                                        </div>

                                        {/* 5-dot Indicator progressive */}
                                        <div className="hidden sm:flex items-center gap-1.5 shrink-0 ml-4">
                                            {[0, 1, 2, 3, 4].map((dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${dotIndex <= index
                                                        ? 'bg-[#FF402D] group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(255,64,45,0.4)]'
                                                        : 'bg-black/15 group-hover:bg-[#FF402D]/30'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
