import { motion } from 'motion/react';

export function Intro() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-yellow-400"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">Auto Rental Diti - Rinas</span>
                </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]"
                >
                    Merr me Qira.<br />
                    Udhëto Shqip.<br />
                    <span className="text-black/30">Shijo çdo moment.</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg text-gray-500 font-light leading-relaxed pt-2 space-y-6"
                >
                    <p>
                        Një makinë me qira është më shumë se thjesht një mjet transporti; është liria për të eksploruar Shqipërinë me ritmin tuaj, nga bregdeti i Jonit deri te alpet veriore.
                    </p>
                    <p>
                        Ne ofrojmë komoditet, siguri maksimale dhe një shërbim të dedikuar për t'u siguruar që udhëtimi juaj të jetë i përsosur që nga momenti i mbërritjes në Rinas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
