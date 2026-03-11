'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { AnimatedButton } from '@/components/ui/Button';
import { Layers } from 'lucide-react';

export default function Portfolio() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const portfolioItems = [
        {
            id: 'project-1',
            title: 'Minexia Optimize',
            year: '2025',
            image: '/images/hero.jpg',
            tags: ['Mining', 'Dashboard', 'Analytics'],
        },
        {
            id: 'project-2',
            title: 'Pojok Foto',
            year: '2026',
            image: '/images/hero.jpg',
            tags: ['Photobooth', 'Studio'],
        },
        {
            id: 'project-3',
            title: 'Portfolio',
            year: '2026',
            image: '/images/hero.jpg',
            tags: ['Portfolio'],
        },
        {
            id: 'project-4',
            title: 'Xera Outdoor',
            year: '2026',
            image: '/images/hero.jpg',
            tags: ['Outdoor', 'Rental'],
        }
    ];

    // Group items for desktop rows
    const rows = [];
    for (let i = 0; i < portfolioItems.length; i += 2) {
        rows.push(portfolioItems.slice(i, i + 2));
    }

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="w-full bg-[#f4f5f7] text-black pt-24 pb-24 lg:pt-32 lg:pb-32 relative z-10 border-t border-black/10 overflow-clip"
        >
            {/* Background elements (abstract rounded shapes) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-white rounded-[100px] rotate-12 opacity-80" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[70%] bg-white rounded-[100px] -rotate-12 opacity-80" />
            </div>

            <Container>
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">

                    {/* Top Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                        <span className="text-[15px] font-medium tracking-wide uppercase">{t('portfolio.label')}</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-black"
                    >
                        {t('portfolio.title')}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10"
                    >
                        {t('portfolio.subtitle')}
                    </motion.p>

                    {/* View Portfolio Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-20"
                    >
                        <AnimatedButton
                            href="/portfolio"
                            text={t('portfolio.viewBtn')}
                            className="bg-black/5 hover:bg-black/10 pr-6"
                        />
                    </motion.div>

                    {/* Tech Stack / Partners Section
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center justify-center mb-24 w-full"
                    >
                        <p className="text-black/50 text-sm font-medium mb-8">
                            {t('portfolio.partnersText')}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px]">N</div>
                                <span className="font-bold text-xl tracking-tight">Next.js</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-[#38BDF8] flex items-center justify-center text-white font-bold text-[12px]">~</div>
                                <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-[#3178C6] text-white flex items-center justify-center font-bold text-[10px]">TS</div>
                                <span className="font-bold text-xl tracking-tight">TypeScript</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                                </div>
                                <span className="font-bold text-xl tracking-tight italic">Framer Motion</span>
                            </div>
                        </div>
                    </motion.div>
                    */}
                </div>

                {/* Desktop Stacking Grid of Portfolio Items */}
                <div className="hidden lg:flex flex-col gap-8 md:gap-12 relative z-10 w-full pb-10">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={`row-${rowIndex}`}
                            className="w-full grid grid-cols-2 gap-8 sticky"
                            style={{
                                top: `calc(120px + ${rowIndex * 40}px)`,
                                zIndex: rowIndex + 1
                            }}
                        >
                            {row.map((item, colIndex) => {
                                const index = rowIndex * 2 + colIndex;
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ duration: 0.6, delay: colIndex * 0.1 }}
                                        className="w-full"
                                    >
                                        <CardUI item={item} index={index} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Mobile Stacking Grid of Portfolio Items */}
                <div className="flex lg:hidden flex-col gap-6 relative z-10 w-full pb-10">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="w-full sticky"
                            style={{
                                top: `calc(100px + ${index * 24}px)`,
                                zIndex: index + 1
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6 }}
                                className="w-full"
                            >
                                <CardUI item={item} index={index} />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

const CardUI = ({ item, index }: { item: any, index: number }) => (
    <div className="flex flex-col w-full group cursor-pointer bg-white rounded-[32px] p-2 transition-colors duration-500 border border-black/5 shadow-[0_0_30px_rgba(0,0,0,0.03)] hover:shadow-[0_0_40px_rgba(0,0,0,0.08)]">
        {/* Image Container */}
        <div className="w-full relative aspect-[4/3] rounded-[24px] overflow-hidden mb-4 bg-zinc-200">
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>

        {/* Info Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:px-6 md:pb-6 md:pt-2">
            <div className="flex flex-col items-start gap-2">
                {/* Progressive Dots */}
                <div className="flex items-center gap-1.5 mb-1">
                    {[0, 1, 2, 3].map((dotIndex) => (
                        <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${dotIndex <= index
                                ? 'bg-[#FF402D] group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(255,64,45,0.4)]'
                                : 'bg-black/15 group-hover:bg-[#FF402D]/30'
                                }`}
                        />
                    ))}
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-black group-hover:text-[#FF402D] transition-colors duration-300">{item.title}</h3>
                <span className="text-black/50 text-sm font-medium">{item.year}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-auto sm:mt-0">
                {item.tags.map((tag: string, tagIndex: number) => (
                    <span
                        key={tagIndex}
                        className="px-4 py-2 bg-black/5 group-hover:bg-black/10 transition-colors rounded-full text-sm font-semibold text-black"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);
