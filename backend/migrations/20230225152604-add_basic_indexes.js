'use strict';

const { logger } = require('../utils/logger');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    //categoryhierarchy
    await queryInterface.addIndex('category_hierarchies', {
      fields: ['categoryId', 'parentCategoryId'],
    });

    //product_category
    await queryInterface.addIndex('product_categories', {
      fields: ['categoryId', 'productId'],
    });

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
      () => queryInterface.removeIndex('category_hierarchies', {
        fields: ['categoryId', 'parentCategoryId'],
      }),
      () => queryInterface.removeIndex('product_categories', {
        fields: ['categoryId', 'productId'],
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
