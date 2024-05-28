import mongoose from "mongoose"; // Importa el módulo mongoose para interactuar con MongoDB

// Exporta una función asíncrona llamada ConnectDB
export const ConnectDB = async () => {
  try {
    // Intenta establecer una conexión con la base de datos MongoDB ubicada en mongodb://localhost/merndb
    await mongoose.connect("mongodb://localhost:27017/merndb");
    // Si la conexión es exitosa, imprime "db connect" en la consola
    console.log("db connect");
  } catch (error) {
    // Si ocurre un error durante la conexión, captura el error y
    // imprime el error en la consola
    console.error(error);
  }
};
