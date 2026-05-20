import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function EditCategory({ categories = [], setSuccessMsg }) {

    const [selected, setSelected] = useState(null)

    const { data, setData, put, reset } = useForm({
        id: '',
        nom: '',
        descripcio: ''
    })

    const handleSelect = (id) => {
        const cat = categories.find(c => c.id === Number(id))
        if (!cat) return

        setSelected(cat)

        setData({
            id: cat.id,
            nom: cat.nom,
            descripcio: cat.descripcio || ''
        })
    }

    const submit = (e) => {
        e.preventDefault()

        put(`/admin/categories/${data.id}`, {
            onSuccess: () => {
                setSuccessMsg('Categoría modificada ✔')
                setTimeout(() => setSuccessMsg(null), 3000)

                reset()
                setSelected(null)
            }
        })
    }

    return (
        <div className="space-y-6">

            {/* SELECT */}
            <div>
                <label className="block text-sm mb-2 text-on-surface-variant">
                    Selecciona una categoría
                </label>

                <select
                    value={selected?.id || ''}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="w-full p-4 bg-surface-container rounded-xl"
                >
                    <option value="">-- Selecciona categoría --</option>

                    {categories.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.nom}
                        </option>
                    ))}
                </select>
            </div>

            {/* FORM */}
            {data.id && (
                <form onSubmit={submit} className="space-y-4">

                    <input
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        className="w-full p-4 rounded-xl bg-surface-container"
                        placeholder="Nombre"
                    />

                    <textarea
                        value={data.descripcio}
                        onChange={(e) => setData('descripcio', e.target.value)}
                        className="w-full p-4 rounded-xl bg-surface-container min-h-[120px]"
                        placeholder="Descripción"
                    />

                    <button className="w-full p-4 bg-primary text-black font-bold rounded-xl">
                        Modificar categoría
                    </button>

                </form>
            )}

        </div>
    )
}