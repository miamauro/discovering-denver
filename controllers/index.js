const router = require("express").Router();
const apiRoutes = require("./api/index");
const Review = require("../models/Review");

const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
