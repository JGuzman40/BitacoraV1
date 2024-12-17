const { FormGeneral, Bitacora } = require("../db");

const createFormGeneralService = async (bitacoraId, data) => {
  const {
    fechaActual,
    fechaNacimiento,
    peso,
    talla,
    insomnio,
    toc,
    tratamientoDepresion,
    intentoSuicidio,
    trastornosAlimenticios,
    esquizofrenia,
    abusoSexual,
    cardiopatias,
    diabetes,
    colesterolElevado,
    depresion,
    ansiedad,
    estres,
    asma,
    comentarioCondiciones,
    cocaína,
    marihuana,
    anfetaminas,
    opiáceos,
    mescalina,
    psilocibina,
    alcohol,
    otrasSustancias,
    ningunaSustancia,
    comentarioSustancias,
  } = data;

  // Verificar si la bitácora existe
  const bitacora = await Bitacora.findByPk(bitacoraId);
  if (!bitacora) throw new Error("Bitácora no encontrada");

  // Crear el formulario general asociado a la bitácora
  const formGeneral = await FormGeneral.create({
    fechaActual,
    fechaNacimiento,
    peso,
    talla,
    insomnio,
    toc,
    tratamientoDepresion,
    intentoSuicidio,
    trastornosAlimenticios,
    esquizofrenia,
    abusoSexual,
    cardiopatias,
    diabetes,
    colesterolElevado,
    depresion,
    ansiedad,
    estres,
    asma,
    comentarioCondiciones,
    cocaína,
    marihuana,
    anfetaminas,
    opiáceos,
    mescalina,
    psilocibina,
    alcohol,
    otrasSustancias,
    ningunaSustancia,
    comentarioSustancias,
    bitacoraId: bitacoraId, // Asociamos la bitácora con el formulario
  });

  return formGeneral;
};

const getFormGeneralService = async (bitacoraId) => {
  const formGeneral = await FormGeneral.findOne({
    where: { bitacoraId },
  });

  if (!formGeneral) throw new Error("Formulario General no encontrado");

  return formGeneral;
};

const updateFormGeneralService = async (bitacoraId, data) => {
  const formGeneral = await FormGeneral.findOne({
    where: { bitacoraId },
  });

  if (!formGeneral) throw new Error("Formulario General no encontrado");

  // Actualizamos el formulario con los nuevos datos
  await formGeneral.update(data);

  return formGeneral;
};

module.exports = {
  createFormGeneralService,
  getFormGeneralService,
  updateFormGeneralService,
};
