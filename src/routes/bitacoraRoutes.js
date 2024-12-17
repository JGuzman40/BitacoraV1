const { Router } = require("express");
const bitacorasController = require("../controllers/bitacoraController");

const router = Router();

router.post("/", bitacorasController.createBitacora);
router.get("/", bitacorasController.getAllBitacoras);
router.get("/:id", bitacorasController.getBitacoraById);
router.put("/:id", bitacorasController.updateBitacora);
router.delete("/:id", bitacorasController.deleteBitacora);

module.exports = router;
