import { createContext, useContext, useState } from "react"; // Importa hooks de React
import { createNoteRequest, getNotesRequest, deleteNoteRequest, getNoteRequest, updateNoteRequest } from "../api/notes.js"; // Importa funciones para manejar notas desde el API

// Crea un contexto para las notas
const NoteContext = createContext();

export const useNotes = () => {
    const context = useContext(NoteContext); // Utiliza el contexto de notas

    if (!context) {
        throw new Error("useNotes must be used within a NoteProvider"); // Lanza un error si el hook se usa fuera del proveedor
    }
    return context;
}

export function NoteProvider({ children }) {
    const [notes, setNotes] = useState([]); // Estado para almacenar las notas

    // Función para obtener todas las notas
    const getNotes = async () => {
        try {
            const res = await getNotesRequest(); // Hace la solicitud para obtener notas
            setNotes(res.data); // Establece las notas en el estado
        } catch (error) {
            console.error(error); // Maneja errores
        }
    }

    // Función para crear una nueva nota
    const createNote = async (note) => {
        const res = await createNoteRequest(note); // Hace la solicitud para crear una nota
        console.log(res); // Imprime la respuesta en la consola
    }

    // Función para eliminar una nota
    const deleteNote = async (id) => {
        try {
            const res = await deleteNoteRequest(id); // Hace la solicitud para eliminar una nota
            if (res.status === 204) setNotes(notes.filter(note => note._id !== id)); // Elimina la nota del estado si la solicitud fue exitosa
        } catch (error) {
            console.log(error); // Maneja errores
        }
    }

    // Función para obtener una nota específica
    const getNote = async (id) => {
        try {
            const res = await getNoteRequest(id); // Hace la solicitud para obtener una nota
            return res.data; // Retorna los datos de la nota
        } catch (error) {
            console.error(error); // Maneja errores
        }
    }

    // Función para actualizar una nota
    const updateNote = async (id, note) => {
        try {
            await updateNoteRequest(id, note); // Hace la solicitud para actualizar una nota
        } catch (error) {
            console.error(error); // Maneja errores
        }
    }

    // Proveedor del contexto de notas
    return (
        <NoteContext.Provider
            value={{ notes, createNote, getNotes, getNote, deleteNote, updateNote }}>
            {children} {/* Renderiza los componentes hijos */}
        </NoteContext.Provider>
    )
}
