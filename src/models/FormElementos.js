const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormElementos",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // Pregunta 1
      motivoDosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: "¿Por qué decides esta dosis o el cambio de día hoy?",
      },
      // Pregunta 2
      cambiosNotables: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: "¿Has hecho, sentido o pensado algo distinto a lo habitual?",
      },
      // Pregunta 3
      impactoAlimentacionEnergia: {
        type: DataTypes.ENUM("Beneficio", "Desafío"),
        allowNull: false,
        comment: "¿Ha impactado el cuidado de la alimentación y energía hoy?",
      },
      // Pregunta 4
      suenosSincronicidades: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment:
          "¿Tuviste sueños o sincronicidades? ¿Les encuentras significado?",
      },
      // Pregunta 5
      cambiosCondicionMedica: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment:
          "¿Has experimentado algún cambio o mejora respecto a tu condición médica?",
      },
      // Pregunta 6
      cambiosEnergiaSexual: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "¿Observas algún cambio en tu energía o vida sexual?",
      },
    },
    {
      timestamps: true,
    }
  );
};
