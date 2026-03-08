'use client';

// Footer — info studio, navigasi, dan media sosial

import { Instagram, Github, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, contactInfo } from '@/constants/data';
import Container from '@/components/ui/Container';

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();
    const email = contactInfo.find((c) => c.type === 'email')?.value || 'hello@vercelity.com';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#F8F9FA] text-[#111111] overflow-hidden relative border-t border-black/5">
            <Container className="pt-20 lg:pt-32 pb-6">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 mb-20">

                    {/* Left: Contact Info */}
                    <div className="flex-1 flex flex-col items-start lg:pr-10">
                        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-black/40 mb-1 leading-none">
                            {t('footer.stayConnected')}
                        </h2>

                        <div className="mb-10 w-fit">
                            <a
                                href="mailto:gadangjatumahiswara@gmail.com"
                                className="group flex flex-col items-start text-4xl sm:text-5xl lg:text-[68px] font-bold tracking-tight text-black hover:text-black/70 transition-colors leading-[0.9]"
                            >
                                <span>gadangjatumahiswara</span>
                                <span className="border-b-[4px] lg:border-b-[6px] border-black group-hover:border-black/70 transition-colors pb-1 w-full">@gmail.com</span>
                            </a>
                        </div>

                        <p className="max-w-sm text-black/60 text-[15px] leading-relaxed mb-10 font-medium">
                            {t('footer.description')}
                        </p>

                        {/* Custom CTA Button matching image */}
                        <a href="/contact" className="group relative flex items-center overflow-hidden rounded-full bg-black/5 pr-6 pl-1.5 py-1.5 font-semibold text-[15px] transition-transform hover:scale-[1.02] active:scale-95">
                            <div className="absolute left-1.5 h-10 w-10 rounded-full bg-[#FF402D] transition-all duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-[calc(100%-12px)]" />
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center text-white">
                                <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                            <div className="relative z-10 ml-3 overflow-hidden h-[24px] flex items-start shrink-0">
                                <div className="flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[24px]">
                                    <span className="flex h-[24px] items-center text-black tracking-tight leading-none whitespace-nowrap">{t('footer.contactNow')}</span>
                                    <span className="flex h-[24px] items-center text-white tracking-tight leading-none whitespace-nowrap">{t('footer.contactNow')}</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Right: Navigation Links */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-start">
                        {navItems.slice(0, 5).map((item, index) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group relative flex items-center justify-between py-5 px-4 -mx-4 border-b border-black/10 transition-colors overflow-hidden"
                            >
                                {/* Swipe Red Background */}
                                <div className="absolute inset-0 bg-[#FF402D] origin-left scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

                                <div className="relative z-10 flex items-center gap-3">
                                    <span className="text-[12px] font-bold text-black/60 group-hover:text-white transition-colors duration-300 w-6">
                                        {(index + 1).toString().padStart(2, '0')} <span className="text-black/30 group-hover:text-white/50 transition-colors duration-300">/</span>
                                    </span>
                                    <span className="text-base font-semibold text-black/80 group-hover:text-white transition-colors duration-300 ml-1">
                                        {t(item.labelKey)}
                                    </span>
                                </div>
                                <ArrowRight size={18} className="relative z-10 text-black/40 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45 block" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle Section: Giant Text + Image */}
                <div className="pt-8 lg:pt-14 border-t border-black/10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Giant VERCELITY Text */}
                        <div className="flex-1 w-full flex items-center justify-start overflow-hidden">
                            <h2
                                className="font-black text-black uppercase tracking-tighter leading-[0.8] pb-4"
                                style={{ fontSize: 'clamp(80px, 15vw, 200px)', transform: 'scaleY(1.05)' }}
                            >
                                VERCELITY
                            </h2>
                        </div>

                        {/* Image Block */}
                        <div className="w-full lg:w-[35%] xl:w-[400px] aspect-[16/10] lg:aspect-[4/3] relative rounded-2xl overflow-hidden shrink-0 bg-black/5">
                            <Image
                                src="/images/hero.jpg"
                                alt="Vercelity Footer Visual"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 400px"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Back to top */}
                <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-[15px] font-semibold text-black/70">
                    <p>
                        Copyright © Vercelity {year}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 hover:text-black transition-colors group cursor-pointer"
                        aria-label="Scroll to top"
                    >
                        <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black/20 group-hover:border-black/40 transition-colors">
                            <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                        Back to top
                    </button>
                </div>
            </Container>
        </footer>
    );
}
