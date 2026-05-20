export default function AdminTopBar({ activeTab, setActiveTab }) {

    const item = (id, label, icon) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-4 px-6 py-4 text-sm uppercase tracking-widest font-label transition-all w-full
            border-r-2
            ${
                activeTab === id
                    ? 'text-primary border-primary bg-surface-container'
                    : 'text-on-surface-variant border-transparent hover:text-on-surface hover:bg-surface-container'
            }`}
        >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
        </button>
    )

    return (
        <aside className="
            fixed left-0 top-16 bottom-0
            w-72
            bg-surface-container-low
            border-r border-outline-variant/10
            flex flex-col
            overflow-y-auto
            z-40
        ">

            {/* HEADER */}
            <div className="px-6 py-6 border-b border-outline-variant/10">
                <h1 className="font-display font-black text-primary text-xl tracking-tighter">
                    Administració
                </h1>
            </div>

            {/* NAV */}
            <nav className="flex flex-col py-2">

                {item('jocs', 'Jocs', '🎮')}
                {item('categories', 'Categories', '📁')}
                {item('noticies', 'Notícies', '📰')}

                {item('user-jocs', 'Usuaris Jocs', '👤🎮')}

            </nav>

        </aside>
    )
}