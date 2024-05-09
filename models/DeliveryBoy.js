const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DeliveryBoy extends Model {
    static associate(models) {
      DeliveryBoy.hasOne(models.Order, {
        foreignKey: "delivery_boys_id",
      });
    }
  }
  DeliveryBoy.init(
    {
      name: {
        type: DataTypes.STRING,
        field: "name",
      },
    },
    {
      sequelize,
      tableName: "delivery_boys",
      modelName: "DeliveryBoy",
      timestamps: false,
    }
  );
  return DeliveryBoy;
};
