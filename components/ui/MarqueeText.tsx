'use client';

// Teks bergerak horizontal (marquee) tanpa henti

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeTextProps {
    text: string;
    className?: string;
    speed?: number;
    separator?: string;
}

export default function MarqueeText({
    text,
    className,
    speed = 20,
    separator = ' — ',
}: MarqueeTextProps) {
    // Membuat teks berulang untuk efek tak terbatas
    const repeatedText = Array(6).fill(`${text}${separator}`).join('');

    return (
        <div className={cn('overflow-hidden whitespace-nowrap', className)}>
            <motion.div
                className="inline-block"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: speed,
                        ease: 'linear',
                    },
                }}
            >
                <span className="inline-block text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter text-white/10">
                    {repeatedText}
                </span>
            </motion.div>
        </div>
    );
}
