"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reservations",
      [
        {
          customer_id: 1,
          properties_id: 1,
          owner_id: 2,
          start_date: new Date(2022, 11, 1),
          end_date: new Date(2022, 11, 3),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 3,
          properties_id: 3,
          owner_id: 1,
          start_date: new Date(2022, 11, 4),
          end_date: new Date(2022, 11, 9),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 3,
          properties_id: 2,
          owner_id: 2,
          start_date: new Date(2022, 12, 25),
          end_date: new Date(2023, 1, 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reservations", null, {});
  },
};
