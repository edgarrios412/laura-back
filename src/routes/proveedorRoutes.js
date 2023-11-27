const {Router} = require("express")
const { getProveedor, getProveedores, postProveedor } = require("../controllers/proveedorController")
const proveedorRoutes = Router()

proveedorRoutes.get("/:id", async (req,res) => {
    if(req.params.id == "all"){
        const proveedores = await getProveedores()
        return res.json(proveedores)
    }else{
        const proveedor = await getProveedor(req.params.id)
        return res.json(proveedor)
    }
})

proveedorRoutes.post("/", async (req,res) => {
    const proveedor = await postProveedor(req.body)
    return res.json(proveedor)
})

// proveedorRoutes.put("/", (req,res) => {
//     res.json({users:"Edita un evolucion"})
// })

// proveedorRoutes.delete("/", (req,res) => {
//     res.json({users:"Elimina un evolucion"})
// })

module.exports = proveedorRoutes