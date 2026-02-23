import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const transition = { duration: 1, ease: [0.16, 1, 0.3, 1] };

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-end pb-24 px-6 md:px-12 overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1503376760366-5a413e971510?q=80&w=2500&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>
            </div>

            {/* Rest of your content (unchanged) */}
            <div className="relative z-10 max-w-5xl text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                        Udhëtimi juaj fillon këtu.<br />
                        <span className="text-white/70">Makina me qira në Rinas.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 font-light leading-relaxed">
                        Ofrojmë një flotë të gjerë automjetesh, nga ato ekonomike deri tek ato luksoze, gati për ju sapo të zbrisni në Aeroportin e Tiranës. Shërbim i shpejtë, pa burokraci.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="tel:+355691234567"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 text-sm font-semibold hover:bg-yellow-500 transition-colors rounded-full"
                        >
                            Na Telefononi <ArrowRight className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href="#fleet"
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 text-sm font-semibold border border-white/20 transition-all rounded-full"
                        >
                            Shiko Flotën <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
            </motion.div>
        </section>
    );
}