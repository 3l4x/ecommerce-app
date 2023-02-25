const TitledBaseModel = require('./TitledBaseModel');


module.exports = (sequelize,DataTypes) => {
    class Category extends TitledBaseModel {

        static associate(models){
            this.hasMany(models.Subcategory)
        }
    }
    Category.init()
    return Category;
}

