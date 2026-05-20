import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function DeleteCategory({ categories = [], setSuccessMsg }) {

    const [search, setSearch] = useState('')

    const { data, setData, delete: destroy } = useForm({
        id: ''
    })

    const filtered = categories
        .filter(c =>
            (c?.nom ?? '').toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 8)

    const selectCategory = (c) => {
        setData('id', c.id)
        setSearch(c.nom)
    }

    const submit = (e) => {
        e.preventDefault()

        destroy(`/admin/categories/${data.id}`, {
            onSuccess: () => {
                setSuccessMsg('Categoría eliminada ✔')
                setTimeout(() => setSuccessMsg(null), 3000)

                setSearch('')
                setData('id', '')
            }
        })
    }

    return (
        <div className="space-y-4">

            {/* SEARCH */}
            <input
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                    setData('id', '')
                }}
                className="w-full p-4 bg-surface-container rounded-xl"
                placeholder="Buscar categoría..."
            />

            {/* LIST */}
            <div className="space-y-2">
                {filtered.map(c => (
                    <button
                        key={c.id}
                        type="button"
                        onClick={() => selectCategory(c)}
                        className="w-full text-left p-3 rounded-xl bg-surface-container hover:bg-red-500 hover:text-white transition"
                    >
                        {c.nom}
                    </button>
                ))}
            </div>

            {/* DELETE */}
            {data.id && (
                <form onSubmit={submit}>
                    <button className="w-full p-4 bg-red-500 text-white font-bold rounded-xl">
                        Eliminar categoría
                    </button>
                </form>
            )}

        </div>
    )
}