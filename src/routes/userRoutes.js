const { Router } = require("express");
const usersController = require("../controllers/userController");

const router = Router();

router.post("/", usersController.createUser); // Crear usuario
router.get("/", usersController.getAllUsers); // Obtener todos los usuarios
router.get("/:id", usersController.getUserById); // Obtener un usuario por ID
router.put("/:id", usersController.updateUser); // Actualizar usuario
router.delete("/:id", usersController.deleteUser); // Eliminardesactivar un usuario

module.exports = router;
