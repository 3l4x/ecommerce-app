const { Model } = require('sequelize');


module.exports = (sequelize,DataTypes) => {
    class Review extends Model {

        static associate(models){
            this.belongsTo([models.User,models.Product]);
        }
    }
    Review.init({
        rating: {
            type: DataTypes.INTEGER,
            allowNull : false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        reviewBody: {
            type: DataTypes.TEXT,
        }
    })
    return Review;
}

