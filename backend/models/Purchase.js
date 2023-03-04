const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Purchase extends Model {

        static associate(models) {
            this.belongsTo(models.User);
            this.hasMany(models.PurchaseItem);
        }
    }
    Purchase.init({
        //!paymentstatus,shippingstatus and payment type is missing for now
        date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        price_total: {
            type: DataTypes.DECIMAL(10, 3),
            allowNull: false
        },
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Purchase'
    })
    return Purchase;
}

