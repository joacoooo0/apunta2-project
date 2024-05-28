import { Router } from "express"; // Importa el módulo Router de Express para crear un nuevo enrutador
import { authRequired } from "../middlewares/validateToken.js"; // Importa el middleware que valida si el usuario está autenticado
import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/notes.controller.js";

const router = Router(); // Crea una nueva instancia de enrutador de Express

// Define la ruta GET /notes, aplica el middleware authRequired y la función getNotes
router.get("/notes", authRequired, getNotes);

// Define la ruta GET /notes/:id, aplica el middleware authRequired y la función getNote
router.get("/notes/:id", authRequired, getNote);

// Define la ruta POST /notes, aplica el middleware authRequired y la función createNote
router.post("/notes", authRequired, createNote);

// Define la ruta DELETE /notes/:id, aplica el middleware authRequired y la función deleteNote
router.delete("/notes/:id", authRequired, deleteNote);

// Define la ruta PUT /notes/:id, aplica el middleware authRequired y la función updateNote
router.put("/notes/:id", authRequired, updateNote);

export default router; // Exporta el enrutador para que pueda ser utilizado en otros módulos
