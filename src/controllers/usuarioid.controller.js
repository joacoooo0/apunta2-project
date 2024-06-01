import idUsuarios from "../models/id.model.js";

export const registerId = async (req, res) => {
  const { idUni } = req.body;

  try {
    // Verifica si el código ya está registrado
    const userFound = await idUsuarios.findOne({ idUni });
    if (userFound) return res.status(400).json(["El código ya existe"]);

    // Crea un nuevo registro con idUni
    const newIdUser = new idUsuarios({
      idUni,
    });

    // Guarda el nuevo registro en la base de datos
    const idSaved = await newIdUser.save();

    // Devuelve los datos del registro en la respuesta
    res.json({
      idUni: idSaved.idUni,
    });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ message: error.message });
  }
};

export const verifyId = async (req, res) => {
  const { idUni } = req.body;

  try {
    // Busca el registro por idUni
    const idFound = await idUsuarios.findOne({ idUni });
    if (!idFound) {
      return res.status(400).json({ message: "Código no existe" });
    } else {
      res.json({ message: "Codigo encontrado" });
    }

    // res.json({
    //   idUni: idFound.idUni,
    // });
  } catch (error) {
    // Manejo de errores
    res.status(500).json({ message: error.message });
  }
};
