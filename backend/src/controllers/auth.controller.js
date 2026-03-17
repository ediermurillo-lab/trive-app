import User from "../models/user.js"

export const register = async(req,res)=>{

try{

const user = new User(req.body)

await user.save()

res.json({ok:true})

}catch(error){

res.status(400).json({error:"usuario existente"})

}

}

export const login = async(req,res)=>{

const {usuario,password,rol} = req.body

const user = await User.findOne({usuario,password,rol})

if(!user){
return res.json({auth:false})
}

res.json({auth:true,rol:user.rol})

}