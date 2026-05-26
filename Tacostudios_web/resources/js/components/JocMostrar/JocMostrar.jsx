import useCart from "../../hooks/useCart";
import { Link } from "@inertiajs/react";

export default function JocMostrar({ joc }) {
    const { addToCart, cart } = useCart();

    const price = Number(joc?.preu ?? 0);
    const category = joc?.category?.nom;

    const cartCount = cart?.length ?? 0;

    return (
        <main className="pt-0 text-white">

            {/* HERO */}
            <section className="relative min-h-screen flex">

                {/* BACKGROUND */}
                <div className="absolute inset-0">
                    <img
                        src={joc?.imatge || "https://via.placeholder.com/1200"}
                        alt={joc?.nom}
                        className="w-full h-full object-cover scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 w-full flex items-end px-10 md:px-20 pb-24">

                    <div className="max-w-4xl space-y-6">

                        {/* CATEGORY */}
                        {category && (
                            <span className="inline-flex px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase border border-primary/30 backdrop-blur-md">
                                {category}
                            </span>
                        )}

                        {/* TITLE + PRICE */}
                        <div className="flex flex-wrap items-end gap-6">

                            <h1 className="text-6xl md:text-8xl font-black leading-none">
                                {joc?.nom}
                            </h1>

                            <span className="px-5 py-2 rounded-xl bg-black/60 border border-white/20 text-primary text-2xl font-bold backdrop-blur-md shadow-lg">
                                {price.toFixed(2)} €
                            </span>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl">
                            {joc?.descripcio?.length > 20
                                ? joc.descripcio.slice(0, 20) + "..."
                                : joc?.descripcio}
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">

                            <button
                                onClick={() => addToCart(joc)}
                                className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30"
                            >
                                🛒 Afegeix al carret
                            </button>

                            <span className="text-sm text-white/60">
                                Compra instantània · Accés immediat
                            </span>

                        </div>

                    </div>
                </div>
            </section>

            {/* INFO SECTION */}
            <section className="bg-surface-container-low py-24">

                <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* DESCRIPTION */}
                    <div className="md:col-span-2 space-y-6">

                        <h2 className="text-3xl font-bold text-secondary">
                            Sobre el joc
                        </h2>

                        <p className="text-on-surface-variant text-lg leading-relaxed wrap-break-word max-w-[80ch]">
                            {joc?.descripcio}
                        </p>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-6">

                        <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10">
                            <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                                Categoria
                            </p>
                            <p className="text-lg font-bold">
                                {category || "—"}
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10">
                            <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                                Preu
                            </p>
                            <p className="text-lg font-bold text-primary">
                                {price.toFixed(2)} €
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/10">
                            <p className="text-xs uppercase tracking-widest text-on-surface-variant">
                                Publicació
                            </p>
                            <p className="text-lg font-bold">
                                {joc?.data_publicacio
                                    ? new Date(joc.data_publicacio).getFullYear()
                                    : "—"}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FLOATING CART BUTTON */}
            <div className="fixed bottom-6 right-6 z-50">
                <Link
                    href="/carret"
                    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-primary text-black font-black shadow-2xl hover:scale-105 active:scale-95 transition-all relative"
                >
                    {/* HEROICON (SIN CAMBIOS) */}
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

                    {/* COUNTER */}
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </Link>
            </div>

        </main>
    );
}