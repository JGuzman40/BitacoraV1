const {
  createFormElementosService,
  getFormElementosService,
  updateFormElementosService,
} = require("../services/formElementosServices");
const catchAsync = require("../utils/catchAsync");

const createFormElementos = async (req, res) => {
  const { lineaBaseId, data } = req.body;

  try {
    const newFormElementos = await createFormElementosService(
      lineaBaseId,
      data
    );
    res.status(201).json({
      message: "Formulario de Elementos creado exitosamente",
      formElementos: newFormElementos,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el formulario de elementos",
      error: error.message,
    });
  }
};

const getFormElementos = async (req, res) => {
  const { lineaBaseId } = req.params;
  try {
    const formElementos = await getFormElementosService(lineaBaseId);
    res.status(200).json(formElementos);
  } catch (error) {
    res.status(404).json({
      message: "Formulario de elementos no encontrado",
      error: error.message,
    });
  }
};

const updateFormElementos = async (req, res) => {
  const { lineaBaseId, data } = req.body;
  try {
    const updatedFormElementos = await updateFormElementosService(
      lineaBaseId,
      data
    );
    res.status(200).json({
      message: "Formulario de elementos actualizado",
      formElementos: updatedFormElementos,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el formulario de elementos",
      error: error.message,
    });
  }
};

module.exports = {
  createFormElementos: catchAsync(createFormElementos),
  getFormElementos: catchAsync(getFormElementos),
  updateFormElementos: catchAsync(updateFormElementos),
};
