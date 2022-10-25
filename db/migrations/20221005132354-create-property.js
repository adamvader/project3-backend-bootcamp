//models create templates for the tables

"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      home_name: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      home_type: {
        type: Sequelize.STRING,
      },
      total_occupancy: {
        type: Sequelize.INTEGER,
      },
      total_bedrooms: {
        type: Sequelize.INTEGER,
      },
      total_bathrooms: {
        type: Sequelize.INTEGER,
      },
      summary: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.TEXT,
      },
      has_tv: {
        type: Sequelize.BOOLEAN,
      },
      has_kitchen: {
        type: Sequelize.BOOLEAN,
      },
      has_aircon: {
        type: Sequelize.BOOLEAN,
      },
      has_internet: {
        type: Sequelize.BOOLEAN,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      owner_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("properties");
  },
};
