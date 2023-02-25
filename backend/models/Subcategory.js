const TitledBaseModel = require('./TitledBaseModel');


module.exports = (sequelize,DataTypes) => {
    class Subcategory extends TitledBaseModel {

        static associate(models){
            this.belongsTo(models.Category);
            this.hasMany(models.Product)
        }
    }
    Subcategory.init()
    return Subcategory;
}

