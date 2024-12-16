const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormGeneral",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fobias: {
        type: DataTypes.ENUM(
          "Insomnio",
          "Trastorno obsesivo compulsivo",
          "Tratamiento por depresión",
          "Intento de suicidio",
          "Trastornos alimenticios",
          "Esquizofrenia",
          "Tocamientos indebidos o abuso sexual",
          "Cardiopatías",
          "Diabetes",
          "Colesterol elevado",
          "Depresión",
          "Ansiedad",
          "Estrés",
          "Asma",
          "Adicciones",
          "Otras",
          "Ninguna de las anteriores"
        ),
        allowNull: false,
      },
      otrasFobias: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Especificar otras fobias si seleccionó 'Otras'.",
      },
      sustanciasConsumidas: {
        type: DataTypes.ENUM(
          "Cocaína",
          "Marihuana",
          "Anfetaminas",
          "Opiáceos",
          "Mescalina",
          "Psilocibina",
          "Alcohol",
          "Otras",
          "Ninguna de las anteriores"
        ),
        allowNull: false,
      },
      otrasSustancias: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Especificar otras sustancias si seleccionó 'Otras'.",
      },
    },
    {
      timestamps: true,
    }
  );
};
