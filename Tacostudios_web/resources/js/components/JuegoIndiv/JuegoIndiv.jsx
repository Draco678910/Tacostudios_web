import { router } from '@inertiajs/react'

export default function JuegoIndiv({ joc }) {

    const isFav = joc?.pivot?.is_favorite

    const goToGame = () => {
        router.visit(`/joc/${joc.id}`)
    }

    const toggleFav = (e) => {
        e.preventDefault()
        e.stopPropagation()

        router.post(`/joc/${joc.id}/favorite`, {}, {
            preserveScroll: true
        })
    }

    return (
        <article
            onClick={goToGame}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-surface-container-low border border-white/5 shadow-xl hover:-translate-y-1 transition-all duration-300"
        >

            {/* IMAGE */}
            <div className="aspect-3/4 overflow-hidden">
                <img
                    src={joc?.imatge || "https://via.placeholder.com/400"}
                    alt={joc?.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />  
            </div>

            <button
                onClick={toggleFav}
                className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md border transition
                    ${isFav
                        ? 'bg-red-500/80 border-red-300 text-white'
                        : 'bg-black/60 border-white/10 text-white'
                    } hover:scale-110`}
            >
                {isFav ? "❤️" : "🤍"}
            </button>

            {/* INFO */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">

                <h3 className="text-lg font-bold text-white group-hover:text-primary transition">
                    {joc?.nom}
                </h3>

                <div className="flex items-center justify-between mt-2">

                    <span className="text-xs uppercase tracking-widest text-primary">
                        {joc?.category?.nom || "—"}
                    </span>

                    <span className="text-sm font-bold text-white">
                        {Number(joc?.preu ?? 0).toFixed(2)} €
                    </span>

                </div>

            </div>

        </article>
    )
}