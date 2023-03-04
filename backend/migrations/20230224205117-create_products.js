'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, { DataTypes }) {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      imgPath: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      SubcategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'subcategories',
          key: 'id'
        }
      }

    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('products');
  }
};
