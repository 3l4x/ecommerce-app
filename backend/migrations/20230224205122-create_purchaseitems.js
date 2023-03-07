/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    await queryInterface.createTable('purchaseitems', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      purchase_price: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      PurchaseId: {
        type: DataTypes.INTEGER,
        references:{
          model: 'purchases',
          key: 'id'
        }
      },
      ProductId: {
        type: DataTypes.INTEGER,
        references:{
          model: 'products',
          key: 'id'
        }
      }
    })

  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('purchaseitems');
  }
};
