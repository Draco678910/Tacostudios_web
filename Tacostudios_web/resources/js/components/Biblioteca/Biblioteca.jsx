import JuegoIndiv from "../JuegoIndiv/JuegoIndiv"

export default function Biblioteca() {
    return (<main class="pt-32 pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto min-h-screen">
        {/* <!-- Hero Header --> */}
        <header class="mb-20">
            <h1 class="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-on-surface">
                La Teva Biblioteca
            </h1>
            <p class="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl font-light">
                Un espai íntim per a les teves col·leccions digitals.
            </p>
        </header>
        <section class="mb-20">
            <h2 class="font-display text-3xl font-bold tracking-tighter mb-8 text-on-surface flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">star</span>
                Els meus Favorits
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                <JuegoIndiv Favorit="True" />

                <JuegoIndiv Favorit="True" />

                <JuegoIndiv Favorit="True" />
            </div>
        </section>
        {/* <!-- Search & Filters (Subtle & Integrated) --> */}
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div class="relative group max-w-md w-full">
                <span
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant material-symbols-outlined">search</span>
                <input
                    class="w-full bg-surface-container-highest border-none rounded-full py-3 pl-12 pr-6 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-1 focus:ring-secondary/30 font-display transition-all"
                    placeholder="Cerca a la teva col·lecció..." type="text" />
            </div>
            <div class="flex gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                <button
                    class="px-6 py-2 rounded-full bg-secondary text-on-secondary text-sm font-medium whitespace-nowrap">Tots</button>
                <button
                    class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors whitespace-nowrap">Aventura</button>
                <button
                    class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors whitespace-nowrap">Cyberpunk</button>
                <button
                    class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors whitespace-nowrap">Estratègia</button>
                <button
                    class="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface text-sm font-medium transition-colors whitespace-nowrap">Indie</button>
            </div>
        </div>
        {/* <!-- Personal Game Library Grid (3-column asymmetric) --> */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12">
            <JuegoIndiv />

            <JuegoIndiv />

            <JuegoIndiv />

            <JuegoIndiv />

            <JuegoIndiv />

            <JuegoIndiv />

        </div>
    </main>)
}