const { where } = require("sequelize");
const { User } = require("../db");
const bcrypt = require("bcryptjs");

const createUserService = async (data) => {
  const { name, email, password, role, isActive } = data;

  // verificar si ya existe el usuario
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser)
    throw new Error("Ya existe un usuario asociado a este e-mail");

  // seguridad
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // creación de un nuevo usuario
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
    isActive,
  });
  return newUser;
};

const getUsersService = async () => {
  return await User.findAll({
    where: {
      isActive: true,
    },
  });
};

const getUserByIdService = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

const updateUserService = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  const { name, email, password, role, isActive } = data;

  if (password) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  }

  user.name = name || user.name;
  user.email = email || user.email;
  user.role = role || user.role;
  user.isActive = isActive !== undefined ? isActive : user.isActive;

  await user.save();
  return user;
};

const deleteUserService = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");
  user.isActive = false;
  await user.save();
};

module.exports = {
  createUserService,
  getUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
};
