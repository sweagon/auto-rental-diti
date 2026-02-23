import { ArrowDown, ArrowRight, Clock, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
    {
        num: '01',
        title: 'Zgjidhni automjetin',
        desc: 'Shfletoni flotën tonë dhe gjeni makinën që i përshtatet nevojave tuaja.'
    },
    {
        num: '02',
        title: 'Na kontaktoni',
        desc: 'Na shkruani në WhatsApp ose na telefononi direkt për të konfirmuar disponueshmërinë.'
    },
    {
        num: '03',
        title: 'Konfirmoni detajet',
        desc: 'Bini dakord për datat dhe vendin e marrjes pa burokraci të tepërta.'
    },
    {
        num: '04',
        title: 'Merrni makinën',
        desc: 'Ne ju presim në aeroport me çelësat gati. Shijoni udhëtimin në Shqipëri!'
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-px w-8 bg-yellow-400"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">Si Funksionon</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-12">
                        Rezervoni në pak minuta,<br />udhëtoni sot.
                    </h2>

                    <div className="space-y-0">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group border-b border-gray-100 py-6 first:pt-0 last:border-0"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-bold text-yellow-500 font-mono">{step.num}</span>
                                        <h3 className="text-xl font-semibold group-hover:text-yellow-600 transition-colors uppercase tracking-tight">{step.title}</h3>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        {idx !== steps.length - 1 ? (
                                            <ArrowDown className="w-5 h-5 text-gray-300" />
                                        ) : (
                                            <ArrowRight className="w-5 h-5 text-yellow-500" />
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mt-3 pl-11 max-w-md">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 flex flex-wrap items-center gap-8"
                    >
                        <motion.a
                            href="https://wa.me/355691234567"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 text-sm font-bold hover:bg-green-600 transition-colors rounded-full shadow-lg shadow-green-200"
                        >
                            <Smartphone className="w-4 h-4" /> WhatsApp
                        </motion.a>
                        <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                            <Clock className="w-5 h-5 text-yellow-400" />
                            <span>Përgjigje në 5 minuta</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="aspect-[4/5] relative overflow-hidden bg-gray-100 rounded-3xl shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop"
                            alt="Car keys handing over"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
                            <p className="text-sm font-medium italic">"Shërbim i shpejtë dhe makina shumë të pastra. Na pritën te porta e daljes në Rinas!"</p>
                            <p className="text-xs font-bold mt-3 uppercase tracking-widest text-yellow-400">— Ardit G.</p>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
}
