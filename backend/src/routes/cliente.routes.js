import {Router} from "express"

import {crearCliente,listarClientes} from "../controllers/cliente.controller.js"

const router = Router()

router.post("/",crearCliente)
router.get("/",listarClientes)

export default router