// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     dialect: "postgres",
//     logging: false,
//   }
// );

// module.exports = {
//   conn: sequelize,
// };

require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
console.log(DB_HOST);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  User,
  Bitacora,
  FormGeneral,
  FormIntencion,
  FormDosisDiaria,
  FormElementos,
  FormEstados,
  LineaBase,
} = sequelize.models;

// Relaciones entre modelos

// Un administrador puede tener muchos participantes (usuarios)
User.hasMany(User, {
  as: "participantes",
  foreignKey: "adminId",
});
User.belongsTo(User, {
  as: "admin",
  foreignKey: "adminId",
});

// Un participante tiene una bitácora
User.hasOne(Bitacora, { foreignKey: "participanteId" });
Bitacora.belongsTo(User, { as: "participante", foreignKey: "participanteId" });

// La bitácora puede tener varios registros de dosis diaria
Bitacora.hasMany(FormDosisDiaria, { foreignKey: "bitacoraId" });
FormDosisDiaria.belongsTo(Bitacora, { foreignKey: "bitacoraId" });

// La bitácora tiene un formulario general
Bitacora.hasOne(FormGeneral, { foreignKey: "bitacoraId" });
FormGeneral.belongsTo(Bitacora, { foreignKey: "bitacoraId" });

// La bitácora tiene una Línea Base
Bitacora.hasOne(LineaBase, { foreignKey: "bitacoraId" });
LineaBase.belongsTo(Bitacora, { foreignKey: "bitacoraId" });

// La Línea Base incluye intenciones, elementos y estados
LineaBase.hasOne(FormIntencion, { foreignKey: "lineaBaseId" });
LineaBase.hasOne(FormElementos, { foreignKey: "lineaBaseId" });
LineaBase.hasOne(FormEstados, { foreignKey: "lineaBaseId" });

FormIntencion.belongsTo(LineaBase, { foreignKey: "lineaBaseId" });
FormElementos.belongsTo(LineaBase, { foreignKey: "lineaBaseId" });
FormEstados.belongsTo(LineaBase, { foreignKey: "lineaBaseId" });

// Relación adicional: la Línea Base tiene registros de dosis diaria
LineaBase.hasMany(FormDosisDiaria, { foreignKey: "lineaBaseId" });
FormDosisDiaria.belongsTo(LineaBase, { foreignKey: "lineaBaseId" });

module.exports = {
  ...sequelize.models,
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
