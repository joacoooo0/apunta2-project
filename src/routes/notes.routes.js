import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/notes.controller.js";

const router = Router();

router.get("/notes", authRequired, getNotes);

router.get("/notes/:id", authRequired, getNote);

router.post("/notes", authRequired, createNote);

router.delete("/notes/:id", authRequired, deleteNote);

router.put("/notes/:id", authRequired, updateNote);

export default router;
