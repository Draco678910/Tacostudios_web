import { useForm } from '@inertiajs/react'

export default function CreateCategory({ setSuccessMsg }) {

    const { data, setData, post, reset, processing } = useForm({
        nom: '',
        descripcio: ''
    })

    const submit = (e) => {
        e.preventDefault()

        post('/admin/categories', {
            onSuccess: () => {
                reset()
                setSuccessMsg('Categoría creada ✔')
                setTimeout(() => setSuccessMsg(null), 3000)
            }
        })
    }

    return (
        <form onSubmit={submit} className="space-y-6 max-w-xl">

            <input
                value={data.nom}
                onChange={(e) => setData('nom', e.target.value)}
                placeholder="Nombre"
                className="w-full p-4 bg-surface-container rounded-xl"
            />

            <textarea
                value={data.descripcio}
                onChange={(e) => setData('descripcio', e.target.value)}
                placeholder="Descripción"
                className="w-full p-4 bg-surface-container rounded-xl min-h-[120px]"
            />

            <button
                disabled={processing}
                className="w-full p-4 bg-primary text-black font-bold rounded-xl"
            >
                Crear categoría
            </button>

        </form>
    )
}