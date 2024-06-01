import { Router } from "express";
import { verifyId, registerId } from "../controllers/usuarioid.controller.js";

const router = Router();

router.post("/registerId", registerId);
router.post("/verifyId", verifyId);

export default router;
