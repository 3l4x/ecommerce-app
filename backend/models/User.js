const { Model } = require('sequelize');

const SHA256 = require('crypto-js/sha256')


const hashPassword = (password) => SHA256(password).toString()
const hashUserPassword = (user) => { user.password = hashPassword(user.password) }

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Review);
      this.hasMany(models.Purchase)
    }

    matchPassword = (password) => { return this.password === hashPassword(password) }

    toJSON = () => {
      const data = this.get();
      if (data.hasOwnProperty('password'))
        delete data.password;
      return data;
    }

  }

  //! fix regex validation
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
          args: [1, 50]
        },
        is: /^\p{L}[\p{L}\s\p{Pd}\'-]*$/
      }
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: {
          args: [1, 50]
        },
        is: /^\p{L}[\p{L}\s\p{Pd}\'-]*$/
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
          args: [1, 100]
        },
        is: /^\p{L}[\p{L}\s\p{Pd}\'-]*$/
      }
    },
    state: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100]
        },
        is: /^\p{L}[\p{L}\s\p{Pd}\'-]*$/
      }
    },
    zip: {
      type: DataTypes.STRING(20),
      validate: {
        len: {
          args: [1, 20]
        },
        is: /^\d+(\d|-)*\d$/
      }
    },
    city: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100]
        },
        is: /^\p{L}[\p{L}\s\p{Pd}\'-]*$/,
      }
    },
    address1: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100]
        },
        is: /^(\p{L}|\d)[\d\p{L}\s\p{Pd}\'\-\/#,.]*$/
      }
    },
    address2: {
      type: DataTypes.STRING(100),
      validate: {
        len: {
          args: [1, 100]
        },
        is: /^(\p{L}|\d)[\d\p{L}\s\p{Pd}\'\-\/#,.]*$/
      }
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      validate: {
        len: {
          args: [1, 20]
        },
        is: /^\+\d[\d\s\-)(]+$/,
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    hooks: {
      beforeCreate: hashUserPassword,
      beforeUpdate: hashUserPassword
    },
  });
  return User;
};