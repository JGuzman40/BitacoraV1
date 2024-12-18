const {
  createFormEstadosService,
  getFormEstadosService,
  updateFormEstadosService,
} = require("../services/formEstadosServices");
const catchAsync = require("../utils/catchAsync");

const createFormEstados = async (req, res) => {
  const { lineaBaseId, data } = req.body;
  try {
    const newFormEstados = await createFormEstadosService(lineaBaseId, data);
    res.status(201).json({
      message: "Formulario de Estados creado exitosamente",
      formEstados: newFormEstados,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el formulario de estados",
      error: error.message,
    });
  }
};

const getFormEstados = async (req, res) => {
  const { lineaBaseId } = req.params;
  try {
    const formEstados = await getFormEstadosService(lineaBaseId);
    res.status(200).json(formEstados);
  } catch (error) {
    res.status(404).json({
      message: "Formulario de Estados no encontrado",
      error: error.message,
    });
  }
};

const updateFormEstados = async (req, res) => {
  const { lineaBaseId, data } = req.body;
  try {
    const updatedFormEstados = await updateFormEstadosService(
      lineaBaseId,
      data
    );
    res.status(200).json({
      message: "Formulario de estados actualizado",
      formEstados: updatedFormEstados,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el formulario de estados",
      error: error.message,
    });
  }
};

module.exports = {
  createFormEstados: catchAsync(createFormEstados),
  getFormEstados: catchAsync(getFormEstados),
  updateFormEstados: catchAsync(updateFormEstados),
};
