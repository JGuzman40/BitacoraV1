const { FormIntencion, LineaBase } = require("../db");

const createFormIntencionService = async (lineaBaseId, data) => {
  const { intencion, beneficios, desafios } = data;

  const lineaBase = await LineaBase.findByPk(lineaBaseId);
  if (!lineaBase) throw new Error("Linea Base no encontrada");

  const formIntencion = await FormIntencion.create({
    intencion,
    beneficios,
    desafios,
    lineaBaseId: lineaBaseId,
  });
  return formIntencion;
};

const getFormIntencionService = async (lineaBaseId) => {
  const formIntencion = await FormIntencion.findOne({
    where: { lineaBaseId },
  });
  if (!formIntencion) throw new Error("Formulario de intención no encontrado");
  return formIntencion;
};

module.exports = {
  createFormIntencionService,
  getFormIntencionService,
};
