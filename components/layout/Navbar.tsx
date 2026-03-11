'use client';

// Navbar — navigasi utama dengan link anchor dan language toggle

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';
import { AnimatedButton } from '@/components/ui/Button';

export default function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    // Deteksi arah scroll untuk show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 50);
            setIsVisible(currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Kunci scroll saat menu mobile terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <motion.header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
                    isScrolled ? 'bg-transparent' : 'bg-transparent'
                )}
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
            >
                <Container className="flex items-center justify-between py-5">
                    {/* Logo */}
                    <Link href="/" className="flex items-start text-2xl font-black tracking-tighter text-white uppercase">
                        Vercelity
                        <span className="text-[#FF402D] text-3xl leading-[0.6] ml-[2px] mt-[4px]">*</span>
                    </Link>

                    {/* Kanan: Navbar Links + Language Toggle + Get In Touch */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        {/* Desktop Links */}
                        <div className="hidden items-center gap-8 xl:gap-10 lg:flex mr-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group flex items-start text-[15px] xl:text-[16px] font-medium transition-colors duration-200"
                                >
                                    <span className="text-white/70 group-hover:text-white transition-colors duration-300 tracking-wide {item.href === '/' ? 'text-white' : ''}">
                                        {t(item.labelKey)}
                                    </span>
                                    <sup className="ml-1 mt-0.5 text-[10px] text-white/50 tracking-widest transition-all duration-300 group-hover:text-white/80 shrink-0">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </sup>
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <LanguageToggle />
                        </div>

                        <AnimatedButton 
                            href="https://wa.me/6281234567890?text=Hello%20Vercelity%20Studio" 
                            target="_blank"
                            rel="noopener noreferrer"
                            text={t('nav.cta')} 
                            className="hidden lg:flex" 
                        />

                        {/* Mobile Menu Toggle */}
                        <button
                            className="text-white lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </Container>
            </motion.header>

            {/* Menu mobile fullscreen */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black lg:hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-2xl font-medium text-white"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t(item.labelKey)}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
