// Middleware para validar el esquema de datos de una solicitud
export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body); // Parsea el cuerpo de la solicitud según el esquema proporcionado
    next(); // Llama a la siguiente función de middleware en la cadena
  } catch (error) {
    // Si hay un error al validar el esquema, devuelve un error de validación con los mensajes de error
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
