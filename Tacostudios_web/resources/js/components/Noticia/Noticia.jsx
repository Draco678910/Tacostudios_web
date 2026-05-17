
const Noticia = ({ Gran }) => {

    if (Gran) {
        return (
            <section className="mb-32 relative group cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-low">
                    <div className="md:col-span-8 overflow-hidden">
                        <img className="w-full h-500px object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cinematic wide shot of a futuristic neon city alleyway with purple and teal lighting, rain slicked pavement and atmospheric fog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQw1NI09w95vi8uWuYRrCnnJkAJhj95SnSNk6pdZmb7e27VZDGwZR4sekScWIGzheihybolnyDOUklVdDpXIUqoJ9JlPY7eubhw5YCgUCjD4OfVCa-mXzKwPxEwMA80k3hzylKROBlSBc_7XcKyLtwDjhSRi89dpr5v8dq8sVhaeSHoPzn6rcPlHPspEhfrSrK-MaBWno93QCzTmj0hdNPeGP6PKzvB1zO-9GiYKY5VrdEASmzRBLjMQZhb-4yBkmCmEbnz2TEGAF" />
                    </div>
                    <div className="md:col-span-4 p-10 flex flex-col justify-center relative">
                        <div className="absolute -left-12 top-10 bg-secondary text-on-secondary px-4 py-1 text-xs font-bold headline-font hidden md:block">Ultima</div>
                        <span className="absolute -left-48 top-10 px-4 py-1 text-xs font-bold headline-font hidden md:block text-secondary bg-black text-[10px] font-headline uppercase tracking-widest rounded-full">Etiqueta</span>
                        <p className="text-primary-fixed text-sm font-label mb-4">OCT 24, 2024</p>
                        <h2 className="text-3xl headline-font font-bold mb-6 leading-tight group-hover:text-secondary transition-colors">Noticia1</h2>
                        <p className="text-on-surface-variant body-md mb-8 line-clamp-3">A deep dive into the procedural generation techniques that brought our newest cyberpunk epic to life. How we balanced chaos with artistic intent.</p>
                        <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase group-hover:gap-4 transition-all">
                            Llegir noticia <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else {
        return (
            <div className="group bg-surface-container-high rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden">
                    <img alt="News 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Wide shot of a professional audio mixing console with many sliders and glowing level meters in a high-end recording studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLQxvAdsajZdv73kgNrJVOh8SIbTIN1iUu6q_woCNoLbxVeCF3ZNhhR466uVlp8W9iJfYnRzDWGpqJtUWN9bm_mU8jEDPnm-0vnyJ-OZBWlUnHoQgNKFu0o6mxUPrHeS4ZObWNPvEu4mswH-QRVbVDt6qJ2kurpYzOxzWuAXHYux_sgBY-75KgdpnNb-rZqS5LViGvt7yUgrEncUUMvXc_9236VrKjc72m3037qPDaNigZdQj3pAJ6MnTDMGWG8bleyIsyFeCmKMJ4" />
                    <div className="absolute inset-0 bg-linear-to-t from-surface-container-high via-transparent to-transparent"></div>
                </div>
                <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-surface-container-lowest text-secondary text-[10px] font-headline uppercase tracking-widest rounded-full">Etiqueta</span>
                        <span className="text-on-surface-variant text-[10px] font-headline uppercase tracking-widest">Oct 12, 2024</span>
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">Noticias</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                        Listen to the first three tracks from our original score, featuring haunting synth-scapes and glitch-pop rhythms.
                    </p>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
                </div>
            </div>
        )
    }
}
export default Noticia;