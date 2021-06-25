'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.UserDetail.belongsTo(models.User)
    }
  };
  UserDetail.init({
    id_type: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "ID type cannot be empty"
        }
      }
    },
    id_number: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "ID number cannot be empty"
        }
      }
    },
    nationality: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nationality cannot be empty"
        }
      }
    },
    id_image_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo_image_url: {
      type:  DataTypes.STRING,
      allowNull: true
    },
    address: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Address cannot be empty"
        }
      }
    },
    UserId: {
      type:  DataTypes.INTEGER,
      validate: {
        notEmpty: {
          args: true,
          msg: "U cannot be empty"
        }
      }
    },
    isVerified: DataTypes.BOOLEAN,
    parent_firstName: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Parents cannot be empty"
        }
      }
    },
    parent_lastName: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Address cannot be empty"
        }
      }
    },
    gender: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Gender cannot be empty"
        }
      }
    },
    marital_status: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Marital status cannot be empty"
        }
      }
    },
    date_birth: {
      type:  DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: "Date birth cannot be empty"
        }
      }
    },
    city: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "City cannot be empty"
        }
      }
    },
    province: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Province cannot be empty"
        }
      }
    },
    zip_code: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Zip code cannot be empty"
        }
      }
    },
    phone_number: {
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Phone number cannot be empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};
