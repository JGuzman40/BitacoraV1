const { Router } = require("express");
const formGeneralController = require("../controllers/formGeneralController");

const router = Router();

router.post("/", formGeneralController.createFormGeneral);

router.put("/:id", formGeneralController.updateFormGeneral);

router.get("/:bitacoraId", formGeneralController.getFormGeneral);

module.exports = router;
