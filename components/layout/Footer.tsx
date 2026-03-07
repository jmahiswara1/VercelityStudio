'use client';

// Footer — info studio, navigasi, dan media sosial

import { Instagram, Github, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { navItems, contactInfo } from '@/constants/data';

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Kolom 1: Logo dan tagline */}
                    <div>
                        <h3 className="text-lg font-bold text-white">Vercelity Studio</h3>
                        <p className="mt-3 text-sm text-white/50">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Kolom 2: Navigasi */}
                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-widest text-white/30">
                            Navigation
                        </h4>
                        <ul className="mt-4 space-y-3">
                            {navItems.slice(0, 5).map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-sm text-white/50 transition-colors hover:text-white"
                                    >
                                        {t(item.labelKey)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak dan sosial */}
                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-widest text-white/30">
                            Connect
                        </h4>
                        <div className="mt-4 flex gap-4">
                            {contactInfo
                                .filter((c) => c.type === 'instagram' || c.type === 'github' || c.type === 'email')
                                .map((contact) => {
                                    const Icon =
                                        contact.type === 'instagram'
                                            ? Instagram
                                            : contact.type === 'github'
                                                ? Github
                                                : Mail;
                                    return (
                                        <a
                                            key={contact.type}
                                            href={contact.link}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={contact.type}
                                        >
                                            <Icon size={16} />
                                        </a>
                                    );
                                })}
                        </div>
                        <p className="mt-6 text-sm text-white/40">
                            {contactInfo.find((c) => c.type === 'email')?.value}
                        </p>
                    </div>
                </div>

                {/* Baris bawah: copyright */}
                <div className="mt-16 border-t border-white/5 pt-8 text-center">
                    <p className="text-xs text-white/30">
                        {year} {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
