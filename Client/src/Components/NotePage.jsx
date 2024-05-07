import { useForm } from "react-hook-form"
import { useNotes } from "../Context/NotesContext"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"


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
        <div className="bg-black">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    {...register("title")}
                    autoFocus
                    placeholder="Titulo" />

                <textarea
                    rows='3'
                    {...register('description')}
                    placeholder="Descripcion">

                </textarea>
                <button className="bg-blue-400">
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default NotePage