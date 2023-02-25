const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany([models.Review, models.Purchase])
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }

    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: {
          args: [1,50]
        },
        isAlpha: true,
      }
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: {
          args: [1,50]
        },
        isAlpha: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6]
        },
        notNull: true,
        notEmpty: true,
      }
    },
    country: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1,100]
        },
        is: `/^[a-zA-Z\u00C0-\u017F0-9\s.,-']*$/u`
      }
    },
    state: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1,100]
        },
        is: `^[\p{L} ]{1,100}$`
      }
    },
    zip: {
      type: DataTypes.STRING(20),
      validate: {
        len: {
          args: [1,20]
        },
        is: `^[\d\-\s]{2,20}$`
      }
    },
    city: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1,100]
        },
        is: `^[\p{L} ]{1,100}$`,
      }
    },
    address1: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1,100]
        },
        is: `^[\w\p{L} .,'-]{0,100}$`
      }
    },
    address2: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1,100]
        },
        is: `^[\w\p{L} .,'-]{0,100}$`
      }
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      validate: {
        len: {
          args: [1,20]
        },
        is: '/^\+[1-9]\d{1,14}$/',
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return User;
};