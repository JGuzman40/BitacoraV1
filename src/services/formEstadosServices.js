const { FormEstados, LineaBase } = require("../db");

const createFormEstadosService = async (lineaBaseId, data) => {
  const {
    calidadSueno,
    calidadSuenoComentario,
    energia,
    energiaComentario,
    animo,
    animoComentario,
    autoeficacia,
    autoeficaciaComentario,
    habilidadesSociales,
    habilidadesSocialesComentario,
    tranquilidad,
    tranquilidadComentario,
    amabilidad,
    amabilidadComentario,
    foco,
    focoComentario,
    creatividad,
    creatividadComentario,
    capacidadCognitiva,
    capacidadCognitivaComentario,
    autoConocimiento,
    autoConocimientoComentario,
    contemplacion,
    contemplacionComentario,
    conexion,
    conexionComentario,
    espiritualidad,
    espiritualidadComentario,
  } = data;

  const lineaBase = await LineaBase.findByPk(lineaBaseId);
  if (!lineaBase) throw new Error("Linea Base no encontrada");

  const formEstados = await FormEstados.create({
    calidadSueno,
    calidadSuenoComentario,
    energia,
    energiaComentario,
    animo,
    animoComentario,
    autoeficacia,
    autoeficaciaComentario,
    habilidadesSociales,
    habilidadesSocialesComentario,
    tranquilidad,
    tranquilidadComentario,
    amabilidad,
    amabilidadComentario,
    foco,
    focoComentario,
    creatividad,
    creatividadComentario,
    capacidadCognitiva,
    capacidadCognitivaComentario,
    autoConocimiento,
    autoConocimientoComentario,
    contemplacion,
    contemplacionComentario,
    conexion,
    conexionComentario,
    espiritualidad,
    espiritualidadComentario,
    lineaBaseId: lineaBaseId,
  });
  return formEstados;
};

const getFormEstadosService = async (lineaBaseId) => {
  const formEstados = await FormEstados.findOne({
    where: { lineaBaseId },
  });
  if (!formEstados) throw new Error("Formulari de estados no encontrado");
  return formEstados;
};

const updateFormEstadosService = async (lineaBaseId, data) => {
  const updatedFormEstados = await FormEstados.findOne({
    where: { lineaBaseId },
  });
  if (!updatedFormEstados)
    throw new Error("Formulario de elementos no enctrado");
  await updatedFormEstados.update(data);

  return updatedFormEstados;
};

module.exports = {
  createFormEstadosService,
  getFormEstadosService,
  updateFormEstadosService,
};
