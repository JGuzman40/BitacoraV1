const { FormElementos, LineaBase } = require("../db");

const createFormElementosService = async (lineaBaseId, data) => {
  const {
    motivoDosis,
    cambiosNotables,
    impactoAlimentacionEnergia,
    suenosSincronicidades,
    cambiosCondicionMedica,
    cambiosEnergiaSexual,
  } = data;

  const lineaBase = await LineaBase.findByPk(lineaBaseId);
  if (!lineaBase) throw new Error("Linea Base no encontrada");

  const formElementos = await FormElementos.create({
    motivoDosis,
    cambiosNotables,
    impactoAlimentacionEnergia,
    suenosSincronicidades,
    cambiosCondicionMedica,
    cambiosEnergiaSexual,
    lineaBaseId: lineaBaseId,
  });
  return formElementos;
};

const getFormElementosService = async (lineaBaseId) => {
  const formElementos = await FormElementos.findOne({
    where: { lineaBaseId },
  });
  if (!formElementos) throw new Error("Formulario de elementos no encontrado");
  return formElementos;
};

const updateFormElementosService = async (lineaBaseId, data) => {
  const updatedFormElementos = await FormElementos.findOne({
    where: { lineaBaseId },
  });
  if (!updatedFormElementos)
    throw new Error("Formulario de elementos no enctrado");
  await updatedFormElementos.update(data);

  return updatedFormElementos;
};

module.exports = {
  createFormElementosService,
  getFormElementosService,
  updateFormElementosService,
};
