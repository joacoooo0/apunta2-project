import Note from "../models/notes.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).populate("user");
    res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: "Nota no encontrada" });
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).populate("user");
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    res.json(note);
  } catch (error) {
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newNote = new Note({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    res.json(note);
  } catch (error) {
    return res.status(404).json({ message: "Nota no encontrada" });
  }
};
