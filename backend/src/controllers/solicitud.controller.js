import Solicitud from "../models/Solicitud.js"

export const crearSolicitud = async(req,res)=>{

const solicitud = new Solicitud(req.body)

await solicitud.save()

res.json(solicitud)

}

export const listarSolicitudes = async(req,res)=>{

const data = await Solicitud.find()

res.json(data)

}

export const obtenerSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitud.findById(req.params.id)
        if (!solicitud) return res.status(404).json({ mensaje: "Solicitud no encontrada" })
        res.json(solicitud)
    } catch (err) {
        res.status(500).json({ mensaje: "Error del servidor" })
    }
}