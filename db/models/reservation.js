"use strict";
const { Model } = require("sequelize");
const user = require("./user");
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        as: "customer",
        foreignKey: "customer_id",
      });
      this.belongsTo(models.property, {
        as: "properties",
        foreignKey: "properties_id",
      });
    }
  }
  reservation.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        references: { model: "user", key: "id" },
      },
      properties_id: {
        type: DataTypes.INTEGER,
        references: { model: "property", key: "id" },
      },
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "reservation",
    }
  );
  return reservation;
};
