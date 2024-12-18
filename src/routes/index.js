const { Router } = require("express");
const userRoutes = require("./userRoutes");
const bitacoraRoutes = require("./bitacoraRoutes");
const formGeneralRoutes = require("./formGeneralRoutes");
const lineaBaseRoutes = require("./lineaBaseRoutes");
const formIntencionRoutes = require("./formIntencionRoutes");
const formElementosRoutes = require("./formElementosRoutes");
const formEstadosRoutes = require("./formEstadosRoutes");

const router = Router();

router.use("/user", userRoutes);
router.use("/bitacora", bitacoraRoutes);
router.use("/form-general", formGeneralRoutes);
router.use("/linea-base", lineaBaseRoutes);
router.use("/form-intencion", formIntencionRoutes);
router.use("/form-elementos", formElementosRoutes);
router.use("/form-estados", formEstadosRoutes);

module.exports = router;
