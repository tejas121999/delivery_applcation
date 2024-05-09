const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Zone extends Model {
    static associate(models) {
      Zone.hasOne(models.Order, {
        foreignKey: "zone_id",
      });
    }
  }
  Zone.init(
    {
      zone_name: {
        type: DataTypes.STRING,
        field: "zone_name",
      },
      number_of_delivery_boys: {
        type: DataTypes.STRING,
        field: "number_of_delivery_boys",
      },
    },
    {
      sequelize,
      tableName: "zone",
      modelName: "Zone",
      timestamps: false,
    }
  );
  return Zone;
};
