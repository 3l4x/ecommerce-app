const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {

        static associate(models) {
            this.belongsTo(models.User);
            this.belongsTo(models.Product);
        }
    }
    Review.init({
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        reviewBody: {
            type: DataTypes.TEXT,
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Review'
    })
    return Review;
}

