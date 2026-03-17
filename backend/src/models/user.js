import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({

nombre:String,

usuario:{
type:String,
unique:true
},

password:String,

rol:{
type:String,
enum:["CLIENTE","TECNICO","GESTOR","ADMINISTRADOR"]
}

})

export default mongoose.model("User",UserSchema)