const { Router } = require("express");
const lineaBaseController = require("../controllers/lineaBaseController");

const router = Router();

router.post("/", lineaBaseController.createLineaBase);
router.get("/:bitacoraId", lineaBaseController.getLineaBase);
router.put("/:bitacoraId", lineaBaseController.updateLineaBase);

module.exports = router;
