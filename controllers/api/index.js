const router = require("express").Router();
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");

router.use("/users", userRoutes);
router.use("/location", locationRoutes);

module.exports = router;
