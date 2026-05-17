export default function JocMostrar({ joc }) {
    return (
        <main className="pt-0">

            {/* HERO */}
            <section className="relative h-230.25 w-full overflow-hidden flex flex-wrap">

                {/* IMAGEN */}
                <div className="w-6/12 relative">
                    <img
                        className="w-full h-full object-cover"
                        src={joc?.imatge || "https://via.placeholder.com/800"}
                        alt={joc?.nom}
                    />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>

                {/* INFO */}
                <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-24 w-6/12">
                    <div className="max-w-3xl">

                        {/* CATEGORY */}
                        <div className="flex gap-3 mb-6">
                            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                {joc?.category?.nom || "Sense categoria"}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h1 className="text-7xl md:text-9xl font-display font-bold">
                            {joc?.nom}
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-xl md:text-2xl mt-6 text-on-surface-variant">
                            {joc?.descripcio}
                        </p>

                        {/* BUTTON */}
                        <div className="flex flex-wrap gap-6 mt-10">
                            <button className="bg-surface-container-highest border border-outline-variant/20 px-10 py-5 rounded-md font-bold text-lg hover:bg-surface-container transition-all active:scale-95 flex items-center gap-3">

                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>

                                Afegeix al carret
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* DESCRIPTION SECTION */}
            <section className="bg-surface-container-low py-32">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    <div>
                        <h2 className="text-4xl font-display font-bold mb-12 text-secondary">
                            Descripció
                        </h2>

                        <div className="space-y-8 text-on-surface-variant text-lg leading-relaxed">

                            <p>
                                {joc?.descripcio}
                            </p>

                            <div className="p-8 bg-surface-container rounded-xl border-l-4 border-primary">
                                <h3 className="text-on-surface font-bold mb-2">
                                    Informació del joc
                                </h3>
                                <p className="text-sm">
                                    Categoria: {joc?.category?.nom || "Sense categoria"}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* SISTEMA (ESTÀTIC PER ARA, OPCIONAL FUTUR) */}
                    <div className="bg-surface-container-high p-12 rounded-2xl border border-outline-variant/10">

                        <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">
                                terminal
                            </span>
                            Requisits del Sistema
                        </h2>

                        <p className="text-sm text-on-surface-variant">
                            Aquesta informació encara és estàtica (pots afegir-la a la BD després).
                        </p>

                    </div>
                </div>
            </section>

            {/* GALLERY (DINÀMICA SIMPLE PER ARA) */}
            <section className="max-w-7xl mx-auto px-8 py-32">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    <div className="md:col-span-8 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={joc?.imatge}
                            alt={joc?.nom}
                        />
                    </div>

                    <div className="md:col-span-4 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={joc?.imatge}
                            alt={joc?.nom}
                        />
                    </div>

                </div>
            </section>

        </main>
    );
}