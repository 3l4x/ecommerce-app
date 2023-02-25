//used for product,category,subcategory

const TitledBaseModel = (sequelize, DataTypes) =>{
    return sequelize.define('TitledBaseModel', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: DataTypes.STRING,
        imgPath: DataTypes.STRING,
    })
}

module.exports = TitledBaseModel;