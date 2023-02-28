const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {

        static associate(models) {
            this.hasMany(models.Subcategory)
        }
    }
    Category.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: DataTypes.STRING,
        imgPath: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Category'
    })
    return Category;
}
