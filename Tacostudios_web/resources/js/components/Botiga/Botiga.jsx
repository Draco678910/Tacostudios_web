//Botiga
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

export default function MainPage({ }) {
    return (
        <div>
            <Header />
            <main className="pt-20 text-white">
                <section className="relative h-153.5 flex items-center px-8 md:px-16 overflow-hidden p-5">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-40" src="./Banner1.png" />
                        <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-surface via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter mb-6">
                            LA NOSTRA<br /> <span className="text-primary italic">BOTIGA</span>
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-on-primary-fixed font-bold rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(199,153,255,0.3)]">
                                Veure la biblioteca
                            </button>
                        </div>
                    </div>

                </section>

                <section className="px-8 md:px-16 py-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 bg-surface-container-low rounded-xl">
                        <div className="relative flex-1 group">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined">search</span>
                            <input className="w-full bg-surface-container-highest border-none rounded-full pl-12 pr-6 py-4 font-headline text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary transition-all" placeholder="Find your next obsession..." type="text" />
                        </div>
                        <div className="flex items-center pb-2 md:pb-0 w-3/12">
                            <select id="select" className="w-full bg-surface-container-highest border-none rounded-full pr-6 py-4 font-headline text-on-surface">
                                <option >
                                    Orden
                                </option>
                            </select>
                        </div>
                    </div>

                </section>

                <section className="px-8 md:px-16 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        <div className="group bg-surface-container-high rounded-xl overflow-hidden hover:animate-rainbowGlow transition-shadow duration-500">
                            <div className="aspect-16/10 overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="cinematic video game screenshot of a lone character standing in a rain-slicked neon street at night with futuristic towers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiiWrndsh5GvHV2EdedTpsoV29aRWrnoQaCZ6V0dWhmcFqVCSyq2BexGa2Fzo1eRDNhzeknrxjbZcnfZYTfL_KJd7v7nUIv1xEp4h1qteuMLDGWWNK498GnH_KSwhzEmlWSq982dOykT7-7u7sMng7tFE8wUV2CDvIYfUpNxVduUviLTpcwgIheKkc0xz4wJ1smH_PXIcNNQtokhmerjFrK2p-BDow4jiof5upaIKqQgY-6arKFibjFXTobTjtqPJpOVRIS4FaRGuD" />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">Digital Art</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc1</h3>
                                    <span className="text-xl font-headline font-bold text-primary">$24.99</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                                    A high-octane sensory journey through a decaying megacity. Master the art of the perfect drift in a world that never sleeps.
                                </p>
                                <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                    Afegir al carret
                                </button>
                            </div>
                        </div>

                        <div className="group bg-surface-container-high rounded-xl overflow-hidden hover:animate-rgdGlow transition-shadow duration-500">
                            <div className="aspect-16/10 overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="abstract cosmic scene with glowing blue energy particles swirling around a dark monolithic structure in space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZi9heqhKFyGlbjCTeflSIFcIIS0KRY28zmQukaqTnUIlnT3G9neQ25zVUdNvYFdiChEQZyNpABtxi4udl9bx6Zd1u_bCrVyQ7ceGYub4t7600GcYA4dDMHz4j-mBwdOkclBx7MD1NYtq-A4XK-XsN73-uDXa31DAYpNRS_2ciHJ76Y6YLAgzudIzTavHrOHzCHHbLC0TzuFeTlP6HChR9m7IGFk3X2Agez9GrTiGzbqrVMOsW9D7SSd-mHIhxpencCU1671fX9d7" />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">Indie Gem</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc2</h3>
                                    <span className="text-xl font-headline font-bold text-primary">$19.99</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                                    Explore the architecture of the afterlife in this hauntingly beautiful puzzle platformer. Every secret has a price.
                                </p>
                                <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                    Afegir al carret
                                </button>
                            </div>
                        </div>

                        <div className="group bg-surface-container-high rounded-xl overflow-hidden hover:animate-tGlow transition-shadow duration-500">
                            <div className="aspect-16/10 overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="vintage electronic circuit boards with glowing pink led lights casting a soft retro-futuristic atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6iuA3ujbMUBUsniziqFQrbMTtYqrEUOg8vcTtvAHF8fOdwNoW6bsxhPll_hQ6Kc_UWdCagrQuyhimmjQZu5r9NOOPyvRhTJSGdcBIdEGt0B7f-Rj2XTQ0qmTNOLrzwqegcSrgGYR5lWxD72BFHonv1TmmFdonPZaivYRoWGpbfOTxVa5ZeFMZmlrXq6VHMIS-M1Yokt8r0Dj0szPG_wdYjI5zUhK4wPNNxv0V_gpjSoQ014VWRC0Jw5Z-tt5p-bdHvsAaqyeOFVFz" />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">Early Access</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc3</h3>
                                    <span className="text-xl font-headline font-bold text-primary">$29.99</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                                    Hack the system from within. A tactical deckbuilder where your decisions rewire the very fabric of reality.
                                </p>
                                <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                    Afegir al carret
                                </button>
                            </div>
                        </div>

                        <div className="group bg-surface-container-high rounded-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,248,227,0.05)]">
                            <div className="aspect-16/10 overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="stylized 2D pixel art of a massive mechanical golem in a lush overgrown forest with light beams filtering through trees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG0lJTu7yfoYUXQABxjQ2wUmwl1FZnEcSlWWq1WE6o9D9NRR2uboN14M_zo7NAStZHXnEVFxKckNoDiRaJhalMc2Ff8UL5lsqDi_fXiwkOUFZJ_95D0pkLJP9e2JKk6FL_llLx1Wo1BAH71NyNUiEj4umjGMt_6qVqF8KrOrZuPdcJrYg0wRsqOmCwuACiODQkbltE-kkxx26mm--mLKVldwUc6nb592VeCLsufQBWzN4WocRqUocqRpPddtZ7KKqtDn_GkrLs7fFe" />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">RPG</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc4</h3>
                                    <span className="text-xl font-headline font-bold text-primary">$14.99</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                                    Awaken the machines of old. A deep narrative RPG about legacy, loss, and the ghosts that inhabit our metal shells.
                                </p>
                                <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                    Afegir al carret
                                </button>
                            </div>
                        </div>

                        <div className="group bg-surface-container-high rounded-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,248,227,0.05)]">
                            <div className="aspect-16/10 overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="surreal digital art of floating geometric shapes in a vast purple desert under two moons with a retro film grain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1pq-V4F6fePFoO05sAPxqE0oRfUyHiH0lJPWhjlXfJc0Bo6WLG841VUqnV9gxf2T_MO2ZVO79xXNg4-oxfeB75D2zcbWF4IxYpSeNvilv2BkV6OfW2y5liSNi3SCdk4uLkN2QrFnYUI5LrMNzmP-JCYLs7kgEfds7IVhQSQlXp893VJfRrEE7FvN-ZR272K_vNyw_b8GJhqMtttBqBsnFrZWS_hw0ZNibszPBA8YE4MRR8IfTUzInnV83VS1cVfkpE8Lr_V6-pen" />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">Adventure</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc5</h3>
                                    <span className="text-xl font-headline font-bold text-primary">$34.99</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                                    Survival on a shifting moon. Every step changes the landscape. Will you find the way home or be lost to the tides?
                                </p>
                                <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                    Afegir al carret
                                </button>
                            </div>
                        </div>

                        <div className="group bg-surface-container-high rounded-xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,248,227,0.05)]">
                            <div className="aspect-16/10 overflow-hidden relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="macro close-up of a high-tech eye with glowing blue circuits inside the iris reflecting a digital cityscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4TreMkUohxJpYXQuTvZQcONa2rlfZbqjjZLAy0u84F79aXMK4B7m8XXArmLUY0XRGHx4KnuCQN2uimTw80KB28ahKwDa40_6qW2UqVN2gCox2xSjnSHWaLTQ95umBDCFFMD1dkX9bb-ZZoYO7hUkCZx1JHRUwL-apQm7DYnuvD90DaBbIS-GKW2Q2eYJW2MkJXmnZCDmtEHcROtKe5RWepFmEhdiy6FOqmv_AaT3EVWi2CxmQ-_-36GeRXXRWjHrIqpdwD6lo_fvZ" />
                                <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">Stealth</div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc6</h3>
                                    <span className="text-xl font-headline font-bold text-primary">$21.99</span>
                                </div>
                                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                                    The ultimate stealth thriller. You are the shadow in the machine. Infiltrate, extract, and vanish without a trace.
                                </p>
                                <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                    Afegir al carret
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-center">
                        <div>
                            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
                                <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Previous</span>
                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                                        <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">1</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">2</a>
                                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 inset-ring inset-ring-gray-700 focus:outline-offset-0">...</span>
                                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">9</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-200 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">10</a>
                                <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Next</span>
                                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                                        <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}