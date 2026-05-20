import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function DeleteNoticia({ noticies = [], setSuccessMsg }) {

    const [search, setSearch] = useState('')

    const { data, setData, delete: destroy } = useForm({
        id: ''
    })

    const filtered = noticies.filter(n =>
        n.titol.toLowerCase().includes(search.toLowerCase())
    )

    const submit = (e) => {
        e.preventDefault()

        destroy(`/admin/noticies/${data.id}`, {
            onSuccess: () => {
                setSuccessMsg('Notícia eliminada ✔')
                setTimeout(() => setSuccessMsg(null), 3000)

                setSearch('')
                setData('id', '')
            }
        })
    }

    return (
        <div className="space-y-4">

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-4 bg-surface-container rounded-xl"
                placeholder="Buscar notícia..."
            />

            {filtered.map(n => (
                <button
                    key={n.id}
                    onClick={() => {
                        setData('id', n.id)
                        setSearch(n.titol)
                    }}
                    className="w-full p-3 text-left bg-surface-container rounded-xl"
                >
                    {n.titol}
                </button>
            ))}

            {data.id && (
                <form onSubmit={submit}>
                    <button className="w-full p-4 bg-red-500 text-white rounded-xl">
                        Eliminar notícia
                    </button>
                </form>
            )}

        </div>
    )
}