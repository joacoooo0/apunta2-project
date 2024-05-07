import { createContext, useContext, useState } from "react";
import { createNoteRequest, getNotesRequest, deleteNoteRequest, getNoteRequest, updateNoteRequest } from "../api/notes.js";

const NoteContext = createContext()

export const useNotes = () => {
    const context = useContext(NoteContext)

    if (!context) {
        throw new Error("useNotes must be used within a TaskProvider")
    }
    return context
}

export function NoteProvider({ children }) {

    const [notes, setNotes] = useState([])

    const getNotes = async () => {
        try {
            const res = await getNotesRequest()
            setNotes(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const createNote = async (note) => {
        const res = await createNoteRequest(note)
        console.log(res)
    }

    const deleteNote = async (id) => {
        try {
            const res = await deleteNoteRequest(id)
            if (res.status === 204) setNotes(notes.filter(note => note._id !== id))
        } catch (error) {
            console.log(error)
        }

    }

    const getNote = async (id) => {
        try {
            const res = await getNoteRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateNote = async (id, note) => {
        try {
            await updateNoteRequest(id, note)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <NoteContext.Provider
            value={{ notes, createNote, getNotes, getNote, deleteNote, updateNote }}>
            {children}
        </NoteContext.Provider>
    )
}