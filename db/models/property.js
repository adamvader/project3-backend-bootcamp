"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  property.init(
    {
      home_type: DataTypes.STRING,
      total_occupancy: DataTypes.INTEGER,
      total_bedrooms: DataTypes.INTEGER,
      total_bathrooms: DataTypes.INTEGER,
      summary: DataTypes.TEXT,
      address: DataTypes.TEXT,
      has_tv: DataTypes.BOOLEAN,
      has_kitchen: DataTypes.BOOLEAN,
      has_aircon: DataTypes.BOOLEAN,
      has_heating: DataTypes.BOOLEAN,
      has_internet: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      owner_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "property",
    }
  );
  return property;
};
