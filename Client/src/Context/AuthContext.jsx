import { createContext, useState, useContext, useEffect } from "react"; // Importa hooks de React
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js"; // Importa funciones de autenticación desde el API
import Cookies from "js-cookie"; // Importa la librería js-cookie para manejar cookies

// Crea un contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider"); // Lanza un error si el hook se usa fuera del proveedor
    }
    return context;
}

// Proveedor de autenticación que envuelve la aplicación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado para el usuario
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar si el usuario está autenticado
    const [errors, setErrors] = useState([]); // Estado para manejar errores
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    // Función de registro
    const signup = async (user) => {
        try {
            const res = await registerRequest(user); // Hace la solicitud de registro
            console.log(res.data);
            setIsAuthenticated(true); // Marca al usuario como autenticado
            setUser(res.data); // Establece los datos del usuario
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data); // Maneja errores
        }
    }

    // Función de inicio de sesión
    const signin = async (user) => {
        try {
            const res = await loginRequest(user); // Hace la solicitud de inicio de sesión
            console.log(res);
            setIsAuthenticated(true); // Marca al usuario como autenticado
            setUser(res.data); // Establece los datos del usuario
        } catch (error) {
            console.log(error);
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data); // Maneja errores si es un array
            }
            setErrors(error.response.data.message); // Maneja errores
        }
    }

    // Función de cierre de sesión
    const logout = () => {
        Cookies.remove("token"); // Elimina el token de las cookies
        setIsAuthenticated(false); // Marca al usuario como no autenticado
        setUser(null); // Resetea los datos del usuario
    }

    // Efecto para limpiar errores después de 3 segundos
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]); // Limpia los errores
            }, 3000);
            return () => clearTimeout(timer); // Limpia el temporizador al desmontar
        }
    }, [errors]);

    // Efecto para verificar el estado de autenticación al cargar el componente
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get(); // Obtiene las cookies
            if (!cookies.token) {
                setIsAuthenticated(false); // Si no hay token, marca al usuario como no autenticado
                setLoading(false);
                return setUser(null); // Resetea los datos del usuario
            }
            try {
                const res = await verifyTokenRequest(cookies.token); // Verifica el token
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true); // Marca al usuario como autenticado
                setUser(res.data); // Establece los datos del usuario
                setLoading(false);
            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin(); // Llama a la función de verificación
    }, []);

    // Proveedor del contexto de autenticación
    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors
        }}>
            {children} {/* Renderiza los componentes hijos */}
        </AuthContext.Provider>
    )
}
