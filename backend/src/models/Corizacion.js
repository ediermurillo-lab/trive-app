import mongoose from "mongoose"

const CotizacionSchema = new mongoose.Schema({

id:{
type:String,
unique:true
},

nombre:String,

identidad:String,

correo:String,

ubicacion:String,

tipoServicio:String,

descripcion:String,

estado:{
type:String,
default:"PENDIENTE"
},

fecha:{
type:Date,
default:Date.now
}

})

export default mongoose.model("Cotizacion",CotizacionSchema)