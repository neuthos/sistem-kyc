'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_image_url: {
        type: Sequelize.STRING
      },
      photo_image_url: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: "id",
          model: "Users"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      parent_firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parent_lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marital_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserDetails');
  }
};
