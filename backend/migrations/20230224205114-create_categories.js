/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    await queryInterface.createTable('categories', {
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
    })

  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('categories');
  }
};
