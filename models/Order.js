const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Zone, {
        foreignKey: "zone_id",
        as: "zone_data",
      });

      Order.belongsTo(models.DeliveryBoy, {
        foreignKey: "delivery_boys_id",
        as: "delivery_boys_data",
      });
    }
  }
  Order.init(
    {
      zone_id: {
        type: DataTypes.INTEGER,
        field: "zone_id",
      },
      delivery_boys_id: {
        type: DataTypes.INTEGER,
        field: "delivery_boys_id",
      },
    },
    {
      sequelize,
      tableName: "order",
      modelName: "Order",
      timestamps: false,
    }
  );
  return Order;
};
