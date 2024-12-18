const { FormDosisDiaria, Bitacora, LineaBase } = require("../db");

const createFormDosisDiariaService = async (bitacoraId, lineaBaseId, data) => {
  const { porcentaje, estado } = data;

  const bitacora = await Bitacora.findByPk(bitacoraId);
  if (!bitacora) throw new Error("Bitácora no encontrada");

  const lineaBase = await LineaBase.findByPk(lineaBaseId);
  if (!lineaBase) throw new Error("Linea Base no encontrada");

  const formDosisDiaria = await FormDosisDiaria.create({
    porcentaje,
    estado,
    bitacoraId: bitacoraId,
    lineaBaseId: lineaBaseId,
  });

  return formDosisDiaria;
};

const getFormDosisDiariaService = async (bitacoraId) => {
  const formDosisDiaria = await FormDosisDiaria.findAll({
    where: { bitacoraId },
  });
  if (!formDosisDiaria || formDosisDiaria.length === 0)
    throw new Error("No hay registros diarios aún");
  return formDosisDiaria;
};

const updateFormDosisDiariaService = async (id, data) => {
  const formDosisDiaria = await FormDosisDiaria.findByPk(id);
  if (!formDosisDiaria)
    throw new Error("Registro de dosis diaria no encontrado");

  await formDosisDiaria.update(data);

  return formDosisDiaria;
};

module.exports = {
  createFormDosisDiariaService,
  getFormDosisDiariaService,
  updateFormDosisDiariaService,
};
