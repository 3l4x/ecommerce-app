const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {

        static associate(models) {
            this.hasMany(models.Subcategory)
        }
    }
    Category.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: DataTypes.STRING,
        imgPath: DataTypes.STRING,
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Category'
    })
    return Category;
}

