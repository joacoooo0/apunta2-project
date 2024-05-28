import express from "express"; // Importa el módulo Express para crear el servidor
import morgan from "morgan"; // Importa el middleware Morgan para el registro de solicitudes HTTP
import authRoutes from "./routes/auth.routes.js"; // Importa las rutas de autenticación desde auth.routes.js
import notesRoutes from "./routes/notes.routes.js"; // Importa las rutas de notas desde notes.routes.js
import cookieParser from "cookie-parser"; // Importa el middleware cookie-parser para manejar cookies
import cors from "cors"; // Importa el middleware CORS para permitir solicitudes de recursos cruzados

const app = express(); // Crea una instancia de la aplicación Express

app.use(
  cors({
    origin: "http://localhost:5173", // Permite solicitudes CORS desde esta URL específica
    credentials: true, // Permite el envío de cookies en solicitudes CORS
  })
);

app.use(morgan("dev")); // Usa Morgan para registrar las solicitudes HTTP en el modo "dev"
app.use(express.json()); // Usa el middleware de Express para parsear cuerpos de solicitud JSON
app.use(cookieParser()); // Usa el middleware cookie-parser para parsear cookies

app.use("/api", authRoutes); // Monta las rutas de autenticación bajo el prefijo /api
app.use("/api", notesRoutes); // Monta las rutas de notas bajo el prefijo /api

export default app; // Exporta la instancia de la aplicación Express para que pueda ser utilizada en otros módulos
