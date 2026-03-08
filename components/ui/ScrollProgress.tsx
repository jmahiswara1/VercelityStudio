'use client';

// Indikator progress scroll di bagian atas halaman

import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
    className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className={cn(
                'fixed top-0 left-0 right-0 h-[2px] bg-[#FF402D] origin-left z-[100]',
                className
            )}
            style={{ scaleX }}
        />
    );
}
