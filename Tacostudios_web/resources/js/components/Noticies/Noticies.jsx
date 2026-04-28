import Noticia from "../Noticia/Noticia"

export default function Noticies() {
    return (
        <body>
            <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto text-white">
                {/* <!-- Hero Editorial Section --> */}
                <header className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-secondary font-headline text-sm tracking-[0.2em] uppercase mb-4 block">Mira les</span>
                            <h1 className="text-7xl md:text-8xl headline-font font-bold tracking-tighter leading-[0.9] mb-6">Ultimes<br /><span className="text-primary">NOTICIES</span></h1>
                        </div>
                    </div>
                </header>
                {/* <!-- Featured Article (Asymmetric Layout) --> */}
                <Noticia Gran="true" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* <!-- News Card 1 --> */}
                    <Noticia />
                    {/* <!-- News Card 2 --> */}
                    <Noticia />
                    {/* <!-- News Card 3 --> */}
                    <Noticia />
                </div>

            </main>
        </body>
    )
}
