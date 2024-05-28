import axios from "./axios.js"; // Importa la instancia de Axios configurada

// Función para obtener todas las notas
export const getNotesRequest = () => axios.get("/notes");
// Hace una solicitud GET a la ruta `/notes` para obtener todas las notas

// Función para obtener una nota específica por su ID
export const getNoteRequest = (id) => axios.get(`/notes/${id}`);
// Hace una solicitud GET a la ruta `/notes/{id}` para obtener una nota específica

// Función para crear una nueva nota
export const createNoteRequest = (note) => axios.post("/notes", note);
// Hace una solicitud POST a la ruta `/notes` con los datos de la nueva nota

// Función para actualizar una nota específica por su ID
export const updateNoteRequest = (id, note) => axios.put(`/notes/${id}`, note);
// Hace una solicitud PUT a la ruta `/notes/{id}` con los datos actualizados de la nota

// Función para eliminar una nota específica por su ID
export const deleteNoteRequest = (id) => axios.delete(`/notes/${id}`);
// Hace una solicitud DELETE a la ruta `/notes/{id}` para eliminar una nota específica
