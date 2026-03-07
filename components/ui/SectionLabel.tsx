'use client';

// Label kecil di atas heading section (seperti "01 — ABOUT")

import { cn } from '@/lib/utils';

interface SectionLabelProps {
    number?: string;
    text: string;
    className?: string;
}

export default function SectionLabel({ number, text, className }: SectionLabelProps) {
    return (
        <div
            className={cn(
                'flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 font-medium',
                className
            )}
        >
            {number && (
                <>
                    <span className="text-white/30">{number}</span>
                    <span className="w-6 h-px bg-white/20" />
                </>
            )}
            <span>{text}</span>
        </div>
    );
}
