/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    await queryInterface.createTable('category_hierarchies', {
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      parentCategoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
    })

  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('category_hierarchies');
  }
};
