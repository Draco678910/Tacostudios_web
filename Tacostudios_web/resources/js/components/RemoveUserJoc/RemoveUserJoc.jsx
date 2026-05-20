import { useForm } from '@inertiajs/react'

export default function RemoveUserJoc({ users, jocs, setSuccessMsg }) {

    const { data, setData, post, reset } = useForm({
        user_id: '',
        joc_id: ''
    })

    const submit = (e) => {
        e.preventDefault()

        post('/admin/user-jocs/toggle', {
            onSuccess: () => {
                reset()
                setSuccessMsg('Juego eliminado correctamente ✔')
                setTimeout(() => setSuccessMsg(null), 3000)
            }
        })
    }

    return (
        <form onSubmit={submit} className="space-y-6">

            {/* USER */}
            <select
                value={data.user_id}
                onChange={(e) => setData('user_id', e.target.value)}
                className="w-full p-4 bg-surface-container rounded-xl"
            >
                <option value="">Selecciona usuario</option>
                {users.map(u => (
                    <option key={u.id} value={u.id}>
                        {u.name}
                    </option>
                ))}
            </select>

            {/* GAME */}
            <select
                value={data.joc_id}
                onChange={(e) => setData('joc_id', e.target.value)}
                className="w-full p-4 bg-surface-container rounded-xl"
            >
                <option value="">Selecciona juego</option>
                {jocs.map(j => (
                    <option key={j.id} value={j.id}>
                        {j.nom}
                    </option>
                ))}
            </select>

            {/* BUTTON */}
            <button className="w-full p-5 bg-red-500 text-white font-bold rounded-2xl">
                Quitar juego
            </button>

        </form>
    )
}