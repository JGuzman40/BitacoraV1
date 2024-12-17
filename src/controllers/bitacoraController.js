const {
  createBitacoraService,
  getBitacorasService,
  getBitacoraByIdService,
  updateBitacoraService,
  deleteBitacoraService,
} = require("../services/bitacoraServices");
const catchAsync = require("../utils/catchAsync");

const createBitacora = async (req, res) => {
  const newBitacora = await createBitacoraService(req.body);
  res.status(201).json({
    message: "Bitácora creada exitosamente",
    bitacora: newBitacora,
  });
};
const getAllBitacoras = async (req, res) => {
  const bitacoras = await getBitacorasService();
  res.status(200).json(bitacoras);
};
const getBitacoraById = async (req, res) => {
  const bitacora = await getBitacoraByIdService(req.params.id);
  res.status(200).json(bitacora);
};
const updateBitacora = async (req, res) => {
  const updatedBitacora = await updateBitacoraService(req.params.id, req.body);
  res.status(200).json({
    message: "Bitacora actualizada exitosamente",
    bitacora: updatedBitacora,
  });
};

const deleteBitacora = async (req, res) => {
  await deleteBitacoraService(req.params.id);
  res.status(200).json({
    message: "Bitácora desactivada exitosamente",
  });
};

module.exports = {
  createBitacora: catchAsync(createBitacora),
  getAllBitacoras: catchAsync(getAllBitacoras),
  getBitacoraById: catchAsync(getBitacoraById),
  updateBitacora: catchAsync(updateBitacora),
  deleteBitacora: catchAsync(deleteBitacora),
};
