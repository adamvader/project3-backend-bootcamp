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
          summary:
            "Big and spacious bungalow. Stay here and feel like royalty! Butler services provided on request.",
          address:
            "Japan, 〒135-0064 Tokyo, Koto City, Aomi, 1 Chome−1−10 ダイバーシティ東京 プラザ７F",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 200000,
          owner_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Small studio",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2Fsmall%20studio.jpg?alt=media&token=1702f7d7-ff06-40aa-96e0-a75e2d347ec2",
          home_type: "Studio",
          total_occupancy: 2,
          total_bedrooms: 1,
          total_bathrooms: 1,
          summary:
            "Small, cozy apartment with many amenities provided. Price can be reduced if you help with cleaning.",
          address: "1 Fullerton Rd, Singapore 049213",
          has_tv: false,
          has_kitchen: false,
          has_aircon: false,
          has_internet: false,
          price: 50000,
          owner_id: 1,
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
          summary:
            "Free to stay for 4 hours work every day, like cleaning and cooking.",
          address: "1 Tampines Rd, Singapore 056888",
          has_tv: false,
          has_kitchen: false,
          has_aircon: false,
          has_internet: false,
          price: 0,
          owner_id: 1,
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
          summary:
            "Typical 5 room apartment in the heartlands, with convenient access to the city and airport",
          address: "190 Lor 6 Toa Payoh, #04-510, Singapore 310190",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 30000,
          owner_id: 3,
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
          summary:
            "Free to stay with 6 hours work in the lavender field every day",
          address: "123 Rabenda Street, Furano Town, Hokkaido prefecture",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 0,
          owner_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Gifu Farmhouse",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FGifu%20Farmhouse.jpg?alt=media&token=1b108353-babe-4180-a37c-79dc43265369",
          home_type: "Farmhouse",
          total_occupancy: 10,
          total_bedrooms: 5,
          total_bathrooms: 3,
          summary:
            "Free to stay at a traditional Japanese gassho-style house, with at least 4 hours of farm work daily",
          address: "Japan, 〒246-0064 Shirakawago, Gifu Prefecture",
          has_tv: false,
          has_kitchen: true,
          has_aircon: true,
          has_internet: false,
          price: 0,
          owner_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Disney apartment",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2Fdisney%20apartment.jpg?alt=media&token=684121b7-5959-4b63-98b4-8edf21833e19",
          home_type: "Apartment",
          total_occupancy: 4,
          total_bedrooms: 1,
          total_bathrooms: 1,
          summary:
            "Disney-themed apartment popular with Disney fans. Near Tokyo Disneyland. Price can be discounted if you can help to buy Disney popcorn cases.",
          address: "36 Urayasu City, Maihama 416-8989, Chiba Prefecture",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 50000,
          owner_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Jujutsu Kaisen house",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2Fjujutsu%20apartment.jpg?alt=media&token=df0f77af-c4e8-486b-812a-68b1d8ddfc5c",
          home_type: "House",
          total_occupancy: 9,
          total_bedrooms: 4,
          total_bathrooms: 2,
          summary:
            "Jujutsu Kaisen's Zenin family's house is based on this house. Price can be reduced if you can help to buy the Gojo popcorn case. Free to stay if you work as a tour guide for 6 hours a day",
          address: "337 Sakurajima, Osaka Prefecture, Japan",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 80000,
          owner_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          home_name: "Niseko Ski Lodge",
          image_url:
            "https://firebasestorage.googleapis.com/v0/b/stayhere-a8896.appspot.com/o/images%2FNiseko%20Lodge.jpg?alt=media&token=0552fe9c-5fef-4e38-aefa-0906876fbcff",
          home_type: "Ski Lodge",
          total_occupancy: 1,
          total_bedrooms: 1,
          total_bathrooms: 1,
          summary:
            "Looking for someone to work part-time at my ski lodge for 4 hours a day. Free room provided, and you can spend the rest of the day skiing. Simple work like helping other guests check-in, answering questions in English",
          address:
            "852 Shiroiyuki Street, Niseko 357-2285, Hokkaido prefecture, Japan",
          has_tv: true,
          has_kitchen: true,
          has_aircon: true,
          has_internet: true,
          price: 0,
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
