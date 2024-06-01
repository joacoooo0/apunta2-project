import mongoose from "mongoose";

const idUsuarios = new mongoose.Schema({
  idUni: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    requirted: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("idUsuario", idUsuarios);
