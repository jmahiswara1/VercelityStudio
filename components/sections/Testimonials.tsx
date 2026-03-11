'use client';

import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { AnimatedButton } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';

export default function Testimonials() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const testimonialsData = Array.from({ length: 10 }).map((_, index) => ({
        id: index + 1,
        author: 'Gadang Mahiswara',
        role: 'CEO',
        company: 'Vercelity Studio',
        text: t(`testimonials.${(index % 4) + 1}.text`),
        avatar: '/images/testimonial.jpg'
    }));

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="w-full bg-white text-black pt-24 pb-24 lg:pt-32 lg:pb-32 relative z-10 overflow-hidden"
        >
            <Container>
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16 max-w-4xl mx-auto">
                    {/* Top Badge (Red Square) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                        <span className="text-[15px] font-medium tracking-wide uppercase">{t('testimonials.label')}</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter"
                    >
                        {t('testimonials.title')}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
                    >
                        {t('testimonials.subtitle')}
                    </motion.p>

                    {/* Animated Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="pt-4"
                    >
                        <AnimatedButton
                            href="#contact"
                            text={t('testimonials.partnerBtn')}
                            className="bg-black/5 shadow-none border border-black/5 pr-6"
                        />
                    </motion.div>
                </div>

                {/* Slider Controls */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-end items-center gap-4 mb-8"
                >
                    <button
                        onClick={scrollPrev}
                        className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 hover:scale-105 transition-all text-black/70 hover:text-black"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 hover:scale-105 transition-all text-black/70 hover:text-black"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight size={24} />
                    </button>
                </motion.div>

                {/* Testimonial Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="overflow-hidden w-[calc(100%+2rem)] -ml-4 pb-8 cursor-grab active:cursor-grabbing"
                    ref={emblaRef}
                >
                    <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
                        {testimonialsData.map((review) => (
                            <div
                                key={review.id}
                                className="flex-[0_0_85%] md:flex-[0_0_420px] min-w-0 px-3 md:px-4"
                            >
                                <div className="w-full h-full bg-[#f4f5f7] rounded-[24px] p-8 md:p-10 flex flex-col border border-black/5">
                                    {/* Card Header (Avatar & X Icon) */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden relative border border-black/10 shrink-0">
                                            <Image
                                                src={review.avatar}
                                                alt={review.author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black/40 shrink-0 mt-1 mr-1">
                                            <X size={14} strokeWidth={3} />
                                        </div>
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={18} className="fill-[#FF402D] text-[#FF402D]" />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-black/80 font-medium leading-relaxed mb-10 flex-1 min-h-[120px]">
                                        {review.text}
                                    </p>

                                    {/* Horizontal Line Divider */}
                                    <div className="w-full h-px bg-black/5 mb-6 shrink-0" />

                                    {/* Author Info */}
                                    <div className="flex flex-col shrink-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="font-bold tracking-tight text-black">{review.author}</span>
                                            <span className="w-1 h-1 rounded-full bg-black/30" />
                                            <span className="font-bold tracking-tight text-black">{review.role}</span>
                                        </div>
                                        <span className="text-black/50 font-medium text-sm">{review.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </Container>
        </section>
    );
}
