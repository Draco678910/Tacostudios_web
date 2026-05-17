import { Link } from "@inertiajs/react";

export default function BotigaJoc({ joc }) {

    return (
        <div className="group bg-surface-container-high rounded-xl overflow-hidden hover:animate-rainbowGlow transition-shadow duration-500">

            {/* LINK DINÁMICO */}
            <Link href={route('jocIndividual', joc.id)}>

                {/* IMAGEN */}
                <div className="aspect-16/10 overflow-hidden relative">

                    <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={joc?.imatge}
                        alt={joc?.nom}
                    />

                    {/* CATEGORY */}
                    <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">
                        {joc?.category?.nom}
                    </div>

                </div>

                {/* INFO */}
                <div className="p-6">

                    <div className="flex justify-between items-start mb-4">

                        <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">
                            {joc?.nom}
                        </h3>

                        {/* si luego quieres precio */}
                        <span className="text-xl font-headline font-bold text-primary">
                            {/* futuro: joc.preu */}
                            Free
                        </span>

                    </div>

                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                        {joc?.descripcio?.slice(0, 120)}
                        {joc?.descripcio?.length > 120 ? "..." : ""}
                    </p>

                </div>

            </Link>

            {/* BOTÓN */}
            <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">

                <span className="material-symbols-outlined text-sm">
                    shopping_cart
                </span>

                Afegir al carret

            </button>

        </div>
    );
}