import { useState, useRef } from 'react'
import { useForm } from '@inertiajs/react'

export default function EditJoc({
    jocs = [],
    categories = [],
    existingFiles = [],
    setSuccessMsg
}) {

    const [selected, setSelected] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    const fileInputRef = useRef(null)
    const gameFileRef = useRef(null)

    const {
        data,
        setData,
        put,
        reset
    } = useForm({
        id: '',
        nom: '',
        descripcio: '',
        category_id: '',
        preu: '',
        imatge: null,

        // 🎮 MISMO SISTEMA QUE CREATE
        launch_type: 'url',
        launch_value: '',
        launch_file: null,
        existing_file: '',
    })

    // 🔎 SELECT JUEGO
    const handleSelect = (id) => {

        const joc = jocs.find(j => j.id === Number(id))
        if (!joc) return

        setSelected(joc)

        setData({
            id: joc.id,
            nom: joc.nom,
            descripcio: joc.descripcio || '',
            category_id: joc.category_id,
            preu: joc.preu ?? 0,
            imatge: null,

            // 🎮 IMPORTANTE: cargar launch
            launch_type: joc.launch_type || 'url',
            launch_value: joc.launch_value || '',
            launch_file: null,
            existing_file: '',
        })

        setPreviewImage(joc.imatge || null)
    }

    // 🖼️ IMAGEN
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

    // 📦 FILE UPLOAD
    const handleGameFile = (e) => {

        const file = e.target.files[0]
        if (!file) return

        setData('launch_file', file)
        setData('existing_file', '')

        if (gameFileRef.current) {
            gameFileRef.current.value = null
        }
    }

    // 💾 SAVE
    const submit = (e) => {

        e.preventDefault()

        put(`/admin/jocs/${data.id}`, {
            forceFormData: true,

            onSuccess: () => {
                setSuccessMsg('Joc modificat ✔')
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
                <label className="block mb-2 text-on-surface-variant">
                    Selecciona un joc
                </label>

                <select
                    value={selected?.id || ''}
                    onChange={(e) => handleSelect(e.target.value)}
                    className="w-full p-4 bg-surface-container rounded-xl"
                >
                    <option value="">-- Selecciona --</option>

                    {jocs.map(j => (
                        <option key={j.id} value={j.id}>
                            {j.nom}
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
                            value={data.nom}
                            onChange={(e) => setData('nom', e.target.value)}
                            className="w-full bg-surface-container-low rounded-2xl p-6 text-3xl font-black"
                        />

                        <input
                            type="number"
                            value={data.preu}
                            onChange={(e) => setData('preu', e.target.value)}
                            className="w-full bg-surface-container-low rounded-2xl p-6 text-2xl font-bold"
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
                                <p>Selecciona imagen</p>
                            )}
                        </label>

                        <textarea
                            value={data.descripcio}
                            onChange={(e) => setData('descripcio', e.target.value)}
                            className="w-full p-6 bg-surface-container-low rounded-2xl min-h-[200px]"
                        />

                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* CATEGORY */}
                        <select
                            value={data.category_id}
                            onChange={(e) => setData('category_id', e.target.value)}
                            className="w-full p-4 rounded-xl bg-surface-container"
                        >
                            <option value="">Categoria</option>

                            {categories.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.nom}
                                </option>
                            ))}
                        </select>

                        {/* TYPE */}
                        <select
                            value={data.launch_type}
                            onChange={(e) => setData('launch_type', e.target.value)}
                            className="w-full p-4 rounded-xl bg-surface-container"
                        >
                            <option value="url">URL</option>
                            <option value="file">Archivo</option>
                        </select>

                        {/* URL */}
                        {data.launch_type === 'url' && (
                            <input
                                value={data.launch_value}
                                onChange={(e) => setData('launch_value', e.target.value)}
                                className="w-full p-4 rounded-xl bg-surface-container"
                                placeholder="https://..."
                            />
                        )}

                        {/* FILES */}
                        {data.launch_type === 'file' && (
                            <div className="space-y-4">

                                <input
                                    ref={gameFileRef}
                                    type="file"
                                    onChange={handleGameFile}
                                    className="w-full p-4 rounded-xl bg-surface-container"
                                />

                                <select
                                    value={data.existing_file}
                                    onChange={(e) => setData('existing_file', e.target.value)}
                                    className="w-full p-4 rounded-xl bg-surface-container"
                                >
                                    <option value="">Archivo existente</option>

                                    {existingFiles.map((file) => (
                                        <option key={file} value={file}>
                                            {file}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        )}

                        <button className="w-full p-5 bg-primary text-black font-black rounded-2xl">
                            Guardar
                        </button>

                    </div>

                </form>
            )}
        </div>
    )
}