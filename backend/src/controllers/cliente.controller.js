import Cliente from "../models/Cliente.js"

export const crearCliente = async(req,res)=>{

const cliente = new Cliente(req.body)

await cliente.save()

res.json(cliente)

}

export const listarClientes = async(req,res)=>{

const data = await Cliente.find()

res.json(data)

}