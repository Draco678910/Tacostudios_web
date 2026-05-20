import Noticia from "../Noticia/Noticia";

export default function MainPage({ noticias = [], auth }) {

    const user = auth?.user;

    return (
        <main className="bg-surface text-on-surface">

            {/* HERO */}
            <section className="relative min-h-screen flex items-end pt-32 pb-24 px-8 overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        alt="Banner"
                        className="w-full h-full object-cover"
                        src="/Banner1.png"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl">

                    <p className="text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
                        Explora els nostres jocs i mira les últimes notícies
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="/botiga">
                            <button className="bg-primary text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition">
                                BOTIGA
                            </button>
                        </a>

                        <a href="/noticias">
                            <button className="bg-surface-container-high text-white px-8 py-4 rounded-xl font-bold hover:bg-surface-container transition">
                                NOTÍCIES
                            </button>
                        </a>
                    </div>

                </div>
            </section>

            {/* ABOUT */}
            <section className="py-24 px-8 bg-surface">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-5xl font-bold mb-8">
                            Sobre <span className="italic font-light">Nosaltres</span>
                        </h2>

                        <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">

                            <p>
                                Som un estudi de desenvolupament de videojocs i plataforma digital enfocada a oferir experiències interactives modernes, accessibles i dinàmiques per a tota mena de jugadors.
                            </p>

                            <p>
                                El nostre objectiu és combinar tecnologia, creativitat i disseny per crear un ecosistema on els usuaris puguin descobrir, jugar i seguir les últimes novetats del món del videojoc.
                            </p>

                            <p>
                                Treballem constantment per millorar la qualitat dels nostres jocs, la comunitat i les eines disponibles dins la plataforma, apostant per una experiència fluida i atractiva.
                            </p>

                        </div>

                        <a
                            className="mt-10 inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition"
                            href="/aboutus"
                        >
                            Més informació
                            <span className="material-symbols-outlined">
                                trending_flat
                            </span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img src="/Banner2.png" className="rounded-xl object-cover h-64 w-full" />
                        <img src="/Banner1.png" className="rounded-xl object-cover h-64 w-full" />
                    </div>

                </div>
            </section>

            {/* NEWS */}
            <section className="py-24 px-8 bg-surface-container-low">

                <div className="max-w-7xl mx-auto">

                    <div className="flex justify-between items-end mb-16">

                        <div>
                            <span className="text-primary text-sm tracking-[0.3em] uppercase block mb-3">
                                Mira les
                            </span>

                            <h2 className="text-5xl md:text-6xl font-bold">
                                Últimes notícies
                            </h2>
                        </div>

                        <a
                            href="/noticias"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition"
                        >
                            Veure totes
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </a>

                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {noticias?.slice(0, 3).map((noticia) => (
                            <Noticia key={noticia.id} noticia={noticia} />
                        ))}
                    </div>

                    {!user && (
                        <section className="mt-24 p-10 rounded-2xl bg-surface-container relative overflow-hidden">

                            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                        NO ET <span className="text-primary">PERDIS RES</span>
                                    </h2>

                                    <p className="text-on-surface-variant">
                                        Inicia sessió per no perdre les últimes notícies i jocs
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <a href="/login">
                                        <button className="bg-primary text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
                                            INICIAR SESSIÓ
                                        </button>
                                    </a>

                                    <a href="/register">
                                        <button className="bg-surface-container-high text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
                                            REGISTRAR-SE
                                        </button>
                                    </a>
                                </div>

                            </div>

                        </section>
                    )}

                </div>
            </section>

        </main>
    );
}