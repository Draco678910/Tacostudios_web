// Footer


export default function Footer({ }) {
    return (<footer class="w-full py-12 px-8 bg-[#131313] tonal-shift-no-borders">
        <div class="max-w-full flex flex-col md:flex-row justify-between items-center gap-6">

            <div class="flex flex-wrap justify-center gap-8 font-['Manrope'] text-sm">
                <a class="text-white/40 hover:text-[#c799ff] transition-colors" href="#">Politica de privacitat</a>
                <a class="text-white/40 hover:text-[#c799ff] transition-colors" href="#">Terms de servei</a>
                <a class="text-white/40 hover:text-[#c799ff] transition-colors" href="#">Contacte</a>
            </div>
            <div class="text-white/40 font-['Manrope'] text-sm opacity-80 hover:opacity-100 transition-opacity">
                © 2026 Tacostudios. All rights reserved.
            </div>
        </div>
    </footer>)
}