const router = require("express").Router();
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");
const categoryRoutes = require("./category-routes");
const reviewRoutes = require("./review-routes");

router.use("/users", userRoutes);
router.use("/location", locationRoutes);
router.use("/category", categoryRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
