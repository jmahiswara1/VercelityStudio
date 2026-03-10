'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { User, Building2, Car, MapPin } from 'lucide-react';

export default function HowWeWork() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const steps = [
        {
            num: '01',
            titleKey: 'howWeWork.step1.title',
            descKey: 'howWeWork.step1.desc',
            icon: User
        },
        {
            num: '02',
            titleKey: 'howWeWork.step2.title',
            descKey: 'howWeWork.step2.desc',
            icon: Building2
        },
        {
            num: '03',
            titleKey: 'howWeWork.step3.title',
            descKey: 'howWeWork.step3.desc',
            icon: Car
        },
        {
            num: '04',
            titleKey: 'howWeWork.step4.title',
            descKey: 'howWeWork.step4.desc',
            icon: MapPin
        }
    ];

    return (
        <section
            id="process"
            ref={sectionRef}
            className="w-full bg-[#f4f5f7] text-black pt-12 lg:pt-16 pb-24 lg:pb-32 relative z-10"
        >
            <Container>
                {/* Header Centered */}
                <div className="flex flex-col items-center justify-center text-center mb-24">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2.5 h-2.5 bg-[#FF402D]" />
                        <span className="text-[15px] font-medium tracking-wide uppercase">{t('howWeWork.label')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
                        {t('howWeWork.title')}
                    </h2>
                </div>

                {/* Steps Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Numbering */}
                                <div className="text-8xl md:text-[140px] font-black text-[#FF402D] leading-none mb-8 relative">
                                    {step.num}
                                    {/* Optional drop shadow to match image style */}
                                    <div className="absolute -bottom-2 left-0 w-full h-4 bg-black/10 blur-md rounded-[100%] z-[-1]" />
                                </div>

                                {/* Step Title */}
                                <h3 className="text-lg md:text-xl font-bold tracking-wide text-black mb-4 uppercase">
                                    {t(step.titleKey)}
                                </h3>

                                {/* Step Description */}
                                <p className="text-black/60 text-sm leading-relaxed mb-12">
                                    {t(step.descKey)}
                                </p>

                                {/* Icon */}
                                <div className="mt-auto">
                                    <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
