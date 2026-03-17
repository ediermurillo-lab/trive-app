import mongoose from "mongoose"

const SolicitudSchema = new mongoose.Schema({
    nombre:     { type: String, required: true },
    identidad:  { type: String, required: true },
    correo:     { type: String, required: true },
    ubicacion:  { type: String, required: true },
    tipoServicio: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: {
        type: String,
        default: "PENDIENTE"
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Solicitud", SolicitudSchema)