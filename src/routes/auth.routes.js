import { Router } from "express"; // Importa el módulo Router de Express para crear un nuevo enrutador
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js"; //Importa las funciones de auth.controller

import { authRequired } from "../middlewares/validateToken.js"; // Importa el middleware que valida si el usuario está autenticado
import { validateSchema } from "../middlewares/validator.middleware.js"; // Importa el middleware que valida los esquemas
import { registerSchema, loginSchema } from "../schemas/auth.schema.js"; // Importa los esquemas de validación para registro y login

const router = Router(); // Crea una nueva instancia de enrutador de Express

// Define la ruta POST /register y aplica el middleware de validación de esquema y la función register
router.post("/register", validateSchema(registerSchema), register);

// Define la ruta POST /login y aplica el middleware de validación de esquema y la función login
router.post("/login", validateSchema(loginSchema), login);

// Define la ruta POST /logout y aplica la función logout
router.post("/logout", logout);

// Define la ruta GET /verify-token y aplica la función verifyToken
router.get("/verify-token", verifyToken);

// Define la ruta GET /profile y aplica el middleware authRequired y la función profile
router.get("/profile", authRequired, profile);

export default router; // Exporta el enrutador para que pueda ser utilizado en otros módulos
