import app from "./app.js"; // Importa la app desde el archivo app.js
import { ConnectDB } from "./db.js"; // Importa la función ConnectDB desde el archivo db.js

// Llama a la función ConnectDB para establecer una conexión con la base de datos
ConnectDB();

// Inicia el servidor de app y hace que escuche en el puerto 4000
app.listen(4000);

// Imprime en la consola un mensaje indicando que el servidor está corriendo en el puerto 4000
console.log("Server on port", 4000);
