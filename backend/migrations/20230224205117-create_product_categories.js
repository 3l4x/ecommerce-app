'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('product_categories', {
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model : 'products',
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model : 'categories',
          key: 'id'
        }
      },
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('product_categories');
  }
};
