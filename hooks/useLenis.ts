'use client';

// Hook untuk inisialisasi Lenis smooth scroll

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis(): void {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // Opsi smooth scroll dasar
            smoothWheel: true,
        });

        // Animasi frame untuk Lenis
        function raf(time: number): void {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Bersihkan saat komponen unmount
        return () => {
            lenis.destroy();
        };
    }, []);
}
