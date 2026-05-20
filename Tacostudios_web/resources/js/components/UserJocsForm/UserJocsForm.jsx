import { useState } from 'react'
import { usePage } from '@inertiajs/react'

import AssignUserJoc from '../AssignUserJoc/AssignUserJoc'
import RemoveUserJoc from '../RemoveUserJoc/RemoveUserJoc'

export default function AdminUserJocsForm() {

    const { users = [], jocs = [] } = usePage().props

    const [tab, setTab] = useState('assign')
    const [successMsg, setSuccessMsg] = useState(null)

    return (
        <div className="space-y-10">

            {/* TABS */}
            <div className="flex gap-4">

                <button
                    onClick={() => setTab('assign')}
                    className={`px-6 py-2 rounded-xl ${
                        tab === 'assign'
                            ? 'bg-primary text-black'
                            : 'bg-surface-container'
                    }`}
                >
                    Asignar
                </button>

                <button
                    onClick={() => setTab('remove')}
                    className={`px-6 py-2 rounded-xl ${
                        tab === 'remove'
                            ? 'bg-primary text-black'
                            : 'bg-surface-container'
                    }`}
                >
                    Quitar
                </button>

            </div>

            {/* SUCCESS MESSAGE */}
            {successMsg && (
                <div className="p-5 rounded-2xl bg-green-500 text-white font-bold">
                    {successMsg}
                </div>
            )}

            {/* CONTENT */}
            {tab === 'assign' && (
                <AssignUserJoc
                    users={users}
                    jocs={jocs}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

            {tab === 'remove' && (
                <RemoveUserJoc
                    users={users}
                    jocs={jocs}
                    setSuccessMsg={setSuccessMsg}
                />
            )}

        </div>
    )
}