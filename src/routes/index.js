const {Router} = require("express")
const userRoutes = require("./userRoutes")
const clientRoutes = require("./clientRoutes")
const calendarRoutes = require("./calendarRoutes")
const financieroRoutes = require("./financieroRoutes")
const temperaturaRoutes = require("./temperaturaRoutes")
const evolucionRoutes = require("./evolucionRoutes")
const proveedorRoutes = require("./proveedorRoutes")
const inventarioRoutes = require("./inventarioRoutes")
const recordatorioRoutes = require("./recordatorioRoutes")
const registroRoutes = require("./registroRoutes")
const indexRoutes = Router()

indexRoutes.use("/user",userRoutes)
indexRoutes.use("/calendar",calendarRoutes)
indexRoutes.use("/client",clientRoutes)
indexRoutes.use("/financiero",financieroRoutes)
indexRoutes.use("/temperatura",temperaturaRoutes)
indexRoutes.use("/evolucion",evolucionRoutes)
indexRoutes.use("/proveedor",proveedorRoutes)
indexRoutes.use("/inventario",inventarioRoutes)
indexRoutes.use("/recordatorio",recordatorioRoutes)
indexRoutes.use("/registro",registroRoutes)

module.exports = indexRoutes