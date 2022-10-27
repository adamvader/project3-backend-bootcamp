"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { as: "owner", foreignKey: "owner_id" });
      this.hasMany(models.reservation, {
        as: "properties",
        foreignKey: "properties_id",
      });
    }
  }
  property.init(
    {
      home_name: DataTypes.STRING,
      image_url: DataTypes.STRING,
      home_type: DataTypes.STRING,
      total_occupancy: DataTypes.INTEGER,
      total_bedrooms: DataTypes.INTEGER,
      total_bathrooms: DataTypes.INTEGER,
      summary: DataTypes.TEXT,
      address: DataTypes.TEXT,
      has_tv: DataTypes.BOOLEAN,
      has_kitchen: DataTypes.BOOLEAN,
      has_aircon: DataTypes.BOOLEAN,
      has_internet: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      owner_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "property",
    }
  );
  return property;
};
