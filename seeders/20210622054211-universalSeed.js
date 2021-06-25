'use strict';
const { Hash } = require("../helpers/bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [{
      email: "galang@mail.com",
      first_name: "Galang",
      last_name: "Ardian",
      password: Hash("galang123"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: "rafly@mail.com",
      first_name: "Rafly",
      last_name: "Ardian",
      password: Hash("rafly123"),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

    await queryInterface.bulkInsert("Admins", [{
      email: "admin@mail.com",
      username: "admin",
      password: Hash("admin123"),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("User", null, {})
    await queryInterface.bulkInsert("Admin", null, {})
  }
};

