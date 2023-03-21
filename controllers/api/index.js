const router = require("express").Router();
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");
const categoryRoutes = require("./category-routes");

router.use("/users", userRoutes);
router.use("/location", locationRoutes);
router.use("/category", categoryRoutes);

module.exports = router;
