import Cotizacion from "../models/Cotizacion.js"

export const consultarTicket = async(req,res)=>{

try{

const ticket = await Cotizacion.findOne({id:req.params.id})

if(!ticket){

return res.status(404).json({error:"no encontrado"})

}

res.json(ticket)

}catch(error){

res.status(500).json({error:"error servidor"})

}

}