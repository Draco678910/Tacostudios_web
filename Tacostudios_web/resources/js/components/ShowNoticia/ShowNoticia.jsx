import { usePage } from '@inertiajs/react'

export default function ShowNoticia() {

    const { noticia } = usePage().props

    if (!noticia) return null

    const rawDate = noticia.data_publicacio || noticia.created_at

    const date = rawDate
        ? new Date(rawDate).toLocaleDateString('ca-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        : ''

    return (
        <main className="pt-20 text-white">

            {/* HERO */}
            <header className="relative h-[520px] w-full overflow-hidden">

                {/* IMAGE */}
                <img
                    src={noticia.imatge || '/placeholder.jpg'}
                    className="w-full h-full object-cover"
                    alt={noticia.titol}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-10">

                    <div className="max-w-4xl mx-auto">

                        <p className="text-secondary text-sm uppercase tracking-widest mb-4">
                            {date}
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            <span className="inline bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg box-decoration-clone">
                                {noticia.titol}
                            </span>
                        </h1>

                    </div>

                </div>

            </header>

            {/* CONTENT */}
            <section className="flex justify-center px-4 py-16">
                <div className="max-w-3xl w-full">
                    <p className="text-center text-lg leading-8 wrap-break-word whitespace-pre-line">
                        {noticia.contingut}
                    </p>
                </div>
            </section>

        </main>
    )
}