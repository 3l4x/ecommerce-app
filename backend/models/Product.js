const TitledBaseModel = require('./TitledBaseModel');


module.exports = (sequelize, DataTypes) => {
  class Product extends TitledBaseModel {

    static associate(models) {
      this.belongsTo(models.Subcategory);
      this.hasMany([models.PurchaseItem, models.Review]);
    }
  }
  Product.init({
    price: {
      type  : DataTypes.DECIMAL(10,3),
      allowNull  : false
    },
    stock: {
      type  : DataTypes.INTEGER,
      allowNull  : false
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};