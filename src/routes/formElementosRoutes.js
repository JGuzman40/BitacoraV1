const { Router } = require("express");
const formElementosController = require("../controllers/formElementosController");

const router = Router();

router.post("/", formElementosController.createFormElementos);
router.get("/:lineaBaseId", formElementosController.getFormElementos);
router.put("/:lineaBaseId", formElementosController.updateFormElementos);

module.exports = router;
