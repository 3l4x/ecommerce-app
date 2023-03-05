const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CategoryHierarchy extends Model {
        static associate(models) {
            //
        }
    }

    CategoryHierarchy.init({
/*         categoryId: DataTypes.INTEGER,
        parentCategoryId: DataTypes.INTEGER */
    }, {
        tableName: 'category_hierarchies',
        sequelize,
        timestamps: false,
        modelName: 'CategoryHierarchy'
    })
    return CategoryHierarchy;
}




