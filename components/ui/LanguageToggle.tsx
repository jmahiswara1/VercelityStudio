'use client';

// Tombol toggle bahasa ID/EN

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
    className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                'relative flex items-center gap-1 rounded-full border border-white/20 px-1 py-1 text-xs font-medium tracking-wide transition-colors hover:border-white/40',
                className
            )}
            aria-label="Toggle language"
        >
            <span
                className={cn(
                    'relative z-10 px-2 py-1 rounded-full transition-colors duration-300',
                    language === 'id' ? 'text-black' : 'text-white/60'
                )}
            >
                ID
            </span>
            <span
                className={cn(
                    'relative z-10 px-2 py-1 rounded-full transition-colors duration-300',
                    language === 'en' ? 'text-black' : 'text-white/60'
                )}
            >
                EN
            </span>
            {/* Indikator geser */}
            <motion.div
                className="absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-white"
                animate={{ left: language === 'id' ? '4px' : 'calc(50%)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
        </button>
    );
}
