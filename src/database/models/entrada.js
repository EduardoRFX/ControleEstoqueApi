'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entrada.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' })
      Entrada.belongsTo(models.Item, { foreignKey: 'item_id', as: 'item' })    
      Entrada.belongsTo(models.Fornecedor, { foreignKey: 'fornecedor_id', as: 'fornecedor'})
    }
  }
  Entrada.init({
    quantidade: DataTypes.INTEGER,
    preco: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Entrada',
    tableName: 'entradas',
    paranoid: true
  });
  return Entrada;
};