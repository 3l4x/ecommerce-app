'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('users', (() => {
        const usersBulk = [];
        for (let i = 0; i < 10; i++) {
          usersBulk.push(
            {
              email: faker.internet.email(),
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              password: faker.internet.password(),
              createdAt: new Date(),
              updatedAt: new Date(),
            }
          )
        }
        return usersBulk;
      })(), {})
    }
    catch (err) {
      console.log(err);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
