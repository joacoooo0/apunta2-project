import { useNotes } from "../Context/NotesContext.jsx";
import { Link } from "react-router-dom";

function NoteCard({ note }) {

    const { deleteNote } = useNotes()
    return (
        <div className="bg-[#3d5223] max-w-md w-full p-10 rounded-md">
            <h1 className="text-2xl font-bold">{note.title}</h1>
            <div>
                <button onClick={() => { deleteNote(note._id) }}>Eliminar</button>
                <Link to={`/notes/${note._id}`}>Actualizar</Link>
            </div>
            <p className="text-black">{note.description}</p>
            <p>{new Date(note.date).toLocaleDateString()}</p>
        </div>
    )
}

export default NoteCard