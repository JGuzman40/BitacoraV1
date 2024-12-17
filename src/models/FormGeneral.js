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
      fechaActual: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: "Fecha de hoy en formato día/mes/año",
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: "Fecha de nacimiento del participante",
      },
      peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
        comment: "Peso del participante en kilogramos",
      },
      talla: {
        type: DataTypes.FLOAT,
        allowNull: false,
        comment: "Talla del participante en metros",
      },

      // Condiciones o Situaciones
      insomnio: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Has tenido Insomnio? (Sí/No/Comentario)",
      },
      toc: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has tenido Trastorno Obsesivo Compulsivo? (Sí/No/Comentario)",
      },
      tratamientoDepresion: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Has recibido tratamiento por depresión? (Sí/No/Comentario)",
      },
      intentoSuicidio: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Has tenido intento de suicidio? (Sí/No/Comentario)",
      },
      trastornosAlimenticios: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Has tenido trastornos alimenticios? (Sí/No/Comentario)",
      },
      esquizofrenia: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Has tenido esquizofrenia? (Sí/No/Comentario)",
      },
      abusoSexual: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has sufrido tocamientos indebidos o abuso sexual? (Sí/No/Comentario)",
      },
      cardiopatias: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Tienes cardiopatías? (Sí/No/Comentario)",
      },
      diabetes: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Tienes diabetes? (Sí/No/Comentario)",
      },
      colesterolElevado: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Tienes colesterol elevado? (Sí/No/Comentario)",
      },
      depresion: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Tienes depresión? (Sí/No/Comentario)",
      },
      ansiedad: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Tienes ansiedad? (Sí/No/Comentario)",
      },
      estres: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Sufres de estrés? (Sí/No/Comentario)",
      },
      asma: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Tienes asma? (Sí/No/Comentario)",
      },

      // Comentarios
      comentarioCondiciones: {
        type: DataTypes.STRING,
        allowNull: true,
        comment:
          "Comentarios adicionales sobre las condiciones/situaciones si la opción es 'Comentario'.",
      },

      // Sustancias Consumidas
      cocaína: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Cocaína en los últimos 3 meses? (Sí/No/Comentario)",
      },
      marihuana: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Marihuana en los últimos 3 meses? (Sí/No/Comentario)",
      },
      anfetaminas: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Anfetaminas en los últimos 3 meses? (Sí/No/Comentario)",
      },
      opiáceos: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Opiáceos en los últimos 3 meses? (Sí/No/Comentario)",
      },
      mescalina: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Mescalina en los últimos 3 meses? (Sí/No/Comentario)",
      },
      psilocibina: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Psilocibina en los últimos 3 meses? (Sí/No/Comentario)",
      },
      alcohol: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment:
          "¿Has consumido Alcohol en los últimos 3 meses? (Sí/No/Comentario)",
      },
      otrasSustancias: {
        type: DataTypes.STRING,
        allowNull: true,
        comment:
          "Especificar otras sustancias consumidas si seleccionó 'Comentario'.",
      },
      ningunaSustancia: {
        type: DataTypes.ENUM("Sí", "No", "Comentario"),
        allowNull: false,
        comment: "¿Has consumido ninguna sustancia? (Sí/No/Comentario)",
      },

      // Comentarios para sustancias
      comentarioSustancias: {
        type: DataTypes.STRING,
        allowNull: true,
        comment:
          "Comentarios adicionales sobre las sustancias consumidas si la opción es 'Comentario'.",
      },
    },
    {
      timestamps: true,
    }
  );
};
