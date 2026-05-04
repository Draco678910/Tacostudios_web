//Main Page
import Noticia from "../Noticia/Noticia";
import { usePage } from '@inertiajs/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function MainPage({ }) {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <main className="bg-surface text-on-surface bg-primary text-primary ">

            <section className="relative min-h-screen flex items-end pt-32 pb-24 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Banner" className="w-full h-full object-cover" src="./Banner1.png" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-5xl">
                    <br />
                    <h1 className="text-7xl md:text-9xl font-headline font-bold tracking-tighter leading-none mb-8">
                    </h1>
                    <p className="text-body-lg text-black max-w-xl mb-12 text-xl leading-relaxed">
                        Explora els nostres jocs i mira les ultimes noticies
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a href="/botiga">
                            <button className="bg-linear-to-r bg-primary from-primary to-primary-container text-on-primary-fixed font-headline px-10 py-5 rounded-md font-bold text-lg hover:shadow-[0_0_20px_rgba(199,153,255,0.4)] transition-all active:scale-95">
                                BOTIGA
                            </button>
                        </a>
                        <a href="/noticias">
                            <button className="bg-surface-container-highest border border-outline-variant/20 text-on-surface font-headline px-10 py-5 rounded-md font-bold text-lg hover:bg-surface-container transition-all active:scale-95">
                                NOTICIES
                            </button>
                        </a>

                    </div>
                </div>
            </section>
            {/* <!-- About Us Section --> */}
            <section className="py-32 px-8 bg-surface">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                            <h2 className="text-5xl font-headline font-bold mb-8 leading-tight">
                                Sobre <span className="italic font-light">Nossaltres</span>
                            </h2>
                            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                                <p>
                                    Som una empresa de desenvolupament de videojocs...
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id semper felis. Quisque in dictum dolor. Nullam aliquet nulla vitae tortor faucibus condimentum. Nunc interdum, odio eget fermentum aliquam, ante leo gravida elit, sit amet condimentum erat sapien eu ex.
                                </p>
                            </div>
                            <div className="mt-12 flex items-center gap-4 text-secondary group cursor-pointer">
                                <span className="font-headline font-bold tracking-widest text-sm uppercase">Més</span>
                                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="trending_flat">trending_flat</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-full grid grid-cols-1 gap-4">
                        <div className="aspect-4/4 rounded-xl overflow-hidden mt-12 bg-surface-container">
                            <img src="Banner2.png" alt="" />
                            <img src="Banner1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Latest News Section --> */}
            <section className="py-32 px-8 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <span className="text-primary font-headline text-sm tracking-[0.4em] uppercase mb-4 block">MIRA LES</span>
                            <h2 className="text-6xl font-headline font-bold tracking-tighter">ULTIMES NOTICIES</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- News Card 1 --> */}
                        <Noticia />
                        {/* <!-- News Card 2 --> */}
                        <Noticia />
                        {/* <!-- News Card 3 --> */}
                        <Noticia />
                    </div>
                    {user ? (
                        <div> </div>
                    ) : (

                        <section className="mt-32 p-12 rounded-2xl bg-surface-container-low border border-outline-variant/10 relative overflow-hidden">
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl headline-font font-bold mb-4">NO ET <span className="text-secondary">PERDIS RES</span></h2>
                                    <p className="text-on-surface-variant">Inicia sesió per no perdre les ultimes noticies i els nostres jocs</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="/login">
                                        <button className="bg-primary hover:animate-tGlow transition-shadow duration-500 text-on-primary-fixed px-8 py-4 rounded-md font-bold headline-font hover:brightness-110 active:scale-95">INICIAR SESIÓ</button>
                                    </a>
                                    <a href="/register">
                                        <button className="bg-primary hover:animate-tGlow transition-shadow duration-500 text-on-primary-fixed px-8 py-4 rounded-md font-bold headline-font hover:brightness-110 active:scale-95">REGISTRAR-SE</button>
                                    </a>
                                </div>

                            </div>
                            {/* <!-- Decorative Glow --> */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
                        </section >
                    )}
                </div >
            </section >
        </main >)
}

