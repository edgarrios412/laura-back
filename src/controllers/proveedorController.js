const {Proveedor} = require("../db")

module.exports = {
    getProveedor: async (id) => {
    const proveedor = await Proveedor.findOne({where:{id:id}})
    return proveedor
    },
    getProveedores: async () => {
        const proveedor = await Proveedor.findAll()
        return proveedor
    },
    postProveedor: async (data) => {
        await Proveedor.create(data)
        return "Exitoso"
    },
    deleteProveedor: async (id) => {
        const proveedor = await Proveedor.findOne({where:{id:id}})
        if(proveedor){
            await proveedor.destroy()
            return "Proveedor eliminado"
        }else{
            return "Proveedor no encontrado"
        }
    }
}