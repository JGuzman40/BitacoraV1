const { Router } = require("express");
const userRoutes = require("./userRoutes");
const bitacoraRoutes = require("./bitacoraRoutes");

const router = Router();

router.use("/user", userRoutes);
router.use("/bitacora", bitacoraRoutes);

module.exports = router;
