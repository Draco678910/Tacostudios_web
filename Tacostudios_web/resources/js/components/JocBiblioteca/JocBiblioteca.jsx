//JocBiblioteca

export default function JocBiblioteca() {
    return (
        <main className="pt-0">
            <section className="relative min-h-204.75 flex items-end pb-24 px-8 md:px-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent z-10"></div>
                    <img className="w-full h-full object-cover" data-alt="A cinematic, high-fidelity landscape of a futuristic alien world called Ethereal Drift. The atmosphere is filled with floating crystalline islands and violet nebulae. Neon purple and cyan electric pulses dance across the dark jagged rocks, reflecting the underground aesthetic of Neon Nocturne. The scene is majestic, dark, and deeply immersive with soft ambient glows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOG8SiOhWoal1gUPtNIv41xKuUiS3Ed0wiVIV0T1QZiteXgl5FFud3-h08bLACHnFDrPLkbHNJ87esoK3-_t9XJRW7kRE6146VJNoqBLsRDFOzpGfnQzmhG8pev6jITF7Xo8Smle2BGx6ce6MteW4dl6Nrl7HyguXPjQE-7-XS5iop7083roGD3yOMCCHtx2zvW-tcqklE488aCfD13mnQAu_9E71ruevouQKlDB2_9cmshLCbJUYk1xfLvDSxxfOZc4BmwonxwnvA" />
                </div>
                <div className="relative z-20 max-w-4xl">
                    <h1 className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-8 bg-clip-text text-primary bg-linear-to-r from-primary to-secondary">
                        Ethereal Drift
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-10 py-4 bg-primary hover:shadow-lg hover:shadow-primary text-on-primary-fixed font-bold rounded-md flex items-center gap-2 neon-glow transition-all active:scale-95">
                            <span className="material-symbols-outlined">play_arrow</span>
                            Jugar
                        </button>
                        <button className="px-10 py-4 bg-surface-container-highest border border-outline-variant/20 text-on-surface font-bold rounded-md flex items-center gap-2 hover:bg-surface-bright transition-all active:scale-95">
                            <span className="material-symbols-outlined">download</span>
                            Descarregar
                        </button>
                    </div>
                </div>
            </section>
            <section className="px-8 md:px-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

                <div className="lg:col-span-8 space-y-20">
                    <div></div>
                    <div>
                        <h2 className="font-display text-4xl font-bold mb-10 flex items-center gap-4">
                            <span className="w-12 h-1 bg-secondary rounded-full"></span>
                            Logros
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="bg-surface-container-high p-6 rounded-xl border border-white/5 group hover:bg-surface-bright transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                                        <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">Primer Vol</h3>
                                        <p className="text-sm text-on-surface-variant">Has completat el tutorial de vol acrobàtic.</p>
                                    </div>
                                    <span className="text-xs text-secondary font-bold uppercase tracking-widest">Desbloquejat</span>
                                </div>
                                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-secondary w-full"></div>
                                </div>
                            </div>
                            {/* <!-- Achievement 2 (In Progress) --> */}
                            <div className="bg-surface-container-high p-6 rounded-xl border border-white/5 group hover:bg-surface-bright transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/20 grayscale">
                                        <span className="material-symbols-outlined text-on-surface-variant">explore</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg">Explorador de Nebuloses</h3>
                                        <p className="text-sm text-on-surface-variant">Descobreix 50 sectors inexplorats.</p>
                                    </div>
                                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">42/50</span>
                                </div>
                                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[84%]"></div>
                                </div>
                            </div>
                            {/* <!-- Achievement 3 (Locked) --> */}
                            <div className="bg-surface-container-low p-6 rounded-xl border border-white/5 opacity-60">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/10">
                                        <span className="material-symbols-outlined text-outline">lock</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-outline">Senyor del Tenebre</h3>
                                        <p className="text-sm text-outline">Secret ocult...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Community (Comunitat) --> */}
                    <div>
                        <h2 className="font-display text-4xl font-bold mb-10 flex items-center gap-4">
                            <span className="w-12 h-1 bg-primary rounded-full"></span>
                            Comunitat
                        </h2>
                        {/* <!-- Input Section --> */}
                        <div className="bg-surface-container p-6 rounded-xl mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-sm">person</span>
                                </div>
                                <div className="flex-1">
                                    <textarea className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary rounded-lg text-on-surface placeholder:text-on-surface-variant font-body resize-none" placeholder="Comparteix els teus pensaments sobre el joc..." rows="3"></textarea>
                                    <div className="flex justify-end mt-4">
                                        <button className="px-6 py-2 bg-primary text-on-primary-fixed text-sm font-bold rounded-full hover:bg-primary-dim transition-all">Publicar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Discussion List --> */}
                        <div className="space-y-6">
                            <div className="group">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img className="w-full h-full object-cover" data-alt="A profile portrait of a gamer with cool blue and purple lighting, reflecting a futuristic aesthetic. The style is professional and minimalist, fitting within the Neon Syndicate design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTZd8UmVqqgGCWdlDzgwzf0idcTQDcx8gknwNHY0BQIziXXmSBd9J0V0zTvym9M6HP5jzABLAAtv0b-bn3s2fZMPighsov5tDtUm79v6NZr-th5iyG3sbClsbfGyANwtEQ78m2DRjDdq9LLBHViykTCaLgWNXuofRiM8-43w_pTsXl0w3OcmygtqJnu9hvaJAOKFQcTA7rEG2S6qSxilJJRiB2Or9loK0gGG13OKisWcE2NqPS01xiyW0iGKKxdNGkmeGmdf75M2Kb" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="font-bold text-secondary">Marc88</span>
                                            <span className="text-xs text-on-surface-variant">fa 2 hores</span>
                                        </div>
                                        <p className="text-on-surface leading-relaxed mb-3">La nova actualització ha millorat molt la física de vol. Algú sap on trobar el cristall lila al sector 4?</p>
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">thumb_up</span> 14
                                            </button>
                                            <button className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">chat_bubble</span> Respon
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group pt-6 border-t border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img className="w-full h-full object-cover" data-alt="A portrait of a young woman with neon pink hair accessories and a modern cyberpunk style. The background is a soft blur of dark city lights, maintaining the high-end editorial feel of the Neon Nocturne system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkGs8oM_GBEI3oI4_O1CQ8XHziryvhxqu_TzKy-3JdjD-LZS3DvQ9-qU71p482BLp7-VMZ9Jpj-RfOHX4y5EPCxerpM_NGcn1AZX4_J1PmXJzwPkiqaard7CwhZ_yfgUlSZPDY2anEqoTq9ILVfKmgnJK6tfXq-thCDdyWv54c48Aznn0J_4bxfxdY7qQ1lXmEiBNsWSTHMFxS--BpZ0akkThiDBcPvURHM3uCRJImKdmUrpnks6kETKpQqXg7Wb98x0dLRnHXlcdo" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="font-bold text-secondary">Laia_Flux</span>
                                            <span className="text-xs text-on-surface-variant">fa 5 hores</span>
                                        </div>
                                        <p className="text-on-surface leading-relaxed mb-3">Els visuals d'aquest joc són d'un altre món. Simplement increïble.</p>
                                        <div className="flex items-center gap-6">
                                            <button className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">thumb_up</span> 32
                                            </button>
                                            <button className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-sm">chat_bubble</span> Respon
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right Column: Game Info Sidebar --> */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* <!-- Stats Card --> */}
                    <div></div>
                    <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-8xl">insights</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-display text-xl font-bold mb-6 text-on-surface-variant uppercase tracking-widest">Estadístiques</h3>
                            <div className="space-y-6">
                                <div>
                                    <span className="text-on-surface-variant text-sm block mb-1">Temps de joc</span>
                                    <span className="text-3xl font-bold text-secondary">48 hores</span>
                                </div>
                                <div>
                                    <span className="text-on-surface-variant text-sm block mb-1">Última partida</span>
                                    <span className="text-xl font-medium">Ahir, 22:15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Friends Activity --> */}
                    <div className="bg-surface-container p-8 rounded-2xl border border-white/5">
                        <h3 className="font-display text-xl font-bold mb-6 flex items-center justify-between">
                            Amics jugant
                            <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">3 En línia</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full" data-alt="A gamer avatar profile picture with a clean dark background and cyan accent lighting. Minimalist professional look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd7eqzPfRjDl-15xpZCkJFqFmRrvvMSeKmDOUjmxQvBc8yZvKOO7QtVFaYv41sgSRiaCW4EbKi1xT-6aiFs_1ID9_2Hz_6NbmVVqmLswXhL1fKU6KSow39fjG32pxHPPlYeeBbxl22k7Z5SxVSUhG5dSBvuXyfqKyzBFmbUUcFbWmfS1zt-1AZjUuEMkws9b3tCCYv3Vwn7Yf8WyXS78h7IKaSxWN7wXlmjNJIO6_WvZ6yLz9ZWdN7hdIWtseKEhlItCKaNLe3RpPo" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container"></div>
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm font-bold block">Xavi_Pro</span>
                                    <span className="text-xs text-secondary">Jugant ara</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full" data-alt="A sharp, minimalist gamer portrait with purple ambient light. High-end digital look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhLvJ_jHsoQbUHhBaYOepj731jEPIIidTTcSBElTDol47MnCOlU3x_4TkQ92bOxhT6s7GUOP_1UWOUxZWir4oyoWT0cNtFjnlFN7k0DSSfddmrDXZPQo-8fEN_z88gfxBrjqBrnoYgKNYSAIiHOCYUUlcdkMKp7WzLtS58nqPYOJAcbFwPkjrDlCVk7nZplXo4W4NsawqxpuW2LsOCHlxbfezlikdtOU2sxNc53cJHDeK2yVfebrzfJJeE2NK77e2ECrQGmGLrpNsN" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-surface-container"></div>
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm font-bold block">Nebula_Ghost</span>
                                    <span className="text-xs text-secondary">Jugant ara</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 border border-outline-variant/30 rounded-lg text-sm font-bold hover:bg-white/5 transition-all">Veure tots els amics</button>
                    </div>
                    {/* <!-- Quick Tags --> */}
                    <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface-variant">SCI-FI</span>
                        <span className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface-variant">ATMOSFÈRIC</span>
                        <span className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface-variant">MULTIPLAYER</span>
                    </div>
                </aside>
            </section>
        </main>
    )
}