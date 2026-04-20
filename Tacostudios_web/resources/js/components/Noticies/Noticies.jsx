import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Noticies() {
    return (
        <body>
            <Header />
            <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto text-white">
                {/* <!-- Hero Editorial Section --> */}
                <header className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-secondary font-headline text-sm tracking-[0.2em] uppercase mb-4 block">Mira les</span>
                            <h1 className="text-7xl md:text-8xl headline-font font-bold tracking-tighter leading-[0.9] mb-6">Ultimes<br /><span className="text-primary">NOTICIES</span></h1>
                        </div>
                    </div>
                </header>
                {/* <!-- Featured Article (Asymmetric Layout) --> */}
                <section className="mb-32 relative group cursor-pointer">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-low">
                        <div className="md:col-span-8 overflow-hidden">
                            <img className="w-full h-500px object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Cinematic wide shot of a futuristic neon city alleyway with purple and teal lighting, rain slicked pavement and atmospheric fog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtQw1NI09w95vi8uWuYRrCnnJkAJhj95SnSNk6pdZmb7e27VZDGwZR4sekScWIGzheihybolnyDOUklVdDpXIUqoJ9JlPY7eubhw5YCgUCjD4OfVCa-mXzKwPxEwMA80k3hzylKROBlSBc_7XcKyLtwDjhSRi89dpr5v8dq8sVhaeSHoPzn6rcPlHPspEhfrSrK-MaBWno93QCzTmj0hdNPeGP6PKzvB1zO-9GiYKY5VrdEASmzRBLjMQZhb-4yBkmCmEbnz2TEGAF" />
                        </div>
                        <div className="md:col-span-4 p-10 flex flex-col justify-center relative">
                            <div className="absolute -left-12 top-10 bg-secondary text-on-secondary px-4 py-1 text-xs font-bold headline-font hidden md:block">Ultima</div>
                            <p className="text-primary-fixed text-sm font-label mb-4">OCT 24, 2024</p>
                            <h2 className="text-3xl headline-font font-bold mb-6 leading-tight group-hover:text-secondary transition-colors">Noticia1</h2>
                            <p className="text-on-surface-variant body-md mb-8 line-clamp-3">A deep dive into the procedural generation techniques that brought our newest cyberpunk epic to life. How we balanced chaos with artistic intent.</p>
                            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase group-hover:gap-4 transition-all">
                                Llegir noticia <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* <!-- News Card 1 --> */}
                    <article className="flex flex-col">
                        <div className="relative mb-6 overflow-hidden rounded-lg aspect-video bg-surface-container-high">
                            <img className="w-full h-full object-cover" data-alt="Vibrant abstract 3D shapes floating in a dark void with glowing magenta edges and cinematic depth of field" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArWJtVvomFYhNvDcuVAVWQvYrbWhDbpkwt-5Qc0iPJYTq5_uTb7o7vCybgqbnUMjUnJs5urbP5RdgbqGOJz3H6nEQ5XEWoc9_bNhCFqtv5i3MVVFlpFQG-q09fFDehOPlh2wzHzMd1pqBySiltxddjnIMRohDNDOkWmfpikgiPJ72o50WXtHSHFMARUE0riLd6Yx76Ut5-U1zPbD9ZBC3T-HS7Mt-Srmv0GsffTNZe18UhMmgeuCwj6W0tMZS631jsdga8o0uRGnCp" />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-dim to-transparent opacity-60"></div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-[10px] font-bold text-secondary uppercase tracking-widest">Etiqueta1</span>
                            <span className="text-on-surface-variant text-xs font-label">OCT 20, 2024</span>
                        </div>
                        <h3 className="text-xl headline-font font-bold mb-3 hover:text-primary transition-colors cursor-pointer">Noticia2</h3>
                        <p className="text-on-surface-variant body-sm line-clamp-2">Our proprietary engine receives its largest lighting overhaul since inception, bringing global illumination to indie hardware.</p>
                    </article>
                    {/* <!-- News Card 2 --> */}
                    <article className="flex flex-col">
                        <div className="relative mb-6 overflow-hidden rounded-lg aspect-video bg-surface-container-high">
                            <img className="w-full h-full object-cover" data-alt="Close up of a stylized mechanical robot hand reaching out towards a glowing blue orb in a dark laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIYZUExyzfs3K6LG6LHOXiryFFRJ8MsQc9yi8TnBgo9stE4Bt1OP5ljFKy5a1PXGY2cdOdL3NGYyZrJVogkBZGazcacDE7Sy9hnhV4MWm8_GB5l5oM90Kg9Z4U_dmXHQLRDfbHWAh3EICXQH0qqrZKH1cCH5zDAFhUCcH-avEUB_I7N81ZY38Efp0zzADnwSWFZmjCFIUyrN1ctHaCTpfIXuzkiXqgtEF_Cfj3fkJDJ7YhWnl4i_Z-qMdKsYcfwhlL74vzN9YK5_RS" />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-dim to-transparent opacity-60"></div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-[10px] font-bold text-secondary uppercase tracking-widest">Etiqueta1</span>
                            <span className="text-on-surface-variant text-xs font-label">OCT 18, 2024</span>
                        </div>
                        <h3 className="text-xl headline-font font-bold mb-3 hover:text-primary transition-colors cursor-pointer">Noticia3</h3>
                        <p className="text-on-surface-variant body-sm line-clamp-2">Showcasing the top 10 submissions from our community illustration contest. The talent in our Discord is unmatched.</p>
                    </article>
                    {/* <!-- News Card 3 --> */}
                    <article className="flex flex-col">
                        <div className="relative mb-6 overflow-hidden rounded-lg aspect-video bg-surface-container-high">
                            <img className="w-full h-full object-cover" data-alt="Low angle shot of a massive concrete monolith rising into a stormy violet sky with lightning flashes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKbN6sNZf4kMVcimY_aL_1KSxCmWJlr5lr6s477VQ6WlywphFohZ2Pu68NTNrNXVgie7We1PbHW1eVmW2xv0pxERB6fAqbYgwAlWlrq3RL6MuSlWGucmJ5gJVbOXGYgSylCTGltT9UxZMXCXIcF0vhM01bXHtjxoDyMDiRgQhYL5eWvvwwUJa5PrvuUnZQwYTtcXGTgJSReuijkGDfE5WR0Ot7Mq6TCFONjbY-XkJkYr71guTpDVofceeFjwZmho3CZB_can8gFdki" />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-dim to-transparent opacity-60"></div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-surface-container-lowest px-2 py-0.5 rounded text-[10px] font-bold text-secondary uppercase tracking-widest">Etiqueta1</span>
                            <span className="text-on-surface-variant text-xs font-label">OCT 15, 2024</span>
                        </div>
                        <h3 className="text-xl headline-font font-bold mb-3 hover:text-primary transition-colors cursor-pointer">Noticia4</h3>
                        <p className="text-on-surface-variant body-sm line-clamp-2">How our audio team used modular synths and field recordings to create the haunting atmosphere of the upcoming title.</p>
                    </article>
                </div>
                {/* <!-- Newsletter Section (High Contrast) --> */}
                <section className="mt-32 p-12 rounded-2xl bg-surface-container-low border border-outline-variant/10 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl headline-font font-bold mb-4">NO ET PERDIS LES<span className="text-secondary"> NOVETATS</span></h2>
                            <p className="text-on-surface-variant">Inicia sesió per no perdre les ultimes noticies</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-primary hover:animate-tGlow transition-shadow duration-500 text-on-primary-fixed px-8 py-4 rounded-md font-bold headline-font hover:brightness-110 active:scale-95">INICIAR SESIÓ</button>
                        </div>
                    </div>
                    {/* <!-- Decorative Glow --> */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
                </section>
            </main>
            <Footer />
        </body>
    )
}
