'use client';

// Halaman utama — semua section dalam satu halaman

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import HowWeWork from '@/components/sections/HowWeWork';
import { useLenis } from '@/hooks/useLenis';

export default function Home() {
  // Inisialisasi smooth scroll
  useLenis();

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="w-full">
        {/* [01] Hero */}
        <Hero />
        {/* [02] About */}
        <About />
        {/* [03] Services */}
        <Services />
        {/* [04] HowWeWork */}
        <HowWeWork />
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
