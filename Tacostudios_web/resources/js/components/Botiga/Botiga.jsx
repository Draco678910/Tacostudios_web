import BotigaJoc from "../BotigaJoc/BotigaJoc";

export default function Botiga({ jocs }) {

    return (
        <div>
            <main className="pt-20 text-white">

                {/* HERO */}
                <section className="relative h-153.5 flex items-center px-8 md:px-16 overflow-hidden p-5">

                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-40" src="/Banner1.png" />
                        <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-surface via-transparent to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter mb-6">
                            LA NOSTRA <br />
                            <span className="text-primary italic">BOTIGA</span>
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-on-primary-fixed font-bold rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(199,153,255,0.3)]">
                                Veure la biblioteca
                            </button>
                        </div>
                    </div>

                </section>

                {/* SEARCH BAR */}
                <section className="px-8 md:px-16 py-12">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 bg-surface-container-low rounded-xl">

                        {/* SEARCH */}
                        <div className="relative flex-1 group">
                            <span className="absolute left-4 top-4 text-on-surface-variant material-symbols-outlined">
                                search
                            </span>

                            <input
                                className="w-full bg-surface-container-highest border-none rounded-full pl-12 pr-6 py-4 font-headline text-on-surface"
                                placeholder="Busca"
                                type="text"
                            />
                        </div>

                        {/* ORDER */}
                        <div className="flex items-center pb-2 md:pb-0 w-3/12">
                            <select className="w-full bg-surface-container-highest border-none rounded-full pr-6 py-4 font-headline text-on-surface">
                                <option>Orden</option>
                            </select>
                        </div>

                        {/* CART */}
                        <a href="/carret" className="flex justify-center w-14 h-14 bg-primary text-on-primary-fixed font-bold rounded-md hover:scale-105 transition-all">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </a>

                    </div>
                </section>

                {/* GRID */}
                <section className="px-8 md:px-16 pb-24">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {jocs?.map((joc) => (
                            <BotigaJoc key={joc.id} joc={joc} />
                        ))}

                    </div>

                </section>

            </main>
        </div>
    );
}