const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User, Bitacora } = require("../db");

// Verificar las credenciales del usuario
const loginUserService = async (email, password) => {
  // Buscar usuario por email
  const user = await User.findOne({ where: { email, isActive: true } });

  if (!user) throw new Error("Credenciales incorrectas");

  // Comparar contraseñas
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Credenciales incorrectas");

  const bitacora = await Bitacora.findOne({
    where: { participanteId: user.id },
  });
  const hasBitacora = bitacora ? true : false;

  // Generar token
  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name }, // Payload
    process.env.JWT_SECRET, // Clave secreta
    { expiresIn: "1h" } // Tiempo de expiración
  );

  return { user, token, hasBitacora };
};

module.exports = {
  loginUserService,
};
