import jwt from "jsonwebtoken"; // Importa jsonwebtoken para trabajar con tokens JWT
import { TOKEN_SECRET } from "../config.js"; // Importa la clave secreta para firmar los tokens JWT

// Middleware para verificar si el usuario está autenticado
export const authRequired = (req, res, next) => {
  const { token } = req.cookies; // Extrae el token de las cookies de la solicitud

  // Si no hay token, devuelve un error de autorización
  if (!token)
    return res.status(401).json({ message: "No token, autorizacion denegada" });

  // Verifica el token con la clave secreta
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    // Si hay un error al verificar el token, devuelve un error de autorización
    if (err) return res.status(401).json({ message: "Invalid token" });

    // Si el token es válido, asigna los datos del usuario al objeto 'req.user'
    req.user = user;

    // Llama a la siguiente función de middleware en la cadena
    next();
  });
};
