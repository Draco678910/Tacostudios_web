export default function JocBiblioteca({ jocs }) {

    const joc = jocs?.[0];

    return (
        <main className="pt-0">

            {/* HERO */}
            <section className="relative min-h-204.75 flex items-end pb-24 px-8 md:px-16 overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover"
                        src={joc?.imatge}
                    />
                </div>

                <div className="relative z-20 max-w-4xl">

                    <h1 className="font-display text-7xl md:text-9xl font-bold">
                        {joc?.nom}
                    </h1>

                    <div className="flex flex-wrap gap-4 mt-6">

                        <button className="px-10 py-4 bg-primary font-bold rounded-md flex items-center gap-2">
                            <span className="material-symbols-outlined">play_arrow</span>
                            Jugar
                        </button>

                    </div>
                </div>
            </section>

            {/* INFO */}
            <section className="px-8 md:px-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

                <div className="lg:col-span-8">

                    <h2 className="text-4xl font-bold mb-10">
                        Comunitat
                    </h2>

                    {/* aquí dejas tu UI igual */}
                </div>

                <aside className="lg:col-span-4">

                    <div className="bg-surface-container p-8 rounded-2xl">
                        <h3>Estadístiques</h3>

                        <p>{joc?.category?.nom}</p>
                    </div>

                </aside>

            </section>

        </main>
    );
}