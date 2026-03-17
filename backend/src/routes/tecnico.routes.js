import {Router} from "express"

import {guardarTecnico,obtenerTecnico,listarTecnicos} from "../controllers/tecnico.controller.js"

const router = Router()

router.get("/", listarTecnicos)  
router.post("/",guardarTecnico)
router.get("/:usuario",obtenerTecnico)

export default router