import { useState } from 'react'
import { usePage } from '@inertiajs/react'

import NoticiesForm from '../NoticiesForm/NoticiesForm';
import JocsForm from '../JocsForm/JocsForm';
import CategoriesForm from '../CategoriesForm/CategoriesForm';
import AdminTopBar from '../Sidebar/Sidebar';
import AdminUserJocsForm from '../UserJocsForm/UserJocsForm'

export default function Administracion() {

    const { categories } = usePage().props
    const [activeTab, setActiveTab] = useState('jocs')

    console.log('PROPS COMPLETOS:', usePage().props)

    return (
        <main className="md:ml-72 min-h-screen flex flex-col">

            <AdminTopBar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className="mt-20 px-6 md:px-12 py-12 grow max-w-6xl mx-auto w-full">

                {activeTab === 'jocs' && (
                    <JocsForm />
                )}

                {activeTab === 'categories' && (
                    <CategoriesForm categories={categories} />
                )}

                {activeTab === 'noticies' && (
                    <NoticiesForm />
                )}

                {activeTab === 'user-jocs' && (
                    <AdminUserJocsForm />
                )}
            </div>

        </main>
    )
}