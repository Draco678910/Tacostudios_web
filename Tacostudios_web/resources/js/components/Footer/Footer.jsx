// Footer


export default function Footer({ }) {
    return (<footer className="w-full py-12 px-8 bg-[#131313] tonal-shift-no-borders">
        <div className="max-w-full flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="flex flex-wrap justify-center gap-8 font-['Manrope'] text-sm">
                <a className="text-white/40 hover:text-[#c799ff] transition-colors" href="#">Politica de privacitat</a>
                <a className="text-white/40 hover:text-[#c799ff] transition-colors" href="#">Terms de servei</a>
                <a className="text-white/40 hover:text-[#c799ff] transition-colors" href="#">Contacte</a>
            </div>
            <div className="text-white/40 font-['Manrope'] text-sm opacity-80 hover:opacity-100 transition-opacity">
                © 2026 Tacostudios. All rights reserved.
            </div>
        </div>
    </footer>)
}