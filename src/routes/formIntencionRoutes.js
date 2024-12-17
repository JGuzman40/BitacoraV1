const { Router } = require("express");
const formIntencionController = require("../controllers/formIntencionController");

const router = Router();

router.post("/", formIntencionController.createFormIntencion);

router.get("/:lineaBaseId", formIntencionController.getFormIntencion);

module.exports = router;
