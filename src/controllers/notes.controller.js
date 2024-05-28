import Note from "../models/notes.model.js"; // Importa el modelo de notas

// Controlador para obtener todas las notas de un usuario
export const getNotes = async (req, res) => {
  try {
    // Busca todas las notas del usuario actual y las devuelve, pobladas con los datos del usuario
    const notes = await Note.find({ user: req.user.id }).populate("user");
    res.json(notes);
  } catch (error) {
    // Manejo de errores: devuelve un mensaje de error si hay un problema
    return res.status(500).json({ message: "Nota no encontrada" });
  }
};

// Controlador para obtener una nota específica por su ID
export const getNote = async (req, res) => {
  try {
    // Busca la nota por su ID y la devuelve, poblada con los datos del usuario
    const note = await Note.findById(req.params.id).populate("user");
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    res.json(note);
  } catch (error) {
    // Manejo de errores: devuelve un mensaje de error si hay un problema
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};

// Controlador para crear una nueva nota
export const createNote = async (req, res) => {
  try {
    // Extrae los campos del cuerpo de la solicitud
    const { title, description, date } = req.body;
    // Crea una nueva instancia de nota con los datos proporcionados y el ID del usuario actual
    const newNote = new Note({
      title,
      description,
      date,
      user: req.user.id,
    });
    // Guarda la nueva nota en la base de datos
    const savedNote = await newNote.save();
    // Devuelve la nueva nota creada
    res.json(savedNote);
  } catch (error) {
    // Manejo de errores: devuelve un mensaje de error si hay un problema
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};

// Controlador para eliminar una nota por su ID
export const deleteNote = async (req, res) => {
  try {
    // Busca la nota por su ID y la elimina
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    // Devuelve un código de estado 204 (Sin contenido) si la eliminación es exitosa
    return res.sendStatus(204);
  } catch (error) {
    // Manejo de errores: devuelve un mensaje de error si hay un problema
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};

// Controlador para actualizar una nota por su ID
export const updateNote = async (req, res) => {
  try {
    // Busca la nota por su ID y la actualiza con los datos proporcionados en el cuerpo de la solicitud
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve la nota actualizada en lugar de la antigua
    });
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    // Devuelve la nota actualizada
    res.json(note);
  } catch (error) {
    // Manejo de errores: devuelve un mensaje de error si hay un problema
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};
