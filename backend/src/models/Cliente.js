import mongoose from "mongoose"

const ClienteSchema = new mongoose.Schema({

nombre:String,
correo:String,
telefono:String,
direccion:String

})

export default mongoose.model("Cliente",ClienteSchema)