import { useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'

export default function UserMenu() {

    const { auth } = usePage().props
    const user = auth?.user

    const [editMode, setEditMode] = useState(false)

    const { data, setData, put, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        password_confirmation: ''
    })

    const submit = (e) => {
        e.preventDefault()

        put('/user/profile', {
            preserveScroll: true,
            onSuccess: () => {
                setEditMode(false)
                setData('password', '')
                setData('password_confirmation', '')
            }
        })
    }

    return (
    <div className="min-h-screen flex flex-col">
        
        {/* CONTENT WRAPPER */}
        <div className="flex-1 max-w-4xl mx-auto w-full p-6 space-y-8">
            <div className='h-16'>
                <div></div>
            </div>
            {/* HEADER */}
            <div className="bg-surface-container p-6 rounded-2xl flex items-center justify-between shadow-md">
                <div>
                    <h2 className="text-3xl font-black">
                        Perfil d'usuari
                    </h2>
                    <p className="text-on-surface-variant">
                        Gestiona la teva informació personal
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => setEditMode(!editMode)}
                    className={`px-5 py-2 rounded-xl font-bold transition
                        ${editMode
                            ? 'bg-red-500 text-white'
                            : 'bg-primary text-black'
                        }`}
                >
                    {editMode ? 'Cancelar' : 'Editar'}
                </button>
            </div>

            {/* CONTENT */}
            <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm">

                {!editMode ? (

                    <div className="space-y-4 text-lg">
                        <div>
                            <p className="text-sm text-on-surface-variant">Nom</p>
                            <p className="font-bold">{user?.name}</p>
                        </div>

                        <div>
                            <p className="text-sm text-on-surface-variant">Email</p>
                            <p className="font-bold">{user?.email}</p>
                        </div>
                    </div>

                ) : (

                    <form onSubmit={submit} className="space-y-6">

                        {/* NAME */}
                        <div>
                            <label className="block mb-2 font-bold">Nom</label>
                            <input
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full p-4 rounded-xl bg-surface-container"
                                autoComplete="name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block mb-2 font-bold">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full p-4 rounded-xl bg-surface-container"
                                autoComplete="email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="block mb-2 font-bold">Nova contrasenya</label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="w-full p-4 rounded-xl bg-surface-container"
                                autoComplete="new-password"
                            />
                        </div>

                        {/* CONFIRM */}
                        <div>
                            <label className="block mb-2 font-bold">Confirmar contrasenya</label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="w-full p-4 rounded-xl bg-surface-container"
                                autoComplete="new-password"
                            />
                        </div>

                        {/* BUTTON */}
                        <button
                            disabled={processing}
                            className="w-full p-5 bg-primary text-black font-black rounded-2xl disabled:opacity-50"
                        >
                            {processing ? 'Guardant...' : 'Guardar canvis'}
                        </button>

                    </form>

                )}

            </div>
        </div>
    </div>
)
}