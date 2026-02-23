import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Features } from './components/Features';
import { CarFleet } from './components/CarFleet';
import { HowItWorks } from './components/HowItWorks';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
    return (
        <main className="min-h-screen bg-white font-sans antialiased text-gray-950 scroll-smooth">
            <Navbar />
            <Hero />
            <Intro />
            <Features />
            <CarFleet />
            <HowItWorks />
            <Banner />
            <Footer />

            {/* Floating WhatsApp/Contact Button */}
            <motion.a
                href="https://wa.me/355691234567"
                target="_blank"
                rel="noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: 'spring', damping: 15 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center group"
            >
                <MessageSquare className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
                    Na shkruani në WhatsApp
                </span>
            </motion.a>
        </main>
    );
}
