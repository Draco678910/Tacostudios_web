import { Link } from "@inertiajs/react";

export default function BotigaJoc({ joc, onAddToCart }) {

    const score =
        (joc?.resenyes_posit ?? 0) - (joc?.resenyes_negat ?? 0);

    return (
        <div className="group relative flex flex-col bg-surface-container-high/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* IMAGE WRAPPER */}
            <Link href={`/jocbotiga/${joc.id}`} className="block">

                <div className="relative h-64 overflow-hidden">

                    <img
                        src={joc?.imatge || "https://via.placeholder.com/800"}
                        alt={joc?.nom}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* SOFT VIGNETTE */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* CATEGORY BADGE */}
                    <div className="absolute top-4 left-4 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs tracking-widest uppercase">
                        {joc?.category?.nom || "Sense categoria"}
                    </div>

                    {/* SCORE FLOAT */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold">
                        ★ {score}
                    </div>

                </div>
            </Link>

            {/* CONTENT (MUCHO MÁS AIRE) */}
            <div className="p-6 flex flex-col gap-4">

                {/* TITLE */}
                <Link href={`/jocbotiga/${joc.id}`}>
                    <h3 className="text-2xl font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                        {joc?.nom}
                    </h3>
                </Link>

                {/* DESCRIPTION */}
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">
                    {joc?.descripcio
                        ? joc.descripcio.slice(0, 120) + (joc.descripcio.length > 120 ? "..." : "")
                        : "Sense descripció disponible."
                    }
                </p>

                {/* META GRID (más separado y visual) */}
                <div className="grid grid-cols-2 gap-3 text-xs text-on-surface-variant mt-2">

                    <div className="bg-surface-container rounded-xl p-3 flex flex-col gap-1">
                        <span className="opacity-60">Publicació</span>
                        <span className="font-bold">
                            {joc?.data_publicacio
                                ? new Date(joc.data_publicacio).getFullYear()
                                : "—"}
                        </span>
                    </div>

                    <div className="bg-surface-container rounded-xl p-3 flex flex-col gap-1">
                        <span className="opacity-60">Categoria</span>
                        <span className="font-bold truncate">
                            {joc?.category?.nom || "—"}
                        </span>
                    </div>

                </div>

                {/* REVIEWS BAR */}
                <div className="flex items-center justify-between text-xs mt-2">

                    <div className="flex gap-4">
                        <span className="text-green-400">👍 {joc?.resenyes_posit ?? 0}</span>
                        <span className="text-red-400">👎 {joc?.resenyes_negat ?? 0}</span>
                    </div>

                    <span className="text-on-surface-variant">
                        Score {score}
                    </span>

                </div>

            </div>

            {/* CART BUTTON (SEPARADO, MÁS PREMIUM) */}
            <div className="p-4 pt-0">

                <button
                    onClick={() => onAddToCart?.(joc)}
                    className="w-full py-4 rounded-2xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    Afegir al carret
                </button>

            </div>

        </div>
    );
}