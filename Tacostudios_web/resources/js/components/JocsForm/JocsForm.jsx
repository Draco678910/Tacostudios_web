import { useState } from 'react'
import { usePage, useForm } from '@inertiajs/react'

import CreateJoc from '../CreateJoc/CreateJoc'
import EditJoc from '../EditJoc/EditJoc'
import DeleteJoc from '../DeleteJoc/DeleteJoc'



export default function JocsForm() {

    const { categories, jocs = [] } = usePage().props
    const [tab, setTab] = useState('create')
    const [successMsg, setSuccessMsg] = useState(null)

    return (
        <div className="space-y-10">

            {/* TABS */}
            <div className="flex gap-4">
                <button onClick={() => setTab('create')}
                    className={`px-6 py-2 rounded-xl ${tab === 'create' ? 'bg-primary text-black' : 'bg-surface-container'}`}>
                    Crear
                </button>

                <button onClick={() => setTab('edit')}
                    className={`px-6 py-2 rounded-xl ${tab === 'edit' ? 'bg-primary text-black' : 'bg-surface-container'}`}>
                    Modificar
                </button>

                <button onClick={() => setTab('delete')}
                    className={`px-6 py-2 rounded-xl ${tab === 'delete' ? 'bg-primary text-black' : 'bg-surface-container'}`}>
                    Eliminar
                </button>
            </div>

            {/* SUCCESS */}
            {successMsg && (
                <div className="p-5 rounded-2xl bg-green-500 text-white font-bold">
                    {successMsg}
                </div>
            )}

            {/* CONTENT */}
            {tab === 'create' && (
                <CreateJoc
                    categories={categories}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

            {tab === 'edit' && (
                <EditJoc
                    jocs={jocs}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

            {tab === 'delete' && (
                <DeleteJoc
                    jocs={jocs}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

        </div>
    )
}