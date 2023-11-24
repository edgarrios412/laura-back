const {Router} = require("express")
const userRoutes = require("./userRoutes")
const clientRoutes = require("./clientRoutes")
const calendarRoutes = require("./calendarRoutes")
const financieroRoutes = require("./financieroRoutes")
const temperaturaRoutes = require("./temperaturaRoutes")
const evolucionRoutes = require("./evolucionRoutes")
const indexRoutes = Router()

indexRoutes.use("/user",userRoutes)
indexRoutes.use("/calendar",calendarRoutes)
indexRoutes.use("/client",clientRoutes)
indexRoutes.use("/financiero",financieroRoutes)
indexRoutes.use("/temperatura",temperaturaRoutes)
indexRoutes.use("/evolucion",evolucionRoutes)

module.exports = indexRoutes