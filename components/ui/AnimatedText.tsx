'use client';

// Teks dengan animasi fade-up saat masuk viewport

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
    once?: boolean;
}

export default function AnimatedText({
    children,
    className,
    delay = 0,
    as = 'div',
    once = true,
}: AnimatedTextProps) {
    const { ref, isInView } = useInView({ triggerOnce: once });

    // Tag HTML dinamis via motion
    const MotionComponent = motion.create(as);

    return (
        <MotionComponent
            ref={ref}
            className={cn(className)}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </MotionComponent>
    );
}
