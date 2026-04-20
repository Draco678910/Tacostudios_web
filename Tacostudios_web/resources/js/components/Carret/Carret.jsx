// Carret
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Carret() {

    return (
        <body>
            <main class="pt-32 pb-24 px-6 md:px-12 lg:px-24 min-h-screen">

                <div class="max-w-7xl mx-auto">
                    {/* <!-- Header Section --> */}
                    <div class="mb-12">
                        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">Carret</h1>
                        <p class="text-on-surface-variant max-w-lg text-lg">Aqui apareixen els jocs que tens al carret de compra.</p>
                    </div>
                    {/* <!-- Cart Layout --> */}
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* <!-- Items Column --> */}
                        <div class="lg:col-span-8 space-y-6">
                            {/* <!-- Cart Item 1 --> */}
                            <div class="group relative bg-surface-container-high p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,248,227,0.05)] border border-white/5">
                                <div class="flex flex-col md:flex-row gap-6 items-center">
                                    <div class="w-full md:w-48 aspect-video overflow-hidden rounded-lg bg-surface-container-highest">
                                        <img alt="CIRCUIT_BREAK Thumbnail" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="high-tech computer circuitry glowing with electric green lines and futuristic digital patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm5ToVodnvbHy-HI85P9fHeVJ2GrSiGfYHS2IW9xirRAa1vdOsFLcf8OdTFdrx6NkcAmAPvRqEBVFcPMNwZ2i6C9XGQ9sZiUGiGpAGdE3DUTwpWshOzOI9ClP3MpwNyVgLXi4ABD79xLkYCGSS4Lfw7GT89kFGQtVv-88MXmNuIlJMYtBU4gNLiVwOEn8ASK2csbeoltXmsIEJ5EuW8guAFEnkOqj1YKKZRewQFPi6cjaT5duOClN4HhVhcDnZYa6U_3o-qLDUPWfe" />
                                    </div>
                                    <div class="grow space-y-1 text-center md:text-left">
                                        <span class="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Etiquetas</span>
                                        <h3 class="text-2xl font-bold font-headline text-white">NomJoc</h3>
                                        <p class="text-on-surface-variant text-sm font-body">Versió</p>
                                    </div>
                                    <div class="flex md:flex-col items-center justify-between md:items-end gap-4 md:gap-2 w-full md:w-auto">
                                        <span class="text-xl font-headline font-bold text-white">$24.99</span>
                                        <button class="flex items-center gap-2 text-error text-sm hover:opacity-70 transition-opacity p-2">
                                            <span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                                            <span>Treure</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Cart Item 2 --> */}
                            <div class="group relative bg-surface-container-high p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,248,227,0.05)] border border-white/5">
                                <div class="flex flex-col md:flex-row gap-6 items-center">
                                    <div class="w-full md:w-48 aspect-video overflow-hidden rounded-lg bg-surface-container-highest">
                                        <img alt="CIRCUIT_BREAK Thumbnail" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="high-tech computer circuitry glowing with electric green lines and futuristic digital patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm5ToVodnvbHy-HI85P9fHeVJ2GrSiGfYHS2IW9xirRAa1vdOsFLcf8OdTFdrx6NkcAmAPvRqEBVFcPMNwZ2i6C9XGQ9sZiUGiGpAGdE3DUTwpWshOzOI9ClP3MpwNyVgLXi4ABD79xLkYCGSS4Lfw7GT89kFGQtVv-88MXmNuIlJMYtBU4gNLiVwOEn8ASK2csbeoltXmsIEJ5EuW8guAFEnkOqj1YKKZRewQFPi6cjaT5duOClN4HhVhcDnZYa6U_3o-qLDUPWfe" />
                                    </div>
                                    <div class="grow space-y-1 text-center md:text-left">
                                        <span class="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Etiquetas</span>
                                        <h3 class="text-2xl font-bold font-headline text-white">NomJoc</h3>
                                        <p class="text-on-surface-variant text-sm font-body">Versió</p>
                                    </div>
                                    <div class="flex md:flex-col items-center justify-between md:items-end gap-4 md:gap-2 w-full md:w-auto">
                                        <span class="text-xl font-headline font-bold text-white">$24.99</span>
                                        <button class="flex items-center gap-2 text-error text-sm hover:opacity-70 transition-opacity p-2">
                                            <span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                                            <span>Treure</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Cart Item 3 --> */}
                            <div class="group relative bg-surface-container-high p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,248,227,0.05)] border border-white/5">
                                <div class="flex flex-col md:flex-row gap-6 items-center">
                                    <div class="w-full md:w-48 aspect-video overflow-hidden rounded-lg bg-surface-container-highest">
                                        <img alt="CIRCUIT_BREAK Thumbnail" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="high-tech computer circuitry glowing with electric green lines and futuristic digital patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm5ToVodnvbHy-HI85P9fHeVJ2GrSiGfYHS2IW9xirRAa1vdOsFLcf8OdTFdrx6NkcAmAPvRqEBVFcPMNwZ2i6C9XGQ9sZiUGiGpAGdE3DUTwpWshOzOI9ClP3MpwNyVgLXi4ABD79xLkYCGSS4Lfw7GT89kFGQtVv-88MXmNuIlJMYtBU4gNLiVwOEn8ASK2csbeoltXmsIEJ5EuW8guAFEnkOqj1YKKZRewQFPi6cjaT5duOClN4HhVhcDnZYa6U_3o-qLDUPWfe" />
                                    </div>
                                    <div class="grow space-y-1 text-center md:text-left">
                                        <span class="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Etiquetas</span>
                                        <h3 class="text-2xl font-bold font-headline text-white">NomJoc</h3>
                                        <p class="text-on-surface-variant text-sm font-body">Versió</p>
                                    </div>
                                    <div class="flex md:flex-col items-center justify-between md:items-end gap-4 md:gap-2 w-full md:w-auto">
                                        <span class="text-xl font-headline font-bold text-white">$24.99</span>
                                        <button class="flex items-center gap-2 text-error text-sm hover:opacity-70 transition-opacity p-2">
                                            <span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                                            <span>Treure</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <a class="inline-flex items-center gap-3 text-secondary-fixed hover:gap-5 transition-all duration-300 mt-8 group font-headline" href="/botiga">
                                <span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                                <span>Continuar comprant</span>
                            </a>
                        </div>
                        {/* <!-- Summary Column --> */}
                        <div class="lg:col-span-4 lg:sticky lg:top-28">
                            <div class="bg-surface-container p-8 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
                                {/* <!-- Subtle Gradient Background decoration --> */}
                                <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] rounded-full"></div>
                                <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 blur-[100px] rounded-full"></div>
                                <h2 class="text-2xl font-bold font-headline mb-8 text-white">Resum de la ordre</h2>
                                <div class="space-y-4 mb-8">
                                    <div class="flex justify-between text-on-surface-variant font-body">
                                        <span>Subtotal</span>
                                        <span class="text-white">$79.97</span>
                                    </div>
                                    <div class="flex justify-between text-on-surface-variant font-body">
                                        <span>Impost estimat</span>
                                        <span class="text-white">$6.40</span>
                                    </div>
                                    <div class="pt-4 border-t border-outline-variant/30 flex justify-between">
                                        <span class="text-xl font-bold font-headline text-white uppercase tracking-wider">Preu Total</span>
                                        <span class="text-2xl font-bold font-headline text-secondary">$88.87</span>
                                    </div>
                                </div>
                                <button class="w-full py-4 bg-primary text-on-primary-fixed font-bold text-lg rounded-md scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(199,153,255,0.3)] font-headline uppercase tracking-widest">
                                    Comprar
                                </button>
                                <div class="mt-8 pt-8 border-t border-outline-variant/20">
                                    <p class="text-xs text-on-surface-variant/60 leading-relaxed font-body">

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </body>
    )
}