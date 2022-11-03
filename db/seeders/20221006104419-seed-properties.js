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
          owner_name: "Amy",
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
          owner_id: 1,
          owner_name: "Adam",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "HDB room",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FHDB%20room.jpg?alt=media&token=af331e74-34ff-4194-bfb8-d06f0893e92a",
          home_type: "HDB",
          total_occupancy: 2,
          total_bedrooms: 1,
          total_bathrooms: 1,
          summary: "Free to stay for 4 hours work every day",
          address: "1 Tampines Rd, Singapore 056888",
          has_tv: false,
          has_kitchen: false,
          has_aircon: false,
          has_internet: false,
          price: 0,
          owner_id: 1,
          owner_name: "Adam",
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
          owner_id: 3,
          owner_name: "Wei Yu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Taiwan Lavender Cottage",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FTaiwan%20lavender.jpg?alt=media&token=aa8d9a70-20f8-4d89-bddf-3527e434b0d8",
          home_type: "Cottage",
          total_occupancy: 5,
          total_bedrooms: 2,
          total_bathrooms: 1,
          summary: "Free to stay with 6 hours work in the lavender field every day",
          address: "123 Xun Yi Road, Taichung City, Taiwan",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 0,
          owner_id: 3,
          owner_name: "Wei Yu",
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
