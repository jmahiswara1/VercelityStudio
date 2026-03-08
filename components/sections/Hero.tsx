'use client';

// Section 01 — Hero: gambar full-bleed dengan teks brand besar dan subtitle

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Button, { AnimatedButton } from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="sticky top-0 h-screen w-full overflow-hidden bg-black z-0">
            {/* Area utama: gambar + konten overlay */}
            <div className="relative h-full w-full">
                {/* Gambar hero background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <Image
                        src="/images/hero.jpg"
                        alt="Vercelity Studio hero"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                    {/* Overlay gelap untuk kontras teks */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" /> */}
                    {/* Grain texture overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat',
                        }}
                    />
                </motion.div>

                {/* Konten utama — ditata di bagian bawah */}
                <Container className="relative z-10 flex min-h-screen flex-col justify-end pb-8 lg:pb-12">
                    {/* Baris bawah: brand name kiri + subtitle kanan */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        {/* Kiri: copyright + brand name */}
                        <div className="flex flex-col gap-2">
                            <motion.span
                                className="text-xs font-medium tracking-widest text-white/50 uppercase"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                2026
                            </motion.span>

                            {/* Nama brand besar */}
                            <motion.h1
                                className="text-5xl font-bold leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem]"
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                Vercelity
                                <span className="text-[#FF402D]">*</span>
                            </motion.h1>
                        </div>

                        {/* Kanan: subtitle + CTA */}
                        <motion.div
                            className="max-w-sm flex flex-col gap-5 lg:max-w-md lg:pb-2"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <p className="text-sm leading-relaxed text-white text-justify lg:text-base">
                                {t('hero.subtitle')}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <AnimatedButton href="#services" text={t('hero.cta.primary')} />
                                <Button variant="outline" href="#contact">
                                    {t('hero.cta.secondary')}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
