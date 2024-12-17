const {
  createLineaBaseService,
  getLineaBaseService,
  updateLineaBaseService,
} = require("../services/lineaBaseServices");
const catchAsync = require("../utils/catchAsync");

// Crear la Línea Base
const createLineaBase = async (req, res) => {
  const { bitacoraId, data } = req.body; // Asumimos que 'data' tiene la información de la línea base

  try {
    const newLineaBase = await createLineaBaseService(bitacoraId, data);
    res.status(201).json({
      message: "Línea Base creada exitosamente",
      lineaBase: newLineaBase,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la Línea Base",
      error: error.message,
    });
  }
};

// Obtener la Línea Base por ID de Bitácora
const getLineaBase = async (req, res) => {
  const { bitacoraId } = req.params;

  try {
    const lineaBase = await getLineaBaseService(bitacoraId);
    res.status(200).json(lineaBase);
  } catch (error) {
    res.status(404).json({
      message: "Línea Base no encontrada",
      error: error.message,
    });
  }
};

// Actualizar la Línea Base
const updateLineaBase = async (req, res) => {
  const { bitacoraId, data } = req.body; // Datos a actualizar
  try {
    const updatedLineaBase = await updateLineaBaseService(bitacoraId, data);
    res.status(200).json({
      message: "Línea Base actualizada exitosamente",
      lineaBase: updatedLineaBase,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar la Línea Base",
      error: error.message,
    });
  }
};

module.exports = {
  createLineaBase: catchAsync(createLineaBase),
  getLineaBase: catchAsync(getLineaBase),
  updateLineaBase: catchAsync(updateLineaBase),
};
