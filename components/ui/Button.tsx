'use client';

// Tombol reusable dengan varian primary dan outline

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className,
    type = 'button',
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer';

    const variants = {
        primary: 'bg-white text-black hover:bg-white/90',
        outline: 'border border-white/30 text-white hover:bg-white/10',
    };

    const combinedClassName = cn(baseStyles, variants[variant], className);

    // Jika ada href, render sebagai link
    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedClassName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={combinedClassName}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
}

export function AnimatedButton({
    href,
    text,
    className,
    onClick,
    type = 'button',
}: {
    href?: string;
    text: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}) {
    const innerContent = (
        <>
            {/* Lebarkan lingkaran (lonjong) menjadi background penuh */}
            <div className="absolute left-1 h-10 w-10 rounded-full bg-[#FF402D] transition-all duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-[calc(100%-8px)]" />

            {/* Ikon panah */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center text-white">
                <ArrowRight size={20} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            {/* Animasi teks slide up */}
            <div className="relative z-10 ml-1.5 overflow-hidden h-[24px] flex items-start shrink-0">
                <div className="flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[24px]">
                    <span className="flex h-[24px] items-center text-black font-semibold tracking-tight leading-none whitespace-nowrap">{text}</span>
                    <span className="flex h-[24px] items-center text-white font-semibold tracking-tight leading-none whitespace-nowrap">{text}</span>
                </div>
            </div>
        </>
    );

    const commonClasses = cn(
        "group relative flex items-center overflow-hidden rounded-full bg-white/80 pr-5 pl-1 py-1 font-medium text-[16px] transition-transform hover:scale-[1.02] active:scale-95",
        className
    );

    if (href) {
        return (
            <a href={href} className={commonClasses} onClick={onClick}>
                {innerContent}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={commonClasses}>
            {innerContent}
        </button>
    );
}
