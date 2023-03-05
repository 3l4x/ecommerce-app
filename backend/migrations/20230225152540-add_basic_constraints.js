'use strict';
const { logger } = require('../utils/logger')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    //category

    await queryInterface.addConstraint('category_hierarchies', {
      name: 'category_hierarchy_categoryId_fkey',
      type: 'foreign key',
      fields: ['categoryId'],
      references: {
        table: 'categories',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    //default behavior but still adding it
    await queryInterface.addConstraint('category_hierarchies', {
      name: 'category_hierarchy_parentCategoryId_fkey',
      type: 'foreign key',
      fields: ['parentCategoryId'],
      references: {
        table: 'categories',
        field: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })


    //products
      //if we delete category it should delete the entire entry
      //and cascade on update
    await queryInterface.addConstraint('product_categories',{
      name: 'product_categories_categoryId_fkey',
      type : 'foreign key',
      fields : ['categoryId'],
      references : {
        table : 'categories',
        field : 'id'
      },
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
    })

    //same thing with product, if product gets deleted we dont need the entry
    await queryInterface.addConstraint('product_categories',{
      name: 'product_categories_productId_fkey',
      type : 'foreign key',
      fields : ['productId'],
      references : {
        table : 'products',
        field : 'id'
      },
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
    })













    //reviews
    await queryInterface.addConstraint('reviews', {
      name: 'reviews_userId_fkey',
      type: 'foreign key',
      fields: ['UserId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('reviews', {
      name: 'reviews_productId_fkey',
      type: 'foreign key',
      fields: ['ProductId'],
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
      fields: ['UserId', 'ProductId']
    });

    //purchases
    await queryInterface.addConstraint('purchases', {
      name: 'purchases_userId_fkey',
      type: 'foreign key',
      fields: ['UserId'],
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
      fields: ['PurchaseId'],
      references: {
        table: 'purchases',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
    await queryInterface.addConstraint('purchaseitems', {
      name: 'purchaseitems_productId_fkey',
      type: 'foreign key',
      fields: ['ProductId'],
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
      () => queryInterface.removeConstraint('purchaseitems', 'purchaseitems_purchaseId_fkey'),
      () => queryInterface.removeConstraint('purchaseitems', 'purchaseitems_productId_fkey'),
      () => queryInterface.removeConstraint('purchases', 'purchases_userId_fkey'),
      () => queryInterface.removeConstraint('reviews', 'reviews_userId_fkey'),
      () => queryInterface.removeConstraint('reviews', 'reviews_productId_fkey'),
      () => queryInterface.removeConstraint('reviews', 'reviews_uidpid_unique'),
      () => queryInterface.removeConstraint('product_categories', 'product_categories_categoryId_fkey'),
      () => queryInterface.removeConstraint('product_categories', 'product_categories_productId_fkey'),
      () => queryInterface.removeConstraint('category_hierarchies', 'category_hierarchy_categoryId_fkey'),
      () => queryInterface.removeConstraint('category_hierarchies', 'category_hierarchy_parentCategoryId_fkey'),
    ]);
  }
};
