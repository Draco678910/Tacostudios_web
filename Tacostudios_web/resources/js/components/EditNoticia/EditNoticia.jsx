import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function EditNoticia({ noticies = [], setSuccessMsg }) {

    const [selected, setSelected] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    const {
        data,
        setData,
        put,
        reset
    } = useForm({
        id: '',
        titol: '',
        contingut: '',
        imatge: null,
    })

    // 🔎 seleccionar noticia
    const handleSelect = (id) => {
        const noticia = noticies.find(n => n.id === Number(id))
        if (!noticia) return

        setSelected(noticia)

        setData({
            id: noticia.id,
            titol: noticia.titol,
            contingut: noticia.contingut || '',
            imatge: null,
        })

        setPreviewImage(noticia.imatge || null)
    }

    // 🖼️ IMAGE UPLOAD
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        setData('imatge', file)

        const reader = new FileReader()
        reader.onload = (ev) => setPreviewImage(ev.target.result)
        reader.readAsDataURL(file)
    }

    const removeImage = () => {
        setPreviewImage(null)
        setData('imatge', null)
    }

    // 💾 submit edición
    const submit = (e) => {
        e.preventDefault()

        put(`/admin/noticies/${data.id}`, {
            forceFormData: true,
            onSuccess: () => {
                setSuccessMsg('Notícia modificada ✔')
                setTimeout(() => setSuccessMsg(null), 3000)

                reset()
                setSelected(null)
                setPreviewImage(null)
            }
        })
    }

    return (
        <div className="space-y-6">

            {/* SELECT */}
            <div>
                <label className="block text-sm mb-2 text-on-surface-variant">
                    Selecciona una notícia per editar
                </label>

                <select
                    value={selected?.id || ''}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="w-full p-4 bg-surface-container rounded-xl"
                >
                    <option value="">-- Selecciona una notícia --</option>

                    {noticies.map(n => (
                        <option key={n.id} value={n.id}>
                            {n.titol}
                        </option>
                    ))}
                </select>
            </div>

            {/* FORM */}
            {data.id && (
                <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT */}
                    <div className="lg:col-span-8 space-y-10">

                        <input
                            value={data.titol}
                            onChange={(e) => setData('titol', e.target.value)}
                            className="w-full bg-surface-container-low rounded-2xl p-6 text-3xl font-black"
                            placeholder="Títol de la notícia"
                        />

                        {/* IMAGE */}
                        <label className="relative cursor-pointer rounded-2xl border-2 border-dashed min-h-[420px] flex items-center justify-center bg-surface-container overflow-hidden">

                            <input
                                type="file"
                                className="hidden"
                                onChange={handleImageChange}
                            />

                            {previewImage ? (
                                <>
                                    <img
                                        src={previewImage}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="relative z-10 bg-red-500 px-4 py-2 rounded-xl text-white"
                                    >
                                        Eliminar
                                    </button>
                                </>
                            ) : (
                                <p className="text-on-surface-variant">
                                    Selecciona una imatge
                                </p>
                            )}
                        </label>

                        <textarea
                            value={data.contingut}
                            onChange={(e) => setData('contingut', e.target.value)}
                            className="w-full p-6 bg-surface-container-low rounded-2xl min-h-[200px]"
                            placeholder="Contingut"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4">

                        <button className="w-full mt-6 p-5 bg-primary text-black font-black rounded-2xl">
                            Modificar notícia
                        </button>

                    </div>

                </form>
            )}
        </div>
    )
}