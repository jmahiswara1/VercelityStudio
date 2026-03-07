'use client';

// Tombol reusable dengan varian primary dan outline

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
