'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { AnimatedButton } from '@/components/ui/Button';
import MarqueeText from '@/components/ui/MarqueeText';

export default function About() {
    const { t } = useLanguage();

    // Ref ke komponen About untuk mendeteksi scroll
    const containerRef = useRef<HTMLElement>(null);

    // Melacak posisi scroll saat top of About berada antara bawah layar (start end) dan top layar (start start)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    // Mengubah nilai kurva dari 100 (datar di bawah SVG) menjadi 40 (melengkung lembut ke atas)
    const curveY = useTransform(scrollYProgress, [0, 1], [100, -20]);

    // Membuat dynamic SVG path
    const path = useMotionTemplate`M 0 100 Q 500 ${curveY} 1000 100 L 1000 100 L 0 100 Z`;

    const skills = [
        { id: '1', text: 'Web Development' },
        { id: '2', text: 'UI/UX Design' },
        { id: '3', text: '3D Design' },
        { id: '4', text: 'Company Profile' },
        { id: '5', text: 'Framer Motion' },
        { id: '6', text: 'Branding' },
        { id: '7', text: 'Logo Design' },
    ];

    return (
        <section ref={containerRef} id="about" className="bg-white text-black py-24 lg:pt-40 lg:pb-0 relative z-20 w-full overflow-visible rounded-b-[2.5rem] lg:rounded-b-[4rem]">
            {/* Animasi Kurva SVG Melengkung Ke Atas */}
            <div className="absolute top-0 left-0 w-full h-[150px] lg:h-[150px] -translate-y-[100%] pointer-events-none z-10">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full">
                    <motion.path d={path} fill="#ffffff" />
                </svg>
            </div>

            {/* Subtle light gray shape matching Viper reference */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-white">
                <div className="absolute -left-[20%] top-[20%] w-[60%] h-[60%] rounded-full bg-[#f8f9fa] mix-blend-multiply blur-3xl opacity-50" />
                <div className="absolute -right-[10%] bottom-[10%] w-[50%] h-[50%] rounded-full bg-[#f8f9fa] mix-blend-multiply blur-3xl opacity-50" />
            </div>

            <Container className="mb-24 lg:mb-32">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                    {/* Sidebar Header */}
                    <div className="w-full lg:w-1/4 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                            <span className="text-[15px] font-medium tracking-wide">{t('about.title')}</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:w-3/4 flex flex-col items-start pr-0 lg:pr-10">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[36px] xl:text-[38px] font-semibold text-justify tracking-tight leading-[1.1] mb-12 text-balance text-black">
                            {t('about.paragraph1')}
                        </h2>

                        <AnimatedButton
                            href="/contact"
                            text={t('hero.cta.secondary')}
                            className="bg-black/5 hover:bg-black/10 border border-transparent hover:border-black/5 mb-12 "
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full border-t border-black/5 pt-12">
                            <div>
                                <h3 className="text-[20px] font-bold tracking-tight mb-4 text-black">{t('about.col1.title')}</h3>
                                <p className="text-black/60 leading-relaxed text-[15px] font-medium">{t('about.paragraph2')}</p>
                            </div>
                            <div>
                                <h3 className="text-[20px] font-bold tracking-tight mb-4 text-black">{t('about.col2.title')}</h3>
                                <p className="text-black/60 leading-relaxed text-[15px] font-medium">{t('about.paragraph3')}</p>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24">
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/5">
                                <Image src="/images/hero.jpg" alt="Vercelity Project 1" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/5">
                                <Image src="/images/hero.jpg" alt="Vercelity Project 2" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/5">
                                <Image src="/images/hero.jpg" alt="Vercelity Project 3" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Unlimited Skills Marquee (Full width) */}
            <div className="w-full">
                <MarqueeText items={skills} speed={40} className="border-t border-black/10 border-b-0" />
            </div>
        </section>
    );
}
