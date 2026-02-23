export function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-2">
                    <a href="/" className="text-2xl font-bold tracking-tighter block mb-6">
                        DITI<span className="text-yellow-400">.</span>
                    </a>
                    <p className="text-gray-500 text-sm max-w-sm mb-8">
                        Shërbimi juaj i besuar i makinave me qira në Aeroportin Ndërkombëtar të Tiranës (TIA). Ne ofrojmë cilësi, siguri dhe komoditet për udhëtimin tuaj në Shqipëri.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-900">Na Kontaktoni</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>
                            <a href="tel:+355691234567" className="hover:text-yellow-500 transition-colors">+355683797009</a>
                        </li>
                        <li>
                            <a href="https://wa.me/355691234567" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition-colors">WhatsApp</a>
                        </li>
                        <li>
                            <a href="mailto:info@autorentalditi.al" className="hover:text-yellow-500 transition-colors">info@autorentalditi.al</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-gray-900">Vendndodhja</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li>Aeroporti Ndërkombëtar i Tiranës (TIA)</li>
                        <li>Rinas, Tiranë</li>
                        <li>Shqipëri</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
                <p>&copy; {new Date().getFullYear()} Auto Rental Diti. Të gjitha të drejtat e rezervuara.</p>
                <div className="mt-4 md:mt-0 space-x-6">
                    <a href="#" className="hover:text-gray-900 transition-colors">Kushtet e Përdorimit</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Politika e Privatësisë</a>
                </div>
            </div>
        </footer>
    );
}
