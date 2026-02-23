import { Shield, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
    {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: 'Garancia e Çmimit më të Mirë',
        description: 'Ne angazhohemi për transparencë dhe vlerë, duke ju siguruar tarifat më të mira për qiranë tuaj.'
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: 'Siguracion i Përfshirë',
        description: 'Shijoni qetësinë mendore pasi të gjitha automjetet vijnë me siguracion të plotë.'
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: 'Dorëzim në Aeroport',
        description: 'Komoditet në maksimum. Ne ju presim në Aeroportin e Rinasit (TIA) me makinën gati.'
    },
    {
        icon: <Clock className="w-5 h-5" />,
        title: 'Asistencë 24/7',
        description: 'Jemi në dispozicionin tuaj në çdo kohë për t\'ju ofruar mbështetje gjatë gjithë udhëtimit.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

export function Features() {
    return (
        <section id="features" className="relative py-32 px-6 md:px-12 flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black">
                <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2500&auto=format&fit=crop"
                    alt="Luxury car dark"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="h-px w-8 bg-yellow-400"></div>
                            <span className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">Pse Ne</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12 tracking-tight">
                            Pse të zgjidhni<br />Auto Rental Diti
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div key={idx} variants={itemVariants} className="group">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-12"
                    >
                        <motion.a
                            href="tel:+355691234567"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-10 py-4 text-sm font-semibold hover:bg-yellow-500 transition-colors rounded-full"
                        >
                            Na Kontaktoni <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
