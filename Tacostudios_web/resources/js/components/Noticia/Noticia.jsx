import { Link } from '@inertiajs/react'

const Noticia = ({ noticia, gran = false }) => {

    if (!noticia) return null

    const date = noticia.data_publicacio || noticia.created_at

    const formattedDate = new Date(date).toLocaleDateString('ca-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })

    return (
        <Link href={`/noticia/${noticia.id}`} className="block">

            {gran ? (
                <section className="mb-32 relative group cursor-pointer">

                    <div className="grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-xl bg-surface-container-low">

                        {/* IMAGE */}
                        <div className="md:col-span-8 overflow-hidden">
                            <img
                                src={noticia.imatge}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="md:col-span-4 p-10 flex flex-col justify-center">

                            <p className="text-primary text-sm mb-4">
                                {formattedDate}
                            </p>

                            <h2 className="text-3xl font-bold mb-6 group-hover:text-secondary transition-colors">
                                {noticia.titol}
                            </h2>

                            <p className="text-on-surface-variant line-clamp-3">
                                {noticia.contingut}
                            </p>

                        </div>

                    </div>

                </section>
            ) : (

                <div className="group bg-surface-container-high rounded-lg overflow-hidden hover:-translate-y-2 transition">

                    <div className="aspect-video overflow-hidden">
                        <img
                            src={noticia.imatge}
                            className="w-full h-full object-cover group-hover:scale-110 transition"
                        />
                    </div>

                    <div className="p-8">

                        <p className="text-xs text-on-surface-variant mb-2">
                            {formattedDate}
                        </p>

                        <h3 className="text-xl font-bold group-hover:text-primary transition">
                            {noticia.titol}
                        </h3>

                    </div>

                </div>

            )}

        </Link>
    )
}

export default Noticia