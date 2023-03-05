const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsToMany(models.Category,{
        through: models.ProductCategory,
        as: 'categories',
        foreignKey: 'productId',
        otherKey : 'categoryId'
      })
      this.hasMany(models.PurchaseItem);
      this.hasMany(models.Review);
    }
  }
  Product.init({
    name: {
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