import { useState } from 'react'
import { usePage } from '@inertiajs/react'

import CreateNoticia from '../CreateNoticia/CreateNoticia'
import EditNoticia from '../EditNoticia/EditNoticia'
import DeleteNoticia from '../DeleteNoticia/DeleteNoticia'

export default function NoticiesForm() {

    const { noticies = [] } = usePage().props

    const [tab, setTab] = useState('create')
    const [successMsg, setSuccessMsg] = useState(null)

    return (
        <div className="space-y-10">

            {/* TABS */}
            <div className="flex gap-4">

                <button
                    onClick={() => setTab('create')}
                    className={`px-6 py-2 rounded-xl transition
                        ${tab === 'create'
                            ? 'bg-primary text-black'
                            : 'bg-surface-container'
                        }`}
                >
                    Crear
                </button>

                <button
                    onClick={() => setTab('edit')}
                    className={`px-6 py-2 rounded-xl transition
                        ${tab === 'edit'
                            ? 'bg-primary text-black'
                            : 'bg-surface-container'
                        }`}
                >
                    Modificar
                </button>

                <button
                    onClick={() => setTab('delete')}
                    className={`px-6 py-2 rounded-xl transition
                        ${tab === 'delete'
                            ? 'bg-primary text-black'
                            : 'bg-surface-container'
                        }`}
                >
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
                <CreateNoticia setSuccessMsg={setSuccessMsg} />
            )}

            {tab === 'edit' && (
                <EditNoticia
                    noticies={noticies}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

            {tab === 'delete' && (
                <DeleteNoticia
                    noticies={noticies}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

        </div>
    )
}