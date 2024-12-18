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
      amabilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Amabilidad (0-5)",
      },
      amabilidadComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Amabilidad",
      },
      foco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Foco (0-5)",
      },
      focoComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Foco",
      },
      creatividad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Creatividad (0-5)",
      },
      creatividadComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Creatividad",
      },
      capacidadCognitiva: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Capacidad Cognitiva (0-5)",
      },
      capacidadCognitivaComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Capacidad Cognitiva",
      },
      autoConocimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Autoconocimiento (0-5)",
      },
      autoConocimientoComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Autoconocimiento",
      },
      contemplacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Contemplación (0-5)",
      },
      contemplacionComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Contemplación",
      },
      conexion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Conexión (0-5)",
      },
      conexionComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Conexión",
      },
      espiritualidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 0, max: 5 },
        comment: "Espiritualidad (0-5)",
      },
      espiritualidadComentario: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: "Comentario sobre Espiritualidad",
      },
    },
    {
      timestamps: true,
    }
  );
};
