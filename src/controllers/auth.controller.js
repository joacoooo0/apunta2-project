import User from "../models/user.model.js"; // Importa el modelo de usuario
import bcrypt from "bcryptjs"; // Importa bcrypt para el hashing de contraseñas
import { createAccessToken } from "../libs/jwt.js"; // Importa la función para crear tokens de acceso
import jwt from "jsonwebtoken"; // Importa jsonwebtoken para trabajar con tokens JWT
import { TOKEN_SECRET } from "../config.js"; // Importa la clave secreta para firmar los tokens JWT

// Controlador para el registro de usuarios
export const register = async (req, res) => {
  const {
    nombres,
    apellidos,
    edad,
    email,
    password,
    username,
    carreraUni,
    ciclo,
  } = req.body;

  try {
    // Verifica si el email ya está registrado
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["The email is already exists"]);

    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const newUser = new User({
      nombres,
      apellidos,
      edad,
      email,
      password: passwordHash,
      username,
      carreraUni,
      ciclo,
    });

    // Guarda el nuevo usuario en la base de datos
    const userSaved = await newUser.save();

    // Crea un token de acceso
    const token = await createAccessToken({ id: userSaved._id });

    // Establece el token como cookie
    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    // Devuelve los datos del usuario registrado en la respuesta
    res.json({
      id: userSaved._id,
      nombres: userSaved.nombres,
      apellidos: userSaved.apellidos,
      edad: userSaved.edad,
      username: userSaved.username,
      email: userSaved.email,
      carreraUni: userSaved.carreraUni,
      ciclo: userSaved.ciclo,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updateAt,
    });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ message: error.message });
  }
};

// Controlador para el inicio de sesión
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario por email
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    // Crea un token de acceso
    const token = await createAccessToken({ id: userFound._id });

    // Establece el token como cookie
    res.cookie("token", token);

    // Devuelve los datos básicos del usuario en la respuesta
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updateAt: userFound.updateAt,
    });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ message: error.message });
  }
};

// Controlador para cerrar sesión
export const logout = (req, res) => {
  // Elimina la cookie que contiene el token
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200); // Devuelve 200 OK
};

// Controlador para obtener el perfil del usuario
export const profile = async (req, res) => {
  // Busca el usuario por su ID
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  // Devuelve los datos del usuario en la respuesta
  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updateAt: userFound.updateAt,
  });
};

// Controlador para verificar el token de acceso
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No autorizado" });

  // Verifica el token con la clave secreta
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    // Busca el usuario por su ID
    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.status(401).json({
        message: "No autorizado",
      });

    // Devuelve los datos del usuario en la respuesta
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
