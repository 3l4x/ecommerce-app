const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.Subcategory);
      this.hasMany(models.PurchaseItem);
      this.hasMany(models.Review);
    }
  }
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    imgPath: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL(10, 3),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Product',
  });
  return Product;
};