import Tecnico from "../models/Tecnico.js"

export const guardarTecnico = async(req,res)=>{

await Tecnico.updateOne(

{usuario:req.body.usuario},
req.body,
{upsert:true}

)

res.json({ok:true})

}

export const obtenerTecnico = async(req,res)=>{

const tecnico = await Tecnico.findOne({usuario:req.params.usuario})

res.json(tecnico || {})

}

export const listarTecnicos = async (req, res) => {
    try {
        const tecnicos = await Tecnico.find()
        res.json(tecnicos)
    } catch(err) {
        res.status(500).json({ mensaje: "Error al listar técnicos" })
    }
}