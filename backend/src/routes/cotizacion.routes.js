import {Router} from "express"

import {consultarTicket} from "../controllers/cotizacion.controller.js"

const router = Router()

router.get("/:id",consultarTicket)

export default router