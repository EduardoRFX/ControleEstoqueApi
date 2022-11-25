'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Saida.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' })
      Saida.belongsTo(models.Item, { foreignKey: 'item_id', as: 'item' })
    }
  }
  Saida.init({
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saida',
    tableName: 'saidas',
    paranoid: true
  });
  return Saida;
};