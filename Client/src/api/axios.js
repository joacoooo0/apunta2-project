import axios from "axios"; // Importa Axios, una librería para hacer solicitudes HTTP

// Crea una instancia de Axios con una configuración personalizada
const instance = axios.create({
  baseURL: "http://localhost:4000/api", // Establece la URL base para las solicitudes
  withCredentials: true, // Indica que las solicitudes deben incluir credenciales (cookies, autenticación HTTP)
});

// Exporta la instancia configurada de Axios
export default instance;
