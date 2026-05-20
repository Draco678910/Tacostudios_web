import { useState, useRef } from 'react'
import { useForm } from '@inertiajs/react'

export default function CreateNoticia({ setSuccessMsg }) {

    const [previewImage, setPreviewImage] = useState(null)
    const fileInputRef = useRef(null)

    const { data, setData, post, reset } = useForm({
        titol: '',
        contingut: '',
        imatge: null,
    })

    const submit = (e) => {
        e.preventDefault()

        post('/admin/noticies', {
            forceFormData: true,
            onSuccess: () => {

                reset()

                // limpiar preview
                setPreviewImage(null)

                // limpiar input file real
                if (fileInputRef.current) {
                    fileInputRef.current.value = null
                }

                setSuccessMsg('Notícia creada correctament ✔')

                setTimeout(() => setSuccessMsg(null), 3000)
            }
        })
    }

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

        if (fileInputRef.current) {
            fileInputRef.current.value = null
        }
    }

    return (
        <form
            onSubmit={submit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >

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
                        ref={fileInputRef}
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
                        <p>Selecciona una imatge</p>
                    )}
                </label>

                <textarea
                    value={data.contingut}
                    onChange={(e) => setData('contingut', e.target.value)}
                    className="w-full p-6 bg-surface-container-low rounded-2xl min-h-[200px]"
                    placeholder="Contingut de la notícia"
                />

            </div>

            <div className="lg:col-span-4">

                <button className="w-full mt-6 p-5 bg-primary text-black font-black rounded-2xl">
                    Publicar notícia
                </button>

            </div>

        </form>
    )
}