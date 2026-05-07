//BotigaJoc

export default function BotigaJoc({ }) {

    return (
        <div className="group bg-surface-container-high rounded-xl overflow-hidden hover:animate-rainbowGlow transition-shadow duration-500">

            <a href="/jocindiv">
                <div className="aspect-16/10 overflow-hidden relative">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="cinematic video game screenshot of a lone character standing in a rain-slicked neon street at night with futuristic towers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiiWrndsh5GvHV2EdedTpsoV29aRWrnoQaCZ6V0dWhmcFqVCSyq2BexGa2Fzo1eRDNhzeknrxjbZcnfZYTfL_KJd7v7nUIv1xEp4h1qteuMLDGWWNK498GnH_KSwhzEmlWSq982dOykT7-7u7sMng7tFE8wUV2CDvIYfUpNxVduUviLTpcwgIheKkc0xz4wJ1smH_PXIcNNQtokhmerjFrK2p-BDow4jiof5upaIKqQgY-6arKFibjFXTobTjtqPJpOVRIS4FaRGuD" />
                    <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur px-3 py-1 rounded text-xs font-bold text-secondary uppercase tracking-widest">Digital Art</div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Joc1</h3>
                        <span className="text-xl font-headline font-bold text-primary">$24.99</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed font-body">
                        A high-octane sensory journey through a decaying megacity. Master the art of the perfect drift in a world that never sleeps.
                    </p>
                </div>
            </a>

            <button className="w-full py-4 bg-surface-container-highest hover:bg-primary hover:text-on-primary-fixed border border-outline-variant/10 font-bold rounded-md transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                Afegir al carret
            </button>
        </div>


    )
}