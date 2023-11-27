const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('proveedor', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{timestamps:false});
};