const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {

        static associate(models) {

            //category hierarchy
            this.belongsToMany(models.Category,{
                through: models.CategoryHierarchy,
                as: 'parentCategories',
                foreignKey: 'categoryId',
                otherKey: 'parentCategoryId'
            })
            this.belongsToMany(models.Category,{
                through: models.CategoryHierarchy,
                as: 'childCategories',
                foreignKey: 'parentCategoryId',
                otherKey: 'categoryId'
            })
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

