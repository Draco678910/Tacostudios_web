export default function JuegoBiblioteca({ Favorit }) {

    if (Favorit) {
        return (
            <a href="/jocindiv">
                <article
                    className="group cursor-pointer relative overflow-hidden rounded-xl bg-surface-container-low border border-white/5 neon-glow">
                    <div className="aspect-video overflow-hidden">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            data-alt="Neon landscape"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAlszei3IKbKW3JslxUd4Z3rTz9by0msCJH2mjrDuYug-gNb4om_MKmBApSC8U7SKlFkVb-_PRxRi5rjXKZjv5Y2uyr54p6jsHwJbrx1X4QUExk-m7qvN1qIxlW_7X9UPigiJRdt473D_-KY58ofMfqdC5Lh5dgWAn08q1KbqenlmHHRxA-1VvT-ZwKZEaZOyso0ZvDQAPEASuh8P737njpOdFJg5Rz89yAmdCCMaFWRRcvhxECDlOIL0spNXhOdnTR11yd1blYgNK" />
                    </div>
                    <div
                        className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="font-display text-xl font-medium text-white mb-1">Ethereal Drift</h3>
                        <p className="font-body text-xs text-primary uppercase tracking-widest">Aventura</p>
                    </div>
                </article>
            </a>
        )
    } else {
        return (
            <a href="/jocindiv">
                <article className="group cursor-pointer">
                    <div
                        className="aspect-3/4 mb-6 overflow-hidden rounded-lg bg-surface-container-low transition-transform duration-500 group-hover:-translate-y-2">
                        <img className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                            data-alt="An ethereal digital painting of a lone figure standing on a floating island of violet crystals. The atmosphere is hazy with electric purple mists and soft cyan glimmers in the distance. The lighting is dramatic and cinematic, reflecting a high-contrast Neon Nocturne aesthetic with deep ink-like shadows and vibrant neon pulses. The style is premium editorial illustration."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAlszei3IKbKW3JslxUd4Z3rTz9by0msCJH2mjrDuYug-gNb4om_MKmBApSC8U7SKlFkVb-_PRxRi5rjXKZjv5Y2uyr54p6jsHwJbrx1X4QUExk-m7qvN1qIxlW_7X9UPigiJRdt473D_-KY58ofMfqdC5Lh5dgWAn08q1KbqenlmHHRxA-1VvT-ZwKZEaZOyso0ZvDQAPEASuh8P737njpOdFJg5Rz89yAmdCCMaFWRRcvhxECDlOIL0spNXhOdnTR11yd1blYgNK" />
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="font-display text-2xl font-medium text-on-surface tracking-tight">Ethereal Drift</h2>
                        <span
                            className="font-body text-[10px] uppercase tracking-widest text-secondary px-2 py-1 rounded border border-secondary/20">Aventura</span>
                    </div>
                </article>
            </a>
        )
    }

}