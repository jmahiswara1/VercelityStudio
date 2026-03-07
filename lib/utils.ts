// Utility functions untuk Vercelity Studio

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Menggabungkan class Tailwind dengan penanganan konflik otomatis
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
