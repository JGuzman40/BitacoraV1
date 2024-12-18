const {
  createFormDosisDiariaService,
  getFormDosisDiariaService,
  updateFormDosisDiariaService,
} = require("../services/formDosisDiariaServices");
const catchAsync = require("../utils/catchAsync");

const createFormDosisDiaria = async (req, res) => {
  const { bitacoraId, lineaBaseId } = req.body;
  const data = req.body.data;

  try {
    const formDosisDiaria = await createFormDosisDiariaService(
      bitacoraId,
      lineaBaseId,
      data
    );
    res.status(201).json(formDosisDiaria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getFormDosisDiaria = async (req, res) => {
  const { bitacoraId } = req.params;

  try {
    const formDosisDiaria = await getFormDosisDiariaService(bitacoraId);
    res.status(200).json(formDosisDiaria);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateFormDosisDiaria = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedFormDosisDiaria = await updateFormDosisDiariaService(id, data);
    res.status(200).json(updatedFormDosisDiaria);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createFormDosisDiaria: catchAsync(createFormDosisDiaria),
  getFormDosisDiaria: catchAsync(getFormDosisDiaria),
  updateFormDosisDiaria: catchAsync(updateFormDosisDiaria),
};
