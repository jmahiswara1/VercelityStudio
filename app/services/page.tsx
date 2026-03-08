import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <Container className="pt-32 pb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Services</h1>
                <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                    Our digital services cover UI/UX, branding, and web development.
                </p>
            </Container>
            <Footer />
        </main>
    );
}
