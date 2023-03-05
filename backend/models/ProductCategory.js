const {Model} = require('sequelize');

module.exports = (sequelize,DataTypes)=>{
    class ProductCategory extends Model {
        static asssociate(){

        }
    }
    ProductCategory.init({},{
        sequelize,
        tableName : 'product_categories',
        modelName: 'ProductCategory',
        timestamps : false
    })

    return ProductCategory;
}