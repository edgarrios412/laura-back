const {Inventario} = require("../db")

module.exports = {
    getItems: async () => {
        const inventario = Inventario.findAll()
        return inventario
    },
    postItem: async (item) => {
        await Inventario.create(item)
    },
    putItem: async (data) => {
        const item = Inventario.findByPk(data.id)
        if(item){
            //Actualizar el item
            return "Encontrado"
        }
        else return "No encontrado"
    }
}