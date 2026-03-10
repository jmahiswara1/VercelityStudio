// Root layout — font, metadata, dan provider bahasa

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vercelity Studio',
  description:
    'Vercelity Studio adalah duo kreatif yang menggabungkan kekuatan desain visual dan teknologi web. Kami hadir untuk mengubah ide bisnis Anda menjadi pengalaman digital yang berkesan.',
  keywords: ['web design', 'web development', 'branding', 'studio kreatif', 'landing page', 'UI/UX'],
  authors: [
    { name: 'Gadang Jatu Mahiswara' },
    { name: 'Anindya Ratri Adiningsih' },
  ],
  openGraph: {
    title: 'Vercelity Studio — We Design. We Build. You Grow.',
    description:
      'Duo kreatif yang menggabungkan desain visual dan teknologi web untuk mengubah ide bisnis Anda menjadi pengalaman digital yang berkesan.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
