'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.addColumn('entradas', 'fornecedor_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'fornecedores'
          },
          key: 'id'
        }
      }, { transaction })

      await transaction.commit()

    }catch(error){
      await transaction.rollback()
      throw error
    }
    
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      await queryInterface.removeColumn('entradas', 'fornecedor_id', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};
