import { useState } from 'react';
import { ArrowRight, Fuel, Settings, Users, Star, Box, Zap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const cars = [
    {
        id: 1,
        name: 'Mercedes-AMG GT 63 S',
        category: 'Ekzotike',
        year: 2024,
        image: '/cars/gt63.jpg',
        specs: { fuel: 'Benzinë', transmission: 'Automatike', seats: 4 },
        price: 'Nga €350/ditë'
    },
    {
        id: 2,
        name: 'Mercedes-Benz S-Class',
        category: 'Luks',
        year: 2023,
        image: '/cars/benz_S.jpg',
        specs: { fuel: 'Naftë', transmission: 'Automatike', seats: 5 },
        price: 'Nga €200/ditë'
    },
    {
        id: 3,
        name: 'Mercedes-AMG C63 Coupe',
        category: 'Sportive',
        year: 2023,
        image: '/cars/c63_coupe.webp',
        specs: { fuel: 'Benzinë', transmission: 'Automatike', seats: 4 },
        price: 'Nga €150/ditë'
    },
    {
        id: 4,
        name: 'Audi A8 L Quattro',
        category: 'Luks',
        year: 2024,
        image: '/cars/a8.jpg',
        specs: { fuel: 'Naftë', transmission: 'Automatike', seats: 5 },
        price: 'Nga €250/ditë'
    },
    {
        id: 5,
        name: 'BMW 7 Series M-Sport',
        category: 'Luks',
        year: 2024,
        image: '/cars/bmw7.jpg',
        specs: { fuel: 'Naftë', transmission: 'Automatike', seats: 5 },
        price: 'Nga €250/ditë'
    },
    {
        id: 6,
        name: 'Porsche Cayenne Turbo',
        category: 'SUV Luks',
        year: 2023,
        image: '/cars/cayenne.jpg',
        specs: { fuel: 'Benzinë', transmission: 'Automatike', seats: 5 },
        price: 'Nga €300/ditë'
    },
    {
        id: 7,
        name: 'Audi A6 S-Line',
        category: 'Business',
        year: 2023,
        image: '/cars/a6.jpg',
        specs: { fuel: 'Naftë', transmission: 'Automatike', seats: 5 },
        price: 'Nga €100/ditë'
    },
    {
        id: 8,
        name: 'Porsche Panamera GTS',
        category: 'Premium',
        year: 2023,
        image: '/cars/pannamera.webp',
        specs: { fuel: 'Benzinë', transmission: 'Automatike', seats: 4 },
        price: 'Nga €250/ditë'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export function CarFleet() {
    return (
        <section id="fleet" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-20"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-yellow-400"></div>
                    <span className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">Zgjidhni makinën tuaj</span>
                </div>
                <h2 className="text-5xl font-bold tracking-tight text-gray-900">Flota Jonë</h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24"
            >
                {cars.map((car) => (
                    <motion.div
                        key={car.id}
                        variants={itemVariants}
                        className="group relative"
                    >
                        <div className="relative overflow-hidden bg-white aspect-[16/10] mb-8 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute top-6 left-6 flex gap-2">
                                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-wider shadow-sm border border-gray-100">
                                    {car.category}
                                </span>
                                <span className="bg-black text-white px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-wider shadow-sm">
                                    {car.year}
                                </span>
                            </div>

                            <button className="absolute top-6 right-6 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                                <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                            </button>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="absolute bottom-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                <div className="bg-yellow-400 p-5 rounded-3xl shadow-2xl">
                                    <ArrowRight className="w-6 h-6 text-black" />
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">{car.name}</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-[11px] text-gray-400 font-bold ml-1 uppercase tracking-widest">Premium Service</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-black text-gray-900 block">{car.price}</span>
                                    <span className="text-[10px] text-yellow-500 uppercase tracking-widest font-black">All inclusive</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-100">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Fuel className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase">Motorri</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">{car.specs.fuel}</span>
                                </div>
                                <div className="flex flex-col gap-1 border-x border-gray-100 px-4">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Settings className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase">Kambio</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">{car.specs.transmission}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Users className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase">Kapaciteti</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">{car.specs.seats} vendshme</span>
                                </div>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <a
                                    href="tel:+355683797009"
                                    className="flex-1 bg-gray-900 text-white text-center py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all shadow-lg"
                                >
                                    Rezervo me Telefon
                                </a>
                                <a
                                    href="https://wa.me/355683797009"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-6 bg-green-500 text-white flex items-center justify-center rounded-2xl hover:bg-green-600 transition-all shadow-lg shadow-green-200"
                                >
                                    <Zap className="w-4 h-4 fill-white" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
