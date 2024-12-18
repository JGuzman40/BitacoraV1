const { Router } = require("express");
const formEstadosController = require("../controllers/formEstadosController");

const router = Router();

router.post("/", formEstadosController.createFormEstados);
router.get("/:lineaBaseId", formEstadosController.getFormEstados);
router.put("/:lineaBaseId", formEstadosController.updateFormEstados);

module.exports = router;
