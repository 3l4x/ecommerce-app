/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(100),
      },
      state: {
        type: DataTypes.STRING(100),
      },
      zip: {
        type: DataTypes.STRING(20),
      },
      city: {
        type: DataTypes.STRING(100),
      },
      address1: {
        type: DataTypes.STRING(100),
      },
      address2: {
        type: DataTypes.STRING(100),
      },
      phoneNumber: {
        type: DataTypes.STRING(20),
      },
    })
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('users');
  }
};
