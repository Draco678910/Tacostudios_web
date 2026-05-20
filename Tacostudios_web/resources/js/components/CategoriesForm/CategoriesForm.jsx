import { useForm } from '@inertiajs/react'
import { useState } from 'react'

export default function CategoriesForm() {

    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    const { data, setData, post, processing, reset } = useForm({
        nom: '',
        descripcio: ''
    })

    const submit = (e) => {
        e.preventDefault()

        post('/admin/categories', {
            preserveScroll: true,

            onSuccess: () => {
                reset()
                setSuccess('Categoria creada correctament ✔')
                setError(null)
                setTimeout(() => setSuccess(null), 3000)
            },

            onError: (errors) => {
                setSuccess(null)

                if (errors.nom === 'CATEGORY_EXISTS') {
                    setError('Aquesta categoria ja existeix')
                    return
                }

                setError('No s’ha pogut crear la categoria')
            }
        })
    }

    return (
        <form onSubmit={submit} className="max-w-2xl space-y-8">

            {/* HEADER */}
            <h2 className="text-4xl font-black text-on-surface">
                Crear categoria
            </h2>

            <p className="text-on-surface-variant">
                Afegeix una nova categoria per classificar els jocs
            </p>

            {/* SUCCESS */}
            {success && (
                <div className="p-4 rounded-xl bg-green-500/15 text-green-400 border border-green-500/30">
                    {success}
                </div>
            )}

            {/* ERROR */}
            {error && (
                <div className="p-4 rounded-xl bg-red-500/15 text-red-400 border border-red-500/30">
                    {error}
                </div>
            )}

            {/* INPUT NOM */}
            <input
                value={data.nom}
                onChange={(e) => setData('nom', e.target.value)}
                placeholder="Nom de la categoria"
                className="w-full p-5 bg-surface-container rounded-2xl text-lg"
            />

            {/* TEXTAREA */}
            <textarea
                value={data.descripcio}
                onChange={(e) => setData('descripcio', e.target.value)}
                placeholder="Descripció (opcional)"
                className="w-full p-5 bg-surface-container rounded-2xl min-h-[140px]"
            />

            {/* BUTTON */}
            <button
                disabled={processing}
                className="w-full p-5 rounded-2xl bg-primary text-black font-black hover:opacity-90 transition"
            >
                {processing ? 'Creant...' : 'Crear categoria'}
            </button>

        </form>
    )
}