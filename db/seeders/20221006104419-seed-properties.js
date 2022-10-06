"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "properties",
      [
        {
          home_type: "Landed",
          total_occupancy: 8,
          total_bedrooms: 4,
          total_bathrooms: 3,
          summary: "big and spacious",
          address:
            "Japan, 〒135-0064 Tokyo, Koto City, Aomi, 1 Chome−1−10 ダイバーシティ東京 プラザ７F",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_heating: true,
          has_internet: true,
          price: 2000000,
          owner_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_type: "studio",
          total_occupancy: 2,
          total_bedrooms: 1,
          total_bathrooms: 1,
          summary: "small apartment",
          address: "1 Fullerton Rd, Singapore 049213",
          has_tv: false,
          has_kitchen: false,
          has_aircon: false,
          has_heating: false,
          has_internet: false,
          price: 5000000,
          owner_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_type: "HDB",
          total_occupancy: 6,
          total_bedrooms: 3,
          total_bathrooms: 2,
          summary: "typical 5 room apartment in the heartlands",
          address: "190 Lor 6 Toa Payoh, #04-510, Singapore 310190",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_heating: false,
          has_internet: true,
          price: 5000000,
          owner_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("properties", null, {});
  },
};
