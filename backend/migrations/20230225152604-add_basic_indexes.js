'use strict';

const { logger } = require('../utils/logger');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    //subcategories
    await queryInterface.addIndex('subcategories', {
      fields: ['categoryId'],
    });


    //products
    await queryInterface.addIndex('products', {
      fields: ['subcategoryId']
    })

    //reviews
    await queryInterface.addIndex('reviews', {
      fields: ['productId', 'userId'],
    });

    //purchases
    await queryInterface.addIndex('purchases', {
      fields: ['userId']
    })

    //purchaseItems
    await queryInterface.addIndex('purchaseitems', {
      fields: ['productId', 'purchaseId']
    })


  },

  async down(queryInterface, _) {
    //! this needs fix :/
    logger([
      () => queryInterface.removeIndex('subcategories', {
        fields: ['categoryId'],
      }),
      () => queryInterface.removeIndex('products', {
        fields: ['subcategoryId']
      }),
      () => queryInterface.removeIndex('reviews', {
        fields: ['productId', 'userId'],
      }),

      () => queryInterface.removeIndex('purchases', {
        fields: ['userId']
      }),
      () => queryInterface.removeIndex('purchaseitems', {
        fields: ['productId', 'purchaseId']
      }),
    ])
  }

};
