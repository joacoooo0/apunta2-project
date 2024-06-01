import mongoose from "mongoose"; // Importa el módulo mongoose para interactuar con MongoDB

// Define un esquema de mongoose para el modelo de usuario
const userSchema = new mongoose.Schema(
  {
    nombres: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
    apellidos: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
    edad: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
      trim: true, // Elimina espacios en blanco al inicio y al final del valor
    },
    username: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
      trim: true, // Elimina espacios en blanco al inicio y al final del valor
      unique: true, // El valor debe ser único en la colección
    },
    email: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
      trim: true, // Elimina espacios en blanco al inicio y al final del valor
      unique: true, // El valor debe ser único en la colección
    },
    password: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
    carreraUni: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
    ciclo: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
  },
  {
    timestamps: true, // Añade campos de marca de tiempo (createdAt y updatedAt) automáticamente
  }
);

// Crea y exporta un modelo de mongoose llamado "User" basado en el esquema definido
export default mongoose.model("User", userSchema);
