'use strict';
const { Hash } = require("../helpers/bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasOne(models.UserDetail)
    }
  };
  User.init({
    email: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "First name cannot be empty"
        },
        isEmail: {
          args: true,
          msg: "Email format is incorrect"
        }
      }
    },
    first_name: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "First name cannot be empty"
        }
      }
    },
    last_name: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Last name cannot be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8],
          msg: "The password must be at least 8 characters long",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, option) => {
        user.password = Hash(user.password)
      }
    }
  });
  return User;
};