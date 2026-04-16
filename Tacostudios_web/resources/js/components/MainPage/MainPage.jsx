//Main Page
import Noticies from "../Noticies/Noticies";

export default function MainPage({ }) {
    return (
        <main className="bg-surface text-on-surface bg-primary text-primary ">

            <section className="relative min-h-screen flex items-end pt-32 pb-24 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Banner" className="w-full h-full object-cover" src="./Banner1.png" />
                    <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-5xl">
                    <br />
                    <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-none mb-8">
                    </h1>
                    <p className="text-body-lg text-black max-w-xl mb-12 text-xl leading-relaxed">
                        Explora els nostres jocs i mira les ultimes noticies
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <button className="bg-linear-to-r bg-primary from-primary to-primary-container text-on-primary-fixed font-headline px-10 py-5 rounded-md font-bold text-lg hover:shadow-[0_0_20px_rgba(199,153,255,0.4)] transition-all active:scale-95">
                            BOTIGA
                        </button>
                        <button className="bg-surface-container-highest border border-outline-variant/20 text-on-surface font-headline px-10 py-5 rounded-md font-bold text-lg hover:bg-surface-container transition-all active:scale-95">
                            NOTICIES
                        </button>
                    </div>
                </div>
            </section>
            {/* <!-- About Us Section --> */}
            <section className="py-32 px-8 bg-surface">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                            <h2 className="text-5xl font-headline font-bold mb-8 leading-tight">
                                Sobre <span className="italic font-light">Nossaltres</span>
                            </h2>
                            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                                <p>
                                    Som una empresa de desenvolupament de videojocs...
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper felis. Quisque in dictum dolor. Nullam aliquet nulla vitae tortor faucibus condimentum. Nunc interdum, odio eget fermentum aliquam, ante leo gravida elit, sit amet condimentum erat sapien eu ex.
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-4 text-secondary group cursor-pointer">
                                <span className="font-headline font-bold tracking-widest text-sm uppercase">Més</span>
                                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="trending_flat">trending_flat</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-full grid grid-cols-1 gap-4">
                        <div className="aspect-4/4 rounded-xl overflow-hidden mt-12 bg-surface-container">
                            <img src="Banner2.png" alt="" />
                            <img src="Banner1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Latest News Section --> */}
            <section className="py-32 px-8 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <span className="text-primary font-headline text-sm tracking-[0.4em] uppercase mb-4 block">MIRA LES</span>
                            <h2 className="text-6xl font-headline font-bold tracking-tighter">ULTIMES NOTICIES</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- News Card 1 --> */}
                        <div className="group bg-surface-container-high rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                            <div className="aspect-video relative overflow-hidden">
                                <img alt="News 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Wide shot of a professional audio mixing console with many sliders and glowing level meters in a high-end recording studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQxvAdsajZdv73kgNrJVOh8SIbTIN1iUu6q_woCNoLbxVeCF3ZNhhR466uVlp8W9iJfYnRzDWGpqJtUWN9bm_mU8jEDPnm-0vnyJ-OZBWlUnHoQgNKFu0o6mxUPrHeS4ZObWNPvEu4mswH-QRVbVDt6qJ2kurpYzOxzWuAXHYux_sgBY-75KgdpnNb-rZqS5LViGvt7yUgrEncUUMvXc_9236VrKjc72m3037qPDaNigZdQj3pAJ6MnTDMGWG8bleyIsyFeCmKMJ4" />                                    <div className="absolute inset-0 bg-linear-to-t from-surface-container-high via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-surface-container-lowest text-secondary text-[10px] font-headline uppercase tracking-widest rounded-full">Etiqueta</span>
                                    <span className="text-on-surface-variant text-[10px] font-headline uppercase tracking-widest">Oct 24, 2024</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">Noticia1</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                                    A deep dive into how our custom engine handles procedural generation without sacrificing artistic intent.
                                </p>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                            </div>
                        </div>
                        {/* <!-- News Card 2 --> */}
                        <div className="group bg-surface-container-high rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                            <div className="aspect-video relative overflow-hidden">
                                <img alt="News 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Wide shot of a professional audio mixing console with many sliders and glowing level meters in a high-end recording studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQxvAdsajZdv73kgNrJVOh8SIbTIN1iUu6q_woCNoLbxVeCF3ZNhhR466uVlp8W9iJfYnRzDWGpqJtUWN9bm_mU8jEDPnm-0vnyJ-OZBWlUnHoQgNKFu0o6mxUPrHeS4ZObWNPvEu4mswH-QRVbVDt6qJ2kurpYzOxzWuAXHYux_sgBY-75KgdpnNb-rZqS5LViGvt7yUgrEncUUMvXc_9236VrKjc72m3037qPDaNigZdQj3pAJ6MnTDMGWG8bleyIsyFeCmKMJ4" />                                    <div className="absolute inset-0 bg-linear-to-t from-surface-container-high via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-surface-container-lowest text-primary text-[10px] font-headline uppercase tracking-widest rounded-full">Etiqueta</span>
                                    <span className="text-on-surface-variant text-[10px] font-headline uppercase tracking-widest">Oct 18, 2024</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">Noticia2</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                                    We are looking for 500 pioneers to step into our world for the first time. Apply for the alpha test phase.
                                </p>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                            </div>
                        </div>
                        {/* <!-- News Card 3 --> */}
                        <div className="group bg-surface-container-high rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                            <div className="aspect-video relative overflow-hidden">
                                <img alt="News 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Wide shot of a professional audio mixing console with many sliders and glowing level meters in a high-end recording studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQxvAdsajZdv73kgNrJVOh8SIbTIN1iUu6q_woCNoLbxVeCF3ZNhhR466uVlp8W9iJfYnRzDWGpqJtUWN9bm_mU8jEDPnm-0vnyJ-OZBWlUnHoQgNKFu0o6mxUPrHeS4ZObWNPvEu4mswH-QRVbVDt6qJ2kurpYzOxzWuAXHYux_sgBY-75KgdpnNb-rZqS5LViGvt7yUgrEncUUMvXc_9236VrKjc72m3037qPDaNigZdQj3pAJ6MnTDMGWG8bleyIsyFeCmKMJ4" />
                                <div className="absolute inset-0 bg-linear-to-t from-surface-container-high via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-surface-container-lowest text-tertiary text-[10px] font-headline uppercase tracking-widest rounded-full">Etiqueta</span>
                                    <span className="text-on-surface-variant text-[10px] font-headline uppercase tracking-widest">Oct 12, 2024</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">Noticia3</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                                    Listen to the first three tracks from our original score, featuring haunting synth-scapes and glitch-pop rhythms.
                                </p>
                                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>)
}

