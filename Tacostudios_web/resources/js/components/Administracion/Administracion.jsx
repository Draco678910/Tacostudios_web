

export default function Administracion() {
    return (
        <main class="md:ml-72 min-h-screen flex flex-col">

            <aside class="fixed left-0 top-0 h-full w-72 bg-surface-container-low border-r border-outline-variant/10 flex-col z-60 hidden md:flex">
            <div class="px-8 py-10">
                <h1 class="font-display font-black text-primary text-2xl tracking-tighter">Neon Nocturne</h1>
                <p class="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant mt-1">Admin Terminal v2.4</p>
            </div>
            <nav class="grow flex flex-col mt-4">
                <a class="flex items-center gap-4 text-on-surface-variant px-8 py-4 hover:bg-surface-container hover:text-on-surface transition-all duration-200 font-label text-sm uppercase tracking-widest" href="#">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Dashboard</span>
                </a>
                <a class="flex items-center gap-4 text-on-surface-variant px-8 py-4 hover:bg-surface-container hover:text-on-surface transition-all duration-200 font-label text-sm uppercase tracking-widest" href="#">
                    <span class="material-symbols-outlined">videogame_asset</span>
                    <span>Games Catalog</span>
                </a>
                {/* <!-- Active Navigation --> */}
                <a class="flex items-center gap-4 text-secondary bg-surface-container-highest border-r-4 border-secondary px-8 py-4 font-label text-sm uppercase tracking-widest font-bold" href="#">
                    <span class="material-symbols-outlined">edit_note</span>
                    <span>News Manager</span>
                </a>
                <a class="flex items-center gap-4 text-on-surface-variant px-8 py-4 hover:bg-surface-container hover:text-on-surface transition-all duration-200 font-label text-sm uppercase tracking-widest" href="#">
                    <span class="material-symbols-outlined">monitoring</span>
                    <span>Analytics</span>
                </a>
                <a class="flex items-center gap-4 text-on-surface-variant px-8 py-4 hover:bg-surface-container hover:text-on-surface transition-all duration-200 font-label text-sm uppercase tracking-widest" href="#">
                    <span class="material-symbols-outlined">group</span>
                    <span>Team</span>
                </a>
            </nav>
            <div class="mt-auto px-8 py-8 border-t border-outline-variant/10">
                <button class="w-full bg-linear-to-r from-primary to-primary-container text-on-primary-fixed font-bold py-3 rounded-md flex items-center justify-center gap-2 mb-6 cursor-pointer active:scale-95 transition-transform">
                    <span class="material-symbols-outlined">publish</span>
                    <span>Publish Live</span>
                </button>
                <div class="flex flex-col gap-2">
                    <a class="flex items-center gap-4 text-on-surface-variant/60 hover:text-secondary transition-colors text-xs font-label uppercase tracking-widest" href="#">
                        <span class="material-symbols-outlined text-sm">help_center</span>
                        <span>Support</span>
                    </a>
                    <a class="flex items-center gap-4 text-on-surface-variant/60 hover:text-error transition-colors text-xs font-label uppercase tracking-widest" href="#">
                        <span class="material-symbols-outlined text-sm">logout</span>
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        </aside>
            {/* <!-- Page Canvas --> */}
            <div class="mt-20 px-6 md:px-12 py-12 grow max-w-6xl mx-auto w-full">
                {/* <!-- Header Section --> */}
                <div class="mb-16">
                    <div class="flex items-center gap-2 text-secondary mb-4 uppercase tracking-[0.4em] font-label text-[10px] font-bold">
                        <span class="w-8 h-px bg-secondary"></span>
                        <span>Editor de Contingut</span>
                    </div>
                    <h2 class="text-6xl md:text-8xl font-display font-black tracking-tighter text-on-surface leading-none">Publicar Notícia</h2>
                    <p class="mt-6 text-on-surface-variant text-lg max-w-2xl font-body leading-relaxed">
                        Gestiona l'impacte digital del teu estudi. Redacta articles que captivin la comunitat, integra visuals d'alta fidelitat i sincronitza el llançament amb el roadmap global.
                    </p>
                </div>
                {/* <!-- Editor Layout: Asymmetric Bento Style --> */}
                <form class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* <!-- Main Form Column --> */}
                    <div class="lg:col-span-8 space-y-12">
                        {/* <!-- Title Input --> */}
                        <section class="group">
                            <label class="block font-display text-sm font-bold text-secondary uppercase tracking-widest mb-4 ml-1" for="title">Títol de la Notícia</label>
                            <input class="w-full bg-surface-container-low border-none rounded-xl p-6 text-3xl font-display font-bold text-on-surface placeholder:text-on-surface-variant/30 focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" id="title" placeholder="Escriu un titular impactant..." type="text" />
                        </section>
                        {/* <!-- Media Upload Area --> */}
                        <section>
                            <label class="block font-display text-sm font-bold text-secondary uppercase tracking-widest mb-4 ml-1">Imatge Principal</label>
                            <div class="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-outline-variant/20 bg-surface-container hover:border-primary/40 transition-all duration-300 min-h-[400px] flex flex-col items-center justify-center">
                                <img alt="Draft Background" class="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-40" data-alt="A cinematic, abstract digital background featuring flowing waves of liquid metal in deep violet and electric turquoise hues. The lighting is low and atmospheric, mimicking a high-end gaming aesthetic with glowing neon edges and soft gradients of shadows. The composition is sleek and minimalist, suitable for a futuristic editorial banner in an indie gaming portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGtZ_qQZnfPopDGqBkcjzy96ZuGGvPsFS22Pb76Wcjci3wiT7XQpYqLzhpsG2tY1kQHXxoKocbHMLiGvaRPaSUbLu94iqCw2gfqoe-rG_fkz_B97UNmYInMYAe08shWsQJmlh_K395k0ik0Ab4sR_p7oIzGJC5gt6cKHbqOU8I05fXmg1lIYg2cJSFBnkDIP6SriXXZ3Qn-Fjn2Udhfy8fH_S296OGqO3CwZnJ5UqU4aZHviqIg3mz5aO-gcr2BEKeMgah5T5lJ5rV" />
                                <div class="relative z-10 text-center px-8">
                                    <span class="material-symbols-outlined text-6xl text-primary mb-4 block">cloud_upload</span>
                                    <p class="text-on-surface font-display font-bold text-xl mb-2">Arrossega o selecciona un fitxer</p>
                                    <p class="text-on-surface-variant text-sm">Format recomanat: 1920x1080 (PNG/JPG)</p>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Rich Text Editor Placeholder --> */}
                        <section>
                            <label class="block font-display text-sm font-bold text-secondary uppercase tracking-widest mb-4 ml-1" for="body">Còs de la Notícia</label>
                            <div class="bg-surface-container-high rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                                {/* <!-- Editor Toolbar --> */}
                                <div class="flex items-center gap-4 px-6 py-4 bg-surface-container-highest border-b border-outline-variant/10 text-on-surface-variant">
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">format_bold</button>
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">format_italic</button>
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">format_h1</button>
                                    <div class="w-px h-6 bg-outline-variant/20 mx-2"></div>
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">format_list_bulleted</button>
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">link</button>
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">image</button>
                                    <button class="material-symbols-outlined hover:text-primary transition-colors" type="button">code</button>
                                </div>
                                <textarea class="w-full bg-transparent border-none p-8 text-on-surface text-lg leading-relaxed focus:ring-0 placeholder:text-on-surface-variant/30 resize-none font-body" id="body" placeholder="Comença a escriure el futur de Neon Nocturne..." rows="18"></textarea>
                            </div>
                        </section>
                    </div>
                    {/* <!-- Sidebar Controls --> */}
                    <div class="lg:col-span-4 space-y-8">
                        {/* <!-- Publishing Panel --> */}
                        <div class="bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
                            <h3 class="font-display font-bold text-lg mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-secondary">tune</span>
                                Configuració de Publicació
                            </h3>
                            <div class="space-y-6">
                                <div>
                                    <label class="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">Estat</label>
                                    <div class="flex gap-2">
                                        <span class="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full border border-secondary/20 flex items-center gap-1">
                                            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> ESBORRANY
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">Categoria</label>
                                    <div class="flex flex-wrap gap-2">
                                        <button class="px-3 py-1 bg-surface-container-high rounded-full text-xs text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors" type="button">Actualització</button>
                                        <button class="px-3 py-1 bg-secondary rounded-full text-xs text-on-secondary" type="button">Esdeveniment</button>
                                        <button class="px-3 py-1 bg-surface-container-high rounded-full text-xs text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors" type="button">Lore</button>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-3">Visibilitat</label>
                                    <select class="w-full bg-surface-container border-none rounded-lg text-sm text-on-surface focus:ring-primary/40">
                                        <option>Públic (Tothom)</option>
                                        <option>Privat (Només Staff)</option>
                                        <option>Membres Premium</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-8 pt-8 border-t border-outline-variant/10 space-y-4">
                                <button class="w-full py-4 bg-surface-container-highest text-on-surface font-bold rounded-md hover:bg-surface-bright transition-colors uppercase tracking-widest text-xs" type="button">Guardar Esborrany</button>
                                <button class="w-full py-4 bg-linear-to-br from-primary to-primary-container text-on-primary-fixed font-black rounded-md shadow-[0_10px_20px_rgba(199,153,255,0.2)] hover:shadow-[0_15px_30px_rgba(199,153,255,0.4)] transition-all uppercase tracking-widest text-xs cursor-pointer" type="submit">Publicar Ara</button>
                            </div>
                        </div>
                        {/* <!-- SEO & Social Preview Card --> */}
                        <div class="bg-surface-container-high rounded-xl p-8 border border-outline-variant/5">
                            <h3 class="font-display font-bold text-lg mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-secondary">share</span>
                                Previsualització Social
                            </h3>
                            <div class="rounded-lg overflow-hidden bg-surface-container-lowest border border-outline-variant/10">
                                <div class="h-32 bg-surface-container flex items-center justify-center">
                                    <span class="material-symbols-outlined text-4xl text-on-surface-variant/20">image</span>
                                </div>
                                <div class="p-4">
                                    <div class="h-4 w-3/4 bg-surface-container-highest rounded mb-2"></div>
                                    <div class="h-3 w-full bg-surface-container-highest/50 rounded mb-1"></div>
                                    <div class="h-3 w-5/6 bg-surface-container-highest/50 rounded"></div>
                                </div>
                            </div>
                            <p class="mt-4 text-[10px] text-on-surface-variant font-label leading-tight">
                                L'optimització SEO s'aplica automàticament segons el títol i la primera imatge carregada.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            {/* <!-- Footer --> */}
        </main>);
} 