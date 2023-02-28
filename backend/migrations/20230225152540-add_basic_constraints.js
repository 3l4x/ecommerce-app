'use strict';
const { logger } = require('../utils/logger')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {

    //subcategories
    await queryInterface.addConstraint('subcategories', {
      name: 'subcategories_categoryId_fkey',
      type: 'foreign key',
      fields: ['categoryId'],
      references: {
        table: 'categories',
        field: 'id',
      },
      onDelete: 'RESTRICT',
    });

    //products
    await queryInterface.addConstraint('products', {
      name: 'products_subcategoryId_fkey',
      type: 'foreign key',
      fields: ['subcategoryId'],
      references: {
        table: 'subcategories',
        field: 'id'
      },
      //default behavior but I still added the constraint for fun
      onDelete: 'SET NULL'
    })
    //reviews
    await queryInterface.addConstraint('reviews', {
      name: 'reviews_userId_fkey',
      type: 'foreign key',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('reviews', {
      name: 'reviews_productId_fkey',
      type: 'foreign key',
      fields: ['productId'],
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    //?user can only review a product once
    await queryInterface.addConstraint('reviews', {
      name: 'reviews_uidpid_unique',
      type: 'unique',
      fields: ['userId', 'productId']
    });

    //purchases
    await queryInterface.addConstraint('purchases', {
      name: 'purchases_userId_fkey',
      type: 'foreign key',
      fields: ['userId'],
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });

    //purchaseItems
    await queryInterface.addConstraint('purchaseitems', {
      name: 'purchaseitems_purchaseId_fkey',
      type: 'foreign key',
      fields: ['purchaseId'],
      references: {
        table: 'purchases',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addConstraint('purchaseitems', {
      name: 'purchaseitems_productId_fkey',
      type: 'foreign key',
      fields: ['productId'],
      references: {
        table: 'products',
        field: 'id'
      },
      onDelete: 'SET NULL'
    });

  },

  async down(queryInterface, _) {
    //! this needs fix :/
    logger([
      () => queryInterface.removeConstraint('subcategories', 'subcategories_categoryId_fkey'),
      () => queryInterface.removeConstraint('products', 'products_subcategoryId_fkey'),
      () => queryInterface.removeConstraint('reviews', 'reviews_userId_fkey'),
      () => queryInterface.removeConstraint('reviews', 'reviews_productId_fkey'),
      () => queryInterface.removeConstraint('reviews', 'reviews_uidpid_unique'),
      () => queryInterface.removeConstraint('purchases', 'purchases_userId_fkey'),
      () => queryInterface.removeConstraint('purchaseitems', 'purchaseitems_purchaseId_fkey'),
      () => queryInterface.removeConstraint('purchaseitems', 'purchaseitems_productId_fkey')]);
  }
};
