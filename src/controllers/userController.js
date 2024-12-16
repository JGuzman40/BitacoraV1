const {
  createUserService,
  getUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} = require("../services/userServices");
const catchAsync = require("../utils/catchAsync");

const createUser = async (req, res) => {
  const newUser = await createUserService(req.body);
  res.status(201).json({
    message: "Usuario creado exitosamente",
    user: newUser,
  });
};

const getAllUsers = async (req, res) => {
  const users = await getUsersService();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const user = await getUserByIdService(req.params.id);
  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const updatedUser = await updateUserService(req.params.id, req.body);
  res.status(200).json({
    message: "Usuario actualizado exitosamente",
    user: updatedUser,
  });
};

const deleteUser = async (req, res) => {
  await deleteUserService(req.params.id);
  res.status(200).json({
    message: "Usuario desactivado exitosamente",
  });
};

module.exports = {
  createUser: catchAsync(createUser),
  getAllUsers: catchAsync(getAllUsers),
  getUserById: catchAsync(getUserById),
  updateUser: catchAsync(updateUser),
  deleteUser: catchAsync(deleteUser),
};
