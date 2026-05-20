import { useEffect, useMemo, useState } from "react"
import BotigaJoc from "../BotigaJoc/BotigaJoc"
import useCart from "../../hooks/useCart";

export default function Botiga({ jocs = [] }) {

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('recent')
    const [page, setPage] = useState(1)

    const itemsPerPage = 6
    const { cart, addToCart } = useCart()

    useEffect(() => {
        setPage(1)
    }, [search, sort])

    const filteredJocs = useMemo(() => {

        let filtered = Array.isArray(jocs) ? [...jocs] : []

        if (search.trim()) {
            filtered = filtered.filter(j =>
                (j.nom ?? "").toLowerCase().includes(search.toLowerCase())
            )
        }

        switch (sort) {
            case "az":
                filtered.sort((a, b) => (a.nom ?? "").localeCompare(b.nom ?? ""))
                break
            case "za":
                filtered.sort((a, b) => (b.nom ?? "").localeCompare(a.nom ?? ""))
                break
            case "positives":
                filtered.sort((a, b) => (b.resenyes_posit ?? 0) - (a.resenyes_posit ?? 0))
                break
            case "negatives":
                filtered.sort((a, b) => (b.resenyes_negat ?? 0) - (a.resenyes_negat ?? 0))
                break
            default:
                filtered.sort((a, b) =>
                    new Date(b.created_at ?? 0) - new Date(a.created_at ?? 0)
                )
        }

        return filtered

    }, [jocs, search, sort])

    const totalPages = Math.max(1, Math.ceil(filteredJocs.length / itemsPerPage))

    const paginatedJocs = useMemo(() => {
        const start = (page - 1) * itemsPerPage
        return filteredJocs.slice(start, start + itemsPerPage)
    }, [filteredJocs, page])

    return (
        <div className="pt-20 text-white">

            {/* HERO */}
            <section className="relative h-153.5 flex items-center px-8 md:px-16 overflow-hidden p-5">

                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover opacity-40" src="/Banner1.png" />
                </div>

                <div className="relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">
                        LA NOSTRA <span className="text-primary italic">BOTIGA</span>
                    </h1>

                    <a href="/biblioteca" className="px-8 py-4 bg-primary font-bold rounded-md">
                        Veure la biblioteca
                    </a>
                </div>
            </section>

            {/* SEARCH + SORT + CART */}
            <section className="px-8 md:px-16 py-10">
                <div className="flex flex-col md:flex-row gap-4 md:items-center">

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 bg-surface-container-highest rounded-full px-6 py-4"
                        placeholder="Busca un joc..."
                    />

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="md:w-64 bg-surface-container-highest rounded-full px-6 py-4"
                    >
                        <option value="recent">Recents</option>
                        <option value="az">A → Z</option>
                        <option value="za">Z → A</option>
                        <option value="positives">Positives</option>
                        <option value="negatives">Negatives</option>
                    </select>

                    <a
    href="/carret"
    className="relative flex items-center gap-2 px-6 py-4 bg-primary rounded-full font-bold text-black"
>
    {/* HEROICON (igual estilo que antes) */}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
    </svg>

    Carret

    {/* CONTADOR */}
    {cart?.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cart.length}
        </span>
    )}
</a>    

                </div>
            </section>

            {/* GRID */}
            <section className="px-8 md:px-16 pb-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {paginatedJocs.map(joc => (
                        <BotigaJoc
                            key={joc.id}
                            joc={joc}
                            onAddToCart={addToCart}
                        />
                    ))}

                </div>

                {/* 🔥 PAGINATION UI (ESTO FALTABA) */}
                <div className="flex justify-center items-center gap-4 mt-12">

                    <button
                        onClick={() => setPage(p => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 rounded bg-surface-container-high disabled:opacity-40"
                    >
                        ← Anterior
                    </button>

                    <span className="text-white/70">
                        Pàgina {page} de {totalPages}
                    </span>

                    <button
                        onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                        className="px-4 py-2 rounded bg-surface-container-high disabled:opacity-40"
                    >
                        Següent →
                    </button>

                </div>

            </section>
        </div>
    )
}