const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormIntencion",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      intencion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      beneficios: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      desafios: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
