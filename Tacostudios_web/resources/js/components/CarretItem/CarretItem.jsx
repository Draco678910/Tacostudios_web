// CarretItem

export default function CarretItem() {

    return (
        <div className="group relative bg-surface-container-high p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,248,227,0.05)] border border-white/5">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-48 aspect-video overflow-hidden rounded-lg bg-surface-container-highest">
                    <img alt="CIRCUIT_BREAK Thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="high-tech computer circuitry glowing with electric green lines and futuristic digital patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm5ToVodnvbHy-HI85P9fHeVJ2GrSiGfYHS2IW9xirRAa1vdOsFLcf8OdTFdrx6NkcAmAPvRqEBVFcPMNwZ2i6C9XGQ9sZiUGiGpAGdE3DUTwpWshOzOI9ClP3MpwNyVgLXi4ABD79xLkYCGSS4Lfw7GT89kFGQtVv-88MXmNuIlJMYtBU4gNLiVwOEn8ASK2csbeoltXmsIEJ5EuW8guAFEnkOqj1YKKZRewQFPi6cjaT5duOClN4HhVhcDnZYa6U_3o-qLDUPWfe" />
                </div>
                <div className="grow space-y-1 text-center md:text-left">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Etiquetas</span>
                    <h3 className="text-2xl font-bold font-headline text-white">NomJoc</h3>
                    <p className="text-on-surface-variant text-sm font-body">Versió</p>
                </div>
                <div className="flex md:flex-col items-center justify-between md:items-end gap-4 md:gap-2 w-full md:w-auto">
                    <span className="text-xl font-headline font-bold text-white">$24.99</span>
                    <button className="flex items-center gap-2 text-error text-sm hover:opacity-70 transition-opacity p-2">
                        <span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                        <span>Treure</span>
                    </button>
                </div>
            </div>
        </div>
    )
}