'use client';

// Halaman utama — semua section dalam satu halaman

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { useLenis } from '@/hooks/useLenis';

export default function Home() {
  // Inisialisasi smooth scroll
  useLenis();

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        {/* Section akan ditambahkan satu per satu sesuai build order */}
        {/* [01] Hero */}
        {/* [02] About */}
        {/* [03] Services */}
        {/* [04] HowWeWork */}
        {/* [05] Portfolio */}
        {/* [06] Pricing */}
        {/* [07] Testimonials */}
        {/* [08] Photography / Gallery */}
        {/* [09] Contact */}
      </main>

      <Footer />
    </>
  );
}
