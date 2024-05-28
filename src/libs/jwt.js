import { TOKEN_SECRET } from "../config.js"; // Importa la constante TOKEN_SECRET desde el archivo de configuración
import jwt from "jsonwebtoken"; // Importa el módulo jsonwebtoken para trabajar con JSON Web Tokens

// Define y exporta una función llamada createAccessToken que crea un token de acceso
export function createAccessToken(payload) {
  // Retorna una nueva promesa
  return new Promise((resolve, reject) => {
    // Utiliza jwt.sign para crear un token
    jwt.sign(
      payload, // El payload del token (datos que queremos almacenar en el token)
      TOKEN_SECRET, // La clave secreta para firmar el token
      {
        expiresIn: "1d", // El token expira en 1 día
      },
      (err, token) => {
        // Callback que se ejecuta después de intentar crear el token
        if (err) reject(err); // Si hay un error, rechaza la promesa con el error
        resolve(token); // Si no hay error, resuelve la promesa con el token
      }
    );
  });
}
