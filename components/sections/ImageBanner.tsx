'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function ImageBanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section className="w-full bg-white relative z-10 pt-10 pb-20">
            <Container className="px-4 md:px-6 mx-auto w-full max-w-[1400px]">
                <div
                    ref={containerRef}
                    className="relative w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden flex items-center justify-center bg-[#1a1a1a]"
                >
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0 w-full h-[120%]"
                    >
                        <Image
                            src="/images/hero.jpg"
                            alt="VR Experience"
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        {/* Dark overlay to make text pop */}
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                    </motion.div>

                    {/* Content overlay */}
                    <div className="relative z-10 text-center">
                        <div className="flex items-center justify-center gap-1 group">
                            <h2 className="text-white text-5xl md:text-8xl lg:text-[140px] font-black tracking-tighter mix-blend-overlay">
                                VERCELITY
                            </h2>
                            <span className="text-[#FF402D] text-5xl md:text-8xl lg:text-[140px] font-black -mt-6 md:-mt-12 group-hover:rotate-180 transition-transform duration-700 delay-150 relative z-20 mix-blend-normal">
                                *
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
