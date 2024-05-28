import axios from "./axios"; // Importa la instancia de Axios configurada

// Función para registrar un usuario
export const registerRequest = (user) => axios.post(`/register`, user);
// Hace una solicitud POST a la ruta `/register` con los datos del usuario proporcionados

// Función para iniciar sesión
export const loginRequest = (user) => axios.post(`/login`, user);
// Hace una solicitud POST a la ruta `/login` con los datos del usuario proporcionados

// Función para verificar el token de autenticación
export const verifyTokenRequest = () => axios.get("/verify-token");
// Hace una solicitud GET a la ruta `/verify-token` para verificar la validez del token
