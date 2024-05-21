import { useNotes } from "../Context/NotesContext.jsx";
import { Link } from "react-router-dom";

function NoteCard({ notes }) {
    const { deleteNote } = useNotes();

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
            {notes.length === 0 ? (
                <p className="text-center flex items-center justify-center text-white bg-blue-600 h-[40px]">No hay notas</p>
            ) : (
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Titulo de Apunte
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descripcion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Opciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note) => (
                            <tr key={note._id} className="bg-blue-500 border-b border-blue-400">
                                <td className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    {note.title}
                                </td>
                                <td className="px-6 py-4">
                                    {note.description}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(note.date).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => deleteNote(note._id)} className="font-medium text-white hover:underline"><span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Eliminar</span></button>
                                    <Link to={`/notes/${note._id}`} className="font-medium text-white hover:underline ml-2"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Actualizar</span></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default NoteCard;
