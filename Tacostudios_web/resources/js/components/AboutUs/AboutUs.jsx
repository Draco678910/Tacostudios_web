export default function AboutUs() {
    return (
        <main className="pt-28 px-6 md:px-12">

            {/* HERO */}
            <section className="max-w-5xl mx-auto mb-28">
                <p className="text-sm uppercase tracking-[0.3em] text-primary mb-6">
                    About us
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                    Som un estudi <span className="text-primary">indie</span> de videojocs
                </h1>

                <p className="text-xl text-on-surface-variant leading-relaxed max-w-3xl">
                    Creem videojocs amb identitat pròpia. Ens mou la curiositat, l’experimentació i les ganes
                    de construir experiències interactives que destaquin per la seva personalitat.
                </p>
            </section>

            {/* CONTENT */}
            <section className="max-w-5xl mx-auto space-y-20">

                <div className="border-l-2 border-primary pl-6">
                    <h2 className="text-2xl font-bold mb-3">Qui som</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        Som un equip petit de desenvolupadors i creadors independents. Treballem amb una visió
                        pròpia i amb la llibertat d’explorar idees sense dependre de tendències externes.
                    </p>
                </div>

                <div className="border-l-2 border-secondary pl-6">
                    <h2 className="text-2xl font-bold mb-3">Com treballem</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        Ens basem en la iteració constant. Prototipem, provem idees i les refinem fins trobar
                        una experiència que funcioni i tingui sentit per a nosaltres.
                    </p>
                </div>

                <div className="border-l-2 border-outline pl-6">
                    <h2 className="text-2xl font-bold mb-3">La nostra filosofia</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        Prioritzem la creativitat i la identitat per sobre de les fórmules establertes.
                        Busquem crear projectes que tinguin caràcter i deixin empremta.
                    </p>
                </div>
                <div></div>
            </section>
        </main>
    )
}