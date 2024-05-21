import { useForm } from "react-hook-form"
import { useNotes } from "../Context/NotesContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import Dashboard from "./Dashboard"


function NotePage() {
    const { register, handleSubmit, setValue } = useForm()
    const { createNote, getNote, updateNote } = useNotes()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadNote() {
            if (params.id) {
                const note = await getNote(params.id)
                console.log(note)
                setValue('title', note.title)
                setValue('description', note.description)
            }
        }
        loadNote()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateNote(params.id, data)
        } else {
            createNote(data)

        }
        navigate("/notes")
    })

    return (
        <div className="bg-black h-screen grid items-center justify-center dark:bg-[#5a7e32]">

            <form onSubmit={onSubmit}>
                <h1 className="text-3xl font-bold text-white mb-5">NUEVO APUNTE</h1>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                    <input
                        className="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        {...register("title")}
                        autoFocus
                        required
                        placeholder="Titulo" />
                </div>
                <div className="mb-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea
                        className="block w-[300px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        rows='3'
                        required
                        {...register('description')}
                        placeholder="Descripcion">
                    </textarea>
                </div>
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Guardar</button>
                <a href="/dashboard" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Volver al dashboard</a>
            </form>

        </div>
    )
}

export default NotePage