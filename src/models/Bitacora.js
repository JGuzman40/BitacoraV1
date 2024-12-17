const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Bitacora",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          min: 1,
          max: 30,
        },
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      participanteId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users", // El nombre de la tabla de usuarios en la base de datos
          key: "id", // El campo de referencia
        },
      },
    },
    {
      timestamps: true,
    }
  );
};
