import { useState, useRef } from 'react'
import { useForm, router } from '@inertiajs/react'

export default function CreateJoc({
    categories,
    setSuccessMsg,
    existingFiles = []
}) {

    const [previewImage, setPreviewImage] = useState(null)

    const fileInputRef = useRef(null)

    const gameFileRef = useRef(null)

    const { data, setData, post, reset } = useForm({
        nom: '',
        descripcio: '',
        imatge: null,
        category_id: '',
        preu: '',

        // launch
        launch_type: 'url',
        launch_value: '',
        launch_file: null,
        existing_file: '',
    })

    const submit = (e) => {

        e.preventDefault()

        post('/admin/jocs', {
            forceFormData: true,

            onSuccess: () => {

                reset()

                setPreviewImage(null)

                if (fileInputRef.current) {
                    fileInputRef.current.value = null
                }

                if (gameFileRef.current) {
                    gameFileRef.current.value = null
                }

                setSuccessMsg('Joc creat correctament ✔')

                setTimeout(() => {
                    setSuccessMsg(null)
                }, 3000)

                router.reload({
                    only: ['jocs']
                })
            }
        })
    }

    const handleImageChange = (e) => {

        const file = e.target.files[0]

        if (!file) return

        setData('imatge', file)

        const reader = new FileReader()

        reader.onload = (ev) => {
            setPreviewImage(ev.target.result)
        }

        reader.readAsDataURL(file)
    }

    const removeImage = () => {

        setPreviewImage(null)

        setData('imatge', null)

        if (fileInputRef.current) {
            fileInputRef.current.value = null
        }
    }

    const handleGameFile = (e) => {

        const file = e.target.files[0]

        if (!file) return

        setData('launch_file', file)

        // limpia selector de archivos existentes
        setData('existing_file', '')
    }

    return (
        <form
            onSubmit={submit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >

            {/* LEFT */}
            <div className="lg:col-span-8 space-y-10">

                {/* NOMBRE */}
                <input
                    value={data.nom}
                    onChange={(e) => setData('nom', e.target.value)}
                    className="w-full bg-surface-container-low rounded-2xl p-6 text-3xl font-black"
                    placeholder="Nom del joc"
                />

                {/* PRECIO */}
                <input
                    type="number"
                    value={data.preu}
                    onChange={(e) => setData('preu', e.target.value)}
                    className="w-full bg-surface-container-low rounded-2xl p-6 text-2xl font-bold"
                    placeholder="Preu"
                />

                {/* IMAGEN */}
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
                        <p className="text-on-surface-variant">
                            Selecciona una imatge
                        </p>
                    )}

                </label>

                {/* DESCRIPCIÓN */}
                <textarea
                    value={data.descripcio}
                    onChange={(e) => setData('descripcio', e.target.value)}
                    className="w-full p-6 bg-surface-container-low rounded-2xl min-h-[200px]"
                    placeholder="Descripció del joc..."
                />

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4 space-y-6">

                {/* CATEGORÍA */}
                <select
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    className="w-full p-4 rounded-xl bg-surface-container"
                >
                    <option value="" disabled hidden>
                        Selecciona categoria
                    </option>

                    {categories?.map(c => (
                        <option
                            key={c.id}
                            value={c.id}
                        >
                            {c.nom}
                        </option>
                    ))}
                </select>

                {/* TIPO */}
                <div>

                    <label className="block mb-2 font-bold">
                        Tipus de llançament
                    </label>

                    <select
                        value={data.launch_type}
                        onChange={(e) => setData('launch_type', e.target.value)}
                        className="w-full p-4 rounded-xl bg-surface-container"
                    >
                        <option value="url">
                            URL
                        </option>

                        <option value="file">
                            Archivo
                        </option>
                    </select>

                </div>

                {/* URL */}
                {data.launch_type === 'url' && (

                    <div>

                        <label className="block mb-2 font-bold">
                            URL del joc
                        </label>

                        <input
                            type="text"
                            value={data.launch_value}
                            onChange={(e) => setData('launch_value', e.target.value)}
                            className="w-full p-4 rounded-xl bg-surface-container"
                            placeholder="https://mi-juego.com"
                        />

                    </div>

                )}

                {/* ARCHIVOS */}
                {data.launch_type === 'file' && (

                    <div className="space-y-5">

                        {/* SUBIR NUEVO */}
                        <div>

                            <label className="block mb-2 font-bold">
                                Subir archivo
                            </label>

                            <input
                                ref={gameFileRef}
                                type="file"
                                onChange={handleGameFile}
                                className="w-full p-4 rounded-xl bg-surface-container"
                            />

                        </div>

                        {/* EXISTENTES */}
                        <div>

                            <label className="block mb-2 font-bold">
                                O usar archivo existente
                            </label>

                            <select
                                value={data.existing_file}
                                onChange={(e) => {

                                    setData('existing_file', e.target.value)

                                    // limpia upload
                                    setData('launch_file', null)

                                    if (gameFileRef.current) {
                                        gameFileRef.current.value = null
                                    }
                                }}
                                className="w-full p-4 rounded-xl bg-surface-container"
                            >
                                <option value="">
                                    Selecciona archivo
                                </option>

                                {existingFiles.map((file) => (
                                    <option
                                        key={file}
                                        value={file}
                                    >
                                        {file}
                                    </option>
                                ))}

                            </select>

                        </div>

                    </div>

                )}

            
                <button className="w-full p-5 bg-primary text-black font-black rounded-2xl hover:scale-[1.02] transition">
                    Publicar
                </button>

            </div>

        </form>
    )
}   