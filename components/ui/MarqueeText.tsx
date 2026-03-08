'use client';

// Teks/Logo bergerak horizontal (marquee) tanpa henti
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeItem {
    id: string;
    text: string;
    icon?: React.ReactNode;
}

interface MarqueeProps {
    items: MarqueeItem[];
    className?: string;
    speed?: number; // Durasi dalam detik untuk satu putaran penuh
}

export default function MarqueeText({
    items,
    className,
    speed = 30,
}: MarqueeProps) {
    // Kita duplikasi array items 3 kali untuk memastikan transisi infinite scroll-nya seamless tanpa celah kosong
    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className={cn('relative flex overflow-hidden border-y border-black/10 bg-white w-full', className)}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    // Karena kita duplikasi 3x, kita memindahkan persentase lebar dari 1 array penuh untuk loop
                    x: ['0%', '-33.333333%'],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: speed,
                    ease: 'linear',
                }}
            >
                {repeatedItems.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className="flex items-center justify-center px-12 md:px-20 py-8 border-r border-black/10 min-w-max"
                    >
                        {item.icon && <span className="mr-3">{item.icon}</span>}
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-black uppercase">
                            {item.text}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
