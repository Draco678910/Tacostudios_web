export default function CarretItem({ joc, onRemove }) {

    return (
        <div className="group relative bg-surface-container-high p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,248,227,0.05)] border border-white/5">

            <div className="flex flex-col md:flex-row gap-6 items-center">

                {/* IMAGEN */}
                <div className="w-full md:w-48 aspect-video overflow-hidden rounded-lg bg-surface-container-highest">

                    <img
                        src={joc?.imatge}
                        alt={joc?.nom}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                </div>

                {/* INFO */}
                <div className="grow space-y-1 text-center md:text-left">

                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
                        {joc?.category?.nom || "Categoria"}
                    </span>

                    <h3 className="text-2xl font-bold font-headline text-white">
                        {joc?.nom}
                    </h3>

                    <p className="text-on-surface-variant text-sm font-body">
                        {joc?.descripcio
                            ? joc.descripcio.slice(0, 60) + (joc.descripcio.length > 60 ? "..." : "")
                            : "Sense descripció"}
                    </p>

                </div>

                {/* PRECIO + ACCIONES */}
                <div className="flex md:flex-col items-center justify-between md:items-end gap-4 md:gap-2 w-full md:w-auto">

                    <span className="text-xl font-headline font-bold text-white">
                        €{joc?.preu ?? "29.99"}
                    </span>

                    <button
                        onClick={onRemove}
                        className="flex items-center gap-2 text-error text-sm hover:opacity-70 transition-opacity p-2"
                    >
                        <span className="material-symbols-outlined text-sm">
                            delete
                        </span>
                        <span>Treure</span>
                    </button>

                </div>

            </div>

        </div>
    )
}