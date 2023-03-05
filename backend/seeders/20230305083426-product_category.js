'use strict';

const { Category, Product } = require('../models');
const { faker } = require('@faker-js/faker');

//for category seeder
const mainCategories = ['New & Featured', 'Men', 'Women', 'Kids', 'Sale']
const subcategories = [
  {
    name: "Shoes",
    childCategories: [
      "Lifestyle",
      "Running",
      "Basketball",
      "Football",
      "Soccer",
      "Training & Gym",
      "Skateboarding"
    ]
  },
  {
    name: "Clothing",
    childCategories: [
      "Tops & T-Shirts",
      "Shorts",
      "Polos",
      "Hoodies & Sweatshirts",
      "Jackets & Vests",
      "Pants & Leggings",
    ]
  },
  {
    name: "Accessories & Equipment",
    childCategories: [
      'All Accessories and Equipment',
      'Bags and Backpacks',
      'Socks',
    ]
  }
];



const createCategoryTemplate = (name, childCategories = []) => ({
  name,
  description: faker.lorem.sentences(3),
  imgPath: faker.image.fashion(640, 480, true),
  childCategories
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      //seeding main categories
      const mainCategoryRecords = await Category.bulkCreate(
        mainCategories.map(name => createCategoryTemplate(name)),
        { returning: true }
      );

      //seeding primary subcategories
      const primarySubcategoryRecords = await Category.bulkCreate(
        subcategories.map(primarySubcategory => createCategoryTemplate(
          primarySubcategory.name,
          //secondarySubcategories as childCategories (also inserting it with hook)
          primarySubcategory.childCategories.map(secondarySubcategory => createCategoryTemplate(secondarySubcategory))
        )
        ), { returning: true, include: [{ model: Category, 'as': 'childCategories' }] });

      for (let mainCategoryRecord of mainCategoryRecords) {
        await mainCategoryRecord.addChildCategories(primarySubcategoryRecords);
      }

      //seeding products
      const productRecords = await Product.bulkCreate((() => {
        const products = []
        for (let i = 0; i < 20; i++) {
          products.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            imgPath: faker.image.fashion(480, 270, true),
            price: parseFloat(faker.commerce.price(1, 100,3)),
            stock: faker.datatype.number({ min: 0, max: 100 }),
          })
        }
        return products;
      })(), { returning: true });

      //adding random 2nd order subcategory to products
      const secondarySubcategoryRecords = await Promise.all(primarySubcategoryRecords.reduce(
        (acc, primarySubcategory) => {
          return acc.concat(primarySubcategory.getChildCategories());
        }, []));
      const flattenedSubcategories = secondarySubcategoryRecords.flat();
      let randomIndex = 0;
      for (let productRecord of productRecords) {
        randomIndex = Math.floor(Math.random() * secondarySubcategoryRecords.length);
        await productRecord.addCategories([flattenedSubcategories[randomIndex]]);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('products', null, {});
  }
};
