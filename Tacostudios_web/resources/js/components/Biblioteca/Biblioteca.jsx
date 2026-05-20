import { usePage } from '@inertiajs/react'
import JuegoIndiv from "../JuegoIndiv/JuegoIndiv"

export default function Biblioteca() {

    const { jocs = [] } = usePage().props

    console.log('JOCS:', jocs)

    
    const favoritos = jocs.filter(j => j.pivot?.is_favorite === true)


    const resto = jocs.filter(j => !j.pivot?.is_favorite)

    return (
        <main className="pt-32 pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen">

            <header className="mb-20">
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-on-surface">
                    La Teva Biblioteca
                </h1>
                <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl font-light">
                    Un espai íntim per a les teves col·leccions digitals.
                </p>
            </header>

            {/* FAVORITOS */}
            <section className="mb-20 p-8 rounded-2xl bg-surface-container-low border border-white/10 shadow-lg">

                <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">star</span>
                    Els meus Favorits
                </h2>

                {favoritos.length === 0 ? (
                    <p className="text-on-surface-variant">
                        Encara no tens favorits ⭐
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {favoritos.map((joc) => (
                            <JuegoIndiv key={joc.id} joc={joc} />
                        ))}
                    </div>
                )}

            </section>

            {/* FILTERS */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                <input
                    className="w-full md:max-w-md bg-surface-container-highest rounded-full py-3 px-6 border border-white/10"
                    placeholder="Cerca a la teva col·lecció..."
                />
            </div>

            {/* BIBLIOTECA NORMAL */}
            <section className="p-8 rounded-2xl bg-surface-container border border-white/10 shadow-md">

                <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">stadia_controller</span>
                    Tots els jocs
                </h2>

                {resto.length === 0 ? (
                    <p className="text-on-surface-variant">
                        No tens més jocs a la biblioteca
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12">
                        {resto.map((joc) => (
                            <JuegoIndiv key={joc.id} joc={joc} />
                        ))}
                    </div>
                )}

            </section>

        </main>
    )
}