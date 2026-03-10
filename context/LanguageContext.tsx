'use client';

// Context global untuk pengelolaan bahasa (ID/EN)

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { Language } from '@/types';
import { id as idLocale } from '@/locales/id';
import { en as enLocale } from '@/locales/en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>('id');

    // Mencegah mismatch SSR dengan Load preferensi localStorage setelah mount klien
    useEffect(() => {
        const storedLang = localStorage.getItem('vercelity-lang') as Language;
        if (storedLang && (storedLang === 'id' || storedLang === 'en')) {
            setLanguage(storedLang);
        }
    }, []);

    // Mengganti bahasa antara ID dan EN & simpan ke localStorage
    const toggleLanguage = useCallback(() => {
        setLanguage((prev) => {
            const newLang = prev === 'id' ? 'en' : 'id';
            localStorage.setItem('vercelity-lang', newLang);
            return newLang;
        });
    }, []);

    // Mengambil teks berdasarkan key dan bahasa aktif
    const t = useCallback(
        (key: string): string => {
            const locale = language === 'id' ? idLocale : enLocale;
            return locale[key] || key;
        },
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Hook untuk mengakses context bahasa
export function useLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage harus digunakan di dalam LanguageProvider');
    }
    return context;
}
