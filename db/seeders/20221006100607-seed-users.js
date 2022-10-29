"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Adam",
          email: "test1@mail.com",
          password: "password",
          phone_number: "6598182227",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amy",
          email: "amytest1@gmail.com",
          password: "password",
          phone_number: "81364260780",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wei Yu",
          email: "wei_yu@mail.com",
          password: "password",
          phone_number: "62778470100",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
