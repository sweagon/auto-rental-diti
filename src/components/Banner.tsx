import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Banner() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden mx-auto max-w-[1400px] md:rounded-[40px] md:mb-12">
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src="https://i.ytimg.com/vi/O1GwnwU87xo/maxresdefault.jpg"
                    alt="Scenic drive"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-3xl text-white ml-0 md:ml-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
                >
                    Shqipëria është më e bukur kur udhëtoni të qetë.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-white/80 mb-10 font-light max-w-xl"
                >
                    Merrni makinën tuaj në Aeroportin e Rinasit dhe nisni aventurën pa vonesa. Çmimet më konkurruese në treg.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    href="tel:+355691234567"
                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-10 py-5 text-sm font-bold hover:bg-yellow-500 transition-colors rounded-full shadow-2xl"
                >
                    Rezervo Makinën <ArrowRight className="w-4 h-4" />
                </motion.a>
            </div>
        </section>
    );
}
