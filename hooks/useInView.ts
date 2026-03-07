'use client';

// Hook untuk mendeteksi elemen masuk viewport

import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseInViewOptions {
    threshold?: number;
    triggerOnce?: boolean;
    rootMargin?: string;
}

interface UseInViewReturn {
    ref: RefObject<HTMLDivElement | null>;
    isInView: boolean;
}

export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
    const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options;
    const ref = useRef<HTMLDivElement | null>(null);
    const [isInView, setIsInView] = useState<boolean>(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    // Hentikan observasi jika hanya sekali
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, triggerOnce, rootMargin]);

    return { ref, isInView };
}
