import Noticia from "../Noticia/Noticia"
import { usePage, router } from '@inertiajs/react'

export default function Noticies() {

    const { noticies, featured } = usePage().props

    return (
        <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto text-white">

            {/* HERO */}
            <header className="mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

                    <div className="max-w-2xl">
                        <span className="text-secondary text-sm uppercase tracking-[0.2em] mb-4 block">
                            Mira les
                        </span>

                        <h1 className="text-7xl md:text-8xl font-bold leading-[0.9] mb-6">
                            Ultimes<br />
                            <span className="text-primary">NOTICIES</span>
                        </h1>
                    </div>

                </div>
            </header>

            {/* FEATURED (LA ULTIMA) */}
            {featured && (
                <Noticia
                    noticia={featured}
                    gran={true}
                />
            )}

            {/* GRID (PAGINACIÓN 3 EN 3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                {noticies.data.map((n) => (
                    <Noticia
                        key={n.id}
                        noticia={n}
                    />
                ))}

            </div>

            {/* PAGINATION */}
            <div className="flex justify-center mt-12 gap-4">

                {noticies.links.map((link, i) => (
                    <button
                        key={i}
                        disabled={!link.url}
                        onClick={() => link.url && router.visit(link.url)}
                        className={`px-4 py-2 rounded-xl transition ${
                            link.active
                                ? 'bg-primary text-black'
                                : 'bg-surface-container'
                        }`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}

            </div>

        </main>
    )
}