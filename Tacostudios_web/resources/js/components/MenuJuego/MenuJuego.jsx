import { usePage, router } from '@inertiajs/react'

export default function MenuJuego({ joc }) {

    const { auth } = usePage().props

    const inLibrary = Boolean(joc?.pivot)
    const isFav = joc?.pivot?.is_favorite
    const lastSession = joc?.pivot?.last_session

    const toggleFav = (e) => {
        e.preventDefault()
        e.stopPropagation()

        router.post(`/joc/${joc.id}/favorite`, {}, {
            preserveScroll: true
        })
    }


    const normalizeUrl = (value) => {
        if (!value) return null

        const str = String(value).trim()

        if (str.startsWith('http://') || str.startsWith('https://')) {
            return str
        }

        if (str.startsWith('www.')) {
            return `https://${str}`
        }

        return null
    }

        const getGameLink = () => {
    const launch = joc?.arxiu_enllac;

    if (!launch) return "#";

    let target = String(launch).trim();

    // Si no tiene protocolo, añadir https://
    if (
        !target.startsWith("http://") &&
        !target.startsWith("https://")
    ) {
        target = `https://${target}`;
    }

    return target;
};

    return (
        <main className="pt-0">

            {/* HERO */}
            <section className="relative min-h-[600px] flex items-end pb-24 px-8 md:px-16 overflow-hidden rounded-2xl">

                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />

                    <img
                        src={joc?.imatge || "https://via.placeholder.com/1200"}
                        className="w-full h-full object-cover"
                        alt={joc?.nom}
                    />
                </div>

                <div className="relative z-20 max-w-4xl">

                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        {joc?.nom}
                    </h1>

                    <div className="flex flex-wrap gap-4">

                        {inLibrary && (
    <a
        href={getGameLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-primary text-black font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition"
    >
        <span className="material-symbols-outlined">
            play_arrow
        </span>

        Jugar
    </a>
)}

                        {inLibrary && (
                            <button
                                onClick={toggleFav}
                                className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition hover:scale-105
                                    ${isFav
                                        ? 'bg-red-500 text-white'
                                        : 'bg-surface-container-high text-white'
                                    }`}
                            >
                                {isFav ? "❤️ Favorit" : "🤍 Afegir a favorits"}
                            </button>
                        )}

                    </div>

                </div>

            </section>

            {/* CONTENT */}
            <section className="px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">

                <div className="lg:col-span-8 space-y-10">

                    <div className="bg-surface-container p-6 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold mb-4">Descripció</h2>
                        <p className="max-w-full wrap-break-word whitespace-normal text-on-surface-variant leading-relaxed">
                            {joc?.descripcio || "Sense descripció disponible."}
                        </p>
                    </div>

                    <div className="bg-surface-container p-6 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold mb-4">Categoria</h2>
                        <span className="text-primary font-bold uppercase tracking-widest">
                            {joc?.category?.nom || "—"}
                        </span>
                    </div>

                </div>

                <aside className="lg:col-span-4 space-y-6">

                    <div className="bg-surface-container-low p-6 rounded-2xl border border-white/5">

                        <h3 className="font-bold mb-4 text-lg">Estadístiques</h3>

                        <div className="space-y-6">

                            <div>
                                <p className="text-sm text-on-surface-variant mb-1">
                                    Última sessió
                                </p>

                                <p className="text-lg font-bold">
                                    {lastSession
                                        ? new Date(lastSession).toLocaleString()
                                        : 'Mai jugat'}
                                </p>
                            </div>

                        </div>

                    </div>

                </aside>

            </section>

        </main>
    )
}