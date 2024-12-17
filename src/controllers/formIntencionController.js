const {
  createFormIntencionService,
  getFormIntencionService,
} = require("../services/formIntencionServices");

const catchAsync = require("../utils/catchAsync");

// Crear la Intención
const createFormIntencion = async (req, res) => {
  const { lineaBaseId, data } = req.body;

  try {
    const newFormIntencion = await createFormIntencionService(
      lineaBaseId,
      data
    );
    res.status(201).json({
      message: "Intención creada exitosamente",
      formIntencion: newFormIntencion,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la Intención",
      error: error.message,
    });
  }
};

// Obtener la Intención por ID de Línea Base
const getFormIntencion = async (req, res) => {
  const { lineaBaseId } = req.params;

  try {
    const formIntencion = await getFormIntencionService(lineaBaseId);
    res.status(200).json(formIntencion);
  } catch (error) {
    res.status(404).json({
      message: "Intención no encontrada",
      error: error.message,
    });
  }
};

module.exports = {
  createFormIntencion: catchAsync(createFormIntencion),
  getFormIntencion: catchAsync(getFormIntencion),
};
