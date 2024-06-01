import mongoose from "mongoose";

const idSchema = new mongoose.Schema({
  idUni: {
    type: String,
    required: true,
    unique: true,
  },
});

const idUsuarios = mongoose.model("idUsuarios", idSchema);
export default idUsuarios;
