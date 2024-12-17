const { Router } = require("express");
const userRoutes = require("./userRoutes");
const bitacoraRoutes = require("./bitacoraRoutes");
const formGeneralRoutes = require("./formGeneralRoutes");
const lineaBaseRoutes = require("./lineaBaseRoutes");

const router = Router();

router.use("/user", userRoutes);
router.use("/bitacora", bitacoraRoutes);
router.use("/form-general", formGeneralRoutes);
router.use("/linea-base", lineaBaseRoutes);

module.exports = router;
