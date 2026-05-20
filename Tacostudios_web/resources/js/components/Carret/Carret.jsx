import { useEffect, useState, useMemo } from "react"
import CarretItem from "../CarretItem/CarretItem"

export default function Carret() {

    const [cart, setCart] = useState([])

    // LOAD CART
    useEffect(() => {
        const saved = localStorage.getItem("cart")
        if (saved) setCart(JSON.parse(saved))
    }, [])

    // REMOVE ITEM
    const removeItem = (id) => {
        const updated = cart.filter(item => item.id !== id)
        setCart(updated)
        localStorage.setItem("cart", JSON.stringify(updated))
    }

    // TOTAL (simple)
    const total = useMemo(() => {
        return cart.length * 29.99
    }, [cart])

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 min-h-screen">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                        Carret
                    </h1>
                    <p className="text-on-surface-variant max-w-lg text-lg">
                        Aquí apareixen els jocs que tens al carret de compra.
                    </p>
                </div>

                {/* LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* ITEMS */}
                    <div className="lg:col-span-8 space-y-6">

                        {cart.length === 0 ? (
                            <p className="text-on-surface-variant">
                                El carret està buit
                            </p>
                        ) : (
                            cart.map((joc) => (
                                <CarretItem
                                    key={joc.id}
                                    joc={joc}
                                    onRemove={() => removeItem(joc.id)}
                                />
                            ))
                        )}

                        <a
                            className="inline-flex items-center gap-3 text-secondary-fixed hover:gap-5 transition-all duration-300 mt-8 group font-headline"
                            href="/botiga"
                        >
                            <span className="material-symbols-outlined">
                                arrow_back
                            </span>
                            <span>Continuar comprant</span>
                        </a>

                    </div>

                    {/* SUMMARY */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28">

                        <div className="bg-surface-container p-8 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">

                            {/* decoration */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] rounded-full"></div>
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 blur-[100px] rounded-full"></div>

                            <h2 className="text-2xl font-bold font-headline mb-8 text-white">
                                Resum de la ordre
                            </h2>

                            <div className="space-y-4 mb-8">

                                <div className="flex justify-between text-on-surface-variant">
                                    <span>Subtotal</span>
                                    <span className="text-white">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex justify-between text-on-surface-variant">
                                    <span>Impost estimat</span>
                                    <span className="text-white">
                                        ${(total * 0.08).toFixed(2)}
                                    </span>
                                </div>

                                <div className="pt-4 border-t border-outline-variant/30 flex justify-between">
                                    <span className="text-xl font-bold text-white uppercase tracking-wider">
                                        Preu Total
                                    </span>
                                    <span className="text-2xl font-bold text-secondary">
                                        ${(total * 1.08).toFixed(2)}
                                    </span>
                                </div>

                            </div>

                            <button
                                className="w-full py-4 bg-primary text-on-primary-fixed font-bold text-lg rounded-md scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(199,153,255,0.3)] font-headline uppercase tracking-widest"
                            >
                                Comprar
                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </main>
    )
}