const {
  LineaBase,
  Bitacora,
  FormElementos,
  FormEstados,
  FormIntencion,
} = require("../db");

const createLineaBaseService = async (bitacoraId, data) => {
  const bitacora = await Bitacora.findByPk(bitacoraId);
  if (!bitacora) throw new Error("Bitácora no encontrada");
  return await LineaBase.create({
    bitacoraId,
    fecha: new Date(),
    ...data,
  });
};

const getLineaBaseService = async (bitacoraId) => {
  const lineaBase = await LineaBase.findOne({
    where: { bitacoraId },
    include: [FormIntencion, FormElementos, FormEstados],
  });
  if (!lineaBase) throw new Error("Linea base no encontrada");
  return lineaBase;
};

const updateLineaBaseService = async (bitacoraId, data) => {
  const lineaBase = await LineaBase.findOne({ where: { bitacoraId } });
  if (!lineaBase) throw new Error("Línea Base no encontrada");
  return await lineaBase.update(data);
};

module.exports = {
  createLineaBaseService,
  getLineaBaseService,
  updateLineaBaseService,
};
