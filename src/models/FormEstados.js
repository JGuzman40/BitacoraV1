const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FormEstados",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // Calidad de Sueño
      calidadSueno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Calidad de Sueño (0-5)",
      },
      calidadSuenoComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Calidad de Sueño",
      },
      // Energía
      energia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Energía (0-5)",
      },
      energiaComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Energía",
      },
      // Ánimo
      animo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Ánimo (0-5)",
      },
      animoComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Ánimo",
      },
      // Autoeficacia
      autoeficacia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Autoeficacia (0-5)",
      },
      autoeficaciaComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Autoeficacia",
      },
      // Habilidades Sociales
      habilidadesSociales: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Habilidades Sociales (0-5)",
      },
      habilidadesSocialesComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Habilidades Sociales",
      },
      // Continúa de la misma manera para los otros estados...
      tranquilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Tranquilidad (0-5)",
      },
      tranquilidadComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Tranquilidad",
      },
    },
    {
      timestamps: true,
    }
  );
};
