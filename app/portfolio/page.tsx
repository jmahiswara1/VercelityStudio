import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <Container className="pt-32 pb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Portfolio</h1>
                <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                    Check out our latest curated selection of digital and visual experiences.
                </p>
            </Container>
            <Footer />
        </main>
    );
}
