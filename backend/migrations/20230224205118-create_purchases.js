'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('purchases', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      price_total: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      UserId:{
        type: DataTypes.INTEGER,
        references: {
          model : 'users',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('purchases');
  }
};
