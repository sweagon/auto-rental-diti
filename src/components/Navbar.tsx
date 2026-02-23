import { Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 text-white md:px-12 backdrop-blur-sm bg-black/10 border-b border-white/5"
        >
            <div className="flex items-center gap-12">
                <a href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
                    DITI<span className="text-yellow-400">.</span>
                </a>
                <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
                    <a href="#fleet" className="hover:text-yellow-400 transition-colors">Makinat</a>
                    <a href="#features" className="hover:text-yellow-400 transition-colors">Pse Ne</a>
                    <a href="#how-it-works" className="hover:text-yellow-400 transition-colors">Si Funksionon</a>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
                    <MapPin className="w-3 h-3 text-yellow-400" />
                    <span>Rinas Airport</span>
                </div>
                <motion.a
                    href="tel:+355691234567"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2.5 rounded-full text-xs font-bold hover:bg-yellow-500 transition-all shadow-lg"
                >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+355683797009</span>
                </motion.a>
            </div>
        </motion.nav>
    );
}
