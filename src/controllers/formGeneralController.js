const {
  createFormGeneralService,
  getFormGeneralService,
  updateFormGeneralService,
} = require("../services/formGeneralServices");
const catchAsync = require("../utils/catchAsync");

// Crear el Formulario General
const createFormGeneral = async (req, res) => {
  const { bitacoraId, data } = req.body; // Suponiendo que la data está en el cuerpo de la solicitud

  try {
    const newFormGeneral = await createFormGeneralService(bitacoraId, data);
    res.status(201).json({
      message: "Formulario General creado exitosamente",
      formGeneral: newFormGeneral,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el Formulario General",
      error: error.message,
    });
  }
};

// Obtener el Formulario General por ID de la Bitácora
const getFormGeneral = async (req, res) => {
  const { bitacoraId } = req.params;

  try {
    const formGeneral = await getFormGeneralService(bitacoraId);
    res.status(200).json(formGeneral);
  } catch (error) {
    res.status(404).json({
      message: "Formulario General no encontrado",
      error: error.message,
    });
  }
};

// Actualizar el Formulario General
const updateFormGeneral = async (req, res) => {
  const { bitacoraId, data } = req.body; // Datos a actualizar
  try {
    const updatedFormGeneral = await updateFormGeneralService(bitacoraId, data);
    res.status(200).json({
      message: "Formulario General actualizado exitosamente",
      formGeneral: updatedFormGeneral,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el Formulario General",
      error: error.message,
    });
  }
};

module.exports = {
  createFormGeneral: catchAsync(createFormGeneral),
  getFormGeneral: catchAsync(getFormGeneral),
  updateFormGeneral: catchAsync(updateFormGeneral),
};
