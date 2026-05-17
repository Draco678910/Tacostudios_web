//Botiga
import BotigaJoc from "../BotigaJoc/BotigaJoc"

export default function Botiga({ }) {
    return (
        <div>
            <main className="pt-20 text-white">
                <section className="relative h-153.5 flex items-center px-8 md:px-16 overflow-hidden p-5">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-40" src="./Banner1.png" />
                        <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-linear-to-r from-surface via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter mb-6">
                            LA NOSTRA<br /> <span className="text-primary italic">BOTIGA</span>
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-primary text-on-primary-fixed font-bold rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(199,153,255,0.3)]">
                                Veure la biblioteca
                            </button>
                        </div>
                    </div>

                </section>

                <section className="px-8 md:px-16 py-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 bg-surface-container-low rounded-xl">
                        <div className="relative flex-1 group">
                            <span className="absolute left-4 top-4 text-on-surface-variant material-symbols-outlined">search</span>
                            <input className="w-full bg-surface-container-highest border-none rounded-full pl-12 pr-6 py-4 font-headline text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary" placeholder="Busca" type="text" />
                        </div>
                        <div className="flex items-center pb-2 md:pb-0 w-3/12">
                            <select id="select" className="w-full bg-surface-container-highest border-none rounded-full pr-6 py-4 font-headline text-on-surface">
                                <option >
                                    Orden
                                </option>
                            </select>
                        </div>
                        <a href="/carret" className=' text-center flex justify-center w-14 h-14 bg-primary text-on-primary-fixed font-bold rounded-md transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(199,153,255,0.3)]'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                        </a>
                    </div>

                </section>

                <section className="px-8 md:px-16 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <BotigaJoc />
                        <BotigaJoc />
                        <BotigaJoc />
                        <BotigaJoc />
                        <BotigaJoc />
                        <BotigaJoc />
                    </div>
                </section>
            </main>
        </div >
    )
}