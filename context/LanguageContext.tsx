'use client';

// Context global untuk pengelolaan bahasa (ID/EN)

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
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

    // Mengganti bahasa antara ID dan EN
    const toggleLanguage = useCallback(() => {
        setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
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
