// Header


export default function Header() {
    return (
        <nav class="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl no-border transition-colors duration-300 shadow-[0_20px_40px_rgba(199,153,255,0.08)]">
            <div class="flex justify-between items-center px-8 h-20 max-w-full">
                <div class="text-2xl font-bold tracking-tighter text-[#c799ff] font-['Space_Grotesk']">
                    Logo
                </div>
                <div class="hidden md:flex items-center space-x-10 font-['Space_Grotesk'] tracking-tight">
                    <a class="text-white/70 hover:text-white transition-all duration-200" href="/">Pagina Principal</a>
                    <a class="text-white/70 hover:text-white transition-all duration-200" href="/botiga">Botiga</a>
                    <a class="text-white/70 hover:text-white transition-all duration-200" href="/noticias">Noticies</a>
                    <a class="text-white/70 hover:text-white transition-all duration-200" href="#">Sobre nossaltres</a>
                </div>
                <div class="flex items-center gap-6">
                    <button class="text-white/70 hover:bg-white/5 p-2 rounded-lg active:scale-90 hover:animate-rainbowGlow transition-shadow duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    </button>
                    <button class="text-white/70 hover:bg-white/5 p-2 rounded-lg hover:animate-rainbowGlow transition-shadow duration-500 active:scale-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </nav>
    )
}
