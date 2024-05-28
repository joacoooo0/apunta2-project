import mongoose from "mongoose"; // Importa el módulo mongoose para interactuar con MongoDB

// Define un esquema de mongoose para el modelo de notas
const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
    description: {
      type: String, // El tipo de dato es String
      required: true, // Este campo es obligatorio
    },
    date: {
      type: Date, // El tipo de dato es Date
      default: Date.now, // El valor predeterminado es la fecha y hora actual
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // El tipo de dato es ObjectId de mongoose
      ref: "User", // Hace referencia al modelo "User"
      required: true, // Este campo es obligatorio
    },
  },
  {
    timestamps: true, // Añade campos de marca de tiempo (createdAt y updatedAt) automáticamente
  }
);

// Crea y exporta un modelo de mongoose llamado "Note" basado en el esquema definido
export default mongoose.model("Note", notesSchema);
