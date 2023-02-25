const { Model } = require('sequelize');


module.exports = (sequelize,DataTypes) => {
    class PurchaseItem extends Model {

        static associate(models){
            this.belongsTo([models.Purchase,models.Product]);
        }
    }
    PurchaseItem.init({
        purchase_price: {
            type  : DataTypes.DECIMAL(10,3),
            allowNull  : false
        },
        quantity: {
            type  : DataTypes.INTEGER,
            allowNull  : false
        }
    })
    return PurchaseItem;
}

