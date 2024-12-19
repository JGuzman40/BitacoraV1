const { Router } = require("express");
const userRoutes = require("./userRoutes");
const loginRoutes = require("./authRoutes");
const bitacoraRoutes = require("./bitacoraRoutes");
const formGeneralRoutes = require("./formGeneralRoutes");
const lineaBaseRoutes = require("./lineaBaseRoutes");
const formIntencionRoutes = require("./formIntencionRoutes");
const formElementosRoutes = require("./formElementosRoutes");
const formEstadosRoutes = require("./formEstadosRoutes");
const formDosisDiariaRoutes = require("./formDosisDiariaRoutes");

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", loginRoutes);
router.use("/bitacora", bitacoraRoutes);
router.use("/form-general", formGeneralRoutes);
router.use("/linea-base", lineaBaseRoutes);
router.use("/form-intencion", formIntencionRoutes);
router.use("/form-elementos", formElementosRoutes);
router.use("/form-estados", formEstadosRoutes);
router.use("/form-dosis", formDosisDiariaRoutes);

module.exports = router;
