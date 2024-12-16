const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormDosisDiaria",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      porcentaje: {
        type: DataTypes.ENUM("5%", "10%", "15%", "25%"),
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM("toma", "descanso"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
