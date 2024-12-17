const { Bitacora, User } = require("../db");

const createBitacoraService = async (data) => {
  const { startDate, day, isActive, participanteId } = data;

  //verificar si el participante existe
  const participante = await User.findByPk(participanteId);
  if (!participante) throw new Error("Participante no encontrado");

  // verificar que el usuario sea un participante
  if (participante.role !== "participante") {
    throw new Error("Este usuario no es participante");
  }
  // Verificar si el participante ya tiene una bitácora
  const existingBitacora = await Bitacora.findOne({
    where: { participanteId, isActive: true },
  });
  if (existingBitacora)
    throw new Error("Este participante ya tiene una bitácora activa.");

  // crear la bitacora
  const bitacora = await Bitacora.create({
    startDate: startDate || new Date(),
    day: day || 1,
    isActive,
    participanteId,
  });
  return bitacora;
};

const getBitacorasService = async () => {
  const bitacoras = await Bitacora.findAll({
    include: [
      {
        model: User,
        as: "participante",
        attributes: ["id", "name", "role"], // Puedes elegir qué atributos mostrar
      },
    ],
  });
  return bitacoras;
};

const getBitacoraByIdService = async (id) => {
  const bitacora = await Bitacora.findByPk(id, {
    include: [
      {
        model: User,
        as: "participante",
        attributes: ["id", "name", "role"],
      },
    ],
  });

  if (!bitacora) {
    throw new Error("Bitácora no encontrada");
  }

  return bitacora;
};

const updateBitacoraService = async (id, data) => {
  const { startDate, day, isActive } = data;

  // Buscar la bitácora por su ID
  const bitacora = await Bitacora.findByPk(id);

  if (!bitacora) {
    throw new Error("Bitácora no encontrada");
  }

  // Actualizar los campos
  bitacora.startDate = startDate || bitacora.startDate;
  bitacora.day = day || bitacora.day;
  bitacora.isActive = isActive !== undefined ? isActive : bitacora.isActive;

  await bitacora.save(); // Guardar los cambios

  return bitacora;
};
const deleteBitacoraService = async (id) => {
  const bitacora = await Bitacora.findByPk(id);

  if (!bitacora) {
    throw new Error("Bitácora no encontrada");
  }

  bitacora.isActive = false;
  await bitacora.save(); // desactivar la bitácora

  return { message: "Bitácora eliminada con éxito" };
};

module.exports = {
  createBitacoraService,
  getBitacorasService,
  getBitacoraByIdService,
  updateBitacoraService,
  deleteBitacoraService,
};
