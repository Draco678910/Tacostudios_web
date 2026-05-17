
export default function JocMostrar() {

    return (
        <main className="pt-0">
            {/* <!-- Hero Section --> */}
            <section className="relative h-230.25 w-full overflow-hidden flex flex-wrap">
                <div className=" w-6/12">
                    <img className="w-full h-full object-cover"
                        data-alt="A cinematic widescreen shot of a futuristic cyberpunk city at night with towering skyscrapers emitting violet and cyan neon glows. Rain slicks the dark asphalt streets below where a lone figure stands against a backdrop of holographic advertisements. The overall atmosphere is moody and atmospheric, heavily utilizing a palette of deep blacks, electric purples, and vibrant teals in the signature Neon Nocturne style."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7SxZI7wlSVbCemJWURfZMqecZvkWjFsQLrIDqsqFzwoK_lXraC-ya6Bk7h4FEOQ_Blme5EcLOg00xiBOGts8hZr9290RynNx-J2bcL76zw1HofYvhaW2pTJC3kvK_PWn7VNXjJi8NiGe4QZVcGz2FrApampQ0uVlNO4ZKwim-Q6sJmpu01ny5MxoN983LW0OT_LpzyqSbMH97UVERwiJX370EAH_elwxzTSqkpts1vMCQjc-9DjZBeTlCtMjotquCJYG_ZcQc32b" />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>
                <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-24 w-6/12">
                    <div className="max-w-3xl">
                        <div className="flex gap-3 mb-6">
                            <span
                                className="px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase">Novetat
                                Indie</span>
                            <span
                                className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">RPG
                                d'Acció</span>
                        </div>
                        <h1
                            className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-on-surface mb-6 leading-none">
                            SYNAPSE<br /><span className="text-secondary">OVERDRIVE</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed mb-10 max-w-2xl">
                            Endinsa't en la ment d'un mercenari digital. Un viatge visceral a través de la xarxa neuronal on
                            el codi és la teva arma i el silenci la teva mort.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button
                                className="bg-surface-container-highest border border-outline-variant/20 text-on-surface font-headline px-10 py-5 rounded-md font-bold text-lg hover:bg-surface-container transition-all active:scale-95">
                                <span className="material-symbols-outlined"
                                >shopping_cart</span>
                                Afegeix al carret
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Information & Requirements --> */}
            <section className="bg-surface-container-low py-32">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-12 text-secondary">Descripció</h2>
                        <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed">
                            <p>
                                Al segle XXII, la consciència humana es pot fragmentar i carregar a la "Nocturne", una xarxa
                                global que gestiona cada aspecte de l'existència. Quan un virus sense precedents comença a
                                esborrar sectors sencers, tu ets enviat com a últim recurs.
                            </p>
                            <div className="p-8 bg-surface-container rounded-xl border-l-4 border-primary">
                                <h3 className="text-on-surface font-bold mb-2">Sistema Synapse</h3>
                                <p className="text-sm">Personalitza les teves habilitats en temps real mitjançant la captura de
                                    fragments de codi enemic. Cap partida és igual gràcies a la generació procedimental de
                                    sub-rutines.</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                                    Més de 40 hores de narrativa principal
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                                    Banda sonora original synth-wave dinàmica
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                                    Múltiples finals basats en les teves decisions de codi
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-surface-container-high p-12 rounded-2xl border border-outline-variant/10">
                        <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">terminal</span>
                            Requisits del Sistema
                        </h2>
                        <div className="space-y-10">
                            <div>
                                <h4 className="text-secondary text-xs font-bold tracking-widest uppercase mb-4">Mínims</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="text-on-surface-variant mb-1">SO</p>
                                        <p className="font-medium text-on-surface">Windows 10 64-bit</p>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant mb-1">Processador</p>
                                        <p className="font-medium text-on-surface">Intel i5-8400 / AMD Ryzen 5 1600</p>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant mb-1">Memòria</p>
                                        <p className="font-medium text-on-surface">8 GB RAM</p>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant mb-1">Gràfics</p>
                                        <p className="font-medium text-on-surface">NVIDIA GTX 1060 6GB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10 border-t border-outline-variant/10">
                                <h4 className="text-primary text-xs font-bold tracking-widest uppercase mb-4">Recomanats</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="text-on-surface-variant mb-1">SO</p>
                                        <p className="font-medium text-on-surface">Windows 11 64-bit</p>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant mb-1">Processador</p>
                                        <p className="font-medium text-on-surface">Intel i7-12700 / AMD Ryzen 7 5800X</p>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant mb-1">Memòria</p>
                                        <p className="font-medium text-on-surface">16 GB RAM</p>
                                    </div>
                                    <div>
                                        <p className="text-on-surface-variant mb-1">Gràfics</p>
                                        <p className="font-medium text-on-surface">NVIDIA RTX 3070 / RX 6800</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-lg text-xs text-on-surface-variant italic">
                                * Es requereix una connexió a Internet per a la verificació inicial i el joc cooperatiu
                                opcional. 1TB d'espai disponible al disc SSD.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Gallery Grid (Bento Style) --> */}
            <section className="max-w-7xl mx-auto px-8 py-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-200">
                    <div className="md:col-span-8 rounded-xl overflow-hidden group relative">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-alt="A high-action gameplay screenshot of a fast-paced combat sequence in a dark futuristic arena with multiple glowing enemies. Electric cyan lightning effects arc across the screen as the player character executes a mid-air dash, leaving a trail of purple light. The aesthetic is sharply detailed with deep shadows and high-contrast lighting typical of high-end indie game cinematography."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCowtdYonm2c4oFFvvshncjWWK_VyXslryqqfOX0g0TqRLpkSVQUSfiNTezGf1MyOfg8KIXYOqlAGD41mOKfcTbjGAP8LVEsO-x-wg-205p_8NVy3wy6I65s-MB_ZtHnnIyK6ZKkr5oQ_Cb4DPF_bs1iRbuOMta-POMT3ARXWZDrbwA1VRYKnZMzOJgHXzkmZmKo5vAz_N_WLeeQd100jWYutei_Qpv4Q_s-dXn2Gj9y_B7n8mAHs9PEIis3UkAS-9g__bdolb-UGl7" />
                        <div
                            className="absolute inset-0 bg-linear-to-t from-surface-dim/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                            <p className="font-display text-xl">Combat tàctic en temps real</p>
                        </div>
                    </div>
                    <div className="md:col-span-4 rounded-xl overflow-hidden group relative">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-alt="A detailed close-up of a futuristic computer interface with floating neon-lit icons and complex circuit patterns. The design uses primary purple and secondary cyan as its lighting sources against a dark obsidian background. This image captures the technical sophistication and hardware-centric aesthetic of the Neon Nocturne design system in an editorial gaming context."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKcj1JqNuSAe4vifCRVjPrrLl47RG6PA75JdIAJIrx62sarwefnl2c9K4Gd6gE42snZ-EQUqKuj1qsSjvqWM7XMELfBZ40DxRyPHfz-y86wvN-qoo2QzKtigkksRHRpOArRXqKB2sE1TLEdkvbA0TINP69wosOwiaDxESsogH7Rt3xgTSZ2PFSFDLOiE2LMpC-rCSTs4f72Sqa7rihkv_VoVScWn2kWZS8qOSoPOrE1oYXotf5bEJp8CHStuHdRBLdcIIOM3c-Cowi" />
                    </div>
                    <div className="md:col-span-4 rounded-xl overflow-hidden group relative">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-alt="An atmospheric landscape of a neon-drenched futuristic city park where artificial glowing trees meet metallic structures. The sky is a deep indigo with faint digital data streams visible in the clouds. This wide-angle shot emphasizes the contrast between organic-inspired forms and harsh industrial materials in the Neon Syndicate universe."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzFOH-cfVFNeCmB1gy-W6p26hF3rZU8WeVF-7Fc088qN5JMu26mX-EXNyH0Kt2Hi6hqoM5g-GTi7dxj_i8ywoKOZ-bGhRuKw1fSM-x7d4hz4WgpSvieWR6joK2bIzOCGP_6ObnF5aFSi-m-hHGGa3cvUT87PVGofD2rntd9F4Qb9Ef-feawVU6iyegBGAqTaTxtXAIF8oCbF7Y5SKYxjqiX2JIa8BTlFYykSzVmB2DIhCafl22uficmfJalPg1RJKur40CUBl9DV_r" />
                    </div>
                    <div className="md:col-span-8 rounded-xl overflow-hidden group relative">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            data-alt="A cinematic interior shot of a tech-heavy laboratory filled with glowing servers and holographic displays projecting intricate data visualizations in cyan and magenta. Shadowy reflections on polished black surfaces create depth and a high-end editorial feel. The scene is quiet yet charged with technological energy, perfectly aligning with the game's high-tech narrative themes."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9k3RrstuehhKxR59p-zJMh3W48vtCcQ9mhPmtjvvsot8_3HM6ZyZMQhfgDzE6D4KYlEYTbbKtfcT9pi9Ey_4QN-hTl14jlQFInuRHsIQqfEdk-Ww9Kd5qv1dvEXXEImcfeVccm0lkHu3pBstbXv004YvpfY61wiagzz0U5rIP_zemlSAd53H9mejaKiCya4AcEmOUI61b7pC1NxhZEMOelYhsSjsZLU6Yo5QLxUuwtvXVuqZRJrH30Ju7DXgTtAmLQ4azST-7bpA0" />
                        <div
                            className="absolute inset-0bg-linear-to-t from-surface-dim/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
                            <p className="font-display text-xl">Explora la infraestructura de la Xarxa</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}