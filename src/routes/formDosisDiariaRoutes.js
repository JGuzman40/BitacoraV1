const { Router } = require("express");
const formDosisDiariaController = require("../controllers/formDosisDiariaController");

const router = Router();

router.post("/", formDosisDiariaController.createFormDosisDiaria);
router.get("/:bitacoraId", formDosisDiariaController.getFormDosisDiaria);
router.put("/:id", formDosisDiariaController.updateFormDosisDiaria);

module.exports = router;
