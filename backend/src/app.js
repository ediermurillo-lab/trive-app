import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import {fileURLToPath} from "url"

import {connectDB} from "./config/db.js"

import authRoutes from "./routes/auth.routes.js"
import tecnicoRoutes from "./routes/tecnico.routes.js"
import clienteRoutes from "./routes/cliente.routes.js"
import solicitudRoutes from "./routes/solicitud.routes.js"

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname,"../../frontend/public")))

app.use("/api",authRoutes)
app.use("/api/tecnicos",tecnicoRoutes)
app.use("/api/clientes",clienteRoutes)
app.use("/api/solicitudes",solicitudRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

console.log("Servidor corriendo en puerto",PORT)

})
