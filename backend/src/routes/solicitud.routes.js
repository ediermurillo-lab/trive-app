import {Router} from "express"

import {crearSolicitud,listarSolicitudes, obtenerSolicitud} from "../controllers/solicitud.controller.js"

const router = Router()

router.post("/",crearSolicitud)
router.get("/",listarSolicitudes)
router.get("/:id", obtenerSolicitud)

export default router