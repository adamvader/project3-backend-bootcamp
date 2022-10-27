"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "properties",
      [
        {
          home_name: "Big landed and spacious bungalow",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2Fbig%20bungalow.jpg?alt=media&token=c5acfb52-c5ee-4b1a-b3b3-a3a0c493011f",
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
          has_internet: true,
          price: 2000000,
          owner_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Small studio",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2Fsmall%20studio.jpg?alt=media&token=1702f7d7-ff06-40aa-96e0-a75e2d347ec2",
          home_type: "studio",
          total_occupancy: 2,
          total_bedrooms: 1,
          total_bathrooms: 1,
          summary: "small apartment",
          address: "1 Fullerton Rd, Singapore 049213",
          has_tv: false,
          has_kitchen: false,
          has_aircon: false,
          has_internet: false,
          price: 5000000,
          owner_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Convenient HDB",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2Fhdb.jpg?alt=media&token=ba42a762-7df8-4c17-b025-b8b7b52bc322",
          home_type: "HDB",
          total_occupancy: 6,
          total_bedrooms: 3,
          total_bathrooms: 2,
          summary: "typical 5 room apartment in the heartlands",
          address: "190 Lor 6 Toa Payoh, #04-510, Singapore 310190",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 5000000,
          owner_id: 2,
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
