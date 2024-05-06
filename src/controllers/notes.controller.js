import Note from "../models/notes.model.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).populate("user");
  res.json(notes);
};

export const getNote = async (req, res) => {
  const note = await Note.findById(req.params.id).populate("user");
  if (!note) return res.status(404).json({ message: "Nota no encontrada" });
  res.json(note);
};

export const createNote = async (req, res) => {
  const { title, description, date } = req.body;
  const newNote = new Note({
    title,
    description,
    date,
    user: req.user.id,
  });
  const savedNote = await newNote.save();
  res.json(savedNote);
};

export const deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) return res.status(404).json({ message: "Nota no encontrada" });
  return res.sendStatus(204);
};

export const updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!note) return res.status(404).json({ message: "Nota no encontrada" });
  res.json(note);
};
