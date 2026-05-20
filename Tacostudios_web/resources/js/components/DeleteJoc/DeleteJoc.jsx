import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function DeleteJoc({ jocs = [], setSuccessMsg }) {

    const [selected, setSelected] = useState(null)

    const { data, setData, delete: destroy } = useForm({
        id: ''
    })

    // 🔎 seleccionar juego (igual que edit)
    const handleSelect = (id) => {
        const joc = jocs.find(j => j.id === Number(id))
        if (!joc) return

        setSelected(joc)
        setData('id', joc.id)
    }

    const submit = (e) => {
        e.preventDefault()

        destroy(`/admin/jocs/${data.id}`, {
            onSuccess: () => {
                setSuccessMsg('Joc eliminat ✔')
                setTimeout(() => setSuccessMsg(null), 3000)

                setSelected(null)
                setData('id', '')
            }
        })
    }

    return (
        <div className="space-y-6">

            {/* SELECT (MISMO ESTILO QUE EDIT) */}
            <div>
                <label className="block text-sm mb-2 text-on-surface-variant">
                    Selecciona un joc per eliminar
                </label>

                <select
                    value={selected?.id || ''}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="w-full p-4 bg-surface-container rounded-xl"
                >
                    <option value="">-- Selecciona un joc --</option>

                    {jocs.map(j => (
                        <option key={j.id} value={j.id}>
                            {j.nom}
                        </option>
                    ))}
                </select>
            </div>

            {/* PREVIEW SIMPLE (OPCIONAL PERO IGUAL UX EDIT) */}
            {selected && (
                <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 space-y-2">
                    <p className="text-on-surface-variant text-sm">Estàs a punt d’eliminar:</p>
                    <p className="text-primary font-bold text-lg">{selected.nom}</p>
                </div>
            )}

            {/* BOTÓN */}
            {data.id && (
                <form onSubmit={submit}>
                    <button className="w-full p-5 bg-red-500 text-white font-black rounded-2xl">
                        Eliminar joc
                    </button>
                </form>
            )}

        </div>
    )
}