
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Subcategory extends Model {
        static associate(models) {
            this.belongsTo(models.Category);
            this.hasMany(models.Product)
        }
    }
    Subcategory.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: DataTypes.STRING,
        imgPath: DataTypes.STRING,
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Subcategory'
    });
    return Subcategory;
}

