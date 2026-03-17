import mongoose from "mongoose"

const TecnicoSchema = new mongoose.Schema({

usuario:String,

nombre:String,

profesion:String,

arl:String,

eps:String,

experiencia:Number

})

export default mongoose.model("Tecnico",TecnicoSchema)